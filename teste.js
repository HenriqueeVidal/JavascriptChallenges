
arr = [25,
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 1, 6, 83, 8, 25, 81, 56, 9, 53, 98, 67]

function findMedian(arr) {
    const ord = arr.sort()
    let len
    len = (parseInt(ord.length / 2))
    console.log(ord[len])
}

// findMedian(arr)


function countingSort(arr) {
    const len = arr[0]
    let final = []
        for (let i = 0; i <= Math.max(...arr)+1; i++) {final[i] = 0}
        arr.forEach((a,i) => {
            if(i==0){}
            else final[a] += 1
    })
    return final
}

console.log(countingSort(arr))

//NOT WORKING YET