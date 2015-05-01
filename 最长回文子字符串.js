function fn1(s) {
    var ret = '';
    for (var i = 0, il = s.length; i < il; i++) {
        var tmp = [];
        tmp[i] = s[i];
        for (var indexLeft = i - 1, indexRight = i + 1;
            indexLeft >= 0 && indexRight < il;
            indexLeft--, indexRight++
        ) {
            if (s[indexLeft] !== s[indexRight]) break;
            tmp[indexLeft] = s[indexLeft];
            tmp[indexRight] = s[indexRight];
        }
        tmp = tmp.join('');
        if (tmp.length > ret.length) {
            ret = tmp;
        }
    }

    return ret;
}

function fn2(s) {
    var start = 0, length = 0;
    for (var i = 0, il = s.length; i < il; i++) {
        for (var indexLeft = i - 1, indexRight = i + 1;
            indexLeft >= 0 && indexRight < il;
            indexLeft--, indexRight++
        ) {
            if (s[indexLeft] !== s[indexRight]) break;
        }

        var tmpLength = indexRight - indexLeft - 1;
        if (tmpLength > length) {
            start = indexLeft + 1;
            length = tmpLength;
        }
    }

    return s.substr(start, length);
}

var str = 'dbakokabbbbbbb';

console.time('spend1');
console.log(fn1(str));
console.timeEnd('spend1');

console.time('spend2');
console.log(fn2(str));
console.timeEnd('spend2');
