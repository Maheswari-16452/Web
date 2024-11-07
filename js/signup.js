function validate(){
    var fname=document.getElementById('fn');
    var fnerr=document.getElementById('fn_error');
    if(fname.value==''){
        fnerr.innerHTML='FirstName is required';
        fname.style.borderColor='red';
        return ''
    }
    else{
        fnerr.innerHTML="";
        fname.style.borderColor='green';
    }
    var lname=document.getElementById('ln');
    var lnerr=document.getElementById('ln_error');
    if(lname.value==''){
        lname.style.borderColor='red';
        lnerr.innerHTML='LastName is required';
        return '';
    }
    else{
        lnerr.innerHTML="";
        lname.style.borderColor='green';
    }
   
    var email=document.getElementById('email');
    var emailerr=document.getElementById('email_error');
    if(email.value==''){
        email.style.borderColor='red';
        emailerr.innerHTML='Email is requried';
        return '';
    }
    else{
        email.style.borderColor='green';
        emailerr.innerHTML="";
    }
    var password=document.getElementById('password');
    var passworderr=document.getElementById('password_error');
    if(password.value==''){
        password.style.borderColor='red';
        passworderr.innerHTML='Password is required';
        return '';
    }
    else if(password.value.length<8){
        password.style.borderColor='yellow';
        passworderr.innerHTML='Password atleast give 8 characters';
        return '';
    }
    else{
        password.style.borderColor='green';
        passworderr.innerHTML="";
    }

    const bakery={
        firstname:fname.value,
        lastname:lname.value,
        email:email.value,
        password:password.value,
    };
    console.log(bakery);
    let bakeryarr=JSON.parse(localStorage.getItem("Detail")) || [];
    bakeryarr.push(bakery);
    console.log(bakeryarr);
    localStorage.setItem("Detail",JSON.stringify(bakeryarr));
}