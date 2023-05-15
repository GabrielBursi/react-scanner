
export const ValidateIsbn = (isbn: string) => {
    if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') {
        return false
    }

    const isbnDigit = parseInt(isbn[isbn.length - 1])
    let multi = 0

    const isbnSum = isbn
        .substring(0, 12)
        .split('')
        .reduce((total, num) => {
            multi = multi === 1 ? 3 : 1
            return total + parseInt(num) * multi
        }, 0)
    
    const validDigit = 10 - (isbnSum % 10)

    return isbnDigit === validDigit
}
