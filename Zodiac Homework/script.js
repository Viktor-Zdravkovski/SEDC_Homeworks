console.log('Homework Chinese zodiac');

let ChineseZodiac = parseInt(prompt('vnesete godina'))

ChineseZodiac = ((ChineseZodiac-4) % 12)



if (ChineseZodiac == 0) {
    console.log('Rat');
}

else if (ChineseZodiac == 1) {
    console.log('Ox');
}

else if (ChineseZodiac == 2) {
    console.log('Tiger');
}

else if (ChineseZodiac == 3) {
    console.log('Rabbit');
}

else if (ChineseZodiac == 4) {
    console.log('Dragon');
}

else if (ChineseZodiac == 5) {
    console.log('Snake');
}

else if (ChineseZodiac == 6) {
    console.log('Horse');
}

else if (ChineseZodiac == 7) {
    console.log('Goat');
}

else if (ChineseZodiac == 8) {
    console.log('Monkey');
}

else if (ChineseZodiac == 9) {
    console.log('Rooster');
}

else if (ChineseZodiac == 10) {
    console.log('Dog');
}

else if (ChineseZodiac == 11) {
    console.log('Pig');
}

else{
    console.log('Ne validen input');
}

