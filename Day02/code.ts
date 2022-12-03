import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var rounds = input.split(/\r?\n/);
var result = 0;

rounds.forEach(x => {
    var elf = x[0];
    var me = x[2];
    if (me == 'X') {
        result += 1;
    }
    else if (me == 'Y') {
        result += 2;
    }
    else if (me == 'Z') {
        result += 3;
    }
    if ((elf == 'A' && me =='X') ||
    (elf == 'B' && me == 'Y') ||
    (elf == 'C' && me == 'Z')) {
        result += 3;
    }
    else if ((elf == 'A' && me =='Y') ||
    (elf == 'B' && me == 'Z') ||
    (elf == 'C' && me == 'X')) {
        result += 6;
    }
})

console.log('Result 1: ' + result)