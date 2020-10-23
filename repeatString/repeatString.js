const repeatString = function (string, xTimes) {
    let i = 0;
    let result = '';
    if (xTimes < 0) {
        return 'ERROR';
    }
    while (i < xTimes) {
        result += string;
        i++;
    }
    return result;
}

module.exports = repeatString
