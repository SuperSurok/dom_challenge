window.onload = (function () {
    const arrowUp = document.querySelectorAll('.up');
    console.log(arrowUp);
    const arrowDown = document.querySelector('.stepper-arrow down');
    const productCount = document.querySelector('.stepper-input');
    const counter = 0;
    productCount.innerText = counter;

    const plusCountHandler = (evt) => {
        counter += 1;
    }
    arrowUp.forEach(element => {
        element.addEventListener('click', plusCountHandler)
    });;

})();