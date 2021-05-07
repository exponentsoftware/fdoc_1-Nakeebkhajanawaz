//Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

let n=7;
let star ="";
for(let i=0; i<=n;i++) {
    for(let j=0; j<i; j++) {
        star +="*";
    }
    star +="\n";
}
console.log(star);
