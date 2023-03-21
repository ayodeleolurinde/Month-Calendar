const monthEl = document.querySelector(".date h1");
const fullDateEl  = document.querySelector(".date p");
const daysEl =  document.querySelector(".days");

const monthI = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear().monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear().monthInx , 1, 0).getDay() - 1;


const months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

];
let monthInx = "";
monthEl.innerHTML =  months[monthInx];
fullDateEl.innerHTML = new Date().toDateString();

let days = "";

for(let i = firstDay; i > 0; i-- ){
    days +=`<div class = "empty"></div>`;
}
for(let i = 1; i <= lastDay; i ++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;

    }else{
        days += `<div>${i}</div>`
    }
}
daysEl.innerHTML = days;