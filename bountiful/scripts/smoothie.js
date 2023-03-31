function displaySmoothies(smoothies_list){
  console.log(smoothies_list[0].description);
  let drinks = document.querySelector(".popular");

  for(let i = 0; i < smoothies_list.length + 1; i++){
    drinks.innerHTML += `<div class="drink_img"><img src="${smoothies_list[i].imageUrl}" alt=${smoothies_list[i].description}></div>`;

    drinks.innerHTML += `<div class="drink_data"><h3>${smoothies_list[i].name}</h3>
    <p>${smoothies_list[i].description}</p>
    <button onclick = "window.location.href='fresh.html';">Order Drink</button></div>`;
  }
}

async function getSmoothieData() {
    const response = await fetch("./data/smoothies.json");
    if (response.ok) {
      const data = await response.json();
      console.log(data.smoothies);
      displaySmoothies(data.smoothies)
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("directory-cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
}
getSmoothieData();