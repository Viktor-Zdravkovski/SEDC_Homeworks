let nizata = ["Hello", "There", "Students", "of", "SEDC", "!"];

function Arrays(someArray) {
    let sum = "";

    for (let i = 0; i < someArray.length; i++) {
        sum += someArray[i] + " ";
    }
    return sum;
}
console.log(Arrays(nizata));