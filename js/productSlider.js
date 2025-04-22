import { getItemsPerPage, product } from './utils.js';

export default class ProductSlider {
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
        this.positionButtons();
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
            this.positionButtons();
        });
    }

    positionButtons() {
        const productCards = this.slider.querySelectorAll('.product-card');
        if (productCards.length === 0) return;

        const wrapperRect = this.wrapper.getBoundingClientRect();
        const firstCardRect = productCards[0].getBoundingClientRect();
        const lastCardRect = productCards[productCards.length - 1].getBoundingClientRect();

        const leftOffset = firstCardRect.left - wrapperRect.left;
        const rightOffset = wrapperRect.right - lastCardRect.right;

        this.prevBtn.style.left = `${leftOffset - this.prevBtn.offsetWidth / 2}px`;
        this.nextBtn.style.right = `${rightOffset - this.nextBtn.offsetWidth / 2}px`;
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
                <div>
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
        this.positionButtons();
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