let menuHamburguer = document.querySelector('.menuHamburguer')
let navMenu = document.querySelector('nav')
let itemsMenu = document.querySelectorAll('.nav-link')
const stacks = document.querySelector('.stacks')
let menuHamburguerActive = false


// ANIMAÇÃO PARA MOVER AS STACKS
let iniciarAnimacao = setInterval(() => {
    if(stacks.style.animationName != "moveStacksLeft" && stacks.style.animationName != "moveStacksRight" || stacks.style.animationName == "moveStacksRight"){
        stacks.style.animationName = "moveStacksLeft"
    } else if(stacks.style.animationName == "moveStacksLeft"){
        stacks.style.animationName = "moveStacksRight"
    }

}, 4000);

// MOSTRANDO E OCULTANDO O MENU HAMBURGUER
const showMenu = ()=>{
    navMenu.classList.toggle('mobileStyleMenu')
    if(menuHamburguerActive){
        itemsMenu.forEach(link => link.style.display = "none")
        menuHamburguer.style.transform =  "rotate(90deg)"
        menuHamburguer.innerHTML = "|||"
        menuHamburguer.style.top = "30%"
        menuHamburguerActive = false
        
    } else {
        itemsMenu.forEach(link => link.style.display = "flex")
        menuHamburguer.style.transform =  "rotate(0deg)"
        menuHamburguer.innerHTML = "X"
        menuHamburguer.style.top = "5%"
        menuHamburguerActive = true
    }
    
}

// QUANDO UM LINK DO MENU FOR CLICADO, O MENU DEVERÁ DESAPARECER
itemsMenu.forEach(item => item.addEventListener('click', showMenu))

menuHamburguer.addEventListener("click", showMenu)