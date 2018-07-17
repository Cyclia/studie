let greetUser = function() {
    console.log('Hi!')
}

greetUser()

let square = function(num) {
    console.log(num*5)
}

let convertFtoC = function(fahrenheit) {
    let celcius = (fahrenheit = 32) * 5 / 9
    return celcius
}

let tempOne = convertFtoC (32)
let tempTwo = convertFtoC (68)

console.log(tempOne)
console.log(tempTwo)