
const fixedBtn = document.querySelector('.fixed-button');
const scrollY = window.scrollY;

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

const paragraphText = document.querySelector('.philosophy__text');
const windowHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    if ( window.scrollY < windowHeight - 200) {
        paragraphText.classList.add('text-active');
    } 
})

const flexContainers = document.querySelectorAll('.flex-container');
window.addEventListener('scroll', () => {
        flexContainers.forEach(flexContainer => {
            let position = flexContainer.getBoundingClientRect().top;
            
            if ((position < windowHeight - 200)) {
                flexContainer.classList.add('flex-container-active');
            }
        })
})