const fruity_url = "./data/fruity.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayFruits = (fruits) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  fruits.forEach((fruit) => {
    console.log(fruit);
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