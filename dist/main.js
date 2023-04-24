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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, sidebarLinks, uis, menuItems, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"75b9de54-7319-43e8-b007-0fd0c221e81d\",\"author\":\"eutech\",\"widgets\":[{\"id\":\"ev-car-widget-details\",\"name\":\"EV Charging Summary\",\"description\":\"Summary Statistics about Electric Vehicle Chargers\",\"category\":\"electrical-vehicle-monitoring\"}],\"sidebarLinks\":[],\"uis\":[],\"menuItems\":[]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".car_widget {\n  background-color: #000000;\n  color: #ffffffFF;\n  position: relative;\n  padding: 15px;\n  padding-top: 70px;\n}\n.car_widget .uxp-widget-title-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #000;\n  color: white;\n}\n.car_widget .uxp-widget-title-bar .car_widget_rht {\n  width: 100%;\n}\n.car_widget .car_widget-battery-bg {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(https://static.iviva.com/images/Car_widget/bg-1.png);\n  display: inline-block;\n  width: 110%;\n  height: 9em;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  filter: blur(2px);\n  transform: translateX(-50%);\n}\n.car_widget .car_widget-header {\n  display: inline-flex;\n  width: 100%;\n  padding: 0px 2em;\n  position: absolute;\n  top: 5%;\n}\n.car_widget .uxp-form-group.showcase-input {\n  width: 100% !important;\n  padding: 0;\n}\n.car_widget .uxp-form-group.showcase-input .uxp-form-select {\n  position: relative;\n}\n.car_widget .uxp-form-group.showcase-input .uxp-form-select .uxp-select-placeholder {\n  background-color: #70707061;\n  color: #ffffff69;\n  padding: 10px 35px 10px 20px;\n}\n.car_widget label {\n  color: #ffffff78;\n}\n.car_widget .car_widget_lft {\n  display: inline-block;\n  width: 50%;\n}\n.car_widget .car_widget_lft .uxp-form-select {\n  min-width: 100%;\n}\n.car_widget .car_widget_rht {\n  width: 50%;\n  float: right;\n}\n.car_widget .car_widget_rht .uxp-form-select {\n  min-width: 100%;\n}\n.car_widget .car_widget_rht .uxp-form-select .uxp-select-placeholder .selected {\n  white-space: nowrap;\n}\n.car_widget .car_widget_rht .block_building {\n  float: right;\n  margin-top: 0.7em;\n  font-size: 0.8em;\n}\n.car_widget .car_widget_rht .uti-sel-boxes {\n  float: right;\n}\n.car_widget .car_widget-body {\n  display: inline-block;\n  width: 100%;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 1em;\n  transform: translateY(-50%);\n}\n.car_widget .car_widget-body .car-battery {\n  display: inline-block;\n  width: 90%;\n  padding-left: 5%;\n}\n.car_widget .car_widget-body .car-battery .widget-pict {\n  display: inline-block;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n}\n.car_widget .car_widget-body .car-battery .widget-pict.car {\n  width: 5em;\n  height: 4em;\n  background-image: url(\"https://static.iviva.com/images/Car_widget/Car.svg\");\n}\n.car_widget .car_widget-body .car-battery .widget-pict.car .car-battery-pict {\n  display: inline-block;\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-image: url(\"https://static.iviva.com/images/Car_widget/Battery.svg\");\n  width: 4em;\n  height: 2em;\n  position: absolute;\n  left: 5em;\n  top: -2em;\n}\n.car_widget .car_widget-body .car-battery h3.battery-value {\n  display: inline-block;\n  font-size: 1.8em;\n  margin: 0.8em 0 0 0;\n  padding: 0;\n  width: 100%;\n}\n.car_widget .car_widget-body .car-battery p.battery-status {\n  display: inline-block;\n  font-size: 1.1em;\n  padding: 0;\n  margin: 1em 0 0 0;\n  width: 100%;\n}\n.car_widget.car_widget-details {\n  display: inline-block;\n}\n.car_widget.car_widget-details .car_details {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.car_widget.car_widget-details .car_details .data-grid {\n  background-color: transparent;\n}\n.car_widget.car_widget-details .car_details .data-grid .data-grid-column {\n  border: 1px solid #77777763;\n  height: 50%;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card {\n  background-color: transparent;\n  display: inline-block;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .item-card-image-container {\n  position: inherit;\n  transform: none;\n  left: 0;\n  top: 0;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .item-card-image-container .profile-image-container {\n  background-color: transparent !important;\n  width: 25px;\n  height: 25px;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content {\n  margin-left: 0;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content .title h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n  font-size: 1.65em;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content .title h3.green {\n  color: #4fc8acFF;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content .title h3.orange {\n  color: #815821FF;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content .title h3 span.white {\n  color: #ffffffFF;\n}\n.car_widget.car_widget-details .car_details .data-grid .item-card .content .sub-title {\n  font-size: 9px;\n  padding: 3px 0;\n  text-transform: uppercase;\n}\n.car_widget.w-small .data-grid-column {\n  height: auto !important;\n}\n.car_widget.w-small .data-grid-column .item-card {\n  padding: 10px !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const Electric_car_widgetsWidget = (props) => {
    let [selected, _setSelected] = React.useState(props.duration || '3');
    let updater = components_1.useUpdateWidgetProps();
    function setSelected(x) {
        _setSelected(x);
        updater(props.instanceId, { duration: x });
    }
    // let [inputValue, setInputValue] = React.useState<string | null>("sample text");
    // let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }
    let [toggleFilterValue, setToggleFilterValue] = React.useState("month");
    let [toggleFilterValue1, setToggleFilterValue1] = React.useState("month");
    return (React.createElement(components_1.WidgetWrapper, { className: "car_widget car_widget-battery" },
        React.createElement(components_1.TitleBar, { title: "" }, "   "),
        React.createElement("div", { className: "car_widget-header" },
            React.createElement("div", { className: "car_widget_lft" },
                React.createElement("div", { className: "uti-sel-boxes" },
                    React.createElement("div", { className: "uti-sel-box" },
                        React.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                            React.createElement(components_1.Select, { selected: selected + '', options: [
                                    { label: "3 Hours", value: '' + (3) },
                                    { label: "24 hours", value: '' + (24) },
                                    { label: "One Week", value: '' + (24 * 7) },
                                    { label: "30 Days", value: '' + (24 * 30) },
                                ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))))),
            React.createElement("div", { className: "car_widget_rht" },
                React.createElement("div", { className: "block_building" },
                    React.createElement(components_1.Label, null, "LEVEL - 2, BUILDING 1")))),
        React.createElement("div", { className: "car_widget-body" },
            React.createElement("div", { className: "car-battery" },
                React.createElement("div", { className: "widget-pict car" },
                    React.createElement("div", { className: "car-battery-pict" }, " ")),
                React.createElement("h3", { className: "battery-value" }, "45%"),
                React.createElement("p", { className: "battery-status" }, "Average charge"))),
        React.createElement("div", { className: "car_widget-battery-bg" })));
};
function fixed(n) {
    if (n == 0)
        return '0';
    if (n > 999) {
        return new Intl.NumberFormat().format(Number(n.toFixed(2)));
    }
    if (n > 99) {
        return n.toFixed(2);
    }
    return n.toFixed(2);
}
function useEffectWithPolling(context, channel, interval, callback, deps) {
    let [tick, setTick] = React.useState(0);
    let [timer, setTimer] = React.useState(null);
    let newDeps = deps.slice();
    newDeps.push(tick);
    function startTimer() {
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            setTick((x) => x + 1);
        }, interval));
    }
    React.useEffect(() => {
        clearTimeout(timer);
        console.log('running poll job');
        callback().then(() => {
            startTimer();
        }).catch(e => {
            console.log('Error in useEffectWithPolling', channel, e);
            startTimer();
        });
        return () => timer && clearTimeout(timer);
    }, newDeps);
    components_1.useMessageBus(context, channel, (p, ch) => {
        setTick((x) => x + 1);
        return "";
    });
}
const EVDetails = (props) => {
    let [selected, _setSelected] = React.useState(props.duration || '3');
    let [sessions, setSessions] = React.useState([]);
    let [cost, setCost] = React.useState(0);
    let updater = components_1.useUpdateWidgetProps();
    function setSelected(x) {
        _setSelected(x);
        updater(props.instanceId, { duration: x });
    }
    let start = new Date();
    let end = new Date();
    start.setHours(start.getHours() - Number(selected));
    useEffectWithPolling(props.uxpContext, 'lxp/ev', 30000, () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield props.uxpContext.executeAction('ElectricVehicleCharging', 'StationUsage', { start, end }, { json: true });
        setSessions(data);
    }), [selected]);
    React.useEffect(() => {
        props.uxpContext.executeAction('ElectricVehicleCharging', 'GetSettings', {}, { json: true }).then((data) => {
            let cost = Number(data.price || 0);
            setCost(cost);
        });
    }, []);
    let { power, charges, duration } = sessions.reduce((old, x) => ({ power: old.power + x.power, charges: old.charges + x.charges, duration: old.duration + x.duration }), { power: 0, charges: 0, duration: 0 });
    let energyPerCharge = charges == 0 ? 0 : (power / charges);
    let totalEnergy = power;
    let chargingStationsUsed = sessions.filter(x => x.power > 0).length;
    let totalChargingStations = sessions.length;
    let totalDuration = (Number(end) - Number(start)) / 1000;
    let percentageUsed = (totalDuration == 0 || totalChargingStations == 0) ? 0 : duration / (totalChargingStations * totalDuration);
    let percentageUsePerDay = 100 * percentageUsed;
    let emissionReduction = 1616 * power;
    let units = 'g';
    if (emissionReduction > 1000) {
        emissionReduction = emissionReduction / 1000.0;
        units = 'kg';
    }
    let isSample = !totalEnergy && !energyPerCharge && !emissionReduction && !chargingStationsUsed && !totalChargingStations;
    if (isSample) {
        totalEnergy = 25;
        energyPerCharge = 3;
        emissionReduction = 13;
        chargingStationsUsed = 2;
        totalChargingStations = 5;
    }
    const GridData = [];
    if (props.totalenergy || totalEnergy) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/Car.svg",
            title: React.createElement("h3", { className: "orange" }, `${fixed(totalEnergy)} WH`),
            subTitle: "Total Energy"
        });
    }
    if (props.averagepercharge || energyPerCharge) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/metro-power.svg",
            title: React.createElement("h3", { className: "green" }, `${fixed(energyPerCharge)} WH`),
            subTitle: " Average energy per charge"
        });
    }
    if (props.emissions || emissionReduction) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/weather-smoke.svg",
            title: React.createElement("h3", { className: "green" }, `${fixed(emissionReduction)}${units}`),
            subTitle: "REDUCED EMISSIONS"
        });
    }
    if (props.stations || (chargingStationsUsed || totalChargingStations)) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: React.createElement("h3", { className: "orange" },
                chargingStationsUsed,
                " ",
                React.createElement("span", { className: "white" }, `/${totalChargingStations}`)),
            subTitle: "CHARGING STATIONS USED"
        });
    }
    if (props.averagecostpercharge) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: React.createElement("h3", { className: "orange" }, '$' + fixed(energyPerCharge * cost)),
            subTitle: "AVERAGE COST PER CHARGE"
        });
    }
    const renderGridItem = (item, key) => {
        return (React.createElement(components_1.ItemCard, { item: item, imageField: "icon", titleField: "title", subTitleField: "subTitle", nameField: "name" }));
    };
    return (React.createElement(components_1.WidgetWrapper, { className: "car_widget car_widget-details", instanceId: props.instanceId, cssBreakPoints: {
            width: {
                default: 'large',
                320: 'small'
            }
        }, sampleData: {
            showLabel: isSample,
            description: 'This widget is showing sample data'
        } },
        React.createElement(components_1.TitleBar, { title: "EV Charging Summary" },
            React.createElement("div", { className: "car_widget_rht" },
                React.createElement("div", { className: "uti-sel-boxes" },
                    React.createElement("div", { className: "uti-sel-box" },
                        React.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                            React.createElement(components_1.Select, { selected: selected + '', options: [
                                    { label: "3 Hours", value: '' + (3) },
                                    { label: "24 hours", value: '' + (24) },
                                    { label: "One Week", value: '' + (24 * 7) },
                                    { label: "30 Days", value: '' + (24 * 30) },
                                    { label: "60 Days", value: '' + (24 * 60) },
                                    { label: "90 Days", value: '' + (24 * 90) },
                                ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --", showEndOfContent: false })))))),
        React.createElement("div", { className: "car_details" },
            React.createElement(components_1.DataGrid, { data: GridData, renderItem: renderGridItem, columns: 2 }))));
};
const EVConfigPanel = (props) => {
    let { onSubmit, onCancel, configs } = props;
    let toast = components_1.useToast();
    let [totalEnergy, setTotalEnergy] = React.useState(true);
    let [averageEnergy, setAverageEnergy] = React.useState(true);
    let [emissions, setEmissions] = React.useState(true);
    let [stations, setStations] = React.useState(true);
    let [averageCost, setAverageCost] = React.useState(false);
    React.useEffect(() => {
        if (configs) {
            setTotalEnergy(configs.totalenergy || true);
            setAverageEnergy(configs.averagepercharge || true);
            setEmissions(configs.emissions || true);
            setAverageCost(configs.averagecostpercharge || false);
            setStations(configs.stations || true);
        }
    }, [configs]);
    // validate 
    function isValid() {
        let isValid = true;
        return isValid;
    }
    function save() {
        let valid = isValid();
        if (valid) {
            onSubmit({
                emissions,
                averagecostpercharge: averageCost,
                stations,
                totalenergy: totalEnergy,
                averagepercharge: averageEnergy,
            });
        }
        else {
            toast.error("Please complete the form. All fields are required");
        }
    }
    function cancel() {
        onCancel();
    }
    return React.createElement("div", { className: "energy-budget-widget-config-panel" },
        React.createElement("h4", null, "Enabled Sections (Pick 4)"),
        React.createElement("div", { className: "row" },
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Checkbox, { label: 'Total Energy', checked: totalEnergy, onChange: setTotalEnergy })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Checkbox, { label: 'Emissions Reduced', checked: emissions, onChange: setEmissions })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Checkbox, { label: 'Average Energy Per Charge', checked: averageEnergy, onChange: setAverageEnergy })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Checkbox, { label: 'Stations', checked: stations, onChange: setStations })),
            React.createElement(components_1.FormField, null,
                React.createElement(components_1.Checkbox, { label: 'Average Cost Per Charge', checked: averageCost, onChange: setAverageCost }))),
        React.createElement(components_1.FormField, { className: "button-row" },
            React.createElement(components_1.Button, { className: "cancel", title: "Cancel", onClick: cancel }),
            React.createElement(components_1.Button, { className: "save", title: "Save", onClick: save, active: isValid() })));
};
/**
 * Register as a Widget
 */
// registerWidget({
//     id: "electric_car_widgets",
//     name: "Electric_car_widgets",
//     widget: Electric_car_widgetsWidget,
//     configs: {
//         layout: {
//         }
//     }
// });
uxp_1.registerWidget({
    id: "ev-car-widget-details",
    widget: EVDetails,
    configs: {
        layout: {
            w: 7,
            h: 8,
            maxW: 10,
            maxH: 11,
            minW: 7,
            minH: 8
        },
        props: [
            {
                name: "totalenergy",
                label: "Total Energy",
                type: "string"
            },
            {
                name: "averagepercharge",
                label: "Average Energy Per Charge",
                type: "string"
            },
            {
                name: "emissions",
                label: "Reduced Emissions",
                type: "string"
            },
            {
                name: "stations",
                label: "Charging Stations Used",
                type: "string"
            },
            {
                name: "averagecostpercharge",
                label: "Average Cost Per Charge",
                type: "string"
            },
        ],
        configPanel: EVConfigPanel
    },
    defaultProps: {
        totalenergy: true,
        averagepercharge: true,
        emissions: true,
        stations: true,
        averagecostpercharge: false,
    }
});


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map