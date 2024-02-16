// function play(){
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home section
    


//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     console.log(homeSection);
//     // console.log(homeSection.classList);

//     //step 2: show the playground 
//     const showThePlayground=document.getElementById('play-ground');
//     showThePlayground.classList.remove('hidden');

//     // console.log(showThePlayground.classList)
//     console.log(showThePlayground);


// }

function handlerKeyboardKeyUpEvent(event){
    const playerPress=event.key;
    console.log('player pressed ',playerPress);

    // stop the game if player pressed 'Esc';
    if(playerPress==='Escape'){
        gameOver();
    }

    // key player is expected to press
    const  currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPress===expectedAlphabet){
        console.log('you got a point !! ');
// step  1:
        const currentScore=getTextElementValueById('current-score');
        console.log(currentScore);
//  step 2:
      const newScore= currentScore+1;

// step 3: set value:
      setTextElementById('current-score',newScore);

// ----------------------------------------------------->
        // update score :
        // // 1.get the current score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // console.log(currentScore);
        
        
        
        // // 2.increase the score by 1;
        // const newScore = currentScore+1;

        // // console.log(newScore);
        // // 3.show the update score
        
        // currentScoreElement.innerText=newScore;
        // start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('durr vaiya or apu....... please right key now');


        const currentLife=getTextElementValueById('current-life');
       

        // step 2:
        const newLife =currentLife-1;
        // step 2

        setTextElementById('current-life',newLife);
        if(newLife === 0){
            gameOver();
        }
// --------------------------------------------------------->
        // // step.1: get the current number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // console.log(currentLife);
        // // step 2:reduce the life count
        // const newLife=currentLife-1;
        // // step 3: display the updated life count
        // currentLifeElement.innerText=newLife;
    }
    
    
    
  
}
// capture keyboard handler     
document.addEventListener('keyup',handlerKeyboardKeyUpEvent);

function continueGame(){
    // generate a random alphabet 
    const alphabet=getARandomAlphabet();
    // console.log('your random alphabet ',alphabet);

    // set randomly generate alphabet to the screen(show it)
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // set background color
    addBackgroundColorById(alphabet);
}

function play(){
 // hide everything show only playground

    HideElementById('home-screen');
    HideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementById('current-life', 5);
    setTextElementById('current-score',0);
    continueGame();
}

function gameOver(){
   
    HideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementById('last-score',lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet=getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}
// function playAgain(){
//     HideElementById('final-score');
//     showElementById('play-ground');
//     continueGame();
// }
