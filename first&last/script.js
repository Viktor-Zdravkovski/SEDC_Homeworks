let firstName = ["Mitre", "Stanko", "Petre", "Ljupco"];
let lastname = ["Simonovski", "Petrovski", "Ivanovski", "Gjorgievski"];

let singlearrayOfNames = [];

for (let i = 0; i < firstName.length; i++) {
    singlearrayOfNames.push(firstName[i] + " " + lastname[i]);
}

console.log(singlearrayOfNames);