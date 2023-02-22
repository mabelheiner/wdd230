// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;


let bookList = [];

function output(books){
    books.forEach(element => {
        let book = document.createElement("book");
        let star = document.createElement("button");
            star.id = element.star;

            if (star.id == "star_filled"){
                star.appendChild(document.createTextNode("★"))

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
                star.id = element.star;

                book.appendChild(star);
                book.appendChild(space0);
                book.appendChild(space1);
                book.appendChild(bookName);
                book.appendChild(author);
                book.appendChild(published);
                book.appendChild(img);
            
                document.getElementById("books").appendChild(book);
            }

                star.addEventListener('click', () => {
                    if (star.id == "star_filled") {
                        star.id = "star";
                        star.innerHTML = "☆"
                    }
                    else {
                        star.id = "star_filled";
                        star.innerHTML = "★";
                    }
                    element.star = star.id
                    bookList = books;
                    saveData();
                });
                
            });
    bookList = books;
    saveData();
}

async function getBooks(){
    const data = localStorage.getItem("books.json");
    bookList = JSON.parse(data);
        
    bookList.sort(function (a, b) { 
        let a_author_last = a.author.split(' ').slice(-1);  
        let b_author_last = b.author.split(' ').slice(-1);   
        if (a_author_last < b_author_last) {
            return -1;
        }
        else {
            return 1;
        }
    });
    output(bookList);
   }


getBooks();

function reset(){
     document.getElementById("books").innerHTML = "";
 }

function sortBy(){
   reset();
    let choice = document.getElementById("sortBy").value;
    
    if (choice == "authorAscending"){
       bookList.sort(function (a, b) { 
        let a_author_last = a.author.split(' ').slice(-1);  
        let b_author_last = b.author.split(' ').slice(-1);   
        if (a_author_last < b_author_last) {
            return -1;
        }
        else {
            return 1;
        }
    })
}

    else {
        bookList.sort(function (a, b) { 
            let a_author_last = a.author.split(' ').slice(-1);  
            let b_author_last = b.author.split(' ').slice(-1);   
            if (a_author_last > b_author_last) {
                return -1;
            }
            else {
                return 1;
            }

    })
    };
    output(bookList);
    saveData();
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.getElementById("sortBy").addEventListener("change", sortBy);
sortBy();


function saveData() {
    localStorage.setItem("books.json", JSON.stringify(bookList));
    console.log("saved books");
    console.log(bookList);
}
saveData();