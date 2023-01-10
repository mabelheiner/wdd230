const today = new Date();

const dateoptions = {
    //year: '2-digit',
    //month: 'long',
    //day: 'numeric'
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};


//old way
document.querySelector('#today').textContent = today.toLocaleDateString('en-US', dateoptions);
document.querySelector('#today').textContent = today.toLocaleTimeString('en-US', dateoptions)
//document.getElementById('today').textContent = today.toLocaleDateString('en-US', dateoptions);

//using template strings
//const mydatestring = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
//document.querySelector('#today').textContent = mydatestring;

//how to get the degrees sign
//innerHTML is used when interpretation is needed (i.e. parsing)
//textContent is faster but cannot do interpretation
document.querySelector('#temp').innerHTML = '32&deg;';

//input needs the .value
//changes the value of an input element
document.querySelector('#input').value = 'Carpe diem!';

// 'callback method'
// this function is called once per item in a ForEach loop
function makeRed(item){
    item.style.color = 'red';
}

// selects multiple items from the DOM (needs selectorAll)
document.querySelectorAll('#today').forEach(makeRed);