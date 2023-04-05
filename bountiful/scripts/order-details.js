let url = new URL(window.location);
const fruity_url = "./data/fruity.json";
let params  = url.searchParams;

let list = document.querySelector(".items");

let contact = document.querySelector(".contact");

contact.innerHTML = `Name: ${params.get("first")} <br> Phone: ${params.get("phone")} <br> 
                    Email: ${params.get("email")}`;

if (params.get("special_instr") != ""){
  contact.innerHTML += `<br> Special Instructions: ${params.get("special_instr")}`;
}

contact.innerHTML += `<br> Order Date: ${params.get("date")}`;

function displayNames(fruit_list) {
    for (let i = 0; i < fruit_list.length; i++) {
        if (fruit_list[i].id == localStorage.getItem("selection1")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
                                <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
                                <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
                                <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
                                <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
                                <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection2")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
            <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
            <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
            <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
            <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
            <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection3")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
            <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
            <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
            <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
            <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
            <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }
    }
}

async function getFruitData() {
    const response = await fetch(fruity_url);
    if (response.ok) {
      const data = await response.json();
      displayNames(data.fruits);
    } else {
      console.error("There was an error loading the data.");
    }
  }
  
  getFruitData();