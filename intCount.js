// Given an array of integers, where all elements but one occur twice, find the unique element.

const a = [1]

function lonelyinteger(a) {
    let check = 0
    let ans = 0
    a.forEach(value => {
        a.forEach(cont => {
            if (value == cont) {
                check++
            }
        })
        if (check == 1) {
            ans = value
        } else { check = 0 }
    })
return ans
}

console.log(lonelyinteger(a))

//WORKING