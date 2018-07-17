// Grade Calculator

// Students Score, Total Possible
let gradeCalc = function(stud, tot){
    let per = (stud / tot)*100
    console.log(`Percentage: ${per}%`)

    // Define percentage
    if (per >= 90) {
        return console.log(`You've got an A! ${per}%`)
    }
    else if (per >= 80) {
        return console.log(`You've got a B! ${per}%`)
    }
    if (per >= 70) {
        return console.log(`You've got a C! ${per}%`)
    }
    if (per >= 60) {
        return console.log(`You've got a D! ${per}%`)
    }
    if (per >= 0) {
        return console.log(`You've got a F. ${per}%`)
    }
}

gradeCalc(90, 100)

// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
