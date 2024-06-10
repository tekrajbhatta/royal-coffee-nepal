"use strict";var helpers={debounce:function(){return function(e,n){var t=null,r=null;return function(){r=arguments,t&&clearTimeout(t),t=setTimeout(function(){e.apply(null,r),t=null,r=null},n)}}}(),addImgLoadListener:function(){return function(e,n){var t=function(){function t(){n(),e.removeEventListener("load",t)}return t}();return e.addEventListener("load",t),t}}()},calcHeaderHeight={nodesListenersData:[],init:function(){return function(e){var n=this;n.observer&&n.observer.disconnect(),n.nodesListenersData&&n.nodesListenersData.forEach(function(e){e.node.removeEventListener(e.eventType,e.listener)}),n.header=document.querySelector("#body-fict header"),n.header&&(n.sendHeaderHeight=helpers.debounce(function(){requestAnimationFrame(function(){e(n.header.offsetHeight)})},300),window.addEventListener("resize",n.sendHeaderHeight),Array.prototype.slice.call(n.header.querySelectorAll("img")).forEach(function(e){n.nodesListenersData.push({node:e,eventType:"load",listener:helpers.addImgLoadListener(e,n.sendHeaderHeight)})}),n.initMutationObserver(),n.sendHeaderHeight())}}(),destroy:function(){return function(){var e=this;window.removeEventListener("resize",e.sendHeaderHeight),e.observer&&(e.observer.disconnect(),e.nodesListenersData.forEach(function(e){e.node.removeEventListener(e.eventType,e.listener)}))}}(),initMutationObserver:function(){return function(){var e=this;window.MutationObserver&&(e.observer=new MutationObserver(function(n){e.sendHeaderHeight(),n.forEach(function(n){n.addedNodes&&n.addedNodes.length&&Array.prototype.slice.call(n.addedNodes).forEach(function(n){n.tagName&&"img"===n.tagName.toLowerCase()&&e.nodesListenersData.push({node:n,eventType:"load",listener:helpers.addImgLoadListener(n,e.sendHeaderHeight)})})})}),e.observer.observe(e.header,{childList:!0,attributes:!0,characterData:!1,subtree:!0}))}}()};window.constructorMode?define("calcHeaderHeight",[],function(){return window.calcHeaderHeight=calcHeaderHeight,calcHeaderHeight}):window.calcHeaderHeight=calcHeaderHeight;
//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map

//# sourceMappingURL=calcHeaderHeight.js.map
