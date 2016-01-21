var Backbone = require('backbone');

module.exports = (function() {
  var localStorage = window.localStorage || false;
  return {
    saveToStorage : function saveToStorage(key, data) {
      if(localStorage){
        localStorage.setItem(key, JSON.stringify(data));
      }
    },
    retrieveFromStorage : function retrieveFromStorage(key) {
      if(localStorage && localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
      }
    },
    removeKey : function removekey(key) {
      // reset or remove local storage setting
      if(localStorage && localStorage.getItem(key)){
        localStorage.removeItem(key);
      }
    }
  };
})();
