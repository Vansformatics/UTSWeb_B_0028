// Dark Mode
const darkButton = document.getElementById('darkButton');

const body = document.body;

darkButton.addEventListener('click', function(){

    body.classList.toggle('dark-mode');

});