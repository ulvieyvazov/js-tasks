const parent = document.querySelector(".parent")
const addBtn = document.querySelector(".add-btn")
const input = document.querySelector(".input")
const input2 = document.querySelector(".input2")
const form = document.querySelector("form")
const image = document.querySelector(".image")
const names = document.querySelector(".name")
const btn = document.querySelector(".btn")
const cart = document.querySelector(".cart")
// console.log(addBtn);
addBtn.addEventListener("click", () => {
    parent.style.display = "block"

})


console.log(image);
btn.addEventListener("click", (e) => {
    // for (let i = 0; i < input.length; i++) {
    //     if (!input[i].value.trim()) {
    //         parent.style.position = "sticky"
    //     }
    // }

    cart.style.display = "block"
    parent.style.display = "none"

    e.preventDefault();
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    
    img.src = input2.src
    h3.innerText = input.value
    input.value = ""
    input2.src = ""
    image.append(img);
    names.append(h3)

})