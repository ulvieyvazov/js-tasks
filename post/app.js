const parent = document.querySelector(".parent")
const body = document.querySelector("body")
const addBtn = document.querySelector(".add-btn")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector("#input-image")
const input3 = document.querySelector(".input3")
const form = document.querySelector("form")
const icon = document.querySelector(".close")
const btn = document.querySelector(".btn")
const card = document.querySelector(".card")
addBtn.addEventListener("click", () => {
    parent.style.display = "block"

})
console.log(input3);
icon.addEventListener("click", () => {
    parent.style.display = "none"
})
if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
}

form.addEventListener("submit", (e) => {
    if (input1.value.trim() && input3.value.trim()) {
        // card.style.display = "block"
        parent.style.display = "none"

        e.preventDefault();
        const cart = document.createElement("div")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const cardForm = document.createElement("form")
        const button = document.createElement("button")
        const a = document.createElement("a")
        const button2 = document.createElement("button")
        cart.classList.add("cart")
        button.classList.add("button")
        button2.classList.add("button")
        cardForm.classList.add("button-form")
        // img.src = input2.src 
        // input2.addEventListener("change", ()=>{

        //     const reader =new FileReader();    
        //     reader.addEventListener("load", ()=>{
        //         uploaded = reader.result;    
        //         document.querySelector(".cart").style.backgroundImage = `url(${uploaded})`;

        //     })
        //     reader.readAsDataURL(this.files[0])
        // })

        img.src = URL.createObjectURL(input2.files[0])
        button.innerText = "Add to basket"
        button2.innerText = "Delet"
        h3.innerText = `Name: ${input1.value}`
        p.innerText = `Price: ${input3.value}$`
        p.style.color = 'red'
        input1.value = ""
        input3.value = ""
        input2.value = ""
        button2.append(a)
        cardForm.append(button, button2)
        cart.append(img, h3, p, cardForm);
        card.appendChild(cart);

        const praducts = JSON.parse(localStorage.getItem("praducts")) || []

        praducts.push({
            photo: img.src,
            Name: h3.innerText,
            price: p.innerText,
        })

        localStorage.setItem("praducts", JSON.stringify(praducts))
        JSON.parse(localStorage.getItem(praducts))
        // cart.append(photo, Name, price)
    }
    else {
        alert("bosh ola bilmez")
    }


    let cart = [];
    
    cart.push({ names, price });
    updateCart();
    
    function updateCart() {
        const cartItems = document.createElement("ul");
        cartItems.innerHTML = "";
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerText = `${item.names} - $${item.price}`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });
        document.createElement("p").innerText = `Toplam Fiyat: $${totalPrice}`;
    }
})
button.addEventListener("click", () => {
})