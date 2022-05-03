const slides = document.getElementsByClassName('carousel-item')
let slidePos = 0
const totalSlides = slides.length

document.getElementById('move-prev').addEventListener('click', moveToPrev)
document.getElementById('move-next').addEventListener('click', moveToNextSlide)

function hideAll(){
    for(let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}
function moveToNextSlide(){
    hideAll()

    console.log('move to next slide')
    if(slidePos === totalSlides-1){
        slidePos = 0
    } else {
        slidePos++
    }
    slides[slidePos].classList.add('carousel-item-visible')
}

function moveToPrev(){
    hideAll()
    console.log('move to prev')
    if(slidePos === 0){
        slidePos = totalSlides -1
    } else{
        slidePos --
    }
    slides[slidePos].classList.add('carousel-item-visible')
}

console.log()
