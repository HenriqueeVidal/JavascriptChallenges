/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

const arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    // Write your code here
let sum=0,min=0,max=0
arr.forEach(e => {
    sum += e 
})
min = sum
arr.forEach(e => {
    if (min > sum - e){min = sum-e}
    if (max < sum - e){max = sum-e}
})
console.log(min+" "+max)
}

miniMaxSum()