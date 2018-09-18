window.onload = function () {
    const mainBlock = document.querySelector('#products_section');


    let counter = 0;
    const counterGoodsPlus = () => {
        counter += 1;
    };

    const counterGoodsMinus = () => {
        counter -= 1;
    };


    const countItemHandler = (evt) => {
        const productCount = document.querySelector('.stepper-input');
        evt.preventDefault();
        let elem = evt.target;
        console.log(elem);
        if (elem.classList == 'stepper-arrow up') {
            counterGoodsPlus();
            productCount.value = counter;
            console.log(productCount.value);
        } else if (elem.classList == 'stepper-arrow down') {
            counterGoodsMinus();
            productCount.value = counter;
        }

        console.log(counter);
        return;
    };


    document.body.addEventListener('click', countItemHandler)
};