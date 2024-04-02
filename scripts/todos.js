'use strict';

//IIFE
(function () {
  const fromStorage = localStorage.getItem('todos');
  const todoList = fromStorage ? JSON.parse(fromStorage) : [];

  document
    .querySelector('[data-todos-form]')
    .addEventListener('submit', handleAddTodo);
  document
    .querySelector('[data-todos-list]')
    .addEventListener('click', handleDeleteTodo);

  displayTodos();

  function handleAddTodo(e) {
    e.preventDefault();
    const title = getTodoTitleFromForm(e.target);
    addToTodoList(title);
    displayTodos();
  }

  function handleDeleteTodo(e) {
    const btn = e.target.closest('[data-delete-todo]');
    if (!btn) {
      return;
    }

    const index = todoList.findIndex((todo) => todo.id === btn.dataset.todoId);
    todoList.splice(index, 1);
    displayTodos();
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  function addToTodoList(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    todoList.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  function getTodoTitleFromForm(form) {
    const data = new FormData(form);
    return data.get('title');
  }

  function buildTodoItems() {
    const fragment = document.createDocumentFragment();
    for (const todo of todoList) {
      const item = document.createElement('li');
      const label = document.createElement('label');
      const check = document.createElement('input');
      const deleteBtn = document.createElement('button');

      deleteBtn.type = 'button';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.dataset.deleteTodo = true;
      deleteBtn.dataset.todoId = todo.id;

      check.type = 'checkbox';
      check.checked = todo.completed;

      label.append(check, todo.title);
      item.append(label, deleteBtn);
      fragment.append(item);
    }
    return fragment;
  }

  function displayTodos() {
    const items = buildTodoItems();
    const list = document.querySelector('[data-todos-list]');
    list.innerHTML = '';
    list.append(items);
  }

  // <li>
  //     <label>
  //       <input type="checkbox"> {title}
  //     </label>
  //     <button type="button" data-delete-todo>&times;</button>
  //   </li>
})();
