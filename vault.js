'use strict';
module.exports = function() {
  //private variables
  var secretVault = {};
  //private methods
  var setValue = function (key, value) {
    secretVault[key] = value;
  };
  var getValue = function (key) {
    if (!secretVault[key]){
      return null;
    }else{
      return secretVault[key];
    }
  };
  //public
  return {
    setValue: setValue,
    getValue: getValue
  };
};