function isPrime(n) {
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`;
}

const prime = isPrime(13);
console.log(prime)