import './style.css';
import uniqid from 'uniqid'

const form = document.querySelector('.new-todo-form') as HTMLFormElement;
const input = document.querySelector('.new-todo-input') as HTMLInputElement;
const list = document.querySelector('.list') as HTMLUListElement;

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input?.value == '' || input?.value == null) return

    const newTodo: Todo = {
        id: uniqid(),
        title: input.value,
    }

    addNewTodo(newTodo);
    input.value = '';
})

type Todo = {
    id: string,
    title: string,
}

function addNewTodo(theTodo: Todo) {
    const newTodo = document.createElement('li');
    const todoLabel = document.createElement('label');
    todoLabel.textContent = theTodo.title; 
    newTodo.append(todoLabel);
    list?.append(newTodo);
    renderTodoButtons(theTodo, newTodo);
}

function deleteTodo(e: Event) {
    let targetTodo = e.target as HTMLButtonElement;
    let todoParent = targetTodo.parentElement;
    todoParent?.remove();
}

function editTodo(theTodo: Todo, parent: HTMLLIElement, button: HTMLButtonElement) {
    const editInput = document.createElement('input');
    parent.appendChild(editInput);
    editInput.value = theTodo.title;
    const saveEditButton = document.createElement('button');
    saveEditButton.textContent = 'Save';
    parent.appendChild(saveEditButton);
    button.remove();

    saveEditButton.addEventListener('click', () => {
        parent.textContent = editInput.value;
        theTodo.title = editInput.value;
        renderTodoButtons(theTodo, parent);
    })
}

function renderTodoButtons(theTodo: Todo, parent: HTMLLIElement) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Todo';
    parent.appendChild(deleteButton);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Todo'
    parent.appendChild(editButton);

    deleteButton.addEventListener('click', (e) => {
        deleteTodo(e);
    })

    editButton.addEventListener('click', () => {
        editTodo(theTodo, parent, editButton);
    })
}




