// // vòng lặp for
// for(let i=0; i<4; i++){
//     console.log("hello");
// }

// // vòng lặp white
// let i=4;
// while (i<10){
// console.log("hello")
// i++;
// }

// // in ra day so 1->100

// for (let i=1; i<101; i++){
//     console.log(i)
// }

//in ra 0-100

// let i=0;
// while (i<101){
//     console.log(i);
//     i+=2;
// }   

// //in ra so le 1-100
// let i=1;
// while (i<101){
//     console.log(i);
//     i+=2;
// } 


var n = Number(prompt('Nhập n', ''));
var sum=0;  
for(let i=0; i<=n; i++){
     sum += i;
}
console.log(`Tổng các số tự nhiên từ 0 - ${n} là: ${sum}`);

