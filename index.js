function updateBannerPadding() {
    const header = document.querySelector("header");
    const banner = document.querySelector(".page-banner");
    if (header && banner) {
        banner.style.paddingTop = `${header.offsetHeight}px`;
    }
}

window.addEventListener("DOMContentLoaded", updateBannerPadding);
window.addEventListener("resize", updateBannerPadding);

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.mega-menu');

    let timeout;

    const showMenu = () => {
        clearTimeout(timeout);
        dropdown.classList.add('open');
    };

    const hideMenu = () => {
        timeout = setTimeout(() => {
            dropdown.classList.remove('open');
        }, 200);
    };

    trigger.addEventListener('mouseenter', showMenu);
    trigger.addEventListener('mouseleave', hideMenu);
    menu.addEventListener('mouseenter', showMenu);
    menu.addEventListener('mouseleave', hideMenu);
});

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

class ProductSlider {
    constructor(wrapperElement) {
        this.wrapper = wrapperElement;
        this.slider = wrapperElement.querySelector('.product-slider');
        this.dots = wrapperElement.querySelector('.pagination-dots');
        this.nextBtn = wrapperElement.querySelector('.nxt-btn');
        this.prevBtn = wrapperElement.querySelector('.pre-btn');
        this.currentPage = 0;
        this.itemsPerPage = getItemsPerPage();

        this.attachEvents();
        this.displayItems();
    }

    attachEvents() {
        this.nextBtn.addEventListener('click', () => {
            if ((this.currentPage + 1) * this.itemsPerPage < product.length) {
                this.currentPage++;
                this.displayItems();
            }
        });

        this.prevBtn.addEventListener('click', () => {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.displayItems();
            }
        });

        window.addEventListener('resize', () => {
            const newItemsPerPage = getItemsPerPage();
            if (newItemsPerPage !== this.itemsPerPage) {
                this.itemsPerPage = newItemsPerPage;
                this.currentPage = 0;
                this.displayItems();
            }
        });
    }

    displayItems() {
        const start = this.currentPage * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        const items = product.slice(start, end);

        this.slider.innerHTML = items.map(item => `
            <div class="product-card">
                <div class="product-image">
                    <span class="new-tag">Novo</span>
                    <img class="product-thumb" src="${item.image}" alt="">
                </div>
                <div class="product-info">
                    <h3 class="product-short-description">${item.description}</h3>
                    <div class="price-discount-container">
                        <div class="price-container">
                            <p class="actual-price">R$${item.actualPrice}</p>
                            <p class="price">R$${item.price}</p>
                        </div>
                        <span class="discount-tag">${item.discount}% OFF</span>
                    </div>
                    <p class="installment-info">Ou em até <span class="installment-info-bold">10x de R$ 7,90</span></p>
                    <button class="buy-btn">comprar</button>
                </div>
            </div>
        `).join('');

        this.updateDots();
    }

    updateDots() {
        const totalPages = Math.ceil(product.length / this.itemsPerPage);
        this.dots.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === this.currentPage) dot.classList.add('active');

            dot.addEventListener('click', () => {
                this.currentPage = i;
                this.displayItems();
            });

            this.dots.appendChild(dot);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-slider-wrapper').forEach(wrapper => {
        new ProductSlider(wrapper);
    });
});