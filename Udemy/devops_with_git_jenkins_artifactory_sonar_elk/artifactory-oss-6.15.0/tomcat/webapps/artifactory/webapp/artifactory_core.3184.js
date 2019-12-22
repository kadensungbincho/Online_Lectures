/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		7:0,
/******/ 		8:0,
/******/ 		9:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"artifactory_dao.3184","4":"artifactory_services.3184"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports) {

	/*
	 *
	 * Artifactory is a binaries repository manager.
	 * Copyright (C) 2018 JFrog Ltd.
	 *
	 * Artifactory is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU Affero General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 *  (at your option) any later version.
	 *
	 * Artifactory is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU Affero General Public License for more details.
	 *
	 * You should have received a copy of the GNU Affero General Public License
	 * along with Artifactory.  If not, see <http://www.gnu.org/licenses/>.
	 *
	 */
	"use strict";
	
	var events = {
	    ACTIVATE_TREE_SEARCH: "tree:search:activate",
	    TREE_SEARCH_CHANGE: "tree:search:change",
	    TREE_NODE_SELECT: "tree:node:select",
	    TREE_NODE_OPEN: "tree:node:open",
	    TREE_SEARCH_KEYDOWN: "tree:search:keydown",
	    TREE_SEARCH_CANCEL: "tree:search:cancel",
	    TREE_SEARCH_EDIT: "tree:search:edit",
	    TREE_SEARCH_RUNNING: "tree:search:running",
	    TREE_COMPACT: "tree:compact",
	    TREE_REFRESH: "tree:refresh",
	    TREE_REFRESH_SORTING: "tree:refresh:sorting",
	    TREE_REFRESH_FILTER: "tree:refresh:filter",
	    TREE_REFRESH_FAVORITES: "tree:refresh:favorites",
	    TREE_NODE_CM_REFRESH: "tree:node:cm:refresh",
	    TREE_COLLAPSE_ALL: "tree:collapse:all",
	    TREE_DATA_IS_SET: "tree:hasdata",
	    SEARCH_COLLAPSE: "search:collapse",
	    SEARCH: "search",
	    CLEAR_SEARCH: "search:clear",
	
	    ACTION_WATCH: "action:watch", // node
	    ACTION_UNWATCH: "action:unwatch", // node
	    ACTION_COPY: "action:copy", // node, target
	    ACTION_MOVE: "action:move", // node, target
	    ACTION_COPY_STASH: "action:copystash", // repoKey
	    ACTION_MOVE_STASH: "action:movestash", // repoKey
	    ACTION_DISCARD_STASH: "action:discardstash", //
	    ACTION_DISCARD_FROM_STASH: "action:discardfromstash", //node
	    ACTION_REFRESH_STASH: "action:refreshstash", //
	    ACTION_EXIT_STASH: "action:exitstash", //
	    ACTION_DELETE: "action:delete", // node
	    ACTION_DELETE_CONTENT: "action:delete:content", // node
	    ACTION_REFRESH: "action:refresh", // node
	    ACTION_DEPLOY: "action:deploy", // repoKey
	    ACTION_FAVORITES: "action:markfavorites",
	    DO_FAVORITES: "action:dofavorites",
	
	    BUILDS_TAB_REFRESH: "builds:tab:refresh",
	
	    FOOTER_DATA_UPDATED: "footer:data:updated",
	
	    SHOW_SPINNER: "spinner:show",
	    HIDE_SPINNER: "spinner:hide",
	    CANCEL_SPINNER: "spinner:cancel",
	
	    USER_CHANGED: "user:changed",
	    USER_LOGOUT: "user:logout", //confirmDiscard (true/false)
	
	    TAB_NODE_CHANGED: "tabs:node:changed",
	
	    SEARCH_URL_CHANGED: "search:url:changed",
	
	    FOOTER_REFRESH: "footer:refresh",
	
	    REFRESH_SETMEUP_WIZARD: "refresh:setmeup:wizard",
	
	    REFRESH_PAGE_CONTENT: "refresh:page:content" };
	
	module.exports = events;

/***/ })

/******/ });
//# sourceMappingURL=artifactory_core.js.3184.map