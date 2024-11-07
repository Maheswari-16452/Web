function validate(){
    var email=document.getElementById('username');
    var unerr=document.getElementById('usernameerr');
    if(email.value==''){
        unerr.innerHTML="Username is required";
        email.style.color='red';
        return '';
    }
    else{
        email.style.color='green';
        unerr.innerHTML="";
    }
    var password=document.getElementById('password');
    var passworderr=document.getElementById('passworderr');
    if(password.value==''){
        passworderr.innerHTML="Password is required";
        password.style.color='red';
        return '';
        
    }
    else{
        password.style.color='green';
        passworderr.innerHTML="";
    }
   
    let logindata=JSON.parse(localStorage.getItem("Detail"))||[];
    let isValidUser = false;
    logindata.forEach(data => {
        if (data.email == email.value && data.password == password.value){
            isValidUser = true;
        }
    });

    if(isValidUser){
        alert('Login successful');
        window.location.href="./bakery.html";
    }
    else{
        alert("You don't have an account");
    }
    
    localStorage.setItem("Detail",JSON.stringify(logindata));
}