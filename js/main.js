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



/* SCROLL TO TOP BUTTON */

const backToTop = (event) => {
    if (window.pageYOffset > 100) {
        document.getElementById('scrollTop').style.display = 'block';
        document.getElementById('scrollTop').style.opacity = '1';
    } else {
        document.getElementById('scrollTop').style.display = 'none';
        document.getElementById('scrollTop').style.opacity = '0';
    }
}

window.onscroll = backToTop;
