const stacks = document.querySelector('.stacks')

let iniciarAnimacao = setInterval(() => {
    if(stacks.style.animationName != "moveStacksLeft" && stacks.style.animationName != "moveStacksRight" || stacks.style.animationName == "moveStacksRight"){
        stacks.style.animationName = "moveStacksLeft"
    } else if(stacks.style.animationName == "moveStacksLeft"){
        stacks.style.animationName = "moveStacksRight"
    }

}, 4000);