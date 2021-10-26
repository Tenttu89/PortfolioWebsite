/* FORM FUNCTIONS */

if (document.body.contains(document.getElementById('contactForm'))) {
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
}



/* SCROLL TO TOP BUTTON */

const backToTop = (event) => {
    if (window.pageYOffset > 100) {
        document.getElementById('scrollTop').style.display = 'block';
    } else {
        document.getElementById('scrollTop').style.display = 'none';
    }
}

window.onscroll = backToTop;



/* PROJECT 1 - QUOTE */

const offerQuote = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    let targetArea = document.getElementById('resultArea');
    switch(randomNumber) {
        case 0:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = 'It is what it is!';
            break;
        case 1:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = 'You get what you deserve!';
            break;
        case 2:
            targetArea.style.display = 'block';
            targetArea.style.innerHTML = 'People like booze!';
            break;
    }
}

document.getElementById('quoteButton').onclick = offerQuote;
