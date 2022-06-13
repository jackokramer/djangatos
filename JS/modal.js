const openModal = document.getElementById('open-modal')
const openModalTwo = document.getElementById('open-modal-two')
const openModalThree = document.getElementById('open-modal-three')
const closeModal = document.getElementById('close-modal')
const closeModalTwo = document.getElementById('close-modal-two')
const closeModalThree = document.getElementById('close-modal-three')

// Open Modals
openModal.addEventListener('click', function(){
    document.getElementById('overlay').style.display=  'block'
})

openModalTwo.addEventListener('click', ()=>{
    document.getElementById('overlaid').style.display= 'block'
})

openModalThree.addEventListener('click', ()=>{
    document.getElementById('overlays').style.display= 'block'
})

//Close Modals

closeModal.addEventListener('click', function(){
    document.getElementById('overlay').style.display= 'none'
})

closeModalTwo.addEventListener('click',()=>{
    document.getElementById('overlaid').style.display= 'none'
})

closeModalThree.addEventListener('click', ()=>{
    document.getElementById('overlays').style.display='none'
})