 function analyzeArray(arr) {
    const n = arr.length;
    let sortedCount = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] >= arr[i - 1]) sortedCount++;
    }
    const nearlySorted = (sortedCount / (n - 1)) > 0.8; // 80% in order

    const uniqueCount = new Set(arr).size;
    const duplicateCount = n - uniqueCount;
    const duplicateRatio = n > 0 ? duplicateCount / n : 0;

    const mean = arr.reduce((a, b) => a + b, 0) / n;
    const variance = arr.reduce((a, b) => a + (b - mean) ** 2, 0) / n;

    return {
        size: n,
        nearlySorted: nearlySorted,
        duplicateCount: duplicateCount,
        duplicateRatio: duplicateRatio,
        variance: variance
    };
}
