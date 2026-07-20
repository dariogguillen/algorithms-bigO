function canJump(nums) {
    var length = nums.length;
    var initialPos = 0;
    var nextPos = 0;
    var can = false;
    var jump = function (arr, pos) {
        return arr[pos] >= 0 ? jump(arr, pos + arr[pos]) : pos;
    };
    var tries = new Map();
    // while (!can) {
    var a = jump(nums, initialPos);
    if (length === nextPos)
        can = true;
    // }
    console.log({ can: can, a: a });
    return can;
}
canJump([2, 3, 1, 1, 4]);
canJump([3, 2, 1, 0, 4]);
