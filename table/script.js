function tablePrinter() {
    let aRow = document.getElementById("rows");
    let aColumn = document.getElementById("columns");
    let divArea = document.getElementById("boxForTable");
    let printer = ""; // dodadeno

    printer = ("<table border=1>");
    for (let i = 0; i < aRow.value; i++) {
        printer += "<tr>"; //

        for (let j = 0; j < aColumn.value; j++) {
            printer += "<td width=50 height=50></td>&nbsp;"; // prvo mi beshe divArea pa smeniv vo ova shto e segashno
        }
        printer += "</tr>"; // isto divArea.innerHTML mi beshe predhodno
    }
    printer += "</table>";//
    divArea.innerHTML = printer;
}

// mislev da mu stavam event listener na button-ot no sfativ deka mozham da mu stavam vo samiot html

/////////////////////////////////////////////////////////////////
// subButton.addEventListener('click', function () {
//     tabela()
// });
/////////////////////////////////////////////////////////////////

//  namerno go ostaviv ova bidejki mi e zemeno od google i racno go pishuvav i go proveruvav za da vidam kade mi se greshkite
// i ne mi e jasno zashto funcijata ne raboti ako smenam drugo ime osven printTable?
// nema vrska... ne sum dodal += kaj shto se zatvara tabelata...

// function printTable() {
//     let nRows = document.getElementById("rows");
//     let nColumns = document.getElementById("columns");
//     let spaceofDiv = document.getElementById("box");
//     let tableStr = "";

//     tableStr = ("<table border=1>");
//     for (i = 0; i < nRows.value; i++) {
//         tableStr += "<tr>";

//         for (j = 0; j < nColumns.value; j++) {
//             tableStr += "<td width=50 height=50></td>&nbsp;";
//         }
//         tableStr += "</tr>";
//     }
//     tableStr += "</table>"
//     spaceofDiv.innerHTML = tableStr;

// }