const { exec } = require('child_process');
const $ = require('jquery');

function $se(seletor) {
    return document.querySelector(seletor);
}

function eventBinder(selector, action, f) {
    $se(selector).addEventListener(action, f);
}

eventBinder('#convert', 'click', function() {
    let imgPath = $se('#img').files[0].path;
    exec(`tesseract ${imgPath} stdout`, (error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        $se('#txt').value = stdout;
      });
})

console.log($('#txt'))