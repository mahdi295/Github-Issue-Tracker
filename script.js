let signin = () => {
    let userValue = document.getElementById("username").value
    let passValue = document.getElementById("password").value

    if(userValue == "admin" && passValue == "admin123"){
        

        location.href = "./github-issue-page.html"
    }
    else{
        alert("Invalid Value")
    }
}


let signout = () => {
    
    location.href="./index.html"
}