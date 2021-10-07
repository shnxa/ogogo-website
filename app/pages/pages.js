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