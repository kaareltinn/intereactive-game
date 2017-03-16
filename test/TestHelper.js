const chai = require('chai');
global.expect = chai.expect;

require('babel-register')({
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread']
});
