let num=parseInt(Math.random()*100+1);
const submit= document.querySelector('#submit');
// let userinput=parseInt(document.querySelector('#guessField').value); whing as we need value when we submit 
let userInput=(document.querySelector('#guessField'));
let resultdisplay=document.querySelector('.message')
let guessmade=document.querySelector('.guesses');
let guessleft=document.querySelector('.chancesleft');
let guessleftval=10;
let resultdiv=document.querySelector('.resultParas');
console.log(resultdiv);
let para=document.createElement('p');
// let prevGuess=[];
let playgame=true;
if(playgame)
{
submit.addEventListener('click',e=>{
    e.preventDefault();
    console.log(num);
    let guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess); 
});
}
function validateGuess(val)
{
    if(isNaN(val))
        alert(`Please enter a number from 1 to 100`);
    else if(val<1)
        alert(`${val} is less than 1.Please enter a number from 1 to 100`);
    else if(val>100)
        alert(`${val} is greter than 100.Please enter a number from 1 to 100`);
    else
    {
        // prevGuess.push(val);
        if (guessleftval === 1)
        {
        //   displayGuess(val);
          displayMessage(`Game Over. Random number was ${num}`);
          endGame();
        }
        else
        {
          displayGuess(val);
          checkGuess(val);
        }
    }
}   
checkGuess=(guess)=>
{
    if(guess==num)
    {
        displayMessage(`Your Guess is correct.You Won!`);
        endGame();
    }
    else if(guess<num)
        displayMessage(`Guess is low.Try a higher number`);
    else
        displayMessage(`Guess is high.Try a lower number`);
}
function displayGuess(guess) {
    userInput.value = '';
    guessmade.innerHTML += `${guess}, `;
    console.log(guessleftval);
    guessleft.innerHTML = `${--guessleftval} `;
    console.log(guessleftval);
  }
displayMessage=(message)=>{
    resultdisplay.innerHTML=`<h2>${message}</h2>`
}
endGame=()=>{
    playgame=false;
    userInput.setAttribute('disabled','');
    para.classList.add('button');
    para.innerHTML='<h5 id="newgame">Start New game</h5>'
    resultdiv.appendChild(para);
    newgame();
}
newgame=()=>{
    let newgamebt=document.querySelector('#newgame');
    newgamebt.addEventListener('click',e=>
    {
        userInput.removeAttribute('disabled');
        guessmade.innerHTML='';
        num=parseInt(Math.random()*100+1);
        guessleftval=10;
        guessleft.innerHTML=`${10}`;
        resultdiv.removeChild(para);
        playgame=true;
        displayMessage('');
    }
    );
}

