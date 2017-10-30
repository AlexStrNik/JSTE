# JavaScriptTemplateEngine - JSTE

JSTE is a fast, modern and usable template engine.

  - Like PHP, but better
  - Use JavaScript
  - Compatible with express


## Some Demos
This code will be translated in :
```php
<?js
for(let i = 0;i<=3;i+=1){
?>
<p>hello <?= i  ?> element antipod is <?= 100-i ?> </p>
<?js
}
?>
```
this html!
```bash
hello 0 element antipod is 100

hello 1 element antipod is 99

hello 2 element antipod is 98

hello 3 element antipod is 97
```

## Documentation
  - `<?=` and `?>` used for inline javascript in html blocks
  - `<?js` and `?>` used for main javasript code
  - Like in php this script run once when page is loading

## Dependecies
  - Nothing here :)
  - Only `fs` used for reading templates

# We hope that you will like it. 
### Created by  [@AlexStrNik](https://telegram.me/alexstrnik)