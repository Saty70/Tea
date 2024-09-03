// List of invitees
const invitees = ["John Doe", "Jane Smith", "Michael Brown", "Emily Davis","John Doe", "Jane Smith", "Michael Brown", "Emily Davis","John Doe", "Jane Smith", "Michael Brown", "Emily Davis"];

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
