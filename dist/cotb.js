(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.COTB = {}));
}(this, (function (exports) { 'use strict';

    function add(a, b) {
        return a + b;
    }
    function start(x) {
        return "Sum of " + x + " and 5 = " + add(x, 5);
    }

    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
