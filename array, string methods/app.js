//task1
// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
// ];

// students.forEach((element) => {
//     console.log(`${element.name} - ${element.points + 30}`);
// });        




//task2
// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

// const newArray = []
// bdays.forEach((element) => {
//     newArray.push(element.replace('-', '/'))
// });
// console.log(newArray);




//task3
// let numbers = [1.5, 2.56, 5.1, 12.33];
// const newNumbers = []
// numbers.forEach((element, index, arr) => {
//     newNumbers.push(Math.round(element));
// });
// console.log(newNumbers);




// task4
// Verilmish stringdeki ededleri cemleyin --> reduce 
const b = "5,4,3,2,1"
const sum = b.split(",").map(number => parseInt(number)).reduce((c, d) => c + d);
console.log(`verilmis stringdeki ededlerin cemi: ${sum}`);




// //task5
// let words = "skmscmks cmkscm jsc ssksks sks"
// const text = words.split(" "); 
// const newArr = text.length
// console.log(newArr);




//task6
const capitalLetter = (param) => {
    let words = param.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}

console.log(capitalLetter("hi, my name is ulvi"));



//task7
function names(params) {
    let bosh = 0
    let herf = "i"
    for (let i = 0; i < params.length; i++) {
        if (params[i].toLowerCase() == herf) {
            bosh++;
        }
    }
    console.log(`verilmish metindeki ${herf} herfinin sayi: `+bosh);
}
names('Salam menim adim Ulvidir');