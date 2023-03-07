var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
const url = "./data/business.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (businesses) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  businesses.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${business.imageURL}">
    <p>${business.name}</p>
    <p>${business.streetAddress}</p>
    <p>${business.cityStateZip}</p>
    <p><a href="${business.websiteURL}" target="_blank">${business.websiteURL}</a></p>
    `;
    if (business.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); 
  
}; 

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayBusinesses(data.businesses);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBusinessData();