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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Clink rel=\"stylesheet\" href=\"style.css\"\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png"), true, true)+" type=\"image\u002Fx-icon\"") + "\u003E\u003Ctitle\u003ECOOL GAME :3\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv id=\"alert\"\u003E\u003Cdiv class=\"title\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton\u003E\u003Cdiv\u003Eb\u003C\u002Fdiv\u003E\u003Cdiv\u003Ea\u003C\u002Fdiv\u003E\u003Cdiv\u003Ec\u003C\u002Fdiv\u003E\u003Cdiv\u003Ek\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game-field-wrap\"\u003E\u003Cdiv id=\"game-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"count\"\u003Eвремя до окончания :&nbsp;\u003Cspan id=\"count\"\u003E0\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform id=\"settings\"\u003E\u003Clabel\u003Eselect grid density\u003Cinput id=\"density\" type=\"number\"\u003E\u003C\u002Flabel\u003E\u003Clabel\u003Eselect time for pictures hiding (sec)\u003Cinput id=\"hiding\" type=\"number\"\u003E\u003C\u002Flabel\u003E\u003Clabel\u003Eselect game time (sec)\u003Cinput id=\"time\" type=\"number\"\u003E\u003C\u002Flabel\u003E\u003Cbutton id=\"play\"\u003E\u003Cdiv class=\"play\"\u003E\u003Cdiv\u003Ep\u003C\u002Fdiv\u003E\u003Cdiv\u003El\u003C\u002Fdiv\u003E\u003Cdiv\u003Ea\u003C\u002Fdiv\u003E\u003Cdiv\u003Ey\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"abort\"\u003E\u003Cdiv\u003Es\u003C\u002Fdiv\u003E\u003Cdiv\u003Et\u003C\u002Fdiv\u003E\u003Cdiv\u003Eo\u003C\u002Fdiv\u003E\u003Cdiv\u003Ep\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cscript src=\"bundle.js\" type=\"text\u002Fjavascript\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ "./src/img/pictures.js":
/*!*****************************!*\
  !*** ./src/img/pictures.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var pictures = [
	'https://gamer-mods.ru/avatar/94/291300.jpg',
	'https://www.autreplanete.com/ap-social-media-image-maker/ressources/img/img_format/youtube_avatar_200x200.png',
	'http://krasivie-avatarki.ru/images/200x200/5-krasnyy-grustnyy-smaylik-v-okruzhenii-zheltyh.jpg',
	'https://seagm-media.seagmcdn.com/icon_400/285.jpg?x-oss-process=image/resize,w_200',
	'https://ilko.ua/favicon/logo_2016-bw-200x200.png',
	'https://avatars.yandex.net/get-music-content/97284/4583694d.a.4229094-1/200x200',
	'http://pascalproject.com/fileadmin/introduction/images/pascal-logo-q-200x200.png',
	'http://kids.akb.ua/image/cache/catalog/tovar/Bebetto/bresso/503.32.18.w12-0-200x200.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6EHHpNmzFZVTcbaeLVgfReHOU0pxfNsqJ6fBN6j83nnazfvh',
	'https://www.aia.com.my/content/dam/my/en/images/logo/aia-logo-200x200.jpg',
	'https://f.discover.net.ua/user/1095/200x200-MVDIx.jpg',
	'https://avatars.yandex.net/get-music-content/113160/7aef9d66.a.5638405-1/200x200',
	'https://www.osvitapol.info/UserFiles/univ/68817_n-200x200.jpg',
	'https://cdn.interesniy.kiev.ua/wp-content/uploads/2014/06/ava-ik-200x200.png',
	'https://images.sota.kh.ua/cache/data/News/meizu-logo-sotakh-200x200.jpg',
	'https://worldskills.moscow/cache/front/users/36204/200x200.png',
	'http://www.kramatorskpost.com/wp-content/uploads/2018/11/alkostop-200x200.jpg',
	'http://ksf.openukraine.org/mediafiles/sites/ksf2018/images/speakers/thumbs/Nebor20182-tmb-200x200.jpg'
];

module.exports=pictures;

/***/ }),

/***/ "./src/js/cardFabric.js":
/*!******************************!*\
  !*** ./src/js/cardFabric.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var startCounter = __webpack_require__(/*! ./endModule.js */ "./src/js/endModule.js").startCounter;
var showStartImgs = __webpack_require__(/*! ./runModule.js */ "./src/js/runModule.js").showStartImgs;
var pictures = __webpack_require__(/*! ../img/pictures.js */ "./src/img/pictures.js");
var gameField = document.getElementById('game-field');

var newCardObject = function(img){
	var _img = img;
	this.getImg = function(){
		return _img;
	};
};

var newCard = function(obj, flexBasis){
	var div = document.createElement('div');
	div.get = obj;
	div.classList.add('card-wrap');
	// div.style.flexBasis=flexBasis+'%';
	return div
};

function runGame(settings){
	var cardsArray = pictures.slice(0, Math.pow(settings.density, 2) / 2).map(function(i){
		return Object.freeze(new newCardObject(i))
	});
	cardsArray = cardsArray.concat(cardsArray).sort(function(a, b){
		return Math.random() - Math.random()
	});
	cardsArray.forEach(function(i){
		gameField.appendChild(newCard(i, 100/settings.density));
	});
	gameField.style.gridTemplate = 'repeat('+ settings.density +', 1fr)/repeat('+ settings.density +', 1fr)';
	showStartImgs(settings.hiding);
	startCounter(settings.time);
	gs.gameState.play = true;
}

exports.runGame = runGame;

/***/ }),

/***/ "./src/js/endModule.js":
/*!*****************************!*\
  !*** ./src/js/endModule.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var alert = document.getElementById('alert');
var gameField = document.getElementById('game-field');
var counter = document.getElementById('count');
var interval;

function startCounter(time){
	var timer = time;
	// counter.innerHTML=--timer;
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
		return false
	}
	if(result !== 1){
		--gs.gameState.result;
		return false;
	}
	return gameOver(false)
}

function toRenderAlert(win){
	alert.classList.add('active');
	win ? alert.firstElementChild.innerHTML = 'you win !!!' : alert.firstElementChild.innerHTML = 'you lose :('
}

function gameOver(abort){
	toRenderAlert(abort ? false : true);
	while(gameField.children.length > 0){
		gameField.firstElementChild.remove();
	}
	clearInterval(interval);
	counter.innerHTML = '0';
	gs.gameState.result = undefined;
	gs.gameState.play = false;
	document.getElementById('play').classList.remove('abort');
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

var setInitialsettings = __webpack_require__(/*! ./startModule */ "./src/js/startModule.js").setInitialsettings;

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
	setInitialsettings(gameState.settings);
});

module.exports.gameState = gameState;

/***/ }),

/***/ "./src/js/runModule.js":
/*!*****************************!*\
  !*** ./src/js/runModule.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gameField = document.getElementById('game-field');
var checkGameState = __webpack_require__(/*! ./endModule */ "./src/js/endModule.js").checkGameState;
var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");

gameField.addEventListener('click', function(e){
	var trg = e.target;
	if (!trg.className || trg.className === 'disabled') return false
	toActiveCard.call(trg);
	checkBuffer(trg);
});

function toActiveCard(){
	// this.classList.add('active');
	var img = document.createElement('img');
	img.setAttribute('src', this.get.getImg());
	this.appendChild(img);
}

function toDisabled(){
	this.classList.add('disabled');
}

function toDisactiveCard(){
	var firstChild = this.firstElementChild;
	firstChild.classList.add('disactive');
	setTimeout(function(){
		firstChild.remove();
	}, 500);
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
			return
		}
		toDisactiveCard.call(buf);
		toDisactiveCard.call(item);
		gs.gameState.buffer = undefined;
		return
	}
	gs.gameState.buffer=item;
	return
}

exports.showStartImgs = showStartImgs;

/***/ }),

/***/ "./src/js/startModule.js":
/*!*******************************!*\
  !*** ./src/js/startModule.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gs = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
var runGame = __webpack_require__(/*! ./cardFabric.js */ "./src/js/cardFabric.js").runGame;
var gameOver = __webpack_require__(/*! ./endModule.js */ "./src/js/endModule.js").gameOver;
var gameGrid = document.getElementById('density');
var gameHiding = document.getElementById('hiding');
var gameTime = document.getElementById('time');
var form = document.getElementById('settings');

function setInitialsettings(obj){
	obj = JSON.parse(localStorage.getItem('settings')) || obj;
	gameGrid.value = obj.density;
	gameHiding.value = obj.hiding;
	gameTime.value = obj.time;
}

form.addEventListener('submit', function(e){
	e.preventDefault();
	if(gs.gameState.play){
		return gameOver(true);
	}
	var formData = getFormData();
	if(!validateForm(formData)) return false
	localStorage.setItem('settings', JSON.stringify(formData));
	gs.gameState.settings = formData;
	runGame(gs.gameState.settings);
	document.getElementById('play').classList.toggle('abort');
});

function validateForm(obj){
	if(typeof obj.density !== 'number' || obj.density<2
		|| obj.density>7 || obj.density%2)return false
	if(typeof obj.hiding !== 'number' || obj.hiding<1 || obj.hiding>10)return false
	if(typeof obj.time !== 'number' || obj.time<10 || obj.time> 60) return false
	return obj
}

function getFormData(obj){
	return {
		density: +gameGrid.value,
		hiding: +gameHiding.value,
		time: +gameTime.value
	}
}

form.addEventListener('input', function(e){
	var trg = e.target;
	switch (trg.id){
		case ('density'):
			if(trg.value <2 || trg.value > 7 || trg.value % 2){
				setError.call(trg, false);
			}else{
				setError.call(trg, true);
			}
			break
		case ('hiding'):
			if(trg.value < 1 || trg.value > 10){
				setError.call(trg, false);
			}else{
				setError.call(trg, true);
			}
			break
		case ('time'):
			if(trg.value < 10 || trg.value > 60){
				setError.call(trg, false);
			}else{
				setError.call(trg, true);
			}
			break
	}
});

function setError(bool){
	if(bool) return this.parentElement.classList.remove('error');
	this.parentElement.classList.add('error');
}

exports.setInitialsettings = setInitialsettings;

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