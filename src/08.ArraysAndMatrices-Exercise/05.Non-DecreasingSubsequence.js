function solve(nums) {
    let result = [];
    result.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        let currentLargestNum = Math.max(...result);

        if(currentLargestNum <= nums[i]){
            result.push(nums[i]);
        }
    }

    for(let num of result){
        console.log(num);
    }
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);