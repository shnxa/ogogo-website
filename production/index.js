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
showModal.addEventListener("click", toggleModal), burger.addEventListener("click", toggleModal), closeModal.addEventListener("click", toggleModal), modal.addEventListener("click", ModalOpen);
const accordion = document.getElementsByClassName("qa-container");
for (i = 0; i < accordion.length; i++)
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });


    
    document.querySelector("#send").onclick = function () {
        let e = document.querySelector("#phone").value;
        let p =  document.querySelector("#name").value;
        t = ["Новая заявка на консультацию",p, e];
        let o = new XMLHttpRequest();
        o.open("GET", "http://api.telegram.org/bot2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0/sendMessage?chat_id=-567726567&text=" + t, !0), o.send();
        document.querySelector('#phone').value = '';
        document.querySelector('#name').value = '';
    };
    

    
    document.querySelector("#send2").onclick = function () {
        
            let phone = document.querySelector("#phone2").value;
                let v = document.querySelector("#name2").value;
            t = ["Новая заявка на консультацию", v, phone];
        let o = new XMLHttpRequest();
        o.open("GET", "http://api.telegram.org/bot2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0/sendMessage?chat_id=-567726567&text=" + t, !0), o.send();
        
        document.querySelector('#phone2').value = '';
        document.querySelector('#name2').value = '';
    };
