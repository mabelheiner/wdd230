let drink_count = document.querySelector('#drink-count');

const order_button = document.querySelector(".order-button");

let count = localStorage.getItem('drinks-counted');
drink_count.innerHTML = localStorage.getItem('drinks-counted');

console.log("drinks counted", localStorage.getItem('drinks-counted'));


order_button.addEventListener('click', () => {

    if (count === null){
        count = 0;
    }

    else {
        count++;
    }
    localStorage.setItem('drinks-counted', count);
})