const stacks = document.querySelector('.stacks')
let menu = document.querySelector('#menu')
let nav = document.querySelector('#nav')
// ANIMAÇÃO PARA MOVER AS STACKS
let iniciarAnimacao = setInterval(() => {
    if(stacks.style.animationName != "moveStacksLeft" && stacks.style.animationName != "moveStacksRight" || stacks.style.animationName == "moveStacksRight"){
        stacks.style.animationName = "moveStacksLeft"
    } else if(stacks.style.animationName == "moveStacksLeft"){
        stacks.style.animationName = "moveStacksRight"
    }

}, 4000);

menu.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})
