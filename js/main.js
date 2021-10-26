/* FORM FUNCTIONS */

const resetForm = document.getElementById('resetButton');
const submitForm = document.getElementById('submitButton');

const resetFunction = () => {
    document.getElementById('contactForm').reset();
}

const submitFunction = () => {
    alert('This form is not really functional but your message should have been sent by clicking this button.');
}

resetForm.onclick = resetFunction;
submitForm.onclick = submitFunction;



/* SMOOTH SCROLLING - TO TOP & NAV LINKS */

window.scroll({ top: 0, left: 0, behavior: 'smooth' });

document.querySelector('#about, #projects, #contact').scrollIntoView({ 
    behavior: 'smooth' 
});