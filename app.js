var inputTask = document.getElementById("input");
var add = document.getElementById("button");

var resetbutton = document.getElementById("reset");

var tasksItems = document.getElementById("todolist");

var tasks = [];

resetbutton.addEventListener("click", reset());

function addItem() {
  if (inputTask.value != "") {
    tasks.push(inputTask.value);
  } else {
    alert("The Task is Empty");
  }
  inputTask.value = "";
  display();
}

inputTask.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItem();
  }
});

add.addEventListener("click", addItem);

function display() {
  tasksItems.innerHTML = "";
  tasks.map((curr, i) => {
    var listItem = `<li id="item">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;

    tasksItems.innerHTML += listItem;
  });
}

function deleteItem(index) {
  // Delete the index element for todoArr
  tasks.splice(index, 1);
  display();
}

function editItem(index) {
  var newValue = prompt("Pls Edit");

  tasks.splice(index, 1, newValue);
  display();
}

function reset() {
  tasks = [];
  display();
}
