// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, y) {
  var totalGreaterThanY = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      totalGreaterThanY++;
    }
  }
  return totalGreaterThanY;
}

console.log(greaterThanY([1, 1, 1], 0)); // should log 3 
console.log(greaterThanY([1, 1, 1], 2)); // should log 0 
console.log(greaterThanY([3, 1, 1], 2)); // should log 1

// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var average = sum / arr.length;
  console.log('max:', max, 'min:', min, "average:", average);
}

maxMinAvg([5, -1, 100, 4]) // max: 100, min: -1, avg: 27

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.For example, replaceNegatives([1, 2, -3, -5, 5]) should return [1, 2, "Dojo", "Dojo", 5].
function replaceNegativesWithDojo(arr) {
  // create a new array
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      result.push('Dojo');
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(replaceNegativesWithDojo([-1, 1, 1, -1])); // should print ['Dojo', 1, 1, 'Dojo']

// Given array, and indices start and end, remove vals in that index range, working in -place(hence shortening the array).For example, removeVals([20, 30, 40, 50, 60, 70], 2, 4) should return [20, 30, 70].
function removeVals(arr, start, end) {
  // I recommend trying the popFront and removeAt functions before attempting this one

  // in the above example 4 - 2 == 2, but 3 vals get removed
  // adding 1 will ensure the correct number of removals
  var numRemovals = end - start + 1;
  // this loop determines how many times we move everything over and pop a value
  for(var i = 0; i < numRemovals; i++) {
    // this loop will move everything starting from the beginning of the range left by one index
    for(var j = start; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    // remove the extra value at the end of the array
    arr.pop();
    // repeat this entire process as needed
  }
  return arr;
}

console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4));