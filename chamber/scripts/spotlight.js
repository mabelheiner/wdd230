const displayBusinesses = (businesses) => {
    const cards = document.querySelector(".spotlights"); // select the output container element
    spotlights = [];
      
      let businessList = businesses.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
      for (let i=0; i<3; i++){
        var spot = Math.floor(Math.random() * businessList.length)
        spotlights.push(businessList.splice(spot, 1));
      }

    console.log("Here is the spotlight data", spotlights);
    console.log("here is a spotlight", spotlights[1])

    spotlights.forEach((spotlight) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("div");
      card.classList.add('spotlight1');
      card.innerHTML = `
      <p>${spotlight.name}</p>
      <img src="${spotlight.imageUrl}">`
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