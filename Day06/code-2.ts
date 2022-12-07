import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var buffer = [...input];

var found = false;
var result = 0;
var i = 0;
while (!found) {
    const slicedArray = buffer.slice(0, 14);
 
    let s = new Set();
    slicedArray.forEach(x => s.add(x))
 
    if (s.size == slicedArray.length) {
        found = true;
        result = i + 14
    }
    buffer.shift();
    ++i;
}

console.log('Result 2: ' + result);