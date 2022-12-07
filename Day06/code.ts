import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var buffer = [...input];

var found = false;
var result = 0;
var i = 0;
while (!found) {
    if (buffer[i] != buffer[i + 1] &&
        buffer[i] != buffer[i + 2] &&
        buffer[i] != buffer[i + 3] &&
        buffer[i + 1] != buffer[i + 2] &&
        buffer[i + 1] != buffer[i + 3] &&
        buffer[i + 2] != buffer[i + 3]) {
            result = i + 4;
            found = true;
    }
    ++i;
}

console.log('Result 1: ' + result);