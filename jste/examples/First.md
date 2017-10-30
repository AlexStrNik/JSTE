# JSTE. First jste template
- JSTE used `.jste` file extension for templates.
- Best syntax folding for this format is `php` or `xhtml`
- Lets start
- Create `main.jste`
     ```xml
    <?js
    //<...>
    ?>
- `<?js` tag opened javascript code block `?>` closed block
- Outside code block located `html` blocks
- `<?=` and `?>` used in html blocks to inject javascript values into html
- Now add this line to `main.jste`
    ```html
    <p><strong><span id='text'><?= 'Hello'+' '+'JSTE!'?></span></strong></p>
    ```
- Run `app.js` and see result in your browser

# See also:
- #### [Setup Express app](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/GetStarted.md)
- #### [Get started](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/First.md)
- #### [Passing variables](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar1.md)
- #### [Passing server variables to page script](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/PassVar2.md)
- #### [Create Mixins](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Mixin.md)
- #### [Catch events](https://github.com/AlexStrNik/JSTE/blob/master/jste/examples/Events1.md)