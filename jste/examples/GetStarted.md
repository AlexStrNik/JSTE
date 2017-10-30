# JSTE. How to setup Express app for JSTE?
- The first step is installing of JSTE - ```npm install jste```
- Next step is setup `app.js`
    ```js
    let jsi = require('jste');
    //your imports here
    <...>
    //view engine setup
    app.set('view engine', 'jste');
    //views dir setup
    app.use(express.static(path.join(__dirname, 'site')));
    <...>
    ````
- Express app already setup for JSTE


