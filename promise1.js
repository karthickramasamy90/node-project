const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Success")
    }, 2000)
});

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("Promise Rejected")
    }, 3000)

    setTimeout(() => {
        resolve("Promise success 2")
    }, 4000);
})

// p1.then(console.log);
// p2.then(console.log).catch(console.log)

const f1 = (val, callback) => {
    return callback(val + 10);
}

function callback(val) {
    return val + 20
};

// console.log(f1(1, callback));

const p3 = val => new Promise((resolve, reject) => {
    resolve(val + 15)
})

// p3(1).then(x => x + 20).then(console.log)

Promise.all([p1,p2,p3]).then(console.log).catch(console.log);
Promise.allSettled([p1, p2]).then(console.log).catch(console.log);
Promise.race([p1, p2]).then(console.log).catch(console.log)