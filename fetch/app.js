const sec = document.querySelector("section")
const container = document.querySelector(".container")
const header = document.querySelector("header")
const search = document.querySelector("input")
const btn = document.querySelector("button")


async function getGit() {
    btn.addEventListener("click", async function Get() {
        const response = await fetch("https://api.github.com/users");
        const jsonData = await response.json();

        jsonData
            .forEach((element) => {
                console.log(element);
                fetch(`${element.followers_url}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                            container.innerHTML += `
     <div class="cart">
        <div class="top">
            <div class="logo">
                            
                <img src=${element.avatar_url} alt="">
            </div>

            <div class="text">
                <h2>The Octocat</h2>
            </div>
                
                <div class="login">
                
                </div>
                
            </div>
                <a href="">@octocat</a>
                <p>This profile has no bio</p>
                
                <div class="main">
                <div class="repos">
                repos
                <div>  </div>
                </div>
                
                <div class="follow">
                followers
                <div>  </div>
                </div>
                
                <div class="following">
                following
                <div>  </div>
                </div>
        </div>

        <div class="nav">
        <div class="navication ">

            </div>

            <div class="twitt">
            
            </div>

            <div class="github">
            
            </div>
            
            <div class="git">
            
            </div>
            </div>
            </div>`
                    })
            });

    })

}


getGit()

