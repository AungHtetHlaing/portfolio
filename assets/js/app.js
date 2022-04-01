const navbarToggler = document.querySelector(".navbar-toggler");
const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
const navbarNav = document.querySelector(".navbar-nav");
const navLink = document.querySelectorAll(".nav-link");
const darkMode = document.querySelector(".dark_mode");
const colorSwitcher = document.querySelector(".color_switcher");
const dropdownColor = document.querySelector(".dropdown-color");


// form validation
let nameError = document.getElementById('name_error');
let phoneError = document.getElementById('phone_error');
let emailError = document.getElementById('email_error');
let messageError = document.getElementById('message_error');
let submitError = document.getElementById('submit_error');

const iframe = document.querySelector(".location_content iframe");


if(document.body.classList.contains("dark")) {
    iframe.style.filter = "invert(100%)";
}

const green = document.querySelector(".green");
const brown = document.querySelector(".brown");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const purple = document.querySelector(".purple");

const colors = ["green", "brown", "blue", "orange", "purple"];

let expiresDate = new Date();
expiresDate.setDate(expiresDate.getDate()+3);

if(document.cookie) {

    let cookieAry = document.cookie.split(";");

    if(cookieAry.length > 1) {

        cookieAry.forEach( cookie => {
            let value = splitCookie(cookie);
            document.body.classList.add(value);
        });

    } else {
        let value = splitCookie(document.cookie);
        document.body.classList.add(value);
    }
}

function splitCookie(cookie) {
    let keyValue = cookie.split("=");
    if(keyValue[1].length > 0) {
        return keyValue[1];
    }
}

function saveCookie(key, value, expires) {
    document.cookie = `${key}=${value};expires=${expires}`;
}

function deleteCookie(key) {
    expiresDate.setDate(expiresDate.getDate()-10);
    document.cookie = `${key}=;expires=${expiresDate}`;
}

green.addEventListener("click", _ => {
    document.body.classList.forEach( aClass => {
        if(colors.indexOf(aClass) > -1) {
            document.body.classList.remove(aClass);
        }
    })
    
    document.body.classList.add("green");
    
    if(dropdownColor.classList.contains("show")) {
        dropdownColor.classList.remove("show");
        dropdownColor.classList.add("hide");
        dropdownColor.classList.remove("hide");
    }
    saveCookie("theme","green",expiresDate);
});

brown.addEventListener("click", _ => {
    document.body.classList.forEach( aClass => {
        if(colors.indexOf(aClass) > -1) {
            document.body.classList.remove(aClass);
        }
    })
    document.body.classList.add("brown");
    
    if(dropdownColor.classList.contains("show")) {
        dropdownColor.classList.remove("show");
        dropdownColor.classList.add("hide");
        dropdownColor.classList.remove("hide");
    }
    saveCookie("theme","brown",expiresDate);

});
blue.addEventListener("click", _ => {
    document.body.classList.forEach( aClass => {
        if(colors.indexOf(aClass) > -1) {
            document.body.classList.remove(aClass);
        }
    })
    document.body.classList.add("blue");
    
    if(dropdownColor.classList.contains("show")) {
        dropdownColor.classList.remove("show");
        dropdownColor.classList.add("hide");
        dropdownColor.classList.remove("hide");
    }
    saveCookie("theme","blue",expiresDate);
});
orange.addEventListener("click", _ => {
    document.body.classList.forEach( aClass => {
        if(colors.indexOf(aClass) > -1) {
            document.body.classList.remove(aClass);
        }
    })
    document.body.classList.add("orange");
    
    if(dropdownColor.classList.contains("show")) {
        dropdownColor.classList.remove("show");
        dropdownColor.classList.add("hide");
        dropdownColor.classList.remove("hide");
    }
    saveCookie("theme","orange",expiresDate);
});
purple.addEventListener("click", _ => {
    document.body.classList.forEach( aClass => {
        if(colors.indexOf(aClass) > -1) {
            document.body.classList.remove(aClass);
        }
    })
    document.body.classList.add("purple");
    
    if(dropdownColor.classList.contains("show")) {
        dropdownColor.classList.remove("show");
        dropdownColor.classList.add("hide");
        dropdownColor.classList.remove("hide");
    }
    saveCookie("theme","purple",expiresDate);
});
// navLink.forEach(link => {
//     link.addEventListener("click", (event) => {
//         navLink.forEach(l => {
//             l.classList.remove("w");
//         })
//         link.classList.add("active");
//     })

// })

navbarToggler.addEventListener("click", (event) => {
    navbarTogglerIcon.classList.toggle("open");
    navbarNav.classList.toggle("open");

})

darkMode.addEventListener("click", _ => {
    if(document.body.classList.contains("dark")) {
        deleteCookie("mode")
        document.body.classList.remove("dark");
        iframe.style.filter = "none";
        darkMode.innerHTML = '<i class="fa fa-moon"></i>';
    } else {
        saveCookie("mode","dark",expiresDate);
        document.body.classList.add("dark");
        darkMode.innerHTML = '<i class="fa fa-sun"></i>';
        iframe.style.filter = "invert(100%)";
        
    }
})

colorSwitcher.addEventListener("click", _ => {
    dropdownColor.classList.toggle("show");
});



// form validating
function validateName() {
    let name = document.getElementById('name').value;

    if(name.length == 0) {
        nameError.innerText = "Name is required";
        return false;
    }

    if(!name.match(/^[A-za-z]*\s{1,}[A-za-z]*$/)) {
        nameError.innerText = "Write Full Name";
        return false;
    }

    nameError.innerHTML = '<i class="fas fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('phone').value;

    if(phone.length == 0) {
        phoneError.innerText = "Phone no is required";
        return false;
    }

    if(phone.length !== 11) {
        phoneError.innerText = "Phone no should be 10 digit";
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerText = "Only write digit";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fas fa-check-circle"></i>';
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value;

    if(email.length == 0) {
        emailError.innerText = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z0-9\-_\.]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerText = "Invalid Email Address";
        return false;
    }

    emailError.innerHTML = '<i class="fas fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    let message = document.getElementById('message').value;
    let maxLength = 30;
    let left = maxLength - message.length;

    if(left > 0) {
        messageError.innerText = `${left} more characters required`;
        return false;
    }

    messageError.innerHTML = '<i class="fas fas fa-check-circle"></i>';
    
    return true;
}

function validateSubmit() {
    if(!validateName() || !validatePhone() || !validateEmail() || !valideMessage()) {
        submitError.style.display = "block";
        submitError.innerText = "Please fix errors to send";
        setTimeout(() => submitError.style.display = "none", 3000);
        return false;
    }
}