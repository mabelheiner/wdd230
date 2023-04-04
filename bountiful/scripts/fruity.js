const fruity_url = "./data/fruity.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayFruits = (fruits) => {
  const fruit_options = document.querySelector(".fruit-list");

  // Get the select element
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const select3 = document.getElementById("select3");

  // Loop through the options and create option elements
  for (let i = 0; i < fruits.length; i++) {
    const option = document.createElement("option");
    option.value = fruits[i].id;
    option.text = fruits[i].name;
    select1.add(option);
  }

  for (let i = 0; i < fruits.length; i++) {
    const option = document.createElement("option");
    option.value = fruits[i].id;
    option.text = fruits[i].name;
    select2.add(option);
  }

  for (let i = 0; i < fruits.length; i++) {
    const option = document.createElement("option");
    option.value = fruits[i].id;
    option.text = fruits[i].name;
    select3.add(option);
  }


  /*
  let num = 0;
  fruits.forEach((fruit) => {
    fruit_options.innerHTML += `<div class="item"><input type="checkbox" id=fruit name=fruit value=${fruit.name}>
    <label for=${fruit.id}> ${fruit.name}</label></div>`;
    num += 1;
  })
  */
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