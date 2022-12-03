import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var rounds = input.split(/\r?\n/);
var result = 0;

rounds.forEach(x => {
    var elf = x[0];
    var me = x[2];
    var newMe: string;
    if (me == 'X') {
        // lose
        if (elf == 'A') newMe = 'Z';
        if (elf == 'B') newMe = 'X';
        if (elf == 'C') newMe = 'Y';
    }
    else if (me == 'Y') {
        // draw
        if (elf == 'A') newMe = 'X';
        if (elf == 'B') newMe = 'Y';
        if (elf == 'C') newMe = 'Z';
    }
    else if (me == 'Z') {
        // win
        if (elf == 'A') newMe = 'Y';
        if (elf == 'B') newMe = 'Z';
        if (elf == 'C') newMe = 'X';
    }

    if (newMe == 'X') {
        result += 1;
    }
    else if (newMe == 'Y') {
        result += 2;
    }
    else if (newMe == 'Z') {
        result += 3;
    }
    
    if ((elf == 'A' && newMe =='X') ||
    (elf == 'B' && newMe == 'Y') ||
    (elf == 'C' && newMe == 'Z')) {
        result += 3;
    }
    else if ((elf == 'A' && newMe =='Y') ||
    (elf == 'B' && newMe == 'Z') ||
    (elf == 'C' && newMe == 'X')) {
        result += 6;
    }
})

console.log('Result 2: ' + result)