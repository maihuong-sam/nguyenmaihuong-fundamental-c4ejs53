//C.R.U.D : Create . Read . Update . Delete 

// let menu = ["0", "1", "2", "3", "4"];

// console.log(menu);

// // read element Đọc 1 phần tử , đọc theo index

// console.log(menu[1]);

// // read all Đọc tất cả phần tử trong array 

// for(let i=0; i<5; i++){
//     console.log(menu[i])
// }


// let arr = ["session1","session2","session3","session4","session5"];
// // for(let i=0; i<arr.length; i++){
// //     console.log(`${i+1}. ${arr[i]}`);
// // }
// var userInput = Number(prompt("Nhap so thu tu"));
// // console.log(arr[userInput-1]);

// // forEach
// arr.forEach((value, index) => {
//     console.log(`${index+1} ${value}`)
// })

//Create

// // let add = "Session6";
// let userInput = prompt("Ban muon them gi?");
// arr.push(userInput);
// console.log(arr);

// let arr = ["session1","session2","session3","session4","session5"];

// Update

// // arr[0] = "Session10";
// var content = prompt('nhap vao noi dung muon sua');
// var ind = arr.indexOf(content);                                       tìm vị trí của value
// var _content = prompt("nhap vao noi dung moi");
// arr[ind] = _content;
// console.log(arr);

// Delete

// var content = prompt('nhap vao noi dung muon xoa:')
// var ind = arr.indexOf(content);
// arr.splice(ind, 1);
// console.log(arr);

var menu = ["Bun", "Pho", "Mien"];
var userInput = prompt("Moi ban yeu cau", "").toLowerCase();
if (userInput === "c") {
    let order = prompt("Moi ban order", "");
    menu.push(order);
    console.log(menu);
} else if (userInput === "r") {
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i+1}. ${menu[i]}`)
    }
} else if (userInput === "u") {
    let chooseOption = prompt("Ban muon update theo index hay value?").toLowerCase();
    if (chooseOption == "index") {
        let index = prompt("Nhap index:");
        var ind = menu.indexOf(index);
        if (ind != menu[i]) {
            console.log('Error');
        } else {
            let order = prompt('Ban muon update gi?');
            var ind = menu.indexOf(index);
            menu[ind] = order;
            console.log(menu);
        }
    } else if (chooseOption == "value") {
        let input = prompt('Nhap gia tri muon sua :');
        // let ind = menu.indexOf(value);
        menu[ind] = input;
        console.log(menu);
    } else {
        prompt('khong co gia tri, moi ban nhap lai');
    }

console.log(menu);