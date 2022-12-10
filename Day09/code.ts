import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var lines = input.split(/\r?\n/);

var result = 0;

var map: string[][] = [];
var visited: boolean[][] = [];
for (let i = 0; i < 1000; i++) {
    map[i] = [];
    visited[i] = [];
    for (let j = 0; j < 1000; j++) {
        map[i].push('.');
        visited[i].push(false);
    }
}
var [ti, tj] = [500, 500];
var [hi, hj] = [500, 500];
map[ti][tj] = 's';
visited[ti][tj] = true;

function calcDistance(hi: number, hj: number, ti: number, tj: number): number {
    return Math.abs(Math.hypot(ti - hi, tj - hj));
}

lines.forEach(line => {
        var [dir, num] = line.split(' ');
    var number = +num;
    while (number > 0) {
        if (dir == 'R') {
            map[hi][hj] = '.';
            map[hi][hj + 1] = 'H';
            [hi, hj] = [hi, hj + 1];
            if (calcDistance(hi, hj, ti, tj) >= 2) {
                map[ti][tj] = '.';
                map[hi][hj - 1] = 'T';
                [ti, tj] = [hi, hj - 1];
                visited[ti][tj] = true;
            }
        }
        if (dir == 'U') {
            map[hi][hj] = '.';
            map[hi - 1][hj] = 'H';
            [hi, hj] = [hi - 1, hj];
            if (calcDistance(hi, hj, ti, tj) >= 2) {
                map[ti][tj] = '.';
                map[hi + 1][hj] = 'T';
                [ti, tj] = [hi + 1, hj];
                visited[ti][tj] = true;
            }
        }
        if (dir == 'L') {
            map[hi][hj] = '.';
            map[hi][hj - 1] = 'H';
            [hi, hj] = [hi, hj - 1];
            if (calcDistance(hi, hj, ti, tj) >= 2) {
                map[ti][tj] = '.';
                map[hi][hj + 1] = 'T';
                [ti, tj] = [hi, hj + 1];
                visited[ti][tj] = true;
            }
        }
        if (dir == 'D') {
            map[hi][hj] = '.';
            map[hi + 1][hj] = 'H';
            [hi, hj] = [hi + 1, hj];
            if (calcDistance(hi, hj, ti, tj) >= 2) {
                map[ti][tj] = '.';
                map[hi - 1][hj] = 'T';
                [ti, tj] = [hi - 1, hj];
                visited[ti][tj] = true;
            }
        }
        --number;
    }
})

visited.forEach(x => {
    x.forEach(y => {
        if (y) ++result;
    })
})

console.log('Result 1: ' + result);