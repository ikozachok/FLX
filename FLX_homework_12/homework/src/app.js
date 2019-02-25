const rootNode = document.getElementById('root');
const todolist = rootNode.querySelector('#todolist');
const minInputLength = 0;
const randomLimit = 10000;

const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');

const getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

const getItem = (id) => {
    const todos = getTodos();
    return todos.find((item) => item.id === id);
}

const addItem = (text) => {
    const todos = getTodos();

    todos.push(
        {
            id: 'todo' + Math.floor(Math.random() * randomLimit),
            text,
            complited: false
        }
    );

    saveTodos(todos);
    renderList(todos);
}

const removeItem = (id) => {
    const todos = getTodos();
    saveTodos(todos.filter((todo) => todo.id !== id));
}

const compliteItem = (id) => {
    let todos = getTodos();
    let todo = getItem(id);

    todos = todos.filter((todo) => todo.id !== id);

    todos.push({
        id: todo.id,
        text: todo.text,
        complited: true
    })

    saveTodos(todos);
}

const updateItem = (id, text) => {
    let todos = getTodos();
    todos = todos.map((item) => {
        if (item.id === id) {
            return {
                    id: item.id,
                    text: text,
                    complited: item.complited
                }
        }

        return item;
    });

    saveTodos(todos);
    renderList();
}

const sortList = (todos) => {
    return todos.sort((a, b) => a.complited - b.complited);
}

const renderItem = (todo) => {
    const newItem = document.createElement('li');

    newItem.dataset.id = todo.id
    newItem.classList.add('todolist-item');
    if (todo.complited) {
        newItem.classList.add('checked');
        newItem.innerHTML += '<img class="todolist-status" src="assets/img/done-s.png">';
        newItem.innerHTML += `<a href="#">${todo.text}</a>`;
    } else {
        newItem.innerHTML += '<img class="todolist-status" src="assets/img/todo-s.png">';
        newItem.innerHTML += `<a href="#/modify/${todo.id}">${todo.text}</a>`;
    }
    newItem.innerHTML += '<img class="todolist-delete" src="assets/img/remove-s.jpg">';

    return newItem;
}

const renderList = () => {
    const todosOrigin = getTodos();
    const todos = sortList(todosOrigin);

    todolist.innerHTML = '';

    if (todos && todos.length) {
        todos.forEach((item) => {
            const newItem = renderItem(item);
            todolist.appendChild(newItem);
        });
    } else {
        todolist.innerHTML = 'TODO is empty';
    }

    initEvents();
}

document.getElementById('add-new-input').onkeyup = (event) => {
    if (event.target.value.length > minInputLength) {
        document.getElementById('save').classList.remove('save-input-disabled');
    } else {
        document.getElementById('save').classList.add('save-input-disabled');
    }
}

document.getElementById('save').onclick = (event) => {
    if (event.currentTarget.classList.contains('save-input-disabled')) {
        return false;
    }

    const input = document.getElementById('add-new-input');

    location.hash = '';
    addItem(input.value);

    input.value = '';
    document.getElementById('save').classList.add('save-input-disabled');
}

const initEvents = () => {
    const todoItems = document.querySelectorAll('.todolist-item');
    todoItems.forEach((todo) => {
        const checkbox = todo.querySelector('.todolist-status');
        const deleteIcon = todo.querySelector('.todolist-delete');

        checkbox.onclick = (event) => {
            const parent = event.currentTarget.parentNode;
            compliteItem(parent.dataset.id);
            renderList();
        }

        deleteIcon.onclick = (event) => {
            const parent = event.currentTarget.parentNode;
            removeItem(parent.dataset.id);
            renderList();
        }
    });
}

const buttonAdd = document.querySelector('#add');
const buttonCancel = document.querySelectorAll('.cancel-input');

buttonAdd.onclick = function(event) {
    location.hash = '#/add';
}

buttonCancel.forEach((item) => {
    item.onclick = function(event) {
        location.hash = '';
    }
});

const buttonSave = document.querySelector('#save');

const hashHandler = () => {
    const minusOne = -1;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';

    if (location.hash === '#/add') {
        page2.style.display = 'block';
    } else if (location.hash.indexOf('#/modify') > minusOne) {
        const id = location.hash.replace('#/modify/', '');
        const input = document.getElementById('change-input');
        const todo = getItem(id);
        input.value = todo.text;

        document.querySelector('.update-input').onclick = (event) => {
            updateItem(id, input.value);
            location.hash = '';
            renderList();
        }
        page3.style.display = 'block';
    } else {
        page1.style.display = 'block';
    }
}

renderList();
hashHandler();

window.onhashchange = hashHandler;