let userInput = document.getElementsByClassName("user-input")
var number;
function a(id){
    return document.getElementById(id)
}
function set_number(_number){
    number+= _number
    a('user_input').value = number
}