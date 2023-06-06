
arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]


    function diagonalDifference(arr) {
        let sumL = 0, sumR = 0
        let len = arr.length-1
        for(let i=0;i<arr.length;i++){
            sumL += parseInt(arr[i][i])
            sumR += parseInt(arr[i][(len-i)])
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

//WORKING