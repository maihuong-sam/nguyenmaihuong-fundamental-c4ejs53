// for(let i=0; i<5; i++)

// let loop = true;
// while(loop){
//     let temp = Number(prompt('nhap vao nhiet do',''));

//     if(temp<10){
//     console.log("lanh qua");
//     }else if (temp<25){
//     console.log("mat qua")
//     }else {
//     console.log('nong');
//     if(temp>50){
//         // break;
//         loop=false;
//     }
// }
// }

var username = "c4e54";
var password = "codethechange";
let username = true;
while(username<3){
var username = prompt('Enter username','');
if (username === 'c4e54'){
    let password = prompt('enter password','')
    if (password === "codethechange"){
        console.log('success');
    } else {
        console.log('password error')
    }
} else {
    console.log('username error')
}

