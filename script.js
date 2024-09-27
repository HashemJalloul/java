// let firstName = "hashem";
// let lastName = " jalloul";
// let age = 31;
// let city = "latakia";
// let country = "syria";

// let hashemInfo =
//     firstName +
//     lastName +
//     "and his age: " +
//     age +
//     " he lives in: " +
//     city +
//     " in " +
//     country;

// let hashemInfo2 = `${firstName} ${lastName} and his age:  ${age} he lives in: ${city} in ${country}`;

// let hashemInfo2Object = {
//     firstName: "hashem",
//     lastName: " jalloul",
//     age: 31,
//     city: "latakia",
//     country: "syria",
// };

// let hashemInfo2FormObject = `${hashemInfo2Object.firstName} ${hashemInfo2Object.lastName} and his age is : ${hashemInfo2Object.age} he lives in ${city} in ${hashemInfo2Object.country}`;
// console.log(hashemInfo2FormObject);

// let students = [
//     "hashem0",
//     "hashem1",
//     "hashem2",
//     "hashem3",
//     "hashem4",
//     "hashem5",
// ];

// let text = "";

// for (let index = 0; index < students.length; index++) {
//     text = text + " " + students[index];

//     console.log(students[index]);
//     document.write(`${students[index]}\n`);
// }
// console.log(typeof students, students.length);

// console.log(text);

// students.forEach(function (item) {
//     console.log(item);
// });

// let index = 0;
// while (index < students.length) {
//     document.write(`${students[index]}\n`);
//     index++
// }

// function printHello(x, y) {

//     console.log(x, y);

// }
// printHello(10, 20)

// function cratAnewElement(text) {

//     let createdElement = document.createElement("div");

//     let body = document.querySelector("body");

//     body.appendChild(createdElement);

//     createdElement.innerHTML = text;

//     console.log(body);

//     console.log(createdElement);
// }

// cratAnewElement("hello from js");

// function cratAnewElement(text) {

//     let createdElement = document.createElement('div');
//     let body = document.querySelector('body');
//     body.appendChild(createdElement);
//     createdElement.innerHTML = text;

// }
// cratAnewElement("hello from js")

// let programmingLanguages = [
//     "c++",
//     "c",
//     "js",
//     "php",
//     "java"
// ]

// <td>
//     <button onclick="deleteButtons(event)" class="btn btn-danger delete-button">
//     Delete Row</button>
// </td>

// function language(lang) {

//     let createdElement = document.createElement('div');
//     let body = document.querySelector('body');
//     body.appendChild(createdElement);
//     createdElement.innerHTML = `This language is ${lang}`

// }
// programmingLanguages.forEach((item) => {
//     language(item)
// })

// const print = () => {
//     console.log(2);

// }

// print()

const addRowToTable = (name, last, handle, elementIndex) => {
    const tableBody = document.querySelector(".table tbody");

    tableBody.insertAdjacentHTML(
        "beforeend",
        `
        
                    <tr>
                        <th scope="row">${elementIndex}</th>
                        <td>${name}</td>
                        <td>${last}</td>
                        <td>${handle}</td>
                        
                        <td>
                            <button class="btn btn-danger delete-button-${elementIndex}">
                            Delete Row</button>
                        </td>
                    </tr>
        `
    );
};

let elementIndex = 0;

const newRowButton = document.querySelector(".add-new-button");

newRowButton.addEventListener("click", () => {

    const nameInput = document.querySelector(".name");
    const lastInput = document.querySelector(".last");
    const handleInput = document.querySelector(".handle");

    addRowToTable(nameInput.value, lastInput.value, handleInput.value, elementIndex);

    const deleteButton = document.querySelector(`.delete-button-${elementIndex}`)

    deleteButton.addEventListener("click", (event) => {

        event.target.parentElement.parentElement.remove()

    })
    elementIndex += 1

    nameInput.value = '';
    lastInput.value = "";
    handleInput.value = ""
});

// const nameInput = document.querySelector('.name')

// nameInput.addEventListener("input", (event) => {

//     const data = event.target.value

//     console.log(data);

// })


// const deleteButtons = (event) => {
//     const deleteButton = document.querySelector('.delete-button')

//     deleteButton.addEventListener('click', () => {


//         event.target.parentElement.parentElement.remove();

//     })

//     event.target.parentElement.parentElement.remove();

// }
