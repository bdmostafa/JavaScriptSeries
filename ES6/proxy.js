/* Proxy works as a Medium layer. The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

Proxy has two parameters
1. target: the original object which you want to proxy.
2. handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
*/
const target = {
    message1: "hello",
    message2: "everyone",
    message3: 'How are you:'
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);
console.log(proxy1.message3);

// To customize the proxy, we define functions on the handler object
const accessModifier = {
    // To get the property of target, use get method
    get(target, message1) {
        console.log(target[message1]); // hello
    },
    // To modify the data, use set method
    set(target, message2, value) {
        if (typeof value !== 'string') {
            console.log('Name should be a string');
        } else {
            target[message2] = value;
            console.log(target[message2]); // Mostafa
        }
    }
}
const proxy2 = new Proxy(target, accessModifier);

console.log(proxy2.message1);

// proxy2.message2 = 29;
// Name should be a string

proxy2.message2 = 'Mostafa';