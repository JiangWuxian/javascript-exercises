const getTheTitles = function (array) {
    const bookName = array.map(book => `${book.title}`);
    return bookName;
}

module.exports = getTheTitles;
