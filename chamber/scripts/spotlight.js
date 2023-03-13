const displayBusinesses = (businesses) => {
    const cards = document.querySelector(".spotlights"); // select the output container element
    let spots = 0

    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("div");
      
      while (business.membershipLevel == 'gold' && spots < 4){
        card.innerHTML = `
        <p>${business.name}</p>
        <img src="${business.imageURL}">`;
        spots = spots + 1}
      cards.appendChild(card);
    }); 
  }; 

async function getBusinessData() {
    const response = await fetch("./data/business.json");
    if (response.ok) {
      const data = await response.json();
      console.log("Here is the JSON data", data);
      displayBusinesses(data.businesses);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("directory-cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
  
getBusinessData();