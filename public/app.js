// List of invitees
const invitees = [
    "Dr. Abinash Mishra", "Dr. Chothmal Kumawat", "Dr. Deepak Raj Rao",
    "Dr. Archana Patel", "Dr. Deepak Garg", "Dr. Brahm Prakash",
    "Dr. Indrajeet Singh", "Dr. Kanchan Mala", "Dr. Richa Rohatgi",
    "Ms. Komal Yadav", "Dr. Ritu Goyal", "Mr. Rahul Kamble",
    "Mr. Aditya Pratap Singh", "Mrs. Parul Arora", "Ms. Saloni Priya",
    "Mrs. Shivani Sehgal"
  ];
  

// Container for invitee tiles
const container = document.getElementById('invitees-container');

// Function to update RSVP status
function updateRSVPStatus(invitee, status) {
    // Send AJAX request to update status on server
    fetch('/update-rsvp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ invitee, status }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(`RSVP status updated for ${invitee}`);
        } else {
            console.error('Failed to update RSVP status');
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to get all RSVP statuses
function getAllRSVPStatuses() {
    fetch('/get-all-rsvp')
    .then(response => response.json())
    .then(statuses => {
        statuses.forEach(({ invitee, status }) => {
            const tile = document.querySelector(`.invitee-tile[data-invitee="${invitee}"]`);
            if (tile) {
                tile.classList.toggle('active', status);
            }
        });
    })
    .catch(error => console.error('Error:', error));
}

// Generate the invitee tiles
invitees.forEach(invitee => {
    const tile = document.createElement('div');
    tile.className = 'invitee-tile';
    tile.textContent = invitee;
    tile.dataset.invitee = invitee;
    
    // Add click event listener to change color and update server
    tile.addEventListener('click', () => {
        const newStatus = !tile.classList.contains('active');
        updateRSVPStatus(invitee, newStatus);
        tile.classList.toggle('active', newStatus);
    });

    container.appendChild(tile);
});

// Set up periodic polling for updates
setInterval(getAllRSVPStatuses, 5000); // Poll every 5 seconds

// Initial load of RSVP statuses
getAllRSVPStatuses();

// Keep the existing carousel code
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