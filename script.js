// Dark Mode
const darkButton = document.getElementById('darkButton');

const body = document.body;

darkButton.addEventListener('click', function(){

    body.classList.toggle('dark-mode');

});

// Alert Pesanan
const pesanBtn = document.querySelectorAll('.pesanBtn');

pesanBtn.forEach(function(button){

    button.addEventListener('click', function(){

        alert('Pesanan berhasil ditambahkan');

    });

});