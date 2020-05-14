document.getElementById('update').innerHTML = document.lastModified;
document.getElementById('year').innerHTML = new Date().getFullYear();
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navbar')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('respons')}, false);