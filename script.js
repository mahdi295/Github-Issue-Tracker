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
// let signout = () => {
    
//     location.href="./index.html"
// }


//loading spinner
let spinner=document.getElementById("spinner")

let showSpinner = () => {
    spinner.classList.remove("hidden")
}
let hideSpinner = () => {
    spinner.classList.add("hidden")
}

//search 
let searchIssue = () => {
    let searchInput = document.getElementById("search-input").value

    if(searchInput === ""){
        displayIssues(allIssue)
        setActive("all-btn")
        return
    }

    showSpinner()
    let url=`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayIssues(data.data)
        hideSpinner()
    })
}

//count
let totalCount = document.getElementById("issue-count")


let allIssue=[]
//load issue
let loadIssue = () =>{

    showSpinner()
    let url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        allIssue=data.data
        displayIssues(allIssue)
        setActive("all-btn")
        hideSpinner()
    })
}
loadIssue()

//load specific issue model
let showIssue = (id) => {
    let url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayIssueModel(data.data))
}
//show display model
let displayIssueModel = (issue) => {
    let displayContainer = document.getElementById("display-issue")
    displayContainer.innerHTML=""
    let modelCard=document.createElement("div")


    //logo
    let statusLogo = 
        issue.status === "open" ? `<h2 class="p-2 bg-green-700 text-white rounded-2xl text-sm">Opened</h2>` : `<h2 class="p-2 text-sm bg-purple-700 text-white rounded-2xl">Closed</h2>` 


    //label loop
        let labels=issue.labels.map(label => `<h2 class="text-green-700 p-2 rounded-xl text-center bg-green-100 text-sm">${label.toUpperCase()}</h2>`).join("")


    modelCard.innerHTML=
    `
    <div class="card w-full h-full space-y-4">
                <div>
                    <h2 class="text-xl font-semibold">${issue.title}</h2>
                </div>
                <div class="flex gap-2 text-sm items-center">
                ${statusLogo}
                <p class="text-gray-500"> . Opened By ${issue.author}</p>
                <p class="text-gray-500"> . ${new Date(issue.createdAt).toLocaleDateString()}</p>
                </div>

               <div class="flex gap-2 flex-wrap items-center">
                    ${labels}
                </div>

                
                <div>
                    <p class="text-gray-500 text-sm">${issue.description}</p>
                </div>
                
                <div class="flex justify-between items-center flex-wrap space-y-1 p-4 bg-[#F8FAFC] rounded-xl">
                        <p class="text-gray-400 text-sm">Assignee: <br> <span class="text-black font-bold">${issue.assignee}</span></p>

                        <div>
                            <p class="text-gray-400">Priority: </p>
                            <div class="p-1 rounded-xl text-center ${issue.priority === "high" ? "bg-red-200" : issue.priority === "medium" ? "bg-orange-200" : "bg-gray-200"}">
                        <h2 class="${issue.priority === "high" ? "text-red-600" : issue.priority === "medium" ? "text-orange-600" : "text-gray-600"} text-md">${issue.priority}</h2>
                    </div>
                        </div>
                </div>
            </div>


    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-active btn-primary">Close</button>
      </form>
    </div>
    `
    displayContainer.appendChild(modelCard)

    document.getElementById("my_modal_5").showModal()


}



//display issue 
let displayIssues = (issues) => {
    let issueContainer = document.getElementById("issue-container")
    issueContainer.innerHTML=""

    totalCount.innerText=issues.length
    issues.forEach(issue => {
        let card = document.createElement("div")
        //logo
        let statusLogo = 
        issue.status === "open" ? `<img class="w-6 h-6" src="./assets/Open-Status.png" alt=""></img>` : `<img class="w-6 h-6" src="./assets/Closed-Status.png" alt=""></img>` 

        //label loop
        let labels=issue.labels.map(label => `<h2 class="text-green-700 p-2 rounded-xl text-center bg-green-100 text-sm">${label.toUpperCase()}</h2>`).join("")

        //top boder color
        let topBorderColor = issue.status === "open" ? "border-green-500" : "border-purple-500"

        card.innerHTML=`
            <div onclick="showIssue(${issue.id})" class="cursor-pointer card bg-white w-full h-full shadow-md p-4 space-y-4 ${topBorderColor} border-t-4 ">
                <div class="flex justify-between items-center">
                    ${statusLogo}
                    <div class="p-2 rounded-xl text-center ${issue.priority === "high" ? "bg-red-200" : issue.priority === "medium" ? "bg-orange-200" : "bg-gray-200"}">
                        <h2 class="${issue.priority === "high" ? "text-red-600" : issue.priority === "medium" ? "text-orange-600" : "text-gray-600"} text-sm">${issue.priority}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold">${issue.title}</h2>
                </div>
                <div>
                    <p class="text-gray-500 text-sm">${issue.description}</p>
                </div>
                <div class="flex gap-2 flex-wrap items-center">
                    ${labels}
                </div>
                <div class="border-t border-gray-400 flex-grow">
                </div>
                <div class="flex justify-between items-center flex-wrap">
                    <div class="space-y-1">
                        <p class="text-gray-400 text-sm"># ${issue.id} by ${issue.author}</p>
                        <p class="text-gray-400 text-sm">Assignee: ${issue.assignee}</p>
                    </div>
                    <div class="space-y-1">
                        <p class="text-gray-400 text-sm">${new Date(issue.createdAt).toLocaleDateString()}</p>
                        <p class="text-gray-400 text-sm">Updated: ${new Date(issue.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `
        issueContainer.appendChild(card)
    });
}


//active btn

//remove active from btn
let setActive = (id) => {
    let issueBtn = document.querySelectorAll(".issue-btn")
    issueBtn.forEach(btn => {
        btn.classList.add("btn-outline")
    });

    document.getElementById(id).classList.remove("btn-outline")
}



//filter btn
let allBtn = () => {
    displayIssues(allIssue)
    setActive("all-btn")
}

let openBtn = () =>{
    let openIssue = allIssue.filter(issue => issue.status === "open")
    displayIssues(openIssue)
    setActive("open-btn")
}

let closeBtn = () =>{
    let closeIssue = allIssue.filter(issue => issue.status === "closed")
    displayIssues(closeIssue)
    setActive("close-btn")
}