document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('revealButton');
    var infoBox = document.getElementById('infoBox');
    var closeButton = document.getElementById('closeButton');
    
    button.addEventListener('click', function() {
        // Hide the button and show the info box
        button.style.opacity = '0';
        button.style.visibility = 'hidden'; // Hide the button but keep it in the DOM
        infoBox.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        // Hide the info box and show the button
        infoBox.classList.remove('show');
        setTimeout(function() {
            button.style.visibility = 'visible'; // Make the button visible again
            button.style.opacity = '1';
        }, 500); // Match this with the info box's fade-out transition
    });
});
