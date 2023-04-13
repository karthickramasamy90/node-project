const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Executed success")
    }, 3000);
});
p1.then(console.log)

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Rejected")
    }, 2000)
});
p2.then(console.log).catch(console.log)

const f1 = (value, callback) => {
    let add = value + 25;

    return callback(add);
}

const callback = (add) => {
    return add + 10;
}

console.log(f1(5, callback));

const p3 = val => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve( val + 79)
    }, 3000);
});
p3(9).then(x => x + 99).then(console.log)