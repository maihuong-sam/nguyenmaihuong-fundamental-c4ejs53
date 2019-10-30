let menu = ["Chi Pu", "Hoang Thuy Linh"]

let userChoice = prompt("Nhập C/R/U/D/E").toLowerCase();

if (userChoice == "c"){
    let userCreated = prompt("Bạn muốn thêm em nào vào ?")
    menu.push(userCreated)
    menu.forEach((girl, index) => {
        console.log(`${index+1}. ${girl}`)
    })
} else if(userChoice == "r"){
    menu.forEach((girl, index) => {
        console.log(`${index+1}. ${girl}`)
    })
} else if (userChoice == "u"){
    let userUpdated = prompt("Bạn muốn update theo value hay index v/i ").toLowerCase()
    if(userUpdated == "i"){
        let userIndexUpdated = Number(prompt("Nhập index đi bạn yêu =)))"))
        if(userIndexUpdated < 0 || userIndexUpdated > menu.length){
            alert("Lỗi rồi bạn ơi")
        } else {
            let userUpdatedContent = prompt("Nội dung bạn muốn update")
            menu[userIndexUpdated-1] = userUpdatedContent
            menu.forEach((girl, index) => {
                console.log(`${index+1}. ${girl}`)
            })
        }
    } else if (userUpdated == "v"){
        let userValueUpdated = prompt("Bạn muốn thay em nào");
        if (menu.includes(userValueUpdated)){
            let indexOfValue = menu.indexOf(userValueUpdated);
            let girl = prompt("Tên em gái bạn muốn thay")
            menu[indexOfValue] = girl
            menu.forEach((girl, index) => {
                console.log(`${index+1}. ${girl}`)
            })
        } else {
            alert("Lỗi rồi bạn ơi")
        }
    }
} else if (userChoice == "d"){
    let userDelete = prompt ("Xóa theo i hay v bạn ơi").toLowerCase()
    if(userDelete == 'i'){
        let userDeleteIndex = Number(prompt("Nhập chỉ số zô"))
        if(userDeleteIndex < 0 || userDeleteIndex > menu.length){
            alert("Lỗi rồi bạn ơi")
        } else {
            menu.splice(userDeleteIndex-1,1)
            menu.forEach((girl, index) => {
                console.log(`${index+1}. ${girl}`)
            })
        }
    } else if (userDelete == "v"){
        let userDeleteValue = prompt("Em mà bạn muốn đá")
        if (menu.includes(userDeleteValue)){
            let indexOfValue = menu.indexOf(userDeleteValue);
            menu.splice(indexOfValue,1)
           
            menu.forEach((girl, index) => {
                console.log(`${index+1}. ${girl}`)
            })
        } else {
            alert("Lỗi rồi bạn ơi")
        }
    }
}