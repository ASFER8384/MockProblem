function countDuplicates(arr) {
    const occurrences = {};
    arr.forEach((num) => {
      if (occurrences[num]) {
        occurrences[num]++;
      } else {
        occurrences[num] = 1;
      }
    });
  
    const duplicates = {};
    for (const [num, count] of Object.entries(occurrences)) {
      if (count > 1) {
        duplicates[num] = count;
      }
    }
    return duplicates;
  }
  
  const data = [4, 6, 2, 8, 9, 2, 6, 7, 6];
  const output = countDuplicates(data);
  console.log(output); 
  