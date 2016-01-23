
module.exports = (function() {
  var localStorage = window.localStorage || false;
  return {
    putValue : function (key, data) {
      if(localStorage){
        if(data == null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(data));
        }
      }
    },
    getValue : function (key, def) {
      if(localStorage && localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
      } else if(localStorage && def) {
        localStorage.setItem(key, JSON.stringify(def));
        return def;
      }
    }
  };
})();
