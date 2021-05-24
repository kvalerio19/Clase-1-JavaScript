const list = document.createElement('ul');

const info = document.createElement('p');

const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ipsum officia minima saepe voluptatem aliquam vero explicabo sit magnam sequi, quod aspernatur iusto, rerum nostrum! Ipsam non eaque minus reiciendis!';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite Color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function (event) {
        event.stopPropagation();
        const listContent = prompt ('Change your color');
        this.textContent = listContent;
        


    }
}