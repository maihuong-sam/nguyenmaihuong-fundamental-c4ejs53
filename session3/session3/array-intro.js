let menu = ["Cơm","Phở","Bánh Đa","Bánh Mỳ","Bún","Bún đậu","Bún chả"]

console.log(menu)

// Đọc 1 phẩn tử, đọc theo index
console.log(menu[1])

// read all Đọc tất cả các phần tử trong array

// for(let i = 0; i < menu.length; i ++){
//     console.log(menu[i])
// }

// Read all - forEach
menu.forEach((element, index) => {
    console.log(`${index+1} ${element}`)
})

// Create
// let meal = prompt()
// menu.push("Cậu vàng")
// menu.push(meal)
// console.log(menu)

//Update
// menu.indexOf("Phở")
menu[0] = "Cơm tấm"
console.log(menu.indexOf("Phở"))

//Delete
menu.splice(0,1)
console.log(menu)


