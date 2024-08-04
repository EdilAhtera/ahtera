// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDui5Jvk2OIFpTPTcYPPAJzN3pOsa3pDFk",
    authDomain: "ahtera-studio.firebaseapp.com",
    projectId: "ahtera-studio",
    storageBucket: "ahtera-studio.appspot.com",
    messagingSenderId: "138563825425",
    appId: "1:138563825425:web:611cf9e08b3e08fcbc66b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const form = document.getElementById('auth-form');
const errorMessage = document.getElementById('error-message');
const toggleFormButton = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');

let isLogin = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login successful
                window.location.href = 'dashboard.html'; // Redirect to admin dashboard
            })
            .catch((error) => {
                errorMessage.textContent = error.message;
            });
    } else {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registration successful
                window.location.href = 'dashboard.html'; // Redirect to admin dashboard
            })
            .catch((error) => {
                errorMessage.textContent = error.message;
            });
    }
});

toggleFormButton.addEventListener('click', () => {
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Login';
        toggleFormButton.textContent = 'Switch to Register';
    } else {
        formTitle.textContent = 'Register';
        toggleFormButton.textContent = 'Switch to Login';
    }
});


toggleFormButton.addEventListener('click', () => {
    console.log('Toggle button clicked'); // Debugging log
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Login';
        toggleFormButton.textContent = 'Switch to Register';
    } else {
        formTitle.textContent = 'Register';
        toggleFormButton.textContent = 'Switch to Login';
    }
});