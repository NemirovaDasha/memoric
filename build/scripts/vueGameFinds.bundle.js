"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}!function(e){var s={};function t(r){if(s[r])return s[r].exports;var i=s[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=s,t.d=function(e,s,r){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)t.d(r,i,function(s){return e[s]}.bind(null,i));return r},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=6)}({6:function(){document.addEventListener("DOMContentLoaded",function(){new Vue({el:"#vue-game-finds",data:{smileList:[{src:"assets/img/games/finds/em1-1.svg",id:"em1-1",idReverse:"em1-2",success:!1,error:!1},{src:"assets/img/games/finds/em1-2.svg",id:"em1-2",idReverse:"em1-1",success:!1,error:!1},{src:"assets/img/games/finds/em2-1.svg",id:"em2-1",idReverse:"em2-2",success:!1,error:!1},{src:"assets/img/games/finds/em2-2.svg",id:"em2-2",idReverse:"em2-1",success:!1,error:!1},{src:"assets/img/games/finds/em3-1.svg",id:"em3-1",idReverse:"em3-2",success:!1,error:!1},{src:"assets/img/games/finds/em3-2.svg",id:"em3-2",idReverse:"em3-1",success:!1,error:!1},{src:"assets/img/games/finds/em4-1.svg",id:"em4-1",idReverse:"em4-2",success:!1,error:!1},{src:"assets/img/games/finds/em4-2.svg",id:"em4-2",idReverse:"em4-1",success:!1,error:!1}],currentSmile:{},correctAnswer:{},currentSmileList:[],players:[],queue:0,gameCounter:0},computed:{currentPlayerName:function(){return this.players.length?this.players[this.queue].value:""}},methods:{getRandomInt:function(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e))+e},getSmile:function(){var _this=this,e=JSON.parse(JSON.stringify(this.smileList)),s=this.getRandomInt(0,this.smileList.length);this.currentSmile=e[s],this.correctAnswer=e.find(function(e){return e.id===_this.currentSmile.idReverse});for(var _e=0;_e<63;_e++){var _s=JSON.parse(JSON.stringify(this.currentSmile));_s.id=_e,this.currentSmileList[_e]=_s}this.currentSmileList[this.getRandomInt(0,63)]=this.correctAnswer},checkAnswer:function(e){e.id===this.correctAnswer.id?(e.success=!0,this.addPoints()):(e.error=!0,this.correctAnswer.success=!0),--this.gameCounter,0===this.gameCounter?setTimeout(this.endGame,300):(setTimeout(this.getSmile,1e3),setTimeout(this.nextPlayer,1e3))},nextPlayer:function(){this.queue<this.players.length-1?this.queue+=1:this.queue=0},addPoints:function(){this.players[this.queue].points+=1},endGame:function(){localStorage.setItem("players",JSON.stringify(this.players)),window.location="result.html"}},beforeMount:function(){this.getSmile(),this.players=JSON.parse(localStorage.getItem("players")),this.gameCounter=2*this.players.length}})})}});