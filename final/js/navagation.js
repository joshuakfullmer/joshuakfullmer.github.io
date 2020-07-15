
// navagation
function toggleMenu() {
    document.getElementsByClassName('navbar')[0].classList.toggle('responsive');
}
// date
let day = new Date();
document.getElementById("now").innerHTML = getDate();
function getDate() {
    // let day = new Date();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = dayOfWeek[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()] + " " + day.getFullYear();
    let year = day.getFullYear();
    document.getElementById('year').innerHTML = year;
    return now;
}
// pancakes banner
banner();
function banner() {
    let daynum = day.getDay();
    let show = document.getElementById('banner');
    if (daynum != 5) {
        show.style.display = "none"
    }
}