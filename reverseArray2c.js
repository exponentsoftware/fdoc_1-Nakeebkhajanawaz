//Reversing an array

array1=["A","B","C","D"];
function reverseArray(array1) {
    var array2 = [];
    while (array1.length) {
      array2.push(array1.pop());
    }
    return array2;
  }
  
  console.log(reverseArray(array1));

