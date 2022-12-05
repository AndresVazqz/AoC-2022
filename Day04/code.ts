import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var elfs = input.split(/\r?\n/);

var result1 = 0;
var result2 = 0;

elfs.forEach(x => {
    var intervals = x.split(',');
    var a = intervals[0].split('-');
    var b = intervals[1].split('-');

    if ((+a[0] <= +b[0] && +a[1] >= +b[1]) ||
        (+a[0] >= +b[0] && +a[1] <= +b[1])) {
        ++result1;
    }
    if (+a[1] >= +b[0] && +b[1] >= +a[0]) ++result2;
})

console.log('Result 1: ' + result1);
console.log('Result 2: ' + result2);
