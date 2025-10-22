/* script6.js */

// Importa el array de productos (copiado del script de tu index para que esta página funcione)
const productos = [
    // ... [Aquí debe ir TODO el array 'productos' que tienes en tu script principal] ...
    // Lo incluyo aquí para fines de ejemplo y funcionamiento, pero en un proyecto real,
    // podrías usar un archivo JSON o una API.
    // **Asegúrate de copiar aquí el ARRAY COMPLETO DE PRODUCTOS**
    {
        "id_producto": 1,
        "nombre": "Monitor Curvo Samsung Odyssey G5 27\"",
        "modelo": "Odyssey G5 (C27G55T)",
        "marca": "Samsung",
        "descripcion": "Monitor Gaming Curvo 1000R de 27 pulgadas, resolución WQHD (2560x1440), 144Hz, 1ms, FreeSync Premium. Tecnología de panel VA.",
        "color": "NEGRO",
        "precio": 1870.44,
        "stock": 15,
        "valor": 0,
        "imagen": "/images/monitor-1.jpg",
        "categoria": "Monitores"
    },
    {
        "id_producto": 2,
        "nombre": "Monitor Gaming LG UltraGear 27\"",
        "modelo": "27GN800-B",
        "marca": "LG",
        "descripcion": "Monitor Gaming de 27 pulgadas, Panel IPS, resolución QHD (2560x1440), 144Hz, 1ms (GtG), compatible con NVIDIA G-Sync y AMD FreeSync Premium, HDR10.",
        "color": "NEGRO/ROJO",
        "precio": 2497.44,
        "stock": 20,
        "valor": 0,
        "imagen": "/images/monitor-2.jpg",
        "categoria": "Monitores"
    },
    {
        "id_producto": 40,
        "nombre": "Teclado Mecánico CORSAIR K70 — CHERRY® MX Red",
        "modelo": "K70 CHERRY MX Red",
        "marca": "Corsair",
        "descripcion": "Teclado mecánico con switches Cherry MX Red. Retroiluminación LED roja. Chasis de aluminio anodizado. 100% NKRO. Controles multimedia dedicados y reposamuñecas extraíble.",
        "color": "NEGRO",
        "precio": 1310.01 / 8,
        "stock": 5,
        "valor": 0,
        "imagen": "/images/teclado-10.jpg",
        "categoria": "Teclados"
    }
    // ... (Añadir el resto de los 40 productos aquí) ...
];


// Función para obtener el parámetro de la URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    // Devuelve el ID como número entero (base 10)
    return parseInt(params.get('id'), 10);
}

// Función para formatear el precio (BOB es la moneda de tu script anterior)
function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

// Función principal para cargar y renderizar el producto
function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = productos.find(p => p.id_producto === productId);

    const container = document.querySelector('.product-container');
    
    if (!product) {
        // Manejar el caso de producto no encontrado
        if (container) {
            container.innerHTML = '<div class="error-message">Producto no encontrado. Verifique el ID.</div>';
        }
        return;
    }

    // --- Inyectar los detalles en el HTML ---
    
    // 1. Imagen y título
    const imageContainer = document.querySelector('.product-image');
    const imageElement = imageContainer.querySelector('img');
    imageElement.src = product.imagen.startsWith('/') ? product.imagen : `/${product.imagen}`;
    imageElement.alt = product.nombre;

    // 2. Detalles
    const detailsContainer = document.querySelector('.product-details');
    detailsContainer.querySelector('h1').textContent = product.nombre;
    
    // Crear el subtítulo del modelo/marca
    let modelH2 = detailsContainer.querySelector('h2');
    if (!modelH2) {
        modelH2 = document.createElement('h2');
        detailsContainer.insertBefore(modelH2, detailsContainer.querySelector('p'));
    }
    modelH2.textContent = `${product.marca} - Modelo: ${product.modelo}`;


    // 3. Descripción y detalles adicionales
    detailsContainer.querySelector('p').textContent = product.descripcion;
    
    // Crear la caja de info (Categoría y Color)
    let infoBox = document.getElementById('product-info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'product-info-box';
        infoBox.classList.add('info-box');
        // Insertar después de la descripción (p)
        detailsContainer.insertBefore(infoBox, detailsContainer.querySelector('.price'));
    }
    infoBox.innerHTML = `
        <span>Categoría: ${product.categoria}</span>
        <span>Color: ${product.color}</span>
    `;
    
    // 4. Stock
    let stockStatus = detailsContainer.querySelector('.stock-status');
    if (!stockStatus) {
        stockStatus = document.createElement('div');
        stockStatus.classList.add('stock-status');
        detailsContainer.insertBefore(stockStatus, detailsContainer.querySelector('.price'));
    }
    if (product.stock > 0) {
        stockStatus.textContent = `En stock: ${product.stock} unidades`;
        stockStatus.classList.add('in-stock');
        stockStatus.classList.remove('out-of-stock');
    } else {
        stockStatus.textContent = 'Agotado temporalmente';
        stockStatus.classList.add('out-of-stock');
        stockStatus.classList.remove('in-stock');
        document.querySelector('.add-to-cart-btn').style.display = 'none'; // Ocultar el botón si no hay stock
    }

    // 5. Precio
    detailsContainer.querySelector('.price').textContent = formatPrice(product.precio);
    
    // 6. Configurar el botón de Añadir a la Cesta
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const checkoutForm = document.getElementById('checkout-form');
    
    if (addToCartBtn) {
        // Limpiar el evento anterior si existe
        addToCartBtn.removeEventListener('click', showCheckoutForm);

        // Ocultar el botón si ya está visible el formulario o si no hay stock
        if (product.stock > 0) {
             addToCartBtn.addEventListener('click', showCheckoutForm);
        } else {
             addToCartBtn.style.display = 'none';
        }
    }
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
    const cardNumber = form['card-number'].value.replace(/\s/g, ''); // Quitar espacios
    const expMonth = form['exp-month'].value;
    const expYear = form['exp-year'].value;
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
        // Simulación de respuesta exitosa
        feedback.textContent = '¡Compra exitosa! Su pedido ha sido procesado.';
        feedback.classList.remove('error');
        feedback.classList.add('success');
        
        form.reset(); // Limpiar formulario
        document.querySelector('.add-to-cart-btn').style.display = 'none'; // Ocultar botón y form
        document.getElementById('checkout-form').style.display = 'none';
        
        // Simular reducción de stock (solo en frontend, no persistente)
        const productId = getProductIdFromUrl();
        const product = productos.find(p => p.id_producto === productId);
        if (product) {
            product.stock -= 1;
            loadProductDetails(); // Re-renderizar para actualizar el estado del stock
        }

    }, 2000);
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Cargar Header y Footer (fetch simulación)
    fetch('header.html').then(response => response.text()).then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

    // Añadir el formulario de compra dinámicamente
    const detailsContainer = document.querySelector('.product-details');
    if (detailsContainer) {
        detailsContainer.insertAdjacentHTML('beforeend', `
            <div id="checkout-form" class="checkout-form">
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
                    <div id="feedback-message" class="feedback-message"></div>
                </form>
            </div>
        `);

        document.getElementById('purchase-form').addEventListener('submit', handlePurchase);
    }
    
    // Cargar los detalles del producto después de que el HTML esté listo
    loadProductDetails();
});