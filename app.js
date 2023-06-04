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
}