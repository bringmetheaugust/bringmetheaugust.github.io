/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/html/index.pug":
/*!****************************!*\
  !*** ./src/html/index.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Clink rel=\"stylesheet\" href=\"style.css\"\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png"), true, true)+" type=\"image\u002Fx-icon\"") + "\u003E\u003Ctitle\u003EMEMORY STORM\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./splash.pug */ "./src/html/splash.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv id=\"alert\"\u003E\u003Cdiv class=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"button\"\u003E\u003Cdiv\u003Eb\u003C\u002Fdiv\u003E\u003Cdiv\u003Ea\u003C\u002Fdiv\u003E\u003Cdiv\u003Ec\u003C\u002Fdiv\u003E\u003Cdiv\u003Ek\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game-field-wrap\"\u003E\u003Cul id=\"game-field\"\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"count\"\u003Etime left :\u003Cspan id=\"count\"\u003E0\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform id=\"settings\"\u003E\u003Clabel\u003Eselect grid density\u003Cinput id=\"density\" type=\"number\"\u003E\u003Cdiv class=\"error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003Clabel\u003Eselect time for pictures hiding (sec)\u003Cinput id=\"hiding\" type=\"number\"\u003E\u003Cdiv class=\"error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003Clabel\u003Eselect game time (sec)\u003Cinput id=\"time\" type=\"number\"\u003E\u003Cdiv class=\"error\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"button\" id=\"play\"\u003E\u003Cdiv class=\"play\"\u003E\u003Cdiv\u003Ep\u003C\u002Fdiv\u003E\u003Cdiv\u003El\u003C\u002Fdiv\u003E\u003Cdiv\u003Ea\u003C\u002Fdiv\u003E\u003Cdiv\u003Ey\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"abort\"\u003E\u003Cdiv\u003Es\u003C\u002Fdiv\u003E\u003Cdiv\u003Et\u003C\u002Fdiv\u003E\u003Cdiv\u003Eo\u003C\u002Fdiv\u003E\u003Cdiv\u003Ep\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cscript src=\"bundle.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/splash.pug":
/*!*****************************!*\
  !*** ./src/html/splash.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array) {pug_html = pug_html + "\u003Cdiv id=\"splash\"\u003E\u003Cdiv class=\"title\"\u003EMEMORY STORM\u003Cdiv class=\"exclamation\"\u003Ework hard , play hard\u003Cdiv\u003E!\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"splash-wrap\"\u003E";
// iterate Array(100)
;(function(){
  var $$obj = Array(100);
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"splash\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var i = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"splash\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv id=\"close\"\u003Eclose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/img/data/card_1.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_1.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/data/card_10.jpg":
/*!**********************************!*\
  !*** ./src/img/data/card_10.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_10.jpg";

/***/ }),

/***/ "./src/img/data/card_11.png":
/*!**********************************!*\
  !*** ./src/img/data/card_11.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_11.png";

/***/ }),

/***/ "./src/img/data/card_12.jpeg":
/*!***********************************!*\
  !*** ./src/img/data/card_12.jpeg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/data/card_13.jpg":
/*!**********************************!*\
  !*** ./src/img/data/card_13.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_13.jpg";

/***/ }),

/***/ "./src/img/data/card_14.png":
/*!**********************************!*\
  !*** ./src/img/data/card_14.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_14.png";

/***/ }),

/***/ "./src/img/data/card_15.jpg":
/*!**********************************!*\
  !*** ./src/img/data/card_15.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/data/card_16.jpg":
/*!**********************************!*\
  !*** ./src/img/data/card_16.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_16.jpg";

/***/ }),

/***/ "./src/img/data/card_17.png":
/*!**********************************!*\
  !*** ./src/img/data/card_17.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YjQ5MWI2ZC1hNTg0LTc0NDQtYmE1Ny1hOTQ1MDE5YzE4YTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3QjIzOUVCOUEwMTFFN0JENkU4MDg1QUYzNzY5NTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODk3QjIzOURCOUEwMTFFN0JENkU4MDg1QUYzNzY5NTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGE5NThiZWEtN2Q3YS1iNTRlLWI5ODctNzQyNTg1ZmFlZTUxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTdmZTUwMDUtYjk5ZS0xMWU3LTgwNDEt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"

/***/ }),

/***/ "./src/img/data/card_18.png":
/*!**********************************!*\
  !*** ./src/img/data/card_18.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/data/card_2.jpeg":
/*!**********************************!*\
  !*** ./src/img/data/card_2.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_2.jpeg";

/***/ }),

/***/ "./src/img/data/card_3.png":
/*!*********************************!*\
  !*** ./src/img/data/card_3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_3.png";

/***/ }),

/***/ "./src/img/data/card_4.jpeg":
/*!**********************************!*\
  !*** ./src/img/data/card_4.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_4.jpeg";

/***/ }),

/***/ "./src/img/data/card_5.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_5.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/data/card_6.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_6.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/data/card_7.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_7.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_7.jpg";

/***/ }),

/***/ "./src/img/data/card_8.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_8.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_8.jpg";

/***/ }),

/***/ "./src/img/data/card_9.jpg":
/*!*********************************!*\
  !*** ./src/img/data/card_9.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/card_9.jpg";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ "./src/js/cardFabric.js":
/*!******************************!*\
  !*** ./src/js/cardFabric.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var pictures = __webpack_require__(/*! ./pictures.js */ "./src/js/pictures.js");
var gameField = document.getElementById('game-field');

var newCardObject = function(img){
	var _img = img;
	this.getImg = function(){
		return _img;
	};
};

var newCard = function(obj){
	var li = document.createElement('li');
	li.get = obj;
	return li;
};

function clearGameField(){
	var gameField = document.getElementById('game-field');
	while(gameField.children.length > 0){
		gameField.firstElementChild.remove();
	}
}

function renderCards(density){
	clearGameField();
	var cardsArray = pictures.slice(0, Math.pow(density, 2) / 2).map(function(i){
		return Object.freeze(new newCardObject(i))
	});
	cardsArray = cardsArray.concat(cardsArray).sort(function(){
		return Math.random() - Math.random()
	});
	cardsArray.forEach(function(i){
		gameField.appendChild(newCard(i, 100/density));
	});
	gameField.style.gridTemplate = 'repeat('+ density +', 1fr)/repeat('+ density +', 1fr)';
}

exports.renderCards = renderCards;
exports.clearGameField = clearGameField;

/***/ }),

/***/ "./src/js/endModule.js":
/*!*****************************!*\
  !*** ./src/js/endModule.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var alert = document.getElementById('alert');
var counter = document.getElementById('count');
var clearGameField = __webpack_require__(/*! ./cardFabric.js */ "./src/js/cardFabric.js").clearGameField;
var setInitialSettings = __webpack_require__(/*! ./startModule.js */ "./src/js/startModule.js").setInitialSettings;
var interval;

function startCounter(time){
	var timer = time;
	interval = setInterval(function(){
		counter.innerHTML = ' '+--timer;
		if(timer < 1){
			clearInterval(interval);
			gameOver(true);
		};
	}, 1000);
}

function checkGameState(){
	var result = gs.gameState.result;
	if(result === undefined){
		gs.gameState.result = Math.pow(gs.gameState.settings.density, 2) / 2 - 1;
		return false;
	}
	if(result !== 1){
		--gs.gameState.result;
		return false;
	}
	return gameOver(false);
}

function toRenderAlert(win){
	alert.classList.add('active');
	win ? alert.firstElementChild.innerHTML = 'you win !!!' : alert.firstElementChild.innerHTML = 'you lose :('
}

function gameOver(abort){
	clearGameField();
	if(gs.gameState.play) toRenderAlert(!abort);
	clearInterval(interval);
	counter.innerHTML = '0';
	gs.gameState.result = undefined;
	gs.gameState.play = false;
	document.getElementById('play').classList.remove('abort');
	setInitialSettings();
	document.getElementById('game-field').classList.remove('play');
}

alert.lastElementChild.addEventListener('click', function(e){
	alert.classList.remove('active');
});

exports.checkGameState = checkGameState;
exports.gameOver = gameOver;
exports.startCounter = startCounter;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../style/index.sass */ "./src/style/index.sass");
__webpack_require__(/*! ../html/index.pug */ "./src/html/index.pug");
__webpack_require__(/*! ./runModule.js */ "./src/js/runModule.js")

var setInitialSettings = __webpack_require__(/*! ./startModule */ "./src/js/startModule.js").setInitialSettings;
var splash = document.getElementById('splash');

var gameState = {
	settings: {
		density: 4,
		hiding: 5,
		time: 60
	},
	buffer: undefined,
	play: false,
	result : undefined
};

window.addEventListener('load', function(e){
	setInitialSettings(gameState.settings);
		setTimeout(function(){
		hideSplash();
	}, 11000)
});

function hideSplash(){
	splash.style.opacity = '0';
	setTimeout(function(){
		splash.remove();
	}, 1000);
}

document.getElementById('close').addEventListener('click', function(){
	hideSplash();
});

module.exports.gameState = gameState;

/***/ }),

/***/ "./src/js/pictures.js":
/*!****************************!*\
  !*** ./src/js/pictures.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pictures = [
	__webpack_require__(/*! ../img/data/card_1.jpg */ "./src/img/data/card_1.jpg"),
	__webpack_require__(/*! ../img/data/card_2.jpeg */ "./src/img/data/card_2.jpeg"),
	__webpack_require__(/*! ../img/data/card_3.png */ "./src/img/data/card_3.png"),
	__webpack_require__(/*! ../img/data/card_4.jpeg */ "./src/img/data/card_4.jpeg"),
	__webpack_require__(/*! ../img/data/card_5.jpg */ "./src/img/data/card_5.jpg"),
	__webpack_require__(/*! ../img/data/card_6.jpg */ "./src/img/data/card_6.jpg"),
	__webpack_require__(/*! ../img/data/card_7.jpg */ "./src/img/data/card_7.jpg"),
	__webpack_require__(/*! ../img/data/card_8.jpg */ "./src/img/data/card_8.jpg"),
	__webpack_require__(/*! ../img/data/card_9.jpg */ "./src/img/data/card_9.jpg"),
	__webpack_require__(/*! ../img/data/card_10.jpg */ "./src/img/data/card_10.jpg"),
	__webpack_require__(/*! ../img/data/card_11.png */ "./src/img/data/card_11.png"),
	__webpack_require__(/*! ../img/data/card_12.jpeg */ "./src/img/data/card_12.jpeg"),
	__webpack_require__(/*! ../img/data/card_13.jpg */ "./src/img/data/card_13.jpg"),
	__webpack_require__(/*! ../img/data/card_14.png */ "./src/img/data/card_14.png"),
	__webpack_require__(/*! ../img/data/card_15.jpg */ "./src/img/data/card_15.jpg"),
	__webpack_require__(/*! ../img/data/card_16.jpg */ "./src/img/data/card_16.jpg"),
	__webpack_require__(/*! ../img/data/card_17.png */ "./src/img/data/card_17.png"),
	__webpack_require__(/*! ../img/data/card_18.png */ "./src/img/data/card_18.png"),
];

module.exports=pictures;

/***/ }),

/***/ "./src/js/runModule.js":
/*!*****************************!*\
  !*** ./src/js/runModule.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var checkGameState = __webpack_require__(/*! ./endModule */ "./src/js/endModule.js").checkGameState;
var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var startCounter = __webpack_require__(/*! ./endModule.js */ "./src/js/endModule.js").startCounter;
var gameField = document.getElementById('game-field');

gameField.addEventListener('click', function(e){
	if(!gs.gameState.play) return;
	var trg = e.target;
	if (trg.children.length || trg.tagName !== 'LI') return;
	toActiveCard.call(trg);
	checkBuffer(trg);
});

function toActiveCard(){
	try{
		var img = document.createElement('img');
		img.setAttribute('src', this.get.getImg());
		this.appendChild(img);
	}catch(e){
		console.log(e);
	}
}

function toDisabled(){
	this.classList.add('disabled');
}

function toDisactiveCard(){
	try{
		var firstChild = this.firstElementChild;
		firstChild.classList.add('disactive');
		setTimeout(function(){
			firstChild.remove();
		}, 400);
	}catch(e){
		console.log(e);
	}
}

function runGame(settings){
	window.scrollTo(0,0);
	showStartImgs(settings.hiding);
	startCounter(settings.time);
	gs.gameState.play = true;
	gameField.classList.add('play');
}

function showStartImgs(time){
	var chld = gameField.children;
	for(var i = 0, length = chld.length; i < length; i++){
		toActiveCard.call(chld[i]);
	}
	setTimeout(function(){
		for(var i = 0, length = chld.length; i < length; i++){
			toDisactiveCard.call(chld[i]);
		}
	}, time*1000);
}

function checkBuffer(item){
	var buf = gs.gameState.buffer;
	if(buf){
		if(item.get.getImg() === gs.gameState.buffer.get.getImg()){
			toDisabled.call(item);
			toDisabled.call(gs.gameState.buffer);
			gs.gameState.buffer = undefined;
			checkGameState();
			return;
		}
		toDisactiveCard.call(buf);
		toDisactiveCard.call(item);
		gs.gameState.buffer = undefined;
		return;
	}
	gs.gameState.buffer=item;
	return;
}

exports.showStartImgs = showStartImgs;
exports.runGame = runGame;

/***/ }),

/***/ "./src/js/startModule.js":
/*!*******************************!*\
  !*** ./src/js/startModule.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var runGame = __webpack_require__(/*! ./runModule.js */ "./src/js/runModule.js");
var renderCards = __webpack_require__(/*! ./cardFabric */ "./src/js/cardFabric.js").renderCards;
var gameOver = __webpack_require__(/*! ./endModule.js */ "./src/js/endModule.js");;
var gameGrid = document.getElementById('density');
var gameHiding = document.getElementById('hiding');
var gameTime = document.getElementById('time');
var form = document.getElementById('settings');
var MIN_GAME_TIME = 10, MAX_GAME_TIME = 60;
var MIN_HIDING_TIME = 1, MAX_HIDING_TIME = 10;
var MIN_DENSITY= 2, MAX_DENSITY = 6;

function setInitialSettings(obj){
	obj = JSON.parse(localStorage.getItem('settings')) || obj;
	gameGrid.value = obj.density;
	gameHiding.value = obj.hiding;
	gameTime.value = obj.time;
	renderCards(obj.density);
}

document.getElementById('play').addEventListener('click', function(e){
	if(gs.gameState.play){
		gs.gameState.play = false;
		return gameOver.gameOver(true); 
	}
	var formData = getFormData();
	if(!validateForm(formData)) return;
	localStorage.setItem('settings', JSON.stringify(formData));
	gs.gameState.settings = formData;
	runGame.runGame(gs.gameState.settings);
	document.getElementById('play').classList.toggle('abort');
});

function validateForm(obj){
	for(var i in obj){
		if(typeof obj[i] !== 'number' || Number.isNaN(obj[i]) ) return false;
	}
	if((obj.density < MIN_DENSITY || obj.density > MAX_DENSITY || obj.density % 2) ||
		(obj.hiding < MIN_HIDING_TIME || obj.hiding > MAX_HIDING_TIME) ||
		(obj.time < MIN_GAME_TIME || obj.time > MAX_GAME_TIME)) return false;
	return obj;
}

function getFormData(){
	return {
		density: +gameGrid.value,
		hiding: +gameHiding.value,
		time: +gameTime.value
	}
}

form.addEventListener('input', function(e){
	if (gs.gameState.play) return;
	var trg = e.target;
	switch (trg.id){
		case ('density'):
			(trg.value < MIN_DENSITY || trg.value > MAX_DENSITY || trg.value % 2) ?
				setError.call(trg, 'Please, set any from 2 to 6 multiples of two') :
				(setError.call(trg), renderCards(trg.value));
			break;
		case ('hiding'):
			trg.value < MIN_HIDING_TIME || trg.value > MAX_HIDING_TIME ?
				setError.call(trg, 'Please, set any number from 1 to 10') :
				setError.call(trg);
			break;
		case ('time'):
			trg.value < MIN_GAME_TIME || trg.value > MAX_GAME_TIME ?
				setError.call(trg, 'please, set any number form 10 to 60') :
				setError.call(trg);
			break;
	}
});

function setError(val){
	if (val) return this.nextElementSibling.innerHTML = val;
	this.nextElementSibling.innerHTML = '';
}

exports.setInitialSettings = setInitialSettings;

/***/ }),

/***/ "./src/style/index.sass":
/*!******************************!*\
  !*** ./src/style/index.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map