const firstName = 'Mostafa';
const profession = 'developer';
const workField = 'wep application'

function modify(strings, ...restValues) {
    // all data (static and dynamic) in [[array], array]
    console.log(arguments);
    // divided array in output [static data array], [dynamic data array]
    console.log(strings, restValues);

    let str = '';
    strings.forEach((string, i) => {
        str += ` ${string} <b> ${restValues[i] || ''}</b>`; // (|| '') this is to skip undefined for empty string
    });
    return str;
}

// Template tagging to modify dynamic data in template string
// Tag functions (here modify()) don't even need to return a string always!
const html = modify `
<h1> This is ${firstName.toUpperCase()}</h1>
<p> I am a ${profession}</p>
<p> I am working on ${workField}</p>
`
document.body.innerHTML = html;