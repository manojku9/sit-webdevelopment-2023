document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;
    
    if (todoText.trim() !== "") {
      var todoItem = createTodoItem(todoText);
      var todoList = document.getElementById("todo-list");
      todoList.appendChild(todoItem);
      todoInput.value = "";
    }
  });
  
  function createTodoItem(todoText) {
    var todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    var span = document.createElement("span");
    span.textContent = todoText;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", function() {
      todoItem.remove();
    });
    
    return todoItem;
  }
  