// List of invitees
const invitees = [
    "Abinash sir", "Kumawat sir", "Archana ma'am", "Deepak Garg sir",
    "Deepak Rao sir", "Aditya sir", "Rahul sir", "Indrajeet sir",
    "Parul ma'am", "Komal Yadav ma'am", "Ritu Goyal ma'am",
    "Saloni ma'am", "Brahm Prakash sir", "Kanchan ma'am",
    "Richa ma'am", "Shivani ma'am"
  ];
  

// Container for invitee tiles
const container = document.getElementById('invitees-container');

// Generate the invitee tiles
invitees.forEach(invitee => {
    const tile = document.createElement('div');
    tile.className = 'invitee-tile';
    tile.textContent = invitee;
    
    // Add click event listener to change color
    tile.addEventListener('click', () => {
        tile.classList.toggle('active');
    });

    container.appendChild(tile);
});


document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');

    // Double the images to create a seamless loop
    images.forEach(img => {
        const clone = img.cloneNode(true);
        gallery.appendChild(clone);
    });

    // Pause animation on hover
    gallery.addEventListener('mouseenter', () => {
        gallery.style.animationPlayState = 'paused';
    });

    gallery.addEventListener('mouseleave', () => {
        gallery.style.animationPlayState = 'running';
    });
});