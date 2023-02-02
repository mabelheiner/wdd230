// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

//TEMPLES!
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(books){


    books.forEach(element => {
        let book = document.createElement("book");
        let bookName = document.createElement("h3");
            bookName.appendChild(document.createTextNode(element.bookName));
        let author = document.createElement("h4");
            author.appendChild(document.createTextNode(element.author));
        let published = document.createElement("h4");
            published.appendChild(document.createTextNode(element.published));
        let img = document.createElement("img");
        img.src = element.imageUrl;
        img.alt = element.bookName;
        img.classList = "book_img";
    
        book.appendChild(bookName);
        book.appendChild(author);
        book.appendChild(published);
        book.appendChild(img);
    
        document.getElementById("books").appendChild(book);
    });
}
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples(){
    const result = await fetch('books.json');
   if (result.ok){
        templeList = await result.json();
    output(templeList);
   }
}
getTemples();

//fetch('https://goodreadsraygorodskijv1.p.rapidapi.com/addBookToShelf', options)
	//.then(response => response.json())
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
 function reset(){
     document.getElementById("books").innerHTML = "";
 }


// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(){
   reset();
    let choice = document.getElementById("sortBy").value;
    if (choice == "templeNameAscending"){
       templeList.sort();
       templeList.reverse();
       output(templeList);
    }
    else{
     templeList.sort();
     templeList.reverse();
       output(templeList);
   }
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.getElementById("sortBy").addEventListener("change", sortBy);
sortBy();
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
