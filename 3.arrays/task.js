function compareArrays(arr1, arr2) {
    return arr1.every((e, i) => e === arr2[i] && arr1.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
    let sumCount = users.filter(item => item.gender === gender).reduce((acc, item) => acc + item.age, 0);
    let filteredCount = users.filter(item => item.gender === gender, 0);
    if (filteredCount.length == 0) {
      return 0;
    }
    else {
      return sumCount / filteredCount.length;
    }
  }
  