# JSTE. How to pass variables from server to page?

- Create `main.js` router
    ```js
    let express = require('express');
    let router = express.Router();
    
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('main', { title: 'JSTE' }); //pass variables to options
    });
    
    module.exports = router;
    ```
- In this example we want to pass title name to main page.
- Now create the `main.jste`
    ```php
    <?js
    for(let i = 0;i<=3;i+=1){
    ?>
    <p>hello <?= title ?> </p>
    <?js
    }
    ?>
    ```
- And the result `main.html`
    ```html
    <p>hello Express </p>
    
    <p>hello Express </p>
    
    <p>hello Express </p>
    ```

