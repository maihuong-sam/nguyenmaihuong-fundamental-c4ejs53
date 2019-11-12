let anchorDemo = document.getElementById("demo-a")
let btnDemo = document.getElementById("btn-demo")
let demoInput = document.getElementById("demo-input")
console.dir(anchorDemo)
btnDemo.addEventListener('click', () => {
    demoInput.value = anchorDemo.href
})