export function showConfetti() {
    for(let i=0;i<20;i++){
        const confetti=document.createElement('div');
        confetti.className='confetti';
        confetti.textContent='🎉';
        confetti.style.left=Math.random()*window.innerWidth+'px';
        confetti.style.animationDuration=(1+Math.random()*2)+'s';
        document.body.appendChild(confetti);
        setTimeout(()=>confetti.remove(),3000);
    }
}

