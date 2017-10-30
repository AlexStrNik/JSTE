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


# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)