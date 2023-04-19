//task1
function power(a, b) {
    let c = 1;
    for (let i = 0; i < b; i++) {
        c *= a;
    }
    return c;
}

console.log(power(2, 4));


//task2
function evenOdd(arr) {
    let cut = 0;
    let tek = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            cut += arr[i]
        }
        else {
            tek += arr[i]
        }
    }
    return cut - tek
}

console.log(evenOdd([1, 4, 5, 8, 7, 6]));



//task3


//task4
function reverse(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

console.log(reverse([1, 4, 7, 85, 9, 2, 3]));



//task5
function test(num1, num2) {
    let bosh = []

    for (let i = 0; i < num1.length; i++) {
        let deyer = false;
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j]) {
                deyer = true;
                break
            }
        }

        if (!deyer) {
            bosh.push(num1[i])
        }
    }
    return bosh;
}

let num1 = [1, 5, 8, 11, 25, 9]
let num2 = [11, 1, 4, 2, 6, 9, 8]
let bos = test(num1, num2);
console.log(bos);
