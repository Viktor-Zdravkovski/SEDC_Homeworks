// Use the https://jsonplaceholder.typicode.com/todos.

// First, get the todo with id 1(https://jsonplaceholder.typicode.com/todos/1).
// Then, log the todo from the response

// BONUS

// Use the https://jsonplaceholder.typicode.com/api. ova api mi dava samo {}

// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos).
// Then, log the todo from the response, then use the userId from the response and get the details for that user (https://jsonplaceholder.typicode.com/users/[userId])
// Log the details for the user


let ask = prompt('vnesete id')
let firstTodo = 'https://jsonplaceholder.typicode.com/todos/1'
let finalTodo = 'https://jsonplaceholder.typicode.com/todos'

/////////////////////////////////////////////////////////////////////////
// async function fetchingFirstFunction() {
//     await fetch(firstTodo)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
// }

// async function fetchingSecondFunction() {

//     await fetchingFirstFunction()
//     fetch(finalTodo)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })

// }

// fetchingSecondFunction();

//////////////////////////////////////////////////////////////////////////////////////////////////
// BONUS

function fetchingFunction() {
    let personsId = `https://jsonplaceholder.typicode.com/users/${ask}`
    // if (ask > 10 || ask == null) {
    //     return alert('vnesovte ne valide input')
    // }
    if (!ask || ask > 10) {
        return alert('vnesovte ne valide input')
    }

    fetch(personsId)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

fetchingFunction();


