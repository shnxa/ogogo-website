const modal = document.getElementsByClassName("modalWindow")[0],
    showModal = document.getElementsByClassName("dropdownBtn")[0],
    closeModal = document.getElementById("modalBtn"),
    burger = document.getElementsByClassName("burger")[0];
function toggleModal() {
    modal.classList.toggle("showModal");
}
function ModalOpen(e) {
    e.target === modal && toggleModal();
}
showModal.addEventListener("click", toggleModal),
    closeModal.addEventListener("click", toggleModal),
    modal.addEventListener("click", ModalOpen),
    burger.addEventListener("click", toggleModal)
  

const formWindow = document.getElementsByClassName("application-form-window")[0];
      openWindow = document.getElementById('openForm');
      closeForm = document.getElementById('closeForm');

      function toggleForm () {
          formWindow.classList.toggle('show-form-window');
      }
      function openForm (e){
          e.target === formWindow && toggleForm();
      }

      console.log(formWindow)

      openWindow.addEventListener('click', toggleForm);
      formWindow.addEventListener('click', openForm);
      closeForm.addEventListener('click',toggleForm );



    (document.querySelector("#send").onclick = function () {
        let e = document.querySelector("#courseTitle"),
            t = document.querySelector("#phone").value,
            v = document.querySelector("#name").value,
            o = [e,v, t];
        let a = new XMLHttpRequest();
        a.open("GET", "http://api.telegram.org/bot2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0/sendMessage?chat_id=-567726567&text=" + o, !0), a.send();
        
        document.querySelector("#phone2").value = '';
        document.querySelector("#name2").value = '';

    });

    document.querySelector('#senddata').onclick = function () {
        let phone = document.querySelector('#phonedata').value;
        let name = document.querySelector("#namedata").value;
        let t = document.querySelector('#applicationid');
        let o = [t, name, phone];
        let a = new XMLHttpRequest();

        a.open("GET", "http://api.telegram.org/bot2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0/sendMessage?chat_id=-567726567&text=" + o, !0), a.send();
        
          
        document.querySelector("#phonedata").value = '';
        document.querySelector("#namedata").value = '';
    }
