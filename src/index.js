module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
    n = n.split('').reverse().join('');
    // n = Number(n);
    return n;    
}
