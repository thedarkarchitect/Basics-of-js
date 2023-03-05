function beer(){
    var bottles = 99;
    while(bottles >= 0){
        if(bottles > 1){
            console.log(bottles +" bottles of beer on the wall, "+bottles+" bottles of beer. Take 1 down, pass it around, "+(bottles - 1)+" bottles of beer on the wall.")
        }else if( bottles === 1){
            console.log(bottles +" bottles of beer on the wall, "+bottles+" bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        }else{
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        bottles--;
    }   
}

beer();