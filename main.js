
const fixedBtn = document.querySelector('.fixed-button');
const scrollY = window.scrollY;
console.log(fixedBtn);


window.addEventListener('scroll', () => {

    let index = -1;

    if (window.scrollY > 200) {
        index = 1;
    } else {
        index = 0;
    }

    if (index == 1) {
        fixedBtn.classList.add('btn-active');
    } else {
        fixedBtn.classList.remove('btn-active');
    }

});