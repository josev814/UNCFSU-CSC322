/**
 * The Goldbach conjecture
 */
class goldbachFormulas {
  /**
   * __cli_args holds the supported arguments passed
   * @type {{ arg: string, value: string }}
   * @private
   */
  __max_number;

  /**
  * @property {Function} set_max_number sets the number we're looking to find
  *           all additions for
  * @param {number} number the number we're going to process
  */
  set_max_number(number) {
    this.__max_number = number;
  }

  /**
   * @property {Function} run_process executes the goldbach formulas in the
   *           class
   */
  run_process() {
    console.log('Call other goldbach methods against ' + this.__max_number +
        ' and output the result');
    this.__goldbach_formula();
  }

  /**
   * @property {Function} __get_primes executes the goldbach formulas in the
   *           class
   *  @param {int} n is prime reference
   *  @return {int} primes
   */
  __get_primes(n) {
    // reference this.__max_number
    const x = [];
    i, j, primes = [];
    for (i = 2; i <= n; ++i) {
      if (!x[i]) {
        primes.push(i);
        for (j = i << 1; j <= n; j += i) {
          x[j] = true;
        }
      }
    }
    return primes;
  }


  /**
* @property {Function} __goldbach_formula executes the goldbach formulas in the
*           class
*
*
*/
  __goldbach_formula() {
    // reference this.__max_number
    count;
    let count = 0;
    const primes = this.__get_primes(this.__max_number);
    const tupples = [];
    const len = primes.length;

    for (i = 0; i < len; i++) {
      for (j = len - 1; j >= i; j--) {
        if (primes[i] + primes[j] == n) {
          tupples.push(primes[i] + ' + ' + primes[j]);
          count ++;
          break;
        }
      }
      if (primes[i] + primes[j] === n) {
        break;
      }
    }
  }
}

module.exports = goldbachFormulas;
