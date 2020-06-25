const env = process.env.CURRENT_ENV;
const defaultConfig = require('./config.local');

let currentConfig;

switch (env) {
    case "local":
    default:
        currentConfig = defaultConfig;
}

console.log(currentConfig);
module.exports = currentConfig;