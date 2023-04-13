async function f1 () {
    return 1;
}

async function f2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success")
        }, 3000);
    })

    // setTimeout(() => {
    //     console.log("Success")
    // }, 4000);
}

async function f3() {
    const output = await f2();
    console.log(output);
    console.log("Log 2")
}

// f3().then(console.log).catch(console.log);
f3();

async function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 3000)
    })
}

async function f5() {
    const output = await f4();

    console.log(output);
    console.log("Render after await fun")

    const v1 = await f4();
    const v2 = await increment(v1);
    const v3 = await increment(v2);
    const v4 = await increment(v3);
    
    console.log(v4)

    // f4().then(res => increment(res))
    //     .then(res => increment(res))
    //     .then(res => increment(res))
    //     .then(console.log)
}

async function increment(val) {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve(val +1)
    }), 2000)
}

f5()