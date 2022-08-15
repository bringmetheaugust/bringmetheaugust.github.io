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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
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

/***/ "./src/html/#grid.pug":
/*!****************************!*\
  !*** ./src/html/#grid.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array) {pug_html = pug_html + "\u003Cdiv id=\"grid\"\u003E";
// iterate Array(36)
;(function(){
  var $$obj = Array(36);
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"d\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var i = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"d\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/about.pug":
/*!****************************!*\
  !*** ./src/html/about.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection id=\"about\"\u003E\u003Cdiv\u003EProbably everyone has ever tried to make Romeo and Juliet in a modern way, trying to surpass Shakespeare, trying to surpass the impossible. Perhaps we, too, each time embody the roles of our actors with the same dream. But time does not stand still and with every, even the most insignificant era, we have more and more 'soil' and opportunities to convey as much of our modern view of love, sorrow and the theater as a whole.\u003C\u002Fdiv\u003E\u003Cdiv\u003EOur modest theater will be very grateful to each viewer, every flowers thrown on the stage, every tear for sincere love.\u003C\u002Fdiv\u003E\u003Cdiv\u003EWhat is love? Madness from frenzy, Playing fire, leading to a fire..\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/actors-wrap/actor-1.pug":
/*!******************************************!*\
  !*** ./src/html/actors-wrap/actor-1.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"actors-wrap\" id=\"actor-1\"\u003E\u003Cdiv class=\"actors active\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/romeo.jpg */ "./src/img/romeo.jpg"), true, true)+" alt=\"Romeo\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003EEnrico Mc Raudy\u003C\u002Fh2\u003E\u003Ch3\u003ERomeo\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"actors\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/mercutio.jpg */ "./src/img/mercutio.jpg"), true, true)+" alt=\"Mercutio\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003EFarhan Akhtar\u003C\u002Fh2\u003E\u003Ch3\u003EMercutio\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"actors\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/tybalt.jpg */ "./src/img/tybalt.jpg"), true, true)+" alt=\"Tybalt\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003ECascaro Luisa\u003C\u002Fh2\u003E\u003Ch3\u003ETybalt\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/actors-wrap/actor-2.pug":
/*!******************************************!*\
  !*** ./src/html/actors-wrap/actor-2.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"actors-wrap\" id=\"actor-2\"\u003E\u003Cdiv class=\"actors active\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/juliet.jpg */ "./src/img/juliet.jpg"), true, true)+" alt=\"Juliet\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003EJanette Milye\u003C\u002Fh2\u003E\u003Ch3\u003EJuliet\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"actors\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/nurse.jpg */ "./src/img/nurse.jpg"), true, true)+" alt=\"Juliet's Nurse\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003EOlyvia Grubb\u003C\u002Fh2\u003E\u003Ch3\u003EJuliet's Nurse\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"actors\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/benvolio.jpg */ "./src/img/benvolio.jpg"), true, true)+" alt=\"Benvolio\"") + "\u003E\u003Cdiv class=\"des\"\u003E\u003Ch2\u003ERishelle Moscomm\u003C\u002Fh2\u003E\u003Ch3\u003EBenvolio\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/footer.pug":
/*!*****************************!*\
  !*** ./src/html/footer.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cfooter class=\"show\"\u003E\u003Ca href=\"\"\u003Emade by BringMeTheAugust.com\u003C\u002Fa\u003E\u003C\u002Ffooter\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/header.pug":
/*!*****************************!*\
  !*** ./src/html/header.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader class=\"show\"\u003E\u003Cdiv class=\"logo\"\u003E\u003Cdiv class=\"l-0\"\u003EROMEO\u003C\u002Fdiv\u003E\u003Cdiv class=\"l-1\"\u003E&\u003C\u002Fdiv\u003E\u003Cdiv class=\"l-2\"\u003EJuliet\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"show\"\u003E\u003Cul\u003E\u003Cli\u003E \u003Clabel for=\"1\" data-change=\"story\"\u003EOur story\u003Cinput type=\"radio\" id=\"1\" name=\"nav\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Clabel for=\"0\" data-change=\"about\"\u003EAbout Us\u003Cinput type=\"radio\" id=\"0\" name=\"nav\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Clabel for=\"2\" data-change=\"actor\"\u003EActors\u003Cinput type=\"radio\" id=\"2\" name=\"nav\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Clabel for=\"3\" data-change=\"contact\"\u003EContact Us\u003Cinput type=\"radio\" id=\"3\" name=\"nav\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/main.pug":
/*!***************************!*\
  !*** ./src/html/main.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Clink rel=\"stylesheet\" href=\"style.css\"\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png"), true, true)+" type=\"image\u002Fx-icon\"") + "\u003E\u003Ctitle\u003ERomeo & Juliet\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"wrapper\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./header.pug */ "./src/html/header.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./about.pug */ "./src/html/about.pug").call(this, locals)) ? "" : pug_interp) + "\u003Csection id=\"story\"\u003E\u003Ciframe src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FSFbR9HWbZ8M?rel=0&amp;amp;showinfo=0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\u003C\u002Fsection\u003E\u003Cdiv class=\"act\" id=\"button-left\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/arrow-left.png */ "./src/img/arrow-left.png"), true, true)+" alt=\"to left\"") + "\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./actors-wrap/actor-1.pug */ "./src/html/actors-wrap/actor-1.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./actors-wrap/actor-2.pug */ "./src/html/actors-wrap/actor-2.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"act\" id=\"button-right\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/arrow-right.png */ "./src/img/arrow-right.png"), true, true)+" alt=\"to right\"") + "\u003E\u003C\u002Fdiv\u003E\u003Ca class=\"soc soc-0\" href=\"\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/google.png */ "./src/img/google.png"), true, true)+" alt=\"google+\"") + "\u003E\u003C\u002Fa\u003E\u003Ca class=\"soc soc-1\" href=\"\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/facebook.png */ "./src/img/facebook.png"), true, true)+" alt=\"facebook\"") + "\u003E\u003C\u002Fa\u003E\u003Ca class=\"soc soc-2\" href=\"\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/twitter.png */ "./src/img/twitter.png"), true, true)+" alt=\"twitter\"") + "\u003E\u003C\u002Fa\u003E\u003Ca class=\"soc soc-3\" href=\"\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/instagramm.png */ "./src/img/instagramm.png"), true, true)+" alt=\"instagram\"") + "\u003E\u003C\u002Fa\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer.pug */ "./src/html/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./#grid.pug */ "./src/html/#grid.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cscript src=\"bundle.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/img/arrow-left.png":
/*!********************************!*\
  !*** ./src/img/arrow-left.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAF8klEQVR4nO3dOYxVZRjG8T+CWotRaQETBaMxMuCG2gEWKsbCGAYLl55Lp/ZCVJzB0qUSKA1aKEgsjFtYC1kbhA61wM4lGrF4ORkEBu7M3Hu/7f9Lpn+bJ+85z/3mOyBJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqShuQ1YlnqIXMxPPYCysgrYDdwMfJV4lizckHoAZeFGYAuwH1gOnE87jpSPdcAJ4MIlf72kE2XEDdKuhcAHwBf4zjGtBakHUBIbgbeARakHyZ0BacsSYBuwPvUgpfARqx094l3DcMyAG6R+K4BJYHXqQUrkBqnXTUR1ewjDMWtukDqtJbbG3akHKZ0bpC4LgY+APRiOgTAg9RgHjgMvpR6kJj5ilW8J8C7wTOpBauQGKVtX3RqOIXGDlMnqdkTcIGWxuh0xN0g51gDbsZ0aKTdI/rrqdi+GY+TcIHkbB94B7kg9SKsMSJ4WEy/hT6cepHU+YuVnM3AKw5EFN0g+xoit8WjqQTTFDZLeAuBN4CCGIztukLSsbjPnBknD6rYQbpDR20AcLrw99SC6PgMyOouJx6mnUg+i/vmINRo94CSGozhukOEaI7bGI6kH0ey4QYZjPnHq9iCGo2hukMFbR/zgd1fqQTR3bpDBufSuW8NRCTfIYGwAJoiPz6gibpC5WQp8CuzAcFTJgMxeDziGp26r5iPWzI0B7wEPpx5Ew+cG6d88YCtR3RqORrhB+mN12yg3yLXdgtVt09wg0/PCBBmQq1hK/KbhwUL5iHWZTcBRDIcucoOElUR1+1DqQZSX1jfIPOLU7QEMh66i5Q1idavranGDLAQ+xOpWfWhtg2wE3sbqVn1qJSB3Er9p+CUmzUgLj1g94EcMh2ah5g2yingJ92ChZq3GDTKPuOt2P4ZDc1TbBnmSuLXQ6zw1ELVskK66/RzDoQGqISAbgePAy6kHUX1KfsRaCmzDdkpDVOoG2UycujUcGqrSNsgq4iXcLzFpJEoJyCLiN43nUw+itpT0iHUh9QBqTykB+Rl4AXgQ+C7xLGpIKQHpHABWEy/pvyeeRQ0oLSCdCeA+4l5caWhKDQjAaWA98UPhucSzqFIlB6SzA7iH+KyyNFA1BATgN+AV4rDiqcSzqCK1BKSzB1hOHHeX5qy2gED8XvIGUQn/kHgWFa7GgHQOEF+Y7WElrFmqOSCdSaIS3p16EJWnhYBAVMLPAi8Sv8pLfWklIJ2PiZd4K2H1pbWAgJWwZqDFgHS6SnhL6kGUr5YDAlEJv058/sBKWFdoPSCdQ0QlvAn4I/EsyogB+b/twL3AZ6kHUR4MyJVOE5dBjAO/JJ5FiRmQ6e0ElhEX0qlRBuTafgNexUq4WQakP10lvDX1IBotA9K/C8BrRCX8feJZNCIGZOYOERfX9YA/E8+iITMgszdJ/KuvlXDFDMjc/ERUwhuAXxPPoiEwIIOxi/guiZVwZQzI4HSV8DqshKthQAZvL/Fu4inhChiQ4fiXOCU8hncJF82ADNdhpu4SthIukAEZjQniXJeVcGEMyOicZaoS9pRwIQzI6O3CU8LFMCBpdJXwGuBk4ll0DQYkrX3EpXbeJZwpA5LeP8RdwmPAt4ln0WUMSD4OA48RlfBfiWfRRQYkPxPEuS4/L5cBA5Kns8Tn5bw4IjEDkredxL/6WgknYkDyd56pSvhE4lmaY0DKsQ+4H08Jj5QBKcvfxCnhFcA3iWdpggEp0xHgcbw4YugMSNkmiZd4Py83JAakfGeIz8uNA+cSz1IdA1KPncS/+loJD5ABqUt3SngtVsIDYUDq9CVWwlJfHgC+Ju4W7vevl2TSDLlB6ncEeIL4vJyV8AwZkHZsJyrhT1IPUhID0pYzwHPARqyE+2JA2rSDqITfTz2IlLs1wDF8Sb8qN4i6SvjSiyPmJ5pFytpK4CjesiJN61biYjtJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqTB+g/7Ws59kYkAawAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/arrow-right.png":
/*!*********************************!*\
  !*** ./src/img/arrow-right.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/benvolio.jpg":
/*!******************************!*\
  !*** ./src/img/benvolio.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benvolio.jpg";

/***/ }),

/***/ "./src/img/facebook.png":
/*!******************************!*\
  !*** ./src/img/facebook.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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9n1P/xunPPr7f+D8Zzxzo8+znv09e7pHcQiiZgHPee7f/FsnXfC85zeGfDfnv2Bv91C2JGpmduELf/BFz37xS7oT3sxLX9g9nK2Imkld9EP3fdnFnX9kj7z8b3ePaAuiZj6XXPrkZ79i5p4POO6Huwe1OVEzl8uO/5GXzt/zAZf/ne5pbUrUzOOKHz3vgsu7S92J+zyme2SbETVz2PvKV/3Yq7sj3bEf7x7bZkTNBC668u/+RHefh+eq7tFtQtR0u/o117y2u83D9pPd09uEqGl19bUvva47zCPyuu4JHkzU9Lns773+uO4oj9Qbuod4MFHTZN/ZJ13fXeQu+KnuOR5M1LT46Z+5oTvH3fH8+b4DLmruefu+940ndMe4a47tnuZBRM097erzfrY7xN30pu55HkTU3LOe+4j1vmJySE/tnuhBRM09aM85b+5uUNSwe258y/O6CxQ17J63vuVt3f2JGnbP465d9MvdoobNXPRzU96RSNRwePaec3p3eaKGXXR23jveoube7Glv765O1LCLjjpp7R9WihruYs+5L+9OTtSwi97xA93BiRp20dGnntndm6hhF131zu7aRA276Of/fndroobddM67ulMTNeyi0x7cHZqoYTcdn/rTDVFz73TFqTm3HxM13O9+l57fHZmoRc1uOjfsBmSi5l7uond3Fybq+4maXfTz7+kOTNRF1OyWK2/q7kvU+4ma3bH3vPgfWYqae5WzfqE7LlHfRtTshmOzb1kkau51fvGXutMS9R1EzZE7+73dZYn6TkTNEXv6M7vDEvWdiZojtPd93VmJ+q5EzZHZ9/7uqkR9N6LmiOw7sTuqbqImy40f6G6qnaiJ8taHdyfVT9QkueSXu4uagKgJctkbu4OagajJcdkHu3uagqiJceOvdOc0B1GTYs8Du2uahKhJ8avdMc1C1IR4Q3dL0xA1GT7UndI8RE2ED99Lb120GVGT4Ph79W8t70bUBPjIvfO2oVsQNes75te6O5qKqFnevtd3ZzQXUbO8U7srmoyoWd3TuyOajahZ3I9e3h3RbETN2j76jO6GpiNqlrbnY90JzUfULO1V3QVNSNSs7B+c2V3QhETNwj5+Q3dAMxI169r7D7v7mZKoWdevd+czJ1GzrJv9NGtTomZVl/yj7nomJWpW9YnueGYlahb1j4/rjmdWomZNl3yyu51piZo1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6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog6ysaf7BMxA1Dn2bPxO9xGYgahznLZxVPcRmIGoc3x546HdR2AGos5x9sb9u4/ADESd4zMbJ3YfgRmIOscHNm7w9jeiDnLjuzY2zug+BBMQdYyrvjUkf38j6iDXfGtIz/xy9ynoJ+oUb7qupvSy7mPQT9Qprtk/petu7j4H7UQd4spbx/S2s7pPQjdRZ/j4T9w2p0fs7T4LzUQd4cYL7hjUV7oPQzNRJ9j7/jtP6i/8X33vJuoAN/7hXUd14mXdJ6KTqNd39cfuPqtPvqP7TDQS9fK+cMPBwzrz/1zdfSzaiHpxj//m5uP62v/9f91Ho4moV3bjD37zuq0n9rxv/Omb3tp9RO55ol7UaY89+9qT3zUe22s/fzr3Mi/vbpXd8/8B8XZVS9gJ/Y4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMTJUMDM6MzU6MDgrMDg6MDC2ICO/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA0LTE2VDE1OjI4OjE4KzA4OjAwteDf8AAAAFR0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9kYi9zdmdfaW5mby9zdmcvNGUvODUvNGU4NWZhM2E3YmI2NGZmZmRlMzMwN2NhNzJmMmFlYjUuc3ZnblMq1AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/google.png":
/*!****************************!*\
  !*** ./src/img/google.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google.png";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ "./src/img/instagramm.png":
/*!********************************!*\
  !*** ./src/img/instagramm.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagramm.png";

/***/ }),

/***/ "./src/img/juliet.jpg":
/*!****************************!*\
  !*** ./src/img/juliet.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/mercutio.jpg":
/*!******************************!*\
  !*** ./src/img/mercutio.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mercutio.jpg";

/***/ }),

/***/ "./src/img/nurse.jpg":
/*!***************************!*\
  !*** ./src/img/nurse.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nurse.jpg";

/***/ }),

/***/ "./src/img/romeo.jpg":
/*!***************************!*\
  !*** ./src/img/romeo.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/romeo.jpg";

/***/ }),

/***/ "./src/img/twitter.png":
/*!*****************************!*\
  !*** ./src/img/twitter.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/tybalt.jpg":
/*!****************************!*\
  !*** ./src/img/tybalt.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tybalt.jpg";

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.sass */ "./src/style/main.sass");
/* harmony import */ var _style_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_main_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/main.pug */ "./src/html/main.pug");
/* harmony import */ var _html_main_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html_main_pug__WEBPACK_IMPORTED_MODULE_1__);



const labels = document.querySelectorAll('label');
const wrapper = document.getElementById('wrapper');
const leftButton = document.getElementById('button-left');
const rightButton = document.getElementById('button-right');
const actorsWrap = document.querySelectorAll('.actors-wrap');
let count = 0;

//nav menu
for(let i of labels){
	i.addEventListener('change',(event)=>{
		wrapper.classList.remove(wrapper.classList[0]);
		wrapper.classList.add(event.currentTarget.getAttribute('data-change'));
	})
};
//to slide an actors
leftButton.addEventListener('click',()=>{
	count<1?count=2:--count;
	slide();
});
rightButton.addEventListener('click',()=>{
	count==2?count=0:++count;
	slide();
});
function slide(){
	for(let i of actorsWrap){
		for(let a=0;a<i.children.length;a++){
			i.children[a].classList.remove('active');
		};
		i.children[count].classList.add('active');
	};

};
//

/***/ }),

/***/ "./src/style/main.sass":
/*!*****************************!*\
  !*** ./src/style/main.sass ***!
  \*****************************/
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