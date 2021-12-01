const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.querySelector('#btn');
const color=document.querySelector('.color');

btn.addEventListener('click', (event)=>{
    // get random number between 0-3 

    const randomNumber=getRandomColor();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})
function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}