function removeElement(nums: number[], val: number): number {
  let length = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val) {
  //     continue;
  //   } else {
  //     nums[length++] = nums[i];
  //   }
  // }

  while (length < nums.length) {
    if (nums[length] === val) {
      nums.splice(length, 1);
    } else {
      length++;
    }
  }

  console.log({ length, nums });
  return length;
}

// removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
