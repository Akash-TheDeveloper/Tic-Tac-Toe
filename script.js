var sections = document.querySelectorAll(".sections");

document.querySelector(".setName-btn").addEventListener('click', setNames);;

for(let i=0; i<sections.length; i++){

    sections[i].addEventListener('click', playGame);
}

var isPlayerOneTurn = true;
var playerOneName = "Player One";
var playerTwoName = "Player Two";
var whoseTurn = document.createElement("h1");
whoseTurn.innerText = playerOneName;
whoseTurn.style.cssText = "text-align: center; font-family: sans-serif; color: #fff; font-size: 2rem";

document.querySelector(".right-container").appendChild(whoseTurn);

var array = new Array(9);
var numberOfInput = 0;

function playGame(){

    var object = document.createElement("h1");
    object.style.cssText = "color: #fff; font-family: sans-serif; font-size: 6rem; text-align: center;" +
                            "margin: 5px;";

    if(isPlayerOneTurn){

        object.innerText = 'X';
        this.appendChild(object);
        isPlayerOneTurn = false;
        whoseTurn.innerText = playerTwoName;
        

    }else{

        object.innerText = 'O';
        this.appendChild(object);
        isPlayerOneTurn = true;
        whoseTurn.innerText = playerOneName;

   }

   this.style.pointerEvents = 'none';

   numberOfInput ++;

   for(let i=0; i<sections.length; i++){

        if(this === sections[i]){

            if(!isPlayerOneTurn)
                array[i] = 'X';
            else
                array[i] = 'O';
            

        }
   }

   if((array[0]== 'X' && array[1]== 'X' && array[2]== 'X') || 
    (array[3]== 'X' && array[4]== 'X' && array[5]== 'X') || (array[6]== 'X' && array[7]== 'X' && array[8]== 'X')
    || (array[0]== 'X' && array[3]== 'X' && array[6]== 'X') || (array[1]== 'X' && array[4]== 'X' && array[7]== 'X')
    || (array[2]== 'X' && array[5]== 'X' && array[8]== 'X') || (array[0]== 'X' && array[4]== 'X' && array[8]== 'X')
    || (array[2]== 'X' && array[4]== 'X' && array[6]== 'X')){

        setTimeout(function() { 

            alert("Winner is : "+playerOneName); 
            resetGame();

        }, 100);

        

    }else if((array[0]== 'O' && array[1]== 'O' && array[2]== 'O') || 
    (array[3]== 'O' && array[4]== 'O' && array[5]== 'O') || (array[6]== 'O' && array[7]== 'O' && array[8]== 'O')
    || (array[0]== 'O' && array[3]== 'O' && array[6]== 'O') || (array[1]== 'O' && array[4]== 'O' && array[7]== 'O')
    || (array[2]== 'O' && array[5]== 'O' && array[8]== 'O') || (array[0]== 'O' && array[4]== 'O' && array[8]== 'O')
    || (array[2]== 'O' && array[4]== 'O' && array[6]== 'O')){

        setTimeout(function() { 

            alert("Winner is : "+playerTwoName); 
            resetGame();

        }, 100);

    }else if(array.length == numberOfInput){

        setTimeout(function() { 

            alert("Match is draw !!!");
            resetGame(); 
        
        }, 100);
        
    }

}

function setNames(){

    var inputField = document.querySelectorAll("input");

    playerOneName = inputField[0].value;
    playerTwoName = inputField[1].value;

    whoseTurn.innerText = playerOneName;

}

function resetGame(){

    for(let i=0; i<9; i++){

        if(sections[i].innerText == 'X' || sections[i].innerText == 'O')
            sections[i].removeChild(sections[i].childNodes[0]);
        
        sections[i].style.pointerEvents = 'auto';

    }
    
    
    isPlayerOneTurn = true;
    playerOneName = "Player One";
    playerTwoName = "Player Two";
    whoseTurn.innerText = playerOneName;
    numberOfInput = 0;
    array.length = 0;
    array.length = 9;  

}