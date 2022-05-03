const openModal = document.getElementById('open-modal')

const closeModal = document.getElementById('close-modal')


openModal.addEventListener('click', function(){
    document.getElementById('overlay').style.display=  'block'
})


closeModal.addEventListener('click', function(){
    document.getElementById('overlay').style.display= 'none'
})