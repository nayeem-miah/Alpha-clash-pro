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

function play(){
    HideElementById('home-screen');
    showElementById('play-ground');
}
