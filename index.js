const modal = document.getElementsByClassName("modalWindow")[0];
const showModal = document.getElementsByClassName("dropdownBtn")[0];
const closeModal = document.getElementById("modalBtn");
const burger = document.getElementsByClassName("burger")[0];



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
burger.addEventListener("click", toggleModal)


const accordion = document.getElementsByClassName('qa-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}




  document.querySelector('#send').onclick = function(){
    let message = [
        'Новая заявка на пробный урок',
        name,
        phone
      ]
    
    let name = document.querySelector('#name').value;
    const token = "2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0"
    let phone = document.querySelector('#phone').value;
    const url = 'http://api.telegram.org/bot'+token+'/sendMessage?chat_id=-567726567&text='
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url+message + name + phone, true)
    xhttp.send();
    
}

document.querySelector('#send2').onclick = function(){
  let phone = document.querySelector('#phone2').value;
  let name = document.querySelector('#name2').value;
  let message = [
    'Новая заявка на консультацию',
    name,
    phone
  ]
  
  const token = "2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0"
  const url = 'http://api.telegram.org/bot'+token+'/sendMessage?chat_id=-567726567&text='
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url+message, true)
  xhttp.send();
  
}