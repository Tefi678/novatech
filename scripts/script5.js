// Carga Header y Footer
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

const SHIPPING_COST = 20.00; // Costo de envío fijo en BOB

/**
 * Obtiene el carrito de localStorage o inicializa uno vacío.
 * @returns {Array} Lista de productos en el carrito.
 */
function getCart() {
    const cart = localStorage.getItem('novatechCart');
    return cart ? JSON.parse(cart) : [];
}

/**
 * Guarda el carrito en localStorage.
 * @param {Array} cart - Lista de productos.
 */
function saveCart(cart) {
    localStorage.setItem('novatechCart', JSON.stringify(cart));
}

/**
 * Formatea un número como moneda boliviana (BOB).
 * @param {number} price - El precio a formatear.
 * @returns {string} El precio formateado.
 */
function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

/**
 * Actualiza el carrito después de un cambio (cantidad, selección, eliminación).
 * @param {number} productId - ID del producto.
 * @param {string} action - 'quantity', 'select', 'remove'.
 * @param {number | boolean} value - Nuevo valor (cantidad o estado de selección).
 */
function updateCart(productId, action, value) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id_producto === productId);

    if (index === -1) return;

    if (action === 'remove') {
        cart.splice(index, 1);
    } else if (action === 'quantity') {
        cart[index].cantidad = Math.max(1, parseInt(value)); // Mínimo 1 unidad
    } else if (action === 'select') {
        cart[index].selected = value;
    }

    saveCart(cart);
    renderCart(); // Volver a renderizar después de la actualización
}

/**
 * Renderiza un artículo individual del carrito.
 * @param {Object} item - Objeto del producto en el carrito.
 * @returns {string} HTML del artículo.
 */
function renderCartItem(item) {
    const subtotal = item.precio * item.cantidad;
    const isSelected = item.selected ? 'checked' : '';

    return `
        <div class="d-flex cart-item align-items-center border-bottom py-3" data-id="${item.id_producto}">
            <div class="flex-shrink-0 me-3">
                <input class="form-check-input product-select-checkbox" type="checkbox" value="" ${isSelected} 
                       data-id="${item.id_producto}" aria-label="Seleccionar producto">
            </div>
            <div class="flex-shrink-0 me-3">
                <img src="${item.imagen || '/images/placeholder.jpg'}" alt="${item.nombre}" class="product-img rounded">
            </div>
            <div class="flex-grow-1">
                <h6 class="mb-0 fw-bold text-truncate" style="max-width: 90%;">${item.nombre}</h6>
                <small class="text-muted">${item.modelo} | ${item.color}</small>
            </div>
            
            <div class="d-flex align-items-center mx-4">
                <input type="number" class="form-control form-control-sm text-center quantity-input" 
                       value="${item.cantidad}" min="1" max="${item.stock}" style="width: 60px;" 
                       data-id="${item.id_producto}" aria-label="Cantidad">
            </div>

            <div class="text-end">
                <span class="fw-bold d-block">${formatPrice(subtotal)}</span>
                <a href="#" class="text-danger small remove-item-btn" data-id="${item.id_producto}">
                    <i class="bi bi-trash me-1"></i> Quitar
                </a>
            </div>
        </div>
    `;
}

/**
 * Renderiza todo el carrito y actualiza el resumen.
 */
function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    const emptyMessage = document.getElementById('empty-cart-message');

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        updateSummary(0, 0); // Limpia el resumen
        return;
    }
    
    emptyMessage.style.display = 'none';
    container.innerHTML = cart.map(renderCartItem).join('');

    // --- CÁLCULO DEL RESUMEN ---
    let totalItems = 0;
    let subtotal = 0;
    
    // Solo contar y sumar los productos seleccionados
    const selectedItems = cart.filter(item => item.selected);
    
    selectedItems.forEach(item => {
        totalItems += item.cantidad;
        subtotal += item.precio * item.cantidad;
    });

    updateSummary(totalItems, subtotal);
    attachEventListeners();
}

/**
 * Actualiza la sección de resumen del checkout.
 * @param {number} totalItems - Cantidad total de artículos seleccionados.
 * @param {number} subtotal - Subtotal de los artículos seleccionados.
 */
function updateSummary(totalItems, subtotal) {
    const total = subtotal > 0 ? subtotal + SHIPPING_COST : 0;
    const checkoutBtn = document.getElementById('checkout-btn');
    const shippingDisplay = document.getElementById('summary-shipping');

    document.getElementById('item-count').textContent = getCart().length; // Total de items en el carrito (para el título)
    document.getElementById('summary-item-count').textContent = totalItems;
    document.getElementById('summary-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('summary-total').textContent = formatPrice(total);
    document.getElementById('checkout-total-display').textContent = formatPrice(total);
    shippingDisplay.textContent = subtotal > 0 ? formatPrice(SHIPPING_COST) : formatPrice(0);
    
    // Habilitar/Deshabilitar botón de pago
    checkoutBtn.disabled = totalItems === 0;
    checkoutBtn.style.backgroundColor = totalItems > 0 ? '#0d6efd' : '#6c757d'; // Color primario si activo, gris si inactivo
    checkoutBtn.style.color = 'white';
}

/**
 * Adjunta los event listeners a los controles del carrito.
 */
function attachEventListeners() {
    // 1. Botones de Quitar
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.currentTarget.dataset.id);
            if (confirm('¿Estás seguro de que quieres quitar este artículo?')) {
                updateCart(id, 'remove');
            }
        });
    });

    // 2. Campo de Cantidad
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateCart(id, 'quantity', e.target.value);
        });
    });

    // 3. Checkbox de Selección
    document.querySelectorAll('.product-select-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateCart(id, 'select', e.target.checked);
        });
    });
    
    // 4. Formulario de Checkout
    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
}

/**
 * Maneja el evento de envío del formulario de checkout.
 * @param {Event} e - Evento de formulario.
 */
function handleCheckout(e) {
    e.preventDefault();

    const cart = getCart();
    const selectedItems = cart.filter(item => item.selected);

    if (selectedItems.length === 0) {
        alert('Tu cesta está vacía. Por favor, añade productos para pagar.');
        return;
    }

    const email = document.getElementById('checkoutEmail').value;
    const total = parseFloat(document.getElementById('summary-total').textContent.replace(' BOB', '').replace('.', '').replace(',', '.'));
    
    // Simulación de proceso de pago exitoso
    
    alert(`¡Compra Exitosa! 🎉\n\nTotal pagado: ${formatPrice(total)}.\n\nSe enviará la confirmación a ${email}.\n¡Gracias por tu compra en Novatech!`);
    
    // Vaciar solo los productos seleccionados y recargar el carrito
    const remainingItems = cart.filter(item => !item.selected);
    saveCart(remainingItems);
    renderCart();

    // Opcional: Redirigir al usuario a una página de agradecimiento
    // window.location.href = 'gracias.html';
}

// Inicializar la cesta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});