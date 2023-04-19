// task3
// function test(num1, num2) {
//     let bosh = []

//     for (let i = 0; i < num1.length; i++) {
//         let deyer = false;
//         for (let j = 0; j < num2.length; j++) {
//             if (num1[i] === num2[j]) {
//                 deyer = true;
//                 break
//             }
//         }

//         if (!deyer) {
//             bosh.push(num1[i])
//         }
//     }
//     return bosh;
// }

// let num1 = [1, 5, 8, 11, 25, 9]
// let num2 = [11, 1, 4, 2, 6, 9, 8]
// let bos = test(num1, num2);
// console.log(bos);



// task4
let say = 3;
let arr = []

for (let i = 0; i < say; i++) {
    let obj = {
        name: "ali",
        ortalama: 4.5,
        qiymet: "A",
    }
    arr.push(obj);

    let obj2 = {
        name: "murad",
        ortalama: 2.5,
        qiymet: "A",
    }
    arr.push(obj2);

    let obj3 = {
        name: "nermin",
        ortalama: 3.1,
        qiymet: "C",
    }
    arr.push(obj3);

}

for (let i = 0; i < say; i++) {
    let student = arr[i];

    if (parseFloat(student.ortalama) >= 3.5 && student.qiymet === "A" || student.qiymet === "B") {
        console.log(`${student.name} kecdi`)
    }
    else {
        console.log(`${student.name} kece bilmedi`);
    }
}