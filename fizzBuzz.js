var output = [];
var num = 1;

function fizzBuzz(){
    
    if (num % 5 === 0 && num % 3 === 0){
        output.push("FizzBuzz");
    }else if (num % 5 === 0){
        output.push("Buzz");
    }else if (num % 3 === 0){
        output.push("Fizz");
    }else{
        output.push(num);
    }

    num ++;
    console.log(output);
    
}

fizzBuzz();//this will only show one was added but in the developer options of google the last number is remembered so an increment will happen and other numbers will be added
// to make this work you'd need a for loop 