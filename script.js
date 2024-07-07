//hamberger Menu
const menu = document.querySelector("#menu")
const nav = document.querySelector(".navbar .nav")

//sidebar 
menu.addEventListener("click",event => nav.classList.toggle("active"))

//close side bar
document.addEventListener("click",function(event){
  if(!menu.contains(event.target)&&!nav.contains(event.target)){
    nav.classList.remove("active")
  }
})