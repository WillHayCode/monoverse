import { Lipwig } from './app/Lipwig';
const commandLineOptions = [
  {
    name: 'config',
    alias: 'c',
    type: String,
    description: 'The location of your Lipwig configuration file (default: ./lipwig.config.js)'
  },
  {
    name: 'port',
    alias: 'p',
    type: Number,
    description: 'The port on which the Lipwig server should run'
  },
]

let options;
try {
  options = require('command-line-args')(commandLineOptions);
} catch {
    const usageOptions = [
      /**{
      header: 'Load',
      content: 'A simple example demonstrating typical usage.'
    },*/
    {
      header: 'Options',
      optionList: commandLineOptions
    }/*,
    {
      content: 'Project home: {underline https://github.com/me/example}'
    }*/]
  const usage = require('command-line-usage')(usageOptions);
  console.log(usage);
  process.exit();
}

let configFileLocation = process.cwd() + '/lipwig.config.js';

//configFileLocation = options.config ? options.config : './lipwig.config.js';
// TODO: Args parsing here, keep the core classes clean
let config;
try {
  config = require(configFileLocation);
} catch {
  config = {};
}
console.log(config);
process.title = 'lipwig';
process.argv.forEach(function(value, index) {
    if (index === 0) {
        return;
    }
    
});

const lipwig = new Lipwig(config);

