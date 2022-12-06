import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

const [initial, operations] = input.split(/\r?\n\r?\n/);

var stacks = initial.split('\n');
stacks.pop();

const movements = operations.split('\n');

var stacksTreated : string[][] = [];
stacks.forEach((s, index) => {
    var cleanArray = s.match(/.{1,4}/g)?.map(x => x == '   ' ? x = ' ' : x = x[1]);
    if (cleanArray) stacksTreated[index] = cleanArray;
})

var boxesStacks: string[][] = new Array(stacksTreated[0].length).fill([]);

stacksTreated.forEach(x => {
    x.forEach((item, index) => {
        if (item != ' ') boxesStacks[index] = boxesStacks[index].concat([...item]);
    })
})

boxesStacks.map(x => x.reverse())

movements.forEach(m => {
    var splitted = m.split(' ');
    var quantity = +splitted[1];
    const from = +splitted[3];
    const to = +splitted[5];

    while (quantity > 0) {    
        if (boxesStacks[from - 1].length > 0) boxesStacks[to - 1].push(...boxesStacks[from - 1].pop()!);
        --quantity;
    }
})

var result: string [] = [];
boxesStacks.forEach(x => {
    result.push(x.pop()!);
});

console.log('Result 1: ' + result);