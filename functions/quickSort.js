var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = [5, 3, 6, 8, 2, 3, 5, 7, 8, 2, 1, 5, 10, 9, 0];
var b = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var c = ["a", "c", "b", "j", "g", "z", "e", "d"];
var d = [3, 1, 2, 4];
var dd = [3, 1];
var e = [
    14, 2345, 76347, 867, 22345, 4256, 1452, 23, 2, 1, 2456, 7356, 523, 6245, 673,
    2345, 4454, 62165, 9191984, 21321654, 6846, 132, 1321, 84, 984, 165, 15619,
    161, 156, 1, 0, -1, -2, 1232,
];
var quickSort = function (arr) {
    if (arr.length <= 2) {
        if (arr.length === 2) {
            return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
        }
        return arr;
    }
    var min = [];
    var max = [];
    var pivot = arr[arr.length - 1];
    arr.pop(); // to avoid duplicate pivot in for loop
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el < pivot)
            min.push(el);
        else
            max.push(el);
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(min), true), [pivot], false), quickSort(max), true);
};
console.log(quickSort(a));
console.log(quickSort(b));
console.log(quickSort(c));
console.log(quickSort(d));
console.log(quickSort(dd));
console.log(quickSort(e));
