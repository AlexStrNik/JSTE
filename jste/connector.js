'use strict';
let $q = 'NULL';
try{
   $q = require('fs');
}
catch (e){
    console.log(e);
}
if($q==='NULL'){
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    document.head.appendChild(script);
}
let $JSTEC = {};

function $on(event,func) {
    this.router.post('/'+event+'_$_$_$',function(req,res,next){
        let params = req.params || {};
        let body = req.body || {};
        let query = req.query || {};
        func(body || params || query);
    })
}

function $call(event, args) {
    $.post('/'+event+'_$_$_$',args);
}

$JSTEC.on=$on;
$JSTEC.call=$call;
try{
    module.exports.$setup=function (router) {
        $JSTEC.router=router;
        return $JSTEC;
    };
}
catch(e){

}