let menu=document.querySelector("#menu-btn");
let navbar = document.querySelector(".nav");
let header = document.querySelector(".header");

menu.addEventListener("click",function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.addEventListener("scroll",function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY>0){
        header.classList.add("active")
    } 
    else{
        header.classList.remove("active") 
    }
});

  
