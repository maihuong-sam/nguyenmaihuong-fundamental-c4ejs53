// const buttonSubmit = document.getElementById("submit")
// console.dir(buttonSubmit)
// const userInput = document.getElementById("user-input")
// console.dir(userInput)
// const text = document.getElementById("para")
// console.dir(para)

// buttonSubmit.addEventListener('click', () => {
//      text.innerText = userInput.value ;
// })

let buttonAddUser = document.getElementById("button-add")
let userInput = document.getElementById("user-input")
let usersList = document.getElementById("users-list")
let buttonRemove = document.getElementById("button-remove")

buttonAddUser.addEventListener('click', () => {
    if (userInput.value === "") {
        alert("Enter somthing!")
    } else {

        // // c1
        // let node = document.createElement("li")
        // let textNode = document.createTextNode(userInput.value)
        // node.appendChild(textNode)
        // usersList.appendChild(node)

        //c2 
        let liElement = `<li>${userInput.value}</li>`
        usersList.innerHTML += liElement;
    }
})

buttonRemove.addEventListener('click', () => {
    if (userInput.value === "") {
        // c1
        // let listLi = usersList.getElementsByTagName("li");
        // let lastElement = listLi[listLi.length-1]
        // usersList.removeChild(lastElement)

        //c2
        console.dir(usersList)
        usersList.removeChild(usersList.lastElementChild)
    } else {
        let invalid = true
        var value = userInput.value
        for (let i = 0; i < usersList.children.length; i++) {
            if (value.toLowerCase() == usersList.children[i].textContent.toLowerCase()) {
                usersList.removeChild(usersList.children[i])
                invalid = false
                userInput.value == ""
            }
        }
        if (invalid) {
            alert("Re-enter name!")
        }
    }
})