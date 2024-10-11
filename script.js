let speed = 3 , gravity = 0.5;
let bird = document.querySelector('.bird')
let img = document.getElementById('bird1')
let soundout = new Audio('sounds/game over.mp3')
let soundplay = new Audio('sounds/score.mp3')

//getting bird element 
let birdprops = bird.getBoundingClientRect()

//background properties for dimensions
let background = document.querySelector('.background').getBoundingClientRect();
let scorevalue = document.querySelector('.value')
let scoretitle = document.querySelector('.title')
let message = document.querySelector('.message')

let gamestatus = 'Start';
img.style.display = 'none';
message.classList.add('msgstyle')

document.addEventListener('keydown',(e)=>{
    if(e.key=='Enter' && gamestatus!='play'){
        document.querySelectorAll('.pipe').forEach((e)=>{
            e.remove();
        });
        img.style.display='block';
        bird.style.top='40vh';
        gamestatus='play';
        message.innerHTML='';
        title.innerHTML='score; ';
        value.innerHTML='0';
        message.classList.remove('msgstyle');
        play();
    }
})
