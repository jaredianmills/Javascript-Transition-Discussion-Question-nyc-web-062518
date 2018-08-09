// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   debugger
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

// function saveLincoln(interval) {
//   debugger
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
//
// const button = $('#save_lincoln')
// let interval = parseInt($('#interval').val())
// button.click(()=>saveLincoln(interval))

function fadeOut(element, interval) {
  if (isNaN(interval)) {
    interval = 1000
  }
  // function fade(element) {element.style.opacity -= .1}
  setInterval(() => {element.style.opacity -= 0.1}, interval)
}


document.getElementById('save_lincoln').addEventListener("click", ()=>saveLincoln(parseInt(document.getElementById('interval').value)))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  let element = document.getElementById("foreground")
  fadeOut(element, interval);
}
