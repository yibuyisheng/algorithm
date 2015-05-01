function fn(s) {
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

var str = 'dbakokabbbbbbb';

console.time('spend');
console.log(fn(str));
console.timeEnd('spend');
