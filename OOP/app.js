// some
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const mappedNumbers = [5, 9, 4, 7].mySome((element) => element % 2 === 0);
console.log(mappedNumbers);






//every
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

const mappedArray = [12, 3, 4, 2].myEvery((element) => element % 2 === 0);
console.log(mappedArray);








//filter
Array.prototype.myFilter = function (callback) {
    const filterArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filterArr.push(this[i]);
        }
    }
    return filterArr;
}
const names = ['Ulvi', 'Elgiz', 'Ali'];
const filterNames = names.myFilter(name => name !== 'Ulvi');
console.log(filterNames);








//includes
Array.prototype.myIncludes = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
const num = [1, 4, 7, 8, 5, 9, 6, 2]
const filterNum = num.myIncludes(number => number == 8)
console.log(filterNum);








//forEach
Array.prototype.myForEach = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result;
}
const num2 = [1, 4, 7, 8, 5, 9, 6, 2].myForEach((number) =>number ** 2);
console.log(num2);
