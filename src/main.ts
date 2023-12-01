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
})

type Todo = {
    id: string,
    title: string,
}

function addNewTodo(theTodo: Todo) {
    const newTodo = document.createElement('li');
    const todoLabel = document.createElement('label');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Todo';
    todoLabel.textContent = theTodo.title; 
    newTodo.append(todoLabel);
    newTodo.appendChild(deleteButton);
    list?.append(newTodo);

    deleteButton.addEventListener('click', (e) => {
        deleteTodo(e);
    })
}

function deleteTodo(e: Event) {
    let targetTodo = e.target as HTMLButtonElement;
    let todoParent = targetTodo.parentElement;
    todoParent?.remove();
}




