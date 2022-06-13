const slides = document.getElementsByClassName('carousel-item')
let slidePos = 0
const totalSlides = slides.length
const imgs = [
    'imgs/Gambling.jpg',
    'imgs/playing-outside.jpg',
    'imgs/bench-smiles-no-instruments.jpg',
    'imgs/standing-back.jpg'
]
const cardText = [
    "Talk about tappin' your toes! These guys will knock your socks right off them toes!",
    "lorem ipsum dolor sit amet, con"
]
const container = document.getElementById('container')



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

// Added this render images from the array of imgs above but its not working properly
//flagged the container div.
/*
const renderImg = () =>{
    let imgsDom = ''
    for(let x =0; imgs.length>x ; x++){
        imgsDom += `<div class="carousel-item">
                        <img src=${imgs[x]} class="carousel-item-img" alt="">
                        <p class="car-text">“Talk about tappin' your toes! These guys will knock your socks right off them toes!”</p>
                    </div>`
    }
    container.innerHTML = imgsDom
}
renderImg()
*/