/**
 * FUNCTION getTheTitles(arrBooks):
 *   DECLARE arrTitles as empty array
 * 
 *   FOR EACH book IN arrBooks:
 *     APPEND book.title to arrTitles
 * 
 *   RETURN arrTitles
 * END FUNCTION
 */

const getTheTitles = function(arrBooks) {
    const arrTitles = []
    arrBooks.forEach((book) => {
        arrTitles.push(book.title)
    })

    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
