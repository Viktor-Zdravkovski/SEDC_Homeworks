let nizata = [3, 5, 6, 7, 2, 8, 234, 123156, 125, 125];

function someArray(arrays) {
    let Najmal = Infinity;
    let Najgolem = -Infinity;

    for (let i = 0; i < arrays.length; i++) {
        if (Najmal > arrays[i]) {
            Najmal = arrays[i];
        }

        if (Najgolem < arrays[i]) {
            Najgolem = arrays[i];
        }
    }
    console.log("Max: " + Najgolem, "Min: " + Najmal, "Sum: " + (Najgolem + Najmal));
}

someArray(nizata);
