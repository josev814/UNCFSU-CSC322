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

  __get_primes(){
    // reference this.__max_number
  }

  __goldbach_formula(){
    // reference this.__max_number
  }

}

module.exports = goldbachFormulas;
