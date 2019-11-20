const database = {}
const context = document.getElementById('root')
const getUser = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2&fbclid=IwAR2tuTVANWsRKCPHRh_KcZlKRh8ksxh1uv75Wg-c_w04NveO9MRP_8jm9cs')
    const db = await response.json()
    database.data = db.data
}
const renderUser = async () => {
    await getUser()
    console.log(database.data)
    const container = document.createElement('div')

    database.data.forEach(element => {
        const email = document.createElement('a')
        //    const firstName = document.createElement('div')
        //    const lastName = document.createElement('div')
        const fullName = document.createElement('div')
        const avatar = document.createElement('img')
        const hr = document.createElement('hr')

        avatar.src = element.avatar
        container.appendChild(avatar)
        avatar.className = 'img'

        fullName.innerHTML = `Name: ${element.first_name + element.last_name}`
        container.appendChild(fullName)
        context.appendChild(container)

        email.innerHTML = element.email
        email.style.display='none'
        container.appendChild(email)
        // context.appendChild(container)

        avatar.addEventListener("mouseover", () => {
            email.style.display='block'
        })
        avatar.addEventListener("mouseout", () => {
            email.style.display='none'
        })

       


    });
}
renderUser()