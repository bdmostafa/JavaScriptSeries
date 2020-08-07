// False as undefined, 0, null, NaN, false, ''
// True as any value or empty string or empty array or empty object like '0', ' ', [], {}, true, 'false', 'true'

// FALSE ==========================================================
let data;
// When undefined, return false
if (data) {
    console.log('condition is true')
} else {
    console.log('condition is false'); // condition is false
}

// When value is zero '0', return false
data = 0;
if (data) {
    console.log('condition is true')
} else {
    console.log('condition is false'); // condition is false
}

// When value is null, return false
data = null;
if (data) {
    console.log('condition is true')
} else {
    console.log('condition is false'); // condition is false
}

// When value is null, return false
data = NaN;
if (data) {
    console.log('condition is true')
} else {
    console.log('condition is false'); // condition is false
}

// When value is false, return false
data = false;
if (data) {
    console.log('condition is true')
} else {
    console.log('condition is false'); // condition is false
}

// Blank space means false
data = '';
if (data) {
    console.log('condition is true');
} else {
    console.log('condition is false'); // condition is false
}


// TRUE ===============================================
// When value is true, return true
data = true;
if (data) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

// Zero (0) but string so return true
data = '0';
if (data) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

// Empty but array so return true
data = [];
if (data) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

data = 1;
if (data) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

if (data < 1) {
    console.log('condition is true');
} else {
    console.log('condition is false'); // condition is false
}

let name = 'Mostafa';
if (name) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

if (name.length > 0) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

if (name.length) {
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

// TRUE/FALSE
name = 0;
if (name || name === 0) {
    // false || true = true
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

name = 10;
if (name || name === 0) {
    // true || false = true
    console.log('condition is true'); // condition is true
} else {
    console.log('condition is false');
}

name = 11;
if (!name || name === 10) {
    // false || false = false
    console.log('condition is true');
} else {
    console.log('condition is false'); // condition is false
}