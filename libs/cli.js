/**
 *  CliProcess class to get args and show usage
 **/
class CliProcess {
  /**
   * __cli_args holds the supported arguments passed
   * @type {{ arg: string, value: string }}
   * @private
   */
  __cli_args = {};
  /**
   * usageLines These are the lines that are output when we need to show the cli
   *            usage
   * @type {string[]}
   */
  usageLines = [
    'To use this file use node with the following arguments:',
    '--data-file     The name of the file to ingest and process',
    '--output-file   This is the name of the file that you\'d like to save ' +
    'the output as',
  ];

  /**
   * @property {Function} constructor loads the cli flags when this class is
   *           invoked
   */
  constructor() {
    this.__get_cli_flags();
  }

  /**
   * @property {Function} get_cli_args returns the cli args that we've captured
   * @return {{arg: string, value: string}}
   */
  get_cli_args() {
    return this.__cli_args;
  }

  /**
   * @private
   * @property {Function} __get_cli_flags iterates over the cli arguments in
   *           order to set the flags passed
   * @return {void}
   */
  __get_cli_flags() {
    let skipNext = false;
    process.argv.forEach((element) => {
      if (skipNext) {
        return;
      }
      if (element.startsWith('--')) {
        switch (element) {
          case '--data-file':
            this.__cli_args['data_file'] = this.__get_cli_arg(element);
            skipNext = true;
            break;
        }
      }
    });
  }

  /**
   * @private
   * @property {Function} __get_cli_arg iterates over the cli arguments in
   *            order to set the flags passed
   * @param {string} flag The name of the flag to retrieve
   * @return {string} returns the value located at the index after the
   *         specified flag
   */
  __get_cli_arg(flag) {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
  }

  /**
   * @property {Function} show_usage outputs to the console how to use this app
   * @return {void}
   */
  show_usage() {
    this.usageLines.forEach((usageLine) => {
      console.log(usageLine);
    });
    console.log(); // extra line to make for a cleaner output
  }

  /**
   * @property {Function} check_args verifies that we have the needed args for
   *           the program to function.  If we don't, call usage and then exit.
   * @return {void}
   */
  check_args() {
    if (!('data_file' in this.__cli_args)) {
      this.show_usage();
      process.exit();
    }
  }
}

module.exports = CliProcess;
