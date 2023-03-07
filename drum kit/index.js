var clicked = document.querySelectorAll("button");

function keypressed(button){
        switch (button){
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

                default: console.log(key)
        }
}

//for clicks
for (var i = 0; i< clicked.length; i++){
    clicked[i].addEventListener("click", function (){
        buttonInnerHTML = this.innerHTML;//this gets the event clicked on and returns it's inner html

        keypressed(buttonInnerHTML);
    });
}

//for keyboard
document.addEventListener("keydown", function(event){
    keypressed(event.key);
    //.key is a keyword to let the function know is receiving the event as a key action not a string
})
