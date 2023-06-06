
let a = [5, 1, 2, 3, 4, 1]
let b = [5, 5, 4, 3, 4, 1]



function updateTimes(signalOne, signalTwo) {
    let count = 0
    let max = 0
    for (let i = 0; i < signalOne.length; i++) {
        if (signalOne[i] != undefined && signalTwo[i] != undefined) {
            if (signalOne[i] == signalTwo[i]) {
                if (max < signalOne[i]) {
                    max = signalOne[i]
                    count++
                }
            }
        }
    }
    return count
}

console.log(updateTimes(a, b))

//WORKING