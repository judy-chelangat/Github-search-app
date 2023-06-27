const initialize = () =>{

const userList=document.getElementById('user-list')
const  repoList=document.getElementById('repos-list')
const form =document.getElementById(`search-form`)
const inputName= document.querySelector("input#search")
const button =document.getElementById("repo-button")

// adding an eventlistener for the submit form
form.addEventListener(`submit`, handleSearch) 

// fetching the users by name 


function handleSearch(e){ 
     e.preventDefault()
fetch(`https://api.github.com/search/users?q=${inputName.value}`)
.then(resp => resp.json())
.then(user => {
   
  

    // using the data from the fetch to display users information
      
        let userDetails=document.createElement(`li`)
        userDetails.innerHTML =`
        <div class ="content">
        <h4> user: ${user.items[0].login}</h4>
        <p> URL: ${user.items[0].html_url}</p>
        <button id='repo-button'> Repositories </button>
        <img src=${user.items[0].avatar_url} />
        </div>
        `
        userList.appendChild(userDetails)  

})
}
 
button.addEventListener(`click` , repository)  // an event listener for when a person clicks on the repository button to display repositories


function repository(e){
    //console.log(e)
    fetch(`https://api.github.com/users/${inputName.value}/repos`)
    .then(response => response.json())
    .then(repositories => 
        {
        repositories.forEach(repo =>{
            let repoItem=document.createElement(`li`)
            repoItem.innerHTML=`
            <p><a href = ${repo.repos_url}> ${repo.name}</a></p>
            `
            repoList.appendChild(repoItem)
        
        })
      }
        )
      
}





}
 
 document.addEventListener(`DOMContentLoaded`, initialize)