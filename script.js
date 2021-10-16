var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener('click' , function(){

 var sideBar = document.querySelector(".container").classList.toggle("show-menu");

})
var conteudos = document.querySelector(".menu-item-2");

conteudos.addEventListener('click', function(){
     
    var visivel = document.querySelector(".container").classList.add("visivel");
   

})