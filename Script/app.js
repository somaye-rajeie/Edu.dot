const navToggleIcon=document.querySelector('.nav__toggle-icon')
const menuElem=document.querySelector('.menu')
navToggleIcon.addEventListener('click',function(){
    navToggleIcon.classList.toggle('nav__toggle-icon--open')
    menuElem.classList.toggle('menu--open')
})