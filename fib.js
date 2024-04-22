function fibsIt(value) {
    let array = [];
    for (let x = 0; x < value; x++) {
        if (x === 0 || x === 1) {
            array[x] = x;
        } else {
            array[x] = array[x - 2] + array[x - 1];
        }
    }
    return array;
}

console.log(fibsIt(8));

function fibsRec(value) {
    if (value <= 2) {
        return array = [0, 1, 1];
    }
    else {
        fibsRec(value - 1);
        array[value - 1] = array[value - 2] + array[value - 3];
    }
    return array;
}

console.log(fibsRec(8));
