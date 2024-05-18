let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (input.value === "") {
        alert("Please Enter Task");
    } else {
        // Create a new list item for the task
        let newEle = document.createElement("ul");

        // Create a span to hold the task text
        let taskText = document.createElement("span");
        taskText.textContent = input.value;

        // Create a delete button with an icon
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash";
        deleteIcon.onclick = function() {
            text.removeChild(newEle);
        };

        // Append the task text and delete icon to the list item
        newEle.appendChild(taskText);
        newEle.appendChild(deleteIcon);

        // Append the list item to the task list
        text.appendChild(newEle);

        // Clear the input field after adding the task
        input.value = "";
    }
}
