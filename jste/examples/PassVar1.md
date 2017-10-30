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
    
    <p>hello Express </p>
    ```

# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)