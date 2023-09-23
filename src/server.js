const { spawn } = require('child_process');

// Define an array of server configurations
const servers = [
  { name: 'Backend Server', path: './src/backend/server.js' },
  { name: 'CDN Server', path: './cdn/app.js' },
  // Add more servers as needed
];

// Function to start a server
function startServer(server) {
  console.log(`Starting ${server.name}...`);
  const child = spawn('node', [server.path]);

  child.stdout.on('data', (data) => {
    console.log(`${server.name} stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`${server.name} stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`${server.name} exited with code ${code}`);
  });
}

// Start all servers
servers.forEach(startServer);
