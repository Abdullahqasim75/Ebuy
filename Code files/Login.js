var login = document.getElementById("login");

function checkform() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    if(!document.getElementById("log-mail").checkValidity())
    {
        return false;
    }
    return true;
}

login.addEventListener("click", function() {
    if(checkform()) {
        if(check()) {
            localStorage.setItem('log', 1)
            location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/products.html";
        }
        else {
            alert("Details are not present, Kindly Register");
            location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/signup.html";
        }
    }
    else {
        alert("Please fill the valid details");
    }
})

function check() {

    var storedMail = localStorage.getItem('mail');
    console.log(storedMail.value);
    var storedPw = localStorage.getItem('pw');

    var userMail = document.getElementById('log-mail').value;
    var userPw = document.getElementById('log-pass').value;

    if(userMail !== storedMail || userPw !== storedPw) {
        return false;
    }else {
        return true;
    }
}
