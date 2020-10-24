const sumAll = function (x, y) {
    let sum = 0;
    if (typeof (x) != typeof (0) || typeof (y) != typeof (0)) {
        return 'ERROR';
    } else if (y < 0 || x < 0) {
        return 'ERROR';
    } else if (x < y) {
        for (x; x <= y; x++) {
            sum += x;
        }
        return sum;
    } else if (x > y) {
        for (y; y <= x; y++) {
            sum += y;
        }
        return sum;
    } else {
        return x;
    }
}

module.exports = sumAll
