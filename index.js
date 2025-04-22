
import { updateBannerPadding, updateAllSubmenuHeights } from './js/layoutUtils.js';
import DropdownMenu from './js/dropdownMenu.js';
import categoriesDropdownSubmenu from './js/categoriesSubmenu.js';
import ProductSlider from './js/productSlider.js';
import NewsletterForm from './js/newsletterForm.js';
import Accordion from './js/accordion.js';

window.addEventListener("DOMContentLoaded", () => {
    updateBannerPadding();
    updateAllSubmenuHeights();
    DropdownMenu();
    categoriesDropdownSubmenu();
    NewsletterForm();
    Accordion();

    document.querySelectorAll('.product-slider-wrapper').forEach(wrapper => {
        new ProductSlider(wrapper);
    });
});

window.addEventListener("resize", () => {
    updateBannerPadding();
    updateAllSubmenuHeights();
});