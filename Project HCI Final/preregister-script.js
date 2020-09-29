var email;
var username;
var nation;
var password;
var agree;
var male;
var female;


function register(){
    
    email = document.getElementById('txtEmail').value 
    username = document.getElementById('txtUsername').value
    nation = document.getElementById('txtNation').value
    password = document.getElementById('txtPass').value
    agree = document.getElementById('agreement').checked
    male = document.getElementById('btnMale').checked
    female = document.getElementById('btnFemale').checked

    if(email === ""){
        alert('Please enter your email!')
    } else if(!email.includes('@')){
        alert('Email must contain @!')
    } else if(username === ""){
        alert('Please enter your username!')
    } else if(username.length < 6){
        alert('Username must be more than 5 characters!')
    } else if(!male && !female){
        alert('Please select your gender!')
    } else if(nation === ""){
        alert('Please insert your nationality!')
    } else if(password === ""){
        alert('Please insert your password!')
    } else if(password.length < 6){
        alert('Password must be more than 5 characters!')
    } else if(!agree){
        alert('Please accept XTREME CHASER terms and conditions!')
    } else{
        alert('Congratulations ' + username + '\n You are registered for the XTREME CHASER BETA test')
        window.location.href = "home.html"
    }

    
}
