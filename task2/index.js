const arr = [1, 9, 9, 3, 3, 4, 4, 5, 5];

function findOdd(A) {
    const arrMaxInt = Math.max.apply(null, A);
    const arrMinInt = Math.min.apply(null, A)
    const obj = {};
    A.forEach((int) => {
        for (let i = arrMinInt; i <= arrMaxInt; i++) {
            if (i === int) {
                if (obj[i]) {
                    obj[i].push(int);
                } else {
                    obj[i] = [int];
                }
            }
        }
    })
    let res = 0;
    for (let key of Object.values(obj)) {
        if (key.length % 2) {
            res = key[0];
        }
    }

    return res;
}

//or

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


