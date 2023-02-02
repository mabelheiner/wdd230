// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;


let bookList = [];

function output(books){
    let num = 0;
    books.sort(function (a, b) {        
        if (a.bookName < b.bookName) {
            return -1;
        }
        else {
            return 1;
        }
       });
    books.forEach(element => {
        let book = document.createElement("book");
        let star = document.createElement("button");
            star.appendChild(document.createTextNode("☆"));
        let space0 = document.createElement("br");
            space0.appendChild(document.createTextNode(""));
        let space1 = document.createElement("br");
            space1.appendChild(document.createTextNode(""));
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
        star.id = "star"

        book.appendChild(star);
        book.appendChild(space0);
        book.appendChild(space1);
        book.appendChild(bookName);
        book.appendChild(author);
        book.appendChild(published);
        book.appendChild(img);
            
        document.getElementById("books").appendChild(book);

        star.addEventListener('click', () => {
            if (star.innerHTML == "⭐") {
                star.innerHTML = "☆";
            }
            else {
                star.innerHTML = "⭐"
            }
        });
    });
}

async function getTemples(){
    const result = await fetch('books.json');
   if (result.ok){
        bookList = await result.json();
    output(bookList);
   }
}
getTemples();

function reset(){
     document.getElementById("books").innerHTML = "";
 }

function sortBy(){
   reset();
    let choice = document.getElementById("sortBy").value;
    
    if (choice == "authorAscending"){
       bookList.sort(function (a, b) {        
        if (a.bookName < b.bookName) {
            return -1;
        }
        else {
            return 1;
        }
       });
    }
    else{
        bookList.sort(function (a, b) {
         if (a.bookName > b.bookName) {
             return -1;
         }
         else {
             return 1;
         }
        });
   };
   output(bookList);
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.getElementById("sortBy").addEventListener("change", sortBy);
sortBy();
