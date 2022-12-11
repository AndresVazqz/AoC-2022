import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var lines = input.split(/\r?\n/);

var result = 0;
var x = 1;
var cycle = 1;

lines.forEach(line => {
    var splittedLine = line.split(' ');
    ++cycle;
    if (splittedLine.length > 1) {
        if (cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) {
            result += cycle * x;
        }
        ++cycle
        x += +splittedLine[1];
    }

    if (cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) {
        result += cycle * x;
    }
})

console.log('Result 1: ' + result);