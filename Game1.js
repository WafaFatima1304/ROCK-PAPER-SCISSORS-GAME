let userScore=0;
let compScore=0; 

const choices= document.querySelectorAll('.choice');
const msg= document.querySelector('#msg'); 

const userScorepara= document.querySelector('#user-score'); 
const compScorepara= document.querySelector('#comp-score');

const gencompchoice= () => { 
    const options= ['rock', 'paper', 'scissors']; 
    const randIdx= Math.floor(Math.random() * 3); 
    return options[randIdx];
}

const drawgame= () => { 
    console.log("It's a draw!"); 
    msg.textContent= "It's a draw. Play again."; 
    msg.style.backgroundColor= "rgb(28,28,213";
} 

const showWinner= (userwin) => { 
    if(userwin===true){  
        userScore++;
            userScorepara.textContent= userScore;
            console.log("You win!"); 
            msg.textContent= "You win!"; 
            msg.style.backgroundColor= "green";
    } else{  
        compScore++;
        compScorepara.textContent= compScore;
        console.log("You lose");
        msg.textContent= "You lose"; 
        msg.style.backgroundColor= "red";
    }
}

const playGame= (userchoice) => { 
    console.log("user choice= ",userchoice); 
    const compchoice= gencompchoice(); 
    console.log("comp choice= ", compchoice); 
    if(userchoice === compchoice) { 
        drawgame(); }
        else { 
            let userwin=true; 
            if (userchoice==="rock"){ 
                userwin= compchoice==="paper"? false: true;
            } else if (userchoice==="paper") {
                userwin= compchoice==="scissors"? false: true;
             } else  { 
                userwin= compchoice==="rock"? false: true;

             }
             showWinner(userwin);
        }

 }

choices.forEach(choice => {
    
    choice.addEventListener('click', () => {  
        const userchoice= choice.getAttribute('id');
        console.log("choice was clicked-", userchoice);
        playGame(userchoice);


}) 
})