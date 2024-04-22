let btn = document.querySelector(".space");
let navBar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
btn.addEventListener("click",()=>{
    navList.classList.toggle('v-class')
    navBar.classList.toggle('h-nav')
})