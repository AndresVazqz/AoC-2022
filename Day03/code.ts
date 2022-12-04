import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');
    
const alphaMayus = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetMayus = alphaMayus.map((x) => String.fromCharCode(x));

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

var elfs = input.split(/\r?\n/);

var sum = 0;

elfs.forEach(x => {
    const half = Math.ceil(x.length / 2);    

    var firstHalf = x.slice(0, half);
    var secondHalf = x.slice(half);

    var first = [...firstHalf]
    var second = [...secondHalf]

    var found = false;
    var i = 0;
    while (!found) {
        if (second.includes(first[i])) {

            if (first[i] >= 'a' &&  first[i] <= 'z') {
                sum += alphabet.indexOf(first[i]) +1
            }
            else if (first[i] >= 'A' &&  first[i] <= 'Z') {
                sum += alphabetMayus.indexOf(first[i]) +27
            }
            found = true;
        }
        ++i;
    }
})

console.log('Result 1: ' + sum);
