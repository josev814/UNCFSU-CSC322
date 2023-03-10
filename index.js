/**
 * Description of this project:
 * You  need  to  implement  a  program  to  demonstrate  the  Goldbach
 * conjecture.  The  German  mathematician  Christian Goldbach (1690-1764)
 * conjectured that every even number greater than two can be represented by a
 * sum of two prime numbers.  This  conjecture  has  never  been  proved  or
 * disproved – although  it  has  been  verified  for  values  up  to
 * 400,000,000,000,000. As such,  you  may  assume  it  is  true for  the  cases
 * considered  in  this project.  The  goal  of  the program you are going to
 * implement is to find all unique ways to represent a given even number as a
 * sum of two prime numbers. A prime number is an integer greater than one that
 * is evenly divisible by only itself and 1. The first few prime numbers are
 * 2, 3, 5, 7, 11, .... There may be several ways to represent a given even
 * number as a sum of primes.
 * For example, the even number 26 may be represented as 3 + 23, 7 + 19, or
 * 13 + 13.
 * The output of the program should contain a summary line, telling how many
 * Goldbach pairs can be found for a  number. It is then followed by a list of
 * lines, in the form of n = p + q, where n is the input to the program, and p
 * and q are the two prime values, with p ≤ q. The lines should be sorted in
 * ascending order of p (or descending order of q).
 */


/* Start  set needed modules */
const fs = require('fs');

// import custom modules
const CliProcess = require('./libs/cli');
const Goldbach = require('./libs/goldbach');

/* End  set needed modules */

/**
 * @property {Function} main The portion of the program that's the starting
 *           point
 */
function main() {
  const cli = new CliProcess();
  const cliArgs = cli.get_cli_args();

  cli.check_args();

  // Read the input file if it exists
  fs.exists(cliArgs['data_file'], (exists) => {
    if (exists) {
      const gbf = new Goldbach(); // instantiate the goldbach class

      // reading the file with without a lock file async readfile
      fs.readFile(cliArgs['data_file'], 'utf8', function(error, data) {
        if(error){
          throw error;
        }
        data.split('\n').forEach((processNum) => {
          // Run goldbach here
          let max_int = Number(processNum.trim())
          gbf.set_max_number(max_int)
          let tupples = gbf.run_process();
          console.log('We found %i Goldbach pair(s) for %i', tupples.length, max_int);
          let index = 0;
          while (index < tupples.length){
            console.log('%i = %i + %i', max_int, tupples[0], tupples[1]);
            index++;
          }
        });
      });
    }
  });
}

/**
 * check if the module being called is main
 * if main is called than invoke our main function
 */
if (require.main === module) {
  main();
}
