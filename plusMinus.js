/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.*/

let arr = [-1, -1, 0, 0, 2, 2, 2, -1]

function plusMinus(arr) {
    const size = arr.length
    console.log(size)
    let p = 0, z = 0, n = 0
    arr.forEach(e => {
        if (e > 0) p++
        if (e == 0) z++
        if (e < 0) n++
    })
    console.log((p / size).toFixed(8))
    console.log((n / size).toFixed(8))
    console.log((z / size).toFixed(8))
}

plusMinus(arr)

//WORKING