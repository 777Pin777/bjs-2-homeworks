function compareArrays(arr1, arr2) {
  let result = false;
  if (arr1.length == arr2.length){
    result = arr1.every((element, index) => {return element === arr2[index]} );
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((element,int,arr) => {
    if (element > 0 && element % 3 === 0) {return element}
    }).map(item => item*10);
  return resultArr; // array
}
