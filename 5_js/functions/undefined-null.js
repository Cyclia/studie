// Undefined for var

let name = "piet"

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log("Your name is")
}
console.log(name)

// Undefined for function arguments

let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

// Null as assigned value

let age = 15

age = null

console.log(age)

