"use strict";


// ---- 1


let link ="https://google.com";

function linkCheck(link) {
    let resultLink = link.indexOf("https://") !== -1 ? "კი, მოიცავს" : "არა, არ მოიცავს";
    return resultLink
}

console.log(linkCheck(link));



// ---- 2
const body = document.body;

const newDiv = document.createElement('div');
newDiv.className = 'wrapper';

const img = document.createElement ('img');
img.src = 'hello.jpg';
img.alt = 'hello world';

const newEl = document.createElement('h2');
newEl.className = 'title';
newEl.textContent = 'image title';

newDiv.appendChild(img);
newDiv.appendChild(newEl);
body.appendChild(newDiv);

newEl.style.color = 'red';
newEl.style.fontSize = '30px';



// ---- 3

let element2 = document.querySelectorALL(".container");

for (let i=0; i <container.length; i++) {
    let newElement = containers [i];
    let newElement2 = document.createElement("p");
    newElement2.className= "text";
    newElement2.textContent= "Hello!";
    newElement.appendChild(newElement2);
}


// ---- 4 

let array6= [-1, -2, -3, 4];

function positive(arr6) {
    return arr6.some (num => num > 0) ? 'აქ არის მინიმუმ ერთი დადებითი რიცხვი' :
    'მასივში არ არის დადებითი რიცხვი';
}


console.log(positive(array6));


// ---- 5

const homework = '12345';

const array1 = homework.split('').map(Number);


const sumArray1 = array1.reduce ((acc, num) => acc + num, 0);

const resultSum = parseInt (array1.join (''));


console.log(array1);
console.log(sumArray1);
console.log(resultSum);



// ---- 6

const arrayNum = [4, 5, 7, 8, 9];

const sumNum = arrayNum.reduce((accumulator, currNum) => accumulator + currNum, 0);

console.log(sumNum);





