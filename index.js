let form = document.querySelector("form")
let input = document.querySelector("input")
let button = document.querySelector("submit")
let image = document.querySelector("img")
// let btn = document.querySelector("#refresh")
let select = document.querySelector("select")


async function getQR(e) {
    e.preventDefault()
    let text = input.value
    let size = select.value
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${text}`)
    const qr = response.url
    image.setAttribute("src", qr)
    image.setAttribute("width", "")
}
function refresh(e) {
    window.location.reload(true)
}

form.addEventListener("submit", getQR)
form.addEventListener("reset", refresh)