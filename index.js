// getting the form  elements in order to do dom manipulation

const form = document.getElementById("search")
const input = document.getElementById("search-input")
const searchButton= document.getElementById("search-btn")

// adding an eventlistener for the submit form
form.addEventListener("submit", (e) =>{
    e.preventDefault() // preventing the form from submiting default
})

const userList=document.getElementById('user-list')
let repoList=document.getElementById('repos-list')

// fetching the users by name 

fetch("https://api.github.com/search/users?q=octocat")
.then(resp => resp.json())
.then(data =>{

    // using the data from the fetch to display users information
    
    let userDetails = document.getElementById("search-user-details")
    data.forEach((character) => {     // using a foreach loop to get each users details

        let listItem = document.createElement("li");
        listItem.textContent = character.name;
        listItem.setAttribute('class', 'list-items')  // setting the list items with a class called list-items
        userDetails.appendChild(listItem)      // adding each list item to the user-details
})
})
.catch(error => {
    console.log(error)
})
