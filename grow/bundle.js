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

/***/ "./src/html/box/box.pug":
/*!******************************!*\
  !*** ./src/html/box/box.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"box\"\u003E\u003Cdiv class=\"description\"\u003E\u003Cdiv\u003E\u003Cdiv\u003EЗдесь будет описание какие гроубоксы вы делаете и тому подоброное.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestiae libero totam ea praesentium laboriosam ab similique eligendi tenetur numquam consectetur, omnis repellat mollitia tempore earum aspernatur in, rerum fugiat voluptatibus commodi. Aliquam facere alias qui. Ipsa sunt autem ducimus perferendis eum impedit ex quo sit voluptatibus sed modi, fuga, doloremque sapiente aut, at nobis labore illo distinctio laborum consequatur eaque laboriosam nemo aliquam. Natus corporis illo beatae nulla soluta! Unde animi nostrum, ratione ipsam nesciunt eligendi adipisci expedita sed a porro omnis tempore suscipit obcaecati magnam, saepe molestiae harum totam ad vel? Reprehenderit iusto nam dignissimos, sapiente quibusdam fugiat.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider-wrap\"\u003Eздесь будет слайдер с картинками гроубоксов\u003C\u002Fdiv\u003E\u003Cbutton id=\"constructor\"\u003Eперейти к конструктору\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/constructor/color.pug":
/*!****************************************!*\
  !*** ./src/html/constructor/color.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cul class=\"color\"\u003E\u003Cli\u003E\u003Clabel for=\"cherry\"\u003E\u003Cinput id=\"cherry\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Clabel for=\"oak\"\u003E\u003Cinput id=\"oak\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Clabel for=\"nagano\"\u003E\u003Cinput id=\"nagano\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Clabel for=\"santana\"\u003E\u003Cinput id=\"santana\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Clabel for=\"red\"\u003E\u003Cinput id=\"red\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Clabel for=\"nut\"\u003E\u003Cinput id=\"nut\" type=\"radio\" name=\"color\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/constructor/constructor.pug":
/*!**********************************************!*\
  !*** ./src/html/constructor/constructor.pug ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"constructor\"\u003E\u003Cdiv class=\"curtain\"\u003E\u003Cdiv class=\"curt curt-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"curt curt-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"constructor-wrap\"\u003E\u003Cdiv class=\"cross-wrap\" id=\"constructor-cross\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ../cross.pug */ "./src/html/cross.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./form.pug */ "./src/html/constructor/form.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"sum\"\u003E\u003Cdiv class=\"count\"\u003E\u003Cspan id=\"count\"\u003E0\u003C\u002Fspan\u003E&nbsp;грн\u003C\u002Fdiv\u003E\u003Cbutton onclick=\"alert(&quot;корзина пока не работает&quot;)\"\u003Eв корзину\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/constructor/form.pug":
/*!***************************************!*\
  !*** ./src/html/constructor/form.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cform id=\"form\"\u003E\u003Cdiv\u003E\u003Cdiv\u003Eиз ДСП\u003Cinput id=\"dsp\" checked type=\"radio\" name=\"material\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003Eиз дерева\u003Cinput id=\"tree\" type=\"radio\" name=\"material\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cinput id=\"height\" type=\"number\" placeholder=\"укажите высоту (см)\"\u003E\u003Cinput id=\"width\" type=\"number\" placeholder=\"укажите ширину (см)\"\u003E\u003Cinput id=\"length\" type=\"number\" placeholder=\"укажите длину (см)\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./color.pug */ "./src/html/constructor/color.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv\u003ELED-фитолампа\u003Cinput id=\"led\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EСистема климат-контроля\u003Cinput id=\"climat\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EДвери с доводчиками\u003Cinput id=\"door\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EСистема авто-полива или гидропоники\u003Cinput id=\"water\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EСистема SCROG\u003Cinput id=\"scrog\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EТаймер для периодичного включения-выключения лампы\u003Cinput id=\"timer\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EPPM-метр\u003Cinput id=\"ppm\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EУльтразвуковой увлажнитель воздуха\u003Cinput id=\"air\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EPH-метр\u003Cinput id=\"ph\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EЗамок на ключе\u003Cinput id=\"lock\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EТермометр\u002Fгигрометр\u003Cinput id=\"termometr\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EУгольный фильтр\u003Cinput id=\"coal\" type=\"checkbox\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/cross.pug":
/*!****************************!*\
  !*** ./src/html/cross.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"cross\"\u003E\u003Cdiv class=\"cr cr-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cr cr-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/footer/footer.pug":
/*!************************************!*\
  !*** ./src/html/footer/footer.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cfooter\u003E\u003Cdiv class=\"pict\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/footer.jpg */ "./src/img/footer/footer.jpg"), true, true)+" alt=\"growbox\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"Address\"\u003EUkraine, Kaniv\u003C\u002Fdiv\u003E\u003Cdiv class=\"mail\"\u003Eorionlights@gmail.com\u003C\u002Fdiv\u003E\u003Cdiv class=\"tel\"\u003E(093) 98 18 447\u003C\u002Fdiv\u003E\u003Cul class=\"social\"\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Ffacebook.com\u002Fhorticulturelights\" target=\"_blank\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/facebook.png */ "./src/img/footer/facebook.png"), true, true)+" alt=\"facebook\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Finstagram.com\u002Forion_lights\" target=\"_blank\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/instagram.png */ "./src/img/footer/instagram.png"), true, true)+" alt=\"instagram\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"me\"\u003E\u003Ca href=\"https:\u002F\u002Fwww.facebook.com\u002Fbringmetheaugust\" target=\"_blank\"\u003Emade by BringMeTheAugust\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"polygon\" id=\"basket\"\u003E\u003Cimg" + (" class=\"hidden\""+pug.attr("src", __webpack_require__(/*! ../../img/header/basket.png */ "./src/img/header/basket.png"), true, true)+" alt=\"basket\"") + "\u003E\u003Cdiv id=\"count\"\u003E0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/header/header.pug":
/*!************************************!*\
  !*** ./src/html/header/header.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader\u003E\u003Cdiv class=\"title-wrap polygon\"\u003E\u003Cdiv class=\"title hidden\"\u003Egrow-box.com\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"des-wrap polygon\"\u003E\u003Cdiv class=\"des hidden\"\u003EМы - команда молодых единомышленников и профессионалов своего дела,\nзанимаемся профессиональным производством \u003Ch1\u003Eгроубоксов\u003C\u002Fh1\u003E, \nоранжерей открытого\u002Fзакрытого типа из различных материалов,\nпод Ваш интерьер. Готовы воплотить в жизнь любые фантазии и проекты!\nМы - команда молодых единомышленников и профессионалов своего дела,\nзанимаемся профессиональным производством \u003Ch1\u003Eгроубоксов\u003C\u002Fh1\u003E, \nоранжерей открытого\u002Fзакрытого типа из различных материалов,\nпод Ваш интерьер. Готовы воплотить в жизнь любые фантазии и проекты!\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./nav.pug */ "./src/html/header/nav.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/header/nav.pug":
/*!*********************************!*\
  !*** ./src/html/header/nav.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/led/led.pug":
/*!******************************!*\
  !*** ./src/html/led/led.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"led\"\u003E\u003Cdiv class=\"description-wrap\"\u003E\u003Cdiv class=\"description\"\u003E\u003Cdiv\u003E\u003Cdiv\u003EЗдесь описание о LED лампах и т.д. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero totam fuga minus, repudiandae itaque amet sunt esse, ipsa nisi laudantium distinctio. Libero, neque iure ex inventore ullam facilis quibusdam magnam ab, possimus odit animi ipsam, repellat doloribus ducimus praesentium nemo, repellendus? Fugiat labore, aut. Corrupti distinctio doloribus, quia facilis mollitia fugiat expedita dignissimos consectetur! Ipsam deserunt non quaerat sed sunt tempora consequuntur odit officiis dolorem eius pariatur porro harum delectus, aut voluptate eaque consequatur inventore repellat, ad laboriosam adipisci. Aspernatur, minus! Aliquam saepe adipisci id neque laborum recusandae qui at aperiam incidunt quibusdam minima molestias explicabo consectetur, mollitia voluptas atque?\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"catalog-list\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./orion60.pug */ "./src/html/led/orion60.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./orion100.pug */ "./src/html/led/orion100.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./orion150.pug */ "./src/html/led/orion150.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Ful\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/led/orion100.pug":
/*!***********************************!*\
  !*** ./src/html/led/orion100.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cli\u003E\u003Ch3\u003Eorion100\u003C\u002Fh3\u003E\u003Cdiv class=\"des-wrapper\" data-product=\"100\"\u003E\u003Cdiv class=\"des polygon\"\u003E\u003Ch1\u003Eздесь должно быть краткое описание товара\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/led/orion100/5.png */ "./src/img/led/orion100/5.png"), true, true)+" alt=\"LED\"") + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/led/orion150.pug":
/*!***********************************!*\
  !*** ./src/html/led/orion150.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cli\u003E\u003Cdiv class=\"des-wrapper\" data-product=\"150\"\u003E\u003Cdiv class=\"des polygon\"\u003E\u003Ch1\u003Eздесь должно быть краткое описание товара\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/led/orion150/7.png */ "./src/img/led/orion150/7.png"), true, true)+" alt=\"LED\"") + "\u003E\u003C\u002Fdiv\u003E\u003Ch3\u003Eorion150\u003C\u002Fh3\u003E\u003C\u002Fli\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/led/orion60.pug":
/*!**********************************!*\
  !*** ./src/html/led/orion60.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cli\u003E\u003Cdiv class=\"des-wrapper\" data-product=\"60\"\u003E\u003Cdiv class=\"des polygon\"\u003E\u003Ch1\u003Eздесь должно быть краткое описание товара\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/led/orion60/4.png */ "./src/img/led/orion60/4.png"), true, true)+" alt=\"LED\"") + "\u003E\u003C\u002Fdiv\u003E\u003Ch3\u003Eorion60\u003C\u002Fh3\u003E\u003C\u002Fli\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/main.pug":
/*!***************************!*\
  !*** ./src/html/main.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"uk\"\u003E\u003Chead\u003E\u003Clink rel=\"stylesheet\" href=\"style.css\"\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png"), true, true)+" type=\"image\u002Fx-icon\"") + "\u003E\u003Ctitle\u003Egrow box\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"splash\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./preloader.pug */ "./src/html/preloader.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"title\"\u003Eloading..\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cvideo" + (pug.attr("autoplay", true, true, true)+pug.attr("loop", true, true, true)+pug.attr("muted", true, true, true)+pug.attr("src", __webpack_require__(/*! ../img/video.mp4 */ "./src/img/video.mp4"), true, true)) + "\u003E\u003C\u002Fvideo\u003E" + (null == (pug_interp = __webpack_require__(/*! ./product/product.pug */ "./src/html/product/product.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./purchase/purchase.pug */ "./src/html/purchase/purchase.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./constructor/constructor.pug */ "./src/html/constructor/constructor.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv id=\"wrapper\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./header/header.pug */ "./src/html/header/header.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cmain\u003E" + (null == (pug_interp = __webpack_require__(/*! ./led/led.pug */ "./src/html/led/led.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./box/box.pug */ "./src/html/box/box.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fmain\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer/footer.pug */ "./src/html/footer/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cscript src=\"bundle.js\" type=\"text\u002Fjavascript\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/preloader.pug":
/*!********************************!*\
  !*** ./src/html/preloader.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"preloader\"\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product.pug":
/*!**************************************!*\
  !*** ./src/html/product/product.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003Eа здесь полное описание с фотками\u003Cdiv class=\"cross-wrap\" id=\"product-cross\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ../cross.pug */ "./src/html/cross.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/purchase/purchase.pug":
/*!****************************************!*\
  !*** ./src/html/purchase/purchase.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"purchase\"\u003Eа здесь будет корзина\u003Cdiv class=\"cross-wrap\" id=\"purchase-cross\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ../cross.pug */ "./src/html/cross.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/img/footer/facebook.png":
/*!*************************************!*\
  !*** ./src/img/footer/facebook.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA/pJREFUeJzt3b1LI0EYx/FnsxI1iChYKEK0S2NjFTBYW/jWW0e0svE/EDvB0tpKTGlnYW9jvQi+JHYmUWN8SwKRuebkODgDp7N5xvn9PjBwjeOT229mjyWngYgYIVgJ7QFIFwMAxwDAMQBwDAAcAwDHAMAxAHAMABwDAMcAwDEAcAzgP4VhKGEYao9hTY/2AK5JJpOSzWYlm83K9PS0TE5OSjqdluHhYenv75dE4s97pt1uS6vVkkajIW9vb/L8/Cz1el0eHx+lVqvJ3d2dVCoVKZVKcnBwoPiqOjPoK5FImMXFRVMoFMzT05Ox7eXlRf01dljqA6itMAzN2tqaKRaL1i86A3B85XI5E0VRrBeeATi4giAwW1tbpt1ud+XiMwCHVjKZNIeHh1278AzAoRWGoTk6Our6xXc9AJjnAHt7e7K0tKQ9hpPUK4x7raysqLzzf8IJEPz+g7fGxsbk/PxcBgcH1WZ4fX2VgYEBte/fife3gO3tbdWL7zqvT4BMJiNRFP31+FYDTwAlGxsb6hffdd6eAKlUSsrlshPvPJ4ACubm5pz9S3eJtwEsLy9rj/AjePt5gNnZ2Vj2NcbI5eWlXFxcSLValVarJcZ0vos2m81YZrFF/WGE7TUyMmL9YU61WjWbm5tmdHRU/fXZXF6eAFNTU1b3Ozs7k/n5ealUKlb3dYGX/waYmJiwttf9/b0sLCx4efFFPA0gnU5b22t3d1fK5bK1/VzjZQBDQ0PW9ioUCtb2cpGXAaRSKSv7PDw8yNXVlZW9XOVlAH19fVb2ubm5sbKPy7wMIAgCK/vU63Ur+7jMywBseX9/1x4hdgwAHAMAxwDAMQBwDAAcAwDHAMAxAHAMABwDAOfsJ4Ly+bz09HxtvEwmY2WG8fFxWV9f//Y+x8fHUiqVvj9QDJz9fwHNZlN6e3u1x7BiZmZGTk9Ptcf4J94CuqBYLGqP8CkGELNGoyG3t7faY3yKAcTM1Xv/BwYQM5ePfxEGEDsGAI4BgGMA4BgAuOvra+0ROmIAMarVas5/tJwBxMj141+EAcSKAYBjAOAYADgGAO4nBODsJ4JWV1e//OvZ8vm85HK5b88QRZHs7Ox8+etdfwbwQf0nVdle+/v7Vn4y2MnJifpriXvxFgCOAYBjAOAYADgGAI4BgGMA4BgAOAYAjgGAYwDgGAA4BgCOAYBjAOAYADgGAI4BgGMA4BgAOAYAjgGAYwDgGAA4BgCOAYBjAOAYADgGAI4BgGMA4BgAOAYAjgGAYwDgGAA4BgCOAYBjAOAYADgGAI4BgGMA4BgAOGd/fTx1B08AcAwAHAMAxwDAMQBwDAAcAwDHAMAxAHAMABwDAMcAwDEAcL8ADMUAfIJVRfAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/img/footer/footer.jpg":
/*!***********************************!*\
  !*** ./src/img/footer/footer.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer.jpg";

/***/ }),

/***/ "./src/img/footer/instagram.png":
/*!**************************************!*\
  !*** ./src/img/footer/instagram.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/header/basket.png":
/*!***********************************!*\
  !*** ./src/img/header/basket.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ "./src/img/led/orion100/5.png":
/*!************************************!*\
  !*** ./src/img/led/orion100/5.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.png";

/***/ }),

/***/ "./src/img/led/orion150/7.png":
/*!************************************!*\
  !*** ./src/img/led/orion150/7.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/7.png";

/***/ }),

/***/ "./src/img/led/orion60/4.png":
/*!***********************************!*\
  !*** ./src/img/led/orion60/4.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.png";

/***/ }),

/***/ "./src/img/video.mp4":
/*!***************************!*\
  !*** ./src/img/video.mp4 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04cff7053b3120967fc8a1e1be62cca8.mp4";

/***/ }),

/***/ "./src/js/constructorEngine/boxArea.js":
/*!*********************************************!*\
  !*** ./src/js/constructorEngine/boxArea.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcBoxArea; });
var height = document.getElementById('height');
var width = document.getElementById('width');
var length = document.getElementById('length');
var tree = document.getElementById('tree');
function calcBoxArea() {
  var sum = 0; //return calculated box area if all inputs are filled

  if (height.value && width.value && length.value) {
    sum += height.value * width.value * 2 + width.value * length.value * 2 + length.value * height.value * 2;
    return tree.checked ? sum * 5 : sum;
  }

  return 0;
}

/***/ }),

/***/ "./src/js/constructorEngine/boxEquipment.js":
/*!**************************************************!*\
  !*** ./src/js/constructorEngine/boxEquipment.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcBoxEquipment; });
var tree = document.getElementById('tree');
var coal = document.getElementById('coal');
var air = document.getElementById('air');
var lock = document.getElementById('lock');
var ph = document.getElementById('ph');
var ppm = document.getElementById('ppm');
var timer = document.getElementById('timer');
var scrog = document.getElementById('scrog');
var termometr = document.getElementById('termometr');
var water = document.getElementById('water');
var climat = document.getElementById('climat');
var door = document.getElementById('door');
var led = document.getElementById('led');
function calcBoxEquipment() {
  var equipment = 0;
  if (tree.checked) equipment *= 5;
  if (coal.checked) equipment += 1200;
  if (air.checked) equipment += 400;
  if (lock.checked) equipment += 140;
  if (ph.checked) equipment += 240;
  if (ppm.checked) equipment += 230;
  if (timer.checked) equipment += 300;
  if (scrog.checked) equipment += 280;
  if (termometr.checked) equipment += 180;
  if (water.checked) equipment += 1200;
  if (climat.checked) equipment += 400;
  if (door.checked) equipment += 200;
  if (led.checked) equipment += 500;
  return equipment;
}

/***/ }),

/***/ "./src/js/constructorEngine/colorSelect.js":
/*!*************************************************!*\
  !*** ./src/js/constructorEngine/colorSelect.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var colorList = document.querySelector('.color');
colorList.addEventListener('click', function (e) {
  if (e.target.localName == 'input' || e.target.localName == 'ul') return false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colorList.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      i.firstElementChild.classList.remove('checked');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  e.target.classList.add('checked');
});

/***/ }),

/***/ "./src/js/constructorEngine/main.js":
/*!******************************************!*\
  !*** ./src/js/constructorEngine/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSelect.js */ "./src/js/constructorEngine/colorSelect.js");
/* harmony import */ var _colorSelect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_colorSelect_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxArea.js */ "./src/js/constructorEngine/boxArea.js");
/* harmony import */ var _boxEquipment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxEquipment.js */ "./src/js/constructorEngine/boxEquipment.js");



var form = document.getElementById('form');
var count = document.getElementById('count');
form.addEventListener('input', function (e) {
  count.innerHTML = Object(_boxArea_js__WEBPACK_IMPORTED_MODULE_1__["default"])() / 100 + Object(_boxEquipment_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/documentScroll.js":
/*!**********************************!*\
  !*** ./src/js/documentScroll.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerChild = document.querySelector('header').children;
var description = document.querySelectorAll('.description');
var ledDescription = document.querySelector('.led').firstChild.firstChild;
document.addEventListener('scroll', function (e) {
  var pYO = window.pageYOffset; //move header items

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = headerChild[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      i.style.opacity = 20 / pYO;
      i.style.transform = "translateX(".concat(pYO * .5, "%) translateY(").concat(pYO, "px)");
    } //show descriptions

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = description[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _i = _step2.value;

      //element shoul be caught on center of screen
      if (_i.getBoundingClientRect().top + _i.clientHeight / 2 - window.innerHeight / 2 < 0) {
        _i.firstElementChild.classList.add('polygon');

        _i.firstElementChild.firstElementChild.classList.add('hidden');

        ledDescription.style.cssText = 'position: sticky; top: 30%';
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
});

/***/ }),

/***/ "./src/js/ledCatalogList.js":
/*!**********************************!*\
  !*** ./src/js/ledCatalogList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadLedSection; });
function loadLedSection(attr) {
  console.log(attr);
}
;

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
/* harmony import */ var _documentScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentScroll.js */ "./src/js/documentScroll.js");
/* harmony import */ var _documentScroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_documentScroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openSections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openSections.js */ "./src/js/openSections.js");
/* harmony import */ var _constructorEngine_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructorEngine/main.js */ "./src/js/constructorEngine/main.js");




 // import sliderConstructor from './sliderConstructor/main.js';

var splash = document.getElementById('splash'); // import boxes from './DB/box.js';
// alert(navigator.language||navigator.browserLanguage);
// console.log(navigator.language);

window.addEventListener('load', function () {
  splash.style.opacity = '0';
  setTimeout(function () {
    return splash.remove();
  }, 2000);
});

/***/ }),

/***/ "./src/js/openSections.js":
/*!********************************!*\
  !*** ./src/js/openSections.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ledCatalogList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ledCatalogList.js */ "./src/js/ledCatalogList.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var body = document.body; //open and/or load LED catalog

[].concat(_toConsumableArray(document.querySelectorAll('.des-wrapper')), [document.getElementById('product-cross')]).forEach(function (i) {
  return i.addEventListener('click', function (e) {
    body.classList.toggle('led');

    if (e.currentTarget.className == 'des-wrapper') {
      Object(_ledCatalogList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e.currentTarget.getAttribute('data-product'));
    }
  });
}); //open purchase

[document.getElementById('basket'), document.getElementById('purchase-cross')].forEach(function (i) {
  return i.addEventListener('click', function (e) {
    return body.classList.toggle('purchase');
  });
}); //open constructor

[document.getElementById('constructor'), document.getElementById('constructor-cross')].forEach(function (i) {
  return i.addEventListener('click', function (e) {
    return body.classList.toggle('constructor');
  });
});

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