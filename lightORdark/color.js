var fs = require('fs');

function lightOdark(){
    var r = process.argv[2];
    var g = process.argv[3];
    var b = process.argv[4];
    var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
    if(luminosity>155){
        console.log('This is a light color!');
    }else{
        console.log('This is a dark color!');
    }
    
}

lightOdark();