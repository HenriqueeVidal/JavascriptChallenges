let nums = [3,2,4], target = 6
/* var twoSum = function (nums, target) {
    let number = []
    nums.forEach((v, i) => {
        number[0] = i
        nums.forEach((v2, i2) => {
            number[1] = i2
            if ((v + v2) == target) {
                return number
            }
        })
    })
} */
var twoSum = function (nums, target) {
    let number = []
    for (let i = 0; i <= nums.length; i++) {
        for (let i2 = 0; i2 <= nums.length; i2++) {
            if(i!=i2){
                if ((nums[i] + nums[i2]) == target) {
                    number[0] = i
                    number[1] = i2
                    return number
                }
            }
        }
    }
};

console.log(twoSum(nums, target))

//WORKING