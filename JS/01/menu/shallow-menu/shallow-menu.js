function renderShallowMenu(menuList) {
    return `<ul class="menu">
        ${ menuList.map(menu =>
                `<li class="menu__item" onClick="handleClick(event)">
                    <a class="menu-item${ menu?.children ? ' -has-child' : '' }">
                        ${ menu?.icon ? `<div class="menu-item__icon"><i class="${ menu.icon }"></i></div>` : '' }
                        
                        <div class="menu-item__content">
                            <p>${ menu.title }</p>
                        </div>
                        ${ menu?.children ? '<span class="menu-item__arrow"><i class="fas fa-chevron-up"></i></span>' : '' }
                    </a>
                    ${ menu?.children ? `<div class="menu-item__children">${ renderShallowMenu(menu.children) }</div>` : ''}
                </li>`
        ).join('')}
    </ul>`
}

function handleClick(event) {
    event.preventDefault();
    document.querySelectorAll('.-has-child').forEach(actived => {
        actived.classList.remove('active');
    })
    const ele = event.currentTarget;
    ele.querySelector('.-has-child').classList.add('active')
}

document.querySelector('.root').innerHTML = renderShallowMenu(shallowMenu);
