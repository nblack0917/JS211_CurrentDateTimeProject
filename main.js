// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let num = 100 + 23;
const convertToString = (a) => {
  if (typeof a == "number") {
    a.toString();
    console.log(a)
    return typeof a
  } else {
    return "Not a number"
  }
}

// console.log(convertToString(num))


// Write a JavaScript program to convert a string to the number.
let strng = "234.56";
const convertToNumber = (x) => {
  if (typeof x == "string") {
    Number(x)
    console.log(x)
    return typeof x
  } else {
    console.log("Not a string")
  }
}

// console.log(convertToNumber(strng))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const checkType = (b) => {
  return typeof b;
}  

// console.log(checkType(true))
// console.log(checkType(null))
// console.log(checkType(null))
// console.log(checkType(3))
// console.log(checkType(55))
// console.log(checkType("3"))

// Write a JavaScript program that adds 2 numbers together.
numOne = 0;
numTwo = 0;
numThree = "0";

const addition = (c, d) => {
  console.log(`${c} + ${d} = ${c + d}`)
  return `${c} + ${d} = ${c + d}`
}

// console.log(addition(numOne, numTwo))

// Write a JavaScript program that runs only when 2 things are true.

const trueAddition = (x, y) => {
  if (typeof x == "number" && typeof y == "number") {
    console.log(`${x} + ${y} = ${x + y}`)
    return `${x} + ${y} = ${x + y}`
  } else {
    return `Both of these are not numbers. ${x} is a ${typeof x} and ${y} is a ${typeof y}.`
  }
}

// console.log(trueAddition(numOne, numThree))


// Write a JavaScript program that runs when 1 of 2 things are true.
const mostlyTrueAddition = (c, d) => {
  if (typeof c == "number" || typeof d == "number") {
    console.log(`${c} + ${d} = ${c + d}`)
    return `${c} + ${d} = ${c + d}.   ${c} is a ${typeof c} and ${d} is a ${typeof d} which is why the total is ${c + d}`
  } else {
    return `Both of these are not numbers. ${c} is a ${typeof c} and ${d} is a ${typeof d}.`
  }
}

// console.log(mostlyTrueAddition(numOne, numThree))


// Write a JavaScript program that runs when both things are not true.  
const falseAddition = (c, d) => {
  if (typeof x != "string" && typeof y != "NaN") {
    console.log(`${c} + ${d} = ${c + d}`)
    return `${c} + ${d} = ${c + d}. Both were numbers and not something else.`
  } else {
    return "Both of these are not numbers"
  }
}

// console.log(falseAddition(numOne, numTwo))
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.
document.getElementById("submitButton").addEventListener("click", function() {
numOne = parseInt(document.getElementById("num-one").value);
numTwo = parseInt(document.getElementById("num-two").value);
numThree = document.getElementById("num-three").value;
})


const createH3 = (x, y) => {
  let newElement = document.createElement("h3");
  x.appendChild(newElement);
  let newContent = y;
  newElement.innerHTML = newContent;
}


document.getElementById("additionButton").addEventListener("click", function() {
  let answerBox = document.getElementById("addTotal");
  let results = addition(numOne, numTwo);
  createH3(answerBox, results);
  document.getElementById("additionButton").style.display = "none";
})
document.getElementById("numberButton").addEventListener("click", function() {
  let answerBox = document.getElementById("numberTotal")
  let results = trueAddition(numOne, numThree);
  createH3(answerBox, results);
  document.getElementById("numberButton").style.display = "none";
})
document.getElementById("truthButton").addEventListener("click", function() {
  let answerBox = document.getElementById("truthTotal")
  let results = mostlyTrueAddition(numOne, numThree);
  createH3(answerBox, results);
  document.getElementById("truthButton").style.display = "none";
})
document.getElementById("falseButton").addEventListener("click", function() {
  let answerBox = document.getElementById("falseTotal")
  let results = falseAddition(numOne, numTwo);
  createH3(answerBox, results);
  document.getElementById("flaseButton").style.display = "none";
})


// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
