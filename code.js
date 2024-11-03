function quicksort(array) {
  let sorted = false
  let newArray = [];
  let size = array.length - 1;
  let isSorted = false;
  do{
    let pivotpos = array[0];
    for(let i = array.length - 1; i > array.indexOf(pivotpos); i--) {
      let n = array.indexOf(pivotpos);
      if(pivotpos>array[i]) {
        let tmp = array[i];
        array[i] = pivotpos;
        array[n] = tmp;
      }
    }
    //console.log(array);
    //console.log(array.length);
     for(let i = 0; i < array.indexOf(pivotpos); i++) {
      let n = array.indexOf(pivotpos);
      if(pivotpos<array[i]) {
        let tmp = array[i];
        array[i] = pivotpos;
        array[n] = tmp;
      }
    }
    //console.log(array);
    newArray[array.indexOf(pivotpos)]  = pivotpos;
    size = size - 1;
  }while(size > 0);
  let sizeOfNewArray = newArray.length;
  //let newSize = array.length - 1;
  do{
    let pivotpos = array[newArray.length];
    for(let i = array.length - 1; i > array.indexOf(pivotpos); i--) {
      let n = array.indexOf(pivotpos);
      if(pivotpos>array[i]) {
        let tmp = array[i];
        array[i] = pivotpos;
        array[n] = tmp;
      }
    }
    //console.log(array); // SORTED HERE
    
    //console.log(array.length);
     for(let i = sizeOfNewArray; i < array.indexOf(pivotpos); i++) {
      let n = array.indexOf(pivotpos);
      if(pivotpos<array[i]) {
        let tmp = array[i];
        array[i] = pivotpos;
        array[n] = tmp;
      }
    }
    //console.log(array);
    //console.log("done?");
    newArray[array.indexOf(pivotpos)]  = pivotpos;
    size = size - 1;
    if(array.length == newArray.length) {
        isSorted = true;
    }
  }while(isSorted != true);

    
    return array;
}

//let aTest = [3,0,1,8,7,2,5,4,9,6];
//let aNewTest = quicksort(aTest);
//for(let i = 0; i<aNewTest.length;i++) {
//  console.log(aNewTest[i]);
//}
