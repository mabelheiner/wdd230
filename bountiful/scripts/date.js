const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date() );

document.querySelector('#current_date').innerHTML = fulldate;
document.querySelector('#current_date').value = fulldate;