function dif(a, b, _a = 'a', _b = 'b') {
    let c = {};
    let d = Object.assign({}, b);    
    for (let k in a) {
        if (b[k] !== undefined) {
            if (typeof a[k] == 'object') {
                c[k] = dif(a[k], b[k], _a, _b);
            } else {
                if (a[k] !== b[k]) {
                    c[k] = {
                        [_a]: a[k],
                        [_b]: b[k]
                    };
                }
            }
            delete d[k];
        } else {
            c[k] = {
                [_a]: a[k]
            };
        }
    }
    for (let k in d) {
        c[k] = {
            [_b]: d[k]
        };
    }
    return c;
}