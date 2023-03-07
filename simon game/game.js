// var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];
console.log(randomChosenColor);
// // gamePattern.push(randomChosenColor);
// $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
$(""+randomChosenColor).on("click", function(randomChosenColor){
    switch(randomChosenColor){
        case "red":
            var audio1 = new Audio("sounds/"+randomChosenColor+".mp3");
            audio1.play();
            break;
        
        case "green":
            var audio2 = new Audio("sounds/"+randomChosenColor+".mp3");
            audio2.play();
            break;
    
        case "yellow":
            var audio3 = new Audio("sounds/"+randomChosenColor+".mp3");
            audio3.play();
            break;
    
        case "blue":
            var audio4 = new Audio("sounds/"+randomChosenColor+".mp3");
            audio4.play();
            break;
        
        default:
            console.log(randomChosenColor);
    }
    
});



