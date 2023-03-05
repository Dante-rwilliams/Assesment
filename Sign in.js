const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var isValid1=false;
var isValid2=false;
var isValid3=false;
var isValid4=false;


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if(isValid1 && isValid2 && isValid3 && isValid4){
        form.submit();
        window.location.href= "Blog.html";
      }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        isValid1=false;
        setError(username, 'Username is required');
    } else {
        isValid1=true;
        setSuccess(username);
    }

    if(emailValue === '') {
        isValid2=false;
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        isValid2=false;
        setError(email, 'Provide a valid email address');
    } else {
        isValid2=true;
        setSuccess(email);
    }

    if(passwordValue === '') {
        isValid3=false;
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        isValid3=false;
        setError(password, 'Password must be at least 8 character.')
    } else {
        isValid3=true;
        setSuccess(password);
    }

    if(password2Value === '') {
        isValid4=false;
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        isValid4=false;
        setError(password2, "Passwords doesn't match");
    } else {
        isValid4=true;
        setSuccess(password2);
    }

};
