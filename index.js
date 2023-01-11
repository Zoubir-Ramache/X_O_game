const buttons = document.querySelectorAll('.buttons')
const X = 'X' , O='O'
var i=1;
function clicked (val){
    
    
    const turn = document.querySelector('span')
    const btnc = document.getElementById(`${val}`)
     if(btnc.textContent!=X && btnc.textContent!=O){

    if(i%2==0){
    btnc.textContent=X
    turn.textContent=`${O} `
    }else{
    btnc.textContent=O
    turn.textContent=`${X} `
    }
    check_winner()
    i++

    }}

const WIN_OP=[
    [1,2,3],
    [4,5,6],
    [7,8,9],

    [1,4,7],
    [2,5,8],
    [3,6,9],

    [1,5,9],
    [3,5,7]
]
function check_winner() {
    
    WIN_OP.forEach((OP)=> {

        const btn1 = document.getElementById(`btn${OP[0]}`)            
        const btn2 = document.getElementById(`btn${OP[1]}`)        
        const btn3 = document.getElementById(`btn${OP[2]}`) 
        if(btn1.textContent==X || btn1.textContent==O)
        if(btn1.textContent==btn2.textContent && btn1.textContent==btn3.textContent){
            
            document.querySelector('h1').textContent=`the winner is : ${btn1.textContent} `
            alert(`the winner is : ${btn1.textContent} `)
            document.querySelector('h1').classList.add('winner')

            buttons.forEach(btn=>{
                btn.removeAttribute('onclick')
            })
        }
        
    })
}
const repeat=()=>{
    location.reload()
}

