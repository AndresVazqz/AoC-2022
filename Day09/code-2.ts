import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var lines = input.split(/\r?\n/);

var visited: [number,number][] = [];
var nodes: [number,number][] = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

var tail = nodes.length - 1;
visited.push(nodes[tail]);

function calcDistance(hi: number, hj: number, ti: number, tj: number): number {
    return Math.abs(Math.hypot(ti - hi, tj - hj));
}

lines.forEach(line => {
    var [dir, num] = line.split(' ');
    var number = +num;
    while (number > 0) {
        if(dir == 'R') nodes[0] = [nodes[0][0], nodes[0][1] + 1];
        else if(dir == 'L') nodes[0] = [nodes[0][0], nodes[0][1] - 1];
        else if(dir == 'U') nodes[0] = [nodes[0][0] + 1, nodes[0][1]];
        else if(dir == 'D') nodes[0] = [nodes[0][0] - 1, nodes[0][1]];
        
        var i = 1;
        while (i < nodes.length) {
            if(calcDistance(nodes[i][0], nodes[i][1], nodes[i - 1][0], nodes[i - 1][1]) >= 2) {
                if(nodes[i - 1][0] != nodes[i][0]) {
                    nodes[i] = [nodes[i][0] + (nodes[i - 1][0] - nodes[i][0]) / Math.abs(nodes[i - 1][0] - nodes[i][0]), nodes[i][1]];
                }
                if(nodes[i - 1][1] != nodes[i][1]) {
                    nodes[i] = [nodes[i][0], nodes[i][1] + (nodes[i - 1][1] - nodes[i][1]) / Math.abs(nodes[i - 1][1] - nodes[i][1])];
                }
                if(i == tail && !visited.some(x => x[0] == nodes[i][0] && x[1] == nodes[i][1])) visited.push(nodes[i]);
            }
            ++i;
        }
        --number;
    }
})

console.log('Result 2: ' + visited.length);