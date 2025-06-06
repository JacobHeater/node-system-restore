const {
  compile
} = require('nexe');

compile({
  input: './run.js',
  resources: [
    './exe/WinRestorator.exe'
  ],
  output: './pkg/SystemRestore.exe',
  targets: 'win32-x86',
  loglevel: 'verbose'
}).then(() => {
  console.log('Done running nexe.');
}, (err) => {
  console.log('Error while running nexe...');
  console.log('--------');
  console.log(err);
});
