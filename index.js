function isPerfectSquare(x) {
    const s = parseInt(Math.sqrt(x));
  
    return (s * s == x);
  }

  function isFibonacci(n) {
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perfect square
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  }


module.exports = isFibonacci
module.exports = isPerfectSquare