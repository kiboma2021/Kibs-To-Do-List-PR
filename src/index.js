import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import addTodo from './add-to-do.js'
import getFromLocal from './localstorage.js'
import clearAll from './clearall.js'


//Reference HTML
const myInput = document.querySelector('input');
const clearContent = document.querySelector('#clear-content');

//Add event lister when enter is clicked while in input field
myInput.addEventListener ('keypress', e => {
  if (e.key === 'Enter' && myInput.value ) {
    addTodo(myInput.value);
    myInput.value = null;
  }
})

window.addEventListener('load',getFromLocal);

clearContent.addEventListener ('click', clearAll);
