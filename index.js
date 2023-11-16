// const isNightMode = localStorage.getItem('nightMode');

// if (isNightMode === 'enabled') {
//   enableNightMode();
// }

// function enableNightMode() {
//   const body = document.body;
//   body.classList.add('night-mode');
//   localStorage.setItem('nightMode', 'enabled');
// }

// function disableNightMode() {
//   const body = document.body;
//   body.classList.remove('night-mode');
//   localStorage.setItem('nightMode', 'disabled');
// }

// document.getElementById('night-mode-button').addEventListener('click', function() {
//   const isNightModeEnabled = document.body.classList.contains('night-mode');
//   if (isNightModeEnabled) {
//     disableNightMode();
//   } else {
//     enableNightMode();
//   }
// });

function myFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}