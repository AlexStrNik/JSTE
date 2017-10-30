'use strict';
let $q = 'NULL';
try{
   $q = require('jquery');
}
catch (e){

}
if($q==='NULL'){
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = './web/jquery.js';
    document.head.appendChild(script);
}
else{
    let $ = $q;
}
let $JSTEC = {};

function $on(event,func) {
    this.router.post('/'+event,function(req,res,next){
        let params = req.params || {};
        let body = req.body || {};
        let query = req.query || {};
        func(body || params || query);
    })
}

function $call(event, args) {
    $.post('/'+event,args);
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