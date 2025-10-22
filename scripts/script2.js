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
    
const productos = [
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
    "id_producto": 3,
    "nombre": "Monitor Dell UltraSharp 27 4K USB-C Hub",
    "modelo": "U2723QE",
    "marca": "Dell",
    "descripcion": "Monitor de 27 pulgadas, resolución 4K UHD (3840x2160), 60Hz, Panel IPS Black, con concentrador USB-C que ofrece hasta 90W Power Delivery.",
    "color": "PLATEADO/NEGRO",
    "precio": 4621.57,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/monitor-3.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 4,
    "nombre": "Monitor Profesional ASUS ProArt Display 32\"",
    "modelo": "PA32UCXR",
    "marca": "ASUS",
    "descripcion": "Monitor profesional Mini LED de 32 pulgadas, 4K UHD, 1600 nits de brillo máximo, 2304 zonas de atenuación local, 97% DCI-P3, puertos Thunderbolt 4.",
    "color": "NEGRO",
    "precio": 24360.00,
    "stock": 5,
    "valor": 0,
    "imagen": "/images/monitor-4.png",
    "categoria": "Monitores"
  },
  {
    "id_producto": 5,
    "nombre": "Monitor Gaming Samsung Odyssey G7 32\"",
    "modelo": "Odyssey G7 (G70A)",
    "marca": "Samsung",
    "descripcion": "Monitor Gaming plano de 32 pulgadas, resolución 4K UHD (3840x2160), 144Hz, 1ms (GtG), G-Sync Compatible, DisplayHDR 400. Panel IPS.",
    "color": "NEGRO",
    "precio": 4859.04,
    "stock": 8,
    "valor": 0,
    "imagen": "/images/monitor-5.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 6,
    "nombre": "Monitor Dell 24\"",
    "modelo": "P2422H",
    "marca": "Dell",
    "descripcion": "Monitor de productividad de 24 pulgadas, resolución Full HD (1920x1080), Panel IPS, 60Hz, diseño de bisel fino, ergonomía total.",
    "color": "NEGRO",
    "precio": 1218.00,
    "stock": 30,
    "valor": 0,
    "imagen": "/images/monitor-6.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 7,
    "nombre": "Monitor LG UltraWide 34\"",
    "modelo": "34WP65C-B",
    "marca": "LG",
    "descripcion": "Monitor UltraWide Curvo de 34 pulgadas, resolución WFHD (2550x1080), Panel VA, 1ms MBR, 75Hz, HDR10, AMD FreeSync. Ideal para multitarea.",
    "color": "NEGRO",
    "precio": 2227.20,
    "stock": 18,
    "valor": 0,
    "imagen": "/images/monitor-7.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 8,
    "nombre": "Monitor Gaming ASUS TUF 24\"",
    "modelo": "VG249Q1A",
    "marca": "ASUS",
    "descripcion": "Monitor Gaming de 23.8 pulgadas, resolución Full HD (1920x1080), Panel IPS, 165Hz (OC), 1ms MPRT, Extreme Low Motion Blur (ELMB).",
    "color": "NEGRO",
    "precio": 1113.53,
    "stock": 25,
    "valor": 0,
    "imagen": "/images/monitor-8.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 9,
    "nombre": "Monitor Curvo Samsung M7 Smart Monitor 32\"",
    "modelo": "Smart M7 (M70B)",
    "marca": "Samsung",
    "descripcion": "Smart Monitor de 32 pulgadas, resolución 4K UHD, 60Hz. Funcionalidad Smart TV integrada, aplicaciones de streaming, DeX inalámbrico, control remoto.",
    "color": "BLANCO/PLATA",
    "precio": 2776.04,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/monitor-9.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 10,
    "nombre": "Monitor BenQ MOBIUZ 27\"",
    "modelo": "EX2710U",
    "marca": "BenQ",
    "descripcion": "Monitor Gaming de 27 pulgadas, resolución 4K UHD (3840x2160), Panel IPS, 144Hz, 1ms MPRT, HDRi y altavoces treVolo 2.1 integrados.",
    "color": "GRIS OSCURO/NEGRO",
    "precio": 5559.04,
    "stock": 7,
    "valor": 0,
    "imagen": "/images/monitor-10.jpg",
    "categoria": "Monitores"
  },
  {
    "id_producto": 11,
    "nombre": "Razer BlackShark V2",
    "modelo": "BlackShark V2",
    "marca": "Razer",
    "descripcion": "Audífonos gaming con sonido envolvente 7.1, micrófono extraíble, almohadillas de espuma viscoelástica.",
    "color": "NEGRO, VERDE, ROSA",
    "precio": 476.00,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/audifono-1.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 12,
    "nombre": "TAGRY",
    "modelo": "TAGRY T8",
    "marca": "TAGRY",
    "descripcion": "Auriculares Bluetooth, diseño ergonómico, buena duración de batería, micrófono incorporado.",
    "color": "NEGRO, BLANCO",
    "precio": 686.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/audifono-2.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 13,
    "nombre": "SteelSeries Arctis Nova 1",
    "modelo": "Arctis Nova 1",
    "marca": "SteelSeries",
    "descripcion": "Sonido de alta fidelidad, micrófono ClearCast, diseño ligero y cómodo, compatible con múltiples plataformas.",
    "color": "NEGRO, GRIS",
    "precio": 826.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/audifono-3.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 14,
    "nombre": "BENGOO G9000",
    "modelo": "G9000",
    "marca": "BENGOO",
    "descripcion": "Audífonos gaming con sonido estéreo, micrófono ajustable, diseño ergonómico, iluminación LED.",
    "color": "AZUL, NEGRO, VERDE, NARANJA, ROSA",
    "precio": 406.00,
    "stock": 40,
    "valor": 0,
    "imagen": "/images/audifono-4.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 15,
    "nombre": "BERIBES",
    "modelo": "B-1",
    "marca": "BERIBES",
    "descripcion": "Auriculares con sonido claro, diseño plegable, micrófono integrado, ideal para llamadas y música.",
    "color": "BLANCO, NEGRO, VERDE, NARANJA ROJO, ROSA",
    "precio": 350.00,
    "stock": 30,
    "valor": 0,
    "imagen": "/images/audifono-5.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 16,
    "nombre": "Razer Kraken V3",
    "modelo": "Kraken V3",
    "marca": "Razer",
    "descripcion": "Audio envolvente THX, micrófono mejorado, almohadillas de gel refrigerante, personalización RGB.",
    "color": "VERDE, AZUL",
    "precio": 1300.00,
    "stock": 4,
    "valor": 0,
    "imagen": "/images/audifono-6.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 17,
    "nombre": "Logitech G",
    "modelo": "G432",
    "marca": "Logitech",
    "descripcion": "Sonido envolvente DTS, micrófono giratorio, almohadillas de cuero sintético, compatible con múltiples plataformas.",
    "color": "NEGRO",
    "precio": 532.00,
    "stock": 7,
    "valor": 0,
    "imagen": "/images/audifono-7.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 18,
    "nombre": "Razer Kraken Kitty V3",
    "modelo": "Kraken Kitty V3",
    "marca": "Razer",
    "descripcion": "Sonido envolvente THX, micrófono retractable, iluminación RGB personalizable, diseño cómodo.",
    "color": "NEGRO, ROSA, BLANCO",
    "precio": 1700.00,
    "stock": 5,
    "valor": 0,
    "imagen": "/images/audifono-8.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 19,
    "nombre": "Corsair HS65 Surround",
    "modelo": "HS65 Surround",
    "marca": "Corsair",
    "descripcion": "Audio envolvente 7.1, micrófono omnidireccional, almohadillas de espuma viscoelástica, compatible con PC y consolas.",
    "color": "NEGRO, GRIS",
    "precio": 966.00,
    "stock": 9,
    "valor": 0,
    "imagen": "/images/audifono-9.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 20,
    "nombre": "SENZER SG600",
    "modelo": "SG600",
    "marca": "SENZER",
    "descripcion": "Sonido estéreo, micrófono ajustable, diseño cómodo, ideal para gaming y multimedia.",
    "color": "NEGRO",
    "precio": 224.00,
    "stock": 20,
    "valor": 0,
    "imagen": "/images/audifono-10.jpg",
    "categoria": "Audifonos"
  },
  {
    "id_producto": 21,
    "nombre": "Laptop HP 14\" (AMD)",
    "modelo": "HP 14\" (AMD)",
    "marca": "HP",
    "descripcion": "Windows 11** Hasta procesador AMD Ryzen™ serie 7 7730U11. Pantalla IPS Quad HD de 14\". Hasta 16 GB de RAM DDR4. Gráficos AMD Radeon™. Hasta 512GB de almacenamiento. Wi-Fi 6 y Bluetooth® 5.4. Cámara Full HD con reducción de ruido.",
    "color": "GRIS, AZUL OSCURO",
    "precio": 4599.00,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/laptop-1.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 22,
    "nombre": "Laptop HP 15.6\" (AMD)",
    "modelo": "HP 15.6\" (AMD)",
    "marca": "HP",
    "descripcion": "Windows 11** Hasta procesador AMD Ryzen™ serie 7 7730U11. Pantalla táctil IPS Full HD de 15.6\". Hasta 16 GB de RAM DDR4. Gráficos AMD Radeon™. Hasta 1 TB SSD PCIe NVMe. Wi-Fi 6 y Bluetooth® 5.3. Cámara Full HD.",
    "color": "GRIS, BLANCO, PALO DE ROSA, CELESTE GRISÁCEO",
    "precio": 9439.00,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/laptop-2.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 23,
    "nombre": "Laptop HP OmniBook 5 16\" Next Gen con IA (AMD)",
    "modelo": "HP OmniBook 5",
    "marca": "HP",
    "descripcion": "Windows 11** Hasta AMD Ryzen™ AI 752. Pantalla de 16\" 2K. Hasta 32 GB LPDDR5x. Gráficos AMD Radeon™ 860M. SSD PCIe Gen4 NVMe M.2 de hasta 1 TB. Tecla Copilot.",
    "color": "GRIS",
    "precio": 32350.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-3.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 24,
    "nombre": "Notebook ASUS FA506NC-HN006",
    "modelo": "ASUS FA506NC-HN006",
    "marca": "ASUS",
    "descripcion": "Pantalla FHD 15.6\" 1920x1080. AMD Ryzen 5 7535HS 4.55GHz. 8GB LPDDR5X. 512GB SSD M.2. GPU NVIDIA GeForce RTX 3050 4GB. Wi-Fi 6, Bluetooth 5.3. Teclado retroiluminado. FreeDos. Batería 3 celdas.",
    "color": "NEGRO GRAFITO",
    "precio": 14999.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-4.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 25,
    "nombre": "HP OmniBook 5 Flip de 14\"",
    "modelo": "HP OmniBook 5 Flip",
    "marca": "HP",
    "descripcion": "Windows 11** Hasta Intel® Core™ 755. Pantalla multitáctil 14\" 2K. Hasta 24 GB LPDDR5. Gráficos Intel® opcionales. SSD PCIe Gen4 NVMe M.2 de hasta 1 TB. Tecla Copilot.",
    "color": "GRIS, CELESTE CIELO",
    "precio": 21780.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-5.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 26,
    "nombre": "HP OmniBook 7 de 17.3\" Next Gen AI",
    "modelo": "HP OmniBook 7",
    "marca": "HP",
    "descripcion": "Windows 11 Home** Intel® Core™ Ultra 7 258V. Pantalla táctil 17.3\" Full HD. Hasta 32 GB LPDDR5x-8533 MHz. GPU NVIDIA® GeForce RTX™ 4050. SSD hasta 2 TB. Wi-Fi 7 y Bluetooth® 5.4. Cámara IR 5MP. HP Fast Charge.",
    "color": "GRIS",
    "precio": 25330.00,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/laptop-6.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 27,
    "nombre": "OMEN 16 2023 (INTEL)",
    "modelo": "OMEN",
    "marca": "HP",
    "descripcion": "Windows 11** Intel® Core™ 9-14900HX. Pantalla IPS 16\" QHD 240 Hz. Hasta 32 GB DDR5. GPU NVIDIA® GeForce RTX™ 4080 (12 GB). SSD PCIe NVMe 2 TB.",
    "color": "NEGRO",
    "precio": 14940.00,
    "stock": 12,
    "valor": 0,
    "imagen": "/images/laptop-7.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 28,
    "nombre": "OMEN TRANSCEND 14 2024 (INTEL)",
    "modelo": "OMEN",
    "marca": "HP",
    "descripcion": "Windows 11** Intel® Core™ Ultra 9 185H. Pantalla 2.8K OLED 14\". Hasta 32 GB LPDDR5x-7467 MHz. GPU NVIDIA® GeForce RTX™ 4070 (8 GB). SSD PCIe Gen4 NVMe 2 TB.",
    "color": "NEGRO, BLANCO",
    "precio": 15390.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-8.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 29,
    "nombre": "OMEN MAX 16 GAMING LAPTOP (INTEL)",
    "modelo": "OMEN",
    "marca": "HP",
    "descripcion": "Windows 11** Intel® Core™ Ultra 9 275HX. Pantalla OLED 16\" WQXGA 240 Hz. Hasta 64 GB DDR5. GPU NVIDIA® GeForce RTX™ 5090 (24 GB). SSD PCIe NVMe 2 TB.",
    "color": "NEGRO, BLANCO",
    "precio": 41600.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-9.png",
    "categoria": "Laptops"
  },
  {
    "id_producto": 30,
    "nombre": "OMEN 16 2023 (AMD/NVIDIA)",
    "modelo": "OMEN",
    "marca": "HP",
    "descripcion": "Windows 11** AMD Ryzen™ 9 7940HS. Pantalla 16.1\" IPS antirreflejante. Hasta 32 GB DDR5. GPU NVIDIA® GeForce RTX™ 4080 (12 GB). SSD PCIe NVMe 2 TB.",
    "color": "NEGRO",
    "precio": 27420.00,
    "stock": 10,
    "valor": 0,
    "imagen": "/images/laptop-10.png",
    "categoria": "Laptops"
  },
  {
        "id_producto": 31,
        "nombre": "Teclado Multimedia Delux KA180",
        "modelo": "KA180",
        "marca": "Delux",
        "descripcion": "Teclado con cable USB. 104 teclas estándar + 12 teclas multimedia. Compatible con Win XP, W7, W8, W10 y W11. Dimensiones: 439,20*141,5*25,50 mm.",
        "color": "NEGRO",
        "precio": 160.00 / 8,
        "stock": 15,
        "valor": 0,
        "imagen": "/images/teclado-1.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 32,
        "nombre": "Teclado USB Havit KB376 Español",
        "modelo": "KB376",
        "marca": "Havit",
        "descripcion": "Teclado en español con 104 teclas. Interfaz USB 2.0. Plug and play, resistente al agua. Dimensiones: 41×12×1,8 cm.",
        "color": "NEGRO",
        "precio": 107.64 / 8, // Bs.107,64 / 8 = USD 13.455
        "stock": 20,
        "valor": 0,
        "imagen": "/images/teclado-2.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 33,
        "nombre": "Teclado Gaming Cronex Gárgola GK-B1",
        "modelo": "GK-B1 (Gárgola)",
        "marca": "Cronex",
        "descripcion": "Teclado Gaming con iluminación LED Rainbow. Teclas resistentes al desgaste (barniz UV). Conexión USB de alta respuesta y teclas multimedia.",
        "color": "NEGRO",
        "precio": 115.00 / 8, // Bs.115,00 / 8 = USD 14.375
        "stock": 10,
        "valor": 0,
        "imagen": "/images/teclado-3.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 34,
        "nombre": "Teclado Multimedia SURE KB 8151",
        "modelo": "KB 8151",
        "marca": "SURE",
        "descripcion": "Diseño Windows M.E. 9 teclas de acceso rápido a Internet y multimedia. Puerto PS/2 (asumo USB o combo por compatibilidad moderna). Compatible con sistemas operativos antiguos y modernos.",
        "color": "NEGRO",
        "precio": 70.00 / 8, // Bs.70.00 / 8 = USD 8.75
        "stock": 35,
        "valor": 0,
        "imagen": "/images/teclado-4.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 35,
        "nombre": "Teclado GENIUS Slimstar M200",
        "modelo": "Slimstar M200",
        "marca": "GENIUS",
        "descripcion": "Elegante teclado multimedia con teclas 'chocolate' para uso en oficina. Conexión USB plug & play, cable de 1.5 M. 12 teclas multimedia.",
        "color": "NEGRO",
        "precio": 120.00 / 8, // Bs.120.00 / 8 = USD 15.00
        "stock": 25,
        "valor": 0,
        "imagen": "/images/teclado-5.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 36,
        "nombre": "ROWELL MULTIMEDIA KEYBOARD (Español)",
        "modelo": "ROW-M-K",
        "marca": "ROWELL",
        "descripcion": "Teclado multimedia en español. 107 teclas + 8 multimedia. Completo con teclado numérico. Diseño Super Slim, a prueba de derrames. Conexión USB, cable de 1.2m.",
        "color": "NEGRO",
        "precio": 70.00 / 8, // Bs.70.00 / 8 = USD 8.75
        "stock": 30,
        "valor": 0,
        "imagen": "/images/teclado-6.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 37,
        "nombre": "Teclado Inalámbrico Logitech K230",
        "modelo": "K230",
        "marca": "Logitech",
        "descripcion": "Teclado inalámbrico compacto. Conectividad Wireless 2.4 GHz (10m alcance) con nano receptor Logitech Unifying. Incluye 2 baterías AAA.",
        "color": "NEGRO",
        "precio": 250.00 / 8, // Bs.250,00 / 8 = USD 31.25
        "stock": 18,
        "valor": 0,
        "imagen": "/images/teclado-7.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 38,
        "nombre": "Teclado LOGITECH KEYBOARD K120",
        "modelo": "K120",
        "marca": "Logitech",
        "descripcion": "Teclado con cable USB, diseño resistente a salpicaduras. Teclas cóncavas y numérico. 51% de plástico reciclado. Ideal para oficina.",
        "color": "NEGRO",
        "precio": 119.00 / 8, // 119,00 Bs. / 8 = USD 14.875
        "stock": 40,
        "valor": 0,
        "imagen": "/images/teclado-8.jpg",
        "categoria": "Teclados"
    },
    {
        "id_producto": 39,
        "nombre": "Teclado Mecánico CORSAIR K70 CORE RGB",
        "modelo": "K70 CORE RGB",
        "marca": "Corsair",
        "descripcion": "Teclado mecánico full-size con retroiluminación RGB por tecla. Interruptores Corsair MLX Red lineales. Chasis de aluminio, rueda multifunción y espuma interna. Cable USB-C a USB-A.",
        "color": "NEGRO",
        "precio": 800.90 / 8, // 800,90 bs / 8 = USD 100.1125
        "stock": 7,
        "valor": 0,
        "imagen": "/images/teclado-9.jpg",
        "categoria": "Teclados"
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
];

function formatPrice(price) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'BOB', 
        minimumFractionDigits: 2
    }).format(price);
}

// FUNCIÓN PRINCIPAL PARA RENDERIZAR LOS PRODUCTOS USANDO BOOTSTRAP CARDS
function renderizarProductos() {
    const productGrid = document.getElementById('product-grid');
    
    if (!productGrid) return; 

    productGrid.innerHTML = ''; 

    // Usaremos la clase 'row' de Bootstrap en el contenedor
    productGrid.classList.add('row', 'g-4'); 

    productos.forEach(producto => {
        // 1. Contenedor de columna de Bootstrap para la responsividad
        // col-12: 1 columna en móvil | col-sm-6: 2 columnas en sm | col-lg-4: 3 columnas en lg | col-xl-3: 4 columnas en xl
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'col-xl-3');
        colDiv.setAttribute('data-category', producto.categoria.toLowerCase());
        colDiv.setAttribute('data-id', producto.id_producto);
        
        // 2. Elemento Card de Bootstrap
        const card = document.createElement('div');
        card.classList.add('card', 'h-100', 'product-card-custom'); // h-100 para que todas las cards tengan la misma altura

        // 3. Imagen del producto
        const imagePath = producto.imagen ? `${producto.imagen}` : 'images/placeholder.jpg'; 
        const img = document.createElement('img');
        img.src = imagePath; 
        img.alt = producto.nombre; 
        img.classList.add('card-img-top', 'product-img-custom');
        
        // 4. Contenido del cuerpo de la Card
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column');
        
        // 5. Categoría (usamos un small text)
        const categorySmall = document.createElement('small');
        categorySmall.classList.add('text-muted', 'card-category-custom');
        categorySmall.textContent = producto.categoria;
        
        // 6. Nombre (título de la card)
        const nameH5 = document.createElement('h5');
        nameH5.classList.add('card-title', 'product-name-custom', 'mb-2');
        nameH5.textContent = producto.nombre;

        // 7. Descripción (opcional, solo el modelo)
        const modelP = document.createElement('p');
        modelP.classList.add('card-text', 'product-model-custom', 'text-truncate'); // text-truncate para evitar desbordamiento
        modelP.textContent = `Modelo: ${producto.modelo}`;

        // 8. Precio (destacado)
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('mt-auto', 'pt-2'); // mt-auto empuja el precio y el botón hacia abajo
        
        const priceH4 = document.createElement('h4');
        priceH4.classList.add('price-custom', 'text-primary'); // Clase Bootstrap y personalizada
        priceH4.textContent = formatPrice(producto.precio);
        priceDiv.appendChild(priceH4);

        // 9. Botón de Detalles (MODIFICADO)
        const detailsLink = document.createElement('a');
        
        // **Nueva URL para la página de detalles**
        // Redirige a producto.html y adjunta el id_producto como parámetro de consulta
        detailsLink.href = `producto.html?id=${producto.id_producto}`; 
        
        detailsLink.classList.add('btn', 'btn-info', 'w-100', 'btn-product-details'); // Cambiado a 'btn-info' para distinguirlo
        detailsLink.textContent = 'Detalles'; // **Cambiado de 'Agregar al carrito' a 'Detalles'**
        
        // Ensamblar el cuerpo de la card
        cardBody.appendChild(categorySmall); 
        cardBody.appendChild(nameH5);
        cardBody.appendChild(modelP);
        cardBody.appendChild(priceDiv);
        cardBody.appendChild(detailsLink); // Usamos el nuevo link de detalles
        
        // Ensamblar la card
        card.appendChild(img);
        card.appendChild(cardBody);
        
        // Ensamblar la columna
        colDiv.appendChild(card);
        
        // Agregar la columna al grid
        productGrid.appendChild(colDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProductos);