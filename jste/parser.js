const fs = require('fs');

const jsAll = /<\?js\s+([\S\s]*?)\s+\?>/mg;
const jsInject = /<\?=\s*([\S\s]*?)\s*\?>/mg;

function read(path) {
    return fs.readFileSync(path,'utf-8');
}

function evalute(noncode) {
    let noncodes = noncode.replace(jsInject,'$%&').split('$%&').filter(function(i){return i});
    let evals = noncode.match(jsInject);
    let evs = [];
    let evrs = [];
    let fnoncode = '';
    for(c in noncodes){
        fnoncode+=noncodes[c];
        if(c < noncodes.length-1){
            fnoncode += "$_$_$_"+evals[c].replace('<?=','').replace('?>','')+"_$_$_$";
            evs.push("$_$_$_"+evals[c].replace('<?=','').replace('?>','')+"_$_$_$");
            evrs.push(""+evals[c].replace('<?=','').replace('?>','')+"");
        }
    }
    return [fnoncode,evrs,evs];
}

function parse(text,document) {
    documen = {
        write:function (txt, arn, args) {
            for (an in arn){
                txt = txt.replace(arn[an],args[an]);
            }
            document.write(txt);
    }};
    let codes = text.match(jsAll);
    let noncode = text.replace(jsAll,'$%&');
    let fcode = '';
    let $_$_$_fcs_$_$_$ = {};

    let prevdata = noncode.shift();
    let qrt = evalute(prevdata);
    fcode+="$_$_$_fcs_$_$_$['$_$_$_code"+"prev"+"_$_$_$'](["+qrt[1].join(',')+"]);\n";
    $_$_$_fcs_$_$_$["$_$_$_code"+"prev"+"_$_$_$"]=function(txt,arn){return function(args){documen.write(txt,arn,args)}};
    $_$_$_fcs_$_$_$["$_$_$_code"+"prev"+"_$_$_$"]=$_$_$_fcs_$_$_$["$_$_$_code"+"prev"+"_$_$_$"](qrt[0],qrt[2]);

    for(c in codes){
        fcode+=codes[c].replace('<?js','').replace('?>','');
        if(c < codes.length-1){
            let qrt = evalute(noncode.shift());
            fcode+="$_$_$_fcs_$_$_$['$_$_$_code"+c+"_$_$_$'](["+qrt[1].join(',')+"]);\n";
            $_$_$_fcs_$_$_$["$_$_$_code"+c+"_$_$_$"]=function(txt,arn){return function(args){documen.write(txt,arn,args)}};
            $_$_$_fcs_$_$_$["$_$_$_code"+c+"_$_$_$"]=$_$_$_fcs_$_$_$["$_$_$_code"+c+"_$_$_$"](qrt[0],qrt[2]);
        }
    }
    if(noncode.length>0){
        let postdata = noncode.join('\n');
        let qrt = evalute(postdata);
        fcode+="$_$_$_fcs_$_$_$['$_$_$_code"+"post"+"_$_$_$'](["+qrt[1].join(',')+"]);\n";
        $_$_$_fcs_$_$_$["$_$_$_code"+"post"+"_$_$_$"]=function(txt,arn){return function(args){documen.write(txt,arn,args)}};
        $_$_$_fcs_$_$_$["$_$_$_code"+"post"+"_$_$_$"]=$_$_$_fcs_$_$_$["$_$_$_code"+"post"+"_$_$_$"](qrt[0],qrt[2]);
    }
    return function () {
        eval(fcode);
    }
}

//dcl = '';
//doc = {write:(text)=>{dcl+=text;}};
//parse(read('./main.jsi'),doc)();
//fs.writeFileSync('main.html',dcl);

module.exports.read=read;
module.exports.parse=parse;