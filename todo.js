// todo.js
let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (input.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value}`;
        text.appendChild(newEle);
        input.value = "";  // Clear the input field after adding the task
    }
}
