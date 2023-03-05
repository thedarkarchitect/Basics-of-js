var friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];



function whosPaying(names){
    var guess = Math.floor((Math.random() * friends.length));
    var person = friends[guess];
    
    return person + " is going to buy lunch today!";
}

console.log(whosPaying(friends));