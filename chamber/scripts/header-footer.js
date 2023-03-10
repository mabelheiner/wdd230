var msgDate = new Date();
if (msgDate.getDay()==1 || msgDate.getDay()==2) {
    document.querySelector("#meet-greet").classList.add("active");
}

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date() );

document.querySelector("#today").innerHTML = fulldate;

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