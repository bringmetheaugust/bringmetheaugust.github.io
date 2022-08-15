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

/***/ "./src/html/about/about-wrap-des.pug":
/*!*******************************************!*\
  !*** ./src/html/about/about-wrap-des.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv id=\"about-wrap-des\"\u003E\u003Cdiv class=\"button\" id=\"button-left\" onclick=\"slide(1)\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/arrow.png */ "./src/img/about/arrow.png"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"describes\"\u003E\u003Cdiv class=\"d-0\"\u003EJe m'appelle Julyen et je suis la fondatrice de cette petite entreprise qui travaille dur. Nous aimons notre travail et nous espérons qu'un jour Kaniv sera emporté de la surface de la terre\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-1\"\u003ENotre est un assortiment de recettes modernes et anciennes, qui chaque fois confirment notre valeur avec les commentaires de nos clients\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-2\"\u003ENous avons sélectionné avec beaucoup de vigilance les fournisseurs, et même après chaque vérification minutieuse de la qualité de chaque ingrédient\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-3\"\u003Eа это просто котик, который так же устал, как и я..\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-4\"\u003ENous livrons nos produits sous forme congelée et garantissons son stockage après livraison pendant une semaine\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"button\" id=\"button-right\" onclick=\"slide(-1)\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/arrow.png */ "./src/img/about/arrow.png"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/about/about-wrap-pict.pug":
/*!********************************************!*\
  !*** ./src/html/about/about-wrap-pict.pug ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv id=\"about-wrap-pict\"\u003E\u003Cdiv class=\"pict-curtain left\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pict-curtain right\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-0\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/picasso.png */ "./src/img/about/picasso.png"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-1\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/malevich.png */ "./src/img/about/malevich.png"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/cook.jpeg */ "./src/img/about/cook.jpeg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-3\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/perov.png */ "./src/img/about/perov.png"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-4\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/about/cat.jpg */ "./src/img/about/cat.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/about/about.pug":
/*!**********************************!*\
  !*** ./src/html/about/about.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection id=\"about\"\u003E\u003Cdiv class=\"title\"\u003EComment faisons-nous cela?\u003C\u002Fdiv\u003E\u003Cdiv id=\"about-wrap\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./about-wrap-pict.pug */ "./src/html/about/about-wrap-pict.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./about-wrap-des.pug */ "./src/html/about/about-wrap-des.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/footer/describe.pug":
/*!**************************************!*\
  !*** ./src/html/footer/describe.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"describe\"\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Cul\u003E\u003Cli\u003E+33(041)-19-71-131\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cdiv class=\"picts\"\u003E\u003Ca href=\"https:\u002F\u002Fwww.facebook.com\u002Fprofile.php?id=100001068040851\" target=\"_blank\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/facebook.png */ "./src/img/footer/facebook.png"), true, true)) + "\u003E\u003C\u002Fa\u003E\u003Ca href=\"tg:\u002F\u002Fresolve?domain=AnyaKarusel\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/telegram.png */ "./src/img/footer/telegram.png"), true, true)) + "\u003E\u003C\u002Fa\u003E\u003Ca href=\"skype:arapaz4?chat\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/footer/skype.png */ "./src/img/footer/skype.png"), true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cul\u003E \u003Cli\u003EÎle-de-France\u003C\u002Fli\u003E\u003Cli\u003EBarbizon 77630\u003C\u002Fli\u003E\u003Cli\u003Erue Gabriel Seailles, 19\u003C\u002Fli\u003E\u003Cli id=\"for-map\"\u003ECliquez pour voir sur google map\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ca href=\"https:\u002F\u002Fbringmetheaugust.github.io\u002F\" target=\"_blank\"\u003Emade by\u003Cbr\u003EBringMeTheAugust\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/footer/footer.pug":
/*!************************************!*\
  !*** ./src/html/footer/footer.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cfooter\u003E\u003Cdiv class=\"picture\"\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Ciframe src=\"https:\u002F\u002Fwww.google.com\u002Fmaps\u002Fembed?pb=!1m18!1m12!1m3!1d2646.502982552488!2d2.6147660638227155!3d48.44687813451427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5f21db77d7183%3A0xdffba900e45df6f5!2s19+Rue+Gabriel+S%C3%A9ailles%2C+77630+Barbizon%2C+France!5e0!3m2!1sen!2sua!4v1535835575509\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\u003Cdiv class=\"img\" id=\"map\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./describe.pug */ "./src/html/footer/describe.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Ffooter\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/header/header.pug":
/*!************************************!*\
  !*** ./src/html/header/header.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader\u003E\u003Cdiv class=\"picture\"\u003E\u003Cdiv class=\"img-wrap show\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cdiv class=\"img\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"describe\"\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain show\"\u003E\u003C\u002Fdiv\u003E\u003Cul id=\"links\"\u003E\u003Cli\u003E \u003Ca href=\"#product\"\u003EVoulez-vous acheter?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#about\"\u003EVoulez-vous en savoir plus sur nous?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#footer\"\u003EVoulez-vous nous contacter?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/main.pug":
/*!***************************!*\
  !*** ./src/html/main.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003C!DOCTYPE html\u003E\u003Chtml lang=\"fr\"\u003E\u003Chead\u003E\u003Clink rel=\"stylesheet\" href=\"style.css\"\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"keywords\" content=\"acheter, commande, boulettes, la nourriture, Barbizon\"\u003E\u003Cmeta name=\"description\" content=\"Essayez les raviolis maison, la livraison de nourriture à Barbizon et à proximité chez vous.\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png"), true, true)+" type=\"image\u002Fx-icon\"") + "\u003E\u003Ctitle\u003EBoulettes maison\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"wrapper\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./header/header.pug */ "./src/html/header/header.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv id=\"empty-1\"\u003E\u003Cdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ca id=\"product\"\u003E\u003C\u002Fa\u003E" + (null == (pug_interp = __webpack_require__(/*! ./product/product.pug */ "./src/html/product/product.pug").call(this, locals)) ? "" : pug_interp) + "\u003Ca id=\"about\"\u003E\u003C\u002Fa\u003E" + (null == (pug_interp = __webpack_require__(/*! ./about/about.pug */ "./src/html/about/about.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv id=\"empty-2\"\u003E\u003Cdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ca id=\"footer\"\u003E\u003C\u002Fa\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer/footer.pug */ "./src/html/footer/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cscript src=\"bundle.js\" type=\"text\u002Fjavascript\"\u003E\u003C\u002Fscript\u003E" + (null == (pug_interp = __webpack_require__(/*! ./script.pug */ "./src/html/script.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-1.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-1.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p1.jpg */ "./src/img/product/p1.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003ESeberian boulettes\u003C\u002Fh2\u003ELes boulettes de viande de Sibérie sont précieuses pour leur viande hachée à la viande de mouton et sa technologie de cuisson, qui consiste à faire rôtir la viande avec les légumes.\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E12&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-2.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-2.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003EBoulettes de mer\u003C\u002Fh2\u003ELa farce de poisson dans n'importe quel plat traduit la grandeur de tous les produits marins. Le poisson soigneusement cuit n'a pas de noyau et les épices de la mer ne font que souligner sa \"lignée de mer\".\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E10&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p2.jpg */ "./src/img/product/p2.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-3.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-3.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p3.jpg */ "./src/img/product/p3.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003EDumplings au fromage\u003C\u002Fh2\u003EDans les boulettes de fromage, toute l’attention est portée sur la densité de la pâte et sa torréfaction, afin que le fromage puisse littéralement bouillir pendant la cuisson et même le réchauffement.\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E8&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-4.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-4.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003EBoulettes de pâte ukrainiennes\u003C\u002Fh2\u003ELes raviolis ukrainiens sont impressionnants par leurs dimensions. n'est-ce pas? J'ignore la sophistication et le raffinement, il n'y a pas un seul Français qui aurait la moindre sympathie pour ce plat.\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E11&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p4.jpg */ "./src/img/product/p4.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-5.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-5.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p5.jpg */ "./src/img/product/p5.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003EBoulettes classiques\u003C\u002Fh2\u003ELes boulettes classiques sont des boulettes classiques. Les classiques du plat inspirent confiance dans la culture centenaire de ce produit et découragent tout doute sur son autorité.\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E10&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product-6.pug":
/*!****************************************!*\
  !*** ./src/html/product/product-6.pug ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"product\"\u003E\u003Cdiv class=\"describe-wrap\"\u003E\u003Cdiv class=\"describe-curtain\"\u003E\u003C\u002Fdiv\u003E\u003Ch2\u003ERagoût de ravioli\u003C\u002Fh2\u003ECe chef-d'œuvre comprend un mélange de cuisson à chaud et à froid, où, bien entendu, l’attraction principale est les raviolis, dont le rôle s’intègre parfaitement dans la composition.\u003Cdiv class=\"price\"\u003E\u003Cspan\u003E10&#8364; \u003C\u002Fspan\u003Epar kg\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"img-wrap\"\u003E\u003Cimg" + (" class=\"shadow\""+pug.attr("src", __webpack_require__(/*! ../../img/shadow.png */ "./src/img/shadow.png"), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/product/p6.jpg */ "./src/img/product/p6.jpg"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/product/product.pug":
/*!**************************************!*\
  !*** ./src/html/product/product.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection id=\"product\"\u003E\u003Cdiv class=\"title\"\u003EComment pouvons-nous vous nourrir?\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./product-1.pug */ "./src/html/product/product-1.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./product-2.pug */ "./src/html/product/product-2.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./product-3.pug */ "./src/html/product/product-3.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./product-4.pug */ "./src/html/product/product-4.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./product-5.pug */ "./src/html/product/product-5.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./product-6.pug */ "./src/html/product/product-6.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/html/script.pug":
/*!*****************************!*\
  !*** ./src/html/script.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cscript\u003E\u002F\u002Fslider engine\nconst aboutPicts = document.querySelectorAll('#about-wrap-pict\u003E*:not(.pict-curtain)');\nconst des = document.querySelector('.describes');\nlet count = 0;\nconst initial = des.firstChild.innerHTML;\nfunction slide(n){\n\tfor(let i of aboutPicts){\n\t\tlet a = +i.getAttribute('class')[2]+n;\n\t\tif(a\u003C0)a=4;\n\t\tif(a\u003E4)a=0;\n\t\ti.setAttribute('class', `p-${a}`);\n\t};\n\tcount+=n;\n\tif(count\u003C0)count=4;\n\tif(count\u003E4)count=0;\n\tcount==0?des.firstChild.innerHTML=initial:des.firstChild.innerHTML = des.children[count].innerHTML;\n};\u003C\u002Fscript\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/img/about/arrow.png":
/*!*********************************!*\
  !*** ./src/img/about/arrow.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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UmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REI0NDZFNjg0MEUxMUU3OUYwNkJDMTI2MDhBMEFDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REI0NDZFNzg0MEUxMUU3OUYwNkJDMTI2MDhBMEFDMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdEQjQ0NkU0ODQwRTExRTc5RjA2QkMxMjYwOEEwQUMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdEQjQ0NkU1ODQwRTExRTc5RjA2QkMxMjYwOEEwQUMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+a8PIuQAAANtJREFUeNpiZKA+YAHiIiDuAnH+///PMJwAExXNEgHi5UD8DYg7gViaYRgCagSYFhAfBOKXQOwAxLlQ8aejAYYKnIH4ChSLArE3EEsC8UyGYQzICbB0aOrZBcRvgVgHmsp2MIwClIIcVIh/AuJf0LJKBI96eEkPKvSHEya2IP8FDawuaOARAiMuwGAF+V8gfgbNhqSAYRtgTEQU5FLDvSAnp9AfLchJAMQW5GRlyeEGGIez54YSGLaRwELtzjEjIyMDcg052tIfrSVHwWiAjQbYaICNBthIAQABBgAqlQJbjqMKJAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/about/cat.jpg":
/*!*******************************!*\
  !*** ./src/img/about/cat.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat.jpg";

/***/ }),

/***/ "./src/img/about/cook.jpeg":
/*!*********************************!*\
  !*** ./src/img/about/cook.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cook.jpeg";

/***/ }),

/***/ "./src/img/about/malevich.png":
/*!************************************!*\
  !*** ./src/img/about/malevich.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/malevich.png";

/***/ }),

/***/ "./src/img/about/perov.png":
/*!*********************************!*\
  !*** ./src/img/about/perov.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perov.png";

/***/ }),

/***/ "./src/img/about/picasso.png":
/*!***********************************!*\
  !*** ./src/img/about/picasso.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/picasso.png";

/***/ }),

/***/ "./src/img/footer/facebook.png":
/*!*************************************!*\
  !*** ./src/img/footer/facebook.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAPVCAMAAACwVlITAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAspQTFRF////6OjopqamampqQUFBGxsbDw8PAAAADg4OGRkZPj4+Z2dno6Oj5ubm+/v7p6enRUVFAgICQkJCpKSk/v7+oqKiIiIiISEhoKCg3NzcPT09ra2tlZWVAQEBjY2NlpaWkJCQr6+vEBAQ3d3dQEBApaWl/Pz8JCQkIyMjqKioR0dHAwMD6urqqampbGxsQ0NDHR0dHx8fDQ0NCwsLKysrPDw8REREUFBQVVVVXFxcZmZmaWlpd3d3aGhoWFhYUlJSMzMzKioqRkZGYGBgfn5+ubm5ycnJ2dnZ6enp+vr63t7em5ubEhISOjo6YmJig4ODu7u71tbW8/PzXl5eBAQEJSUlTU1NdXV1w8PD6+vrxcXFCAgINjY2nZ2d0NDQ8fHxTk5OBwcHNTU1z8/PWlpaCgoKhYWF+Pj4OTk5CQkJOzs7NDQ0gICAwsLC+fn5uLi4SkpKmJiY5OTkTExMFhYWYWFhrq6u9PT0x8fHbm5u/f39LS0tWVlZtLS0goKC8vLyxMTEJycni4uL5eXlurq639/fKSkpzc3NBQUFXV1dBgYG2tradHR0qqqqMTEx4uLiHh4et7e37e3tnJycysrK7u7utra2LCws4eHh8PDwf39/n5+frKyssbGxwMDAtbW1j4+Pa2trW1tbJiYm1NTUGhoavLy8Pz8/FRUVs7OzeHh4ODg41dXVioqKMjIy09PTLy8venp6HBwcbW1t7OzsmpqaLi4uwcHByMjIKCgoiYmJ7+/vzs7OVFRUq6urDAwM9vb2srKygYGBy8vL5+fn2NjYS0tLExMTfX199/f3GBgYcHBwICAgoaGh0tLS4+PjiIiI0dHReXl5ERERmZmZl5eX9fX1np6evr6+SUlJU1NTv7+/xsbGZGRkc3Nzh4eHjIyMkZGRsLCwVlZWdnZ2FxcXZWVlX19fcXFxhoaGkpKSk5OTMDAw////EiDIugAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAACXBIWXMAAABIAAAASABGyWs+AAAaHklEQVR42u3dj9/vdV3f8csMhHTIUTASjiEgmzu6FJUQcWqu8OeGivmDxIERI81YIAZOqTBFTW0qlT+y1HQu5kyt/Woua6a5GbPNXMu1Tbe2te2PmK9z+H2u67yv65zrxuv9fnK//wXv8/q8HrdzfX99Phsbd3Gfb7vvtx919P2AJRxz7Hfc/wF/aWNLxz3w+D3dZwR2as+DHnzcpkmfcOJDus8GHJ7vPOmEg5v+ru/oPhZw+B76XXdv+mQvpGFpx5x816ZP8WIaFrf3YXdu+ru7jwMcuVPv9Le3/6chwJ6H3/4emdfTEOG002/9LMv73hDijAOfbJ3YfQ5gtzyimj7zL3cfA9gtf6W+W/bA7lMAu+eR34r6+O5DALvnr25s3Gdf9yGA3bPvURvf1n0GYDc9euO+3UcAdtNf2zij+wjAbvqejcd0HwHYTY/dOKv7CMBuOnrDbzkgyp6N7hMAu0vUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbUEEbULOpxRz3+CWd/7znnPPHcc5903rY8+dyhv37OyFPOfupp3f/0AVGzkGOe9n1P/xunPPr7f+D8Zzxzo8+znv09e7pHcQiiZgHPee7f/FsnXfC85zeGfDfnv2Bv91C2JGpmduELf/BFz37xS7oT3sxLX9g9nK2Imkld9EP3fdnFnX9kj7z8b3ePaAuiZj6XXPrkZ79i5p4POO6Huwe1OVEzl8uO/5GXzt/zAZf/ne5pbUrUzOOKHz3vgsu7S92J+zyme2SbETVz2PvKV/3Yq7sj3bEf7x7bZkTNBC668u/+RHefh+eq7tFtQtR0u/o117y2u83D9pPd09uEqGl19bUvva47zCPyuu4JHkzU9Lns773+uO4oj9Qbuod4MFHTZN/ZJ13fXeQu+KnuOR5M1LT46Z+5oTvH3fH8+b4DLmruefu+940ndMe4a47tnuZBRM097erzfrY7xN30pu55HkTU3LOe+4j1vmJySE/tnuhBRM09aM85b+5uUNSwe258y/O6CxQ17J63vuVt3f2JGnbP465d9MvdoobNXPRzU96RSNRwePaec3p3eaKGXXR23jveoube7Glv765O1LCLjjpp7R9WihruYs+5L+9OTtSwi97xA93BiRp20dGnntndm6hhF131zu7aRA276Of/fndroobddM67ulMTNeyi0x7cHZqoYTcdn/rTDVFz73TFqTm3HxM13O9+l57fHZmoRc1uOjfsBmSi5l7uond3Fybq+4maXfTz7+kOTNRF1OyWK2/q7kvU+4ma3bH3vPgfWYqae5WzfqE7LlHfRtTshmOzb1kkau51fvGXutMS9R1EzZE7+73dZYn6TkTNEXv6M7vDEvWdiZojtPd93VmJ+q5EzZHZ9/7uqkR9N6LmiOw7sTuqbqImy40f6G6qnaiJ8taHdyfVT9QkueSXu4uagKgJctkbu4OagajJcdkHu3uagqiJceOvdOc0B1GTYs8Du2uahKhJ8avdMc1C1IR4Q3dL0xA1GT7UndI8RE2ED99Lb120GVGT4Ph79W8t70bUBPjIvfO2oVsQNes75te6O5qKqFnevtd3ZzQXUbO8U7srmoyoWd3TuyOajahZ3I9e3h3RbETN2j76jO6GpiNqlrbnY90JzUfULO1V3QVNSNSs7B+c2V3QhETNwj5+Q3dAMxI169r7D7v7mZKoWdevd+czJ1GzrJv9NGtTomZVl/yj7nomJWpW9YnueGYlahb1j4/rjmdWomZNl3yyu51piZo1/Uh3OvMSNUv6De98b0nUrOjCN3eXMzFRs6JPdYczM1GzoE+/tjucmYmaBT2yu5upiZr1POGE7m6mJmqWs+/i7mzmJmqW85nuaiYnalbznN/srmZyomY1v9UdzexEzWL+iYfWDoiaxfxydzPTEzVreaWPs0ZEzVou6E5mfqJmKQ/tLmYBomYp/7S7mAWImpVc2R3MCkTNQva+pzuYFYiahTylu5cliJqF/LPuXpYgatZxRncuaxA16/iV7lzWIGqW8c9963tbRM0y3t9dyyJEzSo++uruWhYhalbxL7pjWYWoWcRZv90dyypEzSKu7W5lGaJmEZ5yuV2iZg3P7U5lHaJmDT7P2jZRs4SjPT1r20TNEu7bXcpCRM0S/mV3KQsRNSu4tDuUlYiaFXgqxw6ImgVccX13KCsRNQv4bHcnSxE1C/hX3Z0sRdTM73c+193JUkTN/D7cnclaRM38frc7k7WImumddnl3JmsRNdN7TXclixE10/vx7koWI2pm95zjuitZjKiZ3Q93R7IaUTO7B3RHshpRM7k9z+iOZDWiZnI3dzeyHFEzud/rbmQ5omZy/7q7keWImrld7VGXOyVq5vb07kTWI2rm9ujuRNYjaqa29yXdiaxH1Ezt8d2FLEjUTO3J3YUsSNRM7RHdhSxI1Eztnd2FLOgd3RftIKLmDt/ZHciKXth91Q4iau7wlu5AVnR091U7iKi5w7O7A1nQ57sv2sFEzR1+v7uQBZ3cfdEOJmpud/UJ3YUs6P7dV+1gouZ2X+gOZEGv/mL3VTuYqLndH3QXsqB3d1+0TYia253cXch6vvSQ7ou2CVFzu9O7E1nP+7qv2WZEzW1O8z7ZTv3kjd0XbTOi5jZndCeynNP/Tfc125Souc2/7W5kNW/7cvcl25youc0fdkeymDd+vPuKbUHU3OaW7kqW8t7P7Om+YFsRNbe6yJPxtu/zb/hi9/Xamqi51W90h7KI1/67j33l7H3dV+tQRM2tPttdyy571B99/wN+9d+/5qqbn/q0hzzki//hrO753nNEza0+1V3hrrnhgq9ee/acnzbdI0TNrd7f3eJuuPxjr/q+Y7on2U3U3OqnuoM8Ys/446se1z3FGYiaWy3+YOqv/ccHTf3u1T1I1BxwWneVR+RZnzmte4DzEDUHXNrd5RH4/Sde2D2+mYiaAz7cXeZhu+m8S7qHNxdRc8Cruts8XG+f9SvYbUTNAQ/ojvPwvPez3YObj6g54E+68zwst8z3fIx+ouaA87v7PBx/Mt/jMSYgag64vjvQw/Bw75BtRtTsd0x3oIfhAk1vStTs99Pdhe7cm30ndHOiZr8HdSe6Y/d5TPfMZiVq9lvuKbYn/KfukU1L1Oz3ou5Id+rU7onNS9Tsd2p3pDv0Ti+otyRq9nt0d6U79KfdA5uYqNnv692V7sx/7p7XzETNfq/oznRnju+e18xEzX7P6s50R17RPa6piZr9burudEee1D2uqYmasvfM7k534nPuXXQooqas9dXvl3WPa26ipny6u9MdeW73uOYmasrrujvdiZdM+7zJOYia8oTuUHfiwd3TmpyoKV/oDnUnXtA9rcmJmrLSDYJPOLZ7WpMTNeXPukvdgT/qHtbsRE15UnepO/Bb3cOanagp13aXugMf6h7W7ERN+S/dpe7AE7qHNTtRU369u9TtO8G9vgdETfmD7lS37/TuWU1P1JQ3dKe6fa/vntX0RE35r92pbt93d89qeqKm/LfuVLfvU92zmp6oKd/oTnX7fEl0RNSUP+5Odfu+vXtW0xM15avdqW7fR7pnNT1RUxaK+pjuWU1P1JR1or5ub/espidqyjpR/3b3qOYnaso6Uf9S96jmJ2rKOlHf0j2q+Ymask7UL+4e1fxETVkn6l/oHtX8RE1ZJ+pvdo9qfqKmrBP1B7pHNT9RU9aJ+pHdo5qfqCnrRO1O/kOipqwT9Undo5qfqCnrRP3u7lHNT9SUdaJ21+8hUVPWifqr3aOan6gpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogop7Xnsf84lPvKdd0tyrq3SPqSf3QJ95zeXc/3M3Xbvj6w658a/dqDIl6Rnv/+8Xd+8tW3vWJY7v3Y0DUE/rIj3UvLofy/P+xr3tFDknU8znn+u6tZeDrf969JIci6uk8+brulWXobY/tXpNDEPVsPnxC98KyDed/vHtRtibqybzuc93ryrZ8cN7X1aKey423dC8r2/Si7l3Zkqjncm33qrJdz/9o97JsRdRTueSG7lVl2x7WvS1bEfVUzuleVLbv5Vd0r8sWRD2Vdb6CzcbGZ7vXZQuinsm+m7r3lB2Y9bclop7JC7vXlJ24pXtftiDqmVzZvabsxJf2dC/M5kQ9kyd2ryk7clb3wmxO1DP5n91byo5M+htMUc/k3O4tZUcm/fqJqGci6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZkjUaxE1Q6Jei6gZEvVaRM2QqNciaoZEvRZRMyTqtYiaIVGvRdQMiXotomZI1GsRNUOiXouoGRL1WkTNkKjXImqGRL0WUTMk6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZkjUaxE1Q6Jei6gZEvVaRM2QqNciaoZEvRZRMyTqtYiaIVGvRdQMiXotomZI1GsRNUOiXouoGRL1WkTNkKjXImqGRL0WUTMk6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZkjUaxE1Q6Jei6gZEvVaRM2QqNciaoZEvRZRMyTqtYiaIVGvRdQMiXotomZI1GsRNUOiXouoGRL1WkTNkKjXImqGRL0WUTMk6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZkjUaxE1Q6Jei6gZEvVaRM2QqNciaoZEvRZRMyTqtYiaIVGvRdQMiXotomZI1GsRNUOiXouoGRL1WkTNkKjXImqGRL0WUTMk6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZkjUaxE1Q6Jei6gZEvVaRM2QqNciaoZEvRZRMyTqtYiaIVGvRdQMiXotomZI1GsRNUOiXouoGRL1WkTNkKjXImqGRL0WUTMk6rWImiFRr0XUDIl6LaJmSNRrETVDol6LqBkS9VpEzZCo1yJqhkS9FlEzJOq1iJohUa9F1AyJei2iZuh/dW8pO3J198JsTtQzeUr3lrIjF3UvzOZEPZN3dG8pO/Go7n3ZgqhncsWru/eUHfhg975sQdRTeXH3nrIDv9e9LlsQ9VT+d/eesgOv7F6XLYh6Kld/qXtR2bZf696WrYh6Lqd0byrb9oLuZdmKqOdy9U3dq8o2XXxh97JsRdSTeUv3rrI9x93cvSpbEvVsvtq9rWzLz3UvytZEPZsLr+leV7bhlO49OQRRT+fCl3UvLEM/s7d7TQ5B1BP6s+u7d5ZDuv6J3StySKKe0VEnHde9t2zpukd+untBDk3Uc3rs+z7Zvbts6jdPeXz3coyIelp/fvy55/3FV+4hF3e3sm03vL3PA7/xoUv3de/FmKgp63yQ9rvdo5qfqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog4iaoqog4iaIuogoqaIOoioKaIOImqKqIOImiLqIKKmiDqIqCmiDiJqiqiDiJoi6iCipog6iKgpog6ysaf7BMxA1Dn2bPxO9xGYgahznLZxVPcRmIGoc3x546HdR2AGos5x9sb9u4/ADESd4zMbJ3YfgRmIOscHNm7w9jeiDnLjuzY2zug+BBMQdYyrvjUkf38j6iDXfGtIz/xy9ynoJ+oUb7qupvSy7mPQT9Qprtk/petu7j4H7UQd4spbx/S2s7pPQjdRZ/j4T9w2p0fs7T4LzUQd4cYL7hjUV7oPQzNRJ9j7/jtP6i/8X33vJuoAN/7hXUd14mXdJ6KTqNd39cfuPqtPvqP7TDQS9fK+cMPBwzrz/1zdfSzaiHpxj//m5uP62v/9f91Ho4moV3bjD37zuq0n9rxv/Omb3tp9RO55ol7UaY89+9qT3zUe22s/fzr3Mi/vbpXd8/8B8XZVS9gJ/Y4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMTJUMDM6MzU6MDgrMDg6MDC2ICO/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA0LTE2VDE1OjI4OjE4KzA4OjAwteDf8AAAAFR0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9kYi9zdmdfaW5mby9zdmcvNGUvODUvNGU4NWZhM2E3YmI2NGZmZmRlMzMwN2NhNzJmMmFlYjUuc3ZnblMq1AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/footer/skype.png":
/*!**********************************!*\
  !*** ./src/img/footer/skype.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/img/footer/telegram.png":
/*!*************************************!*\
  !*** ./src/img/footer/telegram.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/telegram.png";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ "./src/img/product/p1.jpg":
/*!********************************!*\
  !*** ./src/img/product/p1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p1.jpg";

/***/ }),

/***/ "./src/img/product/p2.jpg":
/*!********************************!*\
  !*** ./src/img/product/p2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p2.jpg";

/***/ }),

/***/ "./src/img/product/p3.jpg":
/*!********************************!*\
  !*** ./src/img/product/p3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p3.jpg";

/***/ }),

/***/ "./src/img/product/p4.jpg":
/*!********************************!*\
  !*** ./src/img/product/p4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p4.jpg";

/***/ }),

/***/ "./src/img/product/p5.jpg":
/*!********************************!*\
  !*** ./src/img/product/p5.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p5.jpg";

/***/ }),

/***/ "./src/img/product/p6.jpg":
/*!********************************!*\
  !*** ./src/img/product/p6.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/p6.jpg";

/***/ }),

/***/ "./src/img/shadow.png":
/*!****************************!*\
  !*** ./src/img/shadow.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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



const links = document.getElementById('links');
const forMap = document.getElementById('for-map');
const map = document.getElementById('map');
const empty2 = document.getElementById('empty-2');
const empty1 = document.getElementById('empty-1');
const wrapper = document.getElementById('wrapper');
const imgs = document.querySelectorAll('.img-wrap');
const describes = document.querySelectorAll('.describe-wrap');
const title = document.querySelectorAll('.title');

//media for .product (max-width : 425px)
window.addEventListener('resize', function(){
	const arr = document.querySelectorAll('.product:nth-child(odd');
	if(window.innerWidth<425){
		for(let i of arr){
			i.firstChild.style.order=1;
		};
	};
	if(window.innerWidth>425){
		for(let i of arr){
			i.firstChild.style.order='';
		};
	}
});
//clickability for header's menu
setTimeout(()=>{
	document.querySelector('header').children[1].firstChild.firstChild.style.zIndex='-1';
},4000);
//show Google map on footer
forMap.addEventListener('click',()=>{
	map.style.opacity='0';
	setTimeout(()=>{
		map.style.zIndex='-1';
	},1000);
});
document.addEventListener('scroll', function(){
	//paralax for #empty1
	let a = window.pageYOffset;
	empty1.firstChild.style.transform=`translateY(${a/5}px)`;
	//animation for #empty2
	if(empty2.getBoundingClientRect().top-window.innerHeight<0){
		empty2.firstChild.style.transform='scale(1)';
	};
	//show images
	for(let i of imgs){
		if(i.getBoundingClientRect().bottom<window.innerHeight){
			i.classList.add('show');
		}
	};
	//show describe's blocks
	for(let i of describes){
		if(i.getBoundingClientRect().bottom<window.innerHeight){
			i.firstChild.classList.add('show');
			setTimeout(()=>{
				i.firstChild.style.zIndex='-1';
			},5000);
		};
	};
	//show titles of all sections
	for(let i of title){
		if(i.getBoundingClientRect().bottom<window.innerHeight){
			i.classList.add('show');
		};
	};
});
//animate nav links
links.addEventListener('click', function(e){
	e.preventDefault();
	let link = document.getElementById(e.target.getAttribute('href').slice(1));
	let c = link.getBoundingClientRect().top;
	window.scrollBy(0,c);
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