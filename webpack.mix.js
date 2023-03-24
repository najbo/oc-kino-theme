let mix = require('laravel-mix');

mix.js("./assets/src/js/app.js", "./assets/dist/js")
    .postCss("./assets/src/css/style.css", "./assets/dist/css", [
        require("tailwindcss"),
    ])
  .disableSuccessNotifications();