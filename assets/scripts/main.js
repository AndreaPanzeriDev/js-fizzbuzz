

for(let i=1; i<=100; i++){

    //controllo se il numero è multiplo di 3
    if(i % 3 == 0){
        //controllo se il numero è ANCHE multiplo di 5
        if(i % 5 == 0){
            console.log("FizzBuzz");
        }else{
            //se non è ANCHE multiplo di 5 allora è solo multiplo di 3
            console.log("Fizz");
        }
    }else{
        console.log(i);
    }
}