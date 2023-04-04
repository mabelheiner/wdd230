const fruity_url = "./data/fruity.json";

const orderButton = document.querySelector(".order-button");
// Get the select element
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayFruits = (fruits) => {

  // Loop through the options and create option elements
  for (let i = 0; i < fruits.length; i++) {
    const option1 = document.createElement("option");
    option1.value = fruits[i].id;
    option1.text = fruits[i].name;
    select1.add(option1);
  }

  for (let i = 0; i < fruits.length; i++) {
    const option2 = document.createElement("option");
    option2.value = fruits[i].id;
    option2.text = fruits[i].name;
    select2.add(option2);
  }

  for (let i = 0; i < fruits.length; i++) {
    const option3 = document.createElement("option");
    option3.value = fruits[i].id;
    option3.text = fruits[i].name;
    select3.add(option3);
  }

  select1.addEventListener("change", function() {
    localStorage.setItem("selection1", this.value);
  })

  select2.addEventListener("change", function() {
    localStorage.setItem("selection2", this.value);
  })

  select3.addEventListener("change", function() {
    localStorage.setItem("selection3", this.value);
  })
}; 

async function getFruitData() {
  const response = await fetch(fruity_url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayFruits(data.fruits);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getFruitData();
