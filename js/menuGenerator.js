export default function generateDepartmentMenus(
    numberOfCopies,
    templateSelector = '.department-menu-template',
    menuContainerSelector = '.menu'
) {
    const templateMenuItem = document.querySelector(`${menuContainerSelector} ${templateSelector}`);
    const menuList = document.querySelector(menuContainerSelector);

    for (let i = 0; i < numberOfCopies; i++) {
        const menuClone = templateMenuItem.cloneNode(true);
        menuClone.classList.remove(templateSelector.substring(1));

        const triggerP = menuClone.querySelector('.dropdown-trigger');
        if (triggerP) {
            triggerP.textContent = `Departamento ${i + 1}`;
        }

        const headerStrong = menuClone.querySelector('.dropdown-header strong');
        if (headerStrong) {
            headerStrong.textContent = `Departamento ${i + 1}`;
        }

        menuList.appendChild(menuClone);
    }
}
