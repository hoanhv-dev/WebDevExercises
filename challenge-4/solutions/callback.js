// Exercise 1

function processWhithCallback(value, callback) {
    if(typeof value !== "number" || typeof callback !== "function") {
        return "Please enter the number and function";
    }

    const result = callback(value);
    return result;
}

setTimeout(() => {
    console.log("Exercise 1");
    console.log(processWhithCallback(10, (x) => x * 2));
}, 1000);

// Exercise 2

// 1. Create a promise
// 2. Executor

// Status:
// - Pending (chờ đợi)
// - Fulfilled (thanh cong)
// - Rejected (that bai)

function simplePromise(value) {
    if(typeof value !== "number") {
        return "Please enter the number";
    }

    return new Promise(function(resolve){
        setTimeout(() => {
            console.log("Exercise 2");
            resolve(value + 1);
        }, 1000);
    });
}

// chain

simplePromise(2)
    .then((result) => {
        console.log(result);
        return simplePromise(result);
    })
    .then((result) => {
        console.log(result);
        return simplePromise(result);
    })
    .then((result) => {
        console.log(result);
    });


// Exercise 3

function errorCallback(value, callback) {
    if(typeof value !== "number" || typeof callback !== "function") {
        return "Please enter the number and function";
    }

    if(value < 0) {
        callback("Invalid value");
    } else {
        callback(value);
    }
}

errorCallback(-1, (error, result) =>{
    console.log("Exercise 3");
    
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
})

// Exercise 4
async function asyncSquare(num){
    if(typeof num !== "number") {
        return "Please enter the number";
    }


    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 0) {
                reject("Invalid value");
            } else {
                resolve(num * num);
            }
        }, 1000);
    });
    console.log("Exercise 4");
    await promise;
    return promise;
}

asyncSquare(2).then((result) =>{
    console.log(result);
});

// Exercise 5

async function fetchPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Exercise 5");
        return data;
    } catch (error) {
        console.log("Exercise 5");
        console.error('Error fetching post:', error);
        throw error;
    }
}

// Test the function
fetchPost(1).then(data => console.log(data.title));


// Exercise 6

function sequentialCallback(values, callback) {
    if (!Array.isArray(values) || typeof callback !== 'function') {
        return 'Please provide an array and a callback function';
    }

    for (let i = 0; i < values.length; i++) {
        setTimeout(() => {
            console.log('Exercise 6');
            callback(values[i]);
        }, i * 500);
    }
}

// Test the function
sequentialCallback([1, 2], result => console.log(result));


// Exercise 7

function instantResolve(value) {
    if (typeof value !== "string" && typeof value !== "number") {
        return "Please enter the string or number";
    }

    console.log("Exercise 7");
    return Promise.resolve(value);
}

instantResolve("Test").then(result => console.log(result));

// Exercise 8

async function safeAsyncCall(task) {
    try {
        const result = await task();
        console.log("Exercise 8");
        return result;
    } catch (error) {
        console.log("Exercise 8");
        return "Failed";
    }
}

const task = () => Promise.reject("Error");
safeAsyncCall(task).then(result => console.log(result)); // "Failed"

// Exercise 9

function basicChain(value) {
    if(typeof value !== "number") {
        return "Please enter the number";
    }

    return new Promise(function(resolve){
        resolve(value);
    });
}

basicChain(5)
    .then(function(result){
        return result - 1;
    })
    .then(function(result){
        console.log("Exercise 9");
        return result * 3;
    })
    .then(result => console.log(result));


// Exercise 10

function multiParamCallback(a, b, callback) {
    if(typeof a !== "number" || typeof b !== "number" || typeof callback !== "function") {
        return "Please enter the number and function";
    }
    
    const sum = a + b;
    const product = a * b;
    console.log("Exercise 10");
    return callback(sum, product);
}

// Test the function
multiParamCallback(2, 3, (sum, product) => console.log(sum, product));

// Exercise 11

function processArrayCallbacks(arr, processor, callback) {
    if(!Array.isArray(arr) || typeof processor !== "function" || typeof callback !== "function") {
        return "Please enter the array, function and callback function";
    }

    const results = [];
    let completed = 0;

    arr.forEach((element, index) => {
        processor(element, function(err, result) {
            if(err) {
                callback(err);
                return;
            }
            
            results[index] = result;
            completed++;

            if(completed === arr.length) {
                console.log("Exercise 11");
                callback(null, results);
            }
        });
    });
}

const processor = (x, callback) => setTimeout(() => callback(null, x * 2), 100);

// Test the function
processArrayCallbacks([1, 2], processor, (err, results) => console.log(results));


// Exercise 12

async function fetchSafe(url) {
    if (typeof url !== 'string') {
        return "Please enter the right format of url";
    }


    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Exercise 12");
        return { error: "Fetch failed" };
    }
}

fetchSafe('https://jsonplaceholder.typicode.com/invalid')
  .then(result => console.log(result)); // { error: "Fetch failed" }


// Exercise 13

function allWithTimeout(tasks, ms) {
    if (!Array.isArray(tasks) || typeof ms !== 'number') {
        return Promise.reject(new Error('Invalid arguments'));
    }

    const wrappedTasks = tasks.map(task => {
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Task timed out")), ms)
        );
        
        return Promise.race([
            task(),
            timeoutPromise
        ]).catch(error => {
            if (error.message === "Task timed out") {
                return "Timeout";
            }
            throw error;
        });
    });

    console.log("Exercise 13");
    return Promise.all(wrappedTasks);
}

{
const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 100))
];

allWithTimeout(tasks, 80).then(results => console.log(results)); // [1, "Timeout"]
}


// Exercise 14

async function sequentialWithCallback(tasks, callback) {
    if(!Array.isArray(tasks) || typeof callback !== "function") {
        return "Please enter the array and callback function";
    }
    
    const results = [];

    try {
        for(let i = 0; i < tasks.length; i++) {
            const result = await tasks[i]();
            results.push(result);
        }
        console.log("Exercise 14");
        callback(results);
    } catch (error) {
        console.error(error);
    }
}

{
    const tasks = [
        () => Promise.resolve(1),
        () => Promise.resolve(2)
    ];

    sequentialWithCallback(tasks, results => console.log(results)); // [1, 2]
}


// Exercise 15

function retryCallback(task, retries, callback) {
    if (typeof task !== 'function' || typeof retries !== 'number' || typeof callback !== 'function') {
        return "Please enter the function, number and callback function";
    }
    
    let attempts = 0;
    let lastError, lastResult;

    while (attempts <= retries) {
        let called = false;
        task((err, result) => {
            called = true;
            lastError = err;
            lastResult = result;
        });

        if (!lastError) {
            callback(null, lastResult);
            return;
        }
        attempts++;
        if (!called) break; 
        if (attempts > retries) {
            callback(lastError, lastResult);
            return;
        }
    }
}

// Test
{
let count = 0;
const task = callback => callback(count++ === 1 ? null : "Fail", "Success");
retryCallback(task, 2, (err, result) => console.log(result));
}

// Exercise 16

async function fetchWithRetries(urls, retries) {
    if (!Array.isArray(urls) || typeof retries !== 'number') {
        return "Please enter the array and number";
    }

    const results = [];
    for (const url of urls) {
        let attempts = 0;
        let success = false;

        while (attempts < retries && !success) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                results.push(data);
                success = true;
            } catch (error) {
                attempts++;
                if (attempts === retries) {
                    results.push({ error: `Failed to fetch ${url}` });
                }
            }
        }
    }
    console.log("Exercise 16");
    return results;
}

// Test the function
{
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/invalid'
];
const retries = 2;
fetchWithRetries(urls, retries)
    .then(results => console.log(results));
}

// Exercise 17

function next(i, tasks, results, callback) {
    if (i === tasks.length) {
        callback(null, results);
        return;
    }
    tasks[i]((err, res) => {
        if (err) {
            callback(err);
            return;
        }
        results = results.concat(res);
        next(i + 1, tasks, results, callback);
    });
}

function nestedCallback(tasks, callback) {
    if (!Array.isArray(tasks) || typeof callback !== 'function') {
        return "Please enter the array and callback function";
    }
    next(0, tasks, [], callback);
    console.log("Exercise 17");
}

// Test the function
{
const tasks = [
    (cb) => setTimeout(() => cb(null, [1, 2]), 100),
    (cb) => setTimeout(() => cb(null, [3, 4]), 100)
];
nestedCallback(tasks, (err, results) => {
    console.log(results); // [1, 2, 3, 4]
});
}

// Exercise 18
async function worker(tasks, results, nextIndexObj) {
    while (true) {
        let current;
        if (nextIndexObj.value < tasks.length) {
            current = nextIndexObj.value++;
        } else {
            break;
        }
        results[current] = await tasks[current]();
    }
}

async function limitedConcurrentPromises(tasks, limit) {
    const results = [];
    const nextIndexObj = { value: 0 };
    const workers = [];
    for (let i = 0; i < Math.min(limit, tasks.length); i++) {
        workers.push(worker(tasks, results, nextIndexObj));
    }
    await Promise.all(workers);
    return results;
}

// Test
{
    const tasks = [
      () => new Promise(resolve => setTimeout(() => resolve(1), 100)),
      () => new Promise(resolve => setTimeout(() => resolve(2), 50))
    ];
    limitedConcurrentPromises(tasks, 1).then(results => console.log(results));
}


// Exercise 19

async function retryAsyncCallback(task, retries, callback) {
    function taskPromise() {
        return new Promise((resolve, reject) => {
            task((err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    let lastError;
    for (let i = 0; i <= retries; i++) {
        try {
            const result = await taskPromise();
            callback(result);
            return;
        } catch (err) {
            lastError = err;
        }
    }
    callback(lastError);
}

// Test
{    
    let count = 0;
    const task = callback => setTimeout(() => callback(count++ === 1 ? null : "Fail", "Success"), 100);
    retryAsyncCallback(task, 2, result => console.log(result));
}


// Exercise 20

function fetchAndProcess(urls, processor, cb) {
    if (!Array.isArray(urls) || typeof processor !== "function" || typeof cb !== "function") {
        cb("Invalid input");
        return;
    }

    Promise.all(
        urls.map(url =>
            fetch(url)
                .then(res => res.json())
                .then(data => new Promise((resolve, reject) => {
                    processor(data, (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    });
                }))
        )
    )
    .then(results => cb(null, results))
    .catch(err => cb(err));
}

// Example usage:
{
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
  ];
  const processor = (data, cb) => cb(null, data.id);
  fetchAndProcess(urls, processor, (err, results) => console.log(results)); // [1, 2]
}
