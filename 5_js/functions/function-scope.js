// Global scope (convert, temp1, temp2)
 // Local scope (fahrenheit, celcius)

let convertFtoC = function(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9
    return celcius
}

let tempOne = convertFtoC(32)
let tempTwo = convertFtoC(68)

console.log(tempOne)
console.log(tempTwo)