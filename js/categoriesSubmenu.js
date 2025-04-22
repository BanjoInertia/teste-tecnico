export default function categoriesDropdownSubmenu() {
    const triggers = document.querySelectorAll('.has-submenu');
    const submenu = document.querySelector('.department-dropdown-container');

    let isHoveringTrigger = false;
    let isHoveringSubmenu = false;

    if (submenu) {
        const showSubmenu = () => {
            submenu.innerHTML = `
                <li><h4>Categoria</h4><ul><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li></ul></li>
                <li><h4>Categoria</h4><ul><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li></ul></li>
                <li><h4>Categoria</h4><ul><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li><li>Categoria</li></ul></li>
            `;
        };

        const hideSubmenu = () => {
            if (!isHoveringTrigger && !isHoveringSubmenu) {
                submenu.innerHTML = '';
            }
        };

        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                isHoveringTrigger = true;
                showSubmenu();
            });

            trigger.addEventListener('mouseleave', () => {
                isHoveringTrigger = false;
                setTimeout(hideSubmenu, 100);
            });
        });

        submenu.addEventListener('mouseenter', () => {
            isHoveringSubmenu = true;
        });

        submenu.addEventListener('mouseleave', () => {
            isHoveringSubmenu = false;
            setTimeout(hideSubmenu, 100);
        });
    }
}