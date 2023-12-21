let recept = prompt('Vnesete go imeto na receptot');
let ingredients = (parseInt(prompt('Kolku sostojki ni trebaat za toa?')));
let nameOfIngredients = []
let div1 = document.getElementById('recept')
let div2 = document.getElementById('sostojkiDiv')


for (let i = 0; i < ingredients; i++) {
    let ing = prompt("vnesi sostojka " + (i + 1) + ":");
    nameOfIngredients.push(ing)
}

div1.innerHTML =
    `<h1>receptot e ${recept}, 
    za toa ni se potrebni ${ingredients} sostojki</h1>
    <h2>stostojkite se : </h2><br>`


// Za ova pod komentarov iskreno koristev google i gledav reshenija i iskreno neshto i kopirav
document.write("<ul>");
for (let j = 0; j < nameOfIngredients.length; j++) {
    document.write("<li>" + nameOfIngredients[j] + "</li>")
}
document.write("</ul>")
