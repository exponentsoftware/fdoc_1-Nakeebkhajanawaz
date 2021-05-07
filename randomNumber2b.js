//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

let getRandomNumbers=function(start,range){
    var arr = [];
while(arr.length < 7){
    var i = Math.floor(Math.random() * 9);
    if(arr.indexOf(i) === -1) arr.push(i);
}
console.log(arr);

}
console.log(getRandomNumbers(0,9));
