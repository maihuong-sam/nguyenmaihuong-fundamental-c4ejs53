// // 1. create a random number from 0 to 1

// for (let i=0; i < 10; i++){
//     var numberRandom = Math.random(i);
//     console.log(numberRandom);
// }

// // 2. randomly pick an item from an array

// var arr = [2, 5, 6, 9, 10];
// var randomItem = arr[Math.floor(Math.random()*arr.length)];
// console.log(randomItem);

// // 3.

var listQuizzes = [ {
        question: "Which fictional detective at 221b Baker Street ?",
        choices: {
            1: "Watson",
            2: "Sam Spade",
            3: "Scubidu",
            4: "Sherlock Holmes"
        },
        rightChoice: "1"
    },
    {
        question: "What sweet food made by bees using nectar from flowers ?",
        choices: {
            1: "Bread",
            2: "Honey",
            3: "Suger",
            4: "Potent"
        },
        rightChoice: "1"
    },
    {
        question: "How many legs do an optopus has ?",
        choices: {
            1: "4 legs",
            2: "no legs",
            3: "8 legs",
            4: "2 legs"
        },
        rightChoice: "1"
    }
];


var randomQuizz = listQuizzes[Math.floor(Math.random()*listQuizzes.length)];
console.log(randomQuizz);
var randomQuestion = randomQuizz["question"];
var randomChoiceObj = randomQuizz["choices"];
var arrKeyChoice = Object.keys(randomChoiceObj);
// for (i=0; i<)
var userInput = prompt(`${randomQuestion} \n ${arrKeyChoice}. ${randomChoiceObj[arrKeyChoice]}`)


    


