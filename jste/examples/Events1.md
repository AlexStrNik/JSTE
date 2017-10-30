# JSTE. How to catch events in router from page using JSTE?
- Create `main.js` router
    ```js
    let express = require('express');
    let router = express.Router();
    $JSTEC = require('./jste/connector').$setup(router); //setup handler for router
    
    router.use(express.json());
    router.use(express.urlencoded({ extended: false }));
    
    $JSTEC.on('hello',function e(args) {//add event handler
        console.log('hello '+args['name']);
    });
    
    router.get('/', function(req, res, next) {
        res.render('main'); //pass variables to options
    });
    
    module.exports = router;
    ```
- Create `main.jste`
    ```php
    <button id = "run">Run</button>
    <input id = "name" type="text"/>
    <script src = "../jste/connector.js"></script>
    <script>
    document.getElementById('run').onclick = function (e) {
        'use strict';
        $JSTEC.call('main/hello',{'name':document.getElementById('name').value});
        //call event with named arguments
    }
    </script>
    ```
- JSTE lib already contains `jquery.min.js` for web 

# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)