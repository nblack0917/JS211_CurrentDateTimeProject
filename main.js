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
let num = 0;


let newString = "";
const convertToString = (a) => {
  if (typeof a == "number") {
    newString = a.toString();
    console.log(newString)
    return `"${num}" is now a ${typeof newString}`
  } else {
    return "Not a number"
  }
}

// console.log(convertToString(num))


// Write a JavaScript program to convert a string to the number.
let strng = "";
let newNum = 0;
const convertToNumber = (x) => {
  newNum = Number(x);
  if (isNaN(newNum)) {
    newNum = Number(x)
    // console.log(newNum)
    return `Please type numbers into the field`
  } else {

    return `${strng} is now a ${typeof newNum}`
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
let typeCheckOf = ""

const checkType = (b) => {
  let checkString = b.toLowerCase();
  let checkNum = Number(b)
  if (b === null || checkString === "null") {
    console.log(b)
    return "This is null"
  } else if (b == undefined || checkString === "undefined") {
    console.log(b)
    return "This is Undefined"
  } else if (checkString === "true" || checkString === "false" || b == true || b == false) {
    console.log(b)
    return "This is a Boolean"
  } else if (isNaN(checkNum)) {
    console.log(checkString)
    return "This is a String"
  } else if (typeof checkNum === "number") {
    console.log(checkNum)
    return "This is a Number"
  } 
}  


// console.log(checkType(true))
// console.log(checkType("False"))
// console.log(checkType(null))
// console.log(checkType(undefined))
// console.log(checkType("55"))
// console.log(checkType("Hello"))

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
    return `Both of these are not numbers. <br> <i>${x} is a ${typeof x} and ${y} is a ${typeof y}.</i>`
  }
}

// console.log(trueAddition(numOne, numThree))


// Write a JavaScript program that runs when 1 of 2 things are true.
const mostlyTrueAddition = (c, d) => {
  if (typeof c == "number" || typeof d == "number") {
    console.log(`${c} + ${d} = ${c + d}`)
    return `${c} + ${d} = ${c + d}.<br>  <i>${c} is a ${typeof c} and ${d} is a ${typeof d} which is why the total is concatenated to ${c + d}</i>`
  } else {
    return `Both of these are not numbers. ${c} is a ${typeof c} and ${d} is a ${typeof d}.`
  }
}

// console.log(mostlyTrueAddition(numOne, numThree))


// Write a JavaScript program that runs when both things are not true.  
const falseAddition = (c, d) => {
  if (typeof x != "string" && typeof y != "NaN") {
    console.log(`${c} + ${d} = ${c + d}`)
    return `${c} + ${d} = ${c + d}.<br> <i>Both were numbers and not something else.</i>`
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
document.getElementById("firstMath").style.visibility = "visible"
})


const createH3 = (x, y) => {
  let newElement = document.createElement("h3");
  x.appendChild(newElement);
  let newContent = y;
  newElement.innerHTML = newContent;
  newElement.classList.add("results")

}

document.getElementById("toStringSubmit").addEventListener("click", function() {
  console.log("click string")
  num = parseInt(document.getElementById("numToString").value);
  let answerBox = document.getElementById("toStringResults");
  let results = convertToString(num);
  answerBox.innerHTML = "";
  createH3(answerBox, results);
})
document.getElementById("toNumSubmit").addEventListener("click", function() {
  console.log("click num")
  strng = document.getElementById("stringToNum").value;
  let answerBox = document.getElementById("toNumResults");
  let results = convertToNumber(strng);
  answerBox.innerHTML = "";
  createH3(answerBox, results);
})
document.getElementById("checkTypeSubmit").addEventListener("click", function() {
  console.log("click type")
  checkTypeOf = document.getElementById("check-type").value;
  let answerBox = document.getElementById("typeResults");
  let results = checkType(checkTypeOf);
  answerBox.innerHTML = "";
  createH3(answerBox, results);
})
document.getElementById("additionButton").addEventListener("click", function() {
  let answerBox = document.getElementById("addTotal");
  let results = addition(numOne, numTwo);
  createH3(answerBox, results);
  document.getElementById("additionButton").style.display = "none";
  document.getElementById("secondMath").style.visibility = "visible"
})
document.getElementById("numberButton").addEventListener("click", function() {
  let answerBox = document.getElementById("numberTotal")
  let results = trueAddition(numOne, numThree);
  createH3(answerBox, results);
  document.getElementById("numberButton").style.display = "none";
  document.getElementById("thirdMath").style.visibility = "visible"
})
document.getElementById("truthButton").addEventListener("click", function() {
  let answerBox = document.getElementById("truthTotal")
  let results = mostlyTrueAddition(numOne, numThree);
  createH3(answerBox, results);
  document.getElementById("truthButton").style.display = "none";
  document.getElementById("fourthMath").style.visibility = "visible"
})
document.getElementById("falseButton").addEventListener("click", function() {
  let answerBox = document.getElementById("falseTotal")
  let results = falseAddition(numOne, numTwo);
  createH3(answerBox, results);
  document.getElementById("falseButton").style.display = "none";
})

document.getElementById("resetButton").addEventListener("click", function() {
  console.log("reset clicked")
  document.getElementById("firstMath").style.visibility = "hidden";
  document.getElementById("additionButton").style.display = "block";
  document.getElementById("addTotal").innerHTML = "";
  document.getElementById("secondMath").style.visibility = "hidden";
  document.getElementById("numberButton").style.display = "block";
  document.getElementById("numberTotal").innerHTML = "";
  document.getElementById("thirdMath").style.visibility = "hidden";
  document.getElementById("truthTotal").innerHTML = "";
  document.getElementById("fourthMath").style.visibility = "hidden";
  document.getElementById("truthButton").style.display = "block";
  document.getElementById("falseTotal").innerHTML = "";
  document.getElementById("falseButton").style.display = "block"
})

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
