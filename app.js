let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let newGameBtn2 = document.querySelector(".new-btn2");
let msgContainer = document.querySelector(".msg-container");
let msgContainer2 = document.querySelector(".msg-container2");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let count = 0;
let flag ;

let turn = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide");
    count = 0;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      //playerO
      box.innerText = "O";
      turn = false;
    } else {
      //playerX
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    count++;

    flag = true;
    checkWinner();

    if(count === 9 && flag === true){
      draw();
    }

  });
});

let draw = () => {
  msg2.innerText = "Oop's! No one Wins";
  msgContainer2.classList.remove("hide");
  count = 0;
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            flag = false;
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
newGameBtn2.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);