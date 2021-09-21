var register = document.getElementById("register");

function checkform() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    if(!document.getElementById("email").checkValidity())
    {
        return false;
    }
    return true;
}

register.addEventListener("click", function() {
    if(checkform()) {
        storeData();
        location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/login.html"
    }
    else {
        alert("Please fill the valid details");
    }
})

function storeData() {
    var name = document.getElementById('fullname');
    var mail = document.getElementById('email');
    var number = document.getElementById('number');
    var pass = document.getElementById('pass');
    var pass2 = document.getElementById('pass2');

    if(pass.value === pass2.value) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('mail', mail.value);
        localStorage.setItem('number', number.value);
        localStorage.setItem('pw1', pass.value);
        localStorage.setItem('pw', pass2.value);
        localStorage.setItem('log', 0);
        alert("Successfully Registered");
    }
    else {
        alert("Passwords does not match");
        return;
    }
}
