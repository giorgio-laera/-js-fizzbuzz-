console.log("JS funzionane")


//1. creare una variabile dove andare a salvare i valori

//2. creare un programma che vada a stampare i numeri da 1 a 100
//3. verificare se un numero e divisibile  per 3 e se si stampare  'Fizz'

//4. verificare se un numero e divisibile  per 5 e se si stampare  'Buzz'

//5. verificare se un numero e divisibile sia per 3 che per 5 e se si stampare  'FizzBuzz'
for ( let i = 1; i < 101; i++){

    if(i %3 ==0 && i % 5 == 0){
    
    console.log("fizz buzz");
} else if (i % 5 == 0 ) {
    console.log("buzz");
}else if (i %3 ==0 ){
       console.log("fizz");
}else{
    console.log(i);
}

}
