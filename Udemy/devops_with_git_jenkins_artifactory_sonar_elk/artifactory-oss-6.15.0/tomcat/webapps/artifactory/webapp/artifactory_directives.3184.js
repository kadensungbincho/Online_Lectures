webpackJsonp([1,7,8,9],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
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
	
	var jfAccordion = __webpack_require__(94).jfAccordion;
	
	var jfFooter = __webpack_require__(95).jfFooter;
	
	var jfHeader = __webpack_require__(96).jfHeader;
	
	var jfMessages = __webpack_require__(100).jfMessages;
	
	var jfHeaderSearch = __webpack_require__(101).jfHeaderSearch;
	
	var jfBrowseFiles = __webpack_require__(102).jfBrowseFiles;
	
	var jfSwitchToggle = __webpack_require__(103).jfSwitchToggle;
	
	var dynamicDirective = _interopRequire(__webpack_require__(104));
	
	var jfMultiDeploy = __webpack_require__(105).jfMultiDeploy;
	
	var jfSingleDeploy = __webpack_require__(107).jfSingleDeploy;
	
	var jfPrint = __webpack_require__(108).jfPrint;
	
	var jfAutoFocus = __webpack_require__(109).jfAutoFocus;
	
	var jfBodyClass = __webpack_require__(110).jfBodyClass;
	
	var jfInputTextV2 = __webpack_require__(111).jfInputTextV2;
	
	var jfCronFormatter = __webpack_require__(112).jfCronFormatter;
	
	var jfBreadcrumb = __webpack_require__(113).jfBreadcrumb;
	
	var jfSpinner = __webpack_require__(114).jfSpinner;
	
	var jfDisableFeature = __webpack_require__(115).jfDisableFeature;
	
	var jfHideForAol = __webpack_require__(116).jfHideForAol;
	
	var jfFileDrop = __webpack_require__(117).jfFileDrop;
	
	var rtfactStorageViewer = __webpack_require__(118).rtfactStorageViewer;
	
	var rtfactStorageElement = __webpack_require__(120).rtfactStorageElement;
	
	var rtfactStorageUsage = __webpack_require__(122).rtfactStorageUsage;
	
	var jfValidatorName = __webpack_require__(123).jfValidatorName;
	
	var jfValidatorNamePrefixNotNumeric = __webpack_require__(124).jfValidatorNamePrefixNotNumeric;
	
	var jfValidatorUniqueId = __webpack_require__(125).jfValidatorUniqueId;
	
	var jfValidatorXmlName = __webpack_require__(126).jfValidatorXmlName;
	
	var jfValidatorCron = __webpack_require__(127).jfValidatorCron;
	
	var jfValidatorLdapUrl = __webpack_require__(128).jfValidatorLdapUrl;
	
	var jfValidatorPathPattern = __webpack_require__(129).jfValidatorPathPattern;
	
	var jfValidatorIntValue = __webpack_require__(130).jfValidatorIntValue;
	
	var jfValidatorMaxTextLength = __webpack_require__(131).jfValidatorMaxTextLength;
	
	var jfSpecialChars = __webpack_require__(132).jfSpecialChars;
	
	var jfRepokeyValidator = __webpack_require__(133).jfRepokeyValidator;
	
	var jfValidatorDateFormat = __webpack_require__(135).jfValidatorDateFormat;
	
	var jfValidatorReverseProxyPort = __webpack_require__(136).jfValidatorReverseProxyPort;
	
	var jfManageProLicense = __webpack_require__(137).jfManageProLicense;
	
	var jfManageHaLicenses = __webpack_require__(138).jfManageHaLicenses;
	
	var jfNews = __webpack_require__(139).jfNews;
	
	var jfXucData = __webpack_require__(140).jfXucData;
	
	var infectionPathViewer = __webpack_require__(141).infectionPathViewer;
	
	angular.module("artifactory.directives", ["artifactory.services", "artifactory.dao", "ui.select", "ngSanitize", "ui.highlight"]).directive({
	    jfAccordion: jfAccordion,
	    jfFooter: jfFooter,
	    jfHeader: jfHeader,
	    jfMessages: jfMessages,
	    jfHeaderSearch: jfHeaderSearch,
	    //        'jfSidebar': jfSidebar,
	    jfBrowseFiles: jfBrowseFiles,
	    dynamicDirective: dynamicDirective,
	    jfSingleDeploy: jfSingleDeploy,
	    jfMultiDeploy: jfMultiDeploy,
	    jfPrint: jfPrint,
	    jfAutoFocus: jfAutoFocus,
	    jfBodyClass: jfBodyClass,
	    jfInputTextV2: jfInputTextV2,
	    jfSwitchToggle: jfSwitchToggle,
	    jfCronFormatter: jfCronFormatter,
	    jfSpecialChars: jfSpecialChars,
	    jfSpinner: jfSpinner,
	    jfBreadcrumb: jfBreadcrumb,
	    jfRepokeyValidator: jfRepokeyValidator,
	    jfDisableFeature: jfDisableFeature,
	    jfHideForAol: jfHideForAol,
	    jfArtFileDrop: jfFileDrop,
	    rtfactStorageViewer: rtfactStorageViewer,
	    rtfactStorageElement: rtfactStorageElement,
	    rtfactStorageUsage: rtfactStorageUsage,
	
	    jfValidatorName: jfValidatorName,
	    jfValidatorUniqueId: jfValidatorUniqueId,
	    jfValidatorXmlName: jfValidatorXmlName,
	    jfValidatorCron: jfValidatorCron,
	    jfValidatorLdapUrl: jfValidatorLdapUrl,
	    jfValidatorPathPattern: jfValidatorPathPattern,
	    jfValidatorIntValue: jfValidatorIntValue,
	    jfValidatorDateFormat: jfValidatorDateFormat,
	    jfValidatorMaxTextLength: jfValidatorMaxTextLength,
	    jfValidatorReverseProxyPort: jfValidatorReverseProxyPort,
	    jfValidatorNamePrefixNotNumeric: jfValidatorNamePrefixNotNumeric,
	
	    jfManageProLicense: jfManageProLicense,
	    jfManageHaLicenses: jfManageHaLicenses,
	    jfNews: jfNews,
	    jfXucData: jfXucData,
	    infectionPathViewer: infectionPathViewer
	});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
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

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfAccordion = jfAccordion;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfAccordionController = (function () {
	    function jfAccordionController($state, $rootScope, ArtifactoryState, $timeout) {
	        var _this = this;
	
	        _classCallCheck(this, jfAccordionController);
	
	        this.state = $state;
	        this.currentAccordion = "";
	        this.artifactoryState = ArtifactoryState;
	        this.$timeout = $timeout;
	        this.openItemByCurrentState();
	        $rootScope.$on("$stateChangeSuccess", function () {
	            return _this.openItemByCurrentState();
	        });
	    }
	
	    _createClass(jfAccordionController, {
	        openItemByCurrentState: {
	            value: function openItemByCurrentState() {
	                var _this = this;
	
	                var item = _.find(this.items, function (item) {
	                    return _this.isItemActive(item);
	                });
	                if (item) item.isOpen = true;
	            }
	        },
	        saveState: {
	            value: function saveState() {
	
	                this.artifactoryState.setState("saveAdminState", true);
	                /*
	                // ACTUAL SAVING OF LAST ADMIN STATE MOVED TO artifactory.states.mudule.js (TO PREVENT SAVING WRONG STATE WHEN CONFIRMATION MODAL IS PRESENTED)
	                        this.$timeout(()=>{
	                            this.artifactoryState.setState('lastAdminState',this.state.current);
	                            this.artifactoryState.setState('lastAdminStateParams', this.state.params);
	                        });
	                */
	            }
	        },
	        isItemActive: {
	            value: function isItemActive(item) {
	                // (Adam) - don't use $state.includes, because it goes by the route hierarchy
	                var result = _.contains(this.state.current.name, item.state);
	                // (Adam) - if item includes paramsParams, match this params with the current state
	                if (result && item.stateParams) {
	                    var relevantParams = _.pick(this.state.params, Object.keys(item.stateParams));
	                    result = angular.equals(relevantParams, item.stateParams);
	                }
	                return result;
	            }
	        }
	    });
	
	    return jfAccordionController;
	})();
	
	function jfAccordion() {
	
	    return {
	        restrict: "EA",
	        scope: { items: "=" },
	        controller: jfAccordionController,
	        controllerAs: "jfAccordion",
	        templateUrl: "directives/jf_accordion/jf_accordion.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfFooter = jfFooter;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfFooterController = function jfFooterController() {
	    _classCallCheck(this, jfFooterController);
	};
	
	function jfFooter() {
	    return {
	        controller: jfFooterController,
	        controllerAs: "jfFooter",
	        templateUrl: "directives/jf_footer/jf_footer.html"
	    };
	}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfHeader = jfHeader;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var API = _interopRequire(__webpack_require__(97));
	
	var HELP = _interopRequire(__webpack_require__(98));
	
	var HELP_JCR = _interopRequire(__webpack_require__(99));
	
	var jfHeaderController = (function () {
	    function jfHeaderController($scope, $q, User, $state, $stateParams, $timeout, $window, GeneralConfigDao, FooterDao, JFrogEventBus, ArtifactoryFeatures, $rootScope, $location, $http, ArtifactoryState, ArtifactoryHttpClient, OnBoardingWizard, GoogleAnalytics) {
	        var _this = this;
	
	        _classCallCheck(this, jfHeaderController);
	
	        this.$scope = $scope;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.User = User;
	        this.generalConfigDao = GeneralConfigDao;
	        this.footerDao = FooterDao;
	        this.artifactoryState = ArtifactoryState;
	        this.JFrogEventBus = JFrogEventBus;
	        this.user = User;
	        this.features = ArtifactoryFeatures;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.state = $state;
	        this.$timeout = $timeout;
	        this.$window = $window;
	        this.$q = $q;
	        this.logoEndPoint = "" + API.API_URL + "/auth/screen/logo";
	        this.defaultLogoUrl = "images/artifactory_logo.3184.svg";
	        this.HELP = this.features.isJCR() ? HELP_JCR : HELP;
	        this.OnBoardingWizard = OnBoardingWizard;
	
	        this.ArtifactoryHttpClient = ArtifactoryHttpClient;
	
	        //$.getJSON('artifactory_help.json', (jsonRes) => {
	        //    this.HELP = jsonRes;
	        //    this._refreshHelpMenu($location.path());
	        //})
	        //        .fail((errRes) => {
	        //            if (errRes.status != 404) {
	        //                let body = `Cannot parse the local help links file 'artifactory_help.json'.<br>The default file will be loaded instead.`;
	        //                JFrogNotifications.createMessageWithHtml({type: 'error', body: body, timeout: 0});
	        //            }
	        //        });
	
	        var unregister = $rootScope.$watch(function () {
	            return $location.path();
	        }, function (currentURL) {
	            _this._refreshHelpMenu(currentURL);
	        });
	
	        $scope.$on("$destroy", function () {
	            unregister();
	        });
	
	        this._registerEvents();
	        $timeout(function () {
	            _this._getFooterData();
	        });
	    }
	
	    _createClass(jfHeaderController, {
	        _registerEvents: {
	            value: function _registerEvents() {
	                var _this = this;
	
	                this.JFrogEventBus.registerOnScope(this.$scope, EVENTS.FOOTER_DATA_UPDATED, function () {
	                    return _this._getFooterData(true);
	                });
	            }
	        },
	        _getFooterData: {
	            value: function _getFooterData(force) {
	                var _this = this;
	
	                this.footerDao.get(force).then(function (footerData) {
	                    _this.$window.document.title = footerData.serverName ? footerData.serverName : _this.features.getGlobalName();
	
	                    _this.helpLinksEnabled = footerData.helpLinksEnabled;
	
	                    _this.samlRedirectEnabled = footerData.samlRedirectEnabled;
	
	                    if (footerData.userLogo) {
	                        _this.logoUrl = "";
	                        _this.$timeout(function () {
	                            _this.logoUrl = _this.logoEndPoint;
	                        });
	                    } else if (footerData.logoUrl) _this.logoUrl = footerData.logoUrl;else if (_this.features.isJCR()) {
	                        _this.logoUrl = "images/jcr_logo.3184.svg";
	                    } else if (_this.features.isConanCE()) {
	                        _this.logoUrl = "images/artifactory_conan_ce.3184.svg";
	                    } else if (_this.features.isJCR()) {
	                        // todo:JCR: get proper logo...
	                        _this.logoUrl = _this.defaultLogoUrl;
	                    } else if (_this.features.isEdgeNode()) {
	                        _this.logoUrl = "images/artifactory_edge.3184.svg";
	                    } else _this.logoUrl = _this.defaultLogoUrl;
	
	                    if ((_this.user.currentUser.name !== "anonymous" || _this.user.currentUser.anonAccessEnabled) && (footerData.systemMessage || footerData.systemMessageTitle)) _this.artifactoryState.setState("systemMessage", {
	                        enabled: footerData.systemMessageEnabled,
	                        color: footerData.systemMessageTitleColor,
	                        title: footerData.systemMessageTitle,
	                        message: footerData.systemMessage,
	                        inAllPages: footerData.showSystemMessageOnAllPages
	                    });else _this.artifactoryState.setState("systemMessage", undefined);
	                });
	            }
	        },
	        _refreshHelpMenu: {
	            value: function _refreshHelpMenu(currentURL) {
	                this.helpLinks = [];
	
	                for (var key in this.HELP) {
	                    if (currentURL == key || key.indexOf("**") != -1 && currentURL.indexOf(key.replace("**", "")) != -1) for (var i = 0; i < this.HELP[key].length; i++) {
	                        this.helpLinks.push(this.HELP[key][i]);
	                    }
	                }
	            }
	        },
	        login: {
	            value: function login() {
	                var _this = this;
	
	                if (this.samlRedirectEnabled) {
	                    this.user.getLoginData(this.$stateParams.redirectTo).then(function (res) {
	                        if (res.ssoProviderLink) {
	                            _this.$window.open(res.ssoProviderLink, "_self");
	                        } else {
	                            _this.state.go("login");
	                        }
	                    });
	                } else {
	                    this.state.go("login");
	                }
	            }
	        },
	        logout: {
	            /**
	             * Logout is dispatching an event.
	             * The handler also checks if the current state is one of the admin states.
	             * This is done in order to make sure that logout happens only after all open admin states (windows) are closed.
	             * Otherwise the user could be stuck with an unresponsive screen.
	             * */
	
	            value: function logout() {
	                this.JFrogEventBus.dispatch(EVENTS.USER_LOGOUT, this.state.current.name.startsWith("admin.") || this.state.current.name === "user_profile");
	
	                /*
	                        this.user.logout()
	                                .then(() => {
	                                    this.state.go("home");
	                                });
	                */
	            }
	        },
	        initQuickActions: {
	            value: function initQuickActions(actionsController) {
	                var _this = this;
	
	                this.quickActions = actionsController;
	                var dictionary = {
	                    quickRepo: { title: "Quick Setup" },
	                    createLocal: { title: "Local Repository" },
	                    createRemote: { title: "Remote Repository" },
	                    createVirtual: { title: "Virtual Repository" },
	                    createDist: { title: "Distribution Repository" },
	                    createUser: { title: "Add User" },
	                    createGroup: { title: "Add Group" },
	                    createPerm: { title: "Add Permission" },
	                    userProfile: { title: "Edit Profile" },
	                    logout: { title: "Log Out" } };
	
	                var onEveryAction = function (action) {
	                    // make sure dropdown is closed (strangely, sometimes it does not)
	                    _this.$timeout(function () {
	                        if (_this.quickActions.isDropdownOpen) {
	                            _this.quickActions.hideDropdown();
	                        }
	                        _this.artifactoryState.setState("clearErrorsOnStateChange", true);
	                        _this.GoogleAnalytics.trackEvent("Top Bar", "Quick Actions", action);
	                    }, 100);
	                };
	
	                actionsController.setActionsDictionary(dictionary);
	                actionsController.setActions([{
	                    name: "quickRepo",
	                    icon: "icon-quicksetup",
	                    action: function () {
	                        onEveryAction("Quick Wizard");
	                        _this.launchQuickSetup();
	                    }
	                }, {
	                    name: "createLocal",
	                    icon: "icon-local-repo",
	                    action: function () {
	                        onEveryAction("Local repository");
	                        _this.$state.go("admin.repositories.list.new", { repoType: "local" });
	                    }
	                }, {
	                    name: "createRemote",
	                    icon: "icon-remote-repo",
	                    action: function () {
	                        onEveryAction("Remote repository");
	                        _this.$state.go("admin.repositories.list.new", { repoType: "remote" });
	                    },
	                    visibleWhen: function () {
	                        return !_this.features.isEdgeNode();
	                    }
	                }, {
	                    name: "createVirtual",
	                    icon: "icon-virtual-repo",
	                    action: function () {
	                        onEveryAction("Virtual repository");
	                        _this.$state.go("admin.repositories.list.new", { repoType: "virtual" });
	                    }
	                }, {
	                    name: "createDist",
	                    icon: "icon-distribution-repo",
	                    action: function () {
	                        onEveryAction("Distribution repository");
	                        _this.$state.go("admin.repositories.list", { repoType: "distribution", action: "openCreationDropdowns" });
	                    },
	                    visibleWhen: function () {
	                        return !_this.features.isEdgeNode();
	                    }
	                }, {
	                    name: "createUser",
	                    action: function () {
	                        onEveryAction("Add User");
	                        _this.$state.go("admin.security.users.new");
	                    },
	                    itemClass: "top-sep"
	                }, {
	                    name: "createGroup",
	                    action: function () {
	                        onEveryAction("Add Group");
	                        _this.$state.go("admin.security.groups.new");
	                    }
	                }, {
	                    name: "createPerm",
	                    action: function () {
	                        onEveryAction("Add Permission");
	                        _this.$state.go("admin.security.permissions.new");
	                    }
	                }, {
	                    name: "userProfile",
	                    icon: "icon-artifactory-edit",
	                    action: function () {
	                        onEveryAction("User Profile");
	                        _this.$state.go("user_profile");
	                    },
	                    itemClass: "top-sep"
	                }, {
	                    name: "logout",
	                    icon: "icon-logout",
	                    action: function () {
	                        onEveryAction("Logout");
	                        _this.logout();
	                    }
	                }]);
	
	                $("body").on("click", function (e) {
	                    if (!$(e.target).hasClass("user-header-section") && !$(e.target).hasClass("icon-more") && !$(e.target).hasClass("actions-more") && !$(e.target).hasClass("action-button")) {
	                        actionsController.hideDropdown();
	                    }
	                });
	            }
	        },
	        isQuickActionsAvailable: {
	            value: function isQuickActionsAvailable() {
	                this.currentUser = this.User.getCurrent();
	                var initStatus = this.artifactoryState.getState("initStatus");
	                return this.currentUser.isAdmin() && initStatus && (initStatus.hasLicenseAlready || this.features.isNonCommercial());
	            }
	        },
	        launchQuickSetup: {
	            value: function launchQuickSetup() {
	                //this.GoogleAnalytics.trackEvent('Homepage','Quick repository setup')
	                this.OnBoardingWizard.show(true);
	            }
	        },
	        onClickUserHeaderSection: {
	            value: function onClickUserHeaderSection(e) {
	                if (!this.isQuickActionsAvailable()) {
	                    return;
	                }if ($(e.target).hasClass("icon-more") || $(e.target).hasClass("actions-more") || $(e.target).hasClass("icon-small-arrow-down")) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    return;
	                }
	
	                if (!this.quickActions.isDropdownOpen) {
	                    this.quickActions.showDropdown();
	                } else {
	                    this.quickActions.hideDropdown();
	                }
	            }
	        },
	        onClickUserProfile: {
	            value: function onClickUserProfile(e) {
	                if (!this.isQuickActionsAvailable()) {
	                    this.$state.go("user_profile");
	                } else {
	                    this.$timeout(function () {
	                        return $(".user-header-section").click();
	                    });
	                    e.preventDefault();
	                    e.stopPropagation();
	                }
	            }
	        },
	        isRedirecting: {
	            value: function isRedirecting() {
	                return this.$state.current.name === "login" && angular.isDefined(this.$stateParams.redirectTo);
	            }
	        },
	        isSSOMode: {
	            value: function isSSOMode() {
	                return this.$state.current.name === "login" && !this.features.isNonCommercial();
	            }
	        }
	    });
	
	    return jfHeaderController;
	})();
	
	function jfHeader() {
	    return {
	        scope: {
	            hideSearch: "@"
	        },
	        controller: jfHeaderController,
	        controllerAs: "jfHeader",
	        bindToController: true,
	        templateUrl: "directives/jf_header/jf_header.html"
	    };
	}

/***/ }),
/* 97 */
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
	
	module.exports = {
	    API_URL: "../ui",
	    AUTH_LOGIN: "/auth/login?_spring_security_remember_me=",
	    AUTH_CURRENT: "/auth/current",
	    AUTH_LOGOUT: "/auth/logout",
	    AUTH_IS_SAML: "/auth/issaml",
	    AUTH_REDIRECT: "/auth/redirect?redirectTo=",
	    AUTH_FORGOT_PASSWORD: "/auth/forgotpassword",
	    AUTH_VALIDATE_KEY: "/auth/validatetoken?key=",
	    AUTH_RESET_PASSWORD: "/auth/resetpassword?key=",
	    AUTH_LOGIN_DATA: "/auth/loginRelatedData",
	    AUTH_CAN_ANNOTATE: "/auth/canAnnotate?repoKey=",
	    BASIC_CONFIG: "/basicConfig",
	    CRYPTO: "/crypto",
	    SECURITY_CONFIG: "/securityconfig",
	    USERS: "/users",
	    GROUPS: "/groups",
	    GROUP_PERMISSION: "/groupPermission",
	    MAIL: "/mail",
	    REGISTER_PRO: "/registerlicense",
	    MANAGE_HA_LICENSES: "/manageLicenses",
	    PROXIES: "/proxies",
	    REVERSE_PROXIES: "/reverseProxies",
	    HTTPSSO: "/httpsso",
	    SSHSERVER: "/sshserver",
	    LICENSES: "/licenses",
	    HIGH_AVAILABILITY: "/highAvailability",
	    XRAY: "/xrayRepo",
	    XRAY_CONFIG: "/xrayConfig",
	    SAML_CONFIG: "/saml/config",
	    SAML_DOWNLOAD_ENCRYPTED_ASSERTION_CERT: "/saml/config/key/public",
	    SAML_LOGOUT: "/saml/logoutRequest",
	    OAUTH_LOGIN: "/oauth2/loginRequest",
	    BINTRAY_SETTING: "/bintraysetting",
	    PROPERTY_SETS: "/propertysets",
	    BROWSE_FILESYSTEM: "/browsefilesystem",
	    BACKUP: "/backup",
	    SYSTEM_INFO: "/systeminfo",
	    CONFIG_DESCRIPTOR: "/configdescriptor",
	    SECURITY_DESCRIPTOR: "/securitydescriptor",
	    INDEXER: "/indexer",
	    STORAGE_SUMMARY: "/storagesummary",
	    TREE_BROWSER: "/treebrowser",
	    REPO_DATA: "/repodata",
	    CRON_TIME: "/crontime",
	    DATE_FORMAT: "/validations/dateformat",
	    NAME_VALIDATOR: "/validations/name",
	    UNIQUE_ID_VALIDATOR: "/validations/uniqueid",
	    XML_NAME_VALIDATOR: "/validations/xmlname",
	    ARTIFACT_PERMISSIONS: "/artifactpermissions",
	    ARTIFACT_GENERAL: "/artifactgeneral",
	    ARTIFACT_GENERAL_BINTRAY: "/artifactgeneral/bintray",
	    ARTIFACT_GENERAL_BINTRAY_DIST: "/artifactgeneral/bintray/dist",
	    ARTIFACT_VIEW_SOURCE: "/archiveViewSource",
	    ARTIFACT_BUILDS: "/artifactbuilds",
	    ARTIFACT_XRAY: "/artifactxray",
	    ARTIFACT_ACTIONS: "/artifactactions",
	    ARTIFACT_PROPERTIES: "/artifactproperties",
	    PREDEFINE_VALUES: "/predefinevalues",
	    REPO_PROPERTY_SET: "/repopropertyset",
	    ARTIFACT_WATCHES: "/artifactwatches",
	    ARTIFACT_SEARCH: "/artifactsearch",
	    DEPENDENCY_DECLARATION: "/dependencydeclaration",
	    ARTIFACT: "/artifact",
	    FOOTER: "/auth/screen/footer",
	    VIEWS: "/views",
	    CROWD: "/crowd",
	    EXPORT: "/artifactexport",
	    IMPORT: "/artifactimport",
	    MAINTENANCE: "/maintenance",
	    LDAP: "/ldap",
	    OAUTH: "/oauth",
	    CHECKSUMS: "/checksums",
	    FILTERED_RESOURCE: "/filteredResource",
	    LDAP_GROUPS: "/ldapgroups",
	    PUSH_TO_BINTRAY: "/pushToBintray",
	    BINTRAY_DISTRIBUTION: "/distribution",
	    GENERAL_CONFIG: "/generalConfig",
	    ONBOARDING: "/onboarding",
	    SIGNINGKEYS: "/signingkeys",
	    TRUSTEDKEYS: "/security/trustedKeys",
	    SSLCERTIFICATES: "/admin/security/certificates",
	    ACCESSTOKENS: "/admin/security/accesstokens",
	    KEYSTORE: "/keystore",
	    USER_PROFILE: "/userProfile",
	    SSH_CLIENT: "/sshClient",
	    USER_API_KEY: "/userApiKey",
	    BUILDS: "/builds",
	    BUNDLES: "/bundles",
	    BUILDS_INFO: "/buildsinfo", /// JUST FOR MOCK, WILL BE REMOVED
	    PERMISSION_TARGETS: "/permissiontargets",
	    GENERAL_TAB_LICENSES: "/generalTabLicenses",
	    HOME_PAGE: "/home",
	    SYSTEM_LOGS: "/systemlogs",
	    SET_ME_UP: "/setMeUp",
	    SET_ME_UP_MAVEN: "/setMeUp/mavenSettings",
	    SET_ME_UP_GRADLE: "/setMeUp/gradleSettings",
	    SET_ME_UP_IVY: "/setMeUp/ivySettings",
	    SET_ME_UP_MAVEN_DISTRIBUTION: "/setMeUp/mavenDistributionManagement",
	    SET_ME_UP_MAVEN_SNIPPET: "/setMeUp/mavenSnippet",
	    SET_ME_UP_GRADLE_SNIPPET: "/setMeUp/gradleSnippet",
	    SET_ME_UP_IVY_SNIPPET: "/setMeUp/ivySnippet",
	    SET_ME_UP_REVERSE_PROXY_DATA: "/setMeUp/reverseProxyData",
	    REPOSITORIES: "/admin/repositories",
	    REPOSITORIES_LAYOUTS: "/admin/repolayouts",
	    STASH_RESULTS: "/stashResults",
	    SUPPORT_PAGE: "/userSupport",
	    SERVER_TIME: "/system/serverTime",
	    LICENSE_DETAILS: "/system/license",
	    BINARY_PROVIDERS_INFO: "/binary/providers/info",
	    DOCKER_STATUS: "/admin/repositories/getdockerstatus",
	    GLOBAL_REPLICATIONS_BLOCK: "/global/replications/config",
	    SUMOLOGIC: "/sumologic",
	    JCR_EULA: "/jcr/eula",
	    JCR_NEWSLETTER: "/jcr/subscription",
	    MINI_XRAY: "/jcr/xray" };

/***/ }),
/* 98 */
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
	
	module.exports = {
	    "/**": [{
	        title: "User Guide",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+User+Guide",
	        priority: 0
	    }, {
	        title: "REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API",
	        priority: 0
	    }],
	
	    "/home": [{
	        title: "General Information",
	        link: "https://www.jfrog.com/confluence/display/RTF/General+Information",
	        priority: 1
	    }],
	    "/profile": [{
	        title: "Updating Your Profile",
	        link: "https://www.jfrog.com/confluence/display/RTF/Updating+Your+Profile",
	        priority: 1
	    }],
	    "/forgot-password": [{
	        title: "Forgot Password",
	        link: "https://www.jfrog.com/confluence/display/RTF/Updating+Your+Profile#UpdatingYourProfile-ResettingYourPassword",
	        priority: 1
	    }],
	
	    "/artifacts/browse/tree/**": [{
	        title: "Browsing Artifacts",
	        link: "https://www.jfrog.com/confluence/display/RTF/Browsing+Artifactory#BrowsingArtifactory-TreeBrowsing",
	        priority: 1
	    }],
	    "/artifacts/browse/simple/**": [{
	        title: "Browsing Artifacts",
	        link: "https://www.jfrog.com/confluence/display/RTF/Browsing+Artifactory#BrowsingArtifactory-SimpleBrowsing",
	        priority: 1
	    }],
	    "/artifacts/browse/**": [{
	        title: "Deploying Artifacts",
	        link: "https://www.jfrog.com/confluence/display/RTF/Deploying+Artifacts",
	        priority: 2
	    }, {
	        title: "Set Me Up",
	        link: "https://www.jfrog.com/confluence/display/RTF/Using+Artifactory#UsingArtifactory-SetMeUp",
	        priority: 5
	    }, {
	        title: "Deploy Artifact with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-DeployArtifact",
	        priority: 200
	    }],
	
	    "/artifacts/browse/tree/search/**": [{
	        title: "Searching Artifacts",
	        link: "https://www.jfrog.com/confluence/display/RTF/Searching+Artifacts",
	        priority: 3
	    }, {
	        title: "Stash Search Results",
	        link: "https://www.jfrog.com/confluence/display/RTF/Searching+for+Artifacts#SearchingforArtifacts-SavingSearchResultsintheStash",
	        priority: 4
	    }, {
	        title: "Artifactory Query Language",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ArtifactoryQueryLanguage%28AQL%29",
	        priority: 200
	    }],
	
	    // Every search type needs a duplicated entry, one under the tree search and one for simple
	
	    "/artifacts/browse/tree/search/quick/**": [{
	        title: "Execute Quick Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ArtifactSearch%28QuickSearch%29",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/quick/**": [{
	        title: "Execute Quick Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ArtifactSearch%28QuickSearch%29",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/class/**": [{
	        title: "Execute Archive Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ArchiveEntrySearch%28ClassSearch%29",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/class/**": [{
	        title: "Execute Archive Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ArchiveEntrySearch%28ClassSearch%29",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/gavc/**": [{
	        title: "Execute GAVC Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-GAVCSearch",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/gavc/**": [{
	        title: "Execute GAVC Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-GAVCSearch",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/property/**": [{
	        title: "Execute Property Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-PropertySearch",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/property/**": [{
	        title: "Execute Property Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-PropertySearch",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/checksum/**": [{
	        title: "Execute Checksum Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ChecksumSearch",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/checksum/**": [{
	        title: "Execute Checksum Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ChecksumSearch",
	        priority: 200
	    }],
	    //"/artifacts/browse/tree/search/remote/**": [
	    //    {
	    //        title: "",
	    //        link: "",
	    //        priority: 200
	    //    }
	    //],
	    //"/artifacts/browse/simple/search/remote/**": [
	    //    {
	    //        title: "",
	    //        link: "",
	    //        priority: 200
	    //    }
	    //],
	
	    "/builds/**": [{
	        title: "Build Integration",
	        link: "https://www.jfrog.com/confluence/display/RTF/Build+Integration",
	        priority: 1
	    }, {
	        title: "Upload Build with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-BuildUpload",
	        priority: 200
	    }],
	
	    "/admin/repositories/**": [{
	        title: "Configuring Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Configuring+Repositories",
	        priority: 100
	    }, {
	        title: "Single Package Type Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Upgrading+Artifactory#UpgradingArtifactory-SinglePackageTypeRepositories",
	        priority: 101
	    }, {
	        title: "Create Repository with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplaceRepositoryConfiguration",
	        priority: 200
	    }],
	
	    "/admin/repository/**": [{
	        title: "Single Package Type Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Upgrading+Artifactory#UpgradingArtifactory-SinglePackageTypeRepositories",
	        priority: 101
	    }, {
	        title: "Create Repository with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplaceRepositoryConfiguration",
	        priority: 200
	    }],
	
	    "/admin/repositories/local": [{
	        title: "Local Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Local+Repositories",
	        priority: 1
	    }],
	    "/admin/repository/local/**": [{
	        title: "Local Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Local+Repositories",
	        priority: 1
	    }, {
	        title: "Repository Replication",
	        link: "https://www.jfrog.com/confluence/display/RTF/Repository+Replication",
	        priority: 2
	    }],
	
	    "/admin/repositories/remote": [{
	        title: "Remote Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Remote+Repositories",
	        priority: 1
	    }],
	    "/admin/repository/remote/**": [{
	        title: "Remote Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Remote+Repositories",
	        priority: 1
	    }, {
	        title: "Pull Replication",
	        link: "https://www.jfrog.com/confluence/display/RTF/Repository+Replication#RepositoryReplication-PullReplication",
	        priority: 2
	    }],
	
	    "/admin/repositories/virtual": [{
	        title: "Virtual Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Virtual+Repositories",
	        priority: 1
	    }, {
	        title: "Deploying to a Virtual Repository",
	        link: "https://www.jfrog.com/confluence/display/RTF/Deploying+Artifacts#DeployingArtifacts-DeployingtoaVirtualRepository",
	        priority: 2
	    }],
	    "/admin/repository/virtual/**": [{
	        title: "Virtual Repositories",
	        link: "https://www.jfrog.com/confluence/display/RTF/Virtual+Repositories",
	        priority: 1
	    }, {
	        title: "Deploying to a Virtual Repository",
	        link: "https://www.jfrog.com/confluence/display/RTF/Deploying+Artifacts#DeployingArtifacts-DeployingtoaVirtualRepository",
	        priority: 2
	    }],
	
	    "/admin/repo_layouts**": [{
	        title: "Repository Layouts",
	        link: "https://www.jfrog.com/confluence/display/RTF/Repository+Layouts",
	        priority: 1
	    }],
	
	    "/admin/configuration/licenses": [{
	        title: "License Control",
	        link: "https://www.jfrog.com/confluence/display/RTF/License+Control",
	        priority: 1
	    }],
	    "/admin/configuration/black_duck": [{
	        title: "Black Duck Integration",
	        link: "https://www.jfrog.com/confluence/display/RTF/Black+Duck+Code+Center+Integration",
	        priority: 1
	    }],
	    "/admin/configuration/property_sets**": [{
	        title: "Property Sets",
	        link: "https://www.jfrog.com/confluence/display/RTF/Properties",
	        priority: 1
	    }],
	    "/admin/configuration/proxies**": [{
	        title: "Managing Proxies",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Proxies",
	        priority: 1
	    }],
	    "/admin/configuration/mail": [{
	        title: "Mail Configuration",
	        link: "https://www.jfrog.com/confluence/display/RTF/Mail+Server+Configuration",
	        priority: 1
	    }],
	    "/admin/configuration/ha": [{
	        title: "High Availability",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+High+Availability",
	        priority: 1
	    }],
	    "/admin/configuration/register_pro": [{
	        title: "Activating License",
	        link: "https://www.jfrog.com/confluence/display/RTF/Activating+Artifactory+Pro",
	        priority: 1
	    }],
	
	    "/admin/security/users**": [{
	        title: "User Management",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Users",
	        priority: 1
	    }, {
	        title: "Create User with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplaceUser",
	        priority: 200
	    }],
	    "/admin/security/groups**": [{
	        title: "Group Management",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Users#ManagingUsers-CreatingandEditingGroups",
	        priority: 1
	    }, {
	        title: "Create Group with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplaceGroup",
	        priority: 200
	    }],
	    "/admin/security/permissions**": [{
	        title: "Permission Management",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Permissions",
	        priority: 1
	    }, {
	        title: "Create Permission with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplacePermissionTarget",
	        priority: 200
	    }],
	
	    // Remove after fixing the url of the new permission form
	
	    "/admin/security/permission/**": [{
	        title: "Permission Management",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Permissions",
	        priority: 1
	    }, {
	        title: "Create Permission with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-CreateorReplacePermissionTarget",
	        priority: 200
	    }],
	
	    "/admin/security/ldap_settings": [{
	        title: "LDAP Settings",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Security+with+LDAP",
	        priority: 1
	    }, {
	        title: "LDAP Groups",
	        link: "https://www.jfrog.com/confluence/display/RTF/LDAP+Groups",
	        priority: 2
	    }],
	    "/admin/security/ldap_settings/**": [{
	        title: "LDAP Settings",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Security+with+LDAP",
	        priority: 1
	    }],
	    "/admin/security/ldap_groups/**": [{
	        title: "LDAP Groups",
	        link: "https://www.jfrog.com/confluence/display/RTF/LDAP+Groups",
	        priority: 1
	    }],
	    "/admin/security/crowd_integration": [{
	        title: "Crowd Integration",
	        link: "https://www.jfrog.com/confluence/display/RTF/Atlassian+Crowd+Integration",
	        priority: 1
	    }],
	    "/admin/security/saml_integration": [{
	        title: "SAML Integration",
	        link: "https://www.jfrog.com/confluence/display/RTF/SAML+SSO+Integration",
	        priority: 1
	    }],
	    "/admin/security/http_sso": [{
	        title: "HTTP SSO",
	        link: "https://www.jfrog.com/confluence/display/RTF/Single+Sign-on",
	        priority: 1
	    }],
	    "/admin/security/ssh_server": [{
	        title: "SSH Server",
	        link: "https://www.jfrog.com/confluence/display/RTF/SSH+Integration",
	        priority: 1
	    }],
	    "/admin/security/signing_keys": [{
	        title: "Signing Keys",
	        link: "https://www.jfrog.com/confluence/display/RTF/Master+Key+Encryption",
	        priority: 1
	    }, {
	        title: "Signing Debian Packages",
	        link: "https://www.jfrog.com/confluence/display/RTF/Debian+Repositories#DebianRepositories-SigningDebianPackages",
	        priority: 2
	    }],
	
	    "/admin/services/backups**": [{
	        title: "Backup Management",
	        link: "https://www.jfrog.com/confluence/display/RTF/Managing+Backups",
	        priority: 1
	    }],
	    "/admin/services/indexer": [{
	        title: "Maven Indexer",
	        link: "https://www.jfrog.com/confluence/display/RTF/Exposing+Maven+Indexes",
	        priority: 1
	    }],
	
	    "/admin/import_export**": [{
	        title: "Importing & Exporting",
	        link: "https://www.jfrog.com/confluence/display/RTF/Importing+and+Exporting",
	        priority: 1
	    }],
	    "/admin/import_export/repositories": [{
	        title: "Repository Import with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ImportRepositoryContent",
	        priority: 200
	    }],
	    "/admin/import_export/system": [{
	        title: "System Import with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-FullSystemImport",
	        priority: 200
	    }, {
	        title: "System Export with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-ExportSystem",
	        priority: 200
	    }],
	
	    "/admin/advanced/system_info": [{
	        title: "System Info",
	        link: "https://www.jfrog.com/confluence/display/RTF/System+Information",
	        priority: 1
	    }, {
	        title: "Get Sysmtem Info with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-SystemInfo",
	        priority: 200
	    }],
	    "/admin/advanced/system_logs": [{
	        title: "Artifactory Logs",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+Log+Files",
	        priority: 1
	    }],
	    "/admin/advanced/maintenance": [{
	        title: "Maintenance",
	        link: "https://www.jfrog.com/confluence/display/RTF/Regular+Maintenance+Operations",
	        priority: 1
	    }],
	    "/admin/advanced/storage_summary": [{
	        title: "Monitoring Storage",
	        link: "https://www.jfrog.com/confluence/display/RTF/Monitoring+Storage",
	        priority: 1
	    }],
	    "/admin/advanced/config_descriptor": [{
	        title: "Configuration Files",
	        link: "https://www.jfrog.com/confluence/display/RTF/Configuration+Files",
	        priority: 1
	    }, {
	        title: "Get Config Descriptor with REST API",
	        link: "https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-GeneralConfiguration",
	        priority: 200
	    }],
	    "/admin/advanced/security_descriptor": [{
	        title: "Security Configuration",
	        link: "https://www.jfrog.com/confluence/display/RTF/Configuring+Security",
	        priority: 1
	    }]
	};

/***/ }),
/* 99 */
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
	
	module.exports = {
	    "/**": [{
	        title: "User Guide",
	        link: "https://www.jfrog.com/confluence/display/JCR/Welcome+to+JFrog+Container+Registry",
	        priority: 0
	    }, {
	        title: "REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API",
	        priority: 0
	    }],
	
	    "/home": [{
	        title: "General Information",
	        link: "https://www.jfrog.com/confluence/display/JCR/General+Information",
	        priority: 1
	    }],
	    "/profile": [{
	        title: "Updating Your Profile",
	        link: "https://www.jfrog.com/confluence/display/JCR/Updating+Your+Profile",
	        priority: 1
	    }],
	    "/forgot-password": [{
	        title: "Forgot Password",
	        link: "https://www.jfrog.com/confluence/display/JCR/Updating+Your+Profile#UpdatingYourProfile-ChangingYourPasswordandEmail",
	        priority: 1
	    }],
	
	    "/artifacts/browse/tree/**": [{
	        title: "Browsing Artifacts",
	        link: "https://www.jfrog.com/confluence/display/JCR/Browsing+JFrog+Container+Registry",
	        priority: 1
	    }],
	    "/artifacts/browse/simple/**": [{
	        title: "Browsing Artifacts",
	        link: "https://www.jfrog.com/confluence/display/JCR/Browsing+JFrog+Container+Registry",
	        priority: 1
	    }],
	    "/artifacts/browse/**": [{
	        title: "Deploying Artifacts",
	        link: "https://www.jfrog.com/confluence/display/JCR/Deploying+Artifacts",
	        priority: 2
	    }, {
	        title: "Set Me Up",
	        link: "https://www.jfrog.com/confluence/display/JCR/User+Guide",
	        priority: 5
	    }, {
	        title: "Deploy Artifact with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-DeployArtifact",
	        priority: 200
	    }],
	
	    "/artifacts/browse/tree/search/**": [{
	        title: "Searching Artifacts",
	        link: "https://www.jfrog.com/confluence/display/JCR/Searching+for+Artifacts",
	        priority: 3
	    }, {
	        title: "Artifactory Query Language",
	        link: "https://www.jfrog.com/confluence/display/JCR/Artifactory+Query+Language",
	        priority: 200
	    }],
	
	    // Every search type needs a duplicated entry, one under the tree search and one for simple
	
	    "/artifacts/browse/tree/search/quick/**": [{
	        title: "Execute Quick Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ArtifactSearch(QuickSearch)",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/quick/**": [{
	        title: "Execute Quick Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ArtifactSearch(QuickSearch)",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/class/**": [{
	        title: "Execute Archive Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ArchiveEntriesSearch(ClassSearch)",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/class/**": [{
	        title: "Execute Archive Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ArchiveEntriesSearch(ClassSearch)",
	        priority: 200
	    }],
	    "/artifacts/browse/tree/search/property/**": [{
	        title: "Execute Property Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-PropertySearch",
	        priority: 200
	    }],
	    "/artifacts/browse/simple/search/property/**": [{
	        title: "Execute Property Search with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-PropertySearch",
	        priority: 200
	    }],
	
	    "/builds/**": [{
	        title: "Build Integration",
	        link: "https://www.jfrog.com/confluence/display/JCR/Build+Integration",
	        priority: 1
	    }, {
	        title: "Upload Build with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-BuildUpload",
	        priority: 200
	    }],
	
	    "/admin/repositories/**": [{
	        title: "Configuring Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Configuring+Repositories",
	        priority: 100
	    }],
	
	    "/admin/repositories/local": [{
	        title: "Local Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Local+Repositories",
	        priority: 1
	    }],
	    "/admin/repository/local/**": [{
	        title: "Local Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Local+Repositories",
	        priority: 1
	    }],
	
	    "/admin/repositories/remote": [{
	        title: "Remote Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Remote+Repositories",
	        priority: 1
	    }],
	    "/admin/repository/remote/**": [{
	        title: "Remote Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Remote+Repositories",
	        priority: 1
	    }],
	
	    "/admin/repositories/virtual": [{
	        title: "Virtual Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Virtual+Repositories",
	        priority: 1
	    }, {
	        title: "Deploying to a Virtual Repository",
	        link: "https://www.jfrog.com/confluence/display/JCR/Virtual+Repositories#VirtualRepositories-DeployingtoaVirtualRepository",
	        priority: 2
	    }],
	    "/admin/repository/virtual/**": [{
	        title: "Virtual Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Virtual+Repositories",
	        priority: 1
	    }, {
	        title: "Deploying to a Virtual Repository",
	        link: "https://www.jfrog.com/confluence/display/JCR/Virtual+Repositories#VirtualRepositories-DeployingtoaVirtualRepository",
	        priority: 2
	    }],
	    "/admin/repositories/distribution": [{
	        title: "Distribution Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Distribution+Repository",
	        priority: 1
	    }],
	    "/admin/repositories/distribution/**": [{
	        title: "Distribution Repositories",
	        link: "https://www.jfrog.com/confluence/display/JCR/Distribution+Repository",
	        priority: 1
	    }],
	
	    "/admin/repo_layouts**": [{
	        title: "Repository Layouts",
	        link: "https://www.jfrog.com/confluence/display/JCR/Repository+Layouts",
	        priority: 1
	    }],
	
	    "/admin/configuration/property_sets**": [{
	        title: "Property Sets",
	        link: "https://www.jfrog.com/confluence/display/JCR/Properties",
	        priority: 1
	    }],
	    "/admin/configuration/proxies**": [{
	        title: "Managing Proxies",
	        link: "https://www.jfrog.com/confluence/display/JCR/Managing+Proxies",
	        priority: 1
	    }],
	    "/admin/configuration/mail": [{
	        title: "Mail Configuration",
	        link: "https://www.jfrog.com/confluence/display/JCR/Mail+Server+Configuration",
	        priority: 1
	    }],
	
	    "/admin/security/users**": [{
	        title: "User Management",
	        link: "https://www.jfrog.com/confluence/display/JCR/Users+and+Groups",
	        priority: 1
	    }],
	    "/admin/security/groups**": [{
	        title: "Group Management",
	        link: "https://www.jfrog.com/confluence/display/JCR/Users+and+Groups#UsersandGroups-CreatingandEditingGroups",
	        priority: 1
	    }],
	    "/admin/security/permissions**": [{
	        title: "Permission Management",
	        link: "https://www.jfrog.com/confluence/display/JCR/Permissions",
	        priority: 1
	    }],
	
	    // Remove after fixing the url of the new permission form
	
	    "/admin/security/permission/**": [{
	        title: "Permission Management",
	        link: "https://www.jfrog.com/confluence/display/JCR/Permissions",
	        priority: 1
	    }],
	
	    "/admin/security/ldap_settings": [{
	        title: "LDAP Settings",
	        link: "https://www.jfrog.com/confluence/display/JCR/Managing+Security+with+LDAP#ManagingSecuritywithLDAP-Configuration",
	        priority: 1
	    }],
	    "/admin/security/ldap_settings/**": [{
	        title: "LDAP Settings",
	        link: "https://www.jfrog.com/confluence/display/JCR/Managing+Security+with+LDAP#ManagingSecuritywithLDAP-Configuration",
	        priority: 1
	    }],
	
	    "/admin/security/ssh_server": [{
	        title: "SSH Server",
	        link: "https://www.jfrog.com/confluence/display/JCR/SSH+Integration",
	        priority: 1
	    }],
	    "/admin/security/signing_keys": [{
	        title: "Signing Keys",
	        link: "https://www.jfrog.com/confluence/display/JCR/Centrally+Secure+Passwords",
	        priority: 1
	    }],
	
	    "/admin/services/backups**": [{
	        title: "Backup Management",
	        link: "https://www.jfrog.com/confluence/display/JCR/Managing+Backups",
	        priority: 1
	    }],
	
	    "/admin/import_export**": [{
	        title: "Importing & Exporting",
	        link: "https://www.jfrog.com/confluence/display/JCR/Importing+and+Exporting",
	        priority: 1
	    }],
	    "/admin/import_export/repositories": [{
	        title: "Repository Import with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ImportRepositoryContent",
	        priority: 200
	    }],
	    "/admin/import_export/system": [{
	        title: "System Import with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-FullSystemImport",
	        priority: 200
	    }, {
	        title: "System Export with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-ExportSystem",
	        priority: 200
	    }],
	
	    "/admin/advanced/system_info": [{
	        title: "System Info",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-SystemInfo",
	        priority: 1
	    }, {
	        title: "Get Sysmtem Info with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-SystemInfo",
	        priority: 200
	    }],
	    "/admin/advanced/system_logs": [{
	        title: "Jfrog Container Registry Logs",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+Log+Files",
	        priority: 1
	    }],
	    "/admin/advanced/maintenance": [{
	        title: "Maintenance",
	        link: "https://www.jfrog.com/confluence/display/JCR/Regular+Maintenance+Operations",
	        priority: 1
	    }],
	    "/admin/advanced/storage_summary": [{
	        title: "Monitoring Storage",
	        link: "https://www.jfrog.com/confluence/display/JCR/Monitoring+Storage",
	        priority: 1
	    }],
	    "/admin/advanced/config_descriptor": [{
	        title: "Configuration Files",
	        link: "https://www.jfrog.com/confluence/display/JCR/Configuration+Files",
	        priority: 1
	    }, {
	        title: "Get Config Descriptor with REST API",
	        link: "https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-GeneralConfiguration",
	        priority: 200
	    }],
	    "/admin/advanced/security_descriptor": [{
	        title: "Security Configuration",
	        link: "https://www.jfrog.com/confluence/display/JCR/Configuring+Security",
	        priority: 1
	    }]
	};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfMessages = jfMessages;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfMessagesController = (function () {
	    function jfMessagesController($scope, $state, $window, $location, ArtifactoryState, User, ArtifactoryFeatures, ArtifactoryStorage) {
	        var _this = this;
	
	        _classCallCheck(this, jfMessagesController);
	
	        this.$state = $state;
	        this.user = User;
	        this.artifactoryState = ArtifactoryState;
	        this.$window = $window;
	        this.$location = $location;
	        this.features = ArtifactoryFeatures;
	        this.artifactoryStorage = ArtifactoryStorage;
	
	        angular.element(this.$window).on("resize", this.handleSizing.bind(this));
	        $scope.$on("$destroy", function () {
	            angular.element(_this.$window).off("resize");
	        });
	
	        setTimeout(function () {
	            _this.handleSizing();
	
	            $(document).on("mouseenter", ".message-text a", function () {
	                $(".message-container").addClass("pause-animation");
	            });
	            $(document).on("mouseleave", ".message-text a", function () {
	                $(".message-container").removeClass("pause-animation");
	            });
	        }, 300);
	    }
	
	    _createClass(jfMessagesController, {
	        isDismissed: {
	            value: function isDismissed(dismissCode) {
	                var message = this.getDissmisabelMessageByCode(dismissCode);
	                return message[0] && message[0].isDismissed;
	            }
	        },
	        getDissmisabelMessageByCode: {
	            value: function getDissmisabelMessageByCode(dismissCode) {
	                return _.filter(this.constantMessages, function (msg) {
	                    return msg.dismissCode && msg.dismissCode == dismissCode;
	                });
	            }
	        },
	        getConstantMessages: {
	            value: function getConstantMessages() {
	                var msgs = this.artifactoryState.getState("constantMessages");
	                if (msgs) {
	                    this.addPasswordExpirationMessages(msgs);
	                    this.addAOL_DotComMessage(msgs);
	                }
	                var withDismissableMessages = [];
	                for (var i in msgs) {
	                    var msgObj = msgs[i];
	                    if (msgObj.dismissCode) {
	
	                        var dismissibleItem = this.artifactoryStorage.getItem("dismissibleMessages");
	                        if (!dismissibleItem) {
	                            this.artifactoryStorage.setItem("dismissibleMessages", {});
	                            dismissibleItem = this.artifactoryStorage.getItem("dismissibleMessages");;
	                        }
	
	                        if (!dismissibleItem[msgObj.dismissCode]) {
	                            dismissibleItem[msgObj.dismissCode] = false;
	                            this.artifactoryStorage.setItem("dismissibleMessages", dismissibleItem);
	                        }
	
	                        msgObj.isDismissed = dismissibleItem[msgObj.dismissCode];
	                    }
	                    withDismissableMessages.push(msgObj);
	                }
	
	                // console.log(withDismissableMessages,msgs);
	                this.constantMessages = withDismissableMessages;
	                return this.constantMessages;
	            }
	        },
	        addPasswordExpirationMessages: {
	            value: function addPasswordExpirationMessages(msgs) {
	                var daysToExpiration = this.user.currentUser.currentPasswordValidFor;
	                var profileUpdatable = this.user.currentUser.profileUpdatable;
	                if (daysToExpiration <= 2 && this.$state.current.name !== "user_profile" && !_.findWhere(msgs, { code: "expiration" })) {
	                    msgs.push({
	                        message: "Your password will expire in " + daysToExpiration + " days. " + (profileUpdatable ? "Click <a href=\"#/profile\">here</a> to change it now." : "Contact your system administrator to change it."),
	                        type: "warning",
	                        code: "expiration"
	                    });
	                } else if (this.$state.current.name === "user_profile" && _.findWhere(msgs, { code: "expiration" })) {
	                    var index = msgs.indexOf(!_.findWhere(msgs, { code: "expiration" }));
	                    msgs.splice(index, 1);
	                }
	            }
	        },
	        addAOL_DotComMessage: {
	            value: function addAOL_DotComMessage(msgs) {
	
	                var endingsMap = {
	                    com: "io",
	                    org: "info",
	                    net: "us"
	                };
	
	                if (this.features.isAol()) {
	                    var domain = this.$location.host();
	                    var domainWithoutEnding = domain.substr(0, domain.lastIndexOf("."));
	                    var ending = domain.substr(domain.lastIndexOf(".") + 1);
	
	                    var isDotCom = domainWithoutEnding.endsWith(".artifactoryonline");
	                    if (isDotCom && !_.findWhere(msgs, { code: "aol_dot_com" })) {
	                        var url = this.$location.absUrl();
	                        var newUrl = url.replace(".artifactoryonline." + ending, ".jfrog." + endingsMap[ending]);
	                        msgs.push({
	                            message: "artifactoryonline." + ending + " has been replaced by <a href=\"" + newUrl + "\">jfrog." + endingsMap[ending] + "</a>. For more information about adjustments you may need to make, please visit our <a href=\"https://www.jfrog.com/knowledge-base/deprecation-of-artifactoryonline-com-domain/\" target=\"_blank\">Knowledge Base</a>.",
	                            type: "warning",
	                            code: "aol_dot_com"
	                        });
	                    }
	                }
	            }
	        },
	        dismissMessage: {
	            value: function dismissMessage(dismissCode) {
	                // Dismiss for next time the message is fiered
	                var dismissibleItem = this.artifactoryStorage.getItem("dismissibleMessages", {});
	                dismissibleItem[dismissCode] = true;
	                this.artifactoryStorage.setItem("dismissibleMessages", dismissibleItem);
	                // Hide message for now
	                var toDismiss = this.getDissmisabelMessageByCode(dismissCode);
	                toDismiss[0].isDismissed = true;
	            }
	        },
	        getSystemMessage: {
	            value: function getSystemMessage() {
	                var msgObj = this.artifactoryState.getState("systemMessage");
	                if (msgObj && msgObj.enabled && (msgObj.inAllPages || this.$state.current.name === "home")) {
	                    this.systemMessage = msgObj;
	                    this.handleSizing();
	                } else this.systemMessage = null;
	
	                return this.systemMessage;
	            }
	        },
	        handleSizing: {
	            value: function handleSizing() {
	                if ($(".constant-message.system").length) {
	                    var maxMessageSize = this.$window.innerWidth - $(".constant-message.system .message-title").width() - $(".constant-message.system .message-container").offset().left * 2 - 10,
	                        msgText = $(".constant-message.system .message-text");
	
	                    if (msgText.find("span").width() > maxMessageSize) msgText.css("width", maxMessageSize).addClass("marqueed");else msgText.css("width", "auto").removeClass("marqueed");
	                }
	            }
	        }
	    });
	
	    return jfMessagesController;
	})();
	
	function jfMessages() {
	    return {
	        controller: jfMessagesController,
	        controllerAs: "jfMessages",
	        bindToController: true,
	        templateUrl: "directives/jf_messages/jf_messages.html"
	    };
	}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfHeaderSearch = jfHeaderSearch;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfHeaderSearchController = (function () {
	    function jfHeaderSearchController($element, $scope, $state) {
	        _classCallCheck(this, jfHeaderSearchController);
	
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$searchTrigger = $("[data-ic-class=\"search-trigger\"]");
	        this.$searchInput = $("[data-ic-class=\"search-input\"]");
	
	        this.$state = $state;
	        this._isFocused = false;
	        this.query = {
	            search: "quick"
	        };
	        this._registerEvents();
	    }
	
	    _createClass(jfHeaderSearchController, {
	        search: {
	            value: function search() {
	                this.$state.go("search", { searchType: "quick", query: btoa(JSON.stringify(this.query)) });
	                this.query.query = "";
	            }
	        },
	        _registerEvents: {
	            value: function _registerEvents() {
	                var _this = this;
	
	                this.$element.on("mouseenter", function () {
	                    return _this._mouseEnter();
	                });
	                this.$element.on("mouseleave", function () {
	                    return _this._mouseLeave();
	                });
	                this.$searchInput.on("focus", function () {
	                    return _this._triggerFocus();
	                });
	                this.$searchInput.on("blur", function () {
	                    return _this._triggerFocus();
	                });
	
	                this.$scope.$on("$destroy", function () {
	                    _this.$element.off("mouseenter");
	                    _this.$element.off("mouseleave");
	                    _this.$searchInput.off("focus");
	                    _this.$searchInput.off("blur");
	                });
	            }
	        },
	        _registerBodyEvent: {
	            value: function _registerBodyEvent() {
	                var _this = this;
	
	                $("body").on("click.outsideSearch", function (e) {
	                    return _this._checkClickTarget(e);
	                });
	            }
	        },
	        _deregisterBodyEvent: {
	            value: function _deregisterBodyEvent() {
	                $("body").off("click.outsideSearch");
	            }
	        },
	        _mouseEnter: {
	            value: function _mouseEnter() {
	                this.$searchTrigger.addClass("active");
	                this.$searchInput.addClass("active");
	            }
	        },
	        _mouseLeave: {
	            value: function _mouseLeave() {
	                // do not hide the search bar when it is focused
	                if (this._isFocused) {
	                    return;
	                }
	
	                this.$searchTrigger.removeClass("active");
	                this.$searchInput.removeClass("active");
	            }
	        },
	        _triggerFocus: {
	            value: function _triggerFocus() {
	                this._registerBodyEvent();
	                this._isFocused = !this._isFocused;
	            }
	        },
	        _checkClickTarget: {
	            value: function _checkClickTarget(e) {
	                // check if the clicked element is inside the directive
	                if (!$(this.$element).has(e.target).length) {
	                    this.query.query = "";
	                    if (!this.$scope.$$phase) this.$scope.$digest();
	                    this._isFocused = false;
	                    this._mouseLeave();
	                    this._deregisterBodyEvent();
	                }
	            }
	        }
	    });
	
	    return jfHeaderSearchController;
	})();
	
	function jfHeaderSearch() {
	    return {
	        controller: jfHeaderSearchController,
	        controllerAs: "jfHeaderSearch",
	        templateUrl: "directives/jf_header_search/jf_header_search.html"
	    };
	}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfBrowseFiles = jfBrowseFiles;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfBrowseFilesController = (function () {
	    function jfBrowseFilesController($scope, JFrogModal, JFrogEventBus, $timeout) {
	        _classCallCheck(this, jfBrowseFilesController);
	
	        this.root = "/";
	        this.modal = JFrogModal;
	        this.browseFilesScope = $scope.$new();
	        this.initBrowseFileScope();
	        this.selectedFile = false;
	        this.JFrogEventBus = JFrogEventBus;
	
	        this.EVENTS = JFrogEventBus.getEventsDefinition();
	
	        this.$timeout = $timeout;
	    }
	
	    _createClass(jfBrowseFilesController, {
	        $onInit: {
	            value: function $onInit() {
	                this.browseFilesDao = this.browserResource;
	            }
	        },
	        initBrowseFileScope: {
	            value: function initBrowseFileScope() {
	                var _this = this;
	
	                var browseFilesScope = this.browseFilesScope;
	                browseFilesScope.folderList = [];
	                browseFilesScope.rootsList = [];
	                browseFilesScope.fileList = [];
	                browseFilesScope.folder = {};
	                this.isWindows = false;
	                this.browseFilesScope.getDataList = function (path) {
	                    return _this.getDataList(path);
	                };
	                this.browseFilesScope.setFilePath = function (path) {
	                    return _this.setFilePath(path);
	                };
	                this.browseFilesScope.setSelectedItem = function (item) {
	                    return _this.setSelectedItem(item);
	                };
	                this.browseFilesScope.onSelectionChange = function (item) {
	                    return _this.onSelectionChange();
	                };
	                browseFilesScope.upperFolder = function () {
	                    return _this.upperFolder();
	                };
	                browseFilesScope.save = function () {
	                    return _this.save();
	                };
	                browseFilesScope.closeModal = function () {
	                    return _this.closeModal();
	                };
	                browseFilesScope.onChangeFolder = function () {
	                    return _this.onChangeFolder();
	                };
	                browseFilesScope.onChangeRoot = function () {
	                    return _this.onChangeRoot();
	                };
	                browseFilesScope.onPathKeyPress = function (e) {
	                    return _this.onPathKeyPress(e);
	                };
	                browseFilesScope.onPathAutoCompleteSelect = function (selection) {
	                    return _this.onPathAutoCompleteSelect(selection);
	                };
	                browseFilesScope.onKeyPress = function (e) {
	                    return _this.onKeyPress(e);
	                };
	                browseFilesScope.selectedItem = null;
	                browseFilesScope.baseDirectory = null;
	
	                if (!this.browserOptions) this.browserOptions = {};
	
	                browseFilesScope.modalTitle = this.browserOptions.modalTitle || "Server File System Browser";
	                browseFilesScope.selectionLabel = this.browserOptions.selectionLabel || "Selected Folder:";
	                browseFilesScope.pathLabel = this.browserOptions.pathLabel || "Path:";
	                browseFilesScope.canSelectFiles = this.browserOptions.canSelectFiles === true;
	                browseFilesScope.showSelectedItem = this.browserOptions.showSelectedItem !== false;
	                browseFilesScope.enableSelectedItem = this.browserOptions.enableSelectedItem !== false;
	                browseFilesScope.confirmButtonLabel = this.browserOptions.confirmButtonLabel || "Select";
	                browseFilesScope.createDirHelp = "To create a new directory,\nEnter it's name here.";
	
	                if (this.isWindows) browseFilesScope.mountLabel = this.browserOptions.windowsDriveLabel || "Drive:";else browseFilesScope.mountLabel = this.browserOptions.nonWindowsMountLabel || "Mount Point:";
	            }
	        },
	        onPathKeyPress: {
	            value: function onPathKeyPress(e) {
	                var _this = this;
	
	                if (!this.isWindows && e.charCode == 47 || this.isWindows && e.charCode == 92) {
	                    this.$timeout(function () {
	                        _this._gotoPath(_this.browseFilesScope.folder.selectedFolder);
	                    });
	                }
	            }
	        },
	        _gotoPath: {
	            value: function _gotoPath(path) {
	                var current = path.endsWith(!this.isWindows ? "/" : "\\") ? path.substr(0, path.length - 1) : path;
	
	                if (this.browseFilesScope.pathAutoComplete.indexOf(current) >= 0) {
	                    var parts = current.split(!this.isWindows ? "/" : "\\");
	                    var lastPart = parts[parts.length - 1].trim() || parts[parts.length - 2].trim();
	                    this.getDataList(lastPart);
	                    this.browseFilesScope.folder.selectedFolder += !this.isWindows ? "/" : "\\";
	                }
	            }
	        },
	        openBrowser: {
	            value: function openBrowser() {
	                if (!this.startFolder) this.initBrowseFileScope();else {
	                    if (this.startFolder.indexOf("\\") >= 0 && this.startFolder.indexOf("/") < 0) this.isWindows = true;
	                    this.browseFilesScope.folder.selectedFolder = this.startFolder;
	                    var parts = this.startFolder.split(!this.isWindows ? "/" : "\\");
	                    var lastPart = parts[parts.length - 1].trim() || parts[parts.length - 2].trim();
	                    //            this.browseFilesScope.baseDirectory = '/'+_.filter(parts,(p)=>{return p}).join(!this.isWindows ? '/' : '\\');
	                    this.browseFilesScope.folderList = _.filter(parts, function (p) {
	                        return p.trim();
	                    });
	                    this.browseFilesScope.folder.currentRoot = parts[0] + (!this.isWindows ? "/" : "\\");
	                    if (this.isWindows) this.browseFilesScope.folderList.shift();
	                    this.browseFilesScope.folder.currentFolder = lastPart;
	                }
	                this.JFrogEventBus.dispatch(this.EVENTS.FORM_CLEAR_FIELD_VALIDATION, true);
	                this._getFileList(this.browseFilesScope.folder.selectedFolder || this.root);
	                this.modalInstance = this.modal.launchModal("browse_files_modal", this.browseFilesScope, "sm");
	            }
	        },
	        upperFolder: {
	            value: function upperFolder() {
	                var folderList = this.browseFilesScope.folderList;
	
	                if (folderList.length) {
	                    folderList.pop();
	
	                    var currentFolder = folderList.pop();
	                    if (!currentFolder || this.isWindows && currentFolder === "/") {
	                        currentFolder = this.browseFilesScope.folder.currentRoot;
	                        this.browseFilesScope.folder.selectedFolder = this.browseFilesScope.folder.currentRoot;
	                    }
	                    this.getDataList(currentFolder);
	
	                    this.browseFilesScope.folder.currentFolder = currentFolder;
	                    this.browseFilesScope.baseDirectory = this.browseFilesScope.folder.selectedFolder;
	                }
	            }
	        },
	        setSelectedItem: {
	            value: function setSelectedItem(item) {
	                this.browseFilesScope.selectedItem = item;
	                this.browseFilesScope.folder.currentFolder = item.fileSystemItemName;
	                this.browseFilesScope.folder.selectedFolder = (this.browseFilesScope.baseDirectory || "") + (!this.isWindows ? this.browseFilesScope.baseDirectory == "/" ? "" : "/" : this.browseFilesScope.baseDirectory ? !this.browseFilesScope.baseDirectory.endsWith("\\") ? "\\" : "" : this.browseFilesScope.folder.currentRoot) + item.fileSystemItemName;
	            }
	        },
	        _clearData: {
	            value: function _clearData() {
	                this.browseFilesScope.folder.currentFolder = !this.isWindows ? "/" : this.browseFilesScope.folder.currentRoot;
	                this.browseFilesScope.folderList = [];
	            }
	        },
	        onChangeRoot: {
	            value: function onChangeRoot() {
	                var _this = this;
	
	                this.$timeout(function () {
	                    _this.onChangeFolder(true);
	                });
	            }
	        },
	        onChangeFolder: {
	            value: function onChangeFolder(newRoot) {
	                if (newRoot) {
	                    this._clearData();
	                }
	                var folderLabel = "";
	                if (this.browseFilesScope.folder.currentFolder == "/") {
	                    folderLabel = this.browseFilesScope.folder.currentRoot;
	                } else {
	                    folderLabel = this.browseFilesScope.folder.currentFolder;
	                }
	                var index = 0;
	                for (index; this.browseFilesScope.folderList.length > index; index++) {
	                    if (this.browseFilesScope.folderList[index] == folderLabel) {
	                        break;
	                    }
	                }
	                var indexToCut = this.browseFilesScope.folderList.length - index;
	                this.browseFilesScope.folderList = _.dropRight(this.browseFilesScope.folderList, indexToCut);
	                this.getDataList(folderLabel);
	            }
	        },
	        getDataList: {
	            value: function getDataList(path) {
	                var PathSend = "";
	                if (path == "/") {
	                    PathSend = this.browseFilesScope.folder.currentRoot;
	                } else {
	                    PathSend = this._selectPath(path);
	                }
	                this._getFileList(PathSend);
	            }
	        },
	        _getFileList: {
	            value: function _getFileList(path) {
	                var _this = this;
	
	                path = path.replace("\\/\\", "\\");
	                this.browseFilesDao.query({ path: path, includeZip: this.browseFilesScope.canSelectFiles }).$promise.then(function (result) {
	                    if (result) {
	                        _this.browseFilesScope.rootsList = result.roots;
	                        _this.isWindows = result.windows;
	                        if (_this.isWindows && path === "/") {
	                            _this._getFileList(result.roots[0]);
	                            return;
	                        }
	
	                        _this.browseFilesScope.fileList = result.fileSystemItems;
	                        if (!_this.browseFilesScope.folder.currentRoot) {
	                            _this.browseFilesScope.folder.currentRoot = result.roots[0];
	                            _this.onChangeRoot();
	                        }
	                        if (!_this.browseFilesScope.folder.selectedFolder) {
	                            _this.browseFilesScope.folder.selectedFolder = result.roots[0];
	                        }
	
	                        if (_this.isWindows) _this.browseFilesScope.mountLabel = _this.browserOptions.windowsDriveLabel || "Drive:";else _this.browseFilesScope.mountLabel = _this.browserOptions.nonWindowsMountLabel || "Mount Point:";
	
	                        var onlyFolders = _.filter(result.fileSystemItems, function (item) {
	                            return item.folder;
	                        });
	                        _this.browseFilesScope.pathAutoComplete = _.map(onlyFolders, function (item) {
	                            return (_this.browseFilesScope.baseDirectory || (!_this.isWindows ? "" : _this.browseFilesScope.folder.currentRoot)) + (!_this.isWindows ? !_this.browseFilesScope.baseDirectory || !_this.browseFilesScope.baseDirectory.endsWith("/") ? "/" : "" : _this.browseFilesScope.baseDirectory && !_this.browseFilesScope.baseDirectory.endsWith("\\") ? "\\" : "") + item.fileSystemItemName;
	                        });
	
	                        var filteredSelectionList = _this.browseFilesScope.canSelectFiles ? result.fileSystemItems : _.filter(result.fileSystemItems, function (item) {
	                            return item.folder;
	                        });
	                        _this.browseFilesScope.selectionAutoComplete = _.map(filteredSelectionList, function (item) {
	                            return item.fileSystemItemName;
	                        });
	                    }
	                }, function (result) {});
	            }
	        },
	        _selectPath: {
	            value: function _selectPath(path) {
	                var _this = this;
	
	                var isFile = arguments[1] === undefined ? false : arguments[1];
	
	                var backslash = "/";
	                var windowSlash = "\\";
	                var _path = this.browseFilesScope.folder.currentRoot;
	                var PathSend = undefined;
	
	                if (isFile && this.selectedFile || this.selectedFile) this.browseFilesScope.folderList.pop();
	
	                if (this.browseFilesScope.folderList.length > 0) {
	                    this.browseFilesScope.folderList.forEach(function (pathEntry, index) {
	                        if (pathEntry != windowSlash && _this.isWindows) {
	                            _path += pathEntry + windowSlash;
	                        }
	                        if (pathEntry != backslash && !_this.isWindows) {
	                            _path += pathEntry + backslash;
	                        }
	                    });
	                }
	
	                if (this.browseFilesScope.folder.currentRoot == path) {
	                    _path = this.browseFilesScope.folder.currentRoot;
	                    this.browseFilesScope.folder.selectedFolder = this.browseFilesScope.folder.currentRoot;
	                    this.browseFilesScope.folderList = [];
	                    this.browseFilesScope.folderList.push(backslash);
	                } else {
	                    if (!isFile) {
	                        this.browseFilesScope.folderList.push(path);
	                        this.browseFilesScope.folder.currentFolder = path;
	                    }
	                    _path += path;
	                    this.browseFilesScope.folder.selectedFolder = _path;
	                    this.browseFilesScope.folder.selectedFolder = this.browseFilesScope.folder.selectedFolder.replace("\\/\\", "\\");
	                    this.browseFilesScope.baseDirectory = this.browseFilesScope.folder.selectedFolder;
	                    this.selectedFile = isFile;
	                }
	
	                return _path;
	            }
	        },
	        setFilePath: {
	            value: function setFilePath(path) {
	                if (this.browseFilesScope.canSelectFiles) this._selectPath(path, true);
	            }
	        },
	        save: {
	            value: function save() {
	                this.browserUpdateFolder({ directory: this.browseFilesScope.folder.selectedFolder });
	                this.closeModal();
	            }
	        },
	        closeModal: {
	            value: function closeModal() {
	                this.modalInstance.close();
	            }
	        },
	        onKeyPress: {
	            value: function onKeyPress(e) {
	                if (e.charCode == 13 && this.browseFilesScope.selectedItem) this.getDataList(this.browseFilesScope.selectedItem.fileSystemItemName);
	            }
	        },
	        onSelectionChange: {
	            value: function onSelectionChange() {
	                this.browseFilesScope.folder.selectedFolder = (this.browseFilesScope.baseDirectory || "") + (!this.isWindows ? !this.browseFilesScope.baseDirectory || !this.browseFilesScope.baseDirectory.endsWith("/") ? "/" : "" : this.browseFilesScope.baseDirectory ? !this.browseFilesScope.baseDirectory.endsWith("\\") ? "\\" : "" : this.browseFilesScope.folder.currentRoot) + this.browseFilesScope.folder.currentFolder;
	                if (this.isWindows && this.browseFilesScope.folder.selectedFolder.toLowerCase().startsWith(this.browseFilesScope.folder.currentRoot.toLowerCase() + this.browseFilesScope.folder.currentRoot.toLowerCase())) this.browseFilesScope.folder.selectedFolder = this.browseFilesScope.folder.selectedFolder.toLowerCase().replace(this.browseFilesScope.folder.currentRoot.toLowerCase() + this.browseFilesScope.folder.currentRoot.toLowerCase(), this.browseFilesScope.folder.currentRoot);
	            }
	        },
	        onPathAutoCompleteSelect: {
	            value: function onPathAutoCompleteSelect(selection) {
	                this._gotoPath(selection);
	            }
	        }
	    });
	
	    return jfBrowseFilesController;
	})();
	
	function jfBrowseFiles() {
	    return {
	        restrict: "EA",
	        scope: {
	            browserUpdateFolder: "&",
	            browserResource: "=",
	            browserOptions: "=",
	            startFolder: "="
	        },
	        controller: jfBrowseFilesController,
	        controllerAs: "jfBrowseFiles",
	        templateUrl: "directives/jf_browse_files/jf_browse_files.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfSwitchToggle = jfSwitchToggle;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfSwitchToggleController = function jfSwitchToggleController($element, $transclude, $timeout) {
	    _classCallCheck(this, jfSwitchToggleController);
	
	    $transclude(function (clone) {
	        $timeout(function () {
	            $element.find("label").prepend(clone);
	        }, 0, false);
	    });
	};
	
	function jfSwitchToggle() {
	    return {
	        restrict: "E",
	        transclude: true,
	        scope: {
	            texton: "@?",
	            textoff: "@?"
	        },
	        replace: true,
	        controller: jfSwitchToggleController,
	        templateUrl: "directives/jf_switch_toggle/jf_switch_toggle.html"
	    };
	}

/***/ }),
/* 104 */
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
	
	module.exports = function ($compile) {
	    return {
	        link: function link($scope, $element, attrs) {
	            var newElement = undefined;
	            var directiveName = undefined;
	            newElement = $element.clone();
	            directiveName = $scope.$eval(attrs.dynamicDirective);
	            newElement.removeAttr("dynamic-directive");
	            newElement.attr(directiveName, ""); // assign the directive to it
	            newElement = $compile(newElement)($scope); // compile it
	            $element.replaceWith(newElement); // replace the original element
	        }
	    };
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfMultiDeploy = jfMultiDeploy;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	/**
	 * Created by idannaim on 8/6/15.
	 */
	
	var API = _interopRequire(__webpack_require__(97));
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var jfMultiDeployController = (function () {
	    function jfMultiDeployController($scope, ArtifactoryUploaderFactory, ArtifactDeployDao, ArtifactoryState, JFrogNotifications, GoogleAnalytics) {
	        _classCallCheck(this, jfMultiDeployController);
	
	        this.$scope = $scope;
	        this.artifactDeployDao = ArtifactDeployDao;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.artifactoryState = ArtifactoryState;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.artifactoryUploaderFactory = ArtifactoryUploaderFactory;
	        this.errorQueue = [];
	        this.multiSuccessMessage = "";
	        this.multiSuccessMessageCount = 0;
	        this.TOOLTIP = TOOLTIP.artifacts.deploy;
	        this.originalDeployPath = "";
	    }
	
	    _createClass(jfMultiDeployController, {
	        $onInit: {
	            value: function $onInit() {
	                this.comm.setController(this);
	                this._initDeploy();
	            }
	        },
	        _initDeploy: {
	
	            /**
	             * create uploader instance,
	             * set methods callback
	             * set path and file type
	             * @private
	             */
	
	            value: function _initDeploy() {
	                var UPLOAD_REST_URL = "" + API.API_URL + "/artifact/upload";
	
	                this.deployMultiUploader = this.artifactoryUploaderFactory.getUploaderInstance(this).setUrl(UPLOAD_REST_URL).setOnSuccessItem(this.onSuccessItem).setOnAfterAddingAll(this.onAfterAddingAll).setOnAfterAddingFile(this.onAfterAddingFile).setOnErrorItem(this.onUploadError).setOnCompleteAll(this.onCompleteAll).setOnProgressAll(this.onProgressAll);
	
	                this.deployMultiUploader.getUploader().headers = { "X-Requested-With": "artUI" };
	
	                this._setPathAndFileType(this.node.data.path);
	            }
	        },
	        _setPathAndFileType: {
	
	            /**
	             * check if path includes file/archive if yes cut it from the path and set .
	             * check if the current repo is local else clean path.
	             * Reset garbage deployFile if exists and fields.
	             * @param targetPath
	             * @private
	             */
	
	            value: function _setPathAndFileType(targetPath) {
	                if (this.node.data.isInsideArchive()) {
	                    targetPath = "";
	                } else {
	                    if (this.node.data.type == "file" || this.node.data.type == "archive") {
	                        if (targetPath.indexOf("/") > -1) {
	                            targetPath = targetPath.substr(0, targetPath.lastIndexOf("/"));
	                        } else if (targetPath.indexOf("\\") > -1) {
	                            targetPath = targetPath.substr(0, targetPath.lastIndexOf("\\"));
	                        } else {
	                            targetPath = "";
	                        }
	                    }
	                }
	                if (this.firstInit) {
	                    if (localRepo) {
	                        this.deployFile = {
	                            repoDeploy: localRepo,
	                            targetPath: targetPath
	                        };
	                    } else {
	                        this.deployFile = {
	                            repoDeploy: this.node.data.type == "local" ? this.node["this"].reposList[0] : "",
	                            targetPath: targetPath
	                        };
	                    }
	                } else {
	                    //Reset garbage deployFile if exists
	                    if (this.deployFile && this.deployFile.unitInfo && this.deployFile.unitInfo.mavenArtifact) {
	                        this.deployFile.unitInfo.mavenArtifact = false;
	                    }
	                    if (this.deployFile && this.deployFile.unitInfo && this.deployFile.unitInfo.debianArtifact) {
	                        this.deployFile.unitInfo.debianArtifact = false;
	                    }
	                    this.deployFile.unitInfo = {};
	                    this.deployFile.fileName = "";
	                    this.deployMultiUploader.clearQueue();
	                    this.deployFile.targetPath = targetPath;
	                }
	                this.uploadCompleted = false;
	                this.firstInit = false;
	            }
	        },
	        onSuccessItem: {
	            value: function onSuccessItem(fileDetails, response) {
	                this.deployFile.unitInfo = response.unitInfo;
	                this.deployFile.unitConfigFileContent = response.unitConfigFileContent;
	                //MavenArtifact causes 'deploy as' checkbox to be lit -> change deployment path according to GAVC
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.mavenArtifact) {
	                    this.originalDeployPath = this.deployFile.targetPath;
	                }
	                if (response.repoKey && response.artifactPath) {
	                    var msg = this.comm.createNotification(response);
	                    this.multiSuccessMessage += msg.body + "<br>";
	                    this.multiSuccessMessageCount++;
	                }
	            }
	        },
	        multiUploadItemRemoved: {
	
	            /**
	             * check if queue have files to upload
	             */
	
	            value: function multiUploadItemRemoved() {
	                if (!this.deployMultiUploader.getQueue() || !this.deployMultiUploader.getQueue().length) {
	                    this.uploadCompleted = false;
	                }
	            }
	        },
	        onUploadError: {
	
	            /**
	             * when upload item error push to queue for notifications
	             * @param item
	             * @param response
	             */
	
	            value: function onUploadError(item, response) {
	
	                this.errorQueue.push({ item: item, response: response });
	            }
	        },
	        onCompleteAll: {
	
	            /**
	             * upload complete check if 'error queue' if empty if not show all failed files
	             * else show success notification
	             */
	
	            value: function onCompleteAll() {
	                var numberOfUploadedFiles = this.deployMultiUploader.getQueue().length;
	                this.uploadCompleted = true;
	                this.progress = false;
	                var body = "<ul>";
	                this.artifactoryNotifications.clear();
	                if (this.errorQueue.length) {
	                    this.errorQueue.forEach(function (error) {
	                        body += "<li>\"" + error.item.file.name + "\" " + error.response.error + "</li>";
	                    });
	                    body += "</ul>";
	                    this.artifactoryNotifications.createMessageWithHtml({ type: "error", body: body, timeout: 10000 });
	                    this.deployMultiUploader.clearQueue();
	                    this.errorQueue = [];
	                    this.GoogleAnalytics.trackEvent("Artifacts", "Deploy succeed", this.node.data.repoPkgType, this.errorQueue.length, this.node.data.repoType, "multi", numberOfUploadedFiles);
	                } else {
	                    this.artifactoryNotifications.createMessageWithHtml({ type: "success", body: "Successfully deployed " + this.multiSuccessMessageCount + " files" });
	                    this.GoogleAnalytics.trackEvent("Artifacts", "Deploy succeed", this.node.data.repoPkgType, 0, this.node.data.repoType, "multi", numberOfUploadedFiles);
	                }
	                if (this.onSuccess && typeof this.onSuccess === "function") {
	                    this.onSuccess();
	                }
	            }
	        },
	        onAfterAddingAll: {
	
	            /**
	             * onAfterAddingAll check for only 20 files  upload
	             * @param fileItems
	             */
	
	            value: function onAfterAddingAll(fileItems) {
	                if (fileItems.length > 20) {
	                    this.artifactoryNotifications.create({ error: "You can only deploy up to 20 files at a time" });
	                    this.deployMultiUploader.clearQueue();
	                    return;
	                }
	                //Enable the "deploy" button after all files were added.
	                this.uploadCompleted = true;
	                var uploadAll = true;
	
	                fileItems.forEach(function (item) {
	                    if (!item.okToUploadFile) {
	
	                        uploadAll = false;
	                        return;
	                    }
	                });
	            }
	        },
	        isReady: {
	
	            /**
	             * check if missing fields to disable deploy button
	             * @returns {boolean|*}
	             */
	
	            value: function isReady() {
	                var ok = true;
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.debianArtifact) {
	                    ok = this.deployFile.unitInfo.distribution && this.deployFile.unitInfo.component && this.deployFile.unitInfo.architecture;
	                }
	                return ok && this.uploadCompleted && this.deployFile.repoDeploy;
	            }
	        },
	        onAfterAddingFile: {
	            value: function onAfterAddingFile(fileItem) {
	                if (fileItem.file.size < 0) {
	                    fileItem.okToUploadFile = false;
	                    this.deployMultiUploader.removeFileFromQueue(fileItem);
	                } else if (this.isExceedingSizeLimit(fileItem)) {
	                    fileItem.okToUploadFile = false;
	                    this.cancelFileUploadExceedingLimit(fileItem);
	                } else {
	                    // Save original for display
	                    fileItem.file.originalName = fileItem.file.name;
	                    // Encode filename to support UTF-8 strings (server does decode)
	                    fileItem.file.name = encodeURIComponent(fileItem.file.name);
	                    fileItem.okToUploadFile = true;
	                }
	            }
	        },
	        isExceedingSizeLimit: {
	
	            /**
	             * test if file exceeds the size limit
	             * @param fileItem
	             */
	
	            value: function isExceedingSizeLimit(fileItem) {
	                return this.fileSizeLimit > 0 && fileItem.file.size > this.toBytes(this.fileSizeLimit);
	            }
	        },
	        cancelFileUploadExceedingLimit: {
	            /**
	             * cancel an upload of a file that exceeds the size limit
	             * @param fileItem
	             */
	
	            value: function cancelFileUploadExceedingLimit(fileItem) {
	                var errorMsg = "File size exceeds the limit of " + this.fileSizeLimit + " MB";
	                this.artifactoryNotifications.create({ error: errorMsg });
	
	                this.deployMultiUploader.removeFileFromQueue(fileItem);
	            }
	        },
	        toBytes: {
	
	            /**
	             * convert file size from MB to Bytes
	             * @param fileSizeInMB
	             */
	
	            value: function toBytes(fileSizeInMB) {
	                return fileSizeInMB * 1000000;
	            }
	        },
	        onProgressAll: {
	            value: function onProgressAll(progressPercent) {
	                if (!this.progress) {
	                    this.progress = true;
	                    this.artifactoryNotifications.createMessageWithHtml({
	                        type: "success",
	                        body: "<div id=\"deploy-progress-percent\">Deploy in progress... (0%)</div>" + "<div id=\"deploy-progress-frame\"><div id=\"deploy-progress-line\"></div></div>",
	                        timeout: 60 * 60000 * 10
	                    });
	                    if (this.onSuccess && typeof this.onSuccess === "function") {
	                        this.onSuccess();
	                    }
	                } else {
	                    var percElem = $("#deploy-progress-percent");
	                    var lineElem = $("#deploy-progress-line");
	                    percElem.text("Deploy in progress... (" + progressPercent + "%)");
	                    lineElem.css("width", "" + progressPercent + "%");
	                }
	            }
	        },
	        _fixUrlPath: {
	
	            /**
	             * if exist char '&' need to be replace to  '%26' before upload
	             * @param name
	             * @returns {*}
	             * @private
	             */
	
	            value: function _fixUrlPath(name) {
	                name = name.replace(/&/g, "%26");
	                var find = "&";
	                var re = new RegExp(find, "g");
	                return name.replace(re, "%26");
	            }
	        },
	        deployArtifacts: {
	
	            /**
	             * set url to deploy for each file and deploy when ready
	             */
	
	            value: function deployArtifacts() {
	                var _this = this;
	
	                var DEPLOY_REST_URL = "" + API.API_URL + "/artifact/deploy/multi";
	
	                if (!this.deployFile.targetPath.endsWith("/")) {
	                    this.deployFile.targetPath += "/";
	                }
	
	                this.deployMultiUploader.getQueue().forEach(function (item) {
	                    item.url = DEPLOY_REST_URL + "?repoKey=" + _this.deployFile.repoDeploy.repoKey + "&path=" + (_this.deployFile.targetPath || "") + _this._fixUrlPath(item.file.name);
	                });
	                this.deployMultiUploader.getUploader().uploadAll();
	            }
	        }
	    });
	
	    return jfMultiDeployController;
	})();
	
	function jfMultiDeploy() {
	    return {
	        restrict: "EA",
	        scope: {
	            node: "=",
	            deploy: "&",
	            comm: "=",
	            deployFile: "=",
	            onSuccess: "&",
	            fileSizeLimit: "="
	        },
	        controller: jfMultiDeployController,
	        controllerAs: "jfMultiDeploy",
	        bindToController: true,
	        templateUrl: "directives/jf_deploy/jf_multi_deploy.html"
	    };
	}

/***/ }),
/* 106 */
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
	
	module.exports = {
	                admin: {
	                                advanced: {
	                                                maintenance: {
	                                                                garbageCronExpression: "The Cron expression that determines the frequency of garbage collection.\nFor detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                cleanupCronExpression: "The Cron expression that determines the frequency of artifacts cleanup.\nFor detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                runNow: "Remove unreferenced binaries from the underlying datastore.\nArtifactory periodically runs garbage collection to remove unused (deleted) binaries from the datastore.\nYou may also run datastore cleanup manually using this button.",
	                                                                enableQuotaControl: "Enable control over the amount of storage space used for binaries to avoid running out of disk space.",
	                                                                storageSpaceLimit: "The maximum percentage of disk capacity that the partition containing the binaries folder is allowed to use.\nOnce this limit has been reached, deployment is rejected with a 413 error (request entity\ntoo large) and an error message is displayed in the UI (visible to admin users only).\nWhen using filesystem storage, the partition checked is the one containing the\n'$ARTIFACTORY_HOME/data/filestore' directory.\nWhen using database BLOB storage, the partition checked is the one containing the\n'$ARTIFACTORY_HOME/data/cache' directory.",
	                                                                storageSpaceWarning: "The percentage of disk space usage, by the partition containing the binaries folder, that will trigger a warning.\nOnce this limit is reached a warning is logged and a warning message is displayed in the UI\n(visible to admin users only).",
	                                                                cronExpressionCleanup: "The Cron expression that determines the frequency at which unused artifacts are cleaned up. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                runUnusedCachedArtifactsCleanup: "Remove unused artifacts from all remote repository caches\naccording to the 'Keep Unused Artifacts(Hours)' setting for each remote repository.\nArtifactory periodically cleans up unused artifacts from all remote repository caches.\nYou can also run the cleanup manually using this button.",
	                                                                cleanVirtualRepositoriesNow: "Clean up internal data used by virtual repositories.\nCached POM files older than the number of hours defined in the 'virtualCacheCleanup.maxAgeHours' system property will be deleted.\nThe default is 168 hours (one week). Artifacts accessed through virtual repositories will not be affected by this.",
	                                                                compressTheInternetDatabase: "When using the internal Derby database, use this to clean up fragmented space that may remain\nafter delete operations.\nNOTE! It is recommended to run this when Artifactory activity is low because compression may not run its full course when\nstorage is busy (although this has no detrimental effect on the storage).",
	                                                                pruneUnreferencedData: "Running Artifactory with the wrong file system permissions on storage folders, or running out of storage space,\ncan result in unreferenced binary files and empty folders present in the filestore or cache folders. This action\nremoves unreferenced files and empty folders."
	
	                                                },
	                                                storageSummary: {
	                                                                itemsCount: "The total number of items (both files and folders) in your system.",
	                                                                optimization: "The ratio of Binaries Size to Artifacts Size.\nThis reflects how much the usage of storage in your system has been reduced by Artifactory using checksum storage.",
	                                                                artifactsCount: "The total number of artifacts pointing to the physical binaries stored on your system.",
	                                                                storageDirectory: "If Storage Type is \"filesystem\" then this is the path to the physical file store.\nIf Storage Type is \"fullDb\" then this is the path to the directory that caches binaries when they are extracted from the database.\nIf Storage Type is \"S3\" then this is the path to the directory that caches binaries from S3.\n\nIf Storage Type is \"Advanced Configuration\" then these are the paths of the corresponding binary providers, supplied by the advanced configuration.",
	                                                                centralConfigurationDescriptor: "",
	                                                                securityConfigurationDescriptor: "",
	                                                                fileSystemStorage: "The storage percentage represents the used/available space on the mount point where the <a href=\"https://www.jfrog.com/confluence/display/RTF/Monitoring+Storage#MonitoringStorage-FileStore\" target=\"_blank\">Artifactory filestore data</a> is stored."
	                                                }
	                                },
	                                configuration: {
	                                                general: {
	                                                                serverName: "A name that uniquely identifies this artifactory server instance across the network.",
	                                                                customURLBase: "A hard-coded URL prefix used to calculate relative URLs.",
	                                                                fileUploadMaxSize: "The maximum size (in MB) allowed for artifacts uploaded through the web UI.\nSet to '0' for unlimited size.",
	                                                                bintrayMaxFilesUpload: "The maximum number of files that can be uploaded to Bintray in a single operation.",
	                                                                dateFormat: "The format used to display dates.\nFor a detailed explanation see: <a href=\"http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html\" target=\"_blank\">Joda DateTimeFormat</a>",
	                                                                globalOfflineMode: "If set, Artifactory does not try to access remote resources to fetch artifacts.\nOnly cached and local artifacts are served",
	                                                                showAvailableAddonsInfo: "When set, Artifactory displays information about available Add-ons. This overrides any user-specific setting to hide information.",
	                                                                folderDownloadMaxFiles: "The maximum amount of artifacts that can be downloaded under one folder.",
	                                                                folderDownloadMaxSize: "The maximum size (in MB) of a folder that is allowed to be downloaded.",
	                                                                folderDownloadMaxParallel: "The maximum amount of folder download requests Artifactory will allow to run together.",
	                                                                retentionPeriodDays: "The maximum number of days to keep artifacts in the trashcan.",
	                                                                allowPermDeletes: "When deleting, users will be given an option to bypass the trash can and delete artifacts permanently.",
	                                                                blockReplications: "When set, replication will not be triggered regardless of configuration.",
	                                                                blockPushReplications: " When set, push replication will not be triggered regardless of configuration.",
	                                                                blockPullReplications: "When set, pull replication will not be triggered regardless of configuration.",
	                                                                releaseBundlesCleanup: "The number of hours to wait before a release bundle is deemed “incomplete” and eligible for cleanup from the temporary folder. A value of 0 means automatic cleanup is disabled. \nNote that only release bundles that were partially distributed are eligible for cleanup.",
	                                                                signedUrlMaxValidForSecs: "The maximum number of seconds a signed URL can be valid.",
	                                                                downloadRedirectFileMinimumSize: "The minimal size of an artifact for which direct download from the cloud is enabled.\nRequests for artifacts smaller than this size are served through Artifactory as usual."
	                                                },
	                                                licenseForm: {
	                                                                licenseKey: "A unique short name identifying the license.",
	                                                                longName: "A descriptive name for the license.",
	                                                                URLs: "A URL (or URLs separated by semicolon) pointing to the license's homepage.",
	                                                                regExp: "A regular expression used to match licenses of this type against license details in artifact module information.\nFor regular expression syntax reference please refer to the Pattern javadoc."
	
	                                                },
	                                                propertySetsForm: {},
	                                                proxyForm: {
	                                                                systemDefault: "Make this proxy the default for new remote repositories and for internal HTTP requests.",
	                                                                redirectingProxyTargetHosts: "An optional list of host names to which the proxy may redirect requests.\nThe credentials of the proxy are reused by requests redirected to any of these hosts."
	
	                                                },
	                                                reverseProxy: {
	                                                                serverName: "The server name that will be used to access Artifactory.\nShould be correlated with the base URL value.",
	                                                                publicAppContext: "The path which will be publicly used to access Artifactory. If Artifactory is accessible on the root of the server leave empty.",
	                                                                artifactoryServerName: "The internal server name for Artifactory which will be used by the web server to access the Artifactory machine.\nIf the web server is installed on the same machine as Artifactory you can use localhost, otherwise use the IP or hostname.",
	                                                                artifactoryAppContext: "The path which will be used to access the Artifactory application. If Artifactory is accessible on the root of the server leave empty.",
	                                                                sslCertificate: "The full path of the certificate file on the web server.",
	                                                                sslKey: "The full path of the key file on the web server."
	                                                },
	                                                mail: {
	                                                                enable: "The activity state of the configuration.",
	                                                                from: "The \"from\" address header to use in all outgoing messages (optional). ",
	                                                                subjectPrefix: "A prefix to use for the subject of all outgoing messages.",
	                                                                artifactoryURL: "The Artifactory URL to to link to in all outgoing messages (optional)."
	                                                },
	                                                bintray: {
	                                                                bintrayUsername: "The default Bintray user name that will be used by Artifactory in cases where an Artifactory\nuser doesn't have Bintray credentials defined.",
	                                                                bintrayAPIKey: "The default Bintray API Key that will be used by Artifactory in cases where an Artifactory\nuser doesn't have Bintray credentials defined."
	                                                },
	                                                registerPro: {
	                                                                licenseKey: "The license key is required for using Artifactory Add-ons."
	                                                },
	                                                xray: {
	                                                                allowDownloadsBlocked: "Allows download of all artifacts, even those that<br>have been blocked for download by Xray.",
	                                                                allowWhenXrayUnavilable: "Overrides Artifactory’s default behavior of blocking artifact<br>download when Xray becomes unavailable.",
	                                                                bypassDefaultProxy: "Bypass the default system proxy configuration.",
	                                                                overrideDefaultProxy: "Choose a Proxy configuration to override the default system proxy."
	                                                }
	                                },
	                                import_export: {
	                                                repositories: {
	                                                                createM2CompatibleExport: "Include Maven 2 repository metadata and checksum files as part of the export",
	                                                                outputVerboseLog: "Lowers the log level to debug and redirects the output from the standard log to the import-export log.\nYou can monitor the log in the <a href=\"./#/admin/advanced/system_logs\">'System Logs'</a> page.",
	                                                                targetLocalRepository: "Specifies the repository in which to place imported content.\nWhen importing to a single repository, the file structure within the folder you import from should be similar to:\nSELECTED_DIR\n|\n|--LIB_DIR_1\nBut when importing to all repositories, the file structure within the folder you import from should be similar to:\nSELECTED_DIR\n|\n|--REPOSITORY_NAME_DIR_1\n| |\n| |--LIB_DIR_1\n\nWhen importing to all repositories, make sure the names of the directories representing\nthe repositories in the archive, match the names of the target repositories in Artifactory.",
	                                                                repositoryZipFile: "The archive file from which to import content.\nWhen importing to a single repository, the file structure within the archive should be similar to:\nARCHIVE.ZIP\n|\n|--LIB_DIR_1\nWhen importing to all repositories, the file structure within the archive you import from should be similar to:\nARCHIVE.ZIP\n|\n|--REPOSITORY_NAME_DIR_1\n| |\n| |--LIB_DIR_1\nWhen importing to all repositories, make sure the names of the directories representing\nthe repositories in the archive, match the names of the target repositories in Artifactory.\nNOTE! Uploading the archive, does not import its content.\nTo import, select the Target Local Repository, upload the archive and click Import."
	                                                },
	                                                system: {
	                                                                excludeBuilds: "Exclude all builds from the export.",
	                                                                createM2CompatibleExport: "Include Maven 2 repository metadata and checksum files as part of the export.",
	                                                                outputVerboseLog: "Lowers the log level to debug and redirects the output from the standard log to the import-export log.\nYou can monitor the log in the <a href=\"./#/admin/advanced/system_logs\">'System Logs'</a> page."
	
	                                                },
	                                                stash: {
	                                                                createM2CompatibleExport: "Include Maven 2 repository metadata and checksum files as part of the export.",
	                                                                outputVerboseLog: "Lowers the log level to debug and redirects the output from the standard log to the import-export log.\nYou can monitor the log in the <a href=\"./#/admin/advanced/system_logs\">'System Logs'</a> page.",
	                                                                createArchive: "Export the results as a zip archive."
	                                                }
	                                },
	                                repositories: {
	                                                customURLBase: "A hard-coded URL prefix used to calculate relative URLs.",
	                                                localForm: {
	                                                                publicDescription: "Textual description of the repository. This description is displayed when the repository is selected in the Tree Browser.",
	                                                                internalDescription: "Additional notes that are only displayed in this form.",
	                                                                includesPattern: "List of artifact patterns to include when evaluating artifact requests in the form of x/y/**/z/*. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (**/*).",
	                                                                excludedPattern: "List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**/z/*. By default no artifacts are excluded.",
	                                                                repositoryLayout: "The layout that the repository should use to store and identify modules.",
	                                                                checksumPolicy: "Checksum policy determines how Artifactory behaves when a client checksum for a deployed resource is missing or conflicts with the locally calculated checksum (bad checksum).\nFor more details, please refer to <a href=\"https://www.jfrog.com/confluence/display/RTF/Local+Repositories#LocalRepositories-ChecksumPolicy\">Checksum Policy</a>.",
	                                                                mavenSnapshotVersionBehavior: "Specifies the naming convention for Maven SNAPSHOT versions.\nThe options are -\nUnique: Version number is based on a time-stamp (default)\nNon-unique: Version number uses a self-overriding naming pattern of artifactId-version-SNAPSHOT.type\nDeployer: Respects the settings in the Maven client that is deploying the artifact.",
	                                                                maxUniqueSnapshots: "The maximum number of unique snapshots of a single artifact to store.\nOnce the number of snapshots exceeds this setting, older versions are removed.\nA value of 0 (default) indicates there is no limit, and unique snapshots are not cleaned up.",
	                                                                maxUniqueTags: "The maximum number of unique tags of a single Docker image to store in this repository.\nOnce the number tags for an image exceeds this setting, older tags are removed. A value of 0 (default) indicates there is no limit.",
	                                                                blackedOut: "When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.",
	                                                                yumMetadataFolderDepth: "The depth, relative to the repository's root folder, where RPM metadata is created.\nThis is useful when your repository contains multiple RPM repositories under parallel hierarchies.\nFor example, if your RPMs are stored under 'fedora/linux/$releasever/$basearch', specify a depth of 4.",
	                                                                yumGroupFileNames: "A list of XML file names containing RPM group component definitions.\nArtifactory includes the group definitions as part of the calculated RPM metadata, as well as automatically generating a gzipped version of the group files, if required.",
	                                                                allowContentBrowsing: "When set, you may view content such as HTML or Javadoc files directly from Artifactory.\nThis may not be safe and therefore requires strict content moderation to prevent malicious users from uploading content that may compromise security (e.g., cross-site scripting attacks).",
	                                                                selectPropertySets: "Specifies the Property Sets to be used to construct the list of properties displayed when assigning properties to artifacts in this repository.\nThis is a convenience; not a restrictive measure. You can still assign any property to artifacts from the Properties tab.",
	                                                                cronExpressionReplication: "The Cron expression that determines when the next replication will be triggered. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                nextReplicationTime: "The next replication time based on the Cron expression.",
	                                                                enableEventReplication: "When set, each event will trigger replication of the artifacts changed in the event (e.g. add, delete, change property).",
	                                                                trivialLayout: "When set, the repository will use the deprecated trivial layout.",
	                                                                forceNugetAuth: "Force basic authentication credentials in order to use this repository.",
	                                                                pathPrefix: "Limit replication to artifacts matching this sub-path under the source repository.",
	                                                                syncDeletedArtifacts: "When set, items that were deleted locally should also be deleted remotely (also applies to properties metadata).",
	                                                                syncArtifactProperties: "When set, properties of replicated artifacts and folders will also be replicated.",
	                                                                syncArtifactStatistics: "When set, artifact download statistics will also be replicated. Set to avoid inadvertent cleanup at the target instance when setting up replication for disaster recovery.",
	                                                                dockerBlockPushingSchema1: "When set, Artifactory will block the pushing of Docker images with manifest v2 schema 1 to this repository."
	                                                },
	                                                remoteForm: {
	                                                                publicDescription: "Textual description of the repository.\nThis description is displayed when the repository is selected in the Tree Browser.",
	                                                                internalDescription: "Additional notes that are only displayed in this form. ",
	                                                                includesPattern: "List of artifact patterns to include when evaluating artifact requests in the form of x/y/**/z/*. When used, only artifacts matching one of the include patterns are served.\nBy default, all artifacts are included (**/*).",
	                                                                nuGetDownloadContextPath: "The context path prefix through which NuGet downloads are served.\nFor example, the NuGet Gallery download URL is 'https://nuget.org/api/v2/package', so the repository\nURL should be configured as 'https://nuget.org' and the download context path should be configured as 'api/v2/package'.",
	                                                                v3FeedUrl: "The URL to the NuGet v3 feed.\nFor example the feed URL for the official nuget.org repository is (also the default value): \n\"https://api.nuget.org/v3/index.json\"",
	                                                                eagerlyFetchJars: "When marked, the repository attempts to eagerly fetch the jar in the background each time a POM is requested.",
	                                                                eagerlyFetchSources: "When marked, the repository attempts to eagerly fetch the source jar in the background each time a jar is requested.",
	                                                                excludedPattern: "List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**/z/*.\nBy default no artifacts are excluded.",
	                                                                dockerEnableTokenAuthentication: "Enable token (Bearer) based authentication.",
	                                                                checksumPolicy: "Checksum policy determines how Artifactory behaves when a client checksum for a deployed resource is missing or conflicts with the locally calculated checksum (bad checksum).\nFor more details, please refer to <a href=\"https://www.jfrog.com/confluence/display/RTF/Remote+Repositories#RemoteRepositories-ChecksumPolicy\">Checksum Policy</a>.",
	                                                                maxUniqueSnapshots: "The maximum number of unique snapshots of a single artifact to store.\nOnce the number of snapshots exceeds this setting, older versions are removed.\nA value of 0 (default) indicates there is no limit, and unique snapshots are not cleaned up.",
	                                                                listRemoteFolderItems: "Lists the items of remote folders in simple and list browsing. Required for dynamic resolution that depends on remote folder content information, such as remote Ivy version lookups. The remote content is cached according to the value of the\n'Retrieval Cache Period'.",
	                                                                blackedOut: "When set, the repository or its local cache do not participate in artifact resolution.",
	                                                                globalOfflineMode: "If set, Artifactory does not try to access remote resources to fetch artifacts. Only cached and local artifacts are served.",
	                                                                offline: "If set, Artifactory does not try to fetch remote artifacts. Only locally-cached artifacts are retrieved.",
	                                                                shareConfiguration: "If set, the configuration details of this remote repository can be publicly shared with remote clients such as other Artifactory servers.",
	                                                                repositoryLayout: "The layout that the repository should use to store and identify modules.",
	                                                                remoteLayoutMapping: "The layout that best matches that of the remote repository.\nPath-mapping takes place if the remote layout is different from the local layout.\nIn this case, remote module artifacts and descriptors are stored according to the local repository layout (e.g., Maven 1->Maven 2, or Maven 2->Ivy).",
	                                                                localAddress: "The local address to be used when creating connections.\nUseful for specifying the interface to use on systems with multiple network interfaces.",
	                                                                username: "Username for HTTP authentication.",
	                                                                password: "Password for HTTP authentication.",
	                                                                socketTimeout: "Network timeout (in ms) to use when establishing a connection and for unanswered requests.\nTiming out on a network operation is considered a retrieval failure.",
	                                                                lenientHostAuthentication: "Allow credentials of this repository to be used on requests redirected to any other host.",
	                                                                enableCookieManagement: "Enables cookie management if the remote repository uses cookies to manage client state.",
	                                                                keepUnusedArtifacts: "The number of hours to wait before an artifact is deemed \"unused\" and eligible for cleanup from the repository.\nA value of 0 means automatic cleanup of cached artifacts is disabled.",
	                                                                assumedOfflineLimit: "The number of seconds the repository stays in assumed offline state after a connection error. At the end of this time, an online check is attempted in order to reset the offline status.\nA value of 0 means the repository is never assumed offline.",
	                                                                retrievalCachePeriod: "This value refers to the number of seconds to cache metadata files before checking for newer versions on remote server. A value of 0 indicates no caching.",
	                                                                missedRetrievalCachePeriod: "The number of seconds to cache artifact retrieval misses (artifact not found).     A value of 0 indicates no caching.",
	                                                                queryParams: "Custom HTTP query parameters that will be automatically included in all remote resource requests.\nFor example: param1=val1&ampparam2=val2&ampparam3=val3",
	                                                                allowContentBrowsing: "When set, you may view content such as HTML or Javadoc files directly from Artifactory.\nThis may not be safe and therefore requires strict content moderation to prevent malicious users from uploading content that may compromise security (e.g., cross-site scripting attacks).",
	                                                                storeArtifactsLocally: "When set, the repository should store cached artifacts locally. When not set, artifacts are not stored locally, and direct repository-to-client streaming is used. This can be useful for multi-server setups over a high-speed LAN, with one Artifactory caching certain data on central storage, and streaming it directly to satellite pass-though Artifactory servers.",
	                                                                synchronizeArtifactoryProperties: "When set, remote artifacts are fetched along with their properties.",
	                                                                selectPropertySets: "Specifies the Property Sets to be used to construct the list of properties displayed when assigning properties to artifacts in this repository.\nThis is a convenience; not a restrictive measure. You can still assign any property to artifacts from the Properties tab.",
	                                                                cronExpression: "The Cron expression that determines artifact cleanup frequency. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                cronExpressionReplication: "The Cron expression that determines when the next replication will be triggered. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>.",
	                                                                syncDeletes: "Delete artifacts and folders that no longer exist in the source repository.",
	                                                                syncProperties: "When set, artifact download statistics will also be replicated. Set to avoid inadvertent cleanup at the target instance when setting up replication for disaster recovery.",
	                                                                pathPrefix: "Limit replication to artifacts matching this sub-path under the source repository.",
	                                                                bowerRegistryURL: "The remote Bower registry URL to communicate with.\nUsually the default value (https://bower.herokuapp.com) will be correct unless the remote resource is an Artifactory instance. In this case the value should match the remote repository URL.",
	                                                                nugetFeedContextPath: "The context path prefix through which the NuGet feeds are served.\nFor example, the NuGet Gallery feed URL is 'https://nuget.org/api/v2', so the repository URL should be configured as 'https://nuget.org' and the feed context path should be configured as 'api/v2'.",
	                                                                nugetDownloadContextPath: "The context path prefix through which NuGet downloads are served.\nFor example, the NuGet Gallery download URL is 'https://nuget.org/api/v2/package', so the repository\nURL should be configured as 'https://nuget.org' and the download context path should be configured as 'api/v2/package'.",
	                                                                smartSyncStatistics: "If set, download statistics for the artifact at the remote Artifactory instance will be updated each time a cached item is downloaded from your repository.",
	                                                                smartSyncProperties: "If set, properties for artifacts that have been cached in this repository will be updated if they are modified in the artifact hosted at the remote Artifactory instance.",
	                                                                smartListRemoteFolderItems: "If set, Artifactory lets you navigate the contents of the repository at the remote Artifactory instance, for all package types, even if the artifacts have not been cached in this repository.",
	                                                                originAbsenceDetection: "If set, Artifactory will check that cached artifacts' sources are available in the origin repository.",
	                                                                propagateQueryParams: "If set, the query params passed with the request to Artifactory, will be passed on to the remote repo.",
	                                                                rejectInvalidJars: "Reject the caching of jar files that are found to be invalid.\nFor example, pseudo jars retrieved behind a \"captive portal\".",
	                                                                enableEventReplication: "When set, in addition to running replication based on its Cron expression, each event on the remote repository will trigger replication of the artifacts changed in the event (e.g. add, delete, change property).\nTo set event replication, the remote replication source must be an Artifactory repository. The Artifactory version must be 5.5 or above.",
	                                                                enableEventReplicationDisabledNoEnterprise: "When set, in addition to running replication based on its Cron expression, each event on the remote repository will trigger replication of the artifacts changed in the event (e.g. add, delete, change property).\nTo set event replication, you need an Enterprise license.",
	                                                                blockMismatchingMimeTypes: "If set, artifacts will fail to download if a mismatch is detected between requested and received mimetype, according to the list specified in the system properties file under blockedMismatchingMimeTypes. You can override by adding mimetypes to the override list below.",
	                                                                bypassHeadRequests: "Before caching an artifact, Artifactory first sends a HEAD request to the remote resource. In some remote resources, HEAD requests are disallowed and therefore rejected, even though downloading the artifact is allowed. When checked, Artifactory will bypass the HEAD request and cache the artifact directly using a GET request.",
	                                                                foreignLayersCachingPatterns: "Optional include patterns to match external URLs. Ant-style path expressions are supported (*, **, ?).\nFor example, specifying **/github.com/** will only allow downloading foreign layers from github.com host.",
	                                                                pypiRepositorySuffix: "Usually should be left as a default for 'simple', unless the remote is a PyPI server that has custom registry suffix, like +simple in DevPI",
	                                                                dockerBlockPushingSchema1: "When set, Artifactory will block the pulling of Docker images with manifest v2 schema 1 from the remote repository (i.e. the upstream). It will be possible to pull images with manifest v2 schema 1 that exist in the cache."
	                                                },
	                                                virtualForm: {
	                                                                publicDescription: "Textual description of the repository.\nThis description is displayed when the repository is selected in the Tree Browser.",
	                                                                internalDescription: "Additional notes that are only displayed in this form. ",
	                                                                cleanupRepositoryReferencesinPOM: "(1) Discard Active References - Removes repository elements that are declared directly under project or under a profile in the same POM that is activeByDefault.\n(2) Discard Any References - Removes all repository elements regardless of whether they are included in an active profile or not.\n(3) Nothing - Does not remove any repository elements declared in the POM.",
	                                                                pathSuffix: "An optional sub-path inside the local repository where P2 metadata files reside.\nWhen left empty, P2 metadata files (content, artifacts, compositeContent, etc.) are assumed to reside directly under the repository's root.\nIf you have a Tycho repository deployed as a single archive, specify the archive's root path. For example: 'eclipse-repository.zip!'. ",
	                                                                includesPattern: "List of artifact patterns to include when evaluating artifact requests in the form of x/y/**/z/*. When used, only artifacts matching one of the include patterns are served.\nBy default, all artifacts are included (**/*).",
	                                                                excludedPattern: "List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/**/z/*.\nBy default no artifacts are excluded.",
	                                                                resolvedRepositories: "The resolved list of repositories.\nRepositories starting with an exclamation mark ('!') indicate that not all tokens can be mapped between the layout of this virtual repository and the marked repository.\nPath translations may not work as expected.",
	                                                                artifactoryRequestCanRetrieveRemoteArtifacts: "Determines whether artifact requests coming from other instance of Artifactory can be fulfilled by accessing this virtual repository's remote repositories, or by only accessing its caches (default).",
	                                                                resolveDockerTagsByTimestamp: "When enabled, in cases where the same Docker tag exists in two or more of the aggregated repositories, Artifactory will return the tag that has the latest timestamp.",
	                                                                externalDependenciesPatterns: "Optional include patterns to match external dependencies. Ant-style path expressions are supported (*, **, ?).\nFor example, specifying **/github.com/** will only allow external dependencies from github.com host.",
	                                                                externalDependenciesPatternsGo: "A whitelist of Ant-style path patterns that determine which remote VCS roots Artifactory will follow to download remote modules from, when presented with 'go-import' meta tags in the remote repository response. By default, this is set to '**', which means that remote modules may be downloaded from any external VCS source.",
	                                                                enableGoImportMetaTag: "When checked (default), Artifactory will automatically follow remote VCS roots in 'go-import' meta tags to download remote modules.",
	                                                                cleanupRepositoryReferencesInPOMs: "(1) Discard Active References - Removes repository elements that are declared directly under a project or a profile in the same POM that is activeByDefault.\n(2) Discard Any References - Removes all repository elements regardless of whether they are included in an active profile or not.\n(3) Nothing - Does not remove any repository elements declared in the POM.",
	                                                                virtualRetrievalCachePeriod: "This value refers to the number of seconds to cache metadata files before checking for newer versions on aggregated repositories. A value of 0 indicates no caching.",
	                                                                virtualDebianDefaultArchitectures: "Specifies the architectures which will be indexed for the included remote repositories, For example: i386, arm64.",
	                                                                keyPair: "A named key-pair that is used to sign artifacts automatically.",
	                                                                forceMavenAuth: "User authentication is required when accessing the repository. An anonymous request will display an HTTP 401 error. This is also enforced when aggregated repositories support anonymous requests."
	
	                                                },
	                                                distributionForm: {
	                                                                includesPattern: "Properties on distributed artifacts with key that matches the list below will be added as a version attributes in Bintray.",
	                                                                repositoryVisibility: "Creating private Bintray repositories is available for <a href=\"https://www.jfrog.com/bintray/bintray-private-repo/\" target=\"_blank\">premium Bintray</a> accounts.",
	                                                                distributeProduct: "When set, the ${productName} token will be replaced in the distribution rules with the product name configured below. Also, Artifactory will create a <a href=\"https://bintray.com/docs/usermanual/uploads/uploads_products.html\" target=\"_blank\">Bintray product</a> and link the deployed packages to the product."
	                                                },
	                                                layoutsForm: {
	                                                                artifactPathPattern: "Please refer to: <a href=\"https://www.jfrog.com/confluence/display/RTF/Repository+Layouts#RepositoryLayouts-ModulesandPathPatternsusedbyRepositoryLayouts\" target=\"_blank\">Path Patterns</a> in the Artifactory Wiki documentation.",
	                                                                distinctiveDescriptorPathPattern: "Please refer to: <a href=\"https://www.jfrog.com/confluence/display/RTF/Repository+Layouts#RepositoryLayouts-DescriptorPathPatterns\" target=\"_blank\">Descriptor Path Patterns</a> in the Artifactory Wiki documentation.",
	                                                                folderIntegrationRevisionRegExp: "A regular expression matching the integration revision string appearing in a folder name\nas part of the artifact's path. For example, 'SNAPSHOT', in Maven.\nNote! Take care not to introduce any regexp capturing groups within this expression.\nIf not applicable use '.*'.",
	                                                                fileIntegrationRevisionRegExp: "A regular expression matching the integration revision string appearing in a file name\nas part of the artifact's path. For example, 'SNAPSHOT|(?:(?:[0-9]{8}.[0-9]{6})-(?:[0-9]+))',\nin Maven.\nNote! Take care not to introduce any regexp capturing groups within this expression.\nIf not applicable use '.*'."
	                                                },
	                                                reverseProxy: {
	                                                                registryPort: "This port will be binded to the Docker registry."
	                                                },
	                                                rulesPopup: {
	                                                                repositoryFilterTooltip: "<b>Repository Filter</b> -(Optional) Rule will only apply to repositories matching the regular expression." + "You can reuse the capture values in anyone of the Bintray output fields. <a href=\"https://www.jfrog.com/confluence/display/RTF/Distribution+Repository#DistributionRepository-RepositoryandPathFilterParameters\" target=\"_blank\"> Click here </a> to read more about this field.",
	                                                                pathFilterToolip: "<b>Path Filter</b> - (Optional) Rule will only apply to artifacts with path matching the regular expression" + "You can reuse the capture values in anyone of the Bintray output fields. <a href=\"https://www.jfrog.com/confluence/display/RTF/Distribution+Repository#DistributionRepository-RepositoryandPathFilterParameters\" target=\"_blank\"> Click here </a> to read more about this field." },
	                                                downloadRedirectConfig: "When set, download requests to this repository will redirect the client to download the artifact directly from the cloud storage provider. Available in Enterprise+ and Edge licenses only."
	                                },
	                                security: {
	                                                general: {
	                                                                hideExistenceOfUnauthorizedResources: "When set, Artifactory hides the existence of unauthorized resources by sending a 404\nresponse (not found) to requests for resources that are not accessible by the user. Otherwise,\nthe response implies that the resource exists, but is protected,  by requesting authentication\nfor anonymous requests (401), or by denying an authenticated request for unauthorized users.",
	                                                                passwordEncryptionPolicy: "Determines the password requirements from users identified to Artifactory from a remote client such as Maven.\nThe options are:\n(1) Supported (default): Users can authenticate using secure encrypted passwords or clear-text passwords.\n(2) Required: Users must authenticate using secure encrypted passwords. Clear-text authentication fails.\n(3) Unsupported: Only clear-text passwords can be used for authentication.",
	                                                                buildGlobalBasicReadAllowed: "When checked, all users can view the published modules for all builds in the system regardless of any specific permissions applied to a particular build.",
	                                                                encrypt: "Artifactory will generate a Master Encryption Key and encrypt all passwords in your configuration.",
	                                                                decrypt: "Artifactory will decrypt all passwords in your configuration.",
	                                                                passwordMaxAge: "The time interval in which users will be obligated to change their password",
	                                                                notifyByMail: "Users will receive an email notification X days before password will expire.\nMail server must be enabled and configured correctly."
	                                                },
	                                                usersForm: {
	                                                                disableInternalPassword: "When set, user's password is cleared which means that only external authentication is allowed (for example via an LDAP server)."
	                                                },
	                                                permissionsForm: {
	                                                                repoPatterns: "Simple comma separated wildcard patterns for repository artifact paths (with no leading slash).\nAnt-style path expressions are supported (*, **, ?).\nFor example: \"org/apache/**\"",
	                                                                buildPatterns: {
	                                                                                includePatterns: "Use Ant-style wildcard patterns to specify build names (i.e. artifact paths) in the build info repository (without a leading slash) that will be included in this permission target.\nAnt-style path expressions are supported (*, **, ?).\nFor example, an \"apache/**\" pattern will include the \"apache\" build info in the permission.",
	                                                                                excludePatterns: "Use Ant-style wildcard patterns to specify build names (i.e. artifact paths) in the build info repository (without a leading slash) that will be excluded from this permission target.\nAnt-style path expressions are supported (*, **, ?).\nFor example, an \"apache/**\" pattern will exclude the \"apache\" build info from the permission."
	                                                                },
	                                                                adminIcon: {
	                                                                                user: "Users with admin privileges cannot be added to a Permission Target",
	                                                                                group: "Groups with admin privileges cannot be added to a Permission Target" },
	
	                                                                repositoriesPermissions: "<b>Read</b> - Allows reading and downloading of artifacts\n<b>Annotate</b> - Allows annotating artifacts and folders with metadata and properties\n<b>Upload / Cache</b> - Allows uploading artifacts to local repositories and caching artifacts from remote repositories\n<b>Delete / Overwrite</b> - Allows deletion or overwriting of artifacts\n<b>Manage</b> - Allows changing repository permission settings for other users on this permission target",
	                                                                buildsPermissions: "<b>Read</b> - Allows reading and downloading of build info artifacts and viewing the corresponding build in the Builds page\n<b>Annotate</b> - Allows annotating build info artifacts and folders with metadata and properties\n<b>Upload</b> - Allows uploading and promoting build info artifacts\n<b>Delete</b> - Allows deletion of build info artifacts\n<b>Manage</b> -  Allows changing build info permission settings for other users on this permission target\n" },
	                                                LDAPSettingsForm: {
	                                                                LDAPURL: "Location of the LDAP server in the following format:\nldap://myserver:myport/dc=sampledomain,dc=com",
	                                                                allowUserToAccessProfile: "Auto created users will have access to their profile page and will be able to perform actions such as generating an API key.",
	                                                                userDNPattern: "A DN pattern that can be used to log users directly in to LDAP.\nThis pattern is used to create a DN string for 'direct' user authentication where the pattern is relative to the base DN in the LDAP URL.\nThe pattern argument {0} is replaced with the username. This only works if anonymous binding is allowed and a direct user DN can\nbe used, which is not the default case for Active Directory (use User DN search filter instead).\nExample: uid={0},ou=People",
	                                                                autoCreateArtifactoryUsers: "When set, users are automatically created when using LDAP. Otherwise, users are transient\nand associated with auto-join groups defined in Artifactory.",
	                                                                emailAttribute: "An attribute that can be used to map a user's email address to a user created\nautomatically in Artifactory.",
	                                                                searchFilter: "A filter expression used to search for the user DN used in LDAP authentication.\nThis is an LDAP search filter (as defined in 'RFC 2254') with optional arguments.\nIn this case, the username is the only argument, and is denoted by '{0}'.\nPossible examples are:\n(uid={0}) - This searches for a username match on the attribute.\nAuthentication to LDAP is performed from the DN found if successful.",
	                                                                searchBase: "(Optional) A context name to search in relative to the base DN of the LDAP URL. For example, 'ou=users'\nWith the LDAP Group Add-on enabled, it is possible to enter multiple search base entries\nseparated by a pipe ('|') character.",
	                                                                manageDN: "The full DN of the user that binds to the LDAP server to perform user searches.\nOnly used with \"search\" authentication.\n",
	                                                                managerPassword: "The password of the user that binds to the LDAP server to perform the search.\nOnly used with \"search\" authentication.",
	                                                                subTreeSearch: "When set, enables deep search through the sub tree of the LDAP URL + search base."
	                                                },
	                                                LDAPGroupsForm: {
	                                                                settingsName: "LDAP group key.",
	                                                                LDAPSetting: "Select the LDAP setting you want to use for group retrieval",
	                                                                "static": "Groups have a multi-value member attribute containing user DNs or User IDs.",
	                                                                dynamic: "Users have a mutli-value member attribute containing DNs or names of imported groups.\nDefault group association strategy for Active Directory.",
	                                                                hierarchy: "User DN contains one or more hierarchical name attributes of imported groups.\nFor example: cn=joe,ou=sales,ou=europe,dc=acme,dc=com implies Joe's membership in the 'sales' and 'europe' groups.",
	                                                                groupMemberAttribute: "A multi-value attribute on the group entry containing user DNs or IDs of the group members (e.g., uniqueMember,member).",
	                                                                groupNameAttribute: "Attribute on the group entry denoting the group name. Used when importing groups.",
	                                                                descriptionAttribute: "An attribute on the group entry which denoting the group description. Used when importing groups.",
	                                                                filter: "The LDAP filter used to search for group entries. Used when importing groups.",
	                                                                searchBase: "A search base for group entry DNs, relative to the DN on the LDAP server's URL (and not relative to the LDAP Setting's \"Search Base\"). Used when importing groups."
	                                                },
	                                                crowd_integration: {
	                                                                sessionValidationInterval: "The time window (min) during which the session does not need to be validated.",
	                                                                useJIRAUserServer: "Authenticate using credentials instead of the default session, token-based authentication.\nThis is required when using the JIRA User Server.",
	                                                                autoCreateArtifactoryUsers: "When set, authenticated users are automatically created in Artifactory.\nWhen not set, for every request from a Crowd user, the user is temporarily associated with default groups (if such groups are defined),\nand the permissions for these groups apply. Without automatic user creation, you must manually create the user in Artifactory to manage\nuser permissions not attached to their default groups.",
	                                                                allowUserToAccessProfile: "Auto created users will have access to their profile page and will be able to perform actions such as generating an API key.",
	                                                                useDefaultProxyConfiguration: "If a default proxy definition exists, it is used to pass through to the Crowd Server."
	
	                                                },
	                                                SAMLSSOSettings: {
	                                                                SAMLLoginURL: "The identity provider login URL (when you try to login, the service provider redirects to this URL).",
	                                                                SAMLLogoutURL: "The identity provider logout URL (when you try to logout, the service provider redirects to this URL).",
	                                                                SAMLServiceProviderName: "The Artifactory name in the SAML federation.",
	                                                                SAMLCertificate: "The certificate for SAML Authentication.\nNOTE! The certificate must contain the public key to allow Artifactory to verify sign-in requests.",
	                                                                autoCreateArtifactoryUsers: "When set, authenticated users are automatically created in Artifactory.\nWhen not set, for every request from a SAML user, the user is temporarily associated with default groups (if such groups are defined),\nand the permissions for these groups apply. Without automatic user creation, you must manually create the user inside Artifactory to manage\nuser permissions not attached to their default groups.",
	                                                                allowUserToAccessProfile: "Auto created users will have access to their profile page and will be able to perform actions such as generating an API key.",
	                                                                useEncryptedAssertion: "When set, an X.509 public certificate will be created by Artifactory. Download this certificate and upload it to your IDP and choose your own encryption algorithm. This process will let you encrypt the assertion section in your SAML response.",
	                                                                autoRedirect: "When set, clicking on the login link will direct users to the configured SAML login URL.",
	                                                                syncGroups: "When set, in addition to the groups the user is already associated with, he will also be associated with the groups returned in the SAML login " + "response. Note that the user's association with the returned groups is not persistent. It is only valid for the current login session.",
	                                                                groupAttribute: "The group attribute in the SAML login XML response.",
	                                                                emailAttribute: "If Auto Create Artifactory Users is enabled or an internal user exists, Artifactory will set the user's email to the value in this attribute that is returned by the SAML login XML response."
	                                                },
	                                                OAuthSSO: {
	                                                                id: "Your OAuth2 id, given by the provider.",
	                                                                secret: "Your OAuth2 shared secret, given by the provider.",
	                                                                domain: "Google App domain accepted for authentication.",
	                                                                basicUrl: "The url used to acquire a token via basic auth.",
	                                                                authUrl: "The url used for the initial authentication step.",
	                                                                apiUrl: "The url used for api access, if needed to get user data.",
	                                                                tokenUrl: "The url used to acquire a token from the provider.",
	                                                                allowUserToAccessProfile: "Auto created users will have access to their profile page and will be able to perform actions such as generating an API key."
	                                                },
	                                                HTTPSSO: {
	                                                                artifactoryIsProxiedByASecureHTTPServer: "When set, Artifactory trusts incoming requests and reuses the remote user originally set on the request by the SSO of the HTTP server.\nThis is useful if you want to use existing enterprise SSO integrations, such as the powerful authentication schemes provided by Apache (mod_auth_ldap, mod_auth_ntlm, mod_auth_kerb, etc.).\nWhen Artifactory is deployed as a webapp on Tomcat behind Apache:\nIf using mod_jk, be sure to use the \"JkEnvVar REMOTE_USER\" directive in Apache's configuration.",
	                                                                remoteUserRequestVariable: "The name of the HTTP request variable to use for extracting the user identity.\nDefault is: REMOTE_USER.",
	                                                                autoCreateArtifactoryUsers: "When set, authenticated users are automatically created in Artifactory.\nWhen not set, for every request from an SSO user, the user is temporarily associated with default groups (if such groups are defined),\nand the permissions for these groups apply. Without automatic user creation, you must manually create the user inside Artifactory to manage\nuser permissions not attached to their default groups.",
	                                                                allowUserToAccessProfile: "Auto created users will have access to their profile page and will be able to perform actions such as generating an API key.",
	                                                                autoAssociateLDAPGroups: "When set, the user will be associated with the groups returned in the LDAP login response. Note that the user's association with the returned groups is persistent if the 'Auto Create Artifactory Users' is set."
	                                                },
	                                                SSHSERVER: {
	                                                                enableSshServer: "Enable SSH authentication.",
	                                                                serverPublicKey: "SSH Public Key to identify your server.",
	                                                                serverPrivateKey: "SSH Private Key to identify your server.",
	                                                                sshServerPort: "The port to use for SSH authentication. Default: 1337",
	                                                                customURLBase: "A hard-coded URL prefix used to calculate relative URLs."
	                                                },
	                                                signingKeys: {
	                                                                passPhrase: "Pass phrase required to use the installed keys. It can be saved or supplied with the REST API calls.\nThe \"Verify\" button checks that the keys and pass phrase match, and can be used to verify the pass phrase without saving it.\nIf keys are saved, we highly recommend using the Master Encryption Key feature."
	                                                }
	
	                                },
	                                services: {
	                                                backupsForm: {
	                                                                cronExpression: "The Cron expression that determines backup frequency. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>",
	                                                                serverPathForBackup: "The directory to which local repository data is backed up as files.\nThe default is $ARTIFACTORY_HOME/backup/[backup_key]",
	                                                                sendMailToAdminsIfThereAreBackupErrors: "Requires properly configured email settings and valid email addresses for admin users.",
	                                                                precalculateSpaceBeforeBackup: "If set, Artifactory will verify that the backup target location has enough disk space available to hold the backed up data. If there is not enough space available, Artifactory will abort the backup and write a message in the log file. Applicable only to non-incremental backups.",
	                                                                excludeBuilds: "Exclude all builds from the backup.",
	                                                                excludeNewRepositories: "Automatically exclude new repositories from the backup.",
	                                                                retentionPeriod: "The maximum number of hours to keep old backups in the destination directory.\nSetting the \"Incremental\" checkbox, indicates that backups are incrementally written\n(delta only) to the same directory: ${backupDir}/current. This \"in place\" backup is suitable\nfor file-system based backup support. In this mode, cleanup of old backups is inactive.\nThe default is 168 hours (7 days).",
	                                                                backUpToAZipArchive: "When set, the backup output should be a zip archive.\nOtherwise the output is to a directory (default)."
	
	                                                },
	                                                mavenIndexer: {
	                                                                cronExpression: "The Cron expression that determines indexer frequency. For detailed information, see <a href=\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html\" target=\"_blank\">The CronTrigger Tutorial</a>"
	                                                }
	                                },
	                                logAnalytics: {
	                                                newConnection: "Use this option if you don't have a Client ID and Secret for Artifactory."
	                                }
	                },
	                artifacts: {
	                                deploy: {
	                                                targetRepo: "The target repository to which the artifact should be deployed.",
	                                                targetPath: "The relative path in the target repository. You can add key-value matrix parameters to deploy the artifacts with properties.\nFor more details, please refer to <a href=\"https://www.jfrog.com/confluence/display/RTF/Using+Properties+in+Deployment+and+Resolution#UsingPropertiesinDeploymentandResolution-IntroducingMatrixParameters\" target=\"_blank\"> Introducing Matrix Parameters</a>.",
	                                                deployAsMaven: "Deploy a Maven artifact where the target deployment path is based on Maven attributes.\nIf you want to specify the target deployment path manually, unset this option.",
	                                                deployAsDebian: "Deploying a Debian file to a Debian repository requires coordinates. Setting this flag lets you configure the Debian file coordinates",
	                                                noDeployPermission: "You do not have deploy permission" },
	                                pushToBintray: {
	                                                bintrayPackageName: "A target package name under the repository. You must create the package in Bintray first if it does not exist.",
	                                                bintrayPackageVersion: "A target version under the package.If the version does not yet exist in Bintray, it is automatically created."
	                                },
	                                browse: {
	                                                created: "The time this artifact was deployed to or cached in Artifactory.",
	                                                lastModified: "The time this artifact was modified. If this value is not available, the artifact's 'Created' value is used.\nThis can occur if the artifact is deployed without the 'X-Artifactory-Last-Modified' request header.",
	                                                licenses: "Scans the archive for a textual license file. The following file names are searched for:\nlicense,LICENSE,license.txt,LICENSE.txt,LICENSE.TXT\n(You can override this list by using the 'artifactory.archive.licenseFile.names' property).",
	                                                filtered: "Set this to have Artifactory serve the file as a filtered resource.\nA filtered textual resource is processed by the <a href=\"https://freemarker.apache.org/\" target=\"_blank\">FreeMarker</a> engine before being returned to clients.\nThe context accessible to the template includes:\nProperties ,Security and Request. Javadocs can be found in the <a href=\"https://repo.jfrog.org/artifactory/libs-releases-local/org/artifactory/artifactory-papi/%5BRELEASE%5D/artifactory-papi-%5BRELEASE%5D-javadoc.jar!/index.html\" target=\"_blank\">Artifactory Public API</a>.",
	                                                lastReplicationStatus: "Displays the result of the latest run of this repository's scheduled replication.\nCan be one of the following:\nNever ran: Replication has not yet run.\nIncomplete: Replication has not yet completed or was interrupted.\nCompleted with errors: Replication errors were logged.\nCompleted with warnings: Replication warnings were logged.\nCompleted successfully: No errors or warnings logged.\nInconsistent: Replication status cannot be interpreted.",
	                                                recursive: "When checked, the property will be added to the selected folder and to all of the artifacts, folders and sub-folders under this folder."
	                                },
	                                search: {
	                                                stash: "The Stash lets you store search results for later use.\nOnce it is populated, you can add, subtract or intersect new search results to assemble just the right set of artifacts you need.\nThe Stash Browser displays all the artifacts in your stash and provides a convenient way to perform bulk operations.\nYou can copy or move the entire Stash to a repository, or perform actions on individual items."
	                                },
	
	                                general: {
	                                                /*name: 'Copy this link to navigate directly to this item in the tree browser.',*/
	                                                created: "The time this artifact was deployed to or cached in Artifactory",
	                                                filtered: "Set this to have Artifactory serve the file as a filtered resource.\nA filtered textual resource is processed by the <a href=\"https://freemarker.apache.org/\" target=\"_blank\">FreeMarker</a> engine before being returned to clients.\nThe context accessible to the template includes:\nProperties ,Security and Request. Javadocs can be found in the <a href=\"https://repo.jfrog.org/artifactory/libs-releases-local/org/artifactory/artifactory-papi/%5BRELEASE%5D/artifactory-papi-%5BRELEASE%5D-javadoc.jar!/index.html\" target=\"_blank\">Artifactory Public API</a>."
	                                },
	                                selectTargetPathModal: {
	                                                targetRepoInput: ["Selects the target repository for the transferred items.", "Repositories starting with an exclamation mark ('!') indicate that not all tokens", "can be mapped between the layouts of the source repository and the marked repository.", "Path translations may not work as expected."].join(" "),
	                                                copyToCustomCheckbox: {
	                                                                copy: ["Enable copying and renaming to a custom target path. WARNING: This will cause", "the operation to suppress cross-layout translation when copying to different layouts.", "This means that your client may not be able to resolve the artifacts even in cases of a same-layout move."].join(" "),
	                                                                move: ["Enable moving and renaming to a custom target path. WARNING: This will cause", "the operation to suppress cross-layout translation when moving to different layouts.", "This means that your client may not be able to resolve the artifacts even in cases of a same-layout move."].join(" ")
	                                                },
	                                                customPathInput: {
	                                                                copy: ["Type the path in the target repository where the selected source should be copied to.", "NOTE: Copy operations are executed using Unix conventions (e.g.copying org/jfrog/example from", "a source repository to org/jfrog/example in a target repository will result in the contents of the source", "being copied to org/jfrog/example/example). To achieve the same path in the target repository, copy", "the source into one folder up in the hierarchy (i.e. copy source org/jfrog/example into target org/jfrog).", "If you leave the Target Path empty, the source will be moved into the target repository's root folder."].join(" "),
	                                                                move: ["Type the path in the target repository where the selected source should be moved to.", "NOTE: Move operations are executed using Unix conventions (e.g. moving org/jfrog/example from", "a source repository to org/jfrog/example in a target repository will result in the contents of the source", "being moved to org/jfrog/example/example). To achieve the same path in the target repository, move", "the source into one folder up in the hierarchy (i.e. move source org/jfrog/example into target org/jfrog).", "If you leave the Target Path empty, the source will be moved into the target repository's root folder."].join(" ")
	                                                }
	
	                                }
	                },
	                builds: {
	                                summary: "An artifact license can have one of the following statuses:\nUnapproved: The license found is not approved.\nUnknown: License information was found but cannot be related to any license managed in Artifactory.\nNot Found: No license information could be found for the artifact.\nNeutral: The license found is not approved, however another approved license was found for the artifact.\nApproved: The license found is approved.",
	                                includePublishedArtifacts: "Include the build's published module artifacts in the license report if they are also used as dependencies for other modules in this build.",
	                                IncludeDependenciesOfTheFollowingScopes: "Include the build's published module dependencies in the license report.\nYou can optionally select the dependency scopes to include.",
	                                autoFindLicenses: "Automatically extract license data from artifacts' module information.\nWhen an artifact has conflicting licenses already attached, you can select whether\nto override these licenses with the ones found.",
	                                name: "The Code Center application name. Click on the link to navigate to this application in Code Center."
	                },
	                userProfile: {
	                                apiKey: "Your API key can be used to authenticate you when using the REST API.\nTo use the API key, add the following header to all REST API calls: 'X-JFrog-Art-Api: &ltYOUR_API_KEY&gt'"
	                }
	
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfSingleDeploy = jfSingleDeploy;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	/**
	 * Created by idannaim on 8/6/15.
	 */
	
	var API = _interopRequire(__webpack_require__(97));
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var jfSingleDeployController = (function () {
	    function jfSingleDeployController($scope, ArtifactoryUploaderFactory, ArtifactDeployDao, ArtifactoryState, JFrogNotifications, GoogleAnalytics) {
	        _classCallCheck(this, jfSingleDeployController);
	
	        this.$scope = $scope;
	        this.artifactDeployDao = ArtifactDeployDao;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.artifactoryState = ArtifactoryState;
	        this.artifactoryUploaderFactory = ArtifactoryUploaderFactory;
	        this.errorQueue = [];
	        this.multiSuccessMessage = "";
	        this.TOOLTIP = TOOLTIP.artifacts.deploy;
	        this.originalDeployPath = "";
	        this.firstInit = true;
	        this.uploadCompleted = false;
	        this.isComposerExtention = false;
	
	        this.REGEX_REPLACER = "@@@@";
	    }
	
	    _createClass(jfSingleDeployController, {
	        $onInit: {
	            value: function $onInit() {
	                this.comm.setController(this);
	                this._initDeploy();
	                this._initEvent();
	            }
	        },
	        _initDeploy: {
	
	            /**
	             * create uploader instance,
	             * set methods callback
	             * set path and file type
	             * @private
	             */
	
	            value: function _initDeploy() {
	                var UPLOAD_REST_URL = "" + API.API_URL + "/artifact/upload";
	                this.deploySingleUploader = this.artifactoryUploaderFactory.getUploaderInstance(this).setUrl(UPLOAD_REST_URL).setOnSuccessItem(this.onSuccessItem).setOnAfterAddingAll(this.onAfterAddingAll).setOnAfterAddingFile(this.onAfterAddingFile).setOnErrorItem(this.onUploadError).setOnCompleteAll(this.onCompleteAll);
	                this._setPathAndFileType(this.node ? this.node.data.path : "");
	                this.deploySingleUploader.getUploader().headers = { "X-Requested-With": "artUI", "X-ARTIFACTORY-REPOTYPE": this.deployFile.repoDeploy.repoType };
	            }
	        },
	        _initEvent: {
	            value: function _initEvent() {
	                this.$scope.$on("$destroy", this.onRemoveSingle.bind(this));
	            }
	        },
	        onSuccessItem: {
	
	            /**
	             *  On file successfully uploaded: setting path for deploy.
	             *  if maven repo set fields and path
	             * @param fileDetails
	             * @param response
	             */
	
	            value: function onSuccessItem(fileDetails, response) {
	                if (this.deployFile.repoDeploy.repoType !== "Maven" && response.unitInfo.artifactType === "maven") {
	                    response.unitInfo.artifactType = "base";
	                }
	                response.unitInfo.origArtifactType = response.unitInfo.artifactType;
	                response.unitInfo.debianArtifact = response.unitInfo.artifactType === "debian";
	                response.unitInfo.mavenArtifact = response.unitInfo.artifactType === "maven";
	                response.unitInfo.vagrantArtifact = response.unitInfo.artifactType === "vagrant";
	                response.unitInfo.composerArtifact = this.deployFile.repoDeploy.repoType === "Composer" && this.isComposerExtention;
	                response.unitInfo.cranArtifact = this.deployFile.repoDeploy.repoType === "CRAN";
	                //        response.unitInfo.originalMaven = response.unitInfo.artifactType==='maven';
	
	                var tempBundle = this.deployFile.unitInfo ? this.deployFile.unitInfo.bundle : false;
	                this.deployFile.unitInfo = response.unitInfo;
	                this.deployFile.unitInfo.bundle = tempBundle;
	                this.deployFile.unitInfo.type = fileDetails.file.name.substr(fileDetails.file.name.lastIndexOf(".") + 1);
	                //HA support
	                this.deployFile.handlingNode = response.handlingNode;
	                this.deployFile.unitConfigFileContent = response.unitConfigFileContent || "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\" xmlns=\"http://maven.apache.org/POM/4.0.0\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId></groupId>\n  <artifactId></artifactId>\n  <version></version>\n  <description>Artifactory auto generated POM</description>\n</project>\n";
	
	                //MavenArtifact causes 'deploy as' checkbox to be lit -> change deployment path according to GAVC
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.mavenArtifact) {
	                    this.originalDeployPath = this.deployFile.targetPath;
	                    this.updateMavenTargetPath();
	                }
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.debianArtifact) {
	                    this.originalDeployPath = this.deployFile.targetPath;
	                    this.updateDebianTargetPath();
	                }
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.cranArtifact) {
	                    this.originalDeployPath = this.deployFile.targetPath;
	                    if (this.deployFile.unitInfo.type === "gz") {
	                        this.deployFile.targetPath = "src/contrib" + this.deployFile.targetPath;
	                    }
	                }
	                if (this.comm) {
	                    this.needToCancel = true;
	                }
	            }
	        },
	        _setPathAndFileType: {
	
	            /**
	             * check if path includes file/archive if yes cut it from the path and set .
	             * check if the current repo is local else clean path.
	             * Reset garbage deployFile and fields if exists.
	             * @param targetPath
	             * @private
	             */
	
	            value: function _setPathAndFileType(targetPath) {
	                _.forEach(this.comm.reposList, function (item) {
	                    if (item.repoType === "YUM") item.repoText = "RPM";
	                });
	
	                if (this.node && this.node.data.isInsideArchive()) {
	                    targetPath = "";
	                } else {
	                    if (this.node && (this.node.data.isFile() || this.node.data.isArchive())) {
	                        if (targetPath.indexOf("/") > -1) {
	                            targetPath = targetPath.substr(0, targetPath.lastIndexOf("/"));
	                        } else if (targetPath.indexOf("\\") > -1) {
	                            targetPath = targetPath.substr(0, targetPath.lastIndexOf("\\"));
	                        } else {
	                            targetPath = "";
	                        }
	                    }
	                }
	                if (this.firstInit) {
	                    if (this.comm && this.comm.localRepo) {
	                        this.deployFile = {
	                            repoDeploy: this.comm.localRepo,
	                            targetPath: targetPath
	                        };
	                    } else {
	                        this.deployFile = {
	                            repoDeploy: this.node && this.node.data.type == "local" ? this.comm.reposList[0] : "",
	                            targetPath: targetPath
	                        };
	                    }
	                } else {
	                    if (this.deployFile && this.deployFile.unitInfo && this.deployFile.unitInfo.mavenArtifact) {
	                        this.deployFile.unitInfo.mavenArtifact = false;
	                    }
	                    if (this.deployFile && this.deployFile.unitInfo && this.deployFile.unitInfo.debianArtifact) {
	                        this.deployFile.unitInfo.debianArtifact = false;
	                    }
	                    this.deployFile.unitInfo = {};
	                    this.deployFile.fileName = "";
	                    this.deploySingleUploader.clearQueue();
	                    this.deployFile.targetPath = targetPath;
	                }
	                this.uploadCompleted = false;
	                this.firstInit = false;
	            }
	        },
	        updateMavenTargetPath: {
	
	            /**
	             * if maven file upload
	             * update path by gavc (onChange)
	             */
	
	            value: function updateMavenTargetPath() {
	                var newPath = "";
	                if (this.deployFile.unitInfo.groupId) {
	                    newPath += this.deployFile.unitInfo.groupId.replace(/\./g, "/");
	                }
	                newPath += "/" + (this.deployFile.unitInfo.artifactId || "");
	                newPath += "/" + (this.deployFile.unitInfo.version || "");
	                newPath += "/" + (this.deployFile.unitInfo.artifactId || "");
	                newPath += "-" + (this.deployFile.unitInfo.version || "");
	                if (this.deployFile.unitInfo.classifier) {
	                    newPath += "-" + this.deployFile.unitInfo.classifier;
	                }
	                newPath += "." + (this.deployFile.unitInfo.type || "");
	
	                this.deployFile.targetPath = newPath;
	                this._bindToPomXml();
	            }
	        },
	        _bindToPomXml: {
	
	            /**
	             * bind and update maven  xml (depend on updateMavenTargetPath)
	             * @private
	             */
	
	            value: function _bindToPomXml() {
	                if (typeof window.DOMParser != "undefined" && typeof window.XMLSerializer != "undefined" && this.deployFile.unitConfigFileContent) {
	                    //Parse the code mirror model into xml object and modify based on input fields
	                    var parser = new DOMParser();
	                    var pomXml = parser.parseFromString(this.deployFile.unitConfigFileContent, "text/xml");
	                    var groupId = pomXml.getElementsByTagName("groupId");
	                    if (groupId.length) {
	                        if (groupId[0].hasChildNodes()) {
	                            groupId[0].childNodes[0].nodeValue = this.deployFile.unitInfo.groupId;
	                        } else {
	                            groupId[0].textContent = this.deployFile.unitInfo.groupId;
	                        }
	                    }
	                    var artifactId = pomXml.getElementsByTagName("artifactId");
	                    if (artifactId.length) {
	                        if (artifactId[0].hasChildNodes()) {
	                            artifactId[0].childNodes[0].nodeValue = this.deployFile.unitInfo.artifactId;
	                        } else {
	                            artifactId[0].textContent = this.deployFile.unitInfo.artifactId;
	                        }
	                    }
	                    var version = pomXml.getElementsByTagName("version");
	                    if (version.length) {
	                        if (version[0].hasChildNodes()) {
	                            version[0].childNodes[0].nodeValue = this.deployFile.unitInfo.version;
	                        } else {
	                            version[0].textContent = this.deployFile.unitInfo.version;
	                        }
	                    }
	                    //Serialize updated pom xml back to string and re-set as model
	                    var backToText = new XMLSerializer();
	                    this.deployFile.unitConfigFileContent = backToText.serializeToString(pomXml);
	                }
	            }
	        },
	        isReady: {
	
	            /**
	             * check if missing fields to disable deploy button
	             * @returns {boolean|*}
	             */
	
	            value: function isReady() {
	                var ok = true;
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.debianArtifact) {
	                    ok = this.deployFile.unitInfo.distribution && this.deployFile.unitInfo.component && this.deployFile.unitInfo.architecture;
	                }
	                if (this.deployFile.unitInfo && this.deployFile.unitInfo.cranArtifact && (this.deployFile.unitInfo.type === "zip" || this.deployFile.unitInfo.type === "tgz")) {
	                    ok = !!this.deployFile.unitInfo.distribution && !!this.deployFile.unitInfo.rVersion;
	                }
	                return ok && this.uploadCompleted && this.deployFile.repoDeploy && (!this.layoutTokensForm || this.layoutTokensForm.$valid) && (!this.mavenArtifactForm || this.mavenArtifactForm.$valid);
	            }
	        },
	        updateDebianTargetPath: {
	
	            /**
	             * if debian file upload
	             * update path onChange
	             */
	
	            value: function updateDebianTargetPath() {
	                var path = undefined;
	                if (this.deployFile.targetPath.indexOf(";") != -1) {
	                    path = this.deployFile.targetPath.substring(0, this.deployFile.targetPath.indexOf(";"));
	                } else {
	                    path = this.deployFile.targetPath;
	                }
	                var newPath = "";
	                newPath += path || "";
	                if (this.deployFile.unitInfo.distribution) {
	                    var dist = this.deployFile.unitInfo.distribution ? this.deployFile.unitInfo.distribution.split(";").join(";deb.distribution=") : null;
	                    newPath += ";deb.distribution=" + (dist || "");
	                }
	                if (this.deployFile.unitInfo.component) {
	                    var comp = this.deployFile.unitInfo.component ? this.deployFile.unitInfo.component.split(";").join(";deb.component=") : null;
	                    newPath += ";deb.component=" + (comp || "");
	                }
	                if (this.deployFile.unitInfo.architecture) {
	                    var arch = this.deployFile.unitInfo.architecture ? this.deployFile.unitInfo.architecture.split(";").join(";deb.architecture=") : null;
	                    newPath += ";deb.architecture=" + (arch || "");
	                }
	                this.deployFile.targetPath = "";
	                this.deployFile.targetPath = newPath;
	            }
	        },
	        updateVagrantTargetPath: {
	
	            /**
	             * if vagrant box file upload
	             * update path onChange
	             */
	
	            value: function updateVagrantTargetPath() {
	                var path = undefined;
	                if (this.deployFile.targetPath.indexOf(";") != -1) {
	                    path = this.deployFile.targetPath.substring(0, this.deployFile.targetPath.indexOf(";"));
	                } else {
	                    path = this.deployFile.targetPath;
	                }
	                var newPath = "";
	                newPath += path || "";
	                if (this.deployFile.unitInfo.boxName) {
	                    var _name = this.deployFile.unitInfo.boxName ? this.deployFile.unitInfo.boxName.split(";").join(";box_name=") : null;
	                    newPath += ";box_name=" + (_name || "");
	                }
	                if (this.deployFile.unitInfo.boxProvider) {
	                    var prov = this.deployFile.unitInfo.boxProvider ? this.deployFile.unitInfo.boxProvider.split(";").join(";box_provider=") : null;
	                    newPath += ";box_provider=" + (prov || "");
	                }
	                if (this.deployFile.unitInfo.boxVersion) {
	                    var ver = this.deployFile.unitInfo.boxVersion ? this.deployFile.unitInfo.boxVersion.split(";").join(";box_version=") : null;
	                    newPath += ";box_version=" + (ver || "");
	                }
	                this.deployFile.targetPath = "";
	                this.deployFile.targetPath = newPath;
	            }
	        },
	        updateComposerTargetPath: {
	            value: function updateComposerTargetPath() {
	                var path = undefined;
	                if (this.deployFile.targetPath.indexOf(";") != -1) {
	                    path = this.deployFile.targetPath.substring(0, this.deployFile.targetPath.indexOf(";"));
	                } else {
	                    path = this.deployFile.targetPath;
	                }
	                var newPath = "";
	                newPath += path || "";
	                if (this.deployFile.unitInfo.version) {
	                    var _name = this.deployFile.unitInfo.version ? this.deployFile.unitInfo.version.split(";").join(";composer.version=") : null;
	                    newPath += ";composer.version=" + (_name || "");
	                }
	
	                this.deployFile.targetPath = "";
	                this.deployFile.targetPath = newPath;
	            }
	        },
	        onAfterAddingAll: {
	            /**
	             *onAfterAddingAll Verifies upload only one file
	             * @param fileItems
	             */
	
	            value: function onAfterAddingAll(fileItems) {
	                if (fileItems.length > 1) {
	                    this.artifactoryNotifications.create({ error: "You can only deploy one file" });
	                    this.deploySingleUploader.clearQueue();
	                    return;
	                }
	
	                var uploadAll = true;
	
	                fileItems.forEach(function (item) {
	                    if (!item.okToUploadFile) {
	                        uploadAll = false;
	                        return;
	                    }
	                });
	                if (uploadAll) {
	                    this.deploySingleUploader.uploadAll();
	                } else {
	                    return;
	                }
	            }
	        },
	        onAfterAddingFile: {
	            value: function onAfterAddingFile(fileItem) {
	                this.isBundle = _.endsWith(fileItem.file.name, "zip") || _.endsWith(fileItem.file.name, "tar") || _.endsWith(fileItem.file.name, "tgz") || _.endsWith(fileItem.file.name, "7z") || _.endsWith(fileItem.file.name, "tar.gz");
	                this.isComposerExtention = /\.(zip|gz|tar|rar|phar|tar.gz|xz)$/i.test(fileItem.file.name);
	                this.deployFile.fileName = fileItem.file.name;
	                if (this.deployFile.targetPath.slice(-1) != "/") {
	                    this.deployFile.targetPath += "/";
	                }
	                this.deployFile.targetPath += fileItem.file.name;
	
	                if (fileItem.file.size < 0) {
	                    fileItem.okToUploadFile = false;
	                    this.deploySingleUploader.removeFileFromQueue(fileItem);
	                } else if (this.isExceedingSizeLimit(fileItem)) {
	                    fileItem.okToUploadFile = false;
	                    this.cancelFileUploadExceedingLimit(fileItem);
	                } else {
	                    // Save original for display
	                    fileItem.file.originalName = fileItem.file.name;
	                    // Encode filename to support UTF-8 strings (server does decode)
	                    fileItem.file.name = encodeURIComponent(fileItem.file.name);
	                    fileItem.okToUploadFile = true;
	                    // this.deploySingleUploader.getUploader().headers['X-ARTIFACTORY-REPOTYPE'] = this.node.data.repoPkgType;
	                }
	            }
	        },
	        isExceedingSizeLimit: {
	
	            /**
	             * test if file exceeds the size limit
	             * @param fileItem
	             */
	
	            value: function isExceedingSizeLimit(fileItem) {
	                return this.fileSizeLimit > 0 && fileItem.file.size > this.toBytes(this.fileSizeLimit);
	            }
	        },
	        cancelFileUploadExceedingLimit: {
	            /**
	             * cancel an upload of a file that exceeds the size limit
	             * @param fileItem
	             */
	
	            value: function cancelFileUploadExceedingLimit(fileItem) {
	                var errorMsg = "File size exceeds the limit of " + this.fileSizeLimit + " MB";
	                this.artifactoryNotifications.create({ error: errorMsg });
	
	                this.deploySingleUploader.removeFileFromQueue(fileItem);
	                this.clearPath();
	            }
	        },
	        toBytes: {
	
	            /**
	             * convert file size from MB to Bytes
	             * @param fileSizeInMB
	             */
	
	            value: function toBytes(fileSizeInMB) {
	                return fileSizeInMB * 1000000;
	            }
	        },
	        onUploadError: {
	
	            /**
	             * when upload item error push to queue for notifications
	             * @param item
	             * @param response
	             */
	
	            value: function onUploadError(item, response) {
	                this.errorQueue.push({ item: item, response: response });
	                this.artifactoryNotifications.create(response);
	                this.deploySingleUploader.removeFileFromQueue(item);
	
	                this.deployFile.unitInfo = {};
	                this.clearPath();
	            }
	        },
	        changeMavenFileType: {
	
	            /**
	             * trigger if user checked for edit maven gavc
	             * if not set artifactType = origArtifactType
	             */
	
	            value: function changeMavenFileType() {
	                if (!this.deployFile.unitInfo.mavenArtifact) {
	                    this.deployFile.unitInfo.maven = false;
	                    this.deployFile.unitInfo.artifactType = this.deployFile.unitInfo.origArtifactType === "maven" ? "base" : this.deployFile.unitInfo.origArtifactType;
	                    if (this.originalDeployPath) {
	                        this.deployFile.targetPath = angular.copy(this.originalDeployPath);
	                    }
	                    this.tempUnitConfigFileContent = this.deployFile.unitConfigFileContent;
	                    delete this.deployFile.unitConfigFileContent;
	                } else {
	                    this.deployFile.unitInfo.maven = true;
	                    this.deployFile.unitInfo.artifactType = "maven";
	                    this.originalDeployPath = angular.copy(this.deployFile.targetPath);
	                    if (this.tempUnitConfigFileContent) {
	                        this.deployFile.unitConfigFileContent = this.tempUnitConfigFileContent;
	                    }
	                    this.updateMavenTargetPath();
	                }
	            }
	        },
	        changeDebianFileType: {
	
	            /**
	             * trigger if user checked for edit debian
	             * if not set artifactType = origArtifactType
	             */
	
	            value: function changeDebianFileType() {
	                if (!this.deployFile.unitInfo.debianArtifact) {
	                    this.deployFile.unitInfo.artifactType = this.deployFile.unitInfo.origArtifactType === "debian" ? "base" : this.deployFile.unitInfo.origArtifactType;
	                    this.deployFile.unitInfo.debian = false;
	                    if (this.originalDeployPath) {
	                        this.deployFile.targetPath = angular.copy(this.originalDeployPath);
	                    }
	                } else {
	                    this.deployFile.unitInfo.debian = true;
	                    this.deployFile.unitInfo.artifactType = "debian";
	                    this.originalDeployPath = angular.copy(this.deployFile.targetPath);
	                    this.updateDebianTargetPath();
	                }
	            }
	        },
	        onBundleDeploy: {
	            value: function onBundleDeploy() {
	                if (this.deployFile.unitInfo.bundle) {
	                    this.tempPathBeforeBundle = this.deployFile.targetPath;
	                    if (!this.targetChanged) {
	                        this.deployFile.targetPath = this.deployFile.targetPath.substr(0, this.deployFile.targetPath.lastIndexOf("/") + 1);
	                    }
	                } else if (!this.deployFile.unitInfo.bundle) {
	                    this.deployFile.targetPath = this.tempPathBeforeBundle;
	                }
	            }
	        },
	        onToggleDeployByLayout: {
	            value: function onToggleDeployByLayout() {
	                if (this.deployFile.unitInfo.deployByLayout) {
	                    this.tempPathBeforeUsingLayout = this.deployFile.targetPath;
	                    if (!this.layoutTokens) {
	                        this.extractTokensFromLayout();
	                    }
	                    this.deployFile.targetPath = this.getPathFromLayoutTokens();
	                } else {
	                    this.deployFile.targetPath = this.tempPathBeforeUsingLayout;
	                }
	            }
	        },
	        onCompleteAll: {
	            value: function onCompleteAll() {
	                this.progress = false;
	                var body = "<ul>";
	                this.artifactoryNotifications.clear();
	                if (this.errorQueue.length) {
	                    this.errorQueue.forEach(function (error) {
	                        body += "<li>\"" + error.item.file.name + "\" " + error.response.error + "</li>";
	                    });
	                    body += "</ul>";
	                    this.artifactoryNotifications.createMessageWithHtml({ type: "error", body: body, timeout: 10000 });
	                    this.deploySingleUploader.clearQueue();
	                    this.errorQueue = [];
	                } else {
	                    //only when no errors
	                    this.uploadCompleted = true;
	                }
	            }
	        },
	        clearPath: {
	
	            /**
	             * when user removed selected file 'clearPath' is calling
	             */
	
	            value: function clearPath() {
	                if (this.node && (this.node.data.isFolder() || this.node.data.isRepo())) {
	                    this.deployFile.targetPath = this.node.data.path;
	                } else {
	                    this.deployFile.targetPath = this.deployFile.targetPath.replace("/" + this.deployFile.fileName, "");
	                }
	                delete this.layoutTokens;
	                this.targetChanged = false;
	                this.uploadCompleted = false;
	            }
	        },
	        onRemoveSingle: {
	
	            /**
	             *
	             * cancel file upload remove from server stock
	             */
	
	            value: function onRemoveSingle() {
	                if (this.needToCancel) {
	                    this.artifactDeployDao.cancelUpload({ fileName: this.deployFile.fileName });
	                    this.needToCancel = false;
	                }
	            }
	        },
	        deployArtifacts: {
	
	            /**
	             * deploy after adding file to queue
	             */
	
	            value: function deployArtifacts() {
	                var _this = this;
	
	                var singleDeploy = {};
	                singleDeploy.action = "deploy";
	                singleDeploy.unitInfo = this.deployFile.unitInfo;
	                singleDeploy.unitInfo.path = angular.copy(this.deployFile.targetPath);
	                singleDeploy.fileName = this.deployFile.fileName;
	                singleDeploy.repoKey = this.deployFile.repoDeploy.repoKey;
	                singleDeploy.handlingNode = this.deployFile.handlingNode;
	
	                if (this.deployFile.unitInfo.Internal && this.deployFile.unitConfigFileContent) {
	                    singleDeploy.publishUnitConfigFile = true;
	                    singleDeploy.unitConfigFileContent = this.deployFile.unitConfigFileContent;
	                }
	                if (!this.deployFile.unitInfo.bundle) {
	                    this.artifactDeployDao.post(singleDeploy).$promise.then(function (result) {
	                        if (result.data) {
	                            _this.deploySuccess(result.data);
	                        }
	                    });
	                } else {
	                    this.artifactDeployDao.postBundle(singleDeploy).$promise.then(function (result) {
	                        if (result.data) {
	                            _this.deploySuccess(result.data);
	                        }
	                    });
	                }
	            }
	        },
	        deploySuccess: {
	            value: function deploySuccess(data) {
	                this.artifactoryNotifications.createMessageWithHtml(this.comm.createNotification(data));
	                this.needToCancel = false;
	                this.onSuccess();
	                this.GoogleAnalytics.trackEvent("Artifacts", "Deploy succeed", this.node.data.repoPkgType, null, this.node.data.repoType, "single");
	            }
	        },
	        isMavenCheckBoxVisible: {
	            value: function isMavenCheckBoxVisible() {
	                //        return this.deployFile.unitInfo && (this.deployFile.unitInfo.originalMaven || (this.deployFile.unitInfo.valid && this.deployFile.repoDeploy.repoType === 'Maven'));
	                return this.deployFile.unitInfo && (this.deployFile.unitInfo.valid && this.deployFile.repoDeploy.repoType === "Maven");
	            }
	        },
	        isMavenSectionVisible: {
	            value: function isMavenSectionVisible() {
	                return this.deployFile.unitInfo && this.deployFile.unitInfo.mavenArtifact && this.isMavenCheckBoxVisible(); // && (this.deployFile.unitInfo.maven || (this.deployFile.unitInfo.valid && this.deployFile.repoDeploy.repoType === 'Maven'));
	            }
	        },
	        extractTokensFromLayout: {
	            value: function extractTokensFromLayout() {
	                var _this = this;
	
	                var allRegexes = undefined;
	
	                var extractToken = function (tokenMatch, customSegment) {
	                    var tokenKey = tokenMatch[1];
	                    var tokenExact = tokenMatch[0];
	
	                    if (_.contains(tokenKey, _this.REGEX_REPLACER)) {
	                        tokenKey = tokenKey.replace(_this.REGEX_REPLACER, allRegexes[0]);
	                        tokenExact = tokenExact.replace(_this.REGEX_REPLACER, allRegexes[0]);
	                        if (customSegment) customSegment.regex = allRegexes[0];
	                        allRegexes.shift();
	                    }
	
	                    var tokenRegex = tokenKey.match(/\<(.*?)\>/);
	                    if (tokenRegex) {
	                        tokenKey = tokenKey.split(tokenRegex[0]).join("");
	                    }
	
	                    if (customSegment) customSegment.tokens.push(tokenKey);
	                    _this.layoutTokens[tokenKey] = {
	                        exactString: tokenExact,
	                        customSegment: customSegment,
	                        regex: tokenKey === "folderItegRev" ? _this.deployFile.repoDeploy.layoutFolderItegRevRegex : tokenKey === "fileItegRev" ? _this.deployFile.repoDeploy.layoutFileItegRevRegex : tokenRegex ? tokenRegex[1] : undefined,
	                        value: tokenKey === "ext" ? _this.deployFile.unitInfo.type : ""
	                    };
	                };
	
	                var pattern = this.deployFile.repoDeploy.layoutPattern;
	                this.layoutTokens = {};
	
	                //Temporarily remove '[' and ']' inside custom regex
	                allRegexes = pattern.match(/\<(.*?)\>/g);
	                pattern = pattern.replace(/\<(.*?)\>/g, this.REGEX_REPLACER);
	                //
	
	                var nextToken = pattern.match(/\[(.*?)\]/);
	                while (nextToken) {
	                    var nextTokenIndex = pattern.search(/\[(.*?)\]/);
	                    var nextCustomSegmentIndex = pattern.search(/\((.*?)\)/);
	
	                    if (nextTokenIndex < nextCustomSegmentIndex || nextCustomSegmentIndex === -1) {
	                        extractToken(nextToken);
	                        pattern = pattern.replace(nextToken[0], "");
	                        nextToken = pattern.match(/\[(.*?)\]/);
	                    } else {
	                        var customSegment = {
	                            match: pattern.match(/\((.*?)\)/),
	                            tokens: []
	                        };
	                        var customPattern = customSegment.match[1];
	                        var nextCustomToken = customPattern.match(/\[(.*?)\]/);
	                        while (nextCustomToken) {
	                            extractToken(nextCustomToken, customSegment);
	                            customPattern = customPattern.replace(nextCustomToken[0], "");
	                            nextCustomToken = customPattern.match(/\[(.*?)\]/);
	                        }
	                        pattern = pattern.replace(customSegment.match[0], "");
	                        nextToken = pattern.match(/\[(.*?)\]/);
	                    }
	                }
	            }
	        },
	        getPathFromLayoutTokens: {
	            value: function getPathFromLayoutTokens() {
	                var pattern = this.deployFile.repoDeploy.layoutPattern;
	                for (var token in this.layoutTokens) {
	                    var customSegment = this.layoutTokens[token].customSegment;
	                    if (customSegment) {
	                        var allFilled = true;
	                        for (var i in customSegment.tokens) {
	                            if (!this.layoutTokens[customSegment.tokens[i]].value) {
	                                allFilled = false;
	                                break;
	                            }
	                        }
	                        if (allFilled) {
	                            pattern = pattern.split(customSegment.match[0].replace(this.REGEX_REPLACER, customSegment.regex)).join(customSegment.match[1]).replace(this.REGEX_REPLACER, customSegment.regex);
	                            pattern = pattern.split(this.layoutTokens[token].exactString).join(this.layoutTokens[token].value);
	                        } else {
	                            pattern = pattern.split(customSegment.match[0].replace(this.REGEX_REPLACER, customSegment.regex)).join("");
	                        }
	                    } else {
	                        if (this.layoutTokens[token].value) pattern = pattern.split(this.layoutTokens[token].exactString).join(this.layoutTokens[token].value);
	                    }
	                }
	                return pattern;
	            }
	        },
	        updatePathFromLayoutTokens: {
	            value: function updatePathFromLayoutTokens() {
	                this.deployFile.targetPath = this.getPathFromLayoutTokens();
	            }
	        },
	        isTokenValueValid: {
	            value: function isTokenValueValid(tokenKey, value) {
	                return !value || !this.layoutTokens[tokenKey].regex || new RegExp("^" + this.layoutTokens[tokenKey].regex + "$").test(value);
	            }
	        },
	        getTokenRegexError: {
	            value: function getTokenRegexError(tokenKey) {
	                var showErrors = this.layoutTokensForm["token-" + tokenKey].showErrors;
	                var errObj = this.layoutTokensForm["token-" + tokenKey].$error;
	                if (showErrors && errObj.tokenRegexValidator && !errObj.required) {
	                    return "Value do not match regex: " + this.layoutTokens[tokenKey].regex;
	                }
	            }
	        }
	    });
	
	    return jfSingleDeployController;
	})();
	
	function jfSingleDeploy() {
	    return {
	        restrict: "EA",
	        scope: {
	            node: "=",
	            deploy: "&",
	            comm: "=",
	            deployFile: "=",
	            onSuccess: "&",
	            fileSizeLimit: "="
	        },
	        controller: jfSingleDeployController,
	        controllerAs: "jfSingleDeploy",
	        bindToController: true,
	        templateUrl: "directives/jf_deploy/jf_single_deploy.html"
	    };
	}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	exports.jfPrint = jfPrint;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfPrint() {
	    return {
	        restrict: "E",
	        scope: {
	            content: "@"
	        },
	        controller: jfPrintController,
	        controllerAs: "jfPrint",
	        bindToController: true,
	        templateUrl: "directives/jf_print/jf_print.html"
	    };
	}
	
	var jfPrintController = (function () {
	    function jfPrintController($element, $window, $scope) {
	        _classCallCheck(this, jfPrintController);
	
	        this.$element = $element;
	        this.$window = $window;
	        this.$scope = $scope;
	
	        this._registerEvents();
	    }
	
	    _createClass(jfPrintController, {
	        _registerEvents: {
	            value: function _registerEvents() {
	                var _this = this;
	
	                this.$element.on("click", function () {
	                    return _this.print();
	                });
	                this.$scope.$on("$destroy", function () {
	                    return _this.$element.off("click");
	                });
	            }
	        },
	        print: {
	            value: function print() {
	                var printWindow = this.$window.open("", "_blank", "height=380,width=750");
	                printWindow.document.write("<html><head><title>Artifactory</title></head><body >");
	                printWindow.document.write("<pre>" + this._escapeHTML(this.content) + "</pre>");
	                printWindow.document.write("</body></html>");
	                printWindow.print();
	                printWindow.close();
	                return true;
	            }
	        },
	        _escapeHTML: {
	            value: function _escapeHTML(content) {
	                var escape = document.createElement("textarea");
	                escape.innerHTML = content;
	                return escape.innerHTML;
	            }
	        }
	    });
	
	    return jfPrintController;
	})();

/***/ }),
/* 109 */
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
	
	exports.jfAutoFocus = jfAutoFocus;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfAutoFocus($timeout) {
	    return {
	        restrict: "A",
	        link: function link(scope, element) {
	            $timeout(function () {
	                element[0].focus();
	            });
	        }
	    };
	}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	exports.jfBodyClass = jfBodyClass;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfBodyClass() {
	    return {
	        restrict: "A",
	        controller: jfBodyClassController,
	        controllerAs: "jfBodyClass",
	        bindToController: true
	    };
	}
	
	var jfBodyClassController = (function () {
	    function jfBodyClassController($element, $state, $scope, ArtifactoryFeatures) {
	        _classCallCheck(this, jfBodyClassController);
	
	        this.$element = $element;
	        this.$state = $state;
	        this.$scope = $scope;
	        this.features = ArtifactoryFeatures;
	
	        this._registerEvents();
	    }
	
	    _createClass(jfBodyClassController, {
	        $onInit: {
	            value: function $onInit() {
	                var _this = this;
	
	                this.features.whenReady.then(function () {
	                    if (_this.features.isAol()) {
	                        _this.loadWalkMeScript();
	                    }
	                });
	            }
	        },
	        _registerEvents: {
	            value: function _registerEvents() {
	                var _this = this;
	
	                this.$scope.$on("$stateChangeSuccess", function () {
	                    _this._setBodyClass();
	                });
	            }
	        },
	        _setBodyClass: {
	            value: function _setBodyClass() {
	                this.$element.attr("class", this._formatCssClass(this.$state.$current.name) + (this.isLoadCompleted() ? " load-complete" : ""));
	            }
	        },
	        _formatCssClass: {
	            value: function _formatCssClass(stateName) {
	                return stateName.replace(/\./g, "-");
	            }
	        },
	        isLoadCompleted: {
	            value: function isLoadCompleted() {
	
	                return window.angular && angular.element(document.body).injector() && angular.element(document.body).injector().get("$http").pendingRequests.length == 0;
	            }
	        },
	        loadWalkMeScript: {
	            value: function loadWalkMeScript() {
	                var scriptTagString = "<script type=\"text/javascript\">(function() {var walkme = document.createElement('script'); walkme.type = 'text/javascript'; walkme.async = true; walkme.src = 'https://cdn.walkme.com/users/0a2384c11b1c4515a35a67fe08b1b2c9/walkme_0a2384c11b1c4515a35a67fe08b1b2c9_https.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(walkme, s); window._walkmeConfig = {smartLoad:true}; })();</script>";
	                var scriptTag = $(scriptTagString);
	                $(document.head).append(scriptTag);
	            }
	        }
	    });
	
	    return jfBodyClassController;
	})();

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfInputTextV2 = jfInputTextV2;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var jfInputTextV2Controller = (function () {
	    function jfInputTextV2Controller($element, $scope, $compile, $timeout) {
	        _classCallCheck(this, jfInputTextV2Controller);
	
	        this.$element = $element;
	        this.$scope = $scope;
	        this.$compile = $compile;
	        this.$timeout = $timeout;
	    }
	
	    _createClass(jfInputTextV2Controller, {
	        $onInit: {
	            value: function $onInit() {
	                this._initInput();
	            }
	        },
	        _initInput: {
	            value: function _initInput() {
	                if (this.ismandatory) {
	                    $(this.$element.find("input")[0]).attr("required", "");
	                    this.$compile(this.$element.find("input"))(this.$scope);
	                }
	                if (this.autofocus) {
	                    this.$timeout($(this.$element.find("input")[0]).focus());
	                }
	            }
	        },
	        isInputEmpty: {
	            value: function isInputEmpty() {
	                return this.model !== "" && this.model !== undefined && this.model !== null;
	            }
	        }
	    });
	
	    return jfInputTextV2Controller;
	})();
	
	function jfInputTextV2() {
	    return {
	        scope: {
	            type: "@",
	            name: "@",
	            text: "@",
	            autocomplete: "@",
	            autofocus: "=",
	            ismandatory: "=",
	            model: "=",
	            form: "="
	
	        },
	        controller: jfInputTextV2Controller,
	        controllerAs: "jfInputTextV2",
	        templateUrl: "directives/jf_input_text_v2/jf_input_text_v2.html",
	        terminal: true,
	        priority: 1000,
	        bindToController: true
	
	    };
	}

/***/ }),
/* 112 */
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
	
	exports.jfCronFormatter = jfCronFormatter;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfCronFormatter(CronTimeDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfCronFormatterLink(scope, element, attrs, ngModel) {
	
	            var cronTimeDao = CronTimeDao.getInstance();
	            ngModel.$formatters.push(formatCron);
	            ngModel.$parsers.push(function (input) {
	                return ngModel.$modelValue;
	            });
	
	            // Format the next scheduled time in the server
	            function formatCron(input) {
	                if (input) {
	                    return cronTimeDao.get({ cron: input }).$promise.then(function (result) {
	                        if (result.error) {
	                            return $q.reject();
	                        }
	
	                        ngModel.$viewValue = result.nextTime;
	                        ngModel.$render();
	                        return ngModel.$viewValue;
	                    });
	                }
	
	                return input;
	            }
	        }
	    };
	}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfBreadcrumb = jfBreadcrumb;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var jfBreadcrumbController = (function () {
	    function jfBreadcrumbController($scope, $state, $stateParams, JFrogEventBus, $timeout) {
	        _classCallCheck(this, jfBreadcrumbController);
	
	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$state = $state;
	        this.JFrogEventBus = JFrogEventBus;
	        this.$timeout = $timeout;
	        this._registerEvents();
	
	        this.updateBreadcrumb();
	    }
	
	    _createClass(jfBreadcrumbController, {
	        updateBreadcrumb: {
	            value: function updateBreadcrumb() {
	                var _this = this;
	
	                this.$timeout(function () {
	                    switch (_this.$state.current.name) {
	                        case "builds.all":
	                            _this._initCrumbs();
	                            break;
	                        case "builds.history":
	                            _this._initCrumbs();
	                            _this.crumbs.push({
	                                name: _this.$stateParams.buildName,
	                                state: _this.$state.current.name + "(" + JSON.stringify(_this.$stateParams) + ")"
	                            });
	                            break;
	                        case "builds.info":
	                            _this._initCrumbs();
	                            _this.crumbs.push({
	                                name: _this.$stateParams.buildName,
	                                state: "builds.history" + "(" + JSON.stringify({ buildName: _this.$stateParams.buildName }) + ")"
	                            });
	                            _this.crumbs.push({
	                                name: _this.$stateParams.buildNumber,
	                                state: "builds.info" + "(" + JSON.stringify({ buildName: _this.$stateParams.buildName, buildNumber: _this.$stateParams.buildNumber }) + ")" });
	                            break;
	                    }
	                });
	            }
	        },
	        _initCrumbs: {
	            value: function _initCrumbs() {
	                this.crumbs = [{ name: "All Builds", state: "builds.all({})" }];
	            }
	        },
	        _registerEvents: {
	            value: function _registerEvents() {
	                var _this = this;
	
	                this.JFrogEventBus.registerOnScope(this.$scope, EVENTS.BUILDS_BREADCRUMBS, function () {
	                    _this.updateBreadcrumb();
	                });
	            }
	        }
	    });
	
	    return jfBreadcrumbController;
	})();
	
	function jfBreadcrumb() {
	
	    return {
	        restrict: "E",
	        scope: {},
	        controller: jfBreadcrumbController,
	        controllerAs: "jfBreadcrumb",
	        templateUrl: "directives/jf_breadcrumb/jf_breadcrumb.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfSpinner = jfSpinner;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var jfSpinnerController = (function () {
	    function jfSpinnerController($timeout, $scope, $state, JFrogEventBus, $element) {
	        var _this = this;
	
	        _classCallCheck(this, jfSpinnerController);
	
	        this.$scope = $scope;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.$element = $element;
	        this.show = false;
	        this.count = 0;
	        this.JFrogEventBus = JFrogEventBus;
	        this.intervalPromise = null;
	        this.JFrogEventBus.registerOnScope(this.$scope, EVENTS.SHOW_SPINNER, function (domain) {
	            _this.showSpinner(domain);
	        });
	        this.JFrogEventBus.registerOnScope(this.$scope, EVENTS.HIDE_SPINNER, function () {
	            _this.hideSpinner();
	        });
	        this.JFrogEventBus.registerOnScope(this.$scope, EVENTS.CANCEL_SPINNER, function () {
	            _this.count--;
	            if (_this.count < 0) _this.count = 0;
	        });
	    }
	
	    _createClass(jfSpinnerController, {
	        showSpinner: {
	            value: function showSpinner(domain) {
	                if (!domain && this.domain === "body" && this.$state.current.name === "login" || !domain && this.domain === "content" && this.$state.current.name !== "login" || this.domain === domain) {
	
	                    this.count++;
	                    this.show = true;
	                    this.lastShowTime = new Date().getTime();
	                }
	            }
	        },
	        hideSpinner: {
	            value: function hideSpinner() {
	                var _this = this;
	
	                var doHide = function () {
	                    _this.count--;
	                    if (_this.count < 0) _this.count = 0;
	                    if (_this.count === 0) {
	                        _this.show = false;
	                    }
	                };
	
	                if (!this.lastShowTime) doHide();else {
	                    var timeOn = new Date().getTime() - this.lastShowTime;
	                    if (timeOn > 600) doHide();else {
	                        var addTime = 600 - timeOn;
	                        this.$timeout(function () {
	                            doHide();
	                        }, addTime);
	                    }
	                }
	            }
	        },
	        isModalOpen: {
	            value: function isModalOpen() {
	                return $(".modal").length > 0 ? true : false;
	            }
	        },
	        getBrowser: {
	            value: function getBrowser() {
	                var userAgent = navigator.userAgent,
	                    temp = undefined,
	                    browserData = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	                if (/trident/i.test(browserData[1])) {
	                    temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
	                    return "IE " + (temp[1] || "");
	                }
	                if (browserData[1] === "Chrome") {
	                    temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
	                    if (temp != null) {
	                        return temp.slice(1).join(" ").replace("OPR", "Opera");
	                    }
	                }
	                browserData = browserData[2] ? [browserData[1], browserData[2]] : [navigator.appName, navigator.appVersion, "-?"];
	                if ((temp = userAgent.match(/version\/(\d+)/i)) != null) browserData.splice(1, 1, temp[1]);
	                return browserData.join(" ");
	            }
	        }
	    });
	
	    return jfSpinnerController;
	})();
	
	function jfSpinner() {
	
	    return {
	        restrict: "E",
	        scope: {
	            domain: "@"
	        },
	        controller: jfSpinnerController,
	        controllerAs: "jfSpinner",
	        templateUrl: "directives/jf_spinner/jf_spinner.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 115 */
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
	
	exports.jfDisableFeature = jfDisableFeature;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function jfDisableFeature(ArtifactoryFeatures, $timeout) {
	  return {
	    restrict: "A",
	    link: function link($scope, $element, $attrs) {
	      // console.log($scope, $element, $attrs);
	      var feature = $attrs.jfDisableFeature;
	      var currentLicense = ArtifactoryFeatures.getCurrentLicense();
	      if (!feature) {
	        return;
	      }if (ArtifactoryFeatures.isHidden(feature)) {
	        $($element).hide();
	      } else if (ArtifactoryFeatures.isDisabled(feature)) {
	        if (currentLicense === "OSS" || currentLicense === "ConanCE" || currentLicense === "JCR") {
	          (function () {
	            $timeout(function () {
	              $($element).find("*").attr("disabled", true);
	            }, 500, false);
	
	            var license = ArtifactoryFeatures.getAllowedLicense(feature);
	            // Add the correct class:
	            $($element).addClass("license-required-" + license);
	            $($element).addClass("license-required");
	
	            // Add a tooltip with link to the feature page:
	            var featureName = ArtifactoryFeatures.getFeatureName(feature);
	            var featureLink = ArtifactoryFeatures.getFeatureLink(feature);
	
	            var edition = currentLicense === "ConanCE" ? "<br>Aritfactory Community Edition for C/C++" : currentLicense === "JCR" ? "JCR" : "OSS";
	            var tooltipText = featureLink ? "Learn more about the <a href=\"" + featureLink + "\" target=\"_blank\">" + featureName + "</a> feature" : "" + featureName + " feature is not supported in " + edition + " version";
	
	            var generateTooltip = function (element, tooltipText) {
	              element.tooltipster({
	                animation: "fade",
	                contentAsHTML: "true",
	                trigger: "hover",
	                onlyOne: "true",
	                interactive: "true",
	                interactiveTolerance: 150,
	                position: "top",
	                theme: "tooltipster-default top",
	                content: tooltipText
	              });
	            };
	
	            generateTooltip($($element), tooltipText);
	
	            if (feature === "publishedmodule") {
	              setTimeout(function () {
	                $($element).tooltipster("destroy");
	                $element = $(".ui-grid-row").find(".ui-grid-disable-selection:first");
	                generateTooltip($($element), tooltipText);
	              }, 200);
	            }
	          })();
	        } else if (feature === "trustedkeys" && currentLicense != "EDGE" && currentLicense != "ENTPLUS") {
	          return;
	        } else {
	          $($element).hide();
	        }
	      }
	    }
	  };
	}

/***/ }),
/* 116 */
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
	
	exports.jfHideForAol = jfHideForAol;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function jfHideForAol() {
	  return {
	    restrict: "A",
	    controller: function controller(ArtifactoryFeatures, $element) {
	      if (ArtifactoryFeatures.isAol()) {
	        $($element).hide();
	      }
	    }
	  };
	}

/***/ }),
/* 117 */
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
	
	exports.jfFileDrop = jfFileDrop;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfFileDrop() {
	    return {
	        scope: {
	            jfFileUploader: "=",
	            jfFileDisabled: "=ngDisabled",
	            addCallback: "&jfAddingFileCallback",
	            showProgressBar: "="
	        },
	        restrict: "E",
	        templateUrl: "directives/jf_file_drop/jf_file_drop.html",
	        link: function ($scope) {
	            $scope.jfFileUploader.onAfterAddingFile = function (fileItem) {
	                $scope.jfFileUploader.queue = [fileItem];
	                $scope.addCallback({ fileItem: fileItem });
	            };
	        }
	    };
	}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.rtfactStorageViewer = rtfactStorageViewer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var SpecialValues = _interopRequire(__webpack_require__(119));
	
	var rtfactStorageViewerController = (function () {
	    function rtfactStorageViewerController($scope, $interval, BinaryProvidersInfoDao) {
	        _classCallCheck(this, rtfactStorageViewerController);
	
	        this.$scope = $scope;
	        this.$interval = $interval;
	        this.binaryProvidersInfoDao = BinaryProvidersInfoDao.getInstance();
	    }
	
	    _createClass(rtfactStorageViewerController, {
	        $onInit: {
	            value: function $onInit() {
	                if (!this.data) {
	                    this._getData();
	                } else {
	                    this.data = this._transformData(this.data);
	                }
	            }
	        },
	        _getData: {
	            value: function _getData() {
	                var _this = this;
	
	                this.binaryProvidersInfoDao.get().$promise.then(function (data) {
	                    _this.data = _this._transformData(data);
	
	                    //debug aid
	                    if (localStorage._debugStorageViewer === "true") _this._installDebugHooks();
	                });
	            }
	        },
	        _installDebugHooks: {
	            value: function _installDebugHooks() {
	                var _this = this;
	
	                window.setData = (function (totals) {
	                    _this._setTestData(totals);
	                    _this.$scope.$apply();
	                }).bind(this);
	                window.randomData = function () {
	                    var doApply = arguments[0] === undefined ? true : arguments[0];
	
	                    var totals = [];
	                    var n = Math.round(Math.random() * 15) + 1;
	                    for (var i = 0; i < n; i++) {
	                        var val = undefined;
	                        if (Math.random() < 0.4) val = "infinite";else if (Math.random() < 0.2) val = "unsupported";else val = Math.round(Math.random() * 9999999999999);
	                        if (Math.random() < 0.2) val = val + "*";
	                        totals.push(val);
	                    }
	                    _this._setTestData(totals);
	                    if (doApply) _this.$scope.$apply();
	                };
	                window.runRandomTest = function () {
	                    _this.$interval(function () {
	                        randomData(false);
	                    }, 100);
	                };
	            }
	        },
	        _setTestData: {
	
	            //debug aid
	
	            value: function _setTestData(totalSizes) {
	
	                //        let template = this.template = this.template ? this.template : this.data.subElements[0].subElements[0];
	                var template = {
	                    data: {
	                        baseDataDir: "/home/danny/workspace-4.2/artifactory/devenv/.artifactory/data",
	                        period: "1",
	                        usageSpace: "211439489024",
	                        freeSpace: "23654612992",
	                        totalSpace: "235094102016",
	                        fileStoreDir: "shard-fs-1",
	                        type: "state-aware",
	                        binariesDir: "/home/danny/workspace-4.2/artifactory/devenv/.artifactory/data/shard-fs-1",
	                        tempDir: "_pre",
	                        usageSpaceInPercent: "89",
	                        id: "shard-fs-3",
	                        freeSpaceInPercent: "11",
	                        essential: "true"
	                    },
	                    caches: []
	                };
	
	                var subs = [];
	
	                for (var i in totalSizes) {
	                    var ts = totalSizes[i];
	                    var unsupported = false;
	                    if (_.isString(ts) && ts.endsWith("*")) {
	                        ts = ts.substr(0, ts.length - 1);
	                        unsupported = true;
	                    }
	                    var newStorage = angular.copy(template);
	                    newStorage.data.id = "test-fs-" + i;
	                    newStorage.data.totalSpace = ts + "";
	
	                    if (unsupported) newStorage.data.usageSpace = SpecialValues.UNSUPPORTED_VALUE;else newStorage.data.usageSpace = _.isNumber(ts) ? Math.round(Math.random() * ts) + "" : Math.round(100000000000 * Math.random()) + "";
	
	                    subs.push(newStorage);
	                }
	
	                if (window.storageRef) {
	                    window.storageRef.data.type = "sharding";
	                    window.storageRef.data.id = "mock-shard";
	                    window.storageRef.subElements = subs;
	                    //            window.storageRef.data.quotaErrorLimit = 100 * Math.random();
	                } else {
	                    window.storageRef = this.data;
	                    this.data.data.type = "sharding";
	                    this.data.data.id = "mock-shard";
	                    var cacheMock = angular.copy(template);
	                    cacheMock.data.id = "cache-mock";
	                    this.data.caches = [cacheMock];
	                    this.data.subElements = subs;
	                }
	
	                /*
	                        if (this.debugInterval) {
	                            this.$interval.cancel(this.debugInterval);
	                            this.debugInterval = null;
	                        }
	                
	                        this.debugInterval = this.$interval(()=>{
	                            subs.forEach((sub)=>{
	                                if (sub.data.usageSpace !== SpecialValues.UNSUPPORTED_VALUE) {
	                                    sub.data.usageSpace = Math.round(parseFloat(sub.data.usageSpace) + (10000000000*Math.random()-5000000000)) + '';
	                                    if (!SpecialValues.isSpecialValue(sub.data.totalSpace) &&  parseFloat(sub.data.usageSpace) > parseFloat(sub.data.totalSpace)) sub.data.usageSpace = sub.data.totalSpace;
	                                    if (parseFloat(sub.data.usageSpace) < 0) sub.data.usageSpace = '0';
	                                    if (SpecialValues.isSpecialValue(sub.data.totalSpace)) delete sub.displayWidth;
	                                }
	                            })
	                        },100)
	                */
	            }
	        },
	        _transformData: {
	            value: function _transformData(root) {
	                var transformed = {};
	
	                var isEmpty = function (element) {
	                    if (element.data) return false;
	                    if (element.subBinaryTreeElements && element.subBinaryTreeElements.length) return false;
	                    if (element.nextBinaryTreeElement && !isEmpty(element.nextBinaryTreeElement)) return false;
	
	                    return true;
	                };
	
	                var caches = [];
	                var current = root;
	                while (current) {
	                    var currentObj = { data: current.data };
	                    if (current.subBinaryTreeElements && current.subBinaryTreeElements.length) {
	                        currentObj.subElements = current.subBinaryTreeElements;
	                        for (var i = 0; i < currentObj.subElements.length; i++) {
	                            currentObj.subElements[i] = this._transformData(currentObj.subElements[i]);
	                        }
	                    }
	                    if (currentObj.data && current.nextBinaryTreeElement && !isEmpty(current.nextBinaryTreeElement)) {
	                        caches.push(currentObj);
	                        current = current.nextBinaryTreeElement;
	                    } else if (!currentObj.data && current.nextBinaryTreeElement && !isEmpty(current.nextBinaryTreeElement)) {
	                        current = current.nextBinaryTreeElement;
	                    } else {
	                        transformed = currentObj;
	                        transformed.caches = caches;
	                        current = null;
	                    }
	                }
	                return transformed;
	            }
	        }
	    });
	
	    return rtfactStorageViewerController;
	})();
	
	function rtfactStorageViewer() {
	    return {
	        restrict: "E",
	        scope: {
	            data: "=?"
	        },
	        controller: rtfactStorageViewerController,
	        controllerAs: "StorageViewer",
	        templateUrl: "directives/rtfact_storage_viewer/rtfact_storage_viewer.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 119 */
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
	
	module.exports = {
	    INFINITY_VALUE: "infinite",
	    UNSUPPORTED_VALUE: "unsupported",
	    isSpecialValue: function isSpecialValue(val) {
	        return val === this.INFINITY_VALUE || val === this.UNSUPPORTED_VALUE;
	    }
	};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.rtfactStorageElement = rtfactStorageElement;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var SpecialValues = _interopRequire(__webpack_require__(119));
	
	var STORAGE_TYPES_DICTIONARY = _interopRequire(__webpack_require__(121));
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var rtfactStorageElementController = (function () {
	    function rtfactStorageElementController($element, $timeout, $filter) {
	        _classCallCheck(this, rtfactStorageElementController);
	
	        this.SpecialValues = SpecialValues;
	        this.$element = $element;
	        this.fileSizeFilter = $filter("filesize");
	        this.selectedSub = null;
	        this.$timeout = $timeout;
	        this.TOOLTIP = TOOLTIP.admin.advanced.storageSummary;
	        this.MINIMUM_SUB_WIDTH = 10; //percent
	        this.DEFAULT_UNKNOWN_WIDTH = 12; //percent
	        this.STORAGE_TYPES_DICTIONARY = STORAGE_TYPES_DICTIONARY;
	    }
	
	    _createClass(rtfactStorageElementController, {
	        $onInit: {
	            value: function $onInit() {
	                if (this.above) {
	                    this.above.below = this;
	                }
	
	                if (this.element.subElements && this.element.subElements.length) {
	                    this.calcSubWidths();
	                }
	
	                this.thresholds = this.getThresholds();
	            }
	        },
	        getSubWidth: {
	            value: function getSubWidth(sub) {
	                if (sub.displayWidth) {
	                    return sub.displayWidth + "%";
	                } else {
	                    this.minimumSubWidth = this.MINIMUM_SUB_WIDTH;
	                    this.unknownWidth = this.DEFAULT_UNKNOWN_WIDTH;
	                    this.calcSubWidths();
	                    return sub.displayWidth + "%";
	                }
	            }
	        },
	        calcSubWidths: {
	            value: function calcSubWidths() {
	                var _this = this;
	
	                var totalSubsSpace = 0;
	                this.element.subElements.forEach(function (sub) {
	                    if (!SpecialValues.isSpecialValue(sub.data.usageSpace)) {
	                        totalSubsSpace += parseFloat(!SpecialValues.isSpecialValue(sub.data.totalSpace) ? sub.data.totalSpace : sub.data.usageSpace);
	                    }
	                });
	
	                var totalPercents = 0;
	                var totalPercentsNatural = 0;
	                var belowMinimum = 0;
	                var unknowns = 0;
	                this.element.subElements.forEach(function (sub) {
	                    var width = undefined;
	                    var natural = true;
	                    if (SpecialValues.isSpecialValue(sub.data.usageSpace)) {
	                        width = _this.unknownWidth;
	                        unknowns++;
	                        natural = false;
	                        sub.unknown = true;
	                    } else {
	                        width = parseFloat(!SpecialValues.isSpecialValue(sub.data.totalSpace) ? sub.data.totalSpace : sub.data.usageSpace) / totalSubsSpace * 100;
	                        if (width < _this.minimumSubWidth) {
	                            width = _this.minimumSubWidth;
	                            belowMinimum++;
	                            natural = false;
	                        }
	                    }
	
	                    if (natural) totalPercentsNatural += width;
	
	                    sub.displayWidth = width;
	                    totalPercents += width;
	                });
	
	                //normalize
	                while ((totalPercents > 100.0001 || totalPercents < 99) && totalPercentsNatural > 0) {
	                    (function () {
	                        //            console.log('!!');
	                        var minimumWidth = _this.minimumSubWidth * belowMinimum + _this.unknownWidth * unknowns;
	                        var remainingWidth = 100 - minimumWidth;
	                        var newTotal = 0;
	                        var newTotalNatural = 0;
	                        _this.element.subElements.forEach(function (sub) {
	                            if (sub.displayWidth === _this.minimumSubWidth || sub.unknown) {
	                                newTotal += sub.displayWidth;
	                            } else {
	                                var normalWidth = sub.displayWidth / totalPercentsNatural * remainingWidth;
	                                if (normalWidth < _this.minimumSubWidth) {
	                                    normalWidth = _this.minimumSubWidth;
	                                    belowMinimum++;
	                                } else newTotalNatural += normalWidth;
	                                sub.displayWidth = normalWidth;
	                                newTotal += normalWidth;
	                            }
	                        });
	                        totalPercents = newTotal;
	                        totalPercentsNatural = newTotalNatural;
	                    })();
	                }
	
	                if (!totalPercentsNatural && totalPercents > 100) {
	                    this.minimumSubWidth *= 100 / totalPercents;
	                    this.calcSubWidths();
	                }
	
	                if (totalPercents < 100 && totalPercentsNatural === 0 && unknowns === this.element.subElements.length) {
	                    this.unknownWidth = 100 / unknowns;
	                    this.calcSubWidths();
	                }
	            }
	        },
	        onClick: {
	            value: function onClick(e) {
	                e.stopImmediatePropagation();
	                e.preventDefault();
	
	                if (this.level === "sub") {
	                    this.parent.onChildClicked(this);
	                }
	            }
	        },
	        onChildClicked: {
	            value: function onChildClicked(child) {
	                if (this.below) this.below.onChildClicked(null);
	                this.selectedSub = this.selectedSub === child ? null : child;
	
	                //for debug
	                if (child && localStorage._debugStorageViewer === "true" && window.storageRef) window.storageRef = child.element;
	            }
	        },
	        isTextOverflowing: {
	            value: function isTextOverflowing() {
	                if (this.level !== "sub") {
	                    return false;
	                }var textContent = $(this.$element).find(".text-content");
	                return textContent[0].scrollWidth > textContent.innerWidth();
	            }
	        },
	        getUsageString: {
	            value: function getUsageString() {
	                var includePercentage = arguments[0] === undefined ? false : arguments[0];
	
	                var usageSpace = this.getUsageSpace();
	                var totalSpace = this.getTotalSpace();
	
	                if (usageSpace === SpecialValues.UNSUPPORTED_VALUE) {
	                    return null;
	                } else {
	                    var usageString = (usageSpace !== "0" ? this.fileSizeFilter(usageSpace) + " / " : includePercentage ? "0 / " : "Empty - ") + (!SpecialValues.isSpecialValue(totalSpace) ? this.fileSizeFilter(totalSpace) : totalSpace === SpecialValues.INFINITY_VALUE ? "∞" : "?");
	
	                    if (includePercentage) {
	                        usageString += !SpecialValues.isSpecialValue(totalSpace) ? " (" + (100 * usageSpace / totalSpace).toFixed(1) + "%)" : "";
	                    }
	                    return usageString;
	                }
	            }
	        },
	        getThresholds: {
	            value: function getThresholds() {
	                var thresholds = [];
	
	                if (this.element.caches && this.element.caches[0] && this.element.caches[0].data.quotaErrorLimit) {
	                    this.element.data.quotaErrorLimit = this.element.caches[0].data.quotaErrorLimit;
	                    delete this.element.caches[0].data.quotaErrorLimit;
	                }
	                if (this.element.caches && this.element.caches[0] && this.element.caches[0].data.quotaWarningLimit) {
	                    this.element.data.quotaWarningLimit = this.element.caches[0].data.quotaWarningLimit;
	                    delete this.element.caches[0].data.quotaWarningLimit;
	                }
	
	                if (this.element.data && this.element.data.quotaErrorLimit) {
	                    thresholds.push({
	                        value: this.element.data.quotaErrorLimit,
	                        type: "error"
	                    });
	                }
	                if (this.element.data && this.element.data.quotaWarningLimit) {
	                    thresholds.push({
	                        value: this.element.data.quotaWarningLimit,
	                        type: "warning"
	                    });
	                }
	
	                return thresholds;
	            }
	        },
	        getUsageSpace: {
	            value: function getUsageSpace() {
	                return this.element.data.type === "cache-fs" ? this.element.data.usageCacheSpace : this.element.data.usageSpace;
	            }
	        },
	        getTotalSpace: {
	            value: function getTotalSpace() {
	                return this.element.data.type === "cache-fs" ? this.element.data.maxCacheSize : this.element.data.totalSpace;
	            }
	        },
	        wordify: {
	            value: function wordify(str) {
	                return _.words(_.capitalize(str)).join(" ");
	            }
	        },
	        prettyTimeDiff: {
	            value: function prettyTimeDiff(ms) {
	
	                if (ms < 1000) {
	                    return ms + " milliseconds";
	                }var SEC = 1000;
	                var MIN = 60 * SEC;
	                var HOUR = 60 * MIN;
	                var DAY = 24 * HOUR;
	                var YEAR = 365 * DAY;
	
	                var parts = {};
	
	                parts.years = Math.floor(ms / YEAR);
	                parts.days = Math.floor((ms - parts.years * YEAR) / DAY);
	                parts.hours = Math.floor((ms - (parts.years * YEAR + parts.days * DAY)) / HOUR);
	                parts.minutes = Math.floor((ms - (parts.years * YEAR + parts.days * DAY + parts.hours * HOUR)) / MIN);
	                parts.seconds = Math.floor((ms - (parts.years * YEAR + parts.days * DAY + parts.hours * HOUR + parts.minutes * MIN)) / SEC);
	
	                var formattedParts = [];
	
	                var addPart = function (part) {
	                    if (parts[part]) {
	                        var formatted = parts[part] + (" " + part.substr(0, part.length - 1)) + (parts[part] !== 1 ? "s" : "");
	                        formattedParts.push(formatted);
	                    }
	                };
	
	                for (var part in parts) {
	                    addPart(part);
	                }
	
	                if (formattedParts.length >= 2) formattedParts[formattedParts.length - 1] = "and " + formattedParts[formattedParts.length - 1];
	
	                return formattedParts.join(", ");
	            }
	        }
	    });
	
	    return rtfactStorageElementController;
	})();
	
	function rtfactStorageElement(recursiveDirective) {
	    return {
	        restrict: "E",
	        scope: {
	            level: "@", //'top' / 'sub'
	            element: "=",
	            parent: "=",
	            above: "="
	        },
	        controller: rtfactStorageElementController,
	        controllerAs: "StorageElement",
	        templateUrl: "directives/rtfact_storage_viewer/rtfact_storage_element.html",
	        bindToController: true,
	        compile: function (element) {
	            return recursiveDirective.compile(element);
	        }
	    };
	}

/***/ }),
/* 121 */
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
	
	module.exports = {
	  blob: "Full DB",
	  sharding: "Sharding",
	  s3: "S3",
	  "google-storage": "GCS",
	  eventual: "Eventual",
	  "external-file": "External Storage",
	  "external-wrapper": "External Wrapper",
	  "file-system": "File System",
	  "cache-fs": "Cache FS",
	  "state-aware": "State Aware",
	  hdfs: "HDFS",
	  retry: "Retry",
	  tracking: "Tracking",
	  s3Old: "S3"
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.rtfactStorageUsage = rtfactStorageUsage;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var SpecialValues = _interopRequire(__webpack_require__(119));
	
	var rtfactStorageUsageController = (function () {
	    function rtfactStorageUsageController() {
	        _classCallCheck(this, rtfactStorageUsageController);
	
	        this.SpecialValues = SpecialValues;
	    }
	
	    _createClass(rtfactStorageUsageController, {
	        getPercents: {
	            value: function getPercents() {
	                if (!SpecialValues.isSpecialValue(this.total)) {
	                    return this.used / this.total * 100 + "%";
	                } else {
	                    return "calc(100% - 40px)";
	                }
	            }
	        },
	        isStorageFull: {
	            value: function isStorageFull() {
	                return !SpecialValues.isSpecialValue(this.total) && Math.trunc(this.used / this.total * 100) == 100;
	            }
	        }
	    });
	
	    return rtfactStorageUsageController;
	})();
	
	function rtfactStorageUsage() {
	    return {
	        restrict: "E",
	        scope: {
	            total: "=",
	            used: "=",
	            thresholds: "="
	        },
	        controller: rtfactStorageUsageController,
	        controllerAs: "StorageUsage",
	        templateUrl: "directives/rtfact_storage_viewer/rtfact_storage_usage.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 123 */
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
	/**
	 * Validates an input to be valid entiyy name
	 */
	"use strict";
	
	exports.jfValidatorName = jfValidatorName;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorName(NameValidatorDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorName(scope, element, attrs, ngModel) {
	
	            var nameValidatorDao = NameValidatorDao.getInstance();
	            ngModel.$asyncValidators.name = validateName;
	
	            function validateName(modelValue, viewValue) {
	                var value = modelValue || viewValue;
	
	                if (!value) {
	                    return $q.when();
	                }
	
	                return nameValidatorDao.get({ name: value }).$promise.then(function (result) {
	                    if (result.error) {
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 124 */
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
	/**
	 * Validates an input to not be a numeric value
	 */
	"use strict";
	
	exports.jfValidatorNamePrefixNotNumeric = jfValidatorNamePrefixNotNumeric;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorNamePrefixNotNumeric() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function (scope, element, attrs, ngModel) {
	            ngModel.$validators.notPrefixedWithNumeric = function (modelValue, viewValue) {
	                var value = modelValue || viewValue;
	                var firstChar = value.charAt(0);
	                var firstCharIsNotNumber = !(firstChar >= "0" && firstChar <= "9");
	                var notNumericValue = isNaN(value) && value != "";
	                return notNumericValue && firstCharIsNotNumber;
	            };
	        }
	    };
	}

/***/ }),
/* 125 */
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
	/**
	 * Validates an input to be unique id in the config descriptor
	 */
	"use strict";
	
	exports.jfValidatorUniqueId = jfValidatorUniqueId;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorUniqueId(UniqueIdValidatorDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorUniqueId(scope, element, attrs, ngModel) {
	
	            var uniqueIdDao = UniqueIdValidatorDao.getInstance();
	            ngModel.$asyncValidators.uniqueId = validateUniqueId;
	
	            function validateUniqueId(modelValue, viewValue) {
	                // Don't validate disabled fields
	                if ($(element).is(":disabled")) {
	                    return $q.when();
	                }var value = modelValue || viewValue;
	
	                if (!value) {
	                    return $q.when();
	                }return uniqueIdDao.get({ id: value }).$promise.then(function (result) {
	                    if (result.error) {
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 126 */
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
	/**
	 * Validates an input to be valid XMLCName
	 */
	"use strict";
	
	exports.jfValidatorXmlName = jfValidatorXmlName;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorXmlName(XmlNameDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorXmlName(scope, element, attrs, ngModel) {
	
	            var xmlNameDao = XmlNameDao.getInstance();
	            ngModel.$asyncValidators.xmlName = validateXmlName;
	
	            function validateXmlName(modelValue, viewValue) {
	                var value = modelValue || viewValue;
	
	                if (!value) {
	                    return $q.when();
	                }
	
	                return xmlNameDao.get({ xmlName: value }).$promise.then(function (result) {
	                    if (result.error) {
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 127 */
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
	
	exports.jfValidatorCron = jfValidatorCron;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorCron(CronTimeDao, $q, $timeout, JFrogNotifications) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        /**
	         * Register an async validator on cron expressions
	         */
	        link: function jfCronValidatorLink(scope, element, attrs, ngModel) {
	            var cronTimeDao = CronTimeDao.getInstance();
	
	            var cache = {};
	
	            // Get from server and cache result, or get from cache
	            function getFromServer(data) {
	                if (!cache[data.cron]) {
	                    cache[data.cron] = cronTimeDao.get(data).$promise;
	                }
	                return cache[data.cron];
	            }
	
	            // This is a factory function that creates a validation function for the cron expression
	            // It will be executed per validation key, and return an error only if the server returns
	            // an error that matches the key
	            function validateCron(key) {
	                return function (modelValue, viewValue) {
	                    var value = modelValue || viewValue;
	
	                    if (!value) {
	
	                        return $q.when();
	                    }
	                    // No need to check with server if the cron is less than 11 chars
	                    if (value.length < 11) {
	                        if (key === "invalidCron") {
	                            return $q.reject();
	                        } else {
	                            return $q.when();
	                        }
	                    }
	
	                    var data = { cron: value };
	                    if (attrs.jfValidatorCronIsReplication) {
	                        data.isReplication = true;
	                    }
	
	                    // Get from server (or cached result)
	                    return getFromServer(data)["catch"](function (result) {
	                        if (result.data.error === key || result.data.feedbackMsg && result.data.feedbackMsg.error === key) {
	                            // The server responded with error message that matches this validator
	                            if (key === "shortCron") {
	                                // shortCron is not an invalid value, just notify the user about it:
	                                JFrogNotifications.create({
	                                    warn: "The current Cron expression will " + "result in very frequent replications. \nThis will impact system performance." });
	                                return true;
	                            }
	                            return $q.reject();
	                        }
	                        return true;
	                    });
	                };
	            }
	
	            // Message is per key, so need 3 different keys (even though REST is the same)
	            // Possible keys: invalid cron expression, next execution is too close in the future, next execution is in the past
	            ngModel.$asyncValidators.invalidCron = validateCron("invalidCron");
	            ngModel.$asyncValidators.shortCron = validateCron("shortCron");
	            ngModel.$asyncValidators.pastCron = validateCron("pastCron");
	        }
	    };
	}

/***/ }),
/* 128 */
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
	
	exports.jfValidatorLdapUrl = jfValidatorLdapUrl;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorLdapUrl() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorLdapUrl(scope, element, attrs, ngModel) {
	
	            registerTransformers();
	
	            function registerTransformers() {
	                ngModel.$validators.ldapUrl = validateLdapUrl;
	            }
	
	            function validateLdapUrl(modelValue, viewValue) {
	                //var regex = /^(?:(?:ldaps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	                var regex = /^(?:(?:ldaps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:.(?:[a-z\u00a1-\uffff]{0,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	                return regex.test(viewValue);
	            }
	        }
	    };
	}

/***/ }),
/* 129 */
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
	
	exports.jfValidatorPathPattern = jfValidatorPathPattern;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorPathPattern() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorPathPattern(scope, element, attrs, ngModel) {
	
	            registerTransformers();
	
	            function registerTransformers() {
	                ngModel.$validators.pathPattern = validatePathPattern;
	            }
	
	            function validatePathPattern(modelValue, viewValue) {
	                if (!viewValue) {
	                    return false;
	                }var ok = true;
	
	                var tokens = ["(org|orgPath)", "module", "baseRev"];
	
	                for (var i in tokens) {
	                    var token = tokens[i];
	                    var regex = new RegExp("\\[" + token + "\\]");
	                    if (!viewValue.match(regex)) {
	                        ok = false;
	                        break;
	                    }
	                }
	
	                return ok;
	            }
	        }
	    };
	}

/***/ }),
/* 130 */
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
	
	exports.jfValidatorIntValue = jfValidatorIntValue;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorIntValue() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfIntegerValueValidator(scope, element, attrs, ngModel) {
	
	            registerTransformers();
	
	            function registerTransformers() {
	                ngModel.$validators.integerValue = validateInteger;
	            }
	
	            function validateInteger(modelValue, viewValue) {
	                return parseInt(viewValue).toString() === viewValue;
	            }
	        }
	    };
	}

/***/ }),
/* 131 */
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
	
	exports.jfValidatorMaxTextLength = jfValidatorMaxTextLength;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorMaxTextLength() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfLimitTextLengthValidator(scope, element, attrs, ngModel) {
	
	            var limitTo = attrs.maxlength || attrs.jfValidatorMaxTextLength;
	
	            registerTransformers();
	
	            function registerTransformers() {
	                ngModel.$validators.maxlength = validateTextLength;
	            }
	
	            function validateTextLength(modelValue, viewValue) {
	                var ok = !viewValue || viewValue.length <= parseInt(limitTo);
	                return ok;
	            }
	        }
	    };
	}

/***/ }),
/* 132 */
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
	
	exports.jfSpecialChars = jfSpecialChars;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfSpecialChars() {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfSpecialCharsLink(scope, element, attrs, ngModel) {
	
	            var disallowedSymbols = ["/", "\\", "<", ">", "~", "!", "@", "#", "$", "%", "^", "&", "(", ")", "+", "=", "-", "{", "}", "[", "]", ";", ",", "`", ",", " "];
	
	            ngModel.$validators.validCharacters = function (modelValue, viewValue) {
	                var value = modelValue || viewValue;
	                if (!value) {
	                    return true;
	                }
	                value = value.split("");
	                var valid = true;
	
	                for (var i = 0, limit = value.length; i < limit; i++) {
	                    if (disallowedSymbols.indexOf(value[i]) > -1) {
	                        valid = false;
	                    }
	                }
	                return valid;
	            };
	        }
	    };
	}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	exports.jfRepokeyValidator = jfRepokeyValidator;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var fieldsValuesDictionary = _interopRequire(__webpack_require__(134));
	
	function jfRepokeyValidator(RepositoriesDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        scope: {
	            controller: "=jfRepokeyValidator"
	        },
	        link: function jfRepokeyValidatorLink(scope, element, attrs, ngModel) {
	
	            ngModel.$asyncValidators.repoKeyValidator = validateRepoKey;
	
	            function validateRepoKey(modelValue, viewValue) {
	                var repoKey = modelValue || viewValue;
	                var repoType = scope.controller.repoType;
	
	                if (repoType === "distribution" && scope.controller.$stateParams.distRepoType === "ReleaseBundles") repoType = "releaseBundles";
	
	                if (!repoKey) {
	                    return $q.when();
	                }return RepositoriesDao.repoKeyValidator({ repoKey: repoKey, repoType: repoType }).$promise.then(function (result) {
	                    if (result.error) {
	                        scope.controller.repoKeyValidatorMessage = result.error;
	                        return $q.reject();
	                    } else if (scope.controller.repoInfo.isType("docker") && repoKey.toLowerCase() !== repoKey) {
	                        scope.controller.repoKeyValidatorMessage = "Docker repository key must be in lowercase";
	                        return $q.reject();
	                    } else if (scope.controller.repoInfo.type === "localRepoConfig" && repoKey.toLowerCase().endsWith("-cache")) {
	                        scope.controller.repoKeyValidatorMessage = "Cannot create local repository with \"-cache\" ending";
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 134 */
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
	
	module.exports = {
	    localChecksumPolicy: {
	        CLIENT: "Verify against client checksums",
	        SERVER: "Trust server generated checksums"
	    },
	    remoteChecksumPolicy: {
	        GEN_IF_ABSENT: "Generate if absent",
	        FAIL: "Fail",
	        IGNORE_AND_GEN: "Ignore and generate",
	        PASS_THRU: "Ignore and pass-through"
	    },
	    snapshotRepositoryBehavior: {
	        UNIQUE: "Unique",
	        NONUNIQUE: "Non-unique",
	        DEPLOYER: "Deployer"
	    },
	    pomCleanupPolicy: {
	        discard_active_reference: "Discard active references",
	        discard_any_reference: "Discard any reference",
	        nothing: "Nothing"
	    },
	    dockerApiVersion: {
	        V1: "V1",
	        V2: "V2"
	    },
	    vcsGitProvider: {
	        GITHUB: "GitHub",
	        BITBUCKET: "BitBucket",
	        STASH: "Stash / Private BitBucket",
	        OLDSTASH: "Stash / Private BitBucket (prior to 5.1.0)",
	        ARTIFACTORY: "Artifactory",
	        CUSTOM: "Custom"
	    },
	    defaultLayouts: {
	        maven: "maven-2-default",
	        ivy: "ivy-default",
	        gradle: "gradle-default",
	        nuget: "nuget-default",
	        npm: "npm-default",
	        bower: "bower-default",
	        composer: "composer-default",
	        conan: "conan-default",
	        puppet: "puppet-default",
	        vcs: "vcs-default",
	        sbt: "sbt-default"
	    },
	    REPO_TYPE: {
	        LOCAL: "local",
	        REMOTE: "remote",
	        VIRTUAL: "virtual",
	        DISTRIBUTION: "distribution"
	    },
	    repoPackageTypes: [{
	        serverEnumName: "Bower",
	        value: "bower",
	        text: "Bower",
	        icon: "bower",
	        repoType: ["local", "remote", "virtual"],
	        description: "Bower package manager is optimized for front-end development. A Bower repository will allow you to easily manage your Bower packages and proxy remote Bower repositories."
	    }, {
	        serverEnumName: "Chef",
	        value: "chef",
	        text: "Chef",
	        icon: "chef",
	        repoType: ["local", "remote", "virtual"],
	        description: "Chef Description" // TODO
	    }, {
	        serverEnumName: "CocoaPods",
	        value: "cocoapods",
	        text: "CocoaPods",
	        icon: "cocoapods",
	        repoType: ["local", "remote"],
	        description: "CocoaPods is an application level dependency manager for the Objective-C programming language and any other languages that run on the Objective-C runtime, that provides a standard format for managing external libraries."
	    }, {
	        serverEnumName: "Conan",
	        value: "conan",
	        text: "Conan",
	        icon: "conan",
	        repoType: ["local", "remote", "virtual"],
	        description: "Conan is a portable package manager, intended for C and C++ developers, but it is able to manage builds from source, dependencies, and precompiled binaries for any language."
	    }, {
	        serverEnumName: "Conda",
	        value: "conda",
	        text: "Conda",
	        icon: "conda",
	        repoType: ["local", "remote", "virtual"]
	    }, {
	        serverEnumName: "CRAN",
	        value: "cran",
	        text: "CRAN",
	        icon: "cran",
	        repoType: ["local", "remote", "virtual"],
	        description: ""
	    }, {
	        serverEnumName: "Debian",
	        value: "debian",
	        text: "Debian",
	        icon: "debian",
	        repoType: ["local", "remote", "virtual"],
	        description: "A Debian repository will allow you to host, cache and distribute your packages for Debian based operating systems such as Ubuntu."
	    }, {
	        serverEnumName: "Docker",
	        value: "docker",
	        text: "Docker",
	        icon: "docker",
	        repoType: ["local", "remote", "virtual"],
	        description: "Docker allows you to package an application with all of its dependencies into a standardized unit for software development. A Docker repository will allow you to easily and securely manage your Docker images."
	    }, {
	        serverEnumName: "Gems",
	        value: "gems",
	        text: "Gems",
	        icon: "gems",
	        repoType: ["local", "remote", "virtual"],
	        description: "A RubyGems repository allows you to easily download, install, and use ruby software packages in your system. Gems can be used to extend or modify functionality in Ruby applications."
	    }, {
	        serverEnumName: "GitLfs",
	        value: "gitlfs",
	        text: "Git LFS",
	        icon: "git-lfs",
	        repoType: ["local", "remote", "virtual"],
	        description: "Git LFS replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents in an Artifactory repository. This allows you to work with the same Git workflow, but with better access control, faster download and more repository space."
	    }, {
	        serverEnumName: "Go",
	        value: "go",
	        text: "Go",
	        icon: "golang",
	        repoType: ["local", "remote", "virtual"],
	        description: ""
	    }, {
	        serverEnumName: "Gradle",
	        value: "gradle",
	        text: "Gradle",
	        icon: "gradle",
	        repoType: ["local", "remote", "virtual"],
	        description: "Gradle is a build automation tool which lets model your problem domain declaratively using a powerful and expressive domain-specific language (DSL) implemented in Groovy."
	    }, {
	        serverEnumName: "Helm",
	        value: "helm",
	        text: "Helm",
	        icon: "helm",
	        repoType: ["local", "remote", "virtual"],
	        description: ""
	    }, {
	        serverEnumName: "Ivy",
	        value: "ivy",
	        text: "Ivy",
	        icon: "ivy",
	        repoType: ["local", "remote", "virtual"],
	        description: "Apache Ivy is a popular dependency manager focusing on flexibility and simplicity. Ivy offers full integration with ant, and a strong transitive dependency management engine."
	    }, {
	        serverEnumName: "Maven",
	        value: "maven",
	        text: "Maven",
	        icon: "maven",
	        repoType: ["local", "remote", "virtual"],
	        description: "Apache Maven is a build automation tool which provides useful project information from your project’s sources."
	    }, {
	        serverEnumName: "Npm",
	        value: "npm",
	        text: "npm",
	        icon: "npm",
	        repoType: ["local", "remote", "virtual"],
	        description: "npm package manager makes it easy for JavaScript developers to share, reuse code, and update code. Host your own node.js packages in Artifactory and proxy remote npm repositories. Use npm against a single in-house repository under your control for your all npm needs."
	    }, {
	        serverEnumName: "NuGet",
	        value: "nuget",
	        text: "NuGet",
	        icon: "nuget",
	        repoType: ["local", "remote", "virtual"],
	        description: "NuGet is the package manager for Microsoft development platforms including .NET. Host and proxy NuGet packages in Artifactory, and pull libraries from Artifactory into your various Visual Studio .NET applications."
	    }, {
	        serverEnumName: "Opkg",
	        value: "opkg",
	        text: "Opkg",
	        icon: "opkg",
	        repoType: ["local", "remote"],
	        description: "Opkg is a lightweight package management system based upon ipkg. It is intended for use on embedded Linux devices, and is commonly used for IoT."
	    }, {
	        serverEnumName: "Composer",
	        value: "composer",
	        text: "PHP Composer",
	        icon: "composer",
	        repoType: ["local", "remote"],
	        description: "Composer is a dependency manager for PHP."
	    }, {
	        serverEnumName: "P2",
	        value: "p2",
	        text: "P2",
	        icon: "p2",
	        repoType: ["remote", "virtual"],
	        description: "P2 provides a provisioning platform for Eclipse and Equinox-based applications."
	    }, {
	        serverEnumName: "Pypi",
	        value: "pypi",
	        text: "PyPI",
	        icon: "pypi",
	        repoType: ["local", "remote", "virtual"],
	        description: "The Python Package Index for the Python programming language. Transparently resolve PyPI distribution locations, whether local or remote. Exercise fine-grained access control to all PyPI resources with comprehensive security measures and full support for pip."
	    }, {
	        serverEnumName: "Puppet",
	        value: "puppet",
	        text: "Puppet",
	        icon: "puppet",
	        repoType: ["local", "remote", "virtual"],
	        description: "A repository of puppet modules."
	    }, {
	        serverEnumName: "SBT",
	        value: "sbt",
	        text: "SBT",
	        icon: "sbt",
	        repoType: ["local", "remote", "virtual"],
	        description: "Sbt is a build tool for the Scala community and Java projects. Sbt uses advanced concepts to provide flexible and powerful build definitions."
	    }, {
	        serverEnumName: "Vagrant",
	        value: "vagrant",
	        text: "Vagrant",
	        icon: "vagrant",
	        repoType: ["local"],
	        description: "Vagrant provides easy-to-configure, reproducible, and portable work environments built on top of industry-standard technology and controlled by a single consistent workflow."
	    }, {
	        serverEnumName: "VCS",
	        value: "vcs",
	        text: "VCS",
	        icon: "vcs",
	        repoType: ["remote"],
	        description: "A VCS remote repository gives you stable and reliable access to your source code with security and access control, along with smart search capabilities for any of the supported version control systems."
	    }, {
	        serverEnumName: "YUM",
	        value: "yum",
	        text: "RPM",
	        icon: "rpm",
	        repoType: ["local", "remote", "virtual"],
	        description: "An RPM repository will allow you to host, cache and distribute your RPM packages."
	    }, {
	        serverEnumName: "Generic",
	        value: "generic",
	        text: "Generic",
	        icon: "generic",
	        repoType: ["local", "remote", "virtual"],
	        description: "A generic repository can be used to host and proxy any type of file."
	    }, {
	        serverEnumName: "BuildInfo",
	        value: "buildinfo",
	        text: "Build Info",
	        icon: "builds-new",
	        repoType: []
	    }, {
	        serverEnumName: "SupportBundle",
	        value: "supportbundle",
	        text: "Support Bundle",
	        icon: "support",
	        repoType: []
	    }],
	    sslCertificate: {
	        subject: "Subject",
	        issuer: "Issuer",
	        certificate: "Certificate",
	        common_name: "Common Name",
	        organization: "Organization",
	        unit: "Unit",
	        issued_on: "Issued On",
	        valid_until: "Valid Until",
	        fingerprint: "Fingerprint",
	        dateFields: ["issued_on", "valid_until"] }
	};

/***/ }),
/* 135 */
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
	
	exports.jfValidatorDateFormat = jfValidatorDateFormat;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorDateFormat(DateFormatDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorDateFormat(scope, element, attrs, ngModel) {
	
	            var dateFormatDao = DateFormatDao.getInstance();
	            ngModel.$asyncValidators.dateFormatExpression = validateDateFormat;
	
	            function validateDateFormat(modelValue, viewValue) {
	                var value = modelValue || viewValue;
	
	                if (!value) {
	                    return $q.when();
	                }
	
	                return dateFormatDao.get({ dateformat: value }).$promise.then(function (result) {
	                    if (result.error) {
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 136 */
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
	/**
	 * Validates an input to be valid entiyy name
	 */
	"use strict";
	
	exports.jfValidatorReverseProxyPort = jfValidatorReverseProxyPort;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function jfValidatorReverseProxyPort(ReverseProxiesDao, $q, $timeout) {
	    return {
	        restrict: "A",
	        require: "ngModel",
	        link: function jfValidatorReverseProxyPort(scope, element, attrs, ngModel) {
	
	            var repoKey = attrs.jfValidatorReverseProxyPort;
	
	            var portValidatorDao = ReverseProxiesDao;
	            ngModel.$asyncValidators.port = validatePort;
	
	            function validatePort(modelValue, viewValue) {
	                var value = modelValue || viewValue;
	
	                if (!value) {
	                    return $q.when();
	                }
	
	                return ReverseProxiesDao.checkPort(repoKey ? { repoKey: repoKey } : {}, { port: value }).$promise.then(function (result) {
	                    if (!result.portAvailable) {
	                        return $q.reject();
	                    }
	                    return true;
	                });
	            }
	        }
	    };
	}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfManageProLicense = jfManageProLicense;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var jfManageProLicenseController = (function () {
	    function jfManageProLicenseController(RegisterProDao, JFrogEventBus, User, $state, ArtifactoryModelSaver, ArtifactoryState, JFrogNotifications) {
	        var _this = this;
	
	        _classCallCheck(this, jfManageProLicenseController);
	
	        this.ArtifactoryState = ArtifactoryState;
	        this.registerProDao = RegisterProDao;
	        this.$state = $state;
	        this.JFrogEventBus = JFrogEventBus;
	        this.User = User;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.TOOLTIP = TOOLTIP.admin.configuration.registerPro;
	        this.ArtifactoryModelSaver = ArtifactoryModelSaver.createInstance(this, ["registerDetails"]);
	        this.getData();
	        this.dndHeadingHtml = "Enter your license key below or" + "<span class=\"drop-file-label\"> drop a file \n                                <i class=\"icon icon-upload\"></i>\n                               </span>.";
	        this.dndStyle = { width: "100%", height: "230px" };
	        this.dndOnError = function (errorMessage) {
	            _this.artifactoryNotifications.create({
	                error: errorMessage
	            });
	        };
	    }
	
	    _createClass(jfManageProLicenseController, {
	        removeComments: {
	            value: function removeComments(text) {
	                return text.replace(/#+((?:.)+?)*/g, "");
	            }
	        },
	        save: {
	            value: function save(registerDetails) {
	                var _this = this;
	
	                // Remove unnecessary comments
	                registerDetails.key = this.removeComments(registerDetails.key);
	                // Save
	                this.registerProDao.update(registerDetails).$promise.then(function (data) {
	                    // Refresh the home page footer with the new license details
	                    _this.JFrogEventBus.dispatch(EVENTS.FOOTER_REFRESH);
	
	                    // Initialize the 'has licanse already' state
	                    var initStatus = _this.ArtifactoryState.getState("initStatus");
	                    if (initStatus) initStatus.hasLicenseAlready = true;
	
	                    _this.User.loadUser(true).then(function () {
	                        return _this.getData();
	                    });
	
	                    // Upon successful installation display the new license
	                    // if (data.status === 200) this.registerDetails.key = data.key;
	                });
	            }
	        },
	        getData: {
	            value: function getData() {
	                var _this = this;
	
	                if (this.User.currentUser.isProWithoutLicense()) {
	                    this.registerDetails = {};
	                    this.ArtifactoryModelSaver.save();
	                } else {
	                    this.registerProDao.get(true).$promise.then(function (data) {
	                        _this.registerDetails = data;
	                        _this.ArtifactoryModelSaver.save();
	                    });
	                }
	            }
	        },
	        reset: {
	            value: function reset() {
	                var _this = this;
	
	                this.ArtifactoryModelSaver.ask(true).then(function () {
	                    _this.getData();
	                });
	            }
	        }
	    });
	
	    return jfManageProLicenseController;
	})();
	
	function jfManageProLicense() {
	
	    return {
	        restrict: "E",
	        scope: { items: "=" },
	        controller: jfManageProLicenseController,
	        controllerAs: "jfManageProLicense",
	        templateUrl: "directives/jf_manage_artifactory_licenses/jf_manage_pro_license.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfManageHaLicenses = jfManageHaLicenses;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var jfManageHaLicensesController = (function () {
	    function jfManageHaLicensesController($timeout, $state, $rootScope, $scope, $window, JFrogModal, User, HaLicensesDao, JFrogGridFactory, JFrogEventBus, uiGridConstants, JFrogNotifications, SaveArtifactoryHaLicenses, ArtifactoryState) {
	        _classCallCheck(this, jfManageHaLicensesController);
	
	        this.$rootScope = $rootScope;
	        this.$scope = $scope;
	        this.$window = $window;
	        this.gridOption = {};
	        this.uiGridConstants = uiGridConstants;
	        this.$scope = $scope;
	        this.JFrogEventBus = JFrogEventBus;
	        this.artifactoryGridFactory = JFrogGridFactory;
	        this.modal = JFrogModal;
	        this.User = User;
	        this.$state = $state;
	        this.haLicensesDao = HaLicensesDao;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.ArtifactoryState = ArtifactoryState;
	        this.saveArtifactoryHaLicenses = SaveArtifactoryHaLicenses;
	        this.$timeout = $timeout;
	        this._createGrid();
	        this._initLicenses();
	    }
	
	    _createClass(jfManageHaLicensesController, {
	        _initLicenses: {
	            value: function _initLicenses() {
	                var _this = this;
	
	                this.haLicensesDao.getLicenses().$promise.then(function (result) {
	                    _this.licenses = result.data.licenses;
	                    _this.gridOption.setGridData(_this.licenses);
	                });
	            }
	        },
	        launchAddHaLicenseModal: {
	            value: function launchAddHaLicenseModal() {
	                var _this = this;
	
	                this.modalScope = this.$rootScope.$new();
	                this.modalScope.modalTitle = "Add license";
	                this.modalScope.dndStyle = { width: "100%", height: "230px" };
	                this.modalScope.newLicenses = { text: "" }; // Whenever two-way binding a primitive (i.e. string) on a scope
	                // the primitive should be wrapped with some object
	                this.modalScope.helpText = "For adding more than one license, use a semicolon or a space as a separator between the different keys.";
	
	                this.modalScope.dndOnError = function (errorMessage) {
	                    _this.artifactoryNotifications.create({
	                        error: errorMessage
	                    });
	                };
	
	                this.modalScope.saveLicenses = function () {
	                    var rawText = _this.modalScope.newLicenses.text;
	                    _this.saveArtifactoryHaLicenses.saveLicenses({ $suppress_toaster: false }, rawText).then(function (data) {
	                        if (data.status === 200) {
	                            // Initialize the 'has licanse already' state
	                            var initStatus = _this.ArtifactoryState.getState("initStatus");
	                            if (initStatus) {
	                                initStatus.hasLicenseAlready = true;
	                            }
	
	                            _this.JFrogEventBus.dispatch(EVENTS.FOOTER_REFRESH);
	
	                            // If this is the first time a license is provided
	                            // and the user is not admin then redirect to home and refresh (so changes would become valid)
	                            var usr = _this.User.getCurrent();
	
	                            if (!usr || !usr.isAdmin()) {
	                                _this.$state.go("home");
	                                location.reload();
	                            } else {
	                                _this.updateListTable()["finally"](function () {
	                                    return _this.closeModalIfOpen();
	                                });
	                            }
	                        }
	                    });
	                };
	
	                this.modalScope.closeModal = function () {
	                    return _this.modalInstance.close();
	                };
	
	                this.modalInstance = this.modal.launchModal("add_ha_licenses_modal", this.modalScope, "lg");
	            }
	        },
	        launchReplaceHaLicenseModal: {
	            value: function launchReplaceHaLicenseModal() {
	                var _this = this;
	
	                this.modalScope = this.$rootScope.$new();
	                this.modalScope.modalTitle = "Replace licenses";
	                this.modalScope.headingText = "Type the license key(s), or drag a file";
	                this.modalScope.newLicenses = { text: "" }; // Whenever two-way binding a primitive (i.e. string) on a scope
	                // the primitive should be wrapped with some object
	                this.modalScope.helpText = "For adding more than one license, use a semicolon or a space as a separator between the different keys.";
	
	                this.modalScope.saveLicenses = function () {
	                    _this.onSaveReplacedLicenses(_this);
	                };
	
	                this.modalScope.closeModal = function () {
	                    return _this.modalInstance.close();
	                };
	
	                this.modalInstance = this.modal.launchModal("add_ha_licenses_modal", this.modalScope, "lg");
	            }
	        },
	        onSaveReplacedLicenses: {
	            value: function onSaveReplacedLicenses() {
	                //Get selected licenses
	                var selectedRows = this.gridOption.api.selection.getSelectedGridRows(),
	
	                //Create an array of the selected licenses keys
	                oldLicenses = _.map(selectedRows, function (row) {
	                    return row.entity.licenseHash;
	                });
	
	                // Split text into licenses
	                var rawText = this.modalScope.newLicenses.text,
	                    splittedText = this.saveArtifactoryHaLicenses.splitText(rawText);
	
	                // Build two arrays - one for new licenses and another for the old licenses
	                var newLicensesObjArray = this.saveArtifactoryHaLicenses.toLicensesObjArray(splittedText, "licenseHash"),
	                    oldLicensesHashCodesObjArray = this.saveArtifactoryHaLicenses.toLicensesObjArray(oldLicenses, "licenseHash"),
	                    numProvidedLicenses = newLicensesObjArray.length,
	                    numSelectedLicenses = oldLicensesHashCodesObjArray.length;
	
	                // Upon user approval - make the swap
	                if (numProvidedLicenses === numSelectedLicenses) {
	                    this.replaceLicenses(oldLicensesHashCodesObjArray, newLicensesObjArray, this);
	                } else {
	                    this.artifactoryNotifications.create({
	                        error: "Failed to replace licenses. You provided " + numProvidedLicenses + " license keys while selecting " + numSelectedLicenses + " licenses."
	                    });
	                }
	            }
	        },
	        replaceLicenses: {
	            value: function replaceLicenses(oldLicensesHashCodesObjArray, newLicensesObjArray) {
	                var _this = this;
	
	                //Ask for confirmation before replacing
	                this.modal.confirm("Are you sure you want to replace " + oldLicensesHashCodesObjArray.length + " licenses?").then(function () {
	                    var replaceLicensesJson = {
	                        licenses: oldLicensesHashCodesObjArray,
	                        newLicenses: newLicensesObjArray
	                    };
	
	                    _this.haLicensesDao.replace(replaceLicensesJson).$promise.then(function () {
	                        _this.updateListTable(_this)["finally"](function () {
	                            return _this.closeModalIfOpen();
	                        });
	                    });
	                });
	            }
	        },
	        _createGrid: {
	            value: function _createGrid() {
	                this.gridOption = this.artifactoryGridFactory.getGridInstance(this.$scope).setColumns(this.getCloumns()).setRowTemplate("default").setMultiSelect().setButtons(this._getActions()).setBatchActions(this._getBatchActions());
	            }
	        },
	        _getActions: {
	            value: function _getActions() {
	                var _this = this;
	
	                return [{
	                    icon: "icon icon-clear",
	                    tooltip: "Delete",
	                    callback: function (license) {
	                        _this.deleteLicense(license);
	                    },
	                    visibleWhen: function (row) {
	                        return row.nodeUrl && row.nodeUrl === "Not in use" || _this.hasFreeLicenseInPool();
	                    }
	                }];
	            }
	        },
	        _getBatchActions: {
	            value: function _getBatchActions() {
	                var _this = this;
	
	                return [{
	                    icon: "clear",
	                    name: "Delete",
	                    // This tooltip will show only when action is disabled
	                    getDisabledTooltip: function () {
	                        return !_this.hasFreeLicenseInPool() && _this.gridOption && _this.gridOption.api && _this.gridOption.api.selection.getSelectedGridRows().length ? "Attached licenses cannot be deleted from running nodes</br>when there are no available licenses" : "";
	                    },
	                    callback: function () {
	                        _this.deleteSelectedLicenses();
	                    },
	                    disabledWhen: function () {
	                        return !_this.hasFreeLicenseInPool();
	                    }
	                }
	                // No need for replace functionality for now...
	                //,
	                // {
	                //     icon: 'replace',
	                //     name: 'Replace',
	                //     callback: () => {
	                //         this.launchReplaceHaLicenseModal()
	                //     }
	                // },
	                ];
	            }
	        },
	        hasFreeLicenseInPool: {
	            value: function hasFreeLicenseInPool() {
	                var hasFreeLicense = false;
	                if (this.gridOption.data && this.gridOption.data.length) {
	                    this.gridOption.data.forEach(function (license) {
	                        if (license.nodeUrl && license.nodeUrl === "Not in use") {
	                            hasFreeLicense = true;
	                        }
	                    });
	                }
	                return hasFreeLicense;
	            }
	        },
	        deleteLicense: {
	            value: function deleteLicense(license) {
	                var _this = this;
	
	                var hashCode = license.licenseHash;
	                this.modal.confirm("Are you sure you want to delete " + hashCode + "?").then(function () {
	                    var licensesHashCodes = _this.saveArtifactoryHaLicenses.toLicensesObjArray([hashCode], "licenseHash");
	                    var licensesJson = {
	                        licenses: licensesHashCodes
	                    };
	                    _this.haLicensesDao["delete"](licensesJson).$promise.then(function () {
	                        return _this.updateListTable();
	                    });
	                });
	            }
	        },
	        deleteSelectedLicenses: {
	            value: function deleteSelectedLicenses() {
	                var _this = this;
	
	                //Get All selected licenses
	                var selectedRows = this.gridOption.api.selection.getSelectedGridRows();
	                //Create an array of the selected licenses keys
	                var licensesHashCodes = _.map(selectedRows, function (row) {
	                    return {
	                        licenseHash: row.entity.licenseHash
	                    };
	                });
	
	                //Create Json for the bulk request
	                var licensesJson = {
	                    licenses: licensesHashCodes
	                };
	
	                //Ask for confirmation before delete and if confirmed then delete bulk of licenses
	                this.modal.confirm("Are you sure you want to delete " + selectedRows.length + " licenses?").then(function () {
	                    _this.haLicensesDao["delete"](licensesJson).$promise.then(function () {
	                        _this.refreshTable();
	                    });
	                });
	            }
	        },
	        refreshTable: {
	            value: function refreshTable() {
	                var _this = this;
	
	                this.updateListTable()["finally"](function () {
	                    _this.clearSelectAllButton();
	                });
	            }
	        },
	        updateListTable: {
	            value: function updateListTable() {
	                var _this = this;
	
	                return this.haLicensesDao.getLicenses().$promise.then(function (licenses) {
	                    _this.licenses = licenses.data.licenses;
	                    _this.gridOption.setGridData(_this.licenses);
	                });
	            }
	        },
	        closeModalIfOpen: {
	            value: function closeModalIfOpen() {
	                if (this.modalInstance) {
	                    this.modalScope.closeModal();
	                }
	            }
	        },
	        clearSelectAllButton: {
	            value: function clearSelectAllButton() {
	                this.$timeout(function () {
	                    var selectAllButton = $(".ui-grid-header-cell-row .ui-grid-selection-row-header-buttons");
	                    var selectAllButtonIsOn = selectAllButton.is(".ui-grid-all-selected");
	                    if (selectAllButtonIsOn) {
	                        selectAllButton.trigger("click");
	                    }
	                });
	            }
	        },
	        getCloumns: {
	            value: function getCloumns() {
	                return [{
	                    name: "License Hash",
	                    displayName: "License Hash",
	                    field: "licenseHash",
	                    sort: {
	                        direction: this.uiGridConstants.ASC
	                    },
	                    cellTemplate: "<div class=\"ui-grid-cell-contents\">\n                                {{row.entity.licenseHash}}\n                              </div>",
	                    width: "25%"
	                }, {
	                    name: "Licensed To",
	                    displayName: "Licensed To",
	                    field: "licensedTo",
	                    cellTemplate: "<div class=\"ui-grid-cell-contents\" id=\"license-owner\">\n                                <span>{{row.entity.licensedTo}}</span>\n                               </div>",
	                    width: "10%"
	
	                }, {
	                    name: "Valid Through",
	                    displayName: "Valid Through",
	                    field: "validThrough",
	                    cellTemplate: "<div ng-if=\"!row.entity.expired\"\n                                    class=\"ui-grid-cell-contents\">\n                                    {{row.entity.validThrough}}\n                               </div>\n                               <div ng-if=\"row.entity.expired\"\n                                    class=\"ui-grid-cell-contents license-expired\">\n                                    {{row.entity.validThrough}} (License Expired)\n                               </div>",
	                    width: "15%"
	                }, {
	                    name: "License Type",
	                    displayName: "License Type",
	                    field: "type",
	                    cellTemplate: "<div class=\"ui-grid-cell-contents\">\n                                    {{row.entity.type}}\n                               </div>",
	                    width: "10%"
	                }, {
	                    name: "Node ID",
	                    displayName: "Node ID",
	                    field: "nodeId",
	                    cellTemplate: "<div class=\"ui-grid-cell-contents\">\n                                {{row.entity.nodeId}}\n                              </div>",
	                    width: "10%"
	                }, {
	                    name: "Node URL",
	                    displayName: "Node URL",
	                    field: "nodeUrl",
	                    cellTemplate: "<div class=\"ui-grid-cell-contents\">\n                                 <a href=\"{{row.entity.nodeUrl}}\"\n                                     target=\"_blank\"\n                                     id=\"node-url\"\n                                     ng-if=\"row.entity.nodeUrl!='Not in use'\">{{row.entity.nodeUrl}}</a>\n                                   <span ng-if=\"row.entity.nodeUrl=='Not in use'\">Not in use</span>\n                              </div>",
	                    width: "30%"
	                }];
	            }
	        }
	    });
	
	    return jfManageHaLicensesController;
	})();
	
	function jfManageHaLicenses() {
	
	    return {
	        restrict: "E",
	        scope: { items: "=" },
	        controller: jfManageHaLicensesController,
	        controllerAs: "jfManageHaLicenses",
	        templateUrl: "directives/jf_manage_artifactory_licenses/jf_manage_ha_licenses.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfNews = jfNews;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	/**
	 * Created by tomere on 27/04/2017.
	 */
	
	var jfNewsController = (function () {
	    function jfNewsController($timeout, $scope, User) {
	        _classCallCheck(this, jfNewsController);
	
	        this.$timeout = $timeout;
	        this.$scope = $scope;
	        this.user = User.getCurrent();
	        this.initNewsWidget();
	    }
	
	    _createClass(jfNewsController, {
	        initNewsWidget: {
	            value: function initNewsWidget() {
	                this.showNews = false;
	                var offlineMode = this.user.offlineMode;
	                if (!offlineMode) this.readUpdateHTML();
	            }
	        },
	        readUpdateHTML: {
	            value: function readUpdateHTML() {
	                var _this = this;
	
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", "https://service.jfrog.org/artifactory/updatesv4", true);
	                xhr.onreadystatechange = function () {
	                    _this.updateHTML = xhr.response;
	                    _this.$scope.$apply();
	
	                    //twitter button javascript !
	                    !(function (d, s, id) {
	                        var js,
	                            fjs = d.getElementsByTagName(s)[0],
	                            p = /^http:/.test(d.location) ? "http" : "https";
	                        if (!d.getElementById(id)) {
	                            js = d.createElement(s);
	                            js.id = id;js.src = p + "://platform.twitter.com/widgets.js";
	                            fjs.parentNode.insertBefore(js, fjs);
	                        }
	                    })(document, "script", "twitter-wjs");
	
	                    _this.$scope.$on("$destroy", function () {
	                        var twitter = document.getElementById("twitter-wjs");
	                        if (twitter) twitter.remove();
	                    });
	
	                    if (xhr.response) {
	                        _this.$timeout(function () {
	                            _this.showNews = true;
	                            // this.$widgetObject.showSpinner = false;
	                        }, 200);
	                    }
	                };
	                xhr.send();
	            }
	        }
	    });
	
	    return jfNewsController;
	})();
	
	function jfNews() {
	    return {
	        controller: jfNewsController,
	        controllerAs: "jfNews",
	        bindToController: true,
	        templateUrl: "directives/jf_news/jf_news.html"
	    };
	}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.jfXucData = jfXucData;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var jfXucDataController = (function () {
	    function jfXucDataController(JFrogTableViewOptions, $scope, MiniXrayDao, $q, JFrogModal) {
	        _classCallCheck(this, jfXucDataController);
	
	        this.JFrogTableViewOptions = JFrogTableViewOptions;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.modal = JFrogModal;
	        this.miniXrayDao = MiniXrayDao;
	    }
	
	    _createClass(jfXucDataController, {
	        $onInit: {
	            value: function $onInit() {
	                this.tableViewOptions = new this.JFrogTableViewOptions(this.$scope);
	                this.columns = this.getColumns();
	                this.tableViewOptions.setColumns(this.columns).setRowsPerPage(20).setEmptyTableText("No Vulnerabilities").setObjectName("Vulnerability/Vulnerabilities").showFilter(false).sortBy("severity").setData([]);
	                this.getData();
	                this.showTable = true;
	            }
	        },
	        getColumns: {
	            value: function getColumns() {
	
	                return [{
	                    header: "Summary",
	                    field: "summary",
	                    sortable: true,
	                    filterable: true,
	                    cellTemplate: "<div ng-click=\"grid.appScope.jfXucData.showIssueDetails(row.entity)\"><a>{{row.entity.summary}}</a></div>"
	                }, {
	                    header: "Severity",
	                    sortable: true,
	                    field: "severity",
	                    cellTemplate: "<div class=\" ui-grid-cell-contents severity {{row.entity.severity.toLowerCase()}}\">{{row.entity.severity}}</div>" }, {
	                    header: "Component",
	                    field: "component",
	                    cellTemplate: "<div>{{row.entity.component }}</div>",
	                    width: "20%"
	                }, {
	                    header: "Infected Version",
	                    field: "infected_version",
	                    cellTemplate: "<div>{{row.entity.component_versions.vulnerable_versions.join(\", \") }}</div>",
	                    width: "10%"
	                }, {
	                    header: "Fix Version",
	                    sortable: false,
	                    field: "fix_version",
	                    cellTemplate: "<div><span ng-if=\"grid.appScope.jfXucData.hasFixVersion(row.entity)\">{{row.entity.component_versions.fixed_versions.join(\", \") }}</span> <span  ng-if=\"!grid.appScope.jfXucData.hasFixVersion(row.entity)\">N/A</span></div>",
	                    width: "10%"
	                }];
	            }
	        },
	        hasFixVersion: {
	            value: function hasFixVersion(row) {
	                return row.component_versions && row.component_versions.fixed_versions && row.component_versions.fixed_versions.length;
	            }
	        },
	        getData: {
	            value: function getData() {
	                var _this = this;
	
	                var payload = {
	                    package_id: this.packageId,
	                    version: this.version
	                };
	                this.miniXrayDao.getSecurityVulnerabilites(payload).$promise.then(function (data) {
	                    console.log("recieved data", data);
	                    if (data && data.data) {
	                        _this.tableViewOptions.setData(data.data);
	                    }
	                });
	            }
	        },
	        showIssueDetails: {
	            value: function showIssueDetails(row) {
	                var _this = this;
	
	                console.log("Need to show data for", row);
	                var version = undefined;
	                if (this.version) {
	                    version = ":" + this.version;
	                } else {
	                    version = "";
	                }
	
	                var payload = {
	                    component_id: this.packageId + version,
	                    source_comp_id: row.source_comp_id,
	                    source_name: row.component,
	                    vulnerability_id: row.id };
	                this.$q.all([this.miniXrayDao.getSecurityImpactGraph(payload).$promise, this.miniXrayDao.getSecurityDetails(payload).$promise]).then(function (data) {
	
	                    var modalScope = _this.$scope.$new();
	                    var graph = data[0];
	                    var alert = data[1];
	                    modalScope.ctrl = _this;
	                    if (alert.versions) {
	                        if (alert.versions.fixed_versions) {
	
	                            alert.fixed_versions = alert.versions.fixed_versions;
	                        }
	                        alert.versions = alert.versions.vulnerable_versions;
	                    }
	                    modalScope.itemClicked = _this.itemClicked;
	                    _this.selectedIndex = 0;
	                    modalScope.wideMode = false;
	                    modalScope.infected_comp = _this.packageId.split("://")[1];
	
	                    modalScope.details = alert;
	                    modalScope.graph = graph;
	                    modalScope.details = _this.orderDetailsObj(modalScope.details);
	                    modalScope.graph.component_id = "TEST MODAL SCOPE GRAPH";
	                    if (graph.impact_paths && !graph.impact_paths.length) {
	                        modalScope.wideMode = true;
	                    }
	                    console.log("all resolved!", data);
	
	                    _this.modal.launchModal("issue_modal", modalScope).result.then(function () {});
	                });
	            }
	        },
	        orderDetailsObj: {
	            value: function orderDetailsObj(detailsObj) {
	
	                console.log("details : ", detailsObj);
	                var tmpObj = _.cloneDeep(detailsObj);
	                var finaObj = {};
	
	                finaObj = {
	                    summary: tmpObj.summary,
	                    description: tmpObj.description,
	                    type: tmpObj.type,
	                    provider: tmpObj.provider,
	                    severity: tmpObj.severity,
	                    update: tmpObj.updated,
	                    cves: tmpObj.cves,
	                    package_type: tmpObj.package_type,
	                    references: tmpObj.references,
	                    infected_component: tmpObj.infected_component,
	                    source_version: tmpObj.source_version,
	                    infected_versions: tmpObj.infected_versions,
	                    fixed_versions: tmpObj.fixed_versions,
	                    watch_target: tmpObj.watch_target,
	                    watch_name: tmpObj.watch_name,
	                    matched_policies: tmpObj.policies
	                };
	
	                return _.omit(finaObj, _.isEmpty);
	            }
	        },
	        itemClicked: {
	            value: function itemClicked($index, ctrl) {
	                console.log("Item Clicked", $index, ctrl);
	                ctrl.selectedIndex = $index;
	            }
	        },
	        getNomalizedKey: {
	            value: function getNomalizedKey(key) {
	
	                if (key.toLowerCase() == "cves") {
	                    return "CVEs";
	                }
	                return _.startCase(key);
	            }
	        },
	        isLink: {
	            value: function isLink(str) {
	                if (typeof str != "string" || !str) {
	                    return false;
	                }
	                str = str.trim();
	                return str && str.startsWith("http://") || str.startsWith("https://") || str.startsWith("www.");
	            }
	        },
	        isArray: {
	            value: function isArray(o) {
	                return _.isArray(o);
	            }
	        }
	    });
	
	    return jfXucDataController;
	})();
	
	function jfXucData() {
	
	    return {
	        restrict: "E",
	        scope: {
	            packageId: "=",
	            version: "=" },
	        controller: jfXucDataController,
	        controllerAs: "jfXucData",
	        templateUrl: "directives/jf_xuc_data/jf_xuc_data.html",
	        bindToController: true
	    };
	}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.infectionPathViewer = infectionPathViewer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function infectionPathViewer() {
	
	    return {
	        restrict: "E",
	        scope: {
	            infectionPath: "=",
	            caption: "=",
	            type: "@?"
	        },
	        templateUrl: "directives/infection_path_viewer/infection_path_viewer.html",
	        controller: infectionPathViewerController,
	        controllerAs: "InfectionPathViewer",
	        bindToController: true
	    };
	}
	
	var infectionPathViewerController = (function () {
	    function infectionPathViewerController() {
	        _classCallCheck(this, infectionPathViewerController);
	
	        this.devider = 1;
	    }
	
	    _createClass(infectionPathViewerController, {
	        $onInit: {
	            value: function $onInit() {
	                if (this.infectionPath) {
	                    if (this.infectionPath.length > 4) {
	                        this.devider = 1.6;
	                    }
	                }
	            }
	        }
	    });
	
	    return infectionPathViewerController;
	})();

/***/ })
]);
//# sourceMappingURL=artifactory_directives.js.3184.map