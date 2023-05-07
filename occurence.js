function countOccurrences(arr) {
    const occurrences = {};
    arr.forEach((num) => {
      if (occurrences[num]) {
        occurrences[num]++;
      } else {
        occurrences[num] = 1;
      }
    });
    return occurrences;
  }
  
  const arr = [3, 4, 3, 5, 3, 6];
  const occurrences = countOccurrences(arr);
  console.log(occurrences);