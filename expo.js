// extract argument passed through CLI
// and parse to integer
const arg = parseInt(process.argv[2]);

// verify if a number is a prime number
const isPrime = (num) => {
    // parse absolute value of number to integer
    num = parseInt(Math.abs(num));
    // verify that the number must be greater than 2:
    // [2 is the smallest prime number]
    if (num < 2) return false;
    // loop over from 2 to the number-1 to check if the
    // number has a factor which is also a perfect divisor
    for (let idx = 2; idx < num; idx++) {
        // return false if a perfect divisor exists
        if (num % idx === 0) return false;
    }
    // return true if no perfect divisor exists
    return true;
};

const primeFactors = (num) => {
    num = parseInt(num);

    const primes = returnPrimes(num);
    // THESE AREN'T ALL PRIMES...
    // const primes = [2, 3, 5, 7, 11, 13, 17, 19];

    const factors = [];

    if (num < 0) {
        factors.push(-1);
        num = Math.abs(num);
    }

    for (let prime of primes) {
        while (num % prime === 0) {
            factors.push(prime);
            num /= prime;
        }
        // [NOT NECESSARY] THIS WILL EFFICIENTLY BREAK LOOP
        // SINCE NO MULTIPLE SHOULD BE LESSER THAN 2
        if (num < 2) {
            break;
        }
    }
    return factors;
};

const returnPrimes = (num) => {
    num = parseInt(Math.abs(num));
    const primes = [];
    const nums = [...Array(++num).keys()].splice(1);
    for (let num of nums) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
};

// console.log(isPrime(arg));
console.log(primeFactors(arg));
// console.log(returnPrimes(arg));
