// Multipe arguments

let add = function (num, num2) {
    return num + num2
}

console.log('Multiple Arguments')
let res = add(5,6)
console.log(res)

// Default argumenst

console.log('Default Arguments')
let getScoreText = function(name = 'Anonymous', score = "No score yet."){
    // return 'Name: ' + name + '. | Score: ' + score
    return `Name: ${name}. | Score: ${score}.`
}

let scoreText = getScoreText(undefined, 5)
console.log(scoreText)

// Challenge

let getTip = function(total, perc = .2){
    let calc = total * perc
    return 'You should tip €' + calc + ' today. Enjoy!'
}

console.log(getTip(100, .1))

let name = 'Andrew'
console.log(`Hi, my name is ${name}!`)