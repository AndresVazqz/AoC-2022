import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var lines = input.split(/\r?\n/);

var x = 1;
var cycle = 1;
var crt: string = '';

lines.forEach(line => {
    var splittedLine = line.split(' ');
    if (splittedLine.length > 1) {
        ++cycle;
        var value = (cycle - 1) % 40
        crt += Math.abs(value - x) <= 1 ? '#' : ' ';
        x += +splittedLine[1];
    }
    ++cycle;
    var value = (cycle - 1) % 40
    crt += Math.abs(value - x) <= 1 ? '#' : ' ';
})
for (let i = 0; i < 6; ++i) {
    console.log(crt.substring(i * 40, i * 40 + 40));
}

