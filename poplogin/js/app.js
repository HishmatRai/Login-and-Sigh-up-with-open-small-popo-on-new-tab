var email = document.getElementById("EmailId");
var password = document.getElementById("PasswordID");
var extra = document.getElementById("ExtraDiv");

function Singun(){
var user = localStorage.getItem("user");
console.log(user)


var userSto = false;
if (user === null){
    user = [];
}
else{
    user = JSON.parse(user);
    console.log(user);
}
 var userObj= {
email : email.value,
password : password.value
 }
var matchLast = email.value;
matchLast = matchLast.slice(matchLast.length-4);
if(matchLast !== ".com"){
    alert("Please Enter Correct Email !")
    window.close("../index.html")
}
else{
 for (var i = 0 ; i < user.length; i++){
    if(user[i].email === email.value){
        userSto = true;
    } 

    }
    if(userSto === true){
        // extra.innerHTML = "User Already Sign Up !";
        alert("User Already Sign Up !")
        window.close("../index.html")
        email.value = "";
        password.value = "";
    }
 
    else{
        user.push(userObj);
        user = JSON.stringify(user);
        user = localStorage.setItem("user", user)
        email.value = "";
        password.value = "";
        // extra.innerHTML = "You are Sign Up Successfully !"
        alert("You are Sign Up Successfully !")
        window.close("../index.html")

 }

}

}








// Login

function Login(){
var user = localStorage.getItem("user");
console.log(user);
if(user === null){
    user = [];
}
else{
    user = JSON.parse(user);
}

var userCondition = false;
for (var i = 0; i < user.length; i++){
    if(user[i].email === email.value){
        userCondition = true;
       
    }
}
    if(userCondition === false){
        // extra.innerHTML = "Login Faild !"
        alert("Login Faild ! ");
      window.close("../index.html")

    }
    else{
        // extra.innerHTML = "Login Successfully !";
        // window.location.href = "../index.html";
        alert("Login Successfully !");
      window.open("../form/form.html")
        email.value = "";
        password.value = "";
    }

}





