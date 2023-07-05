var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertTask(formData);
  } else {
    updateTask(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["addTask"] = document.getElementById("addTask").value;
  return formData;
}

//Insert the data
function insertTask(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = `<input type="checkbox" name=tasks class="itemCheck"></input>
  <label for="tasks" class="itemCheck"></label>`;
  cell1.style.width = "83%";
  cell4 = newRow.insertCell(1);
  cell4.innerHTML = `<button onClick="editTask(this)" class="editButton"><i class="fa fa-pencil" aria-hidden="true"
        style="font-size: 1.2rem;"></i></button> <button onClick="onDelete(this)" class="deleteButton"><i class="fa fa-trash" aria-hidden="true"
        style="font-size: 1.2rem;"></i></button>`;
  cell1.lastElementChild.innerHTML = data.addTask;
}

//Edit the data
function editTask(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("addTask").value =
    selectedRow.cells[0].lastElementChild.innerHTML;
}
function updateTask(formData) {
  selectedRow.cells[0].lastElementChild.innerHTML = formData.addTask;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("addTask").value = "";
  selectedRow = null;
}
