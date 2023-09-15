function factorial(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) {
        x *= i;
    }
    return x;
}

export function nk(n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k));
}