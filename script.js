function createTodo() {
  const userInput = document.getElementById("note").value;
  const listItem = document.createElement("li");
  const todosContainerElement = document.getElementById("todos-container");
  listItem.innerHTML = userInput;

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";
  editButton.onclick = () => editTodoItem(listItem);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = () => deleteTodoItem(listItem);

  // Append buttons to list item
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  // Add event listener to check off item
  listItem.setAttribute("onclick", "todoCheck(event, this)");

  todosContainerElement.appendChild(listItem);

  // Clear the input field
  document.getElementById("note").value = "";
}

function deleteTodos() {
  document.getElementById("todos-container").innerHTML = "";
}

function todoCheck(e, todo) {
  if (todo.classList.contains("checked")) {
    todo.classList.remove("checked");
  } else {
    todo.classList.add("checked");
  }
}

function editTodoItem(listItem) {
  const newTask = prompt(
    "Edit your task:",
    listItem.innerText.replace("EditDelete", "")
  );
  if (newTask) {
    listItem.childNodes[0].nodeValue = newTask; // update task text
  }
}

function deleteTodoItem(listItem) {
  listItem.remove(); // remove the list item from the DOM
}
