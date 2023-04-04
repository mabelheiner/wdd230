let url = new URL(window.location);
const fruity_url = "./data/fruity.json";
let params  = url.searchParams;

let list = document.querySelector(".items");

let contact = document.querySelector(".contact");

contact.innerHTML = `Name: ${params.get("first")} <br> Phone: ${params.get("last")} <br> 
                    Email: ${params.get("email")}`

function displayNames(fruit_list) {
    for (let i = 0; i < fruit_list.length; i++) {
        if (fruit_list[i].id == localStorage.getItem("selection1")){
            list.innerHTML += `${fruit_list[i].name} <br>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection2")){
            list.innerHTML += `${fruit_list[i].name} <br>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection3")){
            list.innerHTML += `${fruit_list[i].name} <br>`;
        }
    }
}

async function getFruitData() {
    const response = await fetch(fruity_url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayNames(data.fruits);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("directory-cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
  
  getFruitData();