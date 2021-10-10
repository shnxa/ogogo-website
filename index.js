const modal = document.getElementsByClassName("modalWindow")[0];
const showModal = document.getElementsByClassName("dropdownBtn")[0];
const closeModal = document.getElementById("modalBtn");
const formWindow = document.getElementById('application-form-window')[0];


function toggleModal () {
    modal.classList.toggle("showModal");
}

function ModalOpen(event) { 
    if(event.target === modal) {
        toggleModal();
    }
}

setTimeout(function(){
    formWindow.classList.add('showModal')
},20000)


showModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
modal.addEventListener("click", ModalOpen);


const accordion = document.getElementsByClassName('qa-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

const applicationForm = document.getElementById('application-form-window');


document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1)
    const deadline = new Date(tomorrow);
    
    let timerId = null;
    
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      
      let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

 

    }
    let $hours = document.querySelector('.timer__hours');
    let $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    
    countdownTimer();
    
    timerId = setInterval(countdownTimer, 1000);
  });

  

 