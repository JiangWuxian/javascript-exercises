const palindromes = function (string) {
    let reversedString = '';
    string = string.toLowerCase();
    string = string.replace(/,/g, '');
    string = string.replace(/ /g, '');
    string = string.replace(/!/g, '');
    string = string.replace(/[.]/g, '');
    let j = string.length;
    for (let i = 0; i <= string.length; i++) {
        reversedString += string.charAt(j);
        j--;
    }
    return string == reversedString ? true : false;
}

module.exports = palindromes
