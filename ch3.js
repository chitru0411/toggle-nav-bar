const toggler=document.getElementById('toggler');
const navlinks=document.getElementById('nav-links');

toggler.addEventListener('click',() =>{
  navlinks.classList.toggle('active');
})