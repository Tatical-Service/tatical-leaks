function togglePopup() {
    var popup = document.getElementById('popup')
    var toswarn = document.getElementById('toswarn')
    popup.style.display = 'block'
    toswarn.style.display = 'none'
}

var scelta = localStorage.getItem('id')

/*  function toggleSelected(scelta) {
  var elementoSelezionato = document.getElementById(scelta.id);
  var pFooter = document.getElementById('ruoli')

  if(elementoSelezionato.style.border != 'none' && elementoSelezionato.style.backgroundColor == 'transparent') {
     elementoSelezionato.style.backgroundColor = '#141414'
     elementoSelezionato.style.border = 'none'
     pFooter.innerHTML = null
  } else {
    elementoSelezionato.style.backgroundColor = 'transparent'
    elementoSelezionato.style.border = '2.5px solid rgb(63 63 70)'
    pFooter.innerHTML = '@' + scelta.id
  }

  if (elementoSelezionato.style.backgroundColor = '#141414') {
     elementoSelezionato.style.border = 'none'
  }


  if (elementoSelezionato.style.backgroundColor != 'transparent') {
      elementoSelezionato.addEventListener('click', function() {
        elementoSelezionato.style.backgroundColor = 'transparent'
      })
  } else {
      elementoSelezionato.addEventListener('click', function() {
        elementoSelezionato.style.backgroundColor = '#141414'
        elementoSelezionato.style.border = 'none'
      })
  }

  elementoSelezionato.addEventListener('mouseover', function() {
    elementoSelezionato.style.border = '2.5px solid rgb(161 161 170)'
  })
  elementoSelezionato.addEventListener('mouseout', function() {
    elementoSelezionato.style.border = '2.5px solid rgb(63 63 70)'
  })

  if (elementoSelezionato.style.border != 'none') {
      elementoSelezionato.style.backgroundColor = '#141414'
      elementoSelezionato.style.border = 'none'
    } else {
      elementoSelezionato.style.backgroundColor == 'transparent'
      elementoSelezionato.style.border = '2.5px solid rgb(63 63 70)'
      elementoSelezionato.addEventListener('mouseover', function() {
        elementoSelezionato.style.border = '2.5px solid rgb(161 161 170)'
      })
      elementoSelezionato.addEventListener('mouseout', function() {
        elementoSelezionato.style.border = '2.5px solid rgb(63 63 70)'
      })
    }

    if (elementoSelezionato.style.backgroundColor != 'transparent') {
        elementoSelezionato.addEventListener('click', function() {
          elementoSelezionato.style.backgroundColor = 'transparent'
        })
    } else {
      elementoSelezionato.addEventListener('click', function() {
        elementoSelezionato.style.backgroundColor = '#141414'
        elementoSelezionato.style.border = 'none'
      })
    }

    if (elementoSelezionato.style.backgroundColor == 'transparent' && elementoSelezionato.style.border == '2.5px solid rgb(63 63 70)') {
      elementoSelezionato.addEventListener('click', function() {
        elementoSelezionato.style.backgroundColor = 'rgb(63 63 70)'
        elementoSelezionato.style.border = 'none'
      })
    }

  var pFooter = document.getElementById('ruoli')
  if (elementoSelezionato.style.backgroundColor = 'transparent') {
     pFooter.innerHTML = ''
  }
  if (elementoSelezionato.style.backgroundColor = '#141414') {
    pFooter.innerHTML = '@' + scelta.id
 }
} */

setTimeout(function() {
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.classList.add("slide-out");
  setTimeout(function() {
    loadingScreen.style.display = "none";
  }, 1000); // 1000 millisecondi = 1 secondo
}, 3000); // 2000 millisecondi = 2 secondi

function join() {
  var slideout = document.getElementById('wrapper-join');

  slideout.style.display = 'none'
  window.location.href = './AccountSystem/login.html'
}

function triggerPassword() {
  var input = document.getElementById('password');
  var eye = document.getElementsByClassName('eye');
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}

const checkbox = document.getElementById('tos1');
const button = document.getElementById('registerbtn');

checkbox.addEventListener('change', function() {
  button.disabled = !checkbox.checked;
});

button.addEventListener('click', function() {
  if (!button.disabled) {
    // Reindirizza l'utente a una pagina specifica
    window.location.href = '../home.html';
  }
});

const phone = document.getElementById('phone');
const emailmobile = document.getElementById('emailmobile');
const labelmobile = document.getElementById('labelmobile');
const inputphonemail = document.getElementById('inputphonemail');

emailmobile.addEventListener('click', function() {
    emailmobile.style.background = 'rgb(63 63 70)'
    phone.style.background = 'transparent'

    labelmobile.innerHTML = 'E-MAIL'

    inputphonemail.type = 'email'
    inputphonemail.removeAttribute('pattern');
})

phone.addEventListener('click', function() {
  phone.style.background = 'rgb(63 63 70)'
  emailmobile.style.background = 'transparent'

  labelmobile.innerHTML = 'PHONE'

  inputphonemail.type = 'tel'
})
