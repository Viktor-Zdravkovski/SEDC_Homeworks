// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) 
// There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says:
// NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table
// contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should
// disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the 
// table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// neshto prebaruvav neshto prepishav


let number = 1;
const nextButton = document.getElementById("nextBtn");
const nextPageTable = document.getElementById("table")
nextButton.addEventListener('click', function () {
    previousButton.disabled = false
    number++;
    fetch(`https://swapi.dev/api/planets/?page=${number}`)
        .then((data) => {
            data.json()
                .then(theResults => {
                    console.log(theResults);
                    nextPageTable.innerHTML = ` 
                    <tr>
                    <th>Planet Name:&nbsp; </th>
                    <th>Population:&nbsp; </th>
                    <th>Climate:&nbsp; </th>
                    <th>Gravity: &nbsp;</th>
                </tr>`

                    for (let theNextItems of theResults.results) {
                        nextPageTable.innerHTML += `
                        <tr>
                        <td>${theNextItems.name}</td>
                        <td>${theNextItems.population}</td>
                        <td>${theNextItems.climate}</td>
                        <td>${theNextItems.gravity}</td>
                        </tr>`

                    }
                    if (theResults.next === null) {
                        nextButton.disabled = true;
                    }
                })

        })

    nextPageTable.innerHTML = "";
});


const previousPageTable = document.getElementById("table")
const previousButton = document.getElementById("previousBtn")
previousButton.addEventListener('click', function () {
    number--;
    nextButton.disabled = false;
    fetch(`https://swapi.dev/api/planets/?page=${number}`)
        .then((data) => {
            data.json()
                .then(theResultsMax => {
                    console.log(theResultsMax);
                    nextPageTable.innerHTML += `
                    <tr>
                    <th>Planet Name</th>
                    <th>Population</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    </tr>
                    `

                    for (let previousItems of theResultsMax.results) {
                        nextPageTable.innerHTML += `
                        <tr>
                        <td>${previousItems.name}</td>
                        <td>${previousItems.population}</td>
                        <td>${previousItems.climate}</td>
                        <td>${previousItems.gravity}</td>
                        </tr>
                        `
                    }
                    if (theResultsMax.previous === null) {
                        previousButton.disabled = true;

                    }

                })
        })
    nextPageTable.innerHTML = ""
})