//Given a list of integers, count and return the number of times each value appears as an array of integers.

arr = [25, 1, 1, 1, 1, 98, 73, 56, 84, 86, 57, 1, 6, 83, 8, 25, 81, 56, 9, 53, 98, 67, 55, 66, 97, 54, 84]

function countingSort(arr) {
    const len = arr[0]
    let final = []
    for (let i = 0; i <= 99; i++) { final[i] = 0 }
    arr.forEach((a, i) => {
        final[a] += 1
    })
    console.log(final.length)
    return final
}

console.log(countingSort(arr))

//WORKING



