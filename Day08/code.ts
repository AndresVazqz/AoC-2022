import { readFileSync } from 'fs';

const input: string = readFileSync('input.txt','utf8');

var forest = input.split(/\r?\n/);

var result = 0;
var result2 = 0;

forest.forEach((x, i) => {
    var line = [...x];
    line.forEach((tree, j) => {
        var visible = false;
        if (i == 0 || j == 0 || i == forest[0].length - 1 || j == forest.length - 1) {
            visible = true;
            ++result;
        }
        // check top
        var indexTop = i - 1;
        var visibleTop = true;
        var seenTreesTop = 0
        while (visibleTop && indexTop >= 0) {
            if (+tree <= +forest[indexTop][j]) {
                ++seenTreesTop;
                visibleTop = false
            }
            else ++seenTreesTop;
            if (!visible && indexTop == 0 && visibleTop) {
                visible = true;
                ++result;
            }
            --indexTop;
        }
        // check bottom
        var indexBottom = i + 1;
        var visibleBottom = true;        
        var seenTreesBottom = 0
        while (visibleBottom && indexBottom <= forest[0].length - 1) {
            if (+tree <= +forest[indexBottom][j]) {
                ++seenTreesBottom;
                visibleBottom = false;
            }
            else ++seenTreesBottom;
            if (!visible && indexBottom == forest[0].length - 1 && visibleBottom) {
                visible = true;
                ++result;
            }
            ++indexBottom;
        }
        // check left
        var indexLeft = j - 1;
        var visibleLeft = true;
        var seenTreesLeft = 0
        while (visibleLeft && indexLeft >= 0) {
            if (+tree <= +forest[i][indexLeft]) {
                ++seenTreesLeft;
                visibleLeft = false;
            }
            else ++seenTreesLeft
            if (!visible && indexLeft == 0 && visibleLeft) {
                visible = true;
                ++result;
            }
            --indexLeft;
        }
        // check right
        var indexRight = j + 1;
        var visibleRight = true;        
        var seenTreesRight = 0
        while (visibleRight && indexRight <= forest.length - 1) {
            if (+tree <= +forest[i][indexRight]) {
                ++seenTreesRight;
                visibleRight = false;
            }
            else ++seenTreesRight;
            if (!visible && indexRight == forest.length - 1 && visibleRight) {
                visible = true;
                ++result;
            }
            ++indexRight;
        }
        var scenicScore = seenTreesTop * seenTreesBottom * seenTreesLeft * seenTreesRight;
        if (scenicScore > result2) result2 = scenicScore;
    })
})

console.log('Result 1: ' + result);
console.log('Result 2: ' + result2);