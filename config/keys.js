if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  console.log(process.env.TMDB_KEY);
  console.log(process.env.LANG);
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}