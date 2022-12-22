// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(event) {
  //create div
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerText = "Done";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //trash
  const trashButton = document.createElement("button");
  trashButton.innerText = "Delete";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);
}
