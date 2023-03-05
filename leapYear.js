function isleap(year){
    var choice = "";
    if (year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                choice = "leap year";
            }else{
                choice = "not leap year";
            }
        }else{
            choice = "leap year";
        }
    }else{
        choice = "not Leap year";
    }

    return choice;
}

console.log(isleap(2001))