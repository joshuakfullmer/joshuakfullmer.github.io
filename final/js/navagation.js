
// navagation
function toggleMenu() {
    document.getElementsByClassName('navbar')[0].classList.toggle('responsive');
}
// date
let day = new Date();
let year = day.getFullYear();
    document.getElementById('year').innerHTML = year;
