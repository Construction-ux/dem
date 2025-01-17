const signInButton = document.getElementById('signInButton');
const Signindiv = document.getElementById('Signin');
const signUpdiv = document.getElementById('signUp');


signInButton.addEventListener('click', function () {
    signUpdiv.style.display = 'none';
    Signindiv.style.display = 'block'
})