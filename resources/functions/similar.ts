///Measure the similarity
/*Usage*\
$Type: string, string, number
@Type: number
└>Number(similarity)
\*/
export function similar(s: string, t: string, f?: number) {
    f = f || 3;
    var l = s.length > t.length ? s.length : t.length;
    var n = s.length;
    var m = t.length;
    var d = new Array;

    if (n === 0 || m === 0) {
        return String(0);
    };

    function min(a: number, b: number, c: number) {
        return a < b ? (a < c ? a : c) : (b < c ? b : c);
    };

    var i: number, j: number, si: string, tj: string, cost: number;
    for (i = 0; i <= n; i++) {
        d[i] = new Array;
        d[i][0] = i;
    };
    for (j = 0; j <= m; j++) {
        d[0][j] = j;
    };
    for (i = 1; i <= n; i++) {
        si = s.charAt(i - 1);
        for (j = 1; j <= m; j++) {
            tj = t.charAt(j - 1);
            if (si === tj) {
                cost = 0;
            } else {
                cost = 1;
            };
            d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        };
    };
    let res = ((1 - d[n][m] / l) * 100);
    return res.toFixed(f);
};