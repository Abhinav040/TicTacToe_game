let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn");

let newGameBtn = document.querySelector("#newBtn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true //playerX, player0

const winPatterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');

}

let counter = 0;

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        counter++;
        console.log(counter);
        if(turnO){
            box.innerText= "0";
            turnO = false;
        }else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;
        if(counter<9)
        checkWinner();
    else{
        showDraw();
    }
    });
});


const showDraw = () =>{
    msg.innerHTML = `Game is Draw ! `;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
for(let box of boxes ){
    box.disabled = false;
    box.innerText="";
}
}

const showWinner = (winner) =>{
    msg.innerHTML = `Congratualations , Winner is ${winner} ! `;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !=="" && pos2val !=="" && pos3val !=="" ){
            if(pos1val === pos2val && pos2val === pos3val ){
                // console.log("Winner is", pos1val,"!");
                showWinner(pos1val);
            }
        }

    }
}

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
