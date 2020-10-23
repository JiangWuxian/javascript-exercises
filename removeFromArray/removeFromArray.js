const removeFromArray = function (theArray, ...theArgs) {
    for (let i = 0; i < theArray.length; i++) {
        let x = 0;
        while (x < theArgs.length) {
            while (theArray[i] === theArgs[x]) {
                theArray.splice(i, 1);
                x = 0;
            }
            x++;
        }
    }
    return theArray;
}

module.exports = removeFromArray
