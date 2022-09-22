function validation() {
    var error = 0;
    var name = document.form.name.value;
    var email = document.form.email.value;
    var phone = document.fomr.phone.value;
    var password = document.form.password.value;
    var cpassword = document.form.cpassword.value;

    //for name
    if (name.trim() == '') {
        document.getElementById('err_name').innerHTML = "please enter name";
        error++;
    }
    else {
        if (name.length < 5) {
            document.getElementById('err_name').innerHTML = "name should be minimum 5 character";
            error++;
        }
    }

    //for email
    var ep = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email.trim() == '') {
        document.getElementById('err_email').innerHTML = "please enter your email address";
        error++;
    }
    else if (!ep.test(email)) {
        document.getElementById('err_email').innerHTML = "please enter the valid email address";
        error++;
    }

    //for password
    if (password.trim() == '') {
        document.getElementById('err_password').innerHTML = "enter any password";
        error++;
    }
    else {
        if (password.length < 7) {
            document.getElementById('err_password').innerHTML = "password should be minimum 7 character";
            error++;
        }
    }

    //for conformation password
    if (cpassword.trim() == '') {
        document.getElementById('err_cpassword').innerHTML = "re-enter the password";
        error++;
    }
    else if (password != cpassword) {
        document.getElementById('err_cpassword').innerHTML = "password are not matched";
        error++;
    }
    else {
        document.getElementById('err_cpassword').innerHTML = "";
    }

    //for mobile number
    var mp = /^[9][6-8]{1}[0-9]{8}$/;
    if (mobile.trim() == '') {
        document.getElementById('err_phone').innerHTML = "please enter the mobile number";
        error++;
    }
    else if(!mp.test(phone)){
        document.getElementById('err_phone').innerHTML = "please  enter valid mobile number";
        error++;
    }

    if (error > 0) {
        return false;
    }
    else {
        return true;
    }
}
