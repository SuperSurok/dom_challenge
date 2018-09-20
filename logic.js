window.onload = function () {
    let counter = 0;
    // Handler amount goods input
    const countItemHandler = (evt) => {
        let elem = evt.target;
        let productCount = document.getElementsByTagName('input');
        if (elem.classList.contains('up')) {
            counter += 1;
            productCount.value = counter;
        }
        if (elem.classList.contains('down')) {
            counter -= 1;
            console.log(productCount.value = counter);
            if (productCount.value < 0) {
                productCount.value = 0;
                return false;
            }
        }
    };

    // Switch handler between prices for square meter and package
    const priceSelectHandler = (evt) => {
        evt.preventDefault();
        const priceSelect = document.querySelector('.unit--select');
        const priceToggle = priceSelect.querySelector('.ng-binding');
        if (evt.target.classList.contains('ng-binding')) {
            priceToggle.classList.toggle('unit--active');
        }
    };
    document.addEventListener('click', priceSelectHandler);
    document.addEventListener('click', countItemHandler)
};