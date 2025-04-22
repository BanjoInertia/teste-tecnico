export default function DropdownMenu() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const trigger = dropdown.querySelector(':scope > .dropdown-trigger');
        const menu = dropdown.querySelector(':scope > .mega-menu,:scope > .categories-mega-menu');

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

        if (trigger) {
            trigger.addEventListener('mouseenter', showMenu);
            trigger.addEventListener('mouseleave', hideMenu);
        }
        if (menu) {
            menu.addEventListener('mouseenter', showMenu);
            menu.addEventListener('mouseleave', hideMenu);
        }
    });
}