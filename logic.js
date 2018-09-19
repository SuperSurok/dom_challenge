window.onload = function () {
    const mainBlock = document.querySelector('#products_section');

    const countItemHandler = (evt) => {
        evt.preventDefault();
        let elem = evt.target;
        console.log(elem);
        let productCount = document.querySelector('.stepper-input');
        if (elem.classList.contains('stepper-arrow up')) {
            console.log(productCount.value += 4);
        } else if (elem.classList.contains('stepper-arrow down')) {
            productCount.value -= 1;
            if (productCount.value < 0) {
                productCount.value = 0;
                return false;
            }
        }
    };

    const priceSelectHandler = (evt) => {
        evt.preventDefault();
        const priceSelectWrapper = document.querySelector('.unit--wrapper');
        const priceSelect = document.querySelector('.unit--select');
        const goldPrice = document.querySelector('.goldPrice');
        const priceDefault = document.querySelector('.retailPrice');
        if (evt.target.priceSelectWrapper) {
            priceSelect.classList.add('unit--active');
        }
    };
    document.body.addEventListener('click', priceSelectHandler);
    document.body.addEventListener('click', countItemHandler)
};