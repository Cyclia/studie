let fahrenheit = 80  // 0 c | - 273.15K

// calc celsius and store in celsius variable
// print that value
let celsius = (fahrenheit - 32) * 5/9
console.log('Celcius')
console.log(celsius)

if (celsius <= 20) {
    console.log("Wow, it's cold! ❄️️ ")
} else if (celsius >= 30){
    console.log("Yikes it's hot🔥 ")
}    else {
    console.log("Nice and warm. Enjoy your day!🌞")
}


// Challenge

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan, only show vegan
if (isGuestOneVegan && isGuestTwoVegan === true){
    console.log("Here are the vegan options")
}
// At least one vegan? Offer some vegan options
else if (isGuestOneVegan || isGuestTwoVegan === true){
    console.log("Here are some vegan options")
}
// Else, offer the full menu
else{
    console.log("Here's the full menu")
}

