var fs = require('fs');
var myNumber = 1;

function addOne(){
    fs.readFile('number.txt', function doneReading(err,fileContents){
        var lines = fileContents.toString().split('\n').length -1;
        console.log(lines);
    })
}

addOne();




