var clicked = document.querySelectorAll("button");

for (var i = 0; i< clicked.length; i++){
    clicked[i].addEventListener("click", function (){
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    })   
}