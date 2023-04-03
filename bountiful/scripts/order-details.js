let url = new URL(window.location);
let params  = url.searchParams;

let list = document.querySelector(".items");

let contact = document.querySelector(".contact");

contact.innerHTML = `Your name: ${params.get("first")} ${params.get("last")} <br> 
                    Your email: ${params.get("email")}`
params.delete("first");
params.delete("last");
params.delete("email");

params.delete("drink-count")
// Remove this when you are done inspecting parameters in the console
for (const fruit of params) {
    console.log(fruit);
    list.innerHTML += `${fruit[1]} <br>`;
}
