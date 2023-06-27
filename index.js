// getting the form  elements in order to do dom manipulation

const form = document.getElementById("search")
const input = document.getElementById("search-input")
const searchButton= document.getElementById("search-btn")


const userList=document.getElementById('user-list')
let repoList=document.getElementById('repos-list')

// adding an eventlistener for the submit form
form.addEventListener("submit", (e) =>{
    e.preventDefault() // preventing the form from submiting default
// fetching the users by name 
let username =e.target.search.value   /* retrieves the value entered into the search input field when the form is submitted and assigns it to the username variable */
console.log('searching github')

fetch("https://api.github.com/search/users?q=octocat")
.then(resp => resp.json())
.then(user =>{

    // using the data from the fetch to display users information
    user.forEach((character) => {     // using a foreach loop to get each users details

        let h4= document.createElement("h4"); 
        h4.textContent = `${user.login}`   // creating an h4 to hold the user log in details
       
        let link =document.createElement("a");
        link.href=`link to profile`

        let img =document.createElement("img")
        img.src=`{user.avatar}`

})
})
.catch(error => {
    console.log(error)
})

})
