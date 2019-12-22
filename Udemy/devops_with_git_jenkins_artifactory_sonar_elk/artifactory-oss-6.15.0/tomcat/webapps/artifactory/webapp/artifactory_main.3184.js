/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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
	
	var Models = _interopRequire(__webpack_require__(146));
	
	var ValidationConstants = _interopRequire(__webpack_require__(148));
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	if (angular.version.full !== "1.7.2") console.log("%cWrong AngularJS version!", "color: #ff0000;");
	
	// For debugging:
	window._inject = function (injectable) {
	    return angular.element(document.body).injector().get(injectable);
	};
	if (!String.prototype.endsWith) {
	    String.prototype.endsWith = function (str) {
	        return this.substr(this.length - str.length, str.length) === str;
	    };
	}
	if (!String.prototype.startsWith) {
	    String.prototype.startsWith = function (str) {
	        return this.substr(0, str.length) === str;
	    };
	}
	
	/**
	 * providers configurations
	 * @param $urlRouterProvider
	 */
	function appConfig($stateProvider, $locationProvider, $urlRouterProvider, ngClipProvider, $httpProvider, JFrogUILibConfigProvider) {
	
	    JFrogUILibConfigProvider.setConfig({
	        customValidationMessages: ValidationConstants,
	        customModalTemplatesPath: "modal_templates",
	        customEventsDefinition: EVENTS,
	        webworkersPath: location.pathname
	    });
	
	    $locationProvider.hashPrefix("");
	
	    $urlRouterProvider.otherwise(function ($injector, $location) {
	        if ($location.path() === "" || $location.path() === "/") return "/home";else return "/404";
	    });
	    ngClipProvider.setPath("css/ZeroClipboard.3184.swf");
	    $httpProvider.interceptors.push("artifactorySpinnerInterceptor");
	    $httpProvider.interceptors.push("artifactoryMessageInterceptor");
	    $httpProvider.interceptors.push("artifactorySessionInterceptor");
	    $httpProvider.interceptors.push("artifactoryServerErrorInterceptor");
	    $httpProvider.interceptors.push("artifactoryDebugInterceptor");
	}
	
	function appRun($httpBackend, $rootScope, ArtifactoryFeatures, $timeout, $animate, ArtifactoryHttpClient, RESOURCE, ArtifactoryState, JFrogNotifications) {
	
	    $httpBackend.whenPOST(/.*/).passThrough();
	    $httpBackend.whenPUT(/.*/).passThrough();
	    $httpBackend.whenGET(/.*/).passThrough();
	    $httpBackend.whenDELETE(/.*/).passThrough();
	    $httpBackend.whenPATCH(/.*/).passThrough();
	    $httpBackend.whenHEAD(/.*/).passThrough();
	    defineCodeMirrorMimes();
	    defineCodeMirrorLinkOverlay();
	    defineCodeMirrorAqlMode();
	
	    $timeout(function () {
	        if (ArtifactoryFeatures.isOss()) {
	            installHiringDevsHook();
	        }
	    }, 5000);
	
	    ArtifactoryHttpClient.get(RESOURCE.TREE_BROWSER + "/repoOrder").then(function (repoOrder) {
	        ArtifactoryState.setState("repoOrder", repoOrder.data);
	    });
	
	    var msgs = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vel.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error incidunt necessitatibus nemo suscipit, voluptate aliquam culpa adipisci! Doloremque pariatur commodi debitis vitae, aut quisquam rem vero nam atque veniam excepturi.", "Lorem ipsum dolor sit amet, consectetur adipisicing.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam in debitis dolore, ipsam voluptatem sed minus quisquam!", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, repellendus, provident.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe non consequuntur earum quam eum ut laboriosam, nam incidunt.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit."];
	
	    window._notification = function () {
	        var n = arguments[0] === undefined ? 1 : arguments[0];
	
	        for (var i = 0; i < n; i++) {
	            JFrogNotifications.create({ info: msgs[Math.floor(Math.random() * 10) + 0], timeout: 60000 });
	        }
	        $rootScope.$apply();
	    };
	
	    tempFixForAnimateParamsReversal($animate);
	    logNgAnimations($animate);
	}
	
	angular.module("artifactory.ui", ["jfrog.ui.essentials", "jfrog.native.ui", "color.picker", "ui.layout", "ngMockE2E", "selectize", "angular-capitalize-filter", "monospaced.mousewheel",
	
	// Application modules
	"artifactory.templates", "artifactory.services", "artifactory.directives", "artifactory.dao", "artifactory.ui_components", "artifactory.states", "artifactory.filters", Models.name]).config(appConfig).run(appRun);
	
	function aliasMime(newMime, existingMime) {
	    CodeMirror.defineMIME(newMime, CodeMirror.mimeModes[existingMime]);
	}
	function defineCodeMirrorMimes() {
	    aliasMime("text/x-java-source", "text/x-java");
	    aliasMime("pom", "text/xml");
	
	    /* Example definition of a simple mode that understands a subset of
	     * JavaScript:
	     */
	}
	
	function defineCodeMirrorAqlMode() {
	    CodeMirror.defineMode("aql", function () {
	        var urlRegex = /^https?:\/\/[a-zA-Z]+(\.)?(:[0-9]+)?.+?(?=\s|$|"|'|>|<)/;
	
	        var inApiKey = false;
	        return {
	            token: function token(stream, state) {
	
	                if (stream.match(/(?:curl|\-\H|\-\X|\-d|POST)\b/)) {
	                    return "external-command";
	                } else if (stream.match(/(?:X\-Api\-Key)\b/)) {
	                    inApiKey = true;
	                    return "header-tag";
	                } else if (stream.match("'")) {
	                    inApiKey = false;
	                    return null;
	                } else if (stream.match(/(?:find|include|limit|sort|offset)\b/)) {
	                    return "aql-keyword";
	                } else if (stream.match(/(?:\$and|\$or|\$ne|\$gt|\$gte|\$lt|\$lte|\$rf|\$msp|\$match|\$nmatch|\$eq|\$asc|\$desc)\b/)) {
	                    return "aql-operators";
	                } else if (stream.match(/(?:items|builds|entries)\b/)) {
	                    return "aql-domain";
	                } else if (stream.match(/[\{\}\[\]\(\)]+/)) {
	                    return "aql-brackets";
	                } else if (stream.match(urlRegex)) {
	                    return "api-url";
	                } else {
	                    var ret = null;
	                    if (inApiKey && !stream.match(":")) {
	                        ret = "api-key";
	                    }
	                    stream.next();
	                    return ret;
	                }
	            }
	        };
	    });
	}
	
	function defineCodeMirrorLinkOverlay() {
	    var urlRegex = /^https?:\/\/[a-zA-Z]+(\.)?(:[0-9]+)?.+?(?=\s|$|"|'|>|<)/;
	    CodeMirror.defineMode("links", function (config, parserConfig) {
	        var linkOverlay = {
	            token: function token(stream, state) {
	                if (stream.match(urlRegex)) {
	                    return "link";
	                }
	                while (stream.next() != null && !stream.match(urlRegex, false)) {}
	                return null;
	            }
	        };
	
	        return CodeMirror.overlayMode(CodeMirror.getMode(config, config.mimeType || "text/xml"), linkOverlay);
	    });
	}
	
	function installHiringDevsHook() {
	    window.u = {
	        r: {
	            reading: function reading() {
	                window.never = {
	                    mind: function mind() {
	                        window.location.href = "https://www.jfrog.com/about/open-positions/";
	                    }
	                };
	                setTimeout(function () {
	                    delete window.never;
	                }, 500);
	                return false;
	            }
	        }
	    };
	    console.log("%cif (u.r.reading(this) && u.can(code) && u.r.looking4.a.job) {\n    u.may(b.come.a(new JFrog(\"Star Developer\")));\n}\nelse {\n    never.mind();\n}\n// Run this code snippet to find out more about CAREERS & OPPORTUNITIES @ JFrog", "font: 12px sans-serif; color: #43a047;");
	}
	
	function tempFixForAnimateParamsReversal($animate) {
	    var origFunc = $animate.enabled.bind($animate);
	    $animate.enabled = function () {
	        if (typeof arguments[0] === "boolean" && typeof arguments[1] === "object") {
	            var temp = arguments[0];
	            arguments[0] = arguments[1];
	            arguments[1] = temp;
	        }
	        return origFunc.apply($animate, arguments);
	    };
	}
	
	function logNgAnimations($animate) {
	    if (localStorage._logNgAnimations) {
	        setInterval(function () {
	            var enters = $(".ng-enter").get();
	            var leaves = $(".ng-leave").get();
	
	            if (enters.length || leaves.length) {
	
	                var all = enters.concat(leaves);
	
	                all.forEach(function (elem) {
	                    if ($animate.enabled(elem)) {
	                        console.log("ngAnimating: ", elem);
	                    }
	                });
	            }
	        }, 100);
	    }
	}

/***/ }),

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

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

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
	
	var AdminMenuItems = __webpack_require__(147).AdminMenuItems;
	
	module.exports = angular.module("models", []).value("AdminMenuItems", AdminMenuItems);

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	"use strict";
	
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
	var AdminMenuItems = [{
	    label: "Repositories",
	    state: "admin.repositories",
	    subItems: [{ label: "Local", state: "admin.repositories.list", stateParams: { repoType: "local" } }, { label: "Remote", state: "admin.repositories.list", stateParams: { repoType: "remote" } }, { label: "Virtual", state: "admin.repositories.list", stateParams: { repoType: "virtual" } }, { label: "Distribution", state: "admin.repositories.list", stateParams: { repoType: "distribution" } }, { label: "Layouts", state: "admin.repositories.repo_layouts" }]
	}, {
	    label: "Configuration",
	    state: "admin.configuration",
	    subItems: [{ label: "General Configuration", state: "admin.configuration.general" }, { label: "JFrog Xray", state: "admin.configuration.xray", feature: "xray" }, { label: "Licenses", state: "admin.configuration.licenses", feature: "licenses" }, { label: "Property Sets", state: "admin.configuration.property_sets", feature: "properties" }, { label: "Proxies", state: "admin.configuration.proxies", feature: "proxies" }, { label: "HTTP Settings", state: "admin.configuration.reverse_proxy", feature: "reverse_proxies" }, { label: "Mail", state: "admin.configuration.mail", feature: "mail" }, { label: "High Availability", state: "admin.configuration.ha", feature: "highavailability" },
	    //{"label": "Bintray", "state": "admin.configuration.bintray"},
	    { label: "Artifactory Licenses", state: "admin.configuration.register_pro", feature: "register_pro" }]
	}, {
	    label: "Security",
	    state: "admin.security",
	    subItems: [{ label: "Security Configuration", state: "admin.security.general" }, { label: "Users", state: "admin.security.users" }, { label: "Groups", state: "admin.security.groups" }, { label: "Permissions", state: "admin.security.permissions" }, { label: "LDAP", state: "admin.security.ldap_settings" }, { label: "Crowd / JIRA", state: "admin.security.crowd_integration", feature: "crowd" }, { label: "SAML SSO", state: "admin.security.saml_integration", feature: "samlsso" }, { label: "OAuth SSO", state: "admin.security.oauth", feature: "oauthsso" }, { label: "HTTP SSO", state: "admin.security.http_sso", feature: "httpsso" }, { label: "SSH Server", state: "admin.security.ssh_server", feature: "sshserver" }, { label: "Signing Keys", state: "admin.security.signing_keys", feature: "signingkeys" }]
	}, {
	    label: "Services",
	    state: "admin.services",
	    subItems: [{ label: "Backups", state: "admin.services.backups", feature: "backups" }, { label: "Maven Indexer", state: "admin.services.indexer", feature: "indexer" }]
	
	}, {
	    label: "Import & Export",
	    state: "admin.import_export",
	    subItems: [{ label: "Repositories", state: "admin.import_export.repositories", feature: "repositories" }, { label: "System", state: "admin.import_export.system", feature: "system" }]
	
	}, {
	    label: "Advanced",
	    state: "admin.advanced",
	    subItems: [{ label: "Support Zone", state: "admin.advanced.support_page", feature: "supportpage" }, { label: "Log Analytics", state: "admin.advanced.log_analytics" }, { label: "System Logs", state: "admin.advanced.system_logs" }, { label: "System Info", state: "admin.advanced.system_info", feature: "systeminfo" }, { label: "Maintenance", state: "admin.advanced.maintenance", feature: "maintenance" }, { label: "Storage", state: "admin.advanced.storage_summary" }, { label: "Config Descriptor", state: "admin.advanced.config_descriptor", feature: "configdescriptor" }, { label: "Security Descriptor", state: "admin.advanced.security_descriptor", feature: "securitydescriptor" }]
	}];
	exports.AdminMenuItems = AdminMenuItems;

/***/ }),

/***/ 148:
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
	    adminGeneral: {
	        min: "Value must be between 0 and 2,147,483,647",
	        max: "Value must be between 0 and 2,147,483,647",
	        dateFormatExpression: "Invalid date format"
	    },
	    folderDownload: {
	        min: "Number of downloads must be bigger than 0"
	    },
	    adminBackup: {
	        name: "Invalid backup name",
	        xmlName: "Invalid backup name"
	    },
	    adminMail: {
	        min: "Port must be between 1 and 65535",
	        max: "Port must be between 1 and 65535"
	    },
	    proxies: {
	        min: "Port must be between 1 and 65535",
	        max: "Port must be between 1 and 65535" },
	    users: {
	        validator: "Passwords do not match",
	        minlength: "Password must contain at least 4 characters",
	        maxlength: "Username cannot be longer than 64 characters",
	        invalidUsername: "Username cannot contain uppercase letters"
	    },
	    groups: {
	        maxlength: "Group name cannot be longer than 64 characters"
	    },
	    maintenance: {
	        min: "Value must be between 0 and 99",
	        max: "Value must be between 0 and 99"
	    },
	    crowd: {
	        min: "Value must be between 0 and 9999999999999",
	        max: "Value must be between 0 and 9999999999999",
	        url: "Invalid URL"
	    },
	    ldapSettings: {
	        ldapUrl: "Invalid LDAP URL"
	    },
	    gridFilter: {
	        maxlength: "Filter field exceed max length"
	    },
	    properties: {
	        validCharacters: "Name cannot include the following characters * < > ~ ! @ # $ % ^ & ( ) + = - { } [ ] ; , ` / \\",
	        predefinedValues: "Predefined values for the selected type cannot be empty",
	        name: "Name must start with a letter and cannot contain spaces or special characters",
	        xmlName: "Name must start with a letter and cannot contain spaces or special characters",
	        notPrefixedWithNumeric: "Name must start with a letter and cannot contain spaces or special characters"
	    },
	    repoLayouts: {
	        pathPattern: "Pattern must contain at-least the following tokens 'module', 'baseRev' and 'org' or 'orgPath'"
	    },
	    bintray: {
	        required: "API Key / Username cannot be empty"
	    },
	    licenses: {
	        validateLicense: "License name contains illegal characters"
	    },
	    propertySet: {
	        name: "Property set name must start with a letter and contain only letters, digits, dashes or underscores",
	        xmlName: "Property set name must start with a letter and contain only letters, digits, dashes or underscores"
	    },
	    reverseProxy: {
	        port: "Port is not available"
	    },
	    distRepo: {
	        existRuleName: "Rule name already in use" }
	};

/***/ })

/******/ });
//# sourceMappingURL=artifactory_main.js.3184.map