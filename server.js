const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the frontend (index.html) when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to run the Python script
app.get('/run', (req, res) => {
    const pythonScript = path.join(__dirname, 'script.py');
    
    // Execute the Python script using the child_process module
    exec(`python ${pythonScript}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution error: ${error}`);
            return res.json({ status: 'error', message: error.message });
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.json({ status: 'error', message: stderr });
        }
        console.log(`stdout: ${stdout}`);
        return res.json({ status: 'success', message: 'Simulation started successfully' });
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
