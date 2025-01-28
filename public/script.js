document.getElementById('runScriptBtn').addEventListener('click', function() {
    // Send a GET request to the backend to trigger the Python script
    fetch('http://localhost:3000/run', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        if (data.status === 'success') {
            console.log('Simulation started successfully');
            alert('Python script ran successfully!');
        } else {
            console.error('Error:', data.message);
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error); // Log any network or fetch-related errors
        alert('Something went wrong!');
    });
});
