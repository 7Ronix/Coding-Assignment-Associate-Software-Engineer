function sortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let numbers = [4, 2, 8, 1, 5];
console.log("Original Array: " + numbers);

sortDescending(numbers);

console.log("Array Sorted in Descending Order: " + numbers);
