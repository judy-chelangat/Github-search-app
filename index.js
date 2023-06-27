const initialize = () =>{

const userList=document.getElementById('user-list')
const  repoList=document.getElementById('repos-list')
const form =document.getElementById(`search-form`)
const inputName= document.querySelector("input#search")
// adding an eventlistener for the submit form
form.addEventListener(`submit`, handleSearch) 
// fetching the users by name 
// let username =e.target.search.value   /* retrieves the value entered into the search input field when the form is submitted and assigns it to the username variable */

function handleSearch(e){ 
    console.log(e)
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
        <button class='repo-button' Repositories </button>
        <img src=${user.items[0].avatar_url} />
        </div>
        `
        userList.appendChild(userDetails)  

})
}
 //adding an event listener to show more details about a person
}
 
 document.addEventListener(`DOMContentLoaded`, initialize)