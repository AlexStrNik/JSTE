# JSTE. How to create mixins?
- Create `main.jste`
- In jste function can be used like mixins
- Create function `Greeting`
    ```php
    <?js
    function Greeting(name){
        ?>
        <p>Hello <?= name ?> </p>
        <?js
    }
    ?>
    ```
- Now we have mixin
- Add this to `main.jste`
    ```php
    <?js
    let names = ['John','Bob','JSTE'];
    for(let ii = 0; ii<3; ii++){
        Greeting(names[ii]);
    }
    ?>
    ```
- And the result 
    ```html
        <p>Hello John </p>
    
        <p>Hello Bob </p>
    
        <p>Hello JSTE </p>
    ```
# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)