'use strict';

//IIFE
(async function () {
  const apiUrl = 'http://localhost:3081/todos';
  const todoList = await fetch(apiUrl).then((res) => res.json());

  document
    .querySelector('[data-todos-form]')
    .addEventListener('submit', handleAddTodo);
  document
    .querySelector('[data-todos-list]')
    .addEventListener('click', handleDeleteTodo);
  document
    .querySelector('[data-todos-list]')
    .addEventListener('change', handleUpdateTodo);

  displayTodos();

  async function handleUpdateTodo(e) {

  }

  async function handleAddTodo(e) {
    e.preventDefault();
    const title = getTodoTitleFromForm(e.target);
    await addToTodoList(title);
    displayTodos();
  }

  async function handleDeleteTodo(e) {
    const btn = e.target.closest('[data-delete-todo]');
    if (!btn) {
      return;
    }
    
    await fetch(`${apiUrl}/${btn.dataset.todoId}`, {
      method: 'DELETE',
    });

    const index = todoList.findIndex((todo) => todo.id === btn.dataset.todoId);
    todoList.splice(index, 1);
    displayTodos();
  }

  async function addToTodoList(title) {
    const newTodo = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ title, completed: false }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    todoList.push(newTodo);
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

/**
 * RESTful API
 * REpresentational State Transfer Application Programming Interface
 *
 * Request / Response
 *
 * Request:
 * API URL: http://localhost:3081/
 * Resource: /users, /todos
 *
 * GET /todos        -> retrieve list of todos
 * POST /todos       -> create an entity with the data in the request body
 * GET /todos/:id    -> retrieve a specific entity
 * PUT /todos/:id    -> idempotent update (replace what is in the DB with what is in the request body)
 * PATCH /todos/:id  -> partial update (can update specific properties of an entity, depending on request body)
 * DELETE /todos/:id -> deletes an entity
 *
 * OPTIONS /same_url_as_above -> retrieve supported methods and allowed hosts
 *
 * Response:
 * GET  -> 200 OK
 * POST -> 201 CREATED
 * PUT, PATCH, DELETE -> 200 OK
 *
 * resource not found             -> 404 NOT FOUND
 * you are not logged in          -> 401 NOT AUTHORIZED
 * no permission to do the action -> 403 FORBIDDEN
 * we use a method on a resource and the resource does not support that action -> 405 METHOD NOT ALLOWED
 * we don't send the correct data to the server -> 400 BAD REQUEST
 *
 * the server is down          -> 500 INTERNAL SERVER ERROR
 * the gateway did not respond -> 502 GATEWAY ERROR
 */
