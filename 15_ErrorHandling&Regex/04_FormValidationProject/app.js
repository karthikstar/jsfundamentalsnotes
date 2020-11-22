
// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur',validateName);

document.getElementById('zip').addEventListener('blur',validateZip);

document.getElementById('email').addEventListener('blur',validateEmail);

document.getElementById('phone').addEventListener('blur',validatePhone);


function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid'); // this class will make input box red and give a alert underneath it.
    } else {
        name.classList.remove('is-invalid');
    }

}

function validateZip(){
    const zip = document.getElementById('zip');
    // follows US zip code - either 5 number zip code or 5num - 4 num zip code
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}


function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

}
// us phone numbers can be XXX XXX XXXX / XXX.XXX.XXXX / XXX-XXX-XXXX / (XXX).XXX.XXXX / (XXX)XXXXXXXX

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }

}