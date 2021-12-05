"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}!function(s){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return s[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=s,r.c=e,r.d=function(s,e,t){r.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:t})},r.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,e){if(1&e&&(s=r(s)),8&e)return s;if(4&e&&"object"==_typeof(s)&&s&&s.__esModule)return s;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var o in s)r.d(t,o,function(e){return s[e]}.bind(null,o));return t},r.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(e,"a",e),e},r.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},r.p="",r(r.s=3)}({3:function(){document.addEventListener("DOMContentLoaded",function(){new Vue({el:"#vue-game-loss",data:{toysList:[{src:"assets/img/games/loss/toys/bear.svg",id:"bear",success:!1,error:!1},{src:"assets/img/games/loss/toys/bear2.svg",id:"bear2",success:!1,error:!1},{src:"assets/img/games/loss/toys/bear3.svg",id:"bear3",success:!1,error:!1},{src:"assets/img/games/loss/toys/books1.png",id:"books1",success:!1,error:!1},{src:"assets/img/games/loss/toys/books1-2.svg",id:"books1-2",success:!1,error:!1},{src:"assets/img/games/loss/toys/books2.svg",id:"books2",success:!1,error:!1},{src:"assets/img/games/loss/toys/books2-2.svg",id:"books2-2",success:!1,error:!1},{src:"assets/img/games/loss/toys/car1.svg",id:"car1",success:!1,error:!1},{src:"assets/img/games/loss/toys/car2.svg",id:"car2",success:!1,error:!1},{src:"assets/img/games/loss/toys/chick.svg",id:"chick",success:!1,error:!1},{src:"assets/img/games/loss/toys/cube.svg",id:"cube",success:!1,error:!1},{src:"assets/img/games/loss/toys/cubes1.svg",id:"cubes1",success:!1,error:!1},{src:"assets/img/games/loss/toys/cubes2.svg",id:"cubes2",success:!1,error:!1},{src:"assets/img/games/loss/toys/cubes2-2.svg",id:"cubes2-2",success:!1,error:!1},{src:"assets/img/games/loss/toys/cubes3.svg",id:"cubes3",success:!1,error:!1},{src:"assets/img/games/loss/toys/duck1.svg",id:"duck1",success:!1,error:!1},{src:"assets/img/games/loss/toys/duck2.svg",id:"duck2",success:!1,error:!1},{src:"assets/img/games/loss/toys/duck2-2.svg",id:"duck2-2",success:!1,error:!1},{src:"assets/img/games/loss/toys/duck3.svg",id:"duck3",success:!1,error:!1},{src:"assets/img/games/loss/toys/rabbit.svg",id:"rabbit",success:!1,error:!1}],currentToys:[],correctAnswer:{},end:!1,gameCounter:0},methods:{getRandomInt:function(s,e){return s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s))+s},getToys:function(){if(this.gameCounter<5){for(var _s,_e,r=JSON.parse(JSON.stringify(this.toysList)),t=r.length;0!==t;)_e=this.getRandomInt(0,t),_s=r[--t],r[t]=r[_e],r[_e]=_s;this.currentToys=r,this.selectAnswer(),this.gameCounter+=1}else this.end=!0},selectAnswer:function(){var s=this.getRandomInt(0,this.toysList.length);this.correctAnswer=this.currentToys[s]},checkAnswer:function(s){s.id===this.correctAnswer.id?s.success=!0:(s.error=!0,this.correctAnswer.success=!0),setTimeout(this.getToys,1e3)}},beforeMount:function(){this.getToys()}})})}});