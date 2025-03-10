
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

const paragraphTexts = document.querySelectorAll('.philosophy__text');
const windowHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    if ( window.scrollY < windowHeight - 200) {
        paragraphTexts.forEach( paragraphText => {
            paragraphText.classList.add('text-active')
        })
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


const openingAnimation = () => {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader__text');
    const loaderLetters = loaderText.textContent.split('');
    const newloaderText = loaderLetters.map((loaderletter) => {
        return `<span class='loader__letter'>${loaderletter}</span>`;
    })
    loaderText.innerHTML = newloaderText.join('');
    const loaderLetters2 = document.querySelectorAll('.loader__letter');
    loaderLetters2.forEach((loaderLetter2, index) => {
        loaderLetter2.style.animationDelay = `${index * 0.8}s`;
        setTimeout(() => {
            loader.classList.add('loader-showoff');
        }, 5000);
    })
}

window.addEventListener('load', () => {
    openingAnimation();
})

console.log("<span class='loader__text'>豊穣米堂</span>");

let bodyparts = ["頭", "胸",]
let newbody = bodyparts.map((bodypart) => {
    return bodypart + "wao";
})

console.log(newbody);