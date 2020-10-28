const fibonacci = function (n) {
    let fibo = [1, 1];
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 1;
    } else if (n < 0) {
        return 'OOPS';
    } else {
        for (let i = 2; i < n; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
        return fibo[n - 1];
    }
}

module.exports = fibonacci
