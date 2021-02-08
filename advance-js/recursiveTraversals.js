
let abc = { // the same object, compressed for brevity
    sales: [{ name: 'Bob', salary: 500 }, { name: 'Alice', salary: 2100 }],
    development: {
        sites: [{ name: 'John', salary: 2800 }, { name: 'Doe', salary: 900 }],
        internals: [{ name: 'Mostafa', salary: 1500 }]
    }
};

// The function to do the job
const sumSalaries = (department) => {
    if (Array.isArray(department)) { // case (1) for array type data
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2) for object type data
        let sum = 0;
        for (let subdepartments of Object.values(department)) {
            sum += sumSalaries(subdepartments); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
};

console.log(sumSalaries(abc)); // 7800