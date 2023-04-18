const test = (param) => {
    let count = 0;
    while (param !== 1) {
        if (param % 2 === 0) {
            param = param / 2
        }
        else{
            param = param + 1
        }
        count++
    }
    return count;
}
console.log(test(23));