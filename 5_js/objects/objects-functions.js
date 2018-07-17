let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    console.log()
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary)


//both

let tempConvert = function(fah) {
    return {
        fah: fah,
        cel: (fah - 32) * 5 / 9,
        kel: (fah + 459.67) * (5 / 9)
    }
}

let temps = tempConvert(32)

console.log(temps)


// let convertFtoC = function(fahrenheit) {
//     let celcius = (fahrenheit = 32) * 5 / 9
//     return celcius
// }

// let tempOne = convertFtoC (32)
// let tempTwo = convertFtoC (68)

// console.log(tempOne)
// console.log(tempTwo)