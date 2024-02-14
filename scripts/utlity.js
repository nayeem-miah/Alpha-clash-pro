function HideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
    // console.log(element)

}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}