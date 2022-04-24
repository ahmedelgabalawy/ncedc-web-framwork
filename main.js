

function toggle(id) {
    var x = document.getElementById(id);
    x.classList.toggle('d-none')
  }

  function showImage(containerId , img) {
    var container = document.getElementById(containerId)
    container.src=img
  }

