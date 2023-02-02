var messagedate = new Date();

if (messagedate.getDay()==1 || messagedate.getDay()==2 || messagedate.getDay() == 4) {
    document.querySelector("#meet-greet").classList.add("active");
}