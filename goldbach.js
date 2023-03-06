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
  * @param number the number we're going to process
  */
  set_max_number(number){
    this.__max_number = number;
  }

  /**
   * @property {Function} run_process executes the goldbach formulas in the
   *           class
   */
  run_process(){
    console.log('Call other goldbach methods against ' + this.__max_number +
        ' and output the result'
    );
  }

  __get_primes(n){
    // reference this.__max_number
    var sieve = [],
    i, j, primes = [];
    for (i = 2; i <= n; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= n; j += i) {
          sieve[j] = true;

          }
      }
    }
return primes;
  }

  __goldbach_formula(){
    // reference this.__max_number
    var count = 0
    var primes = __get_primes(this.__max_number);
    var tupples = new Array();
    var len = primes.length;
    for (i = 0; i < len; i++) {
        for (j = len - 1; j >= i; j--) {
            if (primes[i] + primes[j] == n) {
                tupples.push(primes[i] + " + " + primes[j]);
                count += 1
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
