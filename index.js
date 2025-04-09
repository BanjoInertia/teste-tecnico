function updateBannerPadding() {
    const header = document.querySelector("header");
    const banner = document.querySelector(".page-banner");
    if (header && banner) {
        banner.style.paddingTop = `${header.offsetHeight}px`;
    }
}

window.addEventListener("DOMContentLoaded", updateBannerPadding);
window.addEventListener("resize", updateBannerPadding);

const product = [
    {
        id: 0,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 1,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 2,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 3,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 4,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 5,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 6,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 7,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 8,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 9,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 10,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 11,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 12,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
    {
        id: 13,
        image: 'assets/productSliderImage.png',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        actualPrice: 100,
        price: 79.90,
        discount: 10,
    },
]

function getItemsPerPage() {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 900) return 2;
    if (width <= 1200) return 3;
    return 5;
}

const categories = [...new Set(product.map((item) => { return item }
))]

let currentPage = 0;
let itemsPerPage = getItemsPerPage();

window.addEventListener('resize', () => {
    const newItemsPerPage = getItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
        itemsPerPage = newItemsPerPage;
        currentPage = 0;
        displayItem();
    }
});

function displayItem() {
    console.log(`Rendering page ${currentPage}, itemsPerPage: ${itemsPerPage}`);
    
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = product.slice(start, end);

    const container = document.getElementById('product-slider');
    container.innerHTML = itemsToDisplay.map((item) => {
        const { image, description, actualPrice, price, discount } = item;
        return `
            <div class="product-card">
                <div class="product-image">
                    <span class="new-tag">Novo</span>
                    <img class="product-thumb" src="${image}" alt="">
                </div>
                <div class="product-info">
                    <h3 class="product-short-description">${description}</h3>
                    <div class="price-discount-container">
                        <div class="price-container">
                            <p class="actual-price">R$${actualPrice}</p>
                            <p class="price">R$${price}</p>
                        </div>
                        <span class="discount-tag">${discount}% OFF</span>
                    </div>
                    <p class="installment-info">Ou em até <span class="installment-info-bold">10x de R$ 7,90</span></p>
                    <button class="buy-btn">comprar</button>
                </div>
            </div>
        `;
    }).join('');

    updateDots();
}

function updateDots() {
    const totalPages = Math.ceil(product.length / itemsPerPage);
    const dotsContainer = document.getElementById('pagination-dots');

    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentPage) dot.classList.add('active');

        dot.addEventListener('click', () => {
            currentPage = i;
            displayItem();
        });

        dotsContainer.appendChild(dot);
    }
}

document.querySelector('.nxt-btn').addEventListener('click', () => {
    if ((currentPage + 1) * itemsPerPage < product.length) {
        currentPage++;
        displayItem();
    }
});

document.querySelector('.pre-btn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayItem();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayItem();
});