
var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/electron-demo-app-win32-x64',
    outputDirectory: './installers/windows',
    authors: '',
    exe: 'electron-demo-app.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
