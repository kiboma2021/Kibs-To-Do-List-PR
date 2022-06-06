import updateLocal from './status_update.js'
import { editTodo,removeTodo } from './update.js'
const todoList = document.querySelector('#display-list');

const myTodoList = [];
//Get data from local storage
const getFromLocal = () => {
  const data = JSON.parse(localStorage.getItem('List'));
  data.map (i => {
    myTodoList.push(i);
    const toDocontainer = document.createElement('div');
    toDocontainer.className = 'toDocontainer';
    toDocontainer.innerHTML += `
    <input type="checkbox" class="checkbox">
    <span class="description">${i.description}</span>
    <span class="edit-to-do"> <i class="fa fa-ellipsis-v"></i></span>
    <span class="remove-icon"><i class="fa fa-trash-alt" ></i></span>
    `
    todoList.appendChild(toDocontainer);

    //Edit todo list
    const editIcons = document.querySelectorAll('.edit-to-do');
    editIcons.forEach (i => {
      i.addEventListener('click', () => {
        i.parentElement.classList.add('checkedContainer');
        editTodo(toDocontainer, i.previousElementSibling);
      })
    })
  })
  //Get the checkbox
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(i => {
    i.addEventListener('change', () => {
      i.parentElement.classList.toggle('checkedContainer');
      i.nextElementSibling.classList.toggle('check-to-do');
      i.parentElement.lastElementChild.classList.toggle('trash-active');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disabled');
      updateLocal();
    })
  })

  //Remove from the list
  const removeList = document.querySelectorAll('.remove-icon');
  removeList.forEach (i => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    })
  })

  //Now send data to local storage
  localStorage.setItem('List',JSON.stringify(myTodoList));
}

export default getFromLocal;