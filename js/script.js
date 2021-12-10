let listsParent = Array.from(document.querySelectorAll('.ltrbjsparent'))
let lists = Array.from(document.querySelectorAll('.ltrbjs'));
let counter = 0.10;

listsParent.forEach(el => {
    el.addEventListener('mouseover', function () {
        let links = Array.from(el.querySelectorAll('.submenu-link'))
        links.forEach(item => {
            if (item.classList.contains('td10')) {
                item.classList.remove('td10');
            }
        })
    })
    el.addEventListener('mouseout', function () {
        let links = Array.from(el.querySelectorAll('.submenu-link'))
        links.forEach(item => {
            if (!item.classList.contains('td10')) {
                item.classList.add('td10');
            }
        })
    })
})

lists.forEach(el => {
    let items = Array.from(el.children);

    items.forEach(item => {
        item.style['transition-delay'] = counter + 's';
        counter += 0.05;
    })
    counter = counter - (el.children.length / 10) / 2 + 0.05;
})