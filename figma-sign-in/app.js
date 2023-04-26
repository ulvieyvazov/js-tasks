const btn = document.querySelector(".dark-btn");
const parent = document.querySelector("body");
const input = document.querySelectorAll(".input");
const loginBtn = document.querySelector(".btn-login");
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")

const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")

btn.addEventListener("click", () => {
    parent.classList.toggle("active")
})
console.log(input);

loginBtn.addEventListener("click", function () {
    for (let i = 0; i < input.length; i++) {
        if (!input[i].value.trim()) {
            input[i].style.border = "2px solid red";
        }
    }
})

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


loginBtn.addEventListener("click", () => {
    const validEmail = emailRegular.test(input2.value.trim())
    const validPassword = passwordRegular.test(input3.value.trim())


    if (validEmail && validPassword) {

    }
    else if (!validEmail) {
        p2.style.display = "block"
    }
    else if (!validPassword) {
        p3.style.display = "block"
    }
})