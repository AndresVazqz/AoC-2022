import { readFileSync } from 'fs';


const input: string = readFileSync('input.txt','utf8');
    
const alphaMayus = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetMayus = alphaMayus.map((x) => String.fromCharCode(x));

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

var elfs = input.split(/\r?\n/);
var result: string[] = [];

var sum = 0;

for (let i = 0; i < elfs.length; i += 3) {
    var found = false;
        var first = [...elfs[i]];
        var second = [...elfs[i + 1]];
        var third = [...elfs[i + 2]];

    var j = 0;
    while (!found) {
        if (second.includes(first[j]) && third.includes(first[j])) {
            result.push(first[j]);
            found = true;
            if (first[j] >= 'a' &&  first[j] <= 'z') {
                sum += alphabet.indexOf(first[j]) +1
            }
            else if (first[j] >= 'A' &&  first[j] <= 'Z') {
                sum += alphabetMayus.indexOf(first[j]) +27
            }
        }
        ++j;
    }
}

console.log('Result 2: ' + sum);
