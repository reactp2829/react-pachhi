const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

//function 
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        colorChange(e.target.id)
    })
}) 
//color change
function colorChange(color){
    body.style.backgroundColor = color;
}