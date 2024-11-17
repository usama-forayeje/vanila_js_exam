let name = "john"
let age = 25 
 
document.querySelector('.output').innerHTML = `My Name in ${name} and i m ${age} years old`;

document.querySelector("#checkButton").addEventListener("click", () => {
    const num = parseInt(document.querySelector("#numberInput").value);

    if( isNaN(num)){
        document.querySelector("#result").innerText = "Please inter a number."
    }else if (num % 2 === 0){
        document.querySelector("#result").innerText = "The number is even."
    }
    else {
        document.querySelector("#result").innerText = "The number is Odd."
    }

});

let result = '';
for(let i = 1; i <= 5 ; i++){
    result += i + "<br>"
}
document.querySelector("#loop").innerHTML = result

function addNumber (a, b ){
    return a + b;
}

const sum = addNumber(3, 7 );
document.querySelector("#addNumber").innerHTML = `The sum of 3 + 7 is ${sum}`

let fruits = ["apple", "banana", "cherry"];

const firstFruit = fruits[0];
const totalFruits = fruits.length;

fruits.push("orange");
document.querySelector("#fruits").innerHTML = `
<p>The first fruit is: ${firstFruit}</p>
<p>Total number of fruits: ${totalFruits}</p>
`;


const numbers = [1, 2, 3, 4, 5];

let doubledNumbers = [];
numbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

document.querySelector("#multiply").innerHTML = `
Original numbers: ${numbers.join(", ")}<br>
Doubled numbers: ${doubledNumbers.join(", ")}
`;


document.querySelector("#changeText").addEventListener("click", function() {
    document.querySelector("#container h1").innerText = "You clicked the button!";
});

const text = "hello world";

const upperCaseText = text.toUpperCase();
document.querySelector("#upper").innerText = upperCaseText;

const person = {
    name: "Usama Forayaje",
    age: 22,
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};
document.querySelector("#obj").innerText = person.greet();