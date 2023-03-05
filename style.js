const form = document.getElementById("form");
const username = document.getElementById("username");
const state = document.getElementById("State");
const city = document.getElementById("city");
const blogtitle = document.getElementById("blogtitle");
const blogtext = document.getElementById("blogtext");

var isValid1=false;
var isValid2=false;
var isValid3=false;
var isValid4=false;
var isValid5=false;

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
    if(isValid1 && isValid2 && isValid3 && isValid4){
        form.submit();
        window.location.href= "Blog.html";
      }
})

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

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const stateValue = state.value.trim();
    const cityValue = city.value.trim();
    const blogtitleValue = blogtitle.value.trim();
    const blogtextValue = blogtext.value.trim();

    if(usernameValue === '') {
        isValid1=false;
        setError(username, 'Username is required');
    } else {
        isValid1=true;
        setSuccess(username);
    }


    if(stateValue === '') {
        isValid2=false;
        setError(state, 'State is required');
    } else {
        isValid2=true;
        setSuccess(state);
    }

    if(cityValue === '') {
        isValid3=false;
        setError(city, 'City is required');
    } else {
        isValid3=true;
        setSuccess(city);
    }

    if(blogtitleValue === '') {
        isValid4=false;
        setError(blogtitle, 'Blog Title is required');
    } else {
        isValid4=true;
        setSuccess(blogtitle);
    }

    if(blogtextValue === '') {
        isValid5=false;
        setError(blogtext, 'Blog text is required');
    } else {
        isValid5=true;
        setSuccess(blogtext);
    }
}



