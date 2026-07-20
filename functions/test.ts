function canJump(nums: number[]): boolean {
  const length = nums.length;
  const initialPos = 0;
  let nextPos = 0;
  let can: boolean = false;

  const jump = (arr: number[], pos: number): number =>
    arr[pos] >= 0 ? jump(arr, pos + arr[pos]) : pos;
  //

  let tries: Map<number, Map<number, boolean>> = new Map();
  // while (!can) {
  let a = jump(nums, initialPos);
  if (length === nextPos) can = true;
  // }

  console.log({ can, a });
  return can;
}

canJump([2, 3, 1, 1, 4]);
canJump([3, 2, 1, 0, 4]);
