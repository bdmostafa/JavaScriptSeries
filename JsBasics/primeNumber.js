function isPrime(n) {
    if (n === 1) {
        return `${n} is not a prime number`;
    } else if (n === 2) {
        return `${n} is a prime number`;
    } else {
        for (let i = 2; i < n / 2; i++) {
            if (n % i == 0) {
                return `${n} is not a prime number`;
            }
        }
        return `${n} is a prime number`;
    }
}

const prime = isPrime(15);
console.log(prime)