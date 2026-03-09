# CIS 376 Spring 2026 Project 1 -TripBoard
---
Shion's trip memories.


Created by: Shion Kishaba

Resources:
Bootstrap
Google Fonts
Unsplash images
Inspired by Pinterest

## User Story
---
As a travel lover
I want to give inspirations to the users about travel destinations by displaying pictures and linking them to each distination pages
So that they can get information visually and get more excited for traveling.

## Links
GitHub Repository:
https://github.com/shion11111/project1-tripboard

Live App:
https://shion11111.github.io/project1-tripboard

Verification:
Tested on Chrome, Safari, mobile, and desktop.


##  Modeling
---
### -home

### -search box
<img width="1904" height="1039" alt="image" src="https://github.com/user-attachments/assets/559e3ba0-0490-43e0-a1bb-75daf150d3ae" />

### -saved pictures (my board)
<img width="1028" height="676" alt="image" src="https://github.com/user-attachments/assets/b9843ebe-43e9-42a0-86d5-f21b9ed65e91" />

## Code block and explanation
---
Here's how the login flow works.

from '''pages/login.html
<button id="loginBtn" class="btn btn-primary p-2 fs-4">Login</button>

from '''scripts/login-script.js
const login = document.getElementById('loginBtn');

//pass an Immediately Invoked Function Expression: IIFE.
login.addEventListener('click', function (event) {
  console.log('clicked');
  
  
  // Get form values from the DOM 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log("username + pwd:", username + ", " + password);
  


