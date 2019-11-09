// CRUD object

// object rỗng
// let person = {}
// console.log(typeof(person));

// 1.2 object có nhiều hơn 1 cặp property và value

// let person = {
//     name: "Nguyễn Mai Hương",
//     age: "25",
//     location: "Hà Nội",
//     status: "F",
//     lover: "1"
// }
// console.log(person);

// // Read

// console.log(person.name);
// var userInput = prompt("Enter name:");
// console.log(person[userInput]);
// console.log(person["lover"]);

// // Create

// person.school = "UTT";
// person["GPA"] = 2.5;
// console.log(person);

// // Update

// person.age = "25";
// person["location"] = "HaNoi";
// console.log(person);

// let userInputKey = prompt("key");
// person[userInputKey] = prompt("value");
// console.log(person);

// // Delete

// console.log(person);
// delete person.age;
// console.log(person);

// let userInputKey = prompt("key");
// delete person[userInputKey];
// console.log(person);

// check element in object 
// (userInput in person)

let obj = {
    any: "anh người iu",
    stt: "status",
    fwb: "fwb",
    bf: "best friend",
    bff: "best friend forever",
}
// var arr = [];
var arrKey = Object.keys(obj);
// console.log(arrKey)
var arrValue = Object.values(obj);
// console.log(arrValue);
// in ra arrKey 
arrKey.forEach((key, index) => {
    console.log(`${index+1}. ${key}`);
})
// Hoặc Object.keys(obj).forEach()
var loop = true;
while (loop) {
    var userInput = prompt("Nhập từ bạn muốn xem: (ấn E để thoát)").toLowerCase();
    if (arrKey.includes(userInput) == true) {
        console.log(`${obj[userInput]}`);
    } else if (userInput === "e") {
        loop = false;
    } else {
        var userSelectYesOrNo = prompt("Từ bạn nhập không có,\
        bạn có muốn thêm không: Y/N ? ").toLowerCase();
        if (userSelectYesOrNo === "n") {
            alert("Xin cảm ơn!");
        } else if (userSelectYesOrNo === "y") {
            // var userCreateKey = prompt("Enter key:");
            var userCreateValue = prompt("Enter value:").toLowerCase();
            obj[userInput] = userCreateValue;
            let arrKey = Object.keys(obj);
            arrKey.forEach((key, index) => {
                console.log(`${index+1}. ${key}`)
            });
        }
    }
}