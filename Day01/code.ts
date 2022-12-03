import { readFileSync } from 'fs';


const input: string = readFileSync('input.txt','utf8');

var elfs = input.split(/\r?\n\r?\n/);
var result: number[] = [];

elfs.forEach(x => {
    var items = x.split(/\r?\n/);
    var sum = items.reduce((sum, current) => sum + (+current), 0);
    result.push(sum);
})

const max1 = Math.max(...result);
var pos1 = result.indexOf(max1);
result.splice(pos1, 1);
const max2 = Math.max(...result);
var pos2 = result.indexOf(max2);
result.splice(pos2, 1);
const max3 = Math.max(...result);


console.log('Result 1: ' + max1);
console.log('Result 2: ' + (max1 + max2 + max3));