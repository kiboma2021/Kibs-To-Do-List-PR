const todoList = document.querySelector('#display-list');

//Add editTodo function
export const editTodo = (toDocontainer, todo) => {
  const editInput = document.createElement('input');
  editInput.type = "text";
  editInput.className = "editInput";
  editInput.value = todo.textContent;
  toDocontainer.replaceChild(editInput, todo);

  //add event listerner to edit input
  editInput.addEventListener ('keypress', e => {
    if (e.key === 'Enter') {
      const editContainers = document.querySelectorAll('.toDocontainer');
      const localData = JSON.parse (localStorage.getItem('List'));
      for (let i=0; i<editContainers.length; i++) {
        if (editContainers[i].classList.contains('checkedContainer')) {
          localData[i].description = editInput.value;
          localStorage.setItem ('List', JSON.stringify(localData));
        }
      }
      editInput.parentElement.classList.remove('checkedContainer');
      toDocontainer.replaceChild(todo, editInput);
      todo.textContent = editInput.value;
    }
  })
}

//Remove Items from to do list
export const removeTodo = (todo) => {
  todoList.removeChild(todo);
  let count = 1;
  const localData = JSON.parse(localStorage.getItem('List'));
  const data = Array.from(localData).filter (i => i.complited === false);
  data.map (i => i.index = count++);
  localStorage.setItem ('List', JSON.stringify(data));
  window.location.reload();
}