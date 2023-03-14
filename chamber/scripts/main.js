var today_date = new Date();
var hidden_date = document.querySelector("#current_date")
hidden_date.value = today_date.toLocaleDateString(); 
console.log(hidden_date.value);
localStorage.setItem("hidden_date", hidden_date.value)

var msgDate = new Date();
if (msgDate.getDay()==1 || msgDate.getDay()==2) {
    document.querySelector("#meet-greet").classList.add("active");
}

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

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date() );

document.querySelector("#today").innerHTML = fulldate;
document.querySelector('#current_date').innerHTML = fulldate;
document.querySelector('#current_date').value = fulldate;

// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets last modified date on the home page
document.querySelector('#lastmodified').textContent = document.lastModified;

function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

document.querySelector('#hamburger-menu').addEventListener('click', toggleMenu)