let nizata = [42, 35, 115, 72, 64, 58, 86];

function nizaVoHt(niza) {
    let items = " ";
    let sum = 0;

    for (let i = 0; i < niza.length; i++) {
        items += `<li> ${niza[i]}</li>`;
        sum = sum + niza[i];
    }
    return [items, sum];
}

document.querySelector("div").innerHTML = `
<ol>
${nizaVoHt(nizata)}
</ol>
`;