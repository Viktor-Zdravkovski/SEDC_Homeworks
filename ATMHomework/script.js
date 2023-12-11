console.log('ATM Machine');

let Pari = (parseInt(prompt('Vnesete suma na pari')));
let vkupnaSuma = 5000;

if (Pari > 5000) { 
    alert("Nemate tolku pari")
}

else{
    console.log(odzemeniPari(vkupnaSuma, Pari));
}

function odzemeniPari(a, b){
    let Money = (a - b)
    return Money;
}

