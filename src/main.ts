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

    todoList.push(newTodo);

    addNewTodo(newTodo);
    console.log(todoList);
})

const todoList: Todo[] = []

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
}




