import { removeTodo } from './update.js'

//Clear All
const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('List'));
  const todo_container = document.querySelectorAll('.toDocontainer');
  todo_container.forEach (i => {
    if (i.classList.contains('checkedContainer')) {
      removeTodo(i);
    }
  })
  let count = 1;
  const data = Array.from(localData).filter(i => i.complited == false);
  data.map (i => i.index = count++);
  localStorage.setItem ('List', JSON.stringify(data));
  window.location.reload();
}

export default clearAll;