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
const productos = [];

function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-list > div[data-category]');
    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'; // Oculta los que no coinciden
        }
    });
}

function renderizarProductos() {
    const productGrid = document.getElementById('product-grid');
    
    if (!productGrid) return; 

    productGrid.innerHTML = ''; 
    productGrid.classList.add('row', 'g-4'); 

    productos.forEach(producto => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'col-xl-3');
        colDiv.setAttribute('data-category', producto.categoria.toLowerCase()); 
        colDiv.setAttribute('data-id', producto.id_producto);
        const card = document.createElement('div');
        card.classList.add('card', 'h-100', 'product-card-custom');
        const imagePath = producto.imagen ? `${producto.imagen}` : 'images/placeholder.jpg'; 
        const img = document.createElement('img');
        img.src = imagePath; 
        img.alt = producto.nombre; 
        img.classList.add('card-img-top', 'product-img-custom');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column');
        const categorySmall = document.createElement('small');
        categorySmall.classList.add('text-muted', 'card-category-custom');
        categorySmall.textContent = producto.categoria;
        const nameH5 = document.createElement('h5');
        nameH5.classList.add('card-title', 'product-name-custom', 'mb-2');
        nameH5.textContent = producto.nombre;
        const modelP = document.createElement('p');
        modelP.classList.add('card-text', 'product-model-custom', 'text-truncate'); 
        modelP.textContent = `Modelo: ${producto.modelo}`;
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('mt-auto', 'pt-2');
        const priceH4 = document.createElement('h4');
        priceH4.classList.add('price-custom', 'text-primary'); 
        priceH4.textContent = formatPrice(producto.precio);
        priceDiv.appendChild(priceH4);
        const detailsLink = document.createElement('a');
        detailsLink.href = `producto.html?id=${producto.id_producto}`; 
        detailsLink.classList.add('btn', 'btn-info', 'w-100', 'btn-product-details');
        detailsLink.textContent = 'Detalles';
        cardBody.appendChild(categorySmall); 
        cardBody.appendChild(nameH5);
        cardBody.appendChild(modelP);
        cardBody.appendChild(priceDiv);
        cardBody.appendChild(detailsLink); 
        card.appendChild(img);
        card.appendChild(cardBody);
        colDiv.appendChild(card);
        productGrid.appendChild(colDiv);
    });
}

function setupCategoryFilter() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedCategory = e.target.getAttribute('data-category');
            filterProducts(selectedCategory);
            categoryList.querySelectorAll('li').forEach(li => {
                li.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
}
async function loadProducts() {
    try {
        const response = await fetch('/data/inventario.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        productos.push(...data.productos);
        renderizarProductos();
        setupCategoryFilter();
        
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});