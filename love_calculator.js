var name1 = prompt("Enter your name?");
var name2 = prompt("Enter your name?");

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;

if(loveScore === 100){
    alert("Your compatibility is "+ loveScore+ "% You love eachother like kanye loves kanye.");
    
}else if(loveScore > 50){
    alert("Your compatibility is "+ loveScore+ "% You go well together.");
}else{
    alert("Your compatibility is "+ loveScore+ "% its a far shot for you to blossom");
}