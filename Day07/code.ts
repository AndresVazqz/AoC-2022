import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var lines = input.split(/\r?\n/);

interface folder {
    name: string;
    size: number;
}

var result = 0;
var result2 = 0;
var filesystem: folder[] = [];
var path: folder[] = []

var i = 0;
while (i < lines.length) {
    var command = lines[i].split(' ');
    if (command[0] == '$') {
        if (command[1] == 'cd') {
            if (command[2] == '/') {
                var folder = {name: command[2], folders: [], items: [], size: 0};
                filesystem.push(folder);
                path.push(folder);
            }
            else if (command[2] == '..') {
                path.pop();
            }
            else {
                var folder2 = {name: command[2], folders: [], items: [], size: 0};
                filesystem.push(folder2);
                path.push(folder2);
            }
        }
    }
    else {
        if (command[0] != 'dir') {
            path.forEach(x => {
                filesystem[filesystem.indexOf(x)].size += +command[0];
            })
        }
    }
    ++i;
}

filesystem.forEach(x => {
    if (x.size <= 100000) result += x.size;
})

const totalSpace = filesystem[0].size;
const currentUnusedSpace = 70000000 - totalSpace;
const spaceToDelete = 30000000 - currentUnusedSpace;
const sortedFileSystem = Object.values(filesystem).sort((a, b) => a.size - b.size);

var i = 0;
var found = false;
while (!found) {
    if (sortedFileSystem[i].size > spaceToDelete) {
        result2 = sortedFileSystem[i].size;
        found = true;
    }
    ++i;
}

console.log('Result 1: ' + result);
console.log('Result 2: ' + result2);