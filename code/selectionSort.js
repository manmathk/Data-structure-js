// 2, 7, 4, 1, 5, 3

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let iMin = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[iMin]) iMin = j;
    }
    let temp = arr[i];
    arr[i] = arr[iMin];
    arr[iMin] = temp;
  }
  return arr;
}

console.log("Selection Sort: ", selectionSort([2, 7, 4, 1, 5, 3], 6));
