let $_$_$_jsi_$_$_$ = require('./parser');
let $_$_$_fs_$_$_$ = require('fs');

function $_$_$_parse_$_$_$ ($_$_$_filePath_$_$_$, $_$_$_options_$_$_$, $_$_$_callback_$_$_$) { // define the template engine
    $_$_$_fs_$_$_$.readFile($_$_$_filePath_$_$_$,'utf-8', function ($_$_$_err_$_$_$, $_$_$_content_$_$_$) {

        //unpack options to scope;
        for(let k in $_$_$_options_$_$_$){
            this[k]=$_$_$_options_$_$_$[k];
        }

        if ($_$_$_err_$_$_$) return callback(new Error($_$_$_err_$_$_$));
        let $_$_$_output_$_$_$='';
        let $_$_$_doc_$_$_$ = {write:function (txt) {
            $_$_$_output_$_$_$+=txt+'';
        }};
        $_$_$_jsi_$_$_$.parse($_$_$_content_$_$_$,$_$_$_doc_$_$_$)();
        return $_$_$_callback_$_$_$(null, $_$_$_output_$_$_$);
    });
}

module.exports.__express = $_$_$_parse_$_$_$;
module.exports.info = {'author':'@AlexStrNik','version':'1.0.0'};