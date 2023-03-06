image = ["",  "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var randnum = Math.floor((Math.random() * 6)) + 1;

var randnum2 = Math.floor((Math.random() * 6)) + 1;


var dice1 = document.getElementsByTagName("img")[0];
dice1.setAttribute("src", "images/dice"+randnum+".png");


var dice2 = document.getElementsByTagName("img")[1];
dice2.setAttribute("src", "images/dice"+randnum2+".png");

if (randnum > randnum2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}else if (randnum2 > randnum){
    document.querySelector("h1").innerHTML="Player2 wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
