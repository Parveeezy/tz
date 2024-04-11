export const findLostNum = (arr) => {
    const nums = [...arr].sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] !== 1) {
            return nums[i - 1] + 1;
        }
    }
    return 0;
}

console.log(findLostNum[7, 9, 10, 11, 12]);