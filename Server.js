const os = require('os');

// Get basic OS information
const osInfo = {
  platform: os.platform(),
  arch: os.arch(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  cpus: os.cpus(),
  networkInterfaces: os.networkInterfaces(),
};

// Display OS information
console.log('Operating System Information:');
console.log('Platform:', osInfo.platform);
console.log('Architecture:', osInfo.arch);
console.log('Release:', osInfo.release);
console.log('Total Memory (bytes):', osInfo.totalMemory);
console.log('Free Memory (bytes):', osInfo.freeMemory);
console.log('CPUs:', osInfo.cpus.length);
console.log('Network Interfaces:', osInfo.networkInterfaces);
