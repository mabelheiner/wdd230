function displaySmoothies(smoothies_list){
  let drinks = document.querySelector(".popular");

  for(let i = 0; i < smoothies_list.length; i++){
    drinks.innerHTML += `<div class="drink_data"><img src="${smoothies_list[i].imageUrl}" alt=${smoothies_list[i].description}>
    <h3>${smoothies_list[i].name}</h3>
    <p>${smoothies_list[i].description}</p>
    <button onclick = "window.location.href='fresh.html';">Order Drink</button></div>`;
  }
}

async function getSmoothieData() {
    const response = await fetch("./data/smoothies.json");
    if (response.ok) {
      const data = await response.json();
      displaySmoothies(data.smoothies)
    } else {
      console.error("There was an error loading the data.");
    }
}
getSmoothieData();