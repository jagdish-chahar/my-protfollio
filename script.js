const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

const firebaseConfig = {
    apiKey: "AIzaSyBkZTzosDzSW_X2Wu2XU5J1i32bt3rMYDA",
    authDomain: "portfolio-40afa.firebaseapp.com",
    databaseURL: "https://portfolio-40afa-default-rtdb.firebaseio.com",
    projectId: "portfolio-40afa",
    storageBucket: "portfolio-40afa.firebasestorage.app",
    messagingSenderId: "305271479965",
    appId: "1:305271479965:web:22fc0fbd75626dd2adfe74",
    measurementId: "G-ZJDPLRWZJ8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Ensure Firebase is loaded before initializing
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();  // ✅ Now `db` is properly defined

// Handle Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {  // Ensure the form exists
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('msg').value;

            if(!message || !email || !name) {
                alert("All the fields are mandatory to fill.");
                return;
            }

            // Store data in Firestore
            db.collection('contacts').add({
                name: name,
                email: email,
                message: message
            })
            .then(() => {
                console.log('Contact form submitted successfully!');
                alert('Contact form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error submitting contact form:', error);
                alert('Error submitting contact form');
            });
        });
    } else {
        console.error("Contact form not found in the document.");
    }
});


let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}




ScrollReveal({
    distance : '60px',
    duration: 1500,
    delay : 200
});


ScrollReveal().reveal('.home-content, heading',{origin : 'top'});
ScrollReveal().reveal('.home-img',{origin : 'bottom'});
ScrollReveal().reveal('.project-card, .about-info, .right , .map',{origin : 'right'});
ScrollReveal().reveal('.about-img-container, .skill-card, .left, .contact-form',{origin : 'left'});