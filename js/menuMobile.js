window.addEventListener('DOMContentLoaded', fecharMenu())

function fecharMenu(){
     let listaMenu = document.querySelector('.menu-list-mobile');
    let menuBar = document.querySelector('.menu-toggle.aparecendo');

     menuBar.classList.add('aparecendo');
      listaMenu.classList.remove('ativo');

}



function ativarMenu(){
    let listaMenu = document.querySelector('.menu-list-mobile');
    let menuBar = document.querySelector('.menu-toggle.aparecendo');
    let menuSair = document.querySelector('.menu-sair') ;

       
      menuBar.classList.remove('aparecendo');
      menuSair.classList.add('aparecendo');
      
      listaMenu.classList.add('ativo');
}
      

function sairMenu(){


     const listaMenu = document.querySelector('.menu-list-mobile');
    const menuBar = document.querySelector('.menu-toggle');
    const menuSair = document.querySelector('.menu-sair');

    listaMenu.classList.remove('ativo');
    menuBar.classList.add('aparecendo');
    menuSair.classList.remove('aparecendo');
}
    


