

let li = document.createElement('span');
let ul = document.getElementById("list");


for (let i = 1; i <= 100; i++) {
    
    li.classList.add('text-primary');
    //controllo se il numero è multiplo di 3
    if (i % 3 == 0) {
        //controllo se il numero è ANCHE multiplo di 5
        if (i % 5 == 0) {
            console.log("FizzBuzz");
            li.innerText("FizzBuzz");
            ul.append(li);
        } else {
            //se non è ANCHE multiplo di 5 allora è solo multiplo di 3
            console.log("Fizz");
            li.innerText("Fizz");
            ul.append(li);
        }
    } else if (i % 5 == 0) {     //controllo se il numero è multiplo di 5
        console.log("Buzz");
        li.innerText("Buzz");
        ul.append(li);
    } else {
        //in alternativa il numero non è divisibile per nessuno dei due numeri
        console.log(i);
        li.innerText(i);
        ul.append(li);

    }
}