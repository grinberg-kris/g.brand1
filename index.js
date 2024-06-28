document.addEventListener('DOMContentLoaded', function () {
  let menu = document.querySelector('#menu')
  let arrow = document.querySelector('#arrow')

  arrow.addEventListener('click', () => {
    menu.classList.toggle('opacity')
  })
})

// function viewDiv(){
//   document.getElementById("menu").style.display = "block";
// };

// document.querySelector('#arrow').click(function () {
//   document.querySelector('#menu').css('display')
// })