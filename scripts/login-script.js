document.addEventListener('DOMContentLoaded', function () {

    console.log("password is: superdupertrain");
});


//when button clicked, get username and password. 

const login = document.getElementById('loginBtn');

//pass an Immediately Invoked Function Expression: IIFE.
login.addEventListener('click', function (event) {
  console.log('clicked');
  
  
  // Get form values from the DOM 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log("username + pwd:", username + ", " + password);

  if (password == "superdupertrain") {
    console.log("Login successful");

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('isAuthN', 'true'); // Set authentication flag

    window.location.assign("../pages/home.html");



  } else {
    console.log("Login failed");
    alert("Incorrect password. Please try again.");
    return; // Stop further execution if login fails
  }
  

  // sessionStorage.setItem('loginTimestamp', new Date().toISOString());
  // sessionStorage.setItem('loginAttempts', (parseInt(sessionStorage.getItem('loginAttempts') || '0') + 1).toString());

  // Log to console
  console.log('session username:', username);
  console.log('session password:', password);
  console.log('session authN', sessionStorage.getItem('isAuthN'));


});
