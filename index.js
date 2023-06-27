// getting the form  elements in order to do dom manipulation

const form = document.getElementById("search")
const input = document.getElementById("search-input")
const searchButton= document.getElementById("search-btn")

// adding an eventlistener for the submit form
form.addEventListener("submit", (e) =>{
    e.preventDefault() // preventing the form from submiting default
})