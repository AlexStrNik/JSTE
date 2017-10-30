# JavaScriptTemplateEngine - JSTE

JSTE is a fast, modern and usable template engine.

  - Like PHP, but better
  - Use JavaScript
  - Compatible with express


## Demo
- This code will be rendering as :
    ```php
    <?js
    for(let i = 0;i<=3;i+=1){
    ?>
    <p>hello <?= i  ?> element antipod is <?= 100-i ?> </p>
    <?js
    }
    ?>
    ```
- this page!
    ```bash
    hello 0 element antipod is 100
    
    hello 1 element antipod is 99
    
    hello 2 element antipod is 98
    
    hello 3 element antipod is 97
    ```
## Try it here
- [JSTE Playground](https://alexstrnik.github.io/JSTE/jste/playground)
## Documentation
  - `<?=` and `?>` used for inline javascript in html blocks
  - `<?js` and `?>` used for main javasript code
  - Like in php this script run once when page is loading

## Tutorials & Examples
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)

## Dependecies
  - Only `fs` used for reading templates

## Changelog
-  `v1.0.1` published to npm
-  `v1.0.2` fixed bugs
-  `v1.0.3` updated Readme
-  `v1.0.4` added tutorials and examples
-  `v1.0.5-6` added playground and tutorials. Fixed bugs
-  `v1.0.7-beta` added connector class. Fixed bugs. Updated playground
## Issues
- Find a bug?
- Write me on [GitHub](https://github.com/AlexStrNik/JSTE/issues)

## TODO:
- ~~Connection class between page script, template engine, and express app~~
- ~~Add playground~~
- Add suntax plugins for InteliJ and Atom

# We hope that you will like it. 
### Created by  [@AlexStrNik](https://telegram.me/alexstrnik)