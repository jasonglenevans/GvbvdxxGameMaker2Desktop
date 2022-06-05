(async function () {
const { MSICreator } = require('electron-wix-msi');

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: './win-unpacked/',
  description: 'Gvbvdxx Game Maker 2 - A Game Maker',
  exe: 'Gvbvdxx Game Maker 2',
  name: 'Gvbvdxx Game Maker 2',
  manufacturer: 'Gvbvdxx',
  version: '1.0.0',
  outputDirectory: 'dist/'
});

// Step 2: Create a .wxs template file
const supportBinaries = await msiCreator.create();

// 🆕 Step 2a: optionally sign support binaries if you
// sign you binaries as part of of your packaging script
supportBinaries.forEach(async (binary) => {
  // Binaries are the new stub executable and optionally
  // the Squirrel auto updater.
  await signFile(binary);
});

// Step 3: Compile the template to a .msi file
await msiCreator.compile();

})()