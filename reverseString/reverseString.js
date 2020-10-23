const reverseString = function (string) {
    let reversedString = '';
    let box;
    let x = string.length;
    for (let i = 0; i < x; i++) {
        box = string.slice(-1);
        string = string.slice(0, -1);
        reversedString += box;
    }
    reversedString += string;
    return reversedString;
}

module.exports = reverseString
