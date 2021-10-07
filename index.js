const modal = document.getElementsByClassName("modalWindow")[0];
const showModal = document.getElementsByClassName("dropdownBtn")[0];
const closeModal = document.getElementById("modalBtn");


function toggleModal () {
    modal.classList.toggle("showModal");
}

function ModalOpen(event) { 
    if(event.target === modal) {
        toggleModal();
    }
}


showModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
modal.addEventListener("click", ModalOpen);


const slider = document.getElementsByClassName("sliders")[0];
const buttonRight = document.getElementById("slider-btn-right");
const buttonLeft = document.getElementById("slider-btn-left");



let initCount = 0;

function showLastSlide () {
    initCount = 1

    if(initCount > 0){
        slider.classList.add('slidesToLeft')
    }
}

function showFirstSlide () {
    initCount = -1

    if(initCount < 0) {
        slider.classList.remove('slidesToLeft')
        slider.classList.add('slidesToRight')
    }
}




buttonLeft.addEventListener("click", showFirstSlide);
buttonRight.addEventListener("click", showLastSlide);





const accordion = document.getElementsByClassName('qa-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}