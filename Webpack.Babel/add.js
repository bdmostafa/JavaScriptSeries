// Multiple exports
export function add(x, y, z) {
    return x + y + z;
}

export function square(x) {
    return x * x;
}

// Default exports
// default export must not be more than one
export default function squarePlusAdd(a, b) {
    return a * a + b;
}

// Or can be use in separate line like below
// export default squarePlusAdd;