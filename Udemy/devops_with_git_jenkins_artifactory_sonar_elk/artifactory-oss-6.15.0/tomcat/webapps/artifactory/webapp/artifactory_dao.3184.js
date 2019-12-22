webpackJsonp([0,8,9],[
/* 0 */
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
	
	var artifactoryNotificationsInterceptor = __webpack_require__(1).artifactoryNotificationsInterceptor;
	
	var _artifactory_daoJs = __webpack_require__(2);
	
	var ArtifactoryDao = _artifactory_daoJs.ArtifactoryDao;
	var ArtifactoryDaoFactory = _artifactory_daoJs.ArtifactoryDaoFactory;
	
	var AdminSecurityGeneralDao = __webpack_require__(3).AdminSecurityGeneralDao;
	
	var GroupsDao = __webpack_require__(4).GroupsDao;
	
	var GroupPermissionsDao = __webpack_require__(5).GroupPermissionsDao;
	
	var HttpSsoDao = __webpack_require__(6).HttpSsoDao;
	
	var SshServerDao = __webpack_require__(7).SshServerDao;
	
	var LicensesDao = __webpack_require__(8).LicensesDao;
	
	var MailDao = __webpack_require__(9).MailDao;
	
	var PasswordsEncryptionDao = __webpack_require__(10).PasswordsEncryptionDao;
	
	var ProxiesDao = __webpack_require__(11).ProxiesDao;
	
	var ReverseProxiesDao = __webpack_require__(12).ReverseProxiesDao;
	
	var RegisterProDao = __webpack_require__(13).RegisterProDao;
	
	var UserDao = __webpack_require__(14).UserDao;
	
	var SamlDao = __webpack_require__(15).SamlDao;
	
	var BintrayDao = __webpack_require__(16).BintrayDao;
	
	var _daoProperty_sets_dao = __webpack_require__(17);
	
	var PropertyFactory = _daoProperty_sets_dao.PropertyFactory;
	var PropertySetFactory = _daoProperty_sets_dao.PropertySetFactory;
	var PropertySetsDao = _daoProperty_sets_dao.PropertySetsDao;
	
	var BackupDao = __webpack_require__(18).BackupDao;
	
	var BrowseFilesDao = __webpack_require__(19).BrowseFilesDao;
	
	var SystemInfoDao = __webpack_require__(20).SystemInfoDao;
	
	var SecurityDescriptorDao = __webpack_require__(21).SecurityDescriptorDao;
	
	var ConfigDescriptorDao = __webpack_require__(22).ConfigDescriptorDao;
	
	var IndexerDao = __webpack_require__(23).IndexerDao;
	
	var StorageSummaryDao = __webpack_require__(24).StorageSummaryDao;
	
	var TreeBrowserDao = __webpack_require__(25).TreeBrowserDao;
	
	var TreeNodeFactory = __webpack_require__(26).TreeNodeFactory;
	
	var RepoDataDao = __webpack_require__(27).RepoDataDao;
	
	var CronTimeDao = __webpack_require__(28).CronTimeDao;
	
	var DateFormatDao = __webpack_require__(29).DateFormatDao;
	
	var NameValidatorDao = __webpack_require__(30).NameValidatorDao;
	
	var UniqueIdValidatorDao = __webpack_require__(31).UniqueIdValidatorDao;
	
	var XmlNameDao = __webpack_require__(32).XmlNameDao;
	
	var ArtifactGeneralDao = __webpack_require__(33).ArtifactGeneralDao;
	
	var ArtifactPermissionsDao = __webpack_require__(34).ArtifactPermissionsDao;
	
	var ArtifactBuildsDao = __webpack_require__(35).ArtifactBuildsDao;
	
	var ArtifactViewSourceDao = __webpack_require__(36).ArtifactViewSourceDao;
	
	var ArtifactPropertyDao = __webpack_require__(37).ArtifactPropertyDao;
	
	var ArtifactWatchesDao = __webpack_require__(38).ArtifactWatchesDao;
	
	var ArtifactXrayDao = __webpack_require__(39).ArtifactXrayDao;
	
	var ArtifactActionsDao = __webpack_require__(40).ArtifactActionsDao;
	
	var PredefineDao = __webpack_require__(41).PredefineDao;
	
	var RepoPropertySetDao = __webpack_require__(42).RepoPropertySetDao;
	
	var ArtifactSearchDao = __webpack_require__(43).ArtifactSearchDao;
	
	var ArtifactPackageSearchDao = __webpack_require__(44).ArtifactPackageSearchDao;
	
	var DependencyDeclarationDao = __webpack_require__(45).DependencyDeclarationDao;
	
	var ArtifactDeployDao = __webpack_require__(46).ArtifactDeployDao;
	
	var ArtifactViewsDao = __webpack_require__(47).ArtifactViewsDao;
	
	var FooterDao = __webpack_require__(48).FooterDao;
	
	var CrowdIntegrationDao = __webpack_require__(50).CrowdIntegrationDao;
	
	var ExportDao = __webpack_require__(51).ExportDao;
	
	var ImportDao = __webpack_require__(52).ImportDao;
	
	var MaintenanceDao = __webpack_require__(53).MaintenanceDao;
	
	var LdapDao = __webpack_require__(54).LdapDao;
	
	var DockerStatusDao = __webpack_require__(55).DockerStatusDao;
	
	var LdapGroupsDao = __webpack_require__(56).LdapGroupsDao;
	
	var PushToBintrayDao = __webpack_require__(57).PushToBintrayDao;
	
	var DistributionDao = __webpack_require__(58).DistributionDao;
	
	var GeneralConfigDao = __webpack_require__(59).GeneralConfigDao;
	
	var SigningKeysDao = __webpack_require__(60).SigningKeysDao;
	
	var TrustedKeysDao = __webpack_require__(61).TrustedKeysDao;
	
	var AccessTokensDao = __webpack_require__(62).AccessTokensDao;
	
	var KeystoreDao = __webpack_require__(63).KeystoreDao;
	
	var BuildsDao = __webpack_require__(64).BuildsDao;
	
	var BundlesDao = __webpack_require__(65).BundlesDao;
	
	var UserProfileDao = __webpack_require__(66).UserProfileDao;
	
	var PermissionsDao = __webpack_require__(67).PermissionsDao;
	
	var ChecksumsDao = __webpack_require__(68).ChecksumsDao;
	
	var FilteredResourceDao = __webpack_require__(69).FilteredResourceDao;
	
	var ArtifactLicensesDao = __webpack_require__(70).ArtifactLicensesDao;
	
	var HomePageDao = __webpack_require__(71).HomePageDao;
	
	var SetMeUpDao = __webpack_require__(72).SetMeUpDao;
	
	var BasicConfigDao = __webpack_require__(73).BasicConfigDao;
	
	var SystemLogsDao = __webpack_require__(74).SystemLogsDao;
	
	var RepositoriesDao = __webpack_require__(75).RepositoriesDao;
	
	var RepositoriesLayoutsDao = __webpack_require__(76).RepositoriesLayoutsDao;
	
	var HaDao = __webpack_require__(77).HaDao;
	
	var HaLicensesDao = __webpack_require__(78).HaLicensesDao;
	
	var StashResultsDao = __webpack_require__(79).StashResultsDao;
	
	var OAuthDao = __webpack_require__(80).OAuthDao;
	
	var SupportPageDao = __webpack_require__(81).SupportPageDao;
	
	var ServerTimeDao = __webpack_require__(82).ServerTimeDao;
	
	var SshClientDao = __webpack_require__(83).SshClientDao;
	
	var BinaryProvidersInfoDao = __webpack_require__(84).BinaryProvidersInfoDao;
	
	var XrayDao = __webpack_require__(85).XrayDao;
	
	var GlobalReplicationsConfigDao = __webpack_require__(86).GlobalReplicationsConfigDao;
	
	var SumoLogicConfigDao = __webpack_require__(87).SumoLogicConfigDao;
	
	var OnboardingDao = __webpack_require__(88).OnboardingDao;
	
	var SslCertificateDao = __webpack_require__(89).SslCertificateDao;
	
	var PackagesDAO = __webpack_require__(90).PackagesDAO;
	
	var JcrEulaDao = __webpack_require__(91).JcrEulaDao;
	
	var JcrNewsletterDao = __webpack_require__(92).JcrNewsletterDao;
	
	var MiniXrayDao = __webpack_require__(93).MiniXrayDao;
	
	angular.module("artifactory.dao", ["ngResource", "artifactory.services", "jfrog.ui.essentials"]).factory("artifactoryNotificationsInterceptor", artifactoryNotificationsInterceptor).service("ArtifactoryDao", ArtifactoryDao).factory("ArtifactoryDaoFactory", ArtifactoryDaoFactory).service("AdminSecurityGeneralDao", AdminSecurityGeneralDao).service("GroupsDao", GroupsDao).service("GroupPermissionsDao", GroupPermissionsDao).service("HttpSsoDao", HttpSsoDao).service("SshServerDao", SshServerDao).service("LicensesDao", LicensesDao).service("HaLicensesDao", HaLicensesDao).service("MailDao", MailDao).service("PasswordsEncryptionDao", PasswordsEncryptionDao).factory("ProxiesDao", ProxiesDao).factory("ReverseProxiesDao", ReverseProxiesDao).service("RegisterProDao", RegisterProDao).service("UserDao", UserDao).service("SamlDao", SamlDao).service("BintrayDao", BintrayDao).factory("PropertySetsDao", PropertySetsDao).factory("Property", PropertyFactory).factory("PropertySet", PropertySetFactory).factory("BackupDao", BackupDao).service("BrowseFilesDao", BrowseFilesDao).service("SystemInfoDao", SystemInfoDao).service("SecurityDescriptorDao", SecurityDescriptorDao).service("ConfigDescriptorDao", ConfigDescriptorDao).service("IndexerDao", IndexerDao).service("StorageSummaryDao", StorageSummaryDao).service("TreeBrowserDao", TreeBrowserDao).factory("TreeNode", TreeNodeFactory).service("RepoDataDao", RepoDataDao).service("CronTimeDao", CronTimeDao).service("DateFormatDao", DateFormatDao).service("NameValidatorDao", NameValidatorDao).service("UniqueIdValidatorDao", UniqueIdValidatorDao).service("XmlNameDao", XmlNameDao).service("ArtifactGeneralDao", ArtifactGeneralDao).service("ArtifactPermissionsDao", ArtifactPermissionsDao).service("ArtifactBuildsDao", ArtifactBuildsDao).service("ArtifactViewSourceDao", ArtifactViewSourceDao).service("ArtifactPropertyDao", ArtifactPropertyDao).factory("ArtifactWatchesDao", ArtifactWatchesDao).factory("ArtifactXrayDao", ArtifactXrayDao).factory("ArtifactActionsDao", ArtifactActionsDao).service("PredefineDao", PredefineDao).service("RepoPropertySetDao", RepoPropertySetDao).service("ArtifactSearchDao", ArtifactSearchDao).service("ArtifactPackageSearchDao", ArtifactPackageSearchDao).service("DependencyDeclarationDao", DependencyDeclarationDao).service("ArtifactDeployDao", ArtifactDeployDao).service("ArtifactViewsDao", ArtifactViewsDao).service("FooterDao", FooterDao).service("CrowdIntegrationDao", CrowdIntegrationDao).service("ExportDao", ExportDao).service("ImportDao", ImportDao).service("MaintenanceDao", MaintenanceDao).service("LdapDao", LdapDao).service("LdapGroupsDao", LdapGroupsDao).service("PushToBintrayDao", PushToBintrayDao).service("DistributionDao", DistributionDao).service("GeneralConfigDao", GeneralConfigDao).service("SigningKeysDao", SigningKeysDao).service("TrustedKeysDao", TrustedKeysDao).service("AccessTokensDao", AccessTokensDao).service("KeystoreDao", KeystoreDao).service("BuildsDao", BuildsDao).service("BundlesDao", BundlesDao).service("UserProfileDao", UserProfileDao).service("PermissionsDao", PermissionsDao).service("ChecksumsDao", ChecksumsDao).service("FilteredResourceDao", FilteredResourceDao).service("ArtifactLicensesDao", ArtifactLicensesDao).service("HomePageDao", HomePageDao).service("SetMeUpDao", SetMeUpDao).service("BasicConfigDao", BasicConfigDao).service("SystemLogsDao", SystemLogsDao).service("RepositoriesDao", RepositoriesDao).service("DockerStatusDao", DockerStatusDao).service("RepositoriesLayoutsDao", RepositoriesLayoutsDao).service("StashResultsDao", StashResultsDao).service("OAuthDao", OAuthDao).service("SupportPageDao", SupportPageDao).service("ServerTimeDao", ServerTimeDao).service("SshClientDao", SshClientDao).service("BinaryProvidersInfoDao", BinaryProvidersInfoDao).service("GlobalReplicationsConfigDao", GlobalReplicationsConfigDao).service("XrayDao", XrayDao).service("SumoLogicConfigDao", SumoLogicConfigDao).service("OnboardingDao", OnboardingDao).service("SslCertificateDao", SslCertificateDao).service("PackagesDAO", PackagesDAO).service("JcrEulaDao", JcrEulaDao).service("JcrNewsletterDao", JcrNewsletterDao).service("MiniXrayDao", MiniXrayDao).factory("HaDao", HaDao);

/***/ }),
/* 1 */
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
	 * returns a function that accept some custom info
	 * and returns the interceptor object.
	 * intent to be injected and use in DAO's
	 *
	 * @returns {Function}
	 */
	"use strict";
	
	exports.artifactoryNotificationsInterceptor = artifactoryNotificationsInterceptor;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function artifactoryNotificationsInterceptor($q, JFrogNotifications) {
	
	    /**
	     * accept an additional info that can be used
	     * in the returned interceptor object
	     *
	     * @returns {{response: Function, responseError: Function}}
	     */
	    return {
	        response: function response(res) {
	            if (res.data && !(res.config && res.config.params && res.config.params.$suppress_toaster)) {
	                if (!res.data.url) {
	                    if (res.data.info || res.data.warn) {
	                        if (res.data.info && res.data.info.indexOf("<a") !== -1 && res.data.info.indexOf("</a>") !== -1 || res.data.warn && res.data.warn.indexOf("<a") !== -1 && res.data.warn.indexOf("</a>") !== -1) {
	                            JFrogNotifications.create(res.data, true);
	                        } else {
	                            JFrogNotifications.create(res.data);
	                        }
	                    } else if (res.data.feedbackMsg) {
	                        JFrogNotifications.create(res.data.feedbackMsg);
	                    }
	                }
	            }
	            return res;
	        },
	        responseError: function responseError(res) {
	            // Response error as array:
	            if (res.data && res.data.errors && res.data.errors.length && !(res.config && res.config.params && res.config.params.$suppress_toaster)) {
	                try {
	                    JFrogNotifications.create(JSON.parse(res.data.errors[0].message));
	                } catch (e) {
	                    // message is not a json object but a simple string
	                    JFrogNotifications.create({ error: res.data.errors[0].message });
	                }
	            }
	            // Response error as single object:
	            else if (res.data && (res.data.error || res.data.warn) && !(res.config && res.config.params && res.config.params.$suppress_toaster)) {
	                JFrogNotifications.create(res.data);
	            }
	            return $q.reject(res);
	        }
	    };
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.ArtifactoryDaoFactory = ArtifactoryDaoFactory;
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
	 * base class for DAO's
	 */
	
	var ArtifactoryDao = exports.ArtifactoryDao = (function () {
	
	    /**
	     * inject services provided by the sub class
	     * @param $resource
	     * @param RESOURCE
	     */
	
	    function ArtifactoryDao($resource, RESOURCE, artifactoryNotificationsInterceptor, JFrogUIUtils) {
	        _classCallCheck(this, ArtifactoryDao);
	
	        this.artifactoryNotificationsInterceptor = artifactoryNotificationsInterceptor;
	        this.RESOURCE = RESOURCE;
	        this.JFrogUIUtils = JFrogUIUtils;
	        this.$resource = $resource;
	        this._url = null;
	        this._prototype = null;
	
	        /**
	         * default custom actions
	         * @type {{update: {method: string, interceptor: *}, save: {method: string, interceptor: *}, delete: {method: string, interceptor: *}}}
	         * @private
	         */
	        this.setDefaults({});
	        this.setCustomActions({
	            update: {
	                method: "PUT",
	                notifications: true
	            },
	            "delete": {
	                method: "DELETE",
	                notifications: true
	            },
	            fetch: { // POST which is actually getting data
	                method: "POST",
	                notifications: false
	            },
	            save: {
	                method: "POST",
	                notifications: true
	            }
	        });
	    }
	
	    _createClass(ArtifactoryDao, {
	        setUrl: {
	
	            /**
	             * full url for the resource, include params
	             * @param {string} url
	             */
	
	            value: function setUrl(url) {
	                this._url = url;
	                return this;
	            }
	        },
	        setPath: {
	
	            /**
	             * relative path for the resource, include params
	             * @param {string} path
	             */
	
	            value: function setPath(path) {
	                this._url = this.RESOURCE.API_URL + path;
	                return this;
	            }
	        },
	        setDefaults: {
	
	            /**
	             * set defaults method for custom actions
	             * @param {object} options - Object of default properties. Possible keys and values:
	             ** @param {string} method - GET, POST, PUT, DELETE, PATCH, etc.
	             */
	
	            value: function setDefaults(options) {
	                this._defaults = this._defaults || {};
	                angular.extend(this._defaults, options);
	                return this;
	            }
	        },
	        setCustomActions: {
	
	            /**
	             * extend the default actions object
	             * @param {object} actionsObject
	             */
	
	            value: function setCustomActions(actionsObject) {
	                var _this = this;
	
	                this._customActions = this._customActions || {};
	                Object.keys(actionsObject).forEach(function (action) {
	                    var actionParams = actionsObject[action];
	                    if (!actionParams.method && _this._defaults.method) {
	                        actionParams.method = _this._defaults.method;
	                    }
	                    if (actionParams.path) {
	                        actionParams.url = _this.RESOURCE.API_URL + actionParams.path;
	                        delete actionParams.path;
	                    }
	                    if (angular.isDefined(actionParams.notifications) && actionParams.notifications) {
	                        if (actionParams.notifications) actionParams.interceptor = _this.artifactoryNotificationsInterceptor;
	                    }
	                    if (angular.isDefined(actionParams.notifications)) {
	                        delete actionParams.notifications;
	                    }
	                    if (_this._customActions[action]) {
	                        angular.extend(_this._customActions[action], actionParams);
	                    } else {
	                        _this._customActions[action] = angular.copy(actionParams);
	                    }
	                });
	                return this;
	            }
	        },
	        extendPrototype: {
	
	            /**
	             * extend the resources prototype
	             * @param {object} prototype
	             */
	
	            value: function extendPrototype(prototype) {
	                this._prototype = prototype;
	                return this;
	            }
	        },
	        transformResponse: {
	
	            /**
	             * supply a transform function
	             * @callback {function} transform function
	             */
	
	            value: function transformResponse(callback) {
	                this.transformResponse = callback;
	                return this;
	            }
	        },
	        getInstance: {
	
	            /**
	             *returns an instance of the resource object
	             * @returns {Object|*} $resource
	             */
	
	            value: function getInstance() {
	                var _this = this;
	
	                var result = this.$resource(this._url, null, this._customActions);
	                if (this._prototype) {
	                    angular.extend(result.prototype, this._prototype);
	                }
	
	                var cancellableRequests = {};
	
	                Object.keys(result).forEach(function (key) {
	                    if (_this._customActions[key] && _this._customActions[key].authenticate) {
	                        result[key].authenticate = function (authentication) {
	
	                            var token = _this.JFrogUIUtils.b64EncodeUnicode("" + authentication.username + ":" + authentication.password);
	
	                            _this._customActions[key].headers = { Authorization: "Basic " + token };
	                            delete _this._customActions[key].authenticate;
	                        };
	                    } else if (_this._customActions[key] && _this._customActions[key].cancellable) {
	                        (function () {
	                            var origMethod = result[key];
	                            result[key] = function () {
	                                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                                    params[_key] = arguments[_key];
	                                }
	
	                                var result = origMethod.apply(undefined, params);
	                                if (!cancellableRequests[key]) cancellableRequests[key] = [];
	                                cancellableRequests[key].push(result);
	                                return result;
	                            };
	                            if (!result.$cancelAll) {
	                                result.$cancelAll = function (methodName) {
	                                    if (cancellableRequests[methodName]) {
	                                        cancellableRequests[methodName].forEach(function (request) {
	                                            if (request.$cancelRequest) request.$cancelRequest();
	                                        });
	                                        cancellableRequests[methodName] = [];
	                                    }
	                                };
	                            }
	                        })();
	                    }
	                });
	
	                return result;
	            }
	        }
	    });
	
	    return ArtifactoryDao;
	})();
	
	function ArtifactoryDaoFactory($resource, RESOURCE, artifactoryNotificationsInterceptor, JFrogUIUtils) {
	    return function () {
	        return new ArtifactoryDao($resource, RESOURCE, artifactoryNotificationsInterceptor, JFrogUIUtils);
	    };
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var AdminSecurityGeneralDao = exports.AdminSecurityGeneralDao = function AdminSecurityGeneralDao(ArtifactoryDaoFactory, RESOURCE) {
	    _classCallCheck(this, AdminSecurityGeneralDao);
	
	    return ArtifactoryDaoFactory().setPath(RESOURCE.SECURITY_CONFIG).setCustomActions({
	        lockUsers: {
	            path: RESOURCE.SECURITY_CONFIG + "/lockUsers",
	            method: "POST",
	            notifications: true
	        },
	        unlockUsers: {
	            path: RESOURCE.SECURITY_CONFIG + "/unlockUsers",
	            method: "POST",
	            notifications: true
	        },
	        unlockAllUsers: {
	            path: RESOURCE.SECURITY_CONFIG + "/unlockAllUsers",
	            method: "POST",
	            notifications: true
	        }
	    }).getInstance();
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var GroupsDao = exports.GroupsDao = (function (_ArtifactoryDao) {
	    function GroupsDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, GroupsDao);
	
	        _get(Object.getPrototypeOf(GroupsDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	        this.setUrl(RESOURCE.API_URL + RESOURCE.GROUPS + "/:prefix/:name");
	
	        this.setCustomActions({
	            getAll: {
	                method: "GET",
	                isArray: true
	            },
	            getSingle: {
	                method: "GET",
	                params: { name: "@name" },
	                notifications: true
	            },
	            update: {
	                method: "PUT",
	                params: { name: "@name" },
	                notifications: true
	            },
	            create: {
	                method: "POST",
	                notifications: true
	            },
	            "delete": {
	                method: "POST",
	                params: { prefix: "delete" },
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(GroupsDao, _ArtifactoryDao);
	
	    return GroupsDao;
	})(ArtifactoryDao);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var GroupPermissionsDao = exports.GroupPermissionsDao = (function (_ArtifactoryDao) {
	    function GroupPermissionsDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, GroupPermissionsDao);
	
	        _get(Object.getPrototypeOf(GroupPermissionsDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.GROUP_PERMISSION);
	
	        this.setCustomActions({
	            get: {
	                method: "POST" }
	        });
	    }
	
	    _inherits(GroupPermissionsDao, _ArtifactoryDao);
	
	    return GroupPermissionsDao;
	})(ArtifactoryDao);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var HttpSsoDao = exports.HttpSsoDao = (function (_ArtifactoryDao) {
	    function HttpSsoDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, HttpSsoDao);
	
	        _get(Object.getPrototypeOf(HttpSsoDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.HTTPSSO);
	    }
	
	    _inherits(HttpSsoDao, _ArtifactoryDao);
	
	    return HttpSsoDao;
	})(ArtifactoryDao);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var SshServerDao = exports.SshServerDao = (function (_ArtifactoryDao) {
	    function SshServerDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, SshServerDao);
	
	        _get(Object.getPrototypeOf(SshServerDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.SSHSERVER);
	    }
	
	    _inherits(SshServerDao, _ArtifactoryDao);
	
	    return SshServerDao;
	})(ArtifactoryDao);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var LicensesDao = exports.LicensesDao = function LicensesDao(RESOURCE, ArtifactoryDaoFactory) {
	    _classCallCheck(this, LicensesDao);
	
	    return ArtifactoryDaoFactory().setPath(RESOURCE.LICENSES + "/:action/:name").setCustomActions({
	        getLicense: {
	            method: "GET",
	            params: { action: "crud", name: "@name" },
	            notifications: true,
	            isArray: true
	        },
	        getSingleLicense: {
	            method: "GET",
	            params: { action: "crud", name: "@name" },
	            notifications: true },
	        update: {
	            method: "PUT",
	            params: { action: "crud", name: "@name" },
	            notifications: true },
	        create: {
	            method: "POST",
	            params: { action: "crud", name: "@name" },
	            notifications: true },
	        "delete": {
	            method: "POST",
	            params: { action: "deleteLicense", name: "@name" },
	            notifications: true
	        }
	
	    }).getInstance();
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var MailDao = exports.MailDao = (function (_ArtifactoryDao) {
	    function MailDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, MailDao);
	
	        _get(Object.getPrototypeOf(MailDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.MAIL);
	    }
	
	    _inherits(MailDao, _ArtifactoryDao);
	
	    return MailDao;
	})(ArtifactoryDao);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var PasswordsEncryptionDao = exports.PasswordsEncryptionDao = (function (_ArtifactoryDao) {
	    function PasswordsEncryptionDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, PasswordsEncryptionDao);
	
	        _get(Object.getPrototypeOf(PasswordsEncryptionDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.CRYPTO + "/:action");
	
	        this.setCustomActions({
	            encrypt: {
	                method: "POST",
	                params: { action: "encrypt" },
	                notifications: true
	            },
	
	            decrypt: {
	                method: "POST",
	                params: { action: "decrypt" },
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(PasswordsEncryptionDao, _ArtifactoryDao);
	
	    return PasswordsEncryptionDao;
	})(ArtifactoryDao);

/***/ }),
/* 11 */
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
	
	exports.ProxiesDao = ProxiesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ProxiesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.PROXIES + "/:prefix/:key").setCustomActions({
	        "delete": {
	            method: "POST",
	            params: { prefix: "deleteProxies" }
	        },
	        update: {
	            method: "PUT",
	            params: { prefix: "crud", key: "@key" }
	        },
	        get: {
	            method: "GET",
	            params: { prefix: "crud", key: "@key" },
	            isArray: true
	        },
	        getSingleProxy: {
	            method: "GET",
	            params: { prefix: "crud", key: "@key" }
	        },
	        getProxyKeys: {
	            method: "GET",
	            params: { prefix: "proxyKeys" },
	            isArray: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 12 */
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
	
	exports.ReverseProxiesDao = ReverseProxiesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ReverseProxiesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.REVERSE_PROXIES + "/:prefix/:key").setCustomActions({
	        "delete": {
	            method: "POST",
	            params: { prefix: "deleteReverseProxies" }
	        },
	        update: {
	            method: "PUT",
	            params: { prefix: "crud", key: "@key" }
	        },
	        get: {
	            method: "GET",
	            params: { prefix: "crud", key: "@key" }
	        },
	        checkPort: {
	            method: "GET",
	            params: { prefix: "checkPort", key: "@port" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 13 */
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
	
	exports.RegisterProDao = RegisterProDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function RegisterProDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.REGISTER_PRO).setCustomActions({
	        update: {
	            notifications: true
	        }
	
	    }).getInstance();
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var UserDao = exports.UserDao = (function (_ArtifactoryDao) {
	    function UserDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, UserDao);
	
	        _get(Object.getPrototypeOf(UserDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.USERS + "/:prefix/:name");
	
	        this.setCustomActions({
	            getAll: {
	                method: "GET",
	                isArray: true
	            },
	            getSingle: {
	                method: "GET",
	                params: { name: "@name" },
	                notifications: true
	            },
	            create: {
	                method: "POST",
	                notifications: true
	            },
	            update: {
	                method: "PUT",
	                params: { name: "@name" },
	                notifications: true
	            },
	            "delete": {
	                method: "POST",
	                params: { prefix: "userDelete" },
	                notifications: true
	            },
	            getAllGroups: {
	                method: "GET",
	                params: { prefix: "groups" },
	                isArray: true
	            },
	            getPermissions: {
	                method: "GET",
	                params: { name: "@name", prefix: "permissions" } },
	            checkExternalStatus: {
	                method: "POST",
	                params: { prefix: "externalStatus" },
	                notifications: true
	            },
	            changePassword: {
	                path: "/auth/changePassword",
	                method: "POST",
	                params: { prefix: "changePassword" },
	                notifications: true
	            },
	            expirePassword: {
	                method: "POST",
	                params: { prefix: "@username", name: "expirePassword" },
	                notifications: true
	            },
	            unExpirePassword: {
	                method: "POST",
	                params: { prefix: "@username", name: "unexpirePassword" },
	                notifications: true
	            },
	            expireAllPassword: {
	                method: "POST",
	                params: { prefix: "expirePasswordForAllUsers" },
	                notifications: true
	            },
	            unExpireAllPassword: {
	                method: "POST",
	                params: { prefix: "unexpirePasswordForAllUsers" },
	                notifications: true
	            }
	
	        });
	    }
	
	    _inherits(UserDao, _ArtifactoryDao);
	
	    return UserDao;
	})(ArtifactoryDao);

/***/ }),
/* 15 */
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
	
	exports.SamlDao = SamlDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SamlDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.SAML_CONFIG).setCustomActions({
	        downloadCertificate: {
	            method: "GET",
	            path: RESOURCE.SAML_CONFIG + "/key/public"
	        },
	        regenerateCertificate: {
	            method: "PUT",
	            path: RESOURCE.SAML_CONFIG + "/key/public/regenerate"
	        }
	    });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var BintrayDao = exports.BintrayDao = (function (_ArtifactoryDao) {
	    function BintrayDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, BintrayDao);
	
	        _get(Object.getPrototypeOf(BintrayDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.BINTRAY_SETTING);
	        this.setCustomActions({
	            fetch: {
	                notifications: true
	            },
	            info: {
	                path: RESOURCE.BINTRAY_SETTING + "/info",
	                params: { sha1: "@sha1" }
	            }
	        });
	    }
	
	    _inherits(BintrayDao, _ArtifactoryDao);
	
	    return BintrayDao;
	})(ArtifactoryDao);

/***/ }),
/* 17 */
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
	exports.PropertySetsDao = PropertySetsDao;
	exports.PropertyFactory = PropertyFactory;
	exports.PropertySetFactory = PropertySetFactory;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function PropertySetsDao(ArtifactoryDaoFactory, RESOURCE) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.PROPERTY_SETS + "/:action/:name").setCustomActions({
	        get: {
	            params: { name: "@name" }
	        },
	        update: {
	            params: { name: "@name" }
	        },
	        "delete": {
	            method: "POST",
	            params: { action: "deletePropertySet" }
	        },
	        query: {
	            isArray: true,
	            params: { name: "@name", isRepoForm: "@isRepoForm" }
	        }
	    }).getInstance();
	}
	
	var Property = exports.Property = (function () {
	    function Property(data) {
	        _classCallCheck(this, Property);
	
	        data = data || {};
	        data.propertyType = data.propertyType || "ANY_VALUE";
	
	        data.predefinedValues = data.predefinedValues || [];
	        angular.extend(this, data);
	    }
	
	    _createClass(Property, {
	        getDisplayType: {
	            value: function getDisplayType() {
	                var type = Property.propertyTypesMap[this.propertyType];
	                return type ? type.text : null;
	            }
	        },
	        getDefaultValues: {
	            value: function getDefaultValues() {
	                return _.where(this.predefinedValues, { defaultValue: true });
	            }
	        },
	        getPredefinedValue: {
	            value: function getPredefinedValue(value) {
	                return _.findWhere(this.predefinedValues, { value: value });
	            }
	        },
	        addPredefinedValue: {
	            value: function addPredefinedValue(newValue) {
	                this.predefinedValues.push({ value: newValue, defaultValue: false });
	            }
	        }
	    });
	
	    return Property;
	})();
	
	// Create an array and map of types for easy access
	var anyValue = { value: "ANY_VALUE", text: "Any Value" };
	var singleSelect = { value: "SINGLE_SELECT", text: "Single Select" };
	var multiSelect = { value: "MULTI_SELECT", text: "Multi Select" };
	
	Property.propertyTypes = [anyValue, singleSelect, multiSelect];
	Property.propertyTypesMap = {
	    ANY_VALUE: anyValue,
	    SINGLE_SELECT: singleSelect,
	    MULTI_SELECT: multiSelect
	};
	
	function PropertyFactory() {
	    return Property;
	}
	
	var PropertySet = exports.PropertySet = (function () {
	    function PropertySet(data) {
	        _classCallCheck(this, PropertySet);
	
	        data = data || {};
	        data.properties = data.properties || [];
	        angular.extend(this, data);
	        this.properties = this.properties.map(function (property) {
	            return new Property(property);
	        });
	    }
	
	    _createClass(PropertySet, {
	        getPropertyByName: {
	            value: function getPropertyByName(propertyName) {
	                return _.findWhere(this.properties, { name: propertyName });
	            }
	        },
	        addProperty: {
	            value: function addProperty(property) {
	                this.properties.push(property);
	            }
	        },
	        removeProperty: {
	            value: function removeProperty(propertyName) {
	                _.remove(this.properties, { name: propertyName });
	            }
	        }
	    });
	
	    return PropertySet;
	})();
	
	function PropertySetFactory() {
	    return PropertySet;
	}

/***/ }),
/* 18 */
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
	
	exports.BackupDao = BackupDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function BackupDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.BACKUP + "/:key/:action").setCustomActions({
	        "delete": {
	            params: { key: "@key" }
	        },
	        get: {
	            params: { key: "@key" }
	        },
	        update: {
	            params: { key: "@key" }
	        },
	        runNow: {
	            method: "POST",
	            params: { key: "@key", action: "runnow" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var BrowseFilesDao = exports.BrowseFilesDao = (function (_ArtifactoryDao) {
	    function BrowseFilesDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, BrowseFilesDao);
	
	        _get(Object.getPrototypeOf(BrowseFilesDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.BROWSE_FILESYSTEM);
	        this.setCustomActions({
	            query: {
	                method: "GET",
	                params: { path: "@path" }
	            }
	        });
	    }
	
	    _inherits(BrowseFilesDao, _ArtifactoryDao);
	
	    return BrowseFilesDao;
	})(ArtifactoryDao);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var SystemInfoDao = exports.SystemInfoDao = (function (_ArtifactoryDao) {
	    function SystemInfoDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, SystemInfoDao);
	
	        _get(Object.getPrototypeOf(SystemInfoDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.SYSTEM_INFO);
	    }
	
	    _inherits(SystemInfoDao, _ArtifactoryDao);
	
	    return SystemInfoDao;
	})(ArtifactoryDao);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var SecurityDescriptorDao = exports.SecurityDescriptorDao = (function (_ArtifactoryDao) {
	    function SecurityDescriptorDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, SecurityDescriptorDao);
	
	        _get(Object.getPrototypeOf(SecurityDescriptorDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.SECURITY_DESCRIPTOR);
	
	        this.setCustomActions({
	            get: {
	                method: "GET",
	                notifications: true
	            },
	            update: {
	                method: "PUT",
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(SecurityDescriptorDao, _ArtifactoryDao);
	
	    return SecurityDescriptorDao;
	})(ArtifactoryDao);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var ConfigDescriptorDao = exports.ConfigDescriptorDao = (function (_ArtifactoryDao) {
	    function ConfigDescriptorDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, ConfigDescriptorDao);
	
	        _get(Object.getPrototypeOf(ConfigDescriptorDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.CONFIG_DESCRIPTOR);
	        this.setCustomActions({
	            get: {
	                method: "GET",
	                notifications: true
	            },
	            update: {
	                method: "PUT",
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(ConfigDescriptorDao, _ArtifactoryDao);
	
	    return ConfigDescriptorDao;
	})(ArtifactoryDao);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var IndexerDao = exports.IndexerDao = (function (_ArtifactoryDao) {
	    function IndexerDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, IndexerDao);
	
	        _get(Object.getPrototypeOf(IndexerDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.INDEXER);
	
	        this.setCustomActions({
	            run: {
	                method: "POST",
	                notifications: true
	            },
	            save: {
	                method: "PUT",
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(IndexerDao, _ArtifactoryDao);
	
	    return IndexerDao;
	})(ArtifactoryDao);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var StorageSummaryDao = exports.StorageSummaryDao = (function (_ArtifactoryDao) {
	    function StorageSummaryDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, StorageSummaryDao);
	
	        _get(Object.getPrototypeOf(StorageSummaryDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.STORAGE_SUMMARY);
	    }
	
	    _inherits(StorageSummaryDao, _ArtifactoryDao);
	
	    return StorageSummaryDao;
	})(ArtifactoryDao);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	var ARCHIVE_MARKER = "!";
	var COMPACT_FOLDERS_KEY = "COMPACT_FOLDERS";
	
	var TreeBrowserDao = exports.TreeBrowserDao = (function () {
	    function TreeBrowserDao(RESOURCE, ArtifactoryHttpClient, $q, $injector, ArtifactoryStorage, FooterDao) {
	        _classCallCheck(this, TreeBrowserDao);
	
	        this.$q = $q;
	        this.TreeNode = $injector.get("TreeNode");
	        this.RESOURCE = RESOURCE;
	        this.footerDao = FooterDao;
	        this.artifactoryHttpClient = ArtifactoryHttpClient;
	        this.artifactoryStorage = ArtifactoryStorage;
	        this.compactFolders = ArtifactoryStorage.getItem(COMPACT_FOLDERS_KEY, /* defaultValue = */true);
	        this.roots = null;
	    }
	
	    _createClass(TreeBrowserDao, {
	        setCompactFolders: {
	            value: function setCompactFolders(value) {
	                this.compactFolders = value;
	                this.artifactoryStorage.setItem(COMPACT_FOLDERS_KEY, this.compactFolders);
	            }
	        },
	        getCompactFolders: {
	            value: function getCompactFolders() {
	                return this.compactFolders;
	            }
	        },
	        getRoots: {
	
	            // get all repositories (roots) and cache them
	            // or return the cached promise
	
	            value: function getRoots(_x, continueState, filter, sorting, mustInclude, repositoryKeys) {
	                var force = arguments[0] === undefined ? false : arguments[0];
	
	                if (force || !this.roots) {
	                    this.roots = this._loadChildren({ type: "root" }, null, continueState, filter, sorting, mustInclude, repositoryKeys);
	                }
	                return this.roots;
	            }
	        },
	        getSetMeUpRepos: {
	            value: function getSetMeUpRepos(payload) {
	                this.roots = this._loadSetMeUpRepos(payload);
	                return this.roots;
	            }
	        },
	        _loadSetMeUpRepos: {
	            value: function _loadSetMeUpRepos(node, parent) {
	                var _this = this;
	
	                return this.artifactoryHttpClient.post(this.RESOURCE.TREE_BROWSER + "?compacted=true&$no_spinner=true", node).then(function (result) {
	                    var response = _this._transformData(result.data.data, parent);
	                    response.continueState = result.data.continueState;
	                    return response;
	                });
	            }
	        },
	        invalidateRoots: {
	
	            // invalidate the cached promise
	
	            value: function invalidateRoots() {
	                this.roots = null;
	            }
	        },
	        findRepo: {
	            value: function findRepo(repoKey) {
	                return this.getRoots().then(function (roots) {
	                    return _.findWhere(roots, { repoKey: repoKey });
	                });
	            }
	        },
	        findNodeByFullPath: {
	            value: function findNodeByFullPath(path) {
	                var _this = this;
	
	                var includeArchives = arguments[1] === undefined ? true : arguments[1];
	
	                if (typeof path === "string") path = path.split("/");
	                path = path.map(function (pathElement) {
	                    return _.trimRight(pathElement, ARCHIVE_MARKER);
	                });
	                if (!path.length) {
	                    return this.$q.when(null);
	                }var pathElement = path.shift();
	                // Find child:
	                return this.getRoots(false, null, null, null, pathElement).then(function (roots) {
	                    roots = roots.data;
	                    return _.findWhere(roots, { text: pathElement });
	                }).then(function (root) {
	                    // Recursively look for rest of fullpath:
	                    if (root) return root.findNodeByPath(path, 0, includeArchives);else return _this;
	                })["catch"](function () {
	                    return null;
	                });
	            }
	        },
	        _loadChildren: {
	            value: function _loadChildren(node, parent, continueState, _x, sorting, mustInclude, repositoryKeys) {
	                var _this = this;
	
	                var filter = arguments[3] === undefined ? {} : arguments[3];
	
	                var compact = this.compactFolders && !node.trashcan; //Don't compact the repos level under trashcan
	
	                var footerData = this.footerDao.getInfo();
	
	                if (!footerData.treebrowserFolderCompact) compact = false;
	
	                //return this.artifactoryHttpClient.post(this.RESOURCE.TREE_BROWSER + '?compacted=' + (compact), node)
	                return this.artifactoryHttpClient.post(this.RESOURCE.TREE_BROWSER + "?compacted=" + compact + "&$no_spinner=true", _.extend({}, node, { /*limit: 5, */continueState: continueState, mustInclude: mustInclude, repositoryKeys: repositoryKeys }, filter, sorting)).then(function (result) {
	                    return {
	                        data: _this._transformData(result.data.data, parent),
	                        continueState: result.data.continueState
	                    };
	                });
	            }
	        },
	        _transformData: {
	
	            // Wrap with TreeNode
	            // Recursively go over children if exist
	            // Assign the parent node
	
	            value: function _transformData(data, parent) {
	                var _this = this;
	
	                return data.map(function (node) {
	                    node = new _this.TreeNode(node);
	                    node.parent = parent;
	                    if (_.isArray(node.children)) {
	                        node.children = _this.$q.when(_this._transformData(node.children, node));
	                    }
	                    return node;
	                });
	            }
	        }
	    });
	
	    return TreeBrowserDao;
	})();

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.TreeNodeFactory = TreeNodeFactory;
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
	var ARCHIVE_MARKER = "!";
	
	function TreeNodeFactory($q, $injector, RESOURCE, ArtifactoryHttpClient, ArtifactWatchesDao, ArtifactActionsDao, NativeBrowser, ArtifactXrayDao, ArtifactoryFeatures) {
	    return function (data) {
	        return new TreeNode(data, $q, $injector, RESOURCE, ArtifactoryHttpClient, ArtifactWatchesDao, ArtifactActionsDao, NativeBrowser, ArtifactXrayDao, ArtifactoryFeatures);
	    };
	}
	
	var TreeNode = (function () {
	    function TreeNode(data, $q, $injector, RESOURCE, ArtifactoryHttpClient, ArtifactWatchesDao, ArtifactActionsDao, NativeBrowser, ArtifactXrayDao, ArtifactoryFeatures) {
	        _classCallCheck(this, TreeNode);
	
	        this.$q = $q;
	        this.treeBrowserDao = $injector.get("TreeBrowserDao");
	        this.RESOURCE = RESOURCE;
	        this.artifactoryHttpClient = ArtifactoryHttpClient;
	        this.artifactWatchesDao = ArtifactWatchesDao;
	        this.artifactActionsDao = ArtifactActionsDao;
	        this.nativeBrowser = NativeBrowser;
	        this.ArtifactXrayDao = ArtifactXrayDao;
	        this.features = ArtifactoryFeatures;
	
	        // Wrap the data
	        angular.extend(this, data);
	
	        if (this.children) {
	            this.hasChild = true;
	        }
	        this._initIconType();
	        this._initFullpath();
	
	        this.className = "TreeNode";
	
	        this.updateFavoriteState();
	    }
	
	    _createClass(TreeNode, {
	        updateFavoriteState: {
	            value: function updateFavoriteState() {
	                var isFav = false;
	                if (!this.isRepo()) {
	                    isFav = false;
	                } else if (localStorage.favoritesRepos) {
	                    var favRepos = JSON.parse(localStorage.favoritesRepos);
	                    if (_.contains(favRepos.favoritesRepos, this.repoKey)) {
	                        isFav = true;
	                    }
	                }
	                this.isFav = isFav;
	            }
	        },
	        _initIconType: {
	            value: function _initIconType() {
	                if (!this.icon && this.compacted && this.isLocalFolder()) {
	                    this.iconType = "compactedFolder";
	                } else if (this.isTrashcan()) {
	                    this.iconType = "trashcan";
	                } else if (this.isRepoInTrashcan()) {
	                    this.iconType = "localRepository";
	                } else if (this.isBuildsInfoRepo()) {
	                    this.iconType = "buildInfoRepository";
	                } else if (this.isSupportBundleRepo()) {
	                    this.iconType = "supportBundleRepository";
	                } else if (this.isRepo()) {
	                    switch (this.repoType) {
	                        case "virtual":
	                            this.iconType = "virtualRepository";
	                            break;
	                        case "distribution":
	                            this.iconType = "distributionRepository";
	                            break;
	                        case "releaseBundles":
	                            this.iconType = "distributionRepository";
	                            break;
	                        case "remote":
	                            this.iconType = "remoteRepository";
	                            break;
	                        case "cached":
	                            this.iconType = "cachedRepository";
	                            break;
	                        default:
	                            this.iconType = "localRepository";
	                    }
	                } else {
	                    this.iconType = this.mimeType || this.icon || this.type;
	                }
	            }
	        },
	        _initFullpath: {
	            value: function _initFullpath() {
	                if (this.path == "") {
	                    this.fullpath = this.repoKey;
	                } else {
	                    var path = this.path;
	                    if (this.archivePath) {
	                        path = path.replace(this.archivePath, this.archivePath + ARCHIVE_MARKER);
	                    }
	                    this.fullpath = this.repoKey + "/" + path;
	                }
	            }
	        },
	        getRoot: {
	            value: function getRoot() {
	                return this.parent ? this.parent.getRoot() : this;
	            }
	        },
	        findNodeByPath: {
	            value: function findNodeByPath(path, startIndex) {
	                var _this = this;
	
	                var includeArchives = arguments[2] === undefined ? true : arguments[2];
	
	                if (startIndex === path.length) {
	                    return this;
	                }
	                if (this.isArchive() && !includeArchives) {
	                    return this;
	                }
	                // Find child:
	                return this.getChildren(true, null, path[startIndex]).then(function (children) {
	                    children = children.data || children;
	                    while (startIndex != path.length) {
	                        startIndex++;
	                        var partialPath = path.slice(0, startIndex).join("/");
	                        // TODO: remove second condition after Chen fixes server. Currently sometimes server returns path that ends with '/'
	                        var child = _.findWhere(children, { path: partialPath }) || _.findWhere(children, { path: partialPath + "/" });
	                        if (child) {
	                            return child;
	                        }
	                    }
	                }).then(function (child) {
	                    // Recursively look for rest of path:
	                    if (child) {
	                        return child.findNodeByPath(path, startIndex, includeArchives);
	                    } else {
	                        return _this;
	                    }
	                })["catch"](function () {
	                    return _this;
	                });
	            }
	        },
	        isLocal: {
	            value: function isLocal() {
	                return this.local;
	            }
	        },
	        isFile: {
	            value: function isFile() {
	                return this.type == "file" || this.type == "virtualRemoteFile";
	            }
	        },
	        isLocalFolder: {
	            value: function isLocalFolder() {
	                return this.type == "folder";
	            }
	        },
	        isFolder: {
	            value: function isFolder() {
	                return this.isLocalFolder() || this.type === "virtualRemoteFolder";
	            }
	        },
	        isRepo: {
	            value: function isRepo() {
	                return this.type === "repository" || this.type === "virtualRemoteRepository";
	            }
	        },
	        isFavorite: {
	            value: function isFavorite() {
	                return this.isFav;
	            }
	        },
	        isBuildsInfoRepo: {
	            value: function isBuildsInfoRepo() {
	                return this.isRepo() && this.repoPkgType === "BuildInfo";
	            }
	        },
	        isSupportBundleRepo: {
	            value: function isSupportBundleRepo() {
	                return this.isRepo() && this.repoPkgType === "Support";
	            }
	        },
	        isInSupportBundle: {
	            value: function isInSupportBundle() {
	                return !this.isRepo() && this.repoType === "supportBundles";
	            }
	        },
	        isTrashcan: {
	            value: function isTrashcan() {
	                return this.isRepo() && this.repoType === "trash";
	            }
	        },
	        isInTrashcan: {
	            value: function isInTrashcan() {
	                return !this.isRepo() && this.repoType === "trash";
	            }
	        },
	        isRepoInTrashcan: {
	            value: function isRepoInTrashcan() {
	                return this.isInTrashcan() && !_.contains(this.path, "/");
	            }
	        },
	        isArchive: {
	            value: function isArchive() {
	                return typeof this.fileType !== "undefined" && this.fileType === "archive";
	            }
	        },
	        isInsideArchive: {
	            value: function isInsideArchive() {
	                return this.archivePath;
	            }
	        },
	        load: {
	
	            // If tabs or actions don't exist already - fetch them from the server
	
	            value: function load() {
	                var _this = this;
	
	                var _self = arguments[0] === undefined ? this : arguments[0];
	
	                var newPath = this.type === "folder" && this.path.substr(-1) != "/" ? this.path + "/" : this.path;
	                if (this.tabs || this.actions) {
	                    return this.$q.when(this);
	                } else {
	                    var data = {
	                        type: this.type,
	                        repoPath: this.repoKey + "/" + newPath,
	                        repoType: this.repoType || "local",
	                        repoPkgType: this.repoPkgType,
	                        cached: this.cached
	                    };
	                    return this.artifactoryHttpClient.post(this.RESOURCE.TREE_BROWSER + "/tabsAndActions", data).then(function (response) {
	                        _this.tabs = response.data.tabs;
	                        _this.actions = response.data.actions;
	
	                        var xrayTab = _.find(_this.tabs, function (tab) {
	                            return tab.name === "Xray";
	                        });
	
	                        if (xrayTab) {
	
	                            _this.ArtifactXrayDao.isArtifactBlockedAsync({ repoKey: _this.repoKey, path: response.data.repoPath.path }).$promise.then(function (response) {}, function (err) {
	                                xrayTab["class"] = "marked";
	                            });
	                        }
	                        if (_this.features.isJCRDemo() && _this.path.indexOf("manifest.json") > -1) {
	                            _this.tabs.push({ name: "Xray", feature: "xray" });
	                        }
	
	                        var removeIndex = _this.actions.indexOf(_.findWhere(_this.actions, { name: "NativeBrowser" }));
	                        if (removeIndex !== -1) {
	                            _this.actions.splice(removeIndex, 1);
	                        }
	
	                        var index = _this.actions.indexOf(_.findWhere(_this.actions, { name: "Watch" }));
	                        if (index === -1) {
	                            index = _this.actions.indexOf(_.findWhere(_this.actions, { name: "Unwatch" }));
	                        }
	                        if (index === -1) {
	                            index = _this.actions.indexOf(_.findWhere(_this.actions, { name: "Move" }));
	                        }
	                        if (index === -1) {
	                            index = _this.actions.indexOf(_.findWhere(_this.actions, { name: "Refresh" }));
	                        }
	                        if (_this.nativeBrowser.isAllowed(_this)) {
	                            _this.actions.splice(index + 1, 0, {
	                                icon: "icon-simple-browser",
	                                name: "NativeBrowser",
	                                title: "Native Browser"
	                            });
	                        }
	
	                        var distAction = _.findWhere(_this.actions, { name: "Distribute" });
	                        if (distAction && _this.repoType === "distribution") {
	                            distAction.name = "Redistribute";
	                        }
	
	                        return _this;
	                    });
	                }
	            }
	        },
	        getDownloadPath: {
	            value: function getDownloadPath() {
	                var _this = this;
	
	                if (!this.downloadPathPromise) {
	                    var data = {
	                        repoKey: this.repoKey,
	                        path: encodeURIComponent(this.downloadPath || this.path).replace(/%2F/g, "/")
	                    };
	                    this.downloadPathPromise = this.artifactActionsDao.perform({ action: "download" }, data).$promise.then(function (response) {
	                        _this.actualDownloadPath = response.data.path;
	                        if (response.data.xrayValidation) {
	                            _this.xrayShouldValidate = response.data.xrayValidation;
	                        }
	                    });
	                }
	                return this.downloadPathPromise;
	            }
	        },
	        refreshWatchActions: {
	            value: function refreshWatchActions() {
	                var _this = this;
	
	                // Can't watch archive / remote files
	                if (!this.isInsideArchive() && this.isLocal() && !this.isTrashcan() && !this.isInTrashcan() && !this.isSupportBundleRepo() && !this.isInSupportBundle()) {
	                    return this.artifactWatchesDao.status({ repoKey: this.repoKey, path: this.path }).$promise.then(function (action) {
	                        //                    console.log(action);
	                        var previousAction = _this._getWatchAction();
	                        if (action && action.name) {
	                            // Replace the previous action with the new one
	                            if (previousAction) {
	                                previousAction.name = action.name;
	                            } // Or add the new one if didn't exist before
	                            else {
	                                _this.actions.push(action);
	                            }
	                        } else {
	                            // Remove the previous action if there is no new action
	                            if (previousAction) {
	                                _.remove(_this.actions, previousAction);
	                            }
	                        }
	                        return _this;
	                    });
	                } else {
	                    return this.$q.when(this);
	                }
	            }
	        },
	        _getWatchAction: {
	            value: function _getWatchAction() {
	                return _.find(this.actions, function (action) {
	                    return _.contains(["Watch", "Unwatch"], action.name);
	                });
	            }
	        },
	        invalidateChildren: {
	            value: function invalidateChildren() {
	                this.children = null;
	            }
	        },
	        invalidateParent: {
	            value: function invalidateParent() {
	                if (this.parent) {
	                    this.parent.invalidateChildren();
	                } else {
	                    this.treeBrowserDao.invalidateRoots();
	                }
	            }
	        },
	        getChildren: {
	
	            // Get the children of this node and cache the result
	            // or return the cached promise
	
	            value: function getChildren(_x, continueState, mustInclude) {
	                var force = arguments[0] === undefined ? false : arguments[0];
	
	                // Server errors if requesting children of file
	                // (simple browser always requests getChildren of current node)
	                if (this.isFile() && !this.isArchive()) {
	                    return this.$q.when(null);
	                }
	
	                if (!this.children || force && !this.isInsideArchive() || this.isTrashcan()) {
	                    // Load children from server, and cache them
	                    this.children = this.treeBrowserDao._loadChildren({
	                        type: "junction",
	                        repoType: this.repoType,
	                        repoKey: this.repoKey,
	                        path: this.path,
	                        text: this.text,
	                        trashcan: this.isTrashcan()
	                    }, this, continueState, {}, null, mustInclude);
	                }
	                return this.children;
	            }
	        }
	    });
	
	    return TreeNode;
	})();

/***/ }),
/* 27 */
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
	
	exports.RepoDataDao = RepoDataDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function RepoDataDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.REPO_DATA).setCustomActions({
	        getAllForPerms: {
	            method: "GET"
	        },
	        getAll: {
	            method: "GET",
	            isArray: true,
	            path: RESOURCE.REPO_DATA + "?user=true"
	        },
	        getForSearch: {
	            method: "GET",
	            path: RESOURCE.REPO_DATA + "?search=true"
	        },
	        getForBackup: {
	            method: "GET",
	            path: RESOURCE.REPO_DATA + "?backup=true"
	        },
	        getForPackageSearch: {
	            method: "GET",
	            path: RESOURCE.REPO_DATA + "?packageSearch=true"
	        }
	    }).getInstance();
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var CronTimeDao = exports.CronTimeDao = (function (_ArtifactoryDao) {
	    function CronTimeDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, CronTimeDao);
	
	        _get(Object.getPrototypeOf(CronTimeDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.CRON_TIME);
	        this.setCustomActions({
	            get: {
	                params: {
	                    cron: "@cron",
	                    isReplication: "@isReplication"
	                }
	            }
	        });
	    }
	
	    _inherits(CronTimeDao, _ArtifactoryDao);
	
	    return CronTimeDao;
	})(ArtifactoryDao);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var DateFormatDao = exports.DateFormatDao = (function (_ArtifactoryDao) {
	    function DateFormatDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, DateFormatDao);
	
	        _get(Object.getPrototypeOf(DateFormatDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.DATE_FORMAT);
	        this.setCustomActions({
	            get: {
	                params: {
	                    dateformat: "@dateformat"
	                }
	            }
	        });
	    }
	
	    _inherits(DateFormatDao, _ArtifactoryDao);
	
	    return DateFormatDao;
	})(ArtifactoryDao);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var NameValidatorDao = exports.NameValidatorDao = (function (_ArtifactoryDao) {
	    function NameValidatorDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, NameValidatorDao);
	
	        _get(Object.getPrototypeOf(NameValidatorDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.NAME_VALIDATOR);
	        this.setCustomActions({
	            get: {
	                params: {
	                    name: "@name"
	                }
	            }
	        });
	    }
	
	    _inherits(NameValidatorDao, _ArtifactoryDao);
	
	    return NameValidatorDao;
	})(ArtifactoryDao);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var UniqueIdValidatorDao = exports.UniqueIdValidatorDao = (function (_ArtifactoryDao) {
	    function UniqueIdValidatorDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, UniqueIdValidatorDao);
	
	        _get(Object.getPrototypeOf(UniqueIdValidatorDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.UNIQUE_ID_VALIDATOR);
	        this.setCustomActions({
	            get: {
	                params: {
	                    id: "@id"
	                }
	            }
	        });
	    }
	
	    _inherits(UniqueIdValidatorDao, _ArtifactoryDao);
	
	    return UniqueIdValidatorDao;
	})(ArtifactoryDao);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var XmlNameDao = exports.XmlNameDao = (function (_ArtifactoryDao) {
	    function XmlNameDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, XmlNameDao);
	
	        _get(Object.getPrototypeOf(XmlNameDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.XML_NAME_VALIDATOR);
	        this.setCustomActions({
	            get: {
	                params: {
	                    xmlName: "@xmlName"
	                }
	            }
	        });
	    }
	
	    _inherits(XmlNameDao, _ArtifactoryDao);
	
	    return XmlNameDao;
	})(ArtifactoryDao);

/***/ }),
/* 33 */
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
	
	exports.ArtifactGeneralDao = ArtifactGeneralDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactGeneralDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.ARTIFACT_GENERAL).setCustomActions({
	        bintray: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT_GENERAL_BINTRAY,
	            params: { sha1: "@sha1", $no_spinner: true }
	        },
	        bintrayDist: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT_GENERAL_BINTRAY_DIST,
	            params: { $no_spinner: true }
	        },
	        artifactsCount: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT_GENERAL + "/artifactsCount",
	            params: { $no_spinner: true },
	            notifications: false
	        }
	    }).getInstance();
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var ArtifactPermissionsDao = exports.ArtifactPermissionsDao = (function (_ArtifactoryDao) {
	    function ArtifactPermissionsDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, ArtifactPermissionsDao);
	
	        _get(Object.getPrototypeOf(ArtifactPermissionsDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.ARTIFACT_PERMISSIONS);
	        this.setCustomActions({
	            query: {
	                isArray: false
	            }
	        });
	    }
	
	    _inherits(ArtifactPermissionsDao, _ArtifactoryDao);
	
	    return ArtifactPermissionsDao;
	})(ArtifactoryDao);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var ArtifactBuildsDao = exports.ArtifactBuildsDao = (function (_ArtifactoryDao) {
	    function ArtifactBuildsDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, ArtifactBuildsDao);
	
	        _get(Object.getPrototypeOf(ArtifactBuildsDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setPath(RESOURCE.ARTIFACT_BUILDS);
	        this.setCustomActions({
	            query: {
	                isArray: false
	            },
	            getJson: {
	                path: RESOURCE.ARTIFACT_BUILDS + "/json",
	                transformResponse: function (data) {
	                    return { json: data };
	                }
	            }
	        });
	    }
	
	    _inherits(ArtifactBuildsDao, _ArtifactoryDao);
	
	    return ArtifactBuildsDao;
	})(ArtifactoryDao);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var ArtifactViewSourceDao = exports.ArtifactViewSourceDao = (function (_ArtifactoryDao) {
	    function ArtifactViewSourceDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, ArtifactViewSourceDao);
	
	        _get(Object.getPrototypeOf(ArtifactViewSourceDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.ARTIFACT_VIEW_SOURCE);
	    }
	
	    _inherits(ArtifactViewSourceDao, _ArtifactoryDao);
	
	    return ArtifactViewSourceDao;
	})(ArtifactoryDao);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var ArtifactPropertyDao = exports.ArtifactPropertyDao = (function (_ArtifactoryDao) {
	    function ArtifactPropertyDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, ArtifactPropertyDao);
	
	        _get(Object.getPrototypeOf(ArtifactPropertyDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.ARTIFACT_PROPERTIES + "/:name");
	        this.setCustomActions({
	            query: {
	                isArray: false
	            },
	            get: {
	                params: { name: "@name" }
	            },
	            update: {
	                params: { name: "@name" }
	            },
	            "delete": {
	                params: { name: "@name" }
	            },
	            deleteBatch: {
	                url: RESOURCE.API_URL + "/deleteproperties",
	                method: "POST",
	                notifications: true
	            }
	        });
	    }
	
	    _inherits(ArtifactPropertyDao, _ArtifactoryDao);
	
	    return ArtifactPropertyDao;
	})(ArtifactoryDao);

/***/ }),
/* 38 */
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
	
	exports.ArtifactWatchesDao = ArtifactWatchesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactWatchesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.ARTIFACT_WATCHES + "/:name").setCustomActions({
	        "delete": {
	            method: "POST",
	            path: RESOURCE.ARTIFACT_WATCHES + "/remove"
	        },
	        status: {
	            path: RESOURCE.ARTIFACT_WATCHES + "/status"
	        }
	    }).getInstance();
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.ArtifactXrayDao = ArtifactXrayDao;
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
	
	var ArtifactXrayDao = __webpack_require__(2).ArtifactXrayDao;
	
	function ArtifactXrayDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.ARTIFACT_XRAY).setCustomActions({
	        getData: {
	            params: {
	                repoKey: "@repoKey",
	                path: "@path"
	            },
	            notifications: true
	        },
	        isBlocked: {
	            path: RESOURCE.ARTIFACT_XRAY + "/isBlocked",
	            params: {
	                repoKey: "@repoKey",
	                path: "@path"
	            },
	            notifications: true
	        },
	        isArtifactBlockedAsync: {
	            path: RESOURCE.ARTIFACT_XRAY + "/isBlocked",
	            params: {
	                $no_spinner: true,
	                repoKey: "@repoKey",
	                path: "@path"
	            }
	        }
	    }).getInstance();
	}

/***/ }),
/* 40 */
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
	
	exports.ArtifactActionsDao = ArtifactActionsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactActionsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.ARTIFACT_ACTIONS + "/:action").setCustomActions({
	        perform: {
	            params: { action: "@action" },
	            notifications: true
	        },
	        performGet: {
	            method: "GET",
	            params: { action: "@action" },
	            notifications: true
	        },
	        dryRun: {
	            params: { action: "@action" }
	        },
	        getDeleteVersions: {
	            method: "GET",
	            path: RESOURCE.ARTIFACT_ACTIONS + "/deleteversions",
	            isArray: false,
	            notifications: true
	        },
	        getSha256: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT_ACTIONS + "/addSha256",
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var PredefineDao = exports.PredefineDao = (function (_ArtifactoryDao) {
	    function PredefineDao($resource, RESOURCE, ArtifactoryDaoFactory) {
	        _classCallCheck(this, PredefineDao);
	
	        _get(Object.getPrototypeOf(PredefineDao.prototype), "constructor", this).call(this, $resource, RESOURCE, ArtifactoryDaoFactory);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.PREDEFINE_VALUES + "/:name");
	        this.setCustomActions({
	            get: {
	                params: { name: "@name" }
	            }
	        });
	    }
	
	    _inherits(PredefineDao, _ArtifactoryDao);
	
	    return PredefineDao;
	})(ArtifactoryDao);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var RepoPropertySetDao = exports.RepoPropertySetDao = (function (_ArtifactoryDao) {
	    function RepoPropertySetDao($resource, RESOURCE, ArtifactoryDaoFactory) {
	        _classCallCheck(this, RepoPropertySetDao);
	
	        _get(Object.getPrototypeOf(RepoPropertySetDao.prototype), "constructor", this).call(this, $resource, RESOURCE, ArtifactoryDaoFactory);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.REPO_PROPERTY_SET);
	    }
	
	    _inherits(RepoPropertySetDao, _ArtifactoryDao);
	
	    return RepoPropertySetDao;
	})(ArtifactoryDao);

/***/ }),
/* 43 */
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
	
	exports.ArtifactSearchDao = ArtifactSearchDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactSearchDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.ARTIFACT_SEARCH + "/:search/:action").setCustomActions({
	        fetch: {
	            params: { search: "@search" },
	            notifications: true
	        },
	        get: {
	            method: "GET",
	            isArray: true,
	            params: {
	                action: "@action",
	                search: "@search"
	            },
	            notifications: true
	        },
	        "delete": {
	            method: "POST",
	            params: { search: "deleteArtifact" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 44 */
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
	
	exports.ArtifactPackageSearchDao = ArtifactPackageSearchDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactPackageSearchDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.ARTIFACT_SEARCH + "/pkg/:param").setCustomActions({
	        availablePackages: {
	            method: "GET",
	            isArray: true,
	            params: { param: "availablePackages" }
	        },
	        queryFields: {
	            method: "GET",
	            isArray: true,
	            params: { param: "@packageType" }
	        },
	        runQuery: {
	            method: "POST",
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 45 */
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
	
	exports.DependencyDeclarationDao = DependencyDeclarationDao;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function DependencyDeclarationDao(RESOURCE, ArtifactoryDaoFactory) {
	  return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.DEPENDENCY_DECLARATION).getInstance();
	}

/***/ }),
/* 46 */
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
	
	exports.ArtifactDeployDao = ArtifactDeployDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactDeployDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.ARTIFACT + "/:action").setCustomActions({
	        post: {
	            method: "POST",
	            params: {
	                action: "@action"
	            },
	            notifications: true
	        },
	        cancelUpload: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT + "/cancelupload"
	        },
	        postBundle: {
	            method: "POST",
	            path: RESOURCE.ARTIFACT + "/:action/bundle",
	            params: {
	                action: "@action"
	            },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 47 */
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
	
	exports.ArtifactViewsDao = ArtifactViewsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactViewsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.VIEWS + "/:view").setCustomActions({
	        fetch: {
	            method: "POST",
	            params: { view: "@view" }
	        },
	        getDockerProxySnippet: {
	            method: "GET",
	            path: RESOURCE.VIEWS + "/dockerproxy/:repoKey",
	            params: { repoKey: "@repoKey" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var VERSION_INFO_KEY = "VERSION_INFO";
	
	var FooterDao = exports.FooterDao = (function () {
	    function FooterDao(RESOURCE, ArtifactoryDaoFactory, ArtifactoryStorage, $timeout, JFrogEventBus) {
	        _classCallCheck(this, FooterDao);
	
	        this.storage = ArtifactoryStorage;
	        this.$timeout = $timeout;
	        this.JFrogEventBus = JFrogEventBus;
	        this._resource = ArtifactoryDaoFactory().setPath(RESOURCE.FOOTER).getInstance();
	        this.retries = 0;
	    }
	
	    _createClass(FooterDao, {
	        get: {
	            value: function get() {
	                var _this = this;
	
	                var force = arguments[0] === undefined ? false : arguments[0];
	
	                if (this.retries >= 10) {
	                    return this.cached;
	                }if (!this.cached || force) {
	                    this.cached = this._resource.get().$promise.then(function (info) {
	                        return _this._info = info;
	                    });
	                }
	
	                //Fix for RTFACT-9873
	                if (!this._info) {
	                    this.$timeout(function () {
	                        if (!_this._info) {
	                            _this.retries++;
	                            _this.get(true).then(function () {
	                                _this.JFrogEventBus.dispatch(EVENTS.FOOTER_DATA_UPDATED);
	                            });
	                        } else if (_this._info) {
	                            _this.retries = 0;
	                        }
	                    }, 400);
	                } else if (this._info) {
	                    this.retries = 0;
	                }
	
	                return this.cached;
	            }
	        },
	        getInfo: {
	            value: function getInfo() {
	                return this._info;
	            }
	        }
	    });
	
	    return FooterDao;
	})();

/***/ }),
/* 49 */,
/* 50 */
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
	
	exports.CrowdIntegrationDao = CrowdIntegrationDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function CrowdIntegrationDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.CROWD).setCustomActions({
	        test: {
	            method: "POST",
	            path: RESOURCE.CROWD + "/test",
	            notifications: true
	        },
	        refresh: {
	            method: "POST",
	            path: RESOURCE.CROWD + "/refresh/:name",
	            params: { name: "@name" },
	            notifications: true
	        },
	        "import": {
	            method: "POST",
	            path: RESOURCE.CROWD + "/import",
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 51 */
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
	
	exports.ExportDao = ExportDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ExportDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.EXPORT + "/:action").setCustomActions({
	        save: {
	            method: "POST",
	            params: {
	                action: "@action"
	            },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 52 */
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
	
	exports.ImportDao = ImportDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ImportDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.IMPORT + "/:action").setCustomActions({
	        save: {
	            method: "POST",
	            params: {
	                action: "@action"
	            },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 53 */
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
	
	exports.MaintenanceDao = MaintenanceDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function MaintenanceDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.MAINTENANCE + "/:module").setCustomActions({
	        perform: {
	            params: { module: "@module" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 54 */
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
	
	exports.LdapDao = LdapDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function LdapDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.LDAP + "/:action/:key").setCustomActions({
	        save: {
	            method: "POST"
	        },
	        get: {
	            method: "GET",
	            params: { key: "@key" }
	        },
	        update: {
	            method: "PUT",
	            params: { key: "@key" }
	        },
	        "delete": {
	            method: "DELETE",
	            params: { key: "@key" }
	        },
	        test: {
	            method: "POST",
	            params: { key: "@key", action: "test" },
	            notifications: true
	        },
	        reorder: {
	            method: "POST",
	            path: RESOURCE.LDAP + "/reorder"
	        }
	    }).getInstance();
	}

/***/ }),
/* 55 */
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
	
	exports.DockerStatusDao = DockerStatusDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function DockerStatusDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.DOCKER_STATUS).setCustomActions({
	        get: {
	            method: "GET"
	        }
	    });
	}

/***/ }),
/* 56 */
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
	
	exports.LdapGroupsDao = LdapGroupsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function LdapGroupsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.LDAP_GROUPS + "/:name/:action/:username").setCustomActions({
	        get: {
	            params: { name: "@name" }
	        },
	        update: {
	            params: { name: "@name" }
	        },
	        "delete": {
	            params: { name: "@name" }
	        },
	        refresh: {
	            method: "POST",
	            isArray: true,
	            params: { name: "@name", action: "refresh", username: "@username" },
	            notifications: true
	        },
	        "import": {
	            method: "POST",
	            params: { name: "@name", action: "import" },
	            notifications: true
	        },
	        getstrategy: {
	            method: "GET",
	            params: { name: "@name", action: "strategy" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 57 */
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
	
	exports.PushToBintrayDao = PushToBintrayDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function PushToBintrayDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.PUSH_TO_BINTRAY + "/:param1/:param2/:param3/:param4").setCustomActions({
	        getBuildRepos: {
	            method: "GET"
	        },
	        getBuildPacks: {
	            method: "GET",
	            params: { param1: "build", param2: "pkg" }
	        },
	        getBuildVersions: {
	            method: "GET",
	            params: { param1: "build", param2: "versions" }
	        },
	        pushBuildToBintray: {
	            method: "POST",
	            notifications: true,
	            params: { param1: "build", param2: "@buildName", param3: "@buildNumber", param4: "@buildTime" }
	        },
	        getArtifactData: {
	            method: "GET",
	            params: { param1: "artifact" }
	        },
	        pushArtifactToBintray: {
	            method: "POST",
	            notifications: true,
	            params: { param1: "artifact", param2: "@repoKey", param3: "@path" }
	        },
	        pushDockerTagToBintray: {
	            method: "POST",
	            notifications: true,
	            params: { param1: "dockerTag", param2: "@repoKey", param3: "@path" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 58 */
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
	
	exports.DistributionDao = DistributionDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function DistributionDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.BINTRAY_DISTRIBUTION + "/:action").setCustomActions({
	        distributeArtifact: {
	            method: "POST",
	            notifications: true,
	            params: { action: "distributeArtifact" }
	        },
	        distributeBuild: {
	            method: "POST",
	            notifications: true,
	            params: { action: "distributeBuild" }
	        },
	        getAvailableDistributionRepos: {
	            method: "GET",
	            params: { action: "getAvailableDistributionRepos" },
	            notifications: true,
	            isArray: false
	        }
	    }).getInstance();
	}

/***/ }),
/* 59 */
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
	
	exports.GeneralConfigDao = GeneralConfigDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function GeneralConfigDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.GENERAL_CONFIG + "/:param").setCustomActions({
	        deleteLogo: {
	            method: "DELETE",
	            params: { param: "logo" }
	        },
	        getData: {
	            method: "GET",
	            path: RESOURCE.GENERAL_CONFIG + "/data"
	        }
	    }).getInstance();
	}

/***/ }),
/* 60 */
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
	
	exports.SigningKeysDao = SigningKeysDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SigningKeysDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.SIGNINGKEYS + "/:action").setCustomActions({
	        "delete": {
	            method: "DELETE",
	            params: { "public": "@public" }
	        },
	        post: {
	            method: "POST",
	            params: { action: "@action" },
	            notifications: true
	        },
	        postWithoutNotifications: {
	            method: "POST",
	            params: { action: "@action" },
	            notifications: false
	        },
	        put: {
	            method: "PUT",
	            params: { action: "@action" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 61 */
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
	
	exports.TrustedKeysDao = TrustedKeysDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function TrustedKeysDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.TRUSTEDKEYS).setCustomActions({
	        getTrustedKeys: {
	            method: "GET",
	            isArray: true
	        },
	        AddTrustedKey: {
	            method: "POST",
	            params: { public_key: "@key", alias: "@alias" },
	            notifications: true
	        },
	        deleteTrustedKey: {
	            path: RESOURCE.TRUSTEDKEYS + "/delete",
	            method: "POST",
	            params: { key_id: "@key_id" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 62 */
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
	
	exports.AccessTokensDao = AccessTokensDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function AccessTokensDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.ACCESSTOKENS + "/:action").setCustomActions({
	        getTokens: {
	            method: "GET",
	            params: { action: "tokens" },
	            isArray: true
	        },
	        revokeTokens: {
	            method: "POST",
	            notifications: true,
	            params: { action: "revokeTokens" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 63 */
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
	
	exports.KeystoreDao = KeystoreDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function KeystoreDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.KEYSTORE + "/:action").setCustomActions({
	        "delete": {
	            method: "DELETE",
	            params: { "public": "@public" }
	        },
	        post: {
	            method: "POST",
	            params: { action: "@action" },
	            notifications: true
	        },
	        updatePassword: {
	            method: "PUT",
	            notifications: true
	        },
	        removeKeystore: {
	            method: "DELETE",
	            notifications: true
	        },
	        removeKeypair: {
	            method: "DELETE",
	            params: { name: "@name" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 64 */
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
	
	exports.BuildsDao = BuildsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function BuildsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.BUILDS + "/:action/:subAction/:name/:number/:time/:moduleId").setCustomActions({
	
	        getData: {
	            method: "GET",
	            isArray: false,
	            params: { action: "@action", subAction: "@subAction", name: "@name", number: "@number", time: "@time", moduleId: "@moduleId" }
	        },
	        lastBuild: {
	            method: "GET",
	            isArray: false,
	            params: { action: "buildInfo", name: "@name", number: "@number" }
	        },
	        getDataArray: {
	            method: "GET",
	            isArray: true,
	            params: { action: "@action", subAction: "@subAction", name: "@name", number: "@number", time: "@time", moduleId: "@moduleId" }
	        },
	        "delete": {
	            method: "POST",
	            notifications: true,
	            params: { action: "buildsDelete" }
	        },
	        deleteAll: {
	            method: "POST",
	            notifications: true,
	            params: { action: "deleteAllBuilds" }
	        },
	        overrideLicenses: {
	            method: "PUT",
	            params: { action: "overrideLicenses", name: "@name", number: "@number", time: "@time" }
	        },
	        buildEffectivePermission: {
	            method: "GET",
	            params: { action: "buildEffectivePermission", name: "@name", number: "@buildNumber", time: "@startTime" }
	        },
	        getAllBuildsNames: {
	            method: "GET",
	            isArray: true,
	            params: { action: "names" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 65 */
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
	
	exports.BundlesDao = BundlesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function BundlesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.BUNDLES + "/:type/:name/:version").setCustomActions({
	        getData: {
	            method: "GET",
	            isArray: false,
	            params: { type: "@type", name: "@name" }
	        },
	        getBundleVersions: {
	            method: "GET",
	            isArray: false,
	            params: { type: "@type", name: "@name" }
	        },
	        getBundleData: {
	            method: "GET",
	            isArray: false,
	            params: { type: "@type", name: "@name", version: "@version" }
	        },
	        deleteBundles: {
	            method: "DELETE",
	            isArray: false,
	            params: { type: "@type", name: "@name", version: "@version" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 66 */
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
	
	exports.UserProfileDao = UserProfileDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function UserProfileDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.USER_PROFILE).setCustomActions({
	        fetch: {
	            notifications: true
	        },
	        getApiKey: {
	            method: "GET",
	            path: RESOURCE.USER_API_KEY + "/:user",
	            params: { user: "@username" },
	            authenticate: true
	        },
	        hasApiKey: {
	            method: "HEAD",
	            path: RESOURCE.USER_API_KEY + "/:user",
	            params: { user: "@username" }
	        },
	        getAndCreateApiKey: {
	            method: "POST",
	            path: RESOURCE.USER_API_KEY,
	            params: { user: "@username" },
	            authenticate: true
	        },
	        regenerateApiKey: {
	            method: "PUT",
	            path: RESOURCE.USER_API_KEY,
	            params: { user: "@username" },
	            authenticate: true
	        },
	        revokeApiKey: {
	            method: "DELETE",
	            path: RESOURCE.USER_API_KEY + "/:user",
	            params: { user: "@username" },
	            notifications: true,
	            authenticate: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var ArtifactoryDao = __webpack_require__(2).ArtifactoryDao;
	
	var PermissionsDao = exports.PermissionsDao = (function (_ArtifactoryDao) {
	    function PermissionsDao($resource, RESOURCE, artifactoryNotificationsInterceptor) {
	        _classCallCheck(this, PermissionsDao);
	
	        _get(Object.getPrototypeOf(PermissionsDao.prototype), "constructor", this).call(this, $resource, RESOURCE, artifactoryNotificationsInterceptor);
	
	        this.setUrl(RESOURCE.API_URL + RESOURCE.PERMISSION_TARGETS + "/:action/:name");
	
	        this.setCustomActions({
	            getAll: {
	                method: "GET"
	            },
	            getEntity: {
	                method: "GET",
	                params: { action: "@action", name: "@name" },
	                isArray: true
	            },
	            getResource: {
	                method: "GET",
	                params: { action: "@action", name: "@name" } },
	            getAllUsersAndGroups: {
	                method: "GET",
	                params: { action: "allUsersGroups" }
	            },
	            getPermission: {
	                method: "GET",
	                params: { name: "@name" }
	            },
	            deletePermission: {
	                method: "POST",
	                params: { action: "delete" },
	                notifications: true
	            },
	            update: {
	                method: "PUT",
	                params: { name: "@name" }
	            },
	            create: {
	                method: "POST",
	                notifications: true
	            },
	            getEntityPermissions: {
	                method: "POST",
	                isArray: true,
	                params: { action: "@entity_type", name: "@name" }
	            },
	            buildPatterns: {
	                method: "POST",
	                params: { action: "buildPatterns" }
	            },
	            getBuildGlobalBasicReadAllowed: {
	                method: "GET",
	                params: { action: "getBuildGlobalBasicReadAllowed" }
	            }
	        });
	    }
	
	    _inherits(PermissionsDao, _ArtifactoryDao);
	
	    return PermissionsDao;
	})(ArtifactoryDao);

/***/ }),
/* 68 */
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
	
	exports.ChecksumsDao = ChecksumsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ChecksumsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.CHECKSUMS + "/:action").setCustomActions({
	        fix: {
	            method: "POST",
	            params: { action: "fix" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 69 */
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
	
	exports.FilteredResourceDao = FilteredResourceDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function FilteredResourceDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.FILTERED_RESOURCE).setCustomActions({
	        setFiltered: {
	            method: "POST"
	        }
	    }).getInstance();
	}

/***/ }),
/* 70 */
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
	
	exports.ArtifactLicensesDao = ArtifactLicensesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ArtifactLicensesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.GENERAL_TAB_LICENSES + "/:action").setCustomActions({
	        getLicenses: {
	            method: "GET",
	            isArray: true
	        },
	        setLicenses: {
	            method: "PUT",
	            isArray: false,
	            path: RESOURCE.GENERAL_TAB_LICENSES + "/setLicensesOnPath",
	            notifications: true
	        },
	        scanArtifact: {
	            method: "GET",
	            isArray: true,
	            path: RESOURCE.GENERAL_TAB_LICENSES + "/scanArtifact",
	            notifications: true
	        },
	        queryCodeCenter: {
	            method: "POST",
	            params: {
	                repoKey: "@repoKey",
	                path: "@path"
	            },
	            path: RESOURCE.GENERAL_TAB_LICENSES + "/queryCodeCenter",
	            notifications: true
	        },
	        getArchiveLicenseFile: {
	            method: "GET",
	            path: RESOURCE.GENERAL_TAB_LICENSES + "/getArchiveLicenseFile",
	            transformResponse: function (data) {
	                return { data: data };
	            }
	        }
	    }).getInstance();
	}

/***/ }),
/* 71 */
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
	
	exports.HomePageDao = HomePageDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function HomePageDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setCustomActions({
	        get: {
	            method: "GET",
	            params: { $no_spinner: true }
	        }
	    }).setPath(RESOURCE.HOME_PAGE + "/widget/:widgetName").getInstance();
	}

/***/ }),
/* 72 */
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
	
	exports.SetMeUpDao = SetMeUpDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SetMeUpDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.SET_ME_UP).setCustomActions({
	        fetch: {
	            notifications: true
	        },
	        maven: {
	            path: RESOURCE.SET_ME_UP_MAVEN
	        },
	        gradle: {
	            path: RESOURCE.SET_ME_UP_GRADLE
	        },
	        ivy: {
	            path: RESOURCE.SET_ME_UP_IVY
	        },
	        maven_distribution: {
	            path: RESOURCE.SET_ME_UP_MAVEN_DISTRIBUTION,
	            method: "GET"
	        },
	        maven_snippet: {
	            path: RESOURCE.SET_ME_UP_MAVEN_SNIPPET,
	            method: "POST"
	        },
	        gradle_snippet: {
	            path: RESOURCE.SET_ME_UP_GRADLE_SNIPPET,
	            method: "POST"
	        },
	        ivy_snippet: {
	            path: RESOURCE.SET_ME_UP_IVY_SNIPPET,
	            method: "POST"
	        },
	        reverse_proxy_data: {
	            path: RESOURCE.SET_ME_UP_REVERSE_PROXY_DATA,
	            method: "GET"
	        }
	    }).getInstance();
	}

/***/ }),
/* 73 */
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
	
	exports.BasicConfigDao = BasicConfigDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function BasicConfigDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.BASIC_CONFIG).getInstance();
	}

/***/ }),
/* 74 */
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
	
	exports.SystemLogsDao = SystemLogsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SystemLogsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.SYSTEM_LOGS + "/:action").setCustomActions({
	        getLogs: {
	            method: "GET",
	            params: { action: "initialize" }
	        },
	        getLogData: {
	            method: "GET",
	            params: { action: "logData" }
	        },
	        getDownloadLink: {
	            method: "GET",
	            params: { action: "downloadFile" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 75 */
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
	
	exports.RepositoriesDao = RepositoriesDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function RepositoriesDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.REPOSITORIES).setCustomActions({
	        getRepositories: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/:type/info",
	            isArray: true,
	            params: { type: "@repoType" }
	        },
	        getRepository: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/:type/:repoKey",
	            params: { type: "@repoType", repoKey: "@repoKey" }
	        },
	        deleteRepository: {
	            method: "DELETE",
	            path: RESOURCE.REPOSITORIES + "/:repoKey/delete",
	            params: { repoKey: "@repoKey" },
	            notifications: true
	        },
	        getAvailableChoicesOptions: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/availablechoices"
	        },
	        getDefaultValues: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/defaultvalues"
	        },
	        repoKeyValidator: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/validatereponame"
	        },
	        testRemoteUrl: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/testremote",
	            notifications: true
	        },
	        detectSmartRepository: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/discoversmartrepocapabilities" },
	        testLocalReplication: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/testlocalreplication",
	            notifications: true
	        },
	        testRemoteReplication: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/testremotereplication",
	            notifications: true
	        },
	        executeReplicationNow: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/executereplicationnow",
	            params: { replicationUrl: "@replicationUrl", repoKey: "@repoKey" },
	            notifications: true
	        },
	        executeRemoteReplicationNow: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/exeucteremotereplication",
	            params: { replicationUrl: "@replicationUrl", repoKey: "@repoKey" },
	            notifications: true
	        },
	        runNowReplications: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/executeall", params: { repoKey: "@repoKey" },
	            notifications: true
	        },
	        remoteUrlToRepoMap: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/remoteUrlMap"
	        },
	        availableRepositoriesByType: {
	            method: "GET",
	            params: { type: "@type", repoKey: "@repoKey" },
	            path: RESOURCE.REPOSITORIES + "/availablerepositories"
	        },
	        indexerAvailableRepositories: {
	            method: "GET",
	            params: { type: "@type", layout: "@layout" },
	            path: RESOURCE.REPOSITORIES + "/indexeravailablerepositories"
	        },
	        getResolvedRepositories: {
	            method: "POST",
	            isArray: true,
	            params: { type: "@repoType", repoKey: "@repoKey" },
	            path: RESOURCE.REPOSITORIES + "/resolvedrepositories"
	        },
	        isReplicationValid: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/validatelocalreplication",
	            notifications: true
	        },
	        reorderRepositories: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/:repoType/reorderrepositories",
	            params: {
	                repoType: "@repoType",
	                $no_spinner: true
	            }
	        },
	        createDefaultJcenterRepo: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/createdefaultjcenterrepo",
	            notifications: true,
	            params: {
	                $no_spinner: false
	            }
	        },
	        isJcenterRepoConfigured: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/isjcenterconfigured",
	            notifications: false,
	            params: {
	                $no_spinner: true
	            }
	        },
	        saveBintrayOauthConfig: {
	            method: "PUT",
	            path: RESOURCE.REPOSITORIES + "/savebintrayoauthconfig",
	            notifications: true
	        },
	        checkBintrayAuthentication: {
	            method: "GET",
	            path: RESOURCE.REPOSITORIES + "/checkbintrayrepauth",
	            notifications: false
	        },
	        testDistributionRules: {
	            method: "POST",
	            path: RESOURCE.REPOSITORIES + "/testdistributionrule",
	            notifications: true,
	            params: { testPath: "@testPath", productName: "@productName" }
	        }
	    }).extendPrototype({
	        isType: function isType() {
	            for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
	                types[_key] = arguments[_key];
	            }
	
	            return this.typeSpecific && this.typeSpecific.repoType && _.contains(types, this.typeSpecific.repoType.toLowerCase());
	        },
	        isGitProvider: function isGitProvider(gitProvider) {
	            return this.typeSpecific && this.typeSpecific.gitProvider && gitProvider == this.typeSpecific.gitProvider.toLowerCase();
	        }
	    }).getInstance();
	}

/***/ }),
/* 76 */
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
	
	exports.RepositoriesLayoutsDao = RepositoriesLayoutsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function RepositoriesLayoutsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.REPOSITORIES_LAYOUTS + "/:action/:name").setCustomActions({
	        getLayouts: {
	            method: "GET",
	            isArray: true
	        },
	        getLayoutData: {
	            method: "GET",
	            params: { name: "@layoutName" }
	        },
	        deleteLayout: {
	            method: "DELETE",
	            params: { name: "@layoutName" },
	            notifications: true
	        },
	        testArtifactPath: {
	            method: "POST",
	            params: { action: "testArtPath" },
	            notifications: true
	        },
	        resolveRegex: {
	            method: "POST",
	            params: { action: "resolveRegex" }
	        }
	
	    }).getInstance();
	}

/***/ }),
/* 77 */
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
	
	exports.HaDao = HaDao;
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function HaDao(RESOURCE, ArtifactoryDaoFactory) {
	        return ArtifactoryDaoFactory().setPath(RESOURCE.HIGH_AVAILABILITY + "/:id").setCustomActions({
	                "delete": {
	                        params: { id: "@id" }
	                }
	        }).getInstance();
	}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var HaLicensesDao = exports.HaLicensesDao = function HaLicensesDao(RESOURCE, ArtifactoryDaoFactory) {
	    _classCallCheck(this, HaLicensesDao);
	
	    return ArtifactoryDaoFactory().setPath(RESOURCE.MANAGE_HA_LICENSES + "/:action").setCustomActions({
	        add: {
	            method: "POST",
	            notifications: true, // This is for the 'toaster' to catch the error and display the message
	            params: { action: "add" } },
	        getLicenses: {
	            method: "GET",
	            notifications: true,
	            params: { action: "details" } },
	        replace: {
	            method: "POST",
	            notifications: true,
	            params: { action: "replace" } },
	        "delete": {
	            method: "POST",
	            notifications: true,
	            params: { action: "remove" }
	        }
	    }).getInstance();
	};

/***/ }),
/* 79 */
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
	
	exports.StashResultsDao = StashResultsDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function StashResultsDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "GET" }).setPath(RESOURCE.STASH_RESULTS).setCustomActions({
	        get: {
	            method: "GET",
	            isArray: true
	        },
	        save: {
	            method: "POST",
	            notifications: true
	        },
	        "delete": {
	            method: "DELETE"
	        },
	        add: {
	            path: RESOURCE.STASH_RESULTS + "/add",
	            notifications: true,
	            method: "POST"
	        },
	        subtract: {
	            path: RESOURCE.STASH_RESULTS + "/subtract",
	            notifications: true,
	            method: "POST"
	        },
	        intersect: {
	            path: RESOURCE.STASH_RESULTS + "/intersect",
	            notifications: true,
	            method: "POST"
	        },
	        "export": {
	            path: RESOURCE.STASH_RESULTS + "/export",
	            notifications: true,
	            method: "POST"
	        },
	        discard: {
	            path: RESOURCE.STASH_RESULTS + "/discard",
	            notifications: true,
	            method: "POST"
	        },
	        copy: {
	            path: RESOURCE.STASH_RESULTS + "/copy",
	            notifications: true,
	            method: "POST"
	        },
	        move: {
	            path: RESOURCE.STASH_RESULTS + "/move",
	            notifications: true,
	            method: "POST"
	        },
	        silentCopy: {
	            path: RESOURCE.STASH_RESULTS + "/copy",
	            method: "POST"
	        },
	        silentMove: {
	            path: RESOURCE.STASH_RESULTS + "/move",
	            method: "POST"
	        }
	    }).getInstance();
	}

/***/ }),
/* 80 */
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
	
	exports.OAuthDao = OAuthDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function OAuthDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.OAUTH + "/:p1/:p2/:p3/:p4").setCustomActions({
	        get: {
	            method: "GET"
	        },
	        update: {
	            method: "POST",
	            notifications: true
	        },
	        createProvider: {
	            method: "PUT",
	            params: { p1: "provider" },
	            notifications: true
	        },
	        updateProvider: {
	            method: "POST",
	            params: { p1: "provider" },
	            notifications: true
	        },
	        deleteProvider: {
	            method: "DELETE",
	            params: { p1: "provider", p2: "@provider" },
	            notifications: true
	        },
	        getUserTokens: {
	            method: "GET",
	            isArray: true,
	            params: { p1: "user", p2: "tokens" }
	        },
	        deleteUserToken: {
	            method: "DELETE",
	            params: { p1: "user", p2: "tokens", p3: "@username", p4: "@provider" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 81 */
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
	
	exports.SupportPageDao = SupportPageDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SupportPageDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.SUPPORT_PAGE + "/:action/:bundleId").setCustomActions({
	        generateBundle: {
	            method: "POST",
	            params: { action: "generateBundle" },
	            notifications: true
	        },
	        listBundles: {
	            method: "GET",
	            isArray: true,
	            params: { action: "listBundles" }
	        },
	        deleteBundle: {
	            method: "DELETE",
	            params: { action: "deleteBundle", bundleId: "@bundleId" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 82 */
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
	
	exports.ServerTimeDao = ServerTimeDao;
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function ServerTimeDao(RESOURCE, ArtifactoryDaoFactory) {
	        return ArtifactoryDaoFactory().setPath(RESOURCE.SERVER_TIME).setCustomActions({
	                get: {
	                        method: "GET"
	                }
	        }).getInstance();
	}

/***/ }),
/* 83 */
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
	
	exports.SshClientDao = SshClientDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SshClientDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.SSH_CLIENT).setCustomActions({
	        fetch: {
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 84 */
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
	
	exports.BinaryProvidersInfoDao = BinaryProvidersInfoDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function BinaryProvidersInfoDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.BINARY_PROVIDERS_INFO).setCustomActions({
	        get: {
	            method: "GET"
	        }
	    });
	}

/***/ }),
/* 85 */
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
	
	exports.XrayDao = XrayDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function XrayDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.XRAY + "/:action").setCustomActions({
	        getNoneIndex: {
	            method: "GET",
	            params: { action: "getNoneIndex" },
	            isArray: true
	        },
	        getIndex: {
	            method: "GET",
	            params: { action: "getIndex" },
	            isArray: true
	        },
	        addIndex: {
	            method: "POST",
	            params: { action: "addIndex" }
	        },
	        removeIndex: {
	            method: "POST",
	            params: { action: "removeIndex" }
	        },
	        updateRepositories: {
	            method: "PUT",
	            params: { action: "indexRepos" }
	        },
	        getConf: {
	            path: RESOURCE.XRAY_CONFIG,
	            method: "GET"
	        },
	        getIntegrationConfig: {
	            method: "GET",
	            params: { action: "getIntegrationConfig" }
	        },
	        setXrayEnabled: {
	            method: "POST",
	            params: { action: "setXrayEnabled" }
	        },
	        xrayAllowWhenUnavailable: {
	            method: "POST",
	            params: { action: "setAllowWhenUnavailable" }
	        },
	        xrayAllowBlocked: {
	            method: "POST",
	            params: { action: "setAllowBlockedArtifactsDownload" }
	        },
	        setBypassDefaultProxy: {
	            method: "POST",
	            params: { action: "setBypassDefaultProxy" }
	        },
	        updateXrayProxy: {
	            method: "POST",
	            params: { action: "updateProxy", proxyKey: "proxyKey" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 86 */
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
	
	exports.GlobalReplicationsConfigDao = GlobalReplicationsConfigDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function GlobalReplicationsConfigDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.GLOBAL_REPLICATIONS_BLOCK).setCustomActions({
	        status: {
	            method: "GET"
	        }
	    }).getInstance();
	}

/***/ }),
/* 87 */
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
	
	exports.SumoLogicConfigDao = SumoLogicConfigDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SumoLogicConfigDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.SUMOLOGIC + "/:action").setCustomActions({
	        registerSumoLogicApplication: {
	            method: "POST",
	            params: { action: "registerSumoLogicApplication" },
	            notifications: true
	        },
	        setupSumoLogicApplication: {
	            method: "POST",
	            params: { action: "setupSumoLogicApplication" },
	            notifications: true
	        },
	        refreshToken: {
	            method: "POST",
	            params: { action: "refreshToken" },
	            notifications: true
	        },
	        reset: {
	            method: "POST",
	            params: { action: "reset" },
	            notifications: true
	        }
	    }).getInstance();
	}

/***/ }),
/* 88 */
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
	
	exports.OnboardingDao = OnboardingDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function OnboardingDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.ONBOARDING + "/:param").setCustomActions({
	        initStatus: {
	            method: "GET",
	            params: { param: "initStatus" }
	        },
	        reposStates: {
	            method: "GET",
	            params: { param: "reposStates" }
	        },
	        createDefaultRepos: {
	            method: "POST",
	            params: { param: "createDefaultRepos" }
	        }
	    }).getInstance();
	}

/***/ }),
/* 89 */
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
	 * Created by tomere on 08/06/2017.
	 */
	
	"use strict";
	
	exports.SslCertificateDao = SslCertificateDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function SslCertificateDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setDefaults({ method: "POST" }).setPath(RESOURCE.SSLCERTIFICATES + "/:action").setCustomActions({
	        add: {
	            method: "POST",
	            notifications: true,
	            isArray: true,
	            params: { action: "add" } },
	        "delete": {
	            method: "POST",
	            notifications: true,
	            //isArray: true,
	            params: { action: "delete" }
	        },
	        getDetails: {
	            method: "GET",
	            notifications: true,
	            isArray: false,
	            params: { action: "details" } },
	        getAllCertificates: {
	            method: "GET",
	            notifications: true,
	            isArray: true,
	            params: { action: "getAllCertificates" } } }).getInstance();
	}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
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
	
	var PackagesDAO = exports.PackagesDAO = function PackagesDAO(RESOURCE, ArtifactoryDaoFactory) {
	    _classCallCheck(this, PackagesDAO);
	
	    var path = "" + RESOURCE.API_URL + "/v1/native";
	    var pathV2 = "" + RESOURCE.API_URL + "/v2/native";
	    return ArtifactoryDaoFactory().setPath(path).setCustomActions({
	        showExtraInfo: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/packages/show_extra_info" },
	        getPackages: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/packages/:packageType" },
	        getPackagesMds: {
	            method: "POST",
	            notifications: false,
	            url: "" + pathV2 + "/packages/:packageType" },
	        getPackagesCount: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/count_packages",
	            params: {
	                packageType: "@packageType" } },
	        getRepos: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/repos/:packageType",
	            params: {
	                packageType: "@packageType" } },
	        getPackage: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/versions/:packageType",
	            params: {
	                packageType: "@packageType" }
	        },
	
	        getPackageMds: {
	            method: "POST",
	            notifications: false,
	            url: "" + pathV2 + "/versions/:packageType",
	            params: {
	                packageType: "@packageType" }
	        },
	        getPackageSummary: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/summary",
	            params: {
	                packageType: "@packageType" }
	        },
	        getPackageSummaryExtraInfo: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/summary/extra_info",
	            params: {
	                packageType: "@packageType" }
	        },
	        getPackageDownloadsCount: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/total_downloads",
	            params: {
	                packageType: "@packageType"
	            }
	        },
	        getDockerPackageExtraInfo: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/extra_info",
	            params: {
	                packageType: "@packageType"
	            }
	        },
	        getPackageExtraInfo: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/packages/:packageType/extra_info",
	            params: {
	                packageType: "@packageType"
	            },
	            cancellable: true
	        },
	        getVersionDownloadsCount: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/total_downloads/:repo",
	            params: {
	                packageType: "@packageType",
	                repo: "@repo"
	            }
	        },
	        getVersion: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/:repo",
	            params: {
	                packageType: "@packageType",
	                repo: "@repo"
	            },
	            urlOptions: { encodeUri: false }
	        },
	        getVersionMds: {
	            method: "GET",
	            notifications: false,
	            url: "" + pathV2 + "/versions/:packageType/:repo",
	            params: {
	                packageType: "@packageType",
	                repo: "@repo"
	            },
	            urlOptions: { encodeUri: false }
	        },
	        getVersionData: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/:dataType",
	            params: {
	                packageType: "@packageType",
	                dataType: "@dataType"
	            }
	        },
	        getVersionExtraInfo: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/extra_info",
	            params: {
	                packageType: "@packageType"
	            },
	            cancellable: true
	        },
	        getVersionSummary: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/summary",
	            params: {
	                packageType: "@packageType" }
	        },
	        getVersionSummaryExtraInfo: {
	            method: "POST",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/summary/extra_info",
	            params: {
	                packageType: "@packageType" }
	        },
	        getManifest: {
	            method: "GET",
	            notifications: false,
	            url: "" + path + "/versions/:packageType/:repo",
	            params: {
	                packageType: "@packageType",
	                repoKey: "@repo"
	            } }
	    }).getInstance();
	};

/***/ }),
/* 91 */
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
	
	exports.JcrEulaDao = JcrEulaDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function JcrEulaDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.JCR_EULA + "/:action").setCustomActions({
	        get: {
	            method: "get"
	        },
	        required: {
	            method: "get",
	            params: { action: "required" }
	        },
	        accept: {
	            method: "POST",
	            params: { action: "accept" }
	        } }).getInstance();
	}

/***/ }),
/* 92 */
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
	
	exports.JcrNewsletterDao = JcrNewsletterDao;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function JcrNewsletterDao(RESOURCE, ArtifactoryDaoFactory) {
	  return ArtifactoryDaoFactory().setPath(RESOURCE.JCR_NEWSLETTER + "/:action").setCustomActions({
	    getSubscription: {
	      method: "GET",
	      params: { action: "getSubscription" }
	    },
	    setSubscription: {
	      method: "PUT",
	      params: { action: "setSubscription" }
	    }
	  }).getInstance();
	}

/***/ }),
/* 93 */
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
	
	exports.MiniXrayDao = MiniXrayDao;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function MiniXrayDao(RESOURCE, ArtifactoryDaoFactory) {
	    return ArtifactoryDaoFactory().setPath(RESOURCE.MINI_XRAY + "/:action").setCustomActions({
	        getSecurityVulnerabilites: {
	            method: "post",
	            path: "/jcr/xray/paginatedIssues?direction=asc&num_of_rows=1000&order_by=version&page_num=1",
	            params: { action: "paginatedIssues?direction=asc&num_of_rows=1000&order_by=version&page_num=1" }
	        },
	        getSecurityImpactGraph: {
	            method: "post",
	            params: { action: "impactPath" }
	        },
	        getSecurityDetails: {
	            method: "post",
	            params: { action: "issueDetails" }
	        } }).getInstance();
	}

/***/ })
]);
//# sourceMappingURL=artifactory_dao.js.3184.map