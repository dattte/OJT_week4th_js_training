function renderDeepMenu(menuList) {
    return `<ul class="menu">
        ${ menuList.map(menu =>
                `<li class="menu__item">
                    <a href='${ menu.link }' class="menu-item${ menu?.subTitle ? ' -has-sub' : ''}${ menu?.isActive ? ' -active' : '' }${ menu?.children ? ' -has-child' : '' }">
                        <div class="menu-item__icon">
                            <i class="${ menu.icon }"></i>
                        </div>
                        <div class="menu-item__content">
                            <h2>${ menu.title }</h2>
                            ${ menu?.subTitle ? `<p>${ menu.subTitle }</p>` : ''}
                        </div>
                    </a>
                    ${ menu?.children ? `<div class="menu-item__children">${ renderDeepMenu(menu.children) }</div>` : ''}
                </li>`
        ).join('')}
    </ul>`
}

function renderSearch() {
    return `<li class="menu__item">
                <div class="menu-item__search">
                    <div class="search__item">
                        <input type="text" name="search" id="search">
                    </div>

                    <div class="search__icon">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </li>
    `
}

document.querySelector('.root').innerHTML = renderDeepMenu(deepMenu);
document.querySelector('.menu').innerHTML += renderSearch();
