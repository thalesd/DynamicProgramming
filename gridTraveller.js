const gridTraveler = (m, n, memo = {}) => {
    if (m in memo && n in memo[m]) return memo[m][n];
    if (n in memo && m in memo[n]) return memo[n][m];

    if (m === 1 && n === 1) return 1;

    if (m === 0 || n === 0) return 0;

    memo[m] = memo[m] || {};
    memo[m][n] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

    console.log(JSON.stringify(memo));

    return memo[m][n];
}

console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3, 3)); //6
console.log(gridTraveler(18, 18)); //23336062206