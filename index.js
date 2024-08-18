/* Coding Steps:
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
-- A Bootstrap styled table representing your choice of data.
-- A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

let id = 0

document.getElementById("add").addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-task").value;
    row.insertCell(1).innerHTML = document.getElementById("assignee").value;
    row.insertCell(2).innerHTML = document.getElementById("frequency").value;
    row.insertCell(3).innerHTML = document.getElementById("due-date").value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++))
    document.getElementById("new-task").value = ""
});

// creates a button that when clicked it will delete the row that button is attached to
function createDeleteButton(id) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}