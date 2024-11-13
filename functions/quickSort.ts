const a = [5, 3, 6, 8, 2, 3, 5, 7, 8, 2, 1, 5, 10, 9, 0];
const b = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const c = ["a", "c", "b", "j", "g", "z", "e", "d"];
const d = [3, 1, 2, 4];
const dd = [3, 1];
const e = [
  14, 2345, 76347, 867, 22345, 4256, 1452, 23, 2, 1, 2456, 7356, 523, 6245, 673,
  2345, 4454, 62165, 9191984, 21321654, 6846, 132, 1321, 84, 984, 165, 15619,
  161, 156, 1, 0, -1, -2, 1232,
];

const quickSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 2) {
    if (arr.length === 2) {
      return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    return arr;
  }

  let min: T[] = [];
  let max: T[] = [];

  const pivot = arr[arr.length - 1];
  arr.pop(); // to avoid duplicate pivot in for loop

  for (let el of arr) {
    if (el < pivot) min.push(el);
    else max.push(el);
  }

  return [...quickSort(min), pivot, ...quickSort(max)];
};

console.log(quickSort(a));
console.log(quickSort(b));
console.log(quickSort(c));
console.log(quickSort(d));
console.log(quickSort(dd));
console.log(quickSort(e));
