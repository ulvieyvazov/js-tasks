const sec = document.querySelector("section")
const container = document.querySelector(".container")
const header = document.querySelector("header")
const search = document.querySelector("input")
const btn = document.querySelector("button")
const cart = document.querySelector(".cart")



btn.addEventListener("click", async function Get() {

    fetch(`https://api.github.com/users/${search.value}`)
    .then(res => res.json())
    .then(data => getGit(data))
    // const response = await fetch(`https://api.github.com/users/${search.value}`);
    // const jsonData = await response.json();
    
    // jsonData
    // .forEach((element) => {
    //     console.log(element);
        
    // });
    search.value = ""
})

function getGit(data) {   
    console.log(data);
            container.innerHTML += `
     <div class="cart">
        <div class="top">
            <div class="logo">
                            
                <img src=${data.avatar_url} alt="">
            </div>
            <div class="text">
                <h2>${data.name}</h2>
                <div class="login">
                ${data.created_at}
                </div>
            </div>
                
                
            </div>
                <a href="${data.html_url}">@octocat</a>
                <p>${data.bio}</p>
                
                <div class="main">
                <div class="repos">
                repos
                <div> ${data.public_repos} </div>
                </div>
                
                <div class="follow">
                followers
                <div> ${data.followers} </div>
                </div>
                
                <div class="following">
                following
                <div> ${data.following} </div>
                </div>
        </div>
        <div class="nav">
            <div class="navication ">
            <i class="fa-solid fa-location-dot"></i>
                ${data.location}
            </div>
            <div class="twitt">
            <i class="fa-brands fa-twitter"></i>
            ${data.caged}
            </div>
            <div class="github">
            <i class="fa-solid fa-link"></i>
            ${data.blog}
            </div>
            
            <div class="git">
            <i class="fa-brands fa-github"></i>
            <a href="${data.html_url}">@github</a>
            </div>
            
            </div>
            </div>`


}