const counterSpan = document.querySelector('span#value');
const buttonContainer = document.querySelector('section.button-container');
let counter = 0;

const counterColorFeedback = counter => {
    if (counter > 0) {
        return counterSpan.style.color = 'green';
    }

    if (counter < 0) {
        return counterSpan.style.color = 'red';
    }

    return counterSpan.style.color = 'black';
}

const handleCounter = ({ target }) => {
    if (target.classList.contains('decrease')) {
        counterSpan.textContent = --counter;
        return counterColorFeedback(counter)
    }

    if (target.classList.contains('increase')) {
        counterSpan.textContent = ++counter
        return counterColorFeedback(counter)
    }
    
    counter = 0
    counterSpan.textContent = counter;
    return counterColorFeedback(counter)
}

buttonContainer.addEventListener('click', handleCounter)
