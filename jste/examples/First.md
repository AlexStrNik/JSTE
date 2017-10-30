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
