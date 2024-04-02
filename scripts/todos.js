'use strict';

//IIFE
(function () {
  document
    .querySelector('[data-todos-form]')
    .addEventListener('submit', handleAddTodo);
  document
    .querySelector('[data-todos-list]')
    .addEventListener('click', handleDeleteTodo);

  function handleAddTodo(e) {
    e.preventDefault();
    const title = getTodoTitleFromForm(e.target);
    // addToTodoList(title);
    const todoItem = buildTodoItem(title);
    displayTodoItem(todoItem);
  }

  function handleDeleteTodo(e) {
    const btn = e.target.closest('[data-delete-todo]');
    if(!btn) {
    // if(!e.target.dataset.deleteTodo) {
      return;
    }
    const item = btn.closest('li');
    item.remove();
  }

  function getTodoTitleFromForm(form) {
    const data = new FormData(form);
    return data.get('title');
  }

  function buildTodoItem(title) {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const check = document.createElement('input');
    const deleteBtn = document.createElement('button');

    deleteBtn.type = 'button';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.dataset.deleteTodo = true;
    check.type = 'checkbox';

    label.append(check, title);
    item.append(label, deleteBtn);

    return item;
  }

  function displayTodoItem(item) {
    document.querySelector('[data-todos-list]').append(item);
  }

  // <li>
  //     <label>
  //       <input type="checkbox"> {title}
  //     </label>
  //     <button type="button" data-delete-todo>&times;</button>
  //   </li>
})();
