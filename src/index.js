let $ = require('jquery'); // подключение jquery

let str = require('./constant'); // подключение файла constant

let App = function() {
    console.log(str);
    $('body').html(str);
};

let app = new App();
