
# GitHub User Search
This is a JavaScript application that allows you to search for GitHub users by name and display the search results on the screen. Additionally, you can click on a specific user to view all the repositories associated with that user.

# Features
Search GitHub users by name </br>
Display user information such as username, avatar, and profile link </br>
Click on a user to view their repositories </br>
Display repositories for a selected user </br>

# Usage
Clone the repository or download the source code files. </br>

Open the index.html file in a web browser. </br>

In the search form, enter the name of the GitHub user you want to search for. </br>

Click the "Search" button or press Enter to initiate the search. </br>

The search results will be displayed below the search bar, showing the username, avatar, and a link to the user's GitHub profile. </br>

Click on a user from the search results to view their repositories. </br>

The repositories for the selected user will be displayed below the search results. </br>

To switch between searching for users and searching for repositories, click the "Toggle Search Type" button. The search bar will update its placeholder text accordingly. </br>

# Implementation Details
The application is built using JavaScript and interacts with the GitHub API to perform searches and retrieve user and repository data. </br>

The index.html file contains the form with a search input and buttons, as well as a results area where the search results and repositories are displayed. </br>

The script.js file contains the JavaScript code responsible for handling form submissions, making API requests, and displaying the search results and repositories. </br>

When the form is submitted, the application takes the value of the input and searches GitHub for user matches using the User Search Endpoint. The search results are then displayed on the page, including the username, avatar, and profile link. </br>

Clicking on a user triggers a request to the User Repos Endpoint, which retrieves data about all the repositories for that user. The repositories are then displayed below the search results. </br>

The "Toggle Search Type" button allows you to switch between searching for users and searching for repositories. This functionality is achieved by updating a variable that stores the current search type and updating the search input's placeholder text accordingly. </br>

# APIs Used
GitHub User Search Endpoint: Used to search for GitHub users based on a specified name.

GitHub User Repos Endpoint: Used to retrieve information about the repositories associated with a specific GitHub user.

# Author
This application was developed by Judy Chelangat.

# license
this project is licensed under the MIT license 