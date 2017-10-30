# JSTE. How to get server variables from page script through JSTE?

- Create `main.js` router
    ```js
    let express = require('express');
    let router = express.Router();
    
    router.get('/', function(req, res, next) {
        res.render('main', { 
        'vars':['Hello JSTE','Hello Express','Hello Node.js']
        }); //pass variables to options
    });
    module.exports = router;
    ```
- In this example we want to display random words on main page.
- Now create the `main.jste` 
    ```html
    <p><strong><span id='text'>...</span></strong></p>
    <script>
    var words = <?=JSON.stringify(vars)?>;//stringify object to insert in code
    var index = 0;
    
    function rotate() {
        document.getElementById('text').innerHTML 
            = words[(index++)%(words.length)];
    }
    
    setInterval(rotate, 2000);
    </script>
    ```
- And the result `main.html`
    ```html
    
    <p><strong><span id='text'>...</span></strong></p>
    <script>
    var words = ["Hello JSTE","Hello Express","Hello Node.js"];
    var index = 0;
    
    function rotate() {
        document.getElementById('text').innerHTML = words[(index++)%(words.length)];
    }
    
    setInterval(rotate, 2000);
    </script>
    ```
    
# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)