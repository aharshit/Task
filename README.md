Setup Instructions
Follow these steps to set up your environment with Python, MahaUtils, Node.js, and Express.

Step 1: Install Python (if not installed)
Run the following command to check if Python is installed. If not, it will install Python and pip:

if ! command -v python &>/dev/null; then
    echo "Python not found, installing Python..."
    sudo apt-get update
    sudo apt-get install python python-pip -y
fi

Step 2: Install MahaUtils for Python
Once Python is installed, install the mahautils library using pip:

pip install mahautils

Step 3: Install Node.js (if not installed)
Check if Node.js is installed, and if not, install Node.js and npm:


if ! command -v node &>/dev/null; then
    echo "Node.js not found, installing Node.js..."
    sudo apt update
    sudo apt install nodejs npm -y
fi

Step 4: Install Express for Node.js
Initialize a Node.js project and install Express:

npm init -y
npm install express

Step 5: Start Your Server
Once all dependencies are installed, you can start your server with:

node server.js

Your setup is now complete! 🚀
