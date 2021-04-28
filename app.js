const counterSpan = document.querySelector('span#value');
const buttonContainer = document.querySelector('section.button-container');

buttonContainer.addEventListener('click', event => {
    const arrayOfElementClasses = Array.from(event.target.classList);

    if (arrayOfElementClasses.includes('decrease')) {
        return counterSpan.textContent--
    }

    if (arrayOfElementClasses.includes('reset')) {
        return counterSpan.textContent = 0;
    }

    if (arrayOfElementClasses.includes('increase')) {
        return counterSpan.textContent++
    }
})
