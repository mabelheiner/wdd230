var today_date = new Date();
var hidden_date = document.querySelector("#current_date")
hidden_date.value = today_date.toLocaleDateString(); 
console.log(hidden_date.value);
localStorage.setItem("hidden_date", hidden_date.value)

var msgDate = new Date();
if (msgDate.getDay()==1 || msgDate.getDay()==2) {
    document.querySelector("#meet-greet").classList.add("active");
}

//lazy loading
// Gather the images to load
let images = document.querySelectorAll("img[data-src]");

// Set up the load images function which switches the src and the data-src attributes.
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


// Add an intersection observer 
const callback = (items, observer) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      loadImages(item.target);
      observer.unobserve(item.target);
    }
  });
};

// Set up the options
let options = {
  threshold: 1,
};

// Create an observer
const observer = new IntersectionObserver(callback, options);

// Register each image with the intersection observer
images.forEach((img) => {
  observer.observe(img);
});


/* day counter */
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0';
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today.toLocaleDateString());