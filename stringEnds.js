"use strict";
exports.__esModule = true;
function solution(str, ending) {
    var strEnd = str.slice(ending.split("").length - 1);
    if (strEnd == ending) {
        return true;
    }
    return false; // TODO: complete
}
exports.solution = solution;
solution('abc', 'bdc'); // returns true
