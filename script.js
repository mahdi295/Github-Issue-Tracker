//signin signout
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

let allIssue=[]



//load issue
let loadIssue = () =>{
    let url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        allIssue=data.data
        displayIssues(allIssue)
    })
}

loadIssue()

//display issue 

let displayIssues = (issues) => {
    let issueContainer = document.getElementById("issue-container")
    issueContainer.innerHTML=""
    issues.forEach(issue => {
        let card = document.createElement("div")
        //logo
        let statusLogo = 
        issue.status === "open" ? <img class="w-6 h-6" src="./assets/Open-Status.png" alt=""></img> : <img class="w-6 h-6" src="./assets/Closed- Status .png" alt=""></img> 
        //level loop
        let labels=issue.lebels.map(label => `<h2 class="text-orange-500 p-2 rounded-xl text-center bg-orange-100 text-sm">${label.toUpperCase()}</h2>`.join(""))



        card.innerHTML=`
            <div class="card bg-white card-xl w-84 shadow-sm p-4 space-y-4">
                <div class="flex justify-between items-center">
                    ${statusLogo}
                    <div class="p-2 rounded-xl text-center bg-red-100">
                        <h2 class="text-red-600 text-sm">${issue.priority}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold">${issue.title}</h2>
                </div>
                <div>
                    <p class="text-gray-500 text-sm">${issue.description}</p>
                </div>
                <div class="flex gap-4 items-center">
                    ${labels}
                </div>
                <div class="border-t border-gray-400 flex-grow">
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-gray-400 text-sm"># ${issue.id} by ${issue.author}</p>
                        <p class="text-gray-400 text-sm">Assignee: ${issue.assignee}</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">${new Date(issue.createdAt).toLocaleDateString()}</p>
                        <p class="text-gray-400 text-sm">Updated: ${new Date(issue.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
        issueContainer.appendChild(card)
    });
}


