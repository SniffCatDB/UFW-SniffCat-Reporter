const axios = require('axios');
const { version } = require('../package.json');

axios.defaults.headers.common = {
	'User-Agent': `Mozilla/5.0 (compatible; UFW-To-NetCatDB/${version}; +https://github.com/sefinek/UFW-To-NetCatDB)`,
	'Accept': 'application/json',
	'Cache-Control': 'no-cache',
	'Connection': 'keep-alive',
};

axios.defaults.timeout = 30000;

module.exports = axios;