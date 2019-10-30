//khai báo bằng let 
let name = "Hieu";
//khai báo bằng var, ko khuyến khích 
var age = 18;
console.log("Hello", name); 
console.log(name, "đang", age);

//khai báo hằng số
//đừng bao giờ thay đổi giá trị của const
//code chạy đồng bộ từ trên xuống dứới
const phoneNumber = "0912346789";
console.log(phoneNumber);

// let number1 = 10;
// number1 = 15;
let numberA = Number(prompt("enter number a", ''));  // giá trị trả về của prompt mặc định là string 
let numberB = Number(prompt("enter number b", '')); // chuuyển đổi string -> number 
// let a = parseFloat(numberA);
// let b = parseFloat(numberB);
let result = numberB + numberA;
console.log("result", result);

