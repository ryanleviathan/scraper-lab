const parser = require('./parser.js');
const request = require('./request.js');
const store = require('./store');

request()
  .then(document => parser(document))
  .then(books => store(books))
  .then(books => console.log(books.length));
