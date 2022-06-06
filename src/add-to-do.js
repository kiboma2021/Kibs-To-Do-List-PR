import updateLocal from './status_update.js'
import { editTodo,removeTodo } from './update.js'

const todoList = document.querySelector('#display-list');

//Template class object
class myObject {
  constructor (description, complited, index) {
    this.description = description;
    this.complited = complited;
    this.index = index;
  }
}

const myTodoList = [];

const addTodo = toDovalue => {
  const toDocontainer = document.createElement('div');
  toDocontainer.className = 'toDocontainer';
  toDocontainer.innerHTML += `
  <input type="checkbox" class="checkbox">
  <span>${toDovalue}</span>
  <span class="edit-to-do"> <i class="fa fa-ellipsis-v"></i></span>
  <span class="remove-icon"><i class="fa fa-trash-alt" ></i></span>
  `
  todoList.appendChild(toDocontainer);


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
  
  //Add items to Local Storage
  const object = new myObject (toDovalue, false, checkbox.length )
  myTodoList.push(object);
  localStorage.setItem ('List', JSON.stringify(myTodoList));

  //Edit todo list
  const editIcons = document.querySelectorAll('.edit-to-do');
  editIcons.forEach (i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.add('checkedContainer');
      editTodo(toDocontainer, i.previousElementSibling);
    })
  })

  //Remove from the list
  const removeList = document.querySelectorAll('.remove-icon');
  removeList.forEach (i => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    })
  })
};

export default addTodo;