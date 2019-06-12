

// Select color input
const color = document.querySelector("#colorPicker");
let newColor = "";

color.addEventListener("change", function(event) {
    newColor = event.target.value;
});

// Select size input
const height = document.querySelector("#inputHeight");
let newHeight = 1;

height.addEventListener("change", function(event) {
    newHeight = event.target.value;
});

const width = document.querySelector("#inputWidth");
let newWidth = 1;

width.addEventListener("change", function(event) {
    newWidth = event.target.value;
});

const submitButton = document.querySelector("input[type=submit]");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const body = document.getElementsByTagName("body")[0];
    const table = document.querySelector("#pixelCanvas");
    const tableBody = document.createElement("tbody");

// Remove previous grid
    if (table.firstChild) {
        table.firstChild.remove();
    };

// Make grid with user input
    for (let i = 0; i < newHeight; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < newWidth; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        };

        tableBody.appendChild(row);
    };

    table.appendChild(tableBody);
    body.appendChild(table);

// Add event to change background color for individual cells
    const td = document.getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {
        td[i].onclick = function() {
           this.style.backgroundColor = newColor;
        };
    };
}

// Stop grid from disappearing when form is submitted
const form = document.getElementById("sizePicker");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

// run the makeGrid() function
submitButton.addEventListener("click", makeGrid, false);
