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

$('.telegram-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append('Пробный урок', form.val());
    data.append( 'name',$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );
   
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            alert('error')
        },
        complete: function() {
            
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});

document.querySelector('#send2').onclick = function(){
    let title = document.querySelector('#applicationid');
    let phone = document.querySelector('#phone2').value;
    let name = document.querySelector('#name2').value;
    let message = [
      title,
      name,
      phone
    ]
    
    const token = "2094930216:AAGvtGVVJqCqCsUTLfDsYBRtWIn3a9g5ZA0"
    const url = 'http://api.telegram.org/bot'+token+'/sendMessage?chat_id=-567726567&text='
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url+message, true)
    xhttp.send();
    
  }

