document.onload = (function () {
    const stepper = document.querySelector('.stepper');
    const productCount = document.querySelector('.stepper-input');
    let counter = 0;

    const addItems = function(evt){
        var target = evt.target;
        if(target.className === 'stepper-arrow down') {
            if (counter > 0) {
                counter--;
            } else {
                return false;
            }
        } else if(target.className === 'stepper-arrow up') {
            counter++;
        }
    }


    document.body.addEventListener('click', addItems);

})();