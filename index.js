
import { updateBannerPadding, updateAllSubmenuHeights } from './js/layoutUtils.js';
import DropdownMenu from './js/dropdownMenu.js';
import categoriesDropdownSubmenu from './js/categoriesSubmenu.js';
import ProductSlider from './js/productSlider.js';
import NewsletterForm from './js/newsletterForm.js';
import Accordion from './js/accordion.js';
import generateDepartmentMenus from './js/menuGenerator.js';

window.addEventListener("DOMContentLoaded", () => {
    updateBannerPadding();
    updateAllSubmenuHeights();
    categoriesDropdownSubmenu();
    NewsletterForm();
    Accordion();
    generateDepartmentMenus(8);
    DropdownMenu();

    document.querySelectorAll('.product-slider-wrapper').forEach(wrapper => {
        new ProductSlider(wrapper);
    });
});

window.addEventListener("resize", () => {
    updateBannerPadding();
    updateAllSubmenuHeights();
});