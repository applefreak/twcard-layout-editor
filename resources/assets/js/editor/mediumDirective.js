// Generated by CoffeeScript 1.11.1
(function() {
  module.exports = {
    twoWay: true,
    params: ['mode'],
    update: function(newValue, oldValue) {
      this.mode = this.params.mode != null ? this.params.mode + 'Mode' : 'richMode';
      this.medium = new Medium({
        element: this.el,
        mode: Medium[this.mode]
      });
      this.medium.value(newValue);
      return this.medium.element.addEventListener('keyup', (function(_this) {
        return function() {
          return _this.set(_this.medium.value());
        };
      })(this));
    }
  };

}).call(this);
