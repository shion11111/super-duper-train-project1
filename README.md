# CIS 376 Spring 2026 Course Page
A web app that will inspire users trip destinations

## Authorship:
Created by:

Shion Kishaba

Resources:

Bootstrap, Google Fonts, images, inspired by pinterest

## User Story
As a travel lover
I want to give user inspirations of next travel destinations by putting pictures
So that they can get information visually and make them more excited to go travel

## Model -Pinterest
- home
- search box
<img width="1904" height="1039" alt="image" src="https://github.com/user-attachments/assets/559e3ba0-0490-43e0-a1bb-75daf150d3ae" />

- saved pictures (my board)
<img width="1028" height="676" alt="image" src="https://github.com/user-attachments/assets/b9843ebe-43e9-42a0-86d5-f21b9ed65e91" />

## Links
### GitHub Repository
https://github.com/username/travel-app

### Live App
https://username.github.io/travel-app

### Verification:
Tested on Chrome, Safari, mobile, and desktop.

## Code sample
- pages
```pages/login.html
<button id="loginBtn" class="btn btn-primary p-2 fs-4">Login</button>
```
- scripts
```scripts/login-script.js
const login = document.getElementById('loginBtn');

//pass an Immediately Invoked Function Expression: IIFE.
login.addEventListener('click', function (event) {
  console.log('clicked');
  
  
  // Get form values from the DOM 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log("username + pwd:", username + ", " + password);
```
