// Carga Header y Footer (Mantener esta parte)
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

// --- Lógica del Carrito ---

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
 * Añade un producto al carrito o incrementa su cantidad.
 * @param {Object} producto - El objeto producto a añadir.
 */
function addToCart(producto) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id_producto === producto.id_producto);

    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        // Clonamos el producto y añadimos la propiedad cantidad y selected (para la cesta)
        cart.push({...producto, cantidad: 1, selected: true}); 
    }

    saveCart(cart);
    alert(`"${producto.nombre}" ha sido añadido a la cesta.`);
}

// --- Lógica de Carga y Renderizado del Producto (Ajustada para añadir evento) ---

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

function generateRatingStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<i class="fas fa-star text-warning me-1"></i>'; 
        } else if (i === fullStars && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt text-warning me-1"></i>'; 
        } else {
            starsHtml += '<i class="far fa-star text-warning me-1"></i>'; 
        }
    }
    return starsHtml;
}

function setupAddToCartButton(producto) {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (producto.stock > 0) {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = 'Añadir a la cesta';
        // Añadir el evento click al botón
        addToCartBtn.addEventListener('click', () => addToCart(producto));
    } else {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'AGOTADO';
    }
}

function renderProductDetails(producto) {
    if (!producto) {
        // ... (código para producto no encontrado) ...
        return;
    }

    // ... (código para renderizar detalles) ...
    document.getElementById('product-page-title').textContent = `${producto.nombre} - Novatech`;
    document.getElementById('product-image').src = producto.imagen || '/images/placeholder.jpg';
    document.getElementById('product-category').textContent = producto.categoria;
    document.getElementById('product-brand').textContent = producto.marca;
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-model').textContent = producto.modelo;
    document.getElementById('product-color').textContent = producto.color;
    document.getElementById('product-description').textContent = producto.descripcion;
    document.getElementById('product-price').textContent = formatPrice(producto.precio);
    document.getElementById('product-stock').textContent = producto.stock > 0 ? `Stock: ${producto.stock} unidades` : 'AGOTADO';
    document.getElementById('product-rating').innerHTML = generateRatingStars(producto.valor);

    // Configurar el botón de añadir a la cesta
    setupAddToCartButton(producto); 
}

async function loadProduct() {
    const productId = getProductIdFromUrl();
    
    if (!productId) {
        renderProductDetails(null); 
        return;
    }

    try {
        const response = await fetch('/data/inventario.json');
        const data = await response.json();
        const producto = data.productos.find(p => p.id_producto === parseInt(productId));
        
        renderProductDetails(producto);

    } catch (error) {
        console.error('Error al cargar los detalles del producto:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProduct);