function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {

      let mid = Math.floor((start + end) / 2);
  
      
      if (arr[mid] === target) {
        return mid;
      }
  
      
      if (arr[mid] < target) {
        start = mid + 1;
      }
  
      else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  binarySearch(sortedArray, 5); //4
  binarySearch(sortedArray, 7); //6
  binarySearch(sortedArray, 12); // -1
  
