let change = document.getElementById('change');
let bgColor = document.querySelector('.bgColor');

// task-1: Change text content on click
change.addEventListener('click', () => {
    change.textContent = "Changed";
});

// task-2: Change background color on click
bgColor.addEventListener('click', () => {
    bgColor.style.backgroundColor = "red";
});

// task-3: Create a new div element and append it to the body
let newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element with some text content';
document.body.appendChild(newDiv);

// task-4: Create a new li element and append it to the ul
let newLi = document.createElement('li');
newLi.textContent = 'New Item';
let ulElement = document.getElementById('myList');
ulElement.appendChild(newLi);

// task-5: Remove an element from the DOM
let elementToRemove = document.getElementById('removeMe');
elementToRemove.remove();

// task-6: Select an HTML element and change its attribute
let imgElement = document.getElementById('myImage');
imgElement.setAttribute('src', 'newImage.png');

// task-7: Add and remove CSS to/from an HTML element
let hoverDiv = document.getElementById('myImage');

// Add a mouseover event listener to change border color
hoverDiv.addEventListener('mouseover', function() {
    hoverDiv.style.borderColor = 'red';
});

// Add a mouseout event listener to reset border color
hoverDiv.addEventListener('mouseout', function() {
    hoverDiv.style.borderColor = 'transparent';
});

// task-8: Add a click event listener to a button that changes the text content of a paragraph
let button = document.getElementById('myButton');
let paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function() {
    paragraph.textContent = 'The text content has been changed!';
});
