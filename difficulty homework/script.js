// Basic
// Place the JSON cars.json to your GitHub repository. Use the fetch method to get the data from the server. Display the cars data in a table.//

// Medium
// Add inputs to filter the data:

// By type (input type: select)
// By brand (input type: select)
// Add a search button. When clicked the table should be filtered by the selected filters.

// Advanced
// Add these additional inputs:

// By model (input type: text input)
// By doors (input type: number input)
// By gasType (input type: select)
// By color (input type: text OR select)
// By new/old (input type: radio or checkbox) - you are free to choose the input type and the way you want to display the data (just new, just old, both, etc.)
// By horsepower (input type: number, range input) - you are free to choose the input type and the way you want to display the data (exact value, up to value, etc.)

let table = document.getElementById("table");
let filterType = document.getElementById("filterType");
let filterBrand = document.getElementById("filterBrand");
let filterModel = document.getElementById("filterModel");
let filterDoors = document.getElementById("filterDoors");
let filterGasType = document.getElementById("filterGasType");
let filterColor = document.getElementById("filterColor");
let filterHorsepower = document.getElementById("filterHorsepower");
let filterIsNew = document.getElementById("filterIsNew");
let filterIsOld = document.getElementById("filterIsOld");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");

let cars = [];

function fetchingApiDataFn() {
    let link = 'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json'

    fetch(link)
        .then(response => response.json())
        .then(data => {
            cars = data;
            creatingTableFunction();
        });
}
fetchingApiDataFn();

function creatingTableFunction(filteredCars = cars) {
    let rows = " ";
    if (filteredCars.length === 0) {
        rows = `<td><h2>NO DATA FOUND!</h2></td>`;
    } else {
        filteredCars.forEach(r => {
            rows += `<tr >
        <td>${r.type}</td>
        <td>${r.brand}</td>
        <td>${r.model}</td>
        <td>${r.doors}</td>
        <td>${r.gasType}</td>
        <td>${r.color}</td>
        <td>${r.isNew}</td>
        <td>${r.horsepower}</td>
      </tr>`;
        });
    }

    table.innerHTML = `
      <tr>
        <th>Type</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Doors</th>
        <th>Gas Type</th>
        <th>Color</th>
        <th>Is it New</th>
        <th>Horsepower</th>
      </tr>
      ${rows}`;
}

searchBtn.addEventListener("click", function filterTable() {
    let filteredCars = cars;

    if (filterType.value !== "") {
        filteredCars = filteredCars.filter(car => car.type === filterType.value);
    }

    else if (filterBrand.value !== "") {
        filteredCars = filteredCars.filter(
            car => car.brand === filterBrand.value
        );
    }
    else if (filterModel.value !== "") {
        let partModel = filterModel.value.toLowerCase();
        filteredCars = filteredCars.filter(car =>
            car.model.toLowerCase().includes(partModel)
        );
    }

    else if (filterGasType.value !== "") {
        filteredCars = filteredCars.filter(
            car => car.gasType === filterGasType.value
        );
    }

    else if (filterColor.value !== "") {
        let partialColor = filterColor.value.toLowerCase();
        filteredCars = filteredCars.filter(car =>
            car.color.toLowerCase().includes(partialColor)
        );
    }

    else if (filterDoors.value !== "") {
        filteredCars = filteredCars.filter(car => car.doors == filterDoors.value);
    }

    else if (filterIsNew.checked || filterIsOld.checked) {
        if (filterIsNew.checked) {
            filteredCars = filteredCars.filter(car => car.isNew === true);
        } else {
            filteredCars = filteredCars.filter(car => car.isNew === false);
        }
    }

    filteredCars = filteredCars.filter(
        car => car.horsepower >= filterHorsepower.value
    );

    creatingTableFunction(filteredCars);
});
resetBtn.addEventListener("click", function resetBtn() {
    creatingTableFunction();
});
