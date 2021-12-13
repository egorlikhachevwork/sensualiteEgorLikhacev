// .form.head-search.open .main-search-bar
//
// function bindHeaderSearchBtnEventListener() {
//     var DEBUG = true;
//
//     var searchBtn = document.querySelectorAll('.header');
//
//     if (searchBtn.length === 0) return;
//
//     searchBtn[0].addEventListener('click', function(event) {
//
//         if (event.target.innerText.toLowerCase() !== 'hledání') return;
//
//         var ctaInterval = setInterval(function() {
//             if (document.querySelectorAll('.searcher .top input').length > 0) {
//                 if (DEBUG) console.log('ctaInterval interval cleared, ctaInterval()');
//
//                 window.persoo('send', 'customEvent');
//
//                 clearInterval(ctaInterval);
//             }
//         }, 100);
//
//         setTimeout(function() {
//             clearInterval(ctaInterval);
//             if (DEBUG) console.log('ctaInterval interval cleared, 3000');
//         }, 3000);
//     });
//
//     searchBtn[0].classList.add('persoo-search-trigger');
// }
//
// function injectBasketDetailBtnListener() {
//     var PERSOO_DEBUG = false;
//
//     var cartBtn = document.querySelector('#ctl00_ewpz1_mainTemplateCtrl_ProductPrice1_bnPridat');
//     var dataLayer = window.dataLayer;
//
//     if (!cartBtn && dataLayer) return;
//
//     cartBtn.addEventListener('click', function() {
//         var detailPreBasketInterval = setInterval(function() {
//             if (document.querySelector('#ctl00_ewpz1_mainTemplateCtrl_FormCartNewItemModalPopup1')) {
//                 for (var i = 0; i < dataLayer.length; i++) {
//                     if (dataLayer[i].hasOwnProperty('ecomm_prodid')) {
//                         if (PERSOO_DEBUG) console.log(dataLayer[i].ecomm_prodid);
//
//                         window.persoo('send', 'addToBasket', {
//                             itemID: dataLayer[i].ecomm_prodid,
//                             pageType: 'basket'
//                         });
//                     }
//                 }
//
//                 clearInterval(detailPreBasketInterval);
//             }
//         }, 100);
//     });
//
//     cartBtn.classList.add('persoo-cta-trigger');
// }
//
// function initFocusOnInput() {
//     document.querySelector('body').addEventListener('click', function(event) {
//         var path;
//
//         if (event.hasOwnProperty("path") && Array.isArray(event.path) && event.path.length > 2) {
//             path = event.path;
//         } else {
//             path = [];
//             var currentElem = event.target;
//             while (currentElem) {
//                 path.push(currentElem);
//                 currentElem = currentElem.parentElement;
//             }
//             if (path.indexOf(window) === -1 && path.indexOf(document) === -1) path.push(document);
//             if (path.indexOf(window) === -1) path.push(window);
//         }
//
//         for (var i = 0; i < path.length; i++) {
//             if (typeof path[i].matches == "function" && path[i].matches('#ctl00_ewpz1_mainTemplateCtrl_ctl01_SecondaryMenuNavBar1_bnSearchPopup')) {
//                 var searchInterval = setInterval(function() {
//                     var el = document.querySelector('.persoo-ac-search-bar__input');
//                     if (el) {
//                         el.focus();
//                         clearInterval(searchInterval);
//                     }
//                 }, 200);
//                 break;
//             }
//         }
//     });
// }
//
// function initLoaderInSearchResults() {
//     var links = document.querySelectorAll('#persoo-search-results .persoo-result-item a');
//
//     if (links.length > 0) {
//         links.forEach(function(e) {
//             e.addEventListener('click', function() {
//                 document.getElementById('boxprogress').classList.add('progress', 'progressactive');
//             });
//         });
//     }
// }
//
// function initLoaderInAutocomplete() {
//     document.querySelector('body').addEventListener('click', function(event) {
//         var path;
//
//         if (event.hasOwnProperty("path") && Array.isArray(event.path) && event.path.length > 2) {
//             path = event.path;
//         } else {
//             path = [];
//             var currentElem = event.target;
//             while (currentElem) {
//                 path.push(currentElem);
//                 currentElem = currentElem.parentElement;
//             }
//             if (path.indexOf(window) === -1 && path.indexOf(document) === -1) path.push(document);
//             if (path.indexOf(window) === -1) path.push(window);
//         }
//
//         for (var i = 0; i < path.length; i++) {
//             if (typeof path[i].matches == "function" && path[i].matches('a.persoo-autocompleteDataset__items__item__link')) {
//                 document.querySelector('.searcher').style.display = 'none';
//                 document.getElementById('boxprogress').classList.add('progress', 'progressactive');
//                 break;
//             }
//         }
//     });
// }
//
// function injectCSSToHideOriginalBasketCarousel() {
//     document.head.insertAdjacentHTML('beforeend', '<style>.modal__inner .modal-bottom .body, .modal__inner .modal-bottom h3 {display: none;}</style>');
// }
//
// function initAddingButtonTypeForColorFilter() {
//     var buttons = document.querySelectorAll('#persoo-search-results__filters_parBarva .persoo-refinement-color__button');
//
//     if (buttons.length > 0) {
//         buttons.forEach(function(e) {
//             e.setAttribute('type', 'button');
//         });
//     }
// }
//
// function doNotReloadByEnter() {
//     if (document.querySelector('#persoo-search-bar__search-box')) {
//         document.querySelector('#persoo-search-bar__search-box').addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 e.preventDefault();
//             }
//         });
//     }
// }
//
// window.addEventListener('load', function() {
//     bindHeaderSearchBtnEventListener();
//     injectBasketDetailBtnListener();
//     injectCSSToHideOriginalBasketCarousel();
//     initFocusOnInput();
//     initLoaderInSearchResults();
//     initLoaderInAutocomplete();
//     initAddingButtonTypeForColorFilter();
//     doNotReloadByEnter();
// });