console.log('Type of homework');

function getType(Input){
    return typeof(Input);
}

console.log(getType({}));
console.log(getType(true));
console.log(getType(12));
console.log(getType("Krokodil"));
console.log(getType(undefined));