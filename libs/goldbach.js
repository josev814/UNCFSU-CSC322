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
   * @return {function} goldbach formula
   */
  run_process() {
    return this.__goldbach_formula();
  }

  /**
   * @property {Function} __get_primes executes the goldbach formulas in the
   *           class
   * 
   *  @return {int} primes
   */
  __get_primes() {
    // reference this.__max_number
    const x = [];
    let i = 0;
    let j = 0;
    const primes = [];
    for (i = 2; i <= this.__max_number; ++i) {
      if (!x[i]) {
        primes.push(i);
        for (j = i << 1; j <= this.__max_number; j += i) {
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
*@return {tupple} return tupples
*/
  __goldbach_formula() {
    // reference this.__max_number

    const primes = this.__get_primes();
    //  console.log(primes)
    const tupples = [];
    const len = primes.length;
    //  console.log(len);
    for (let i = 0; i < len; i++) {
      for (let j = len - 1; j >= i; j--) {
        //  console.log(j)
        // console.log(primes[i] + ": " + primes[j]);
        if (primes[i] + primes[j] == this.__max_number) {
          tupples.push([primes[i],primes[j]]);
          //  console.log(tupples);
          //  count++;
          //  console.log(j)
        }
      }
    }

    return tupples;
  }
}

module.exports = goldbachFormulas;
