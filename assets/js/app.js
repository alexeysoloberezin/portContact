/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\r\nfunction nextLineDynamicLines () {\r\n  const titles = document.querySelectorAll('.nextLineDynamicLines');\r\n\r\n  titles.forEach(title => {\r\n    const lineHeight = parseFloat(getComputedStyle(title).lineHeight); // Получаем высоту строки\r\n    const elementHeight = title.offsetHeight; // Общая высота элемента\r\n    const lineCount = Math.round(elementHeight / lineHeight); // Количество строк\r\n\r\n    const nextElement = title.nextElementSibling; // Следующий элемент\r\n\r\n    if (nextElement && (nextElement.classList.contains('cardCompany-text') || nextElement.classList.contains('company-text'))) {\r\n      if (lineCount === 3) {\r\n        nextElement.style.webkitLineClamp = 1;\r\n      } else if (lineCount === 2) {\r\n        nextElement.style.webkitLineClamp = 2;\r\n      } else if (lineCount === 1) {\r\n        nextElement.style.webkitLineClamp = 3;\r\n      }\r\n      nextElement.style.display = '-webkit-box'; // Для работы -webkit-line-clamp\r\n      nextElement.style.overflow = 'hidden';\r\n      nextElement.style.webkitBoxOrient = 'vertical';\r\n    }\r\n  });\r\n}\r\n\r\nfunction navSearch(){\r\n  const els = document.querySelectorAll('.search-navSearch')\r\n  const input = document.getElementById('navSearch');\r\n\r\n  els.forEach(el => {\r\n    el.addEventListener('click', e => {\r\n      e.preventDefault();\r\n      input.setAttribute('value', el.textContent)\r\n    })\r\n  })\r\n}\r\n\r\nnavSearch()\r\nnextLineDynamicLines()\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const burgerBox = document.querySelector('.burger-box');\r\n  const dropdownMenu = document.querySelector('.dropdown-content');\r\n  const burgerDrop = document.querySelector('.burger-drop')\r\n\r\n\r\n  burgerBox.addEventListener('click', () => {\r\n    dropdownMenu.classList.toggle('open'); // Добавляем/убираем класс\r\n    burgerDrop.classList.toggle('dropdown-open')\r\n    burgerBox.classList.toggle('open'); // Для смены иконки\r\n  });\r\n\r\n  // Закрытие меню при клике вне его\r\n  document.addEventListener('click', (e) => {\r\n    if (!burgerBox.contains(e.target) && !dropdownMenu.contains(e.target)) {\r\n      dropdownMenu.classList.remove('open');\r\n      burgerBox.classList.remove('open');\r\n      burgerDrop.classList.remove('dropdown-open')\r\n    }\r\n  });\r\n});\r\n\r\n\r\nlet resizeTimeout;\r\n\r\nwindow.addEventListener('resize', () => {\r\n  clearTimeout(resizeTimeout);\r\n  resizeTimeout = setTimeout(() => {\r\n    console.log('Resize ended');\r\n    nextLineDynamicLines()\r\n    // Ваш код, который нужно выполнить после завершения resize\r\n  }, 300); // Задержка, например, 300 мс\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;