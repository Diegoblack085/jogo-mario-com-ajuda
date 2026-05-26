const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() =>{

    mario.classList.remove('jump');
    
    },500)
   
}


const loop = setInterval(() => {

    console.log('loop')

    const pipePosiotion = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosiotion <= 120 && pipePosiotion > 0 &&  marioPosition < 110 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosiotion}px`;
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "img/game-over.png";
        mario.style.width = "75px";
        mario.style.left = "50px";
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
