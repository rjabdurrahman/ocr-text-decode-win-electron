const { exec } = require('child_process');

function $(seletor) {
    return document.querySelector(seletor);
}

function eventBinder(selector, action, f) {
    $(selector).addEventListener(action, f);
}

eventBinder('#convert', 'click', function() {
    let imgPath = $('#img').files[0].path;
    exec(`tesseract ${imgPath} stdout`, (error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        $('#txt').value = stdout;
      });
})