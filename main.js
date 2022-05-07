(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var i=function(){function i(t,s){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e(this,"_autoplay",(function(t){if(this._config.autoplay)return"stop"===t?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval(function(){this._direction="next",this._move()}.bind(this),this._config.interval)))})),this._el="string"==typeof t?document.querySelector(t):t,this._elWrapper=this._el.querySelector(i.SELECTOR_WRAPPER),this._elItems=this._el.querySelector(i.SELECTOR_ITEMS),this._elsItem=this._el.querySelectorAll(i.SELECTOR_ITEM),this._elControlBlock=this._el.querySelector(i.SELECTOR_CONTROL_BLOCK),this._currentIndex=0,this._minOrder=0,this._maxOrder=0,this._$itemWithMinOrder=null,this._$itemWithMaxOrder=null,this._minTranslate=0,this._maxTranslate=0,this._direction="next",this._balancingItemsFlag=!1,this._transform=0,this._width=this._elWrapper.getBoundingClientRect().width,this._supportResizeObserver=void 0!==window.ResizeObserver,this._hasSwipeState=!1,this._swipeStartPosX=0,this._intervalId=null,this._config=Object.assign({autoplay:!1,loop:!0,indicators:!0,interval:5e3,swipe:!0},s),this._elItems.dataset.translate=0,this._elsItem.forEach((function(t,e){t.dataset.order=e,t.dataset.index=e,t.dataset.translate=0})),this._config.loop){var n=this._elsItem.length-1,a=-this._elsItem.length;this._elsItem[n].dataset.order=-1,this._elsItem[n].dataset.translate=-this._elsItem.length;var r=a*this._width;this._elsItem[n].style.transform="translateX("+r+"px)"}this._addIndicators(),this._refreshExtremeValues(),this._setActiveClass(),this._addEventListener(),this._autoplay()}var s,n;return s=i,(n=[{key:"_setActiveClass",value:function(){var t=this._el.querySelector(i.SELECTOR_ITEM_ACTIVE);t&&t.classList.remove(i.CLASS_NAME_ITEM_ACTIVE);var e=this._el.querySelector('[data-index="'.concat(this._currentIndex,'"]'));e&&e.classList.add(i.CLASS_NAME_ITEM_ACTIVE);var s=this._el.querySelector(i.SELECTOR_INDICATOR_ACTIVE);s&&s.classList.remove(i.CLASS_NAME_INDICATOR_ACTIVE);var n=this._el.querySelector('[data-slide-to="'.concat(this._currentIndex,'"]'));n&&n.classList.add(i.CLASS_NAME_INDICATOR_ACTIVE);var a=this._el.querySelector(i.SELECTOR_CONTROL_PREV),r=this._el.querySelector(i.SELECTOR_CONTROL_NEXT);a&&a.classList.add(i.CLASS_NAME_CONTROL_SHOW),r&&r.classList.add(i.CLASS_NAME_CONTROL_SHOW),this._config.loop||0!==this._currentIndex?this._config.loop||this._currentIndex!==this._elsItem.length-1||r.classList.remove(i.CLASS_NAME_CONTROL_SHOW):a.classList.remove(i.CLASS_NAME_CONTROL_SHOW),this._el.dispatchEvent(new CustomEvent("active.itc.slider",{bubbles:!0}))}},{key:"_move",value:function(t){var e;if(this._elItems.classList.remove(i.TRANSITION_NONE),!1===t&&this._elItems.classList.add(i.TRANSITION_NONE),"none"===this._direction)return e=this._transform*this._width,void(this._elItems.style.transform="translateX("+e+"px)");if(!this._config.loop){if(this._currentIndex+1>=this._elsItem.length&&"next"===this._direction)return void this._autoplay("stop");if(this._currentIndex<=0&&"prev"===this._direction)return}var s="next"===this._direction?-1:1,n=this._transform+s;"next"===this._direction?++this._currentIndex>this._elsItem.length-1&&(this._currentIndex-=this._elsItem.length):--this._currentIndex<0&&(this._currentIndex+=this._elsItem.length),this._transform=n,this._elItems.dataset.translate=n,e=n*this._width,this._elItems.style.transform="translateX("+e+"px)",this._elItems.dispatchEvent(new CustomEvent("transition-start",{bubbles:!0})),this._setActiveClass()}},{key:"_moveTo",value:function(t,e){var i=this._currentIndex;this._direction=t>i?"next":"prev";for(var s=0;s<Math.abs(t-i);s++)this._move(e)}},{key:"_addIndicators",value:function(){if(!this._el.querySelector(i.SELECTOR_INDICATORS)&&this._config.indicators){for(var t="",e=0,s=this._elsItem.length;e<s;e++)t+='<li class="'.concat(i.CLASS_NAME_INDICATOR,'" data-slide-to="').concat(e,'"></li>');this._elControlBlock.insertAdjacentHTML("beforeend",'<ol class="'.concat(i.CLASS_NAME_INDICATORS,'">').concat(t,"</ol>"))}}},{key:"_refreshExtremeValues",value:function(){this._minOrder=parseInt(this._elsItem[0].dataset.order),this._maxOrder=this._minOrder,this._$itemWithMinOrder=this._elsItem[0],this._$itemWithMaxOrder=this._$itemWithMinOrder,this._minTranslate=parseInt(this._elsItem[0].dataset.translate),this._maxTranslate=this._minTranslate;for(var t=0,e=this._elsItem.length;t<e;t++){var i=this._elsItem[t],s=parseInt(i.dataset.order);s<this._minOrder?(this._minOrder=s,this._$itemWithMinOrder=i,this._minTranslate=parseInt(i.dataset.translate)):s>this._maxOrder&&(this._maxOrder=s,this._$itemWithMaxOrder=i,this._maxTranslate=parseInt(i.dataset.translate))}}},{key:"_balancingItems",value:function(){if(this._balancingItemsFlag){var t,e,i=this._elWrapper.getBoundingClientRect(),s=i.width/2,n=this._elsItem.length;if("next"===this._direction){var a=i.left,r=this._$itemWithMinOrder;t=this._minTranslate,r.getBoundingClientRect().right<a-s&&(r.dataset.order=this._minOrder+n,t+=n,r.dataset.translate=t,e=t*this._width,r.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}else if("prev"===this._direction){var _=i.right,o=this._$itemWithMaxOrder;t=this._maxTranslate,o.getBoundingClientRect().left>_+s&&(o.dataset.order=this._maxOrder-n,t-=n,o.dataset.translate=t,e=t*this._width,o.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}requestAnimationFrame(this._balancingItems.bind(this))}}},{key:"_addEventListener",value:function(){var t=this._elItems;function e(t){if(this._autoplay("stop"),!t.target.closest(i.CLASS_NAME_CONTROL)){var e=0===t.type.search("touch")?t.touches[0]:t;this._swipeStartPosX=e.clientX,this._swipeStartPosY=e.clientY,this._hasSwipeState=!0,this._hasSwiping=!1}}function s(t){if(this._hasSwipeState){var e=0===t.type.search("touch")?t.touches[0]:t,s=this._swipeStartPosX-e.clientX,n=this._swipeStartPosY-e.clientY;if(!this._hasSwiping){if(Math.abs(n)>Math.abs(s)||0===Math.abs(s))return void(this._hasSwipeState=!1);this._hasSwiping=!0}t.preventDefault(),this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=4),this._currentIndex<=0&&s<=0&&(s/=4));var a=s/this._elWrapper.getBoundingClientRect().width,r=this._transform-a;this._elItems.classList.add(i.TRANSITION_NONE),r*=this._width,this._elItems.style.transform="translateX("+r+"px)"}}function n(t){if(this._hasSwipeState){var e=0===t.type.search("touch")?t.changedTouches[0]:t,s=this._swipeStartPosX-e.clientX;if(0!==s){this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=7),this._currentIndex<=0&&s<=0&&(s/=7));var n=s/this._elWrapper.getBoundingClientRect().width*100;this._elItems.classList.remove(i.TRANSITION_NONE),n>i.SWIPE_THRESHOLD?(this._direction="next",this._move()):n<-i.SWIPE_THRESHOLD?(this._direction="prev",this._move()):(this._direction="none",this._move()),this._hasSwipeState=!1,this._config.loop&&this._autoplay()}else this._hasSwipeState=!1}}if(this._el.addEventListener("click",function(t){var e=t.target;if(this._autoplay("stop"),e.classList.contains(i.CLASS_NAME_CONTROL))t.preventDefault(),this._direction=e.dataset.slide,this._move();else if(e.dataset.slideTo){t.preventDefault();var s=parseInt(e.dataset.slideTo);this._moveTo(s)}this._config.loop&&this._autoplay()}.bind(this)),this._config.loop&&(t.addEventListener("transition-start",function(){this._balancingItemsFlag||(this._balancingItemsFlag=!0,window.requestAnimationFrame(this._balancingItems.bind(this)))}.bind(this)),t.addEventListener("transitionend",function(){this._balancingItemsFlag=!1,this._el.dispatchEvent(new CustomEvent("transition-end",{bubbles:!0}))}.bind(this))),this._config.autoplay&&(this._el.addEventListener("mouseenter",function(){this._autoplay("stop")}.bind(this)),this._el.addEventListener("mouseleave",function(){this._config.loop&&this._autoplay()}.bind(this))),this._config.swipe){var a=!1;try{var r=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveListener",null,r)}catch(t){}this._el.addEventListener("touchstart",e.bind(this),!!a&&{passive:!1}),this._el.addEventListener("touchmove",s.bind(this),!!a&&{passive:!1}),this._el.addEventListener("mousedown",e.bind(this)),this._el.addEventListener("mousemove",s.bind(this)),document.addEventListener("touchend",n.bind(this)),document.addEventListener("mouseup",n.bind(this)),document.addEventListener("mouseout",n.bind(this))}if(this._el.addEventListener("dragstart",function(t){t.preventDefault()}.bind(this)),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?this._autoplay("stop"):"visible"===document.visibilityState&&this._config.loop&&this._autoplay()}.bind(this)),this._supportResizeObserver){var _=new ResizeObserver(function(t){var e,s=t[0].contentBoxSize,n=t[0].contentRect,a=n?n.width:(s[0]||s).inlineSize;if(this._width.toFixed(1)!==a.toFixed(1)){this._autoplay("stop"),this._elItems.classList.add(i.TRANSITION_NONE),this._width=parseInt(a.toFixed(1),10),e=a*parseInt(this._elItems.dataset.translate,10),this._elItems.style.transform="translateX("+e+"px)";for(var r=this._elsItem,_=0;_<r.length;_++)e=parseInt(r[_].dataset.translate)*a,r[_].style.transform="translateX("+e+"px)";this._config.loop&&this._autoplay()}}.bind(this));_.observe(this._elWrapper)}}},{key:"next",value:function(){this._direction="next",this._move()}},{key:"prev",value:function(){this._direction="prev",this._move()}},{key:"autoplay",value:function(t){this._autoplay("stop")}},{key:"moveTo",value:function(t,e){this._moveTo(t,e)}}])&&t(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),i}();e(i,"PREFIX","slider"),e(i,"CLASS_NAME_ITEM","".concat(i.PREFIX,"__item")),e(i,"CLASS_NAME_ITEM_ACTIVE","".concat(i.PREFIX,"__item_active")),e(i,"CLASS_NAME_ITEMS","".concat(i.PREFIX,"__items")),e(i,"CLASS_NAME_INDICATOR","".concat(i.PREFIX,"__indicator")),e(i,"CLASS_NAME_INDICATOR_ACTIVE","".concat(i.PREFIX,"__indicator_active")),e(i,"CLASS_NAME_INDICATORS","".concat(i.PREFIX,"__indicators")),e(i,"CLASS_NAME_CONTROL","".concat(i.PREFIX,"__control")),e(i,"CLASS_NAME_CONTROL_PREV","".concat(i.PREFIX,"__control_prev")),e(i,"CLASS_NAME_CONTROL_NEXT","".concat(i.PREFIX,"__control_next")),e(i,"CLASS_NAME_CONTROL_SHOW","".concat(i.PREFIX,"__control_show")),e(i,"CLASS_NAME_CONTROL_BLOCK","".concat(i.PREFIX,"__control-block")),e(i,"SELECTOR_ITEMS",".".concat(i.CLASS_NAME_ITEMS)),e(i,"SELECTOR_ITEM",".".concat(i.CLASS_NAME_ITEM)),e(i,"SELECTOR_ITEM_ACTIVE",".".concat(i.CLASS_NAME_ITEM_ACTIVE)),e(i,"SELECTOR_INDICATOR_ACTIVE",".".concat(i.CLASS_NAME_INDICATOR_ACTIVE)),e(i,"SELECTOR_INDICATORS",".".concat(i.CLASS_NAME_INDICATORS)),e(i,"SELECTOR_WRAPPER",".".concat(i.PREFIX,"__wrapper")),e(i,"SELECTOR_CONTROL",".".concat(i.CLASS_NAME_CONTROL)),e(i,"SELECTOR_CONTROL_NEXT",".".concat(i.CLASS_NAME_CONTROL_NEXT)),e(i,"SELECTOR_CONTROL_PREV",".".concat(i.CLASS_NAME_CONTROL_PREV)),e(i,"SELECTOR_CONTROL_BLOCK",".".concat(i.CLASS_NAME_CONTROL_BLOCK)),e(i,"SWIPE_THRESHOLD",20),e(i,"TRANSITION_NONE","transition-none"),new i(".slider",{loop:!0,autoplay:!0,interval:5e3,swipe:!1});var s=document.querySelector(".mobile-menu"),n=document.querySelector(".mobile-menu__navigation"),a=document.querySelector(".mobile-menu__social"),r=document.querySelector(".mobile-menu__logo"),_=document.querySelector(".mobile-menu__img"),o=document.querySelector(".header__mobile-menu-button");function l(t){s.classList.contains("mobile-menu_opened")&&("Escape"===t.key&&h(),t.target!==o&&t.target!==s&&t.target!==n&&t.target!==a&&t.target!==r&&t.target!==_&&h())}function h(){document.removeEventListener("keydown",l),s.classList.remove("mobile-menu_opened")}o.addEventListener("click",(function(){s.classList.contains("mobile-menu_opened")?(document.removeEventListener("keydown",l),s.classList.remove("mobile-menu_opened")):(document.addEventListener("keydown",l),s.classList.add("mobile-menu_opened"))})),document.addEventListener("click",l),document.addEventListener("DOMContentLoaded",(function(t){window.onresize=function(){window.innerWidth>841&&s.classList.contains("mobile-menu_opened")&&h()}}))})();