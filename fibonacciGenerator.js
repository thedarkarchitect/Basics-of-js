var output = [];

function fibonacciGenerator(n){
    for(var i = 0; i < n; i++){
        if (i <= 1){
            output.push(i);
        }else{
            var end = output.length
            var next = output[end-2] + output[end-1]
            output.push(next);
        }
    }
    
    
    console.log(output);
}

fibonacciGenerator(100);