arr = [25,
    1, 1, 1, 1, 98, 73, 56, 84, 86, 57, 1, 6, 83, 8, 25, 81, 56, 9, 53, 98, 67, 55, 66, 97, 54, 84]

function findMedian(arr) {
    const ord = arr.sort()
    let len
    len = (parseInt(ord.length / 2))
    console.log(ord[len])
}

// WORKING