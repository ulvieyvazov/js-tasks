let n = 20;
let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    count++;
  }
}

console.log(`${n}-in ${count} qeder boleni var`);