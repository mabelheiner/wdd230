let drink_count = document.querySelector('#drink-count');

const order_button = document.querySelector(".order-button");

let count = localStorage.getItem('drinks-counted');

console.log("The initial count is", count);

if (count === ""){
    count = 0;
}
localStorage.setItem('drinks-counted', count);
drink_count.innerHTML = localStorage.getItem('drinks-counted');

console.log("drinks counted", localStorage.getItem('drinks-counted'));


order_button.addEventListener('click', () => {
    count++;
    localStorage.setItem('drinks-counted', count);
})