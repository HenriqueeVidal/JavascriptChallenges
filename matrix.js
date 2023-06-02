
arr = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]


function diagonalDifference(arr) {
    let sumL = 0, sumR = 0    
    for(let i=1;i<arr.length;i++){
        sumL += parseInt(arr[i][i-1])
        sumR += parseInt(arr[i][arr[0][0]-i])
    }
    return Math.abs(sumL-sumR)
}


//To discover an quadratic matrix inside a non-quadratic array
/*arr.forEach((a) => {
    if (arr.length == a.length || a.length > size) {
        size = a.length
    }
})*/
console.log(diagonalDifference(arr))