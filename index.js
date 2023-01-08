const buttons = document.querySelectorAll('.buttons')
const X = 'X' , O='O'
var i=0;
function clicked (val){
    
    
    const btnc = document.getElementById(`${val}`)
     if(btnc.textContent!=X && btnc.textContent!=O){

    if(i%2==0)
    btnc.textContent=X
    else
    btnc.textContent=O
    
    i++
    }}



