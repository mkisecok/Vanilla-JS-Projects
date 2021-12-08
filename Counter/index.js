// set initial count
let count=0;


//select value and buttons
const value=document.querySelector('#value');
const buttons=document.querySelectorAll('.btn');

buttons.forEach(btn =>{

    btn.addEventListener('click', event=>{
        console.log(event);
        if( event.target.classList.contains('decrease'))
        {
            count--
        }
       else  if( event.target.classList.contains('increase'))
       {
           count++
       }
       else{
           count=0
           
       }
      value.textContent=count;

      // style
      if( count < 0){
        value.style.color = 'tomato'
      }
      
      else{
        value.style.color='green'
      }
    })

})

