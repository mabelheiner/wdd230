//Use the following codepen.io to provide the basic HTML guts of the input and output areas of the app along with some basic CSS: BOM Top 25Links to an external site.
//Create three variables that hold references to the input, button, and list elements using const.
const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");

//Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
addButton.addEventListener('click', () => {
//Example:  button.addEventListener('click', function() { ...
//In the function block for adding a chapter,
//make sure the input is not blank before doing the following remaining tasks in this list
if (chapterInput.value == ""){
    return;
}
//create an li element
let newListItem = document.createElement('li');

//create a delete button
let deleteButton = document.createElement("button");

//populate the li elements textContent or innerHTML with the input
newListItem.textContent = chapterInput.value;

//populate the button textContent with an ❌
deleteButton.textContent = '❌';

//append the li element with the delete button
newListItem.appendChild(deleteButton);

//append the list element with the li element just created and appended with text and the delete button
chapterList.appendChild(newListItem);

//add an event listener to the delete button that removes the li element when clicked
deleteButton.addEventListener('click', () => {
    newListItem.remove();
})

//send the focus to the input element
chapterInput.focus();

//change the input value to nothing or the empty string to clean up the interface for the user
chapterInput.value = "";
});