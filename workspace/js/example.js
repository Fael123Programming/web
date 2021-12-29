var num = 10
console.log(`num is worth ${num}`)
console.log(`Factorial is ${fact(num)}`)

function fact(num) {
    let result = 1;
    while (num > 1)
        result *= num--
    return result    
}