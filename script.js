// Add click event listeners to navigation links
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove default alert
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Handling
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change menu icon
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Smooth scroll to section
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            event.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Product data
const products = [
    {
        name: "Bulldozer Bucket Plus Tips",
        description: "Heavy-duty bucket attachments and replacement tips for various bulldozer models. Engineered for maximum durability and optimal performance.",
        image: "images/product1.jpg"
    },
    {
        name: "Cylinder Head",
        description: "Premium quality cylinder heads for heavy equipment engines. Precision-engineered for perfect fit and long-lasting performance.",
        image: "images/product2.jpg"
    },
    {
        name: "Air Filters",
        description: "High-efficiency air filtration systems for heavy machinery. Ensures clean air intake and optimal engine performance.",
        image: "images/product3.jpg"
    },
    {
        name: "Oil Filters",
        description: "Advanced oil filtration solutions for all types of heavy equipment. Protects engines by removing harmful contaminants.",
        image: "images/product4.jpg"
    },
    {
        name: "Hydraulic Cartridge",
        description: "Precision-engineered hydraulic cartridges for various applications. Ensures smooth and reliable hydraulic system operation.",
        image: "images/product5.jpg"
    },
    {
        name: "Hydraulic Pump Parts",
        description: "Comprehensive range of hydraulic pump components. Built for reliability and consistent performance.",
        image: "images/product6.jpg"
    },
    {
        name: "Electrical Parts",
        description: "Wide selection of electrical components for heavy equipment. From starters to sensors, we have all your electrical needs covered.",
        image: "images/product7.jpg"
    },
    {
        name: "Undercarriage",
        description: "Complete undercarriage solutions and components. Designed for maximum durability in tough conditions.",
        image: "images/product8.jpg"
    },
    {
        name: "Turbo Charger",
        description: "High-performance turbochargers for enhanced engine power and efficiency. Built to exact specifications.",
        image: "images/product9.jpg"
    },
    {
        name: "Pumps",
        description: "Various types of pumps for different applications. From water pumps to fuel pumps, ensuring reliable fluid transfer.",
        image: "images/product10.jpg"
    },
    {
        name: "Oil Cooler",
        description: "Efficient oil cooling solutions for optimal temperature control. Prevents overheating and extends equipment life.",
        image: "images/product11.jpg"
    },
    {
        name: "Ground Equipment Tools",
        description: "Essential tools and equipment for ground operations. Quality tools for maintenance and repair work.",
        image: "images/product12.jpg"
    },
    {
        name: "Engine Parts",
        description: "Comprehensive range of engine components. From pistons to valves, all parts meet OEM specifications.",
        image: "images/product13.jpg"
    },
    {
        name: "Alternator",
        description: "High-output alternators for reliable power generation. Built for durability and consistent performance.",
        image: "images/product14.jpg"
    },
    {
        name: "Water Pump",
        description: "Reliable water pumps for cooling systems. Ensures proper temperature regulation in heavy equipment.",
        image: "images/product15.jpg"
    },
    {
        name: "Breaker Chisel",
        description: "Heavy-duty breaker chisels for demolition work. Manufactured from hardened steel for maximum durability.",
        image: "images/product16.jpg"
    },
    {
        name: "Seal Kits",
        description: "Complete seal kit solutions for hydraulic systems. Prevents leaks and ensures proper system operation.",
        image: "images/product17.jpg"
    },
    {
        name: "Radiator and Cores",
        description: "High-performance radiators and cores for efficient cooling. Custom solutions for various equipment types.",
        image: "images/product18.jpg"
    },
    {
        name: "Air Compressor",
        description: "Industrial-grade air compressors for heavy equipment. Reliable compressed air supply for various applications.",
        image: "images/product19.jpg"
    },
    {
        name: "AC Compressor and Components",
        description: "Complete AC system solutions for operator comfort. Including compressors and all related components.",
        image: "images/product20.jpg"
    },
    {
        name: "Engine Gasket",
        description: "High-quality engine gaskets for all applications. Ensures proper sealing and prevents leaks.",
        image: "images/product21.jpg"
    }
];

// Function to create product cards
function createProductCards() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return; // Safety check

    productGrid.innerHTML = ''; // Clear existing cards
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Create image with error handling
        const img = new Image();
        img.src = product.image;
        img.alt = product.name;
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Product image not available';
        };
        
        card.innerHTML = `
            <div class="product-image">
                ${img.outerHTML}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}

// Initialize product cards when the page loads
document.addEventListener('DOMContentLoaded', createProductCards);

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});
