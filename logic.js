(function () {
    const CounterPlus = (total) => {
        var count = 0;
        return function () {
            count++;
            return count;
        };
    };

    const CounterMinus = (total) => {
        let count = 0;
        return function () {
            if (count > 0) {
                count--;
            } else {
                count = 0;
            }
            return count;
        };

    };

    document.body.addEventListener('change', function (evt) {

        var target = evt.target;
        const stepper = document.querySelector('.stepper');
        const productCount = document.querySelectorAll('.stepper-input');

        if (target.className === 'stepper-arrow up') {
            const counterPlus = CounterPlus(productCount);

            counterPlus();

        } else if (target.className === 'stepper-arrow down') {

            const counterMinus = CounterMinus(productCount);

            counterMinus();
        }
    });
})();