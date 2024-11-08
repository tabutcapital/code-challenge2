let shoppingList = [];

const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');
const clearButton = document.getElementById('clearButton');


if (localStorage.getItem('shoppingList')) {
    shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    renderList();
}

addButton.addEventListener('click', () => {
    const newItem = inputField.value.trim();
    if (newItem !== '') {
        shoppingList.push(newItem);
        inputField.value = '';
        renderList();
        saveToLocalStorage();
    }
});

itemList.addEventListener('click', (event) => {
    const targetElement = event.target;
    const targetItem = event.target;
    if (targetItem.tagName === 'LI') {
        targetItem.classList.toggle('purchased');
        saveToLocalStorage();
    }
});


clearButton.addEventListener('click', () => {
    shoppingList = [];
    renderList();
    saveToLocalStorage();
});

function renderList() {
    itemList.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        if (localStorage.getItem(`item_${index}_purchased`) === 'true') {
            listItem.classList.add('purchased');
        }
        itemList.appendChild(listItem);
    });
}



function saveToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    shoppingList.forEach((item, index) => {
        localStorage.setItem(`item_${index}_purchased`, itemList.children[index].classList.contains('purchased'));
    });
}




