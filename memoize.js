const fibonacci_recursive = (n, memo = {}) => {
	if (memo[n]) return memo[n];
	if (n <= 2) {
		return 1;
	}

	const result = fibonacci_recursive(n - 1, memo) + fibonacci_recursive(n - 2, memo);
	memo[n] = result;
	return result;
};

const fibonacci_tabulation = (n) => {
	const memo = [ 0, 1, 1 ];
	let result;

	for (let i = 3; i <= n; i++) {
		result = memo[i - 1] + memo[i - 2];
		memo[i] = result;
  }
  
  return result;
};

module.exports = { fibonacci_recursive, fibonacci_tabulation };
