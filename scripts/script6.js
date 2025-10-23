let productos = []; 

// Función para obtener el parámetro de la URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// Función para formatear el precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

// Función principal para cargar y renderizar el producto
function loadProductDetails() {
    // **NOTA:** 'productos' ahora es el array de objetos gracias a la corrección en el fetch
    const productId = getProductIdFromUrl();
    // Usa find() en el array
    const product = productos.find(p => p.id_producto === productId);

    const container = document.querySelector('.product-container');
    
    if (!product) {
        if (container) {
            container.innerHTML = '<div class="error-message">Producto no encontrado. Verifique el ID o la carga del inventario.</div>';
        }
        return;
    }

    // --- Inyectar los detalles en el HTML (Lógica ya revisada y OK) ---
    const imageContainer = document.querySelector('.product-image');
    const imageElement = imageContainer.querySelector('img');
    imageElement.src = product.imagen.startsWith('/') ? product.imagen : `/${product.imagen}`;
    imageElement.alt = product.nombre;

    const detailsContainer = document.querySelector('.product-details');
    detailsContainer.querySelector('h1').textContent = product.nombre;
    
    let modelH2 = detailsContainer.querySelector('h2');
    if (!modelH2) {
        modelH2 = document.createElement('h2');
        detailsContainer.insertBefore(modelH2, detailsContainer.querySelector('p'));
    }
    modelH2.textContent = `${product.marca} - Modelo: ${product.modelo}`;

    detailsContainer.querySelector('p').textContent = product.descripcion;
    
    let infoBox = document.getElementById('product-info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'product-info-box';
        infoBox.classList.add('info-box');
        detailsContainer.insertBefore(infoBox, detailsContainer.querySelector('.price'));
    }
    infoBox.innerHTML = `
        <span>Categoría: ${product.categoria}</span>
        <span>Color: ${product.color}</span>
    `;
    
    let stockStatus = detailsContainer.querySelector('.stock-status');
    if (stockStatus) stockStatus.remove();

    stockStatus = document.createElement('div');
    stockStatus.classList.add('stock-status');
    detailsContainer.insertBefore(stockStatus, detailsContainer.querySelector('.price'));
    
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    if (product.stock > 0) {
        stockStatus.textContent = `En stock: ${product.stock} unidades`;
        stockStatus.classList.add('in-stock');
        stockStatus.classList.remove('out-of-stock');
        if (addToCartBtn) addToCartBtn.style.display = 'inline-flex';
    } else {
        stockStatus.textContent = 'Agotado temporalmente';
        stockStatus.classList.add('out-of-stock');
        stockStatus.classList.remove('in-stock');
        if (addToCartBtn) addToCartBtn.style.display = 'none';
    }

    detailsContainer.querySelector('.price').textContent = formatPrice(product.precio);
}

// Función para mostrar el formulario de compra
function showCheckoutForm(e) {
    e.preventDefault();
    const checkoutForm = document.getElementById('checkout-form');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    if (checkoutForm.style.display === 'block') {
        checkoutForm.style.display = 'none';
        addToCartBtn.textContent = 'Añadir a la cesta';
    } else {
        checkoutForm.style.display = 'block';
        addToCartBtn.textContent = 'Ocultar Formulario';
    }
}

// Función para validar y procesar el formulario
function handlePurchase(e) {
    e.preventDefault();
    
    const form = e.target;
    const feedback = document.getElementById('feedback-message');
    
    // 1. Validación básica de campos
    const email = form.email.value;
    const address = form.address.value;
    const cardNumber = form['card-number'].value.replace(/\s/g, '');
    const cvv = form.cvv.value;
    
    if (!email || !address || cardNumber.length !== 16 || cvv.length !== 3) {
        feedback.textContent = 'Por favor, complete todos los campos correctamente. El número de tarjeta debe tener 16 dígitos y el CVV 3.';
        feedback.classList.remove('success');
        feedback.classList.add('error');
        feedback.style.display = 'block';
        return;
    }
    
    // 2. Simulación de la compra
    feedback.textContent = 'Procesando pago...';
    feedback.classList.remove('error');
    feedback.classList.add('success');
    feedback.style.display = 'block';

    setTimeout(() => {
        feedback.textContent = '¡Compra exitosa! Su pedido ha sido procesado.';
        feedback.classList.remove('error');
        feedback.classList.add('success');
        
        form.reset();
        
        document.getElementById('checkout-form').style.display = 'none';
        document.querySelector('.add-to-cart-btn').textContent = 'Añadir a la cesta';
        
        // Simular reducción de stock y re-renderizar
        const productId = getProductIdFromUrl();
        const product = productos.find(p => p.id_producto === productId);
        if (product) {
            product.stock -= 1;
            loadProductDetails();
        }

    }, 2000);
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Cargar Header (simulación)
    fetch('header.html').then(response => response.text()).then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = data;
        }
    });
    
    // 1. Añadir el formulario de compra dinámicamente
    const detailsContainer = document.querySelector('.product-details');
    if (detailsContainer) {
        detailsContainer.insertAdjacentHTML('beforeend', `
            <div id="checkout-form" class="checkout-form" style="display:none;">
                <h3>Finalizar Compra</h3>
                <form id="purchase-form">
                    <div class="form-group">
                        <label for="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Dirección de Envío:</label>
                        <input type="text" id="address" name="address" required>
                    </div>
                    
                    <h4>Detalles de Pago (Simulación)</h4>
                    <div class="form-group">
                        <label for="card-number">Número de Tarjeta (16 dígitos):</label>
                        <input type="text" id="card-number" name="card-number" pattern="[0-9]{16}" maxlength="16" required>
                    </div>
                    
                    <div class="grid-2">
                        <div class="form-group">
                            <label for="exp-month">Mes Exp:</label>
                            <input type="text" id="exp-month" name="exp-month" pattern="(0[1-9]|1[0-2])" maxlength="2" placeholder="MM" required>
                        </div>
                        <div class="form-group">
                            <label for="exp-year">Año Exp:</label>
                            <input type="text" id="exp-year" name="exp-year" pattern="[0-9]{4}" maxlength="4" placeholder="AAAA" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" pattern="[0-9]{3}" maxlength="3" required>
                    </div>

                    <button type="submit" class="btn-purchase">Pagar Ahora</button>
                    <div id="feedback-message" class="feedback-message" style="display:none;"></div>
                </form>
            </div>
        `);

        // Configurar el manejador del formulario de compra
        const purchaseForm = document.getElementById('purchase-form');
        if (purchaseForm) {
            purchaseForm.addEventListener('submit', handlePurchase);
        }
    }
    
    // 2. Cargar el inventario (fetch) y luego cargar los detalles del producto
    const jsonFilePath = './data/inventario.json'; // Ruta asumida como correcta

    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el inventario: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // *** CORRECCIÓN CRÍTICA AQUÍ ***
            // Rellenar la variable global 'productos' con el ARRAY DENTRO de la clave 'productos'
            productos = data.productos; 
            
            // Una vez que los datos están cargados, renderizar los detalles
            loadProductDetails();
            
            // Configurar el evento del botón Añadir a la Cesta
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', showCheckoutForm);
            }
        })
        .catch(error => {
            console.error("Error fatal al cargar o procesar el inventario:", error);
            const container = document.querySelector('.product-container');
            if (container) {
                container.innerHTML = `<div class="error-message">Error: No se pudo cargar la información del inventario. (${error.message})</div>`;
            }
        });
});