const a = [5, 3, 6, 8, 2, 3, 5, 7, 8, 2, 1, 5, 10, 9, 0];
const b = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const c = ["a", "c", "b", "j", "g", "z", "e", "d"];
const d = [3, 1, 2, 4];
const e = [
  14, 2345, 76347, 867, 22345, 4256, 1452, 23, 2, 1, 2456, 7356, 523, 6245, 673,
  2345, 4454, 62165, 9191984, 21321654, 6846, 132, 1321, 84, 984, 165, 15619,
  161, 156, 1, 0, -1, -2,
];

const swap = <T>(a: number, b: number, arr: T[]): T[] => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

type Order = "asc" | "des";

// O(n^2)
const bubbleSort = <T>(arr: T[], order: Order = "asc"): T[] => {
  // O(n)
  for (let i = 1; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length - 1; j++) {
      if (order === "asc") {
        if (arr[j] > arr[i]) swap(i, j, arr);
      } else {
        if (arr[j] < arr[i]) swap(i, j, arr);
      }
    }
  }
  console.log({ final: arr });
  return arr;
};

bubbleSort(a);
bubbleSort(b);
bubbleSort(c, "des");
bubbleSort(d);
bubbleSort(e);
bubbleSort(e, "des");
