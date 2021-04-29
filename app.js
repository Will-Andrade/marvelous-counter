const counterSpan = document.querySelector('span#value');
const buttonContainer = document.querySelector('div.button-container');
let counter = 0;

const counterColorFeedback = counter => {
    const counterIsPositive = counter > 0;
    const counterIsNegative = counter < 0;

    if (counterIsPositive) {
        return counterSpan.style.color = '#0F0';
    }

    if (counterIsNegative) {
        return counterSpan.style.color = '#F00';
    }

    return counterSpan.style.color = '#000';
}

const handleCounter = ({ target }) => {
    const shouldIncrement = target.classList.contains('increase');
    const shouldDecrement = target.classList.contains('decrease');

    if (shouldIncrement) {
        counterSpan.textContent = ++counter;
        return counterColorFeedback(counter);
    }
    
    if (shouldDecrement) {
        counterSpan.textContent = --counter;
        return counterColorFeedback(counter);
    }

    counter = 0;
    counterSpan.textContent = counter;
    return counterColorFeedback(counter);
}

buttonContainer.addEventListener('click', handleCounter);
