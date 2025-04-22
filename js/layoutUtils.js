export function updateBannerPadding() {
    const header = document.querySelector("header");
    const banner = document.querySelector(".page-banner");
    if (header && banner) {
        banner.style.paddingTop = `${header.offsetHeight}px`;
    }
}

export function updateAllSubmenuHeights() {
    const megaMenu = document.querySelector(".mega-menu, .categories-mega-menu");
    const subMenus = document.querySelectorAll(".submenu");

    if (megaMenu && subMenus.length > 0) {
        const targetHeight = megaMenu.offsetHeight - 40;

        subMenus.forEach(subMenu => {
            subMenu.style.height = `${targetHeight}px`;
        });
    }
}