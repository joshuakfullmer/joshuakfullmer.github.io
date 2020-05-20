
// navagation
function toggleMenu() {
    document.getElementsByClassName('navbar')[0].classList.toggle('responsive');
}
// date
document.getElementById("now").innerHTML = getDate();
function getDate() {
    let day = new Date();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = dayOfWeek[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()] + " " + day.getFullYear();
    return now;
}
// last updated date
document.getElementById('update').innerHTML = document.lastModified;
document.getElementById('year').innerHTML = new Date().getFullYear();

// banner
function banner() {
    let day = new Date();
    let daynum = day.getDay();
    let show = document.getElementById('banner');
    if (daynum != 3) {
        show.style.display = "none"
    }
}