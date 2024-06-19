document.addEventListener('DOMContentLoaded', function () {
    const rideForm = document.getElementById('rideForm');
    if (rideForm) {
        rideForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const formData = new FormData(rideForm);
            
            fetch('submit.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                window.location.href = 'index.html';  // Redirect to home after submission
            })
            .catch(error => console.error('Error:', error));
        });
    }

    function loadRides() {
        fetch('rides.php')
        .then(response => response.json())
        .then(data => {
            const ridesList = document.getElementById('ridesList');
            if (ridesList) {
                ridesList.innerHTML = '';
                data.forEach(ride => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${ride.name} is going to ${ride.destination} on ${ride.date}`;
                    ridesList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error:', error));
    }

    window.searchRides = function () {
        const searchDestination = document.getElementById('searchDestination').value.toLowerCase();
        
        fetch('rides.php')
        .then(response => response.json())
        .then(data => {
            const ridesList = document.getElementById('ridesList');
            if (ridesList) {
                ridesList.innerHTML = '';
                data.filter(ride => ride.destination.toLowerCase().includes(searchDestination)).forEach(ride => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${ride.name} is going to ${ride.destination} on ${ride.date}`;
                    ridesList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error('Error:', error));
    };

    loadRides();
});
