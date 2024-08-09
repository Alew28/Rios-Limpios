let ubicacionPrincipal = window.scrollY
window.onscroll = function() {
  let desplazamientoActual = window.scrollY;
  if (ubicacionPrincipal >= desplazamientoActual){
    document.getElementById('navbar').style.top = '0';
  }
  else{
    document.getElementById('navbar').style.top = '-18vh';
  }
  ubicacionPrincipal = desplazamientoActual;
}
