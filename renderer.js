const { exec } = require('child_process');
const $ = require('jquery');

function $se(seletor) {
    return document.querySelector(seletor);
}

function eventBinder(selector, action, f) {
    $se(selector).addEventListener(action, f);
}

const loader = $('#loader');
loader.hide();
eventBinder('#convert', 'click', function() {
    loader.show();
    let imgPath = $se('#img').files[0].path;
    exec(`tesseract ${imgPath} stdout`, (error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        loader.hide();
        $se('#txt').value = stdout;
      });
})