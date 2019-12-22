webpackJsonp([4,8,9],{

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
	
	var ApiConstants = _interopRequire(__webpack_require__(97));
	
	var ArtifactoryCookies = __webpack_require__(149).ArtifactoryCookies;
	
	var ArtifactoryHttpClient = __webpack_require__(150).ArtifactoryHttpClient;
	
	var ArtifactoryStorage = __webpack_require__(151).ArtifactoryStorage;
	
	var ArtifactoryXmlParser = __webpack_require__(152).ArtifactoryXmlParser;
	
	var KeyboardShortcutsModalService = _interopRequire(__webpack_require__(153));
	
	var UserFactory = __webpack_require__(156).UserFactory;
	
	var ArtifactoryState = __webpack_require__(157).ArtifactoryState;
	
	var artifactorySessionInterceptor = __webpack_require__(158).artifactorySessionInterceptor;
	
	var artifactoryDebugInterceptor = __webpack_require__(159).artifactoryDebugInterceptor;
	
	var artifactorySpinnerInterceptor = __webpack_require__(160).artifactorySpinnerInterceptor;
	
	var artifactoryMessageInterceptor = __webpack_require__(161).artifactoryMessageInterceptor;
	
	var artifactoryServerErrorInterceptor = __webpack_require__(162).artifactoryServerErrorInterceptor;
	
	var ArtifactoryModelSaverFactory = __webpack_require__(163).ArtifactoryModelSaverFactory;
	
	var ArtifactoryFeatures = __webpack_require__(164).ArtifactoryFeatures;
	
	var GoogleAnalytics = __webpack_require__(165).GoogleAnalytics;
	
	var NativeBrowser = __webpack_require__(166).NativeBrowser;
	
	var ArtifactActions = __webpack_require__(167).ArtifactActions;
	
	var SetMeUpModal = __webpack_require__(170).SetMeUpModal;
	
	var ArtifactoryDeployModal = __webpack_require__(173).ArtifactoryDeployModal;
	
	var PushToBintrayModal = __webpack_require__(174).PushToBintrayModal;
	
	var parseUrl = __webpack_require__(175).parseUrl;
	
	var recursiveDirective = __webpack_require__(176).recursiveDirective;
	
	var ArtifactorySidebarDriver = __webpack_require__(177).ArtifactorySidebarDriver;
	
	var OnBoardingWizard = __webpack_require__(178).OnBoardingWizard;
	
	var SaveArtifactoryHaLicenses = __webpack_require__(179).SaveArtifactoryHaLicenses;
	
	//import {artifactoryIFrameDownload}              from './artifactory_iframe_download';
	
	angular.module("artifactory.services", ["ui.router", "artifactory.ui_components", "toaster"]).constant("RESOURCE", ApiConstants).service("ArtifactoryCookies", ArtifactoryCookies).service("ArtifactoryHttpClient", ArtifactoryHttpClient).service("ArtifactoryStorage", ArtifactoryStorage).service("ArtifactoryXmlParser", ArtifactoryXmlParser).service("User", UserFactory).service("ArtifactoryState", ArtifactoryState)
	//        .factory('artifactoryIFrameDownload', artifactoryIFrameDownload)
	.factory("artifactorySessionInterceptor", artifactorySessionInterceptor).factory("artifactoryDebugInterceptor", artifactoryDebugInterceptor).factory("artifactoryMessageInterceptor", artifactoryMessageInterceptor).factory("artifactoryServerErrorInterceptor", artifactoryServerErrorInterceptor).factory("artifactorySpinnerInterceptor", artifactorySpinnerInterceptor).service("NativeBrowser", NativeBrowser).service("ArtifactoryFeatures", ArtifactoryFeatures).service("GoogleAnalytics", GoogleAnalytics).service("ArtifactActions", ArtifactActions).service("SetMeUpModal", SetMeUpModal).factory("parseUrl", parseUrl).factory("recursiveDirective", recursiveDirective).factory("ArtifactoryModelSaver", ArtifactoryModelSaverFactory).service("ArtifactoryDeployModal", ArtifactoryDeployModal).service("PushToBintrayModal", PushToBintrayModal).service("ArtifactorySidebarDriver", ArtifactorySidebarDriver).service("OnBoardingWizard", OnBoardingWizard).service("KeyboardShortcutsModalService", KeyboardShortcutsModalService).service("SaveArtifactoryHaLicenses", SaveArtifactoryHaLicenses);

/***/ }),

/***/ 97:
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

/***/ 106:
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

/***/ 134:
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

/***/ 149:
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
	
	var ArtifactoryCookies = exports.ArtifactoryCookies = (function () {
	    function ArtifactoryCookies($cookies) {
	        _classCallCheck(this, ArtifactoryCookies);
	
	        this.cookies = $cookies;
	    }
	
	    _createClass(ArtifactoryCookies, {
	        getCookie: {
	            value: function getCookie(cookieName) {
	                return this.cookies[cookieName];
	            }
	        }
	    });
	
	    return ArtifactoryCookies;
	})();

/***/ }),

/***/ 150:
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
	
	/**
	 * wrapper around angular $http service
	 */
	
	var ArtifactoryHttpClient = exports.ArtifactoryHttpClient = (function () {
	    function ArtifactoryHttpClient($http, RESOURCE) {
	        _classCallCheck(this, ArtifactoryHttpClient);
	
	        this.http = $http;
	        this.baseUrl = RESOURCE.API_URL;
	        this.config = {
	            headers: { "Content-Type": "application/json" }
	        };
	    }
	
	    _createClass(ArtifactoryHttpClient, {
	        post: {
	            value: function post(api, data) {
	                var config = arguments[2] === undefined ? {} : arguments[2];
	
	                return this.http.post(this.baseUrl + api, data, angular.extend(this.config, config));
	            }
	        },
	        put: {
	            value: function put(api, data) {
	                var config = arguments[2] === undefined ? {} : arguments[2];
	
	                return this.http.put(this.baseUrl + api, data, angular.extend(this.config, config));
	            }
	        },
	        get: {
	            value: function get(api) {
	                var config = arguments[1] === undefined ? {} : arguments[1];
	
	                return this.http.get(this.baseUrl + api, angular.extend(this.config, config));
	            }
	        }
	    });
	
	    return ArtifactoryHttpClient;
	})();

/***/ }),

/***/ 151:
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
	/**
	 * wrapper around the HTML5 local storage API.
	 * support JSON serialization de-serialization.
	 *
	 */
	var storage = undefined;
	
	var ArtifactoryStorage = exports.ArtifactoryStorage = (function () {
	    function ArtifactoryStorage($window) {
	        _classCallCheck(this, ArtifactoryStorage);
	
	        storage = $window.localStorage;
	    }
	
	    _createClass(ArtifactoryStorage, {
	        setItem: {
	            value: function setItem(key, item) {
	                try {
	                    storage.setItem(key, JSON.stringify(item));
	                    return this.getItem(key);
	                } catch (e) {
	                    console.log(e);
	                }
	            }
	        },
	        getItem: {
	            value: function getItem(key) {
	                var defaultValue = arguments[1] === undefined ? null : arguments[1];
	
	                try {
	                    var itemStr = storage.getItem(key);
	                    if (itemStr) {
	                        return JSON.parse(itemStr);
	                    } else {
	                        return defaultValue;
	                    }
	                } catch (e) {
	                    console.log(e);
	                }
	            }
	        },
	        removeItem: {
	            value: function removeItem(key) {
	                storage.removeItem(key);
	            }
	        },
	        isLocalStorageNameSupported: {
	            value: function isLocalStorageNameSupported() {
	                var testKey = "test",
	                    storage = window.sessionStorage;
	                try {
	                    storage.setItem(testKey, "1");
	                    storage.removeItem(testKey);
	                    return localStorageName in win && win[localStorageName];
	                } catch (error) {
	                    return false;
	                }
	            }
	        }
	    });
	
	    return ArtifactoryStorage;
	})();

/***/ }),

/***/ 152:
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
	/**
	 * simple wrapper around x2j
	 */
	
	var ArtifactoryXmlParser = exports.ArtifactoryXmlParser = function ArtifactoryXmlParser() {
	  _classCallCheck(this, ArtifactoryXmlParser);
	
	  this.x2js = new X2JS();
	  this.xml2json = this.x2js.xml2json;
	  this.json2xml = this.x2js.json2xml_str;
	};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _keyboard_shortcuts_serviceConstants = __webpack_require__(154);
	
	var GLOBAL_KEYBOARD_SHORTCURS = _keyboard_shortcuts_serviceConstants.GLOBAL_KEYBOARD_SHORTCURS;
	var PAGE_DEPENDENT_KEYBOARD_SHORTCUTS = _keyboard_shortcuts_serviceConstants.PAGE_DEPENDENT_KEYBOARD_SHORTCUTS;
	
	var KeyboardShortcutsModalService = (function () {
	  function KeyboardShortcutsModalService(JFrogModal, JFrogEventBus, $rootScope) {
	    _classCallCheck(this, KeyboardShortcutsModalService);
	
	    this.modal = JFrogModal;
	    this.$rootScope = $rootScope;
	    this.jFrogEventBus = JFrogEventBus;
	  }
	
	  _createClass(KeyboardShortcutsModalService, {
	    showhSortcutsModal: {
	
	      /**
	       *  launch the confirmation modal
	       */
	
	      value: function showhSortcutsModal() {
	        this.modalScope = this.$rootScope.$new();
	        this.modalScope.globalShortcuts = GLOBAL_KEYBOARD_SHORTCURS;
	        this.modalScope.pageDependentShortcuts = PAGE_DEPENDENT_KEYBOARD_SHORTCUTS;
	        if (!$(".shortcuts-modal").length) {
	          this.modalInstance = this.modal.launchModalWithTemplateMarkup(__webpack_require__(155), this.modalScope, 800, false);
	        }
	      }
	    }
	  });
	
	  return KeyboardShortcutsModalService;
	})();
	
	module.exports = KeyboardShortcutsModalService;

/***/ }),

/***/ 154:
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
	
	var GLOBAL_KEYBOARD_SHORTCURS = [{ title: "Go to tree", type: "global", keyCombination: ["Ctrl", "Alt", "R"], macKeyCombination: ["Cmd", "Option", "R"] }, { title: "Go to search", type: "global", keyCombination: ["Ctrl", "Alt", "S"], macKeyCombination: ["Cmd", "Option", "S"] }, { title: "Go to builds", type: "global", keyCombination: ["Ctrl", "Alt", "B"], macKeyCombination: ["Cmd", "Option", "B"] }, { title: "Login / Logout", type: "global", keyCombination: ["Ctrl", "Alt", "L"], macKeyCombination: ["Cmd", "Option", "L"] }, { title: "Keyboard shortcuts index", type: "global", keyCombination: ["Ctrl", "Alt", "/"], macKeyCombination: ["Cmd", "Option", "/"] }];
	exports.GLOBAL_KEYBOARD_SHORTCURS = GLOBAL_KEYBOARD_SHORTCURS;
	var PAGE_DEPENDENT_KEYBOARD_SHORTCUTS = [{ title: "Create new entity", type: "pageDependent", keyCombination: ["Ctrl", "Alt", "N"], macKeyCombination: ["Cmd", "Option", "N"] }];
	exports.PAGE_DEPENDENT_KEYBOARD_SHORTCUTS = PAGE_DEPENDENT_KEYBOARD_SHORTCUTS;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

	module.exports = "<!--\n  ~ Artifactory is a binaries repository manager.\n  ~ Copyright (C) 2018 JFrog Ltd.\n  ~\n  ~ Artifactory is free software: you can redistribute it and/or modify\n  ~ it under the terms of the GNU Affero General Public License as published by\n  ~ the Free Software Foundation, either version 3 of the License, or\n  ~ (at your option) any later version.\n  ~\n  ~ Artifactory is distributed in the hope that it will be useful,\n  ~ but WITHOUT ANY WARRANTY; without even the implied warranty of\n  ~ MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  ~ GNU Affero General Public License for more details.\n  ~\n  ~ You should have received a copy of the GNU Affero General Public License\n  ~ along with Artifactory.  If not, see <http://www.gnu.org/licenses/>.\n  -->\n<div class=\"modal-header\">\n\t<button type=\"button\"\n\t        class=\"close\"\n\t        data-dismiss=\"close\"\n\t        aria-label=\"Close\"\n\t        ng-click=\"$close(true)\"><span\n\t\t\taria-hidden=\"true\">&times;</span>\n\t</button>\n\t<h3 class=\"modal-title\">Keyboard Shortcuts</h3>\n</div>\n<div class=\"modal-body shortcuts-modal\">\n\t<jf-panel jf-panel-heading=\"Global Shortcuts\">\n\t\t<table class=\"jf-data-table\" cellspacing=\"10\">\n\t\t\t<tr ng-repeat=\"shortcut in globalShortcuts\">\n\t\t\t\t<td>{{shortcut.title}}:</td>\n\t\t\t\t<td class=\"win-keys\">\n\t\t\t\t\t<span class=\"win-shortcut-key\" ng-repeat=\"key in shortcut.keyCombination\">\n\t\t\t\t\t\t<span class=\"shortcut-key\" ng-class=\"'key-{{key}}'\">{{key}}</span><span ng-if=\"!$last\"> + </span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t\t<td>Or</td>\n\t\t\t\t<td class=\"mac-keys\">\n\t\t\t\t\t<span class=\"mac-shortcut-key\" ng-repeat=\"key in shortcut.macKeyCombination\">\n\t\t\t\t\t\t<span class=\"shortcut-key\" ng-class=\"'key-{{key}}'\">{{key}}</span><span ng-if=\"!$last\"> + </span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</jf-panel>\n\t<jf-panel jf-panel-heading=\"Page Dependent Shortcuts\">\n\t\t<table class=\"jf-data-table\" cellspacing=\"10\">\n\t\t\t<tr ng-repeat=\"shortcut in pageDependentShortcuts\">\n\t\t\t\t<td>{{shortcut.title}}:</td>\n\t\t\t\t<td class=\"win-keys\">\n\t\t\t\t\t<span class=\"win-shortcut-key\" ng-repeat=\"key in shortcut.keyCombination\">\n\t\t\t\t\t\t<span class=\"shortcut-key\" ng-class=\"'key-{{key}}'\">{{key}}</span><span ng-if=\"!$last\"> + </span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t\t<td>Or</td>\n\t\t\t\t<td class=\"mac-keys\">\n\t\t\t\t\t<span class=\"mac-shortcut-key\" ng-repeat=\"key in shortcut.macKeyCombination\">\n\t\t\t\t\t\t<span class=\"shortcut-key\" ng-class=\"'key-{{key}}'\">{{key}}</span><span ng-if=\"!$last\"> + </span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</jf-panel>\n</div>"

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.UserFactory = UserFactory;
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
	
	var USER_KEY = "USER";
	var GUEST_USER = {
	    name: "anonymous",
	    admin: false,
	    profileUpdatable: true,
	    internalPasswordDisabled: false,
	    canDeploy: false,
	    canManage: false,
	    preventAnonAccessBuild: false,
	    proWithoutLicense: false
	};
	
	var User = (function () {
	    function User(data) {
	        _classCallCheck(this, User);
	
	        User.JFrogEventBus.register(EVENTS.USER_LOGOUT, function (confirmDiscard) {
	            if (!confirmDiscard) {
	                User.logout().then(function () {
	                    User.$state.go("home");
	                });
	            } else if (confirmDiscard === "logoutAndLogin") {
	                User.logout();
	            }
	        });
	
	        if (data) {
	            this.setData(data);
	        }
	
	        this.setIsHa();
	    }
	
	    _createClass(User, {
	        setData: {
	            value: function setData(data) {
	                var _this = this;
	
	                if (!_.isEqual(this._data, data)) {
	                    data.userPreferences = data.userPreferences || {};
	
	                    angular.copy(data, this);
	                    this._data = data;
	                    User.JFrogEventBus.dispatch(EVENTS.USER_CHANGED);
	                }
	                User.footerDao.get(false).then(function (footerData) {
	                    return _this.footerData = footerData;
	                });
	            }
	        },
	        isProWithoutLicense: {
	            value: function isProWithoutLicense() {
	                return this.proWithoutLicense;
	            }
	        },
	        isGuest: {
	
	            // Instance methods:
	            value: function isGuest() {
	                return this.name === GUEST_USER.name;
	            }
	        },
	        isAdmin: {
	            value: function isAdmin() {
	                return this.admin;
	            }
	        },
	        isRegularUser: {
	            value: function isRegularUser() {
	                return this.isLoggedIn() && !this.isAdmin();
	            }
	        },
	        isLoggedIn: {
	            value: function isLoggedIn() {
	                return !!this.name && !this.isGuest();
	            }
	        },
	        getCanManage: {
	            value: function getCanManage() {
	                return this.canManage || this.isProWithoutLicense();
	            }
	        },
	        getCanDeploy: {
	            value: function getCanDeploy() {
	                if (this.isProWithoutLicense()) {
	                    return false;
	                }
	                return this.canDeploy;
	            }
	        },
	        setIsHa: {
	            value: function setIsHa() {
	                var _this = this;
	
	                User.footerDao.get(false).then(function (footerData) {
	                    _this.isHaConfigured = footerData.haConfigured;
	                });
	            }
	        },
	        haLicenseInstalled: {
	            value: function haLicenseInstalled() {
	                return this.isHaConfigured && !this.isProWithoutLicense();
	            }
	        },
	        canView: {
	            value: function canView(state) {
	                var stateParams = arguments[1] === undefined ? {} : arguments[1];
	
	                // High Availability configured and the user is not admin and the master node has a license installed
	                if (this.haLicenseInstalled() && !this.isAdmin()) {
	                    if (state === "admin.configuration.register_pro") {
	                        return false;
	                    }
	                }
	
	                if (User.ArtifactoryFeatures.isEdgeNode()) {
	                    if (state === "builds") {
	                        return false;
	                    }
	                }
	
	                if (this.isProWithoutLicense()) {
	                    if (state === "admin.configuration.register_pro" || state === "admin.configuration" || state === "admin" || state === "home" || state === "login") {
	                        return true;
	                    } else {
	                        return false;
	                    }
	                }
	
	                if (state === "artifacts") {
	                    return true;
	                }
	                if (state.match(/^admin.security.permissions/) || state === "admin") {
	                    return this.getCanManage();
	                } else if (state.match(/^admin/)) {
	                    return this.isAdmin();
	                } else {
	                    return true;
	                }
	            }
	        }
	    }, {
	        login: {
	
	            // Class methods:
	            value: function login(username, remember) {
	                var _this = this;
	
	                var loginRequest = this.http.post(this.RESOURCE.AUTH_LOGIN + remember, angular.extend(username, { type: "login" }));
	
	                loginRequest.then(function (response) {
	                    _this.setUser(response.data);
	                    User.$timeout(function () {
	                        return User.JFrogEventBus.dispatch(EVENTS.FOOTER_REFRESH);
	                    });
	                    return username;
	                })["catch"](function (err) {
	                    return _this.JFrogNotifications.create({ error: err.data.error });
	                });
	                return loginRequest;
	            }
	        },
	        logout: {
	            value: function logout() {
	                var _this = this;
	
	                return this.http.get(this.RESOURCE.AUTH_IS_SAML, null, {}).then(function (res) {
	                    if (res.data) {
	                        return _this.http.get(_this.RESOURCE.SAML_LOGOUT, null, {}).then(function (res) {
	                            _this.$window.location.replace(res.data);
	                        });
	                    } else {
	                        return _this.http.post(_this.RESOURCE.AUTH_LOGOUT, null, { bypassSessionInterceptor: true }).then(function (res) {
	                            var isOnboarding = _this.artifactoryState.getState("onboardingWizardOpen") === true;
	
	                            if (!isOnboarding) {
	                                _this.clearStates();
	                            }
	
	                            if (_this.$state.current.name === "home" && isOnboarding !== true) {
	                                _this.$state.go(_this.$state.current, _this.$stateParams, { reload: true });
	                            }
	
	                            return _this.loadUser(true);
	                        });
	                    }
	                });
	            }
	        },
	        clearStates: {
	            value: function clearStates() {
	                // save some states we want to keep
	                var tempStates = this._getStates(["systemMessage", "clearErrorsOnStateChange", "sidebarEventsRegistered"]);
	                // clear the states
	                this.artifactoryState.clearAll();
	                // restore saved states
	                this._setStates(tempStates);
	            }
	        },
	        redirect: {
	            value: function redirect(redirectTo) {
	                var _this = this;
	
	                var redirectRequest = this.http.get(this.RESOURCE.AUTH_REDIRECT + redirectTo);
	
	                redirectRequest.then(function (response) {
	                    _this.$window.location.replace(response.data.url);
	                });
	
	                return redirectRequest;
	            }
	        },
	        _getStates: {
	            value: function _getStates(states) {
	                var _this = this;
	
	                var savedStates = {};
	                states.forEach(function (s) {
	                    savedStates[s] = _this.artifactoryState.getState(s);
	                });
	                return savedStates;
	            }
	        },
	        _setStates: {
	            value: function _setStates(savedStates) {
	                for (var key in savedStates) {
	                    this.artifactoryState.setState(key, savedStates[key]);
	                }
	            }
	        },
	        forgotPassword: {
	            value: function forgotPassword(user) {
	                return this.http.post(this.RESOURCE.AUTH_FORGOT_PASSWORD, user);
	            }
	        },
	        validateKey: {
	            value: function validateKey(key) {
	                return this.http.post(this.RESOURCE.AUTH_VALIDATE_KEY + key);
	            }
	        },
	        resetPassword: {
	            value: function resetPassword(key, user) {
	                return this.http.post(this.RESOURCE.AUTH_RESET_PASSWORD + key, user);
	            }
	        },
	        canAnnotate: {
	            value: function canAnnotate(repoKey, path) {
	                return this.http.get(this.RESOURCE.AUTH_CAN_ANNOTATE + repoKey + "&path=" + path).then(function (response) {
	                    return response;
	                });
	            }
	        },
	        getLoginData: {
	            value: function getLoginData(redirectTo) {
	                return this.http.post(this.RESOURCE.AUTH_LOGIN_DATA, {
	                    dummy: "dummy",
	                    redirectTo: redirectTo
	                }).then(function (response) {
	                    return response.data;
	                });
	            }
	        },
	        getOAuthLoginData: {
	            value: function getOAuthLoginData() {
	                return this.http.get(this.RESOURCE.OAUTH_LOGIN, { params: { redirectTo: this.$stateParams.redirectTo } }).then(function (response) {
	                    return response.data;
	                });
	            }
	        },
	        setUser: {
	            value: function setUser(user) {
	                this.currentUser.setData(user);
	                this.storage.setItem(USER_KEY, user);
	                return this.currentUser;
	            }
	        },
	        loadUser: {
	            value: function loadUser() {
	                var _this = this;
	
	                var force = arguments[0] === undefined ? false : arguments[0];
	
	                var user = this.storage.getItem(USER_KEY);
	                if (user) {
	                    this.currentUser.setData(user);
	                }
	                if (force || !user) {
	                    this.whenLoadedFromServer = this.http.get(this.RESOURCE.AUTH_CURRENT, { bypassSessionInterceptor: true }).then(function (user) {
	                        return _this.setUser(user.data);
	                    });
	                    return this.whenLoadedFromServer;
	                    /*
	                      this.whenLoadedFromServer = this.http.get(this.RESOURCE.AUTH_CURRENT, {bypassSessionInterceptor: true})
	                     .then((user) => this.setUser(user.data));
	                     return this.whenLoadedFromServer;
	                      */
	                } else {
	                    return this.$q.when(this.currentUser);
	                }
	            }
	        },
	        getCurrent: {
	            value: function getCurrent() {
	                return this.currentUser;
	            }
	        },
	        reload: {
	            value: function reload() {
	                this.loadUser(true);
	            }
	        }
	    });
	
	    return User;
	})();
	
	function UserFactory(ArtifactoryHttpClient, ArtifactoryStorage, RESOURCE, $q, $window, $state, $timeout, $stateParams, JFrogEventBus, ArtifactoryFeatures, JFrogNotifications, ArtifactoryState, FooterDao) {
	    // Set static members on class:
	    User.http = ArtifactoryHttpClient;
	    User.storage = ArtifactoryStorage;
	    User.RESOURCE = RESOURCE;
	    User.$q = $q;
	    User.$window = $window;
	    User.$timeout = $timeout;
	    User.$state = $state;
	    User.$stateParams = $stateParams;
	    User.artifactoryState = ArtifactoryState;
	    User.JFrogEventBus = JFrogEventBus;
	    User.footerDao = FooterDao;
	    User.currentUser = new User();
	    User.ArtifactoryFeatures = ArtifactoryFeatures;
	    User.JFrogNotifications = JFrogNotifications;
	    // Load user from localstorage:
	    User.loadUser( /* force */true);
	
	    return User;
	}

/***/ }),

/***/ 157:
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
	
	var ArtifactoryState = exports.ArtifactoryState = (function () {
	    function ArtifactoryState() {
	        _classCallCheck(this, ArtifactoryState);
	
	        this.states = {};
	    }
	
	    _createClass(ArtifactoryState, {
	        getState: {
	            value: function getState(name) {
	                return this.states[name];
	            }
	        },
	        setState: {
	            value: function setState(name, state) {
	                this.states[name] = state;
	            }
	        },
	        removeState: {
	            value: function removeState(name) {
	                if (this.states[name] !== undefined) delete this.states[name];
	            }
	        },
	        clearAll: {
	            value: function clearAll() {
	                this.states = {};
	            }
	        }
	    });
	
	    return ArtifactoryState;
	})();

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

	"use strict";
	
	exports.artifactorySessionInterceptor = artifactorySessionInterceptor;
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
	window._sessionExpire = function () {
	    localStorage._forceSessionExpire = true;
	};
	
	function artifactorySessionInterceptor($injector) {
	    var User;
	    var $state;
	    var $stateParams;
	    var ArtifactoryState;
	    var $location;
	    var RESOURCE;
	    var $q;
	    var JFrogNotifications;
	    var ArtifactoryHttpClient;
	    var $window;
	
	    function initInjectables() {
	        $q = $q || $injector.get("$q");
	        $window = $window || $injector.get("$window");
	        User = User || $injector.get("User");
	        $state = $state || $injector.get("$state");
	        $stateParams = $stateParams || $injector.get("$stateParams");
	        ArtifactoryState = ArtifactoryState || $injector.get("ArtifactoryState");
	        $location = $location || $injector.get("$location");
	        RESOURCE = RESOURCE || $injector.get("RESOURCE");
	        JFrogNotifications = JFrogNotifications || $injector.get("JFrogNotifications");
	        ArtifactoryHttpClient = ArtifactoryHttpClient || $injector.get("ArtifactoryHttpClient");
	    }
	
	    function bypass(res) {
	        return res.config && res.config.bypassSessionInterceptor;
	    };
	
	    function isSessionInvalid(res) {
	        return res.headers().sessionvalid === "false";
	    }
	
	    function isApiRequest(res) {
	        return _.contains(res.config.url, RESOURCE.API_URL);
	    }
	    function isOpenApi(res) {
	        return isApiRequest(res) && (res.config.url.endsWith("/auth/current") || res.config.url.endsWith("/auth/screen/footer"));
	    }
	    function isLoggedIn() {
	        return !User.getCurrent().isGuest();
	    }
	
	    function handleExpiredSession() {
	        // if session invalid and we think we are logged in - session expired on server
	        delete localStorage._forceSessionExpire;
	        User.loadUser(true);
	
	        if ($state.current !== "login" && $location.path() !== "/login") {
	            setUrlAfterLogin();
	        }
	        return true;
	    }
	
	    function verifySession(res) {
	        initInjectables();
	        if (bypass(res)) {
	            return true;
	        }
	
	        User.loadUser(); // Refresh from localstorage (parallel tab support)
	        if (isApiRequest(res) && !isOpenApi(res) && isSessionInvalid(res) && isLoggedIn() || localStorage._forceSessionExpire) {
	            // if the user is not logged in but is in a bypassed request
	            // let the request go through but log out the user.
	            if ($location.path() !== "/login") {
	                setUrlAfterLogin();
	            }
	            return handleExpiredSession();
	        }
	        return true;
	    }
	
	    function checkAuthorization(res) {
	        if (res.status === 401) {
	            User.getLoginData($stateParams.redirectTo).then(function (res) {
	                if (res.ssoProviderLink) {
	                    if ($location.path() == "/login") {
	                        reloadUserAndChangeState("login");
	                    } else {
	                        $window.open(res.ssoProviderLink, "_self");
	                    }
	                } else {
	                    if ($state.current.name !== "reset-password" || !$stateParams.key) {
	                        if ($state.current !== "login" && $location.path() !== "/login" && $state.current !== "reset-password" && $location.path() !== "/resetpassword") {
	                            setUrlAfterLogin();
	                        }
	                        reloadUserAndChangeState("login");
	                    }
	                }
	            });
	        } else if (res.status === 403) {
	            if (res.config.url.indexOf("permissiontargets") !== -1) {
	                JFrogNotifications.create({ error: "You are not authorized to view this page" });
	                $state.go("home");
	            }
	        }
	    }
	
	    // Reloading user after receiving a 401 is necessary.
	    // Otherwise the user would not be considered as logged in by the UI.
	    function reloadUserAndChangeState(toState) {
	        User.loadUser(true).then(function () {
	            return $state.go(toState);
	        });
	    }
	
	    function setUrlAfterLogin() {
	        ArtifactoryState.setState("urlAfterLogin", $location.path());
	    }
	
	    function response(res) {
	        if (verifySession(res)) {
	            return res;
	        } else {
	            return $q.reject(res);
	        }
	    }
	
	    function request(req) {
	        req.headers["X-Requested-With"] = "artUI";
	        return req;
	    }
	
	    function responseError(res) {
	        verifySession(res);
	        checkAuthorization(res);
	        return $q.reject(res);
	    }
	
	    return {
	        response: response,
	        responseError: responseError,
	        request: request
	    };
	}

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

	"use strict";
	
	exports.artifactoryDebugInterceptor = artifactoryDebugInterceptor;
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
	 * returns a function that accept some custom info
	 * and returns the interceptor object.
	 * intent to be injected and use in DAO's
	 *
	 * @returns {Function}
	 */
	window._debugOn = function () {
	    localStorage._debug = true;
	};
	window._debugOff = function () {
	    delete localStorage._debug;
	};
	
	function artifactoryDebugInterceptor($injector) {
	    /**
	     * accept an additional info that can be used
	     * in the returned interceptor object
	     *
	     * @returns {{response: Function, responseError: Function}}
	     */
	    var $q;
	    var RESOURCE;
	    function debugResponse(res) {
	        if (!localStorage._debug) {
	            return;
	        }RESOURCE = RESOURCE || $injector.get("RESOURCE");
	        var apiRequest = _.contains(res.config.url, RESOURCE.API_URL);
	
	        if (apiRequest) {
	            console.log("========================");
	            console.log("URL:      ", res.config.url);
	            console.log("METHOD:   ", res.config.method);
	            console.log("DATA:     ", res.config.data);
	            console.log("Status:   ", res.status);
	            console.log("Response: ", res.data);
	            console.log("========================");
	        }
	    }
	    function response(res) {
	        debugResponse(res);
	        return res;
	    }
	    function responseError(res) {
	        $q = $q || $injector.get("$q");
	        debugResponse(res);
	        return $q.reject(res);
	    }
	    return {
	        response: response,
	        responseError: responseError
	    };
	}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	exports.artifactorySpinnerInterceptor = artifactorySpinnerInterceptor;
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
	
	function artifactorySpinnerInterceptor($injector, $timeout, $q, JFrogEventBus) {
	
	    var SPINNER_TIMEOUT = 500; //milis
	    var serial = 0;
	    var timeouts = {};
	    var pendings = [];
	    var canceled = [];
	    var inDelay = [];
	
	    JFrogEventBus.register(EVENTS.CANCEL_SPINNER, function () {
	        if (pendings.length) {
	            JFrogEventBus.dispatch(EVENTS.HIDE_SPINNER);
	            canceled = canceled.concat(pendings);
	            pendings = [];
	            //            console.log('canceled: ', canceled);
	        }
	    });
	
	    function request(req) {
	
	        req.headers["Request-Agent"] = "artifactoryUI";
	
	        if ((!req.params || !req.params.$no_spinner) && !_.contains(req.url, "$no_spinner=true") && req.url.startsWith("../ui/")) {
	            (function () {
	
	                var domain = req.params ? req.params.$spinner_domain : undefined;
	
	                req.headers.serial = serial;
	
	                pendings.push(serial);
	
	                inDelay.push(serial);
	                timeouts[serial] = $timeout(function () {
	                    var canceledIndex = canceled.indexOf(req.headers.serial);
	
	                    if (canceledIndex < 0) {
	                        JFrogEventBus.dispatch(EVENTS.SHOW_SPINNER, domain);
	                    } else {
	                        canceled.splice(canceledIndex, 1);
	                    }
	
	                    var inDelayIndex = inDelay.indexOf(req.headers.serial);
	                    if (inDelayIndex >= 0) inDelay.splice(inDelayIndex, 1);
	
	                    //                console.log('inDelay',inDelay);
	                }, SPINNER_TIMEOUT);
	
	                serial++;
	            })();
	        }
	
	        return req;
	    }
	
	    function response(res) {
	        if (handleResponse(res)) {
	            return res;
	        } else {
	            return $q.defer().promise;
	        }
	    }
	
	    function responseError(res) {
	        if (handleResponse(res)) {
	            return $q.reject(res);
	        } else {
	            return $q.defer().promise;
	        }
	    }
	
	    function handleResponse(res) {
	        var s = res.config.headers.serial;
	
	        var pendingIndex = pendings.indexOf(s);
	        if (pendingIndex >= 0) {
	            pendings.splice(pendingIndex, 1);
	        }
	
	        var inDelayIndex = inDelay.indexOf(s);
	
	        var canceledIndex = canceled.indexOf(s);
	        if (canceledIndex >= 0) {
	            //            console.log('canceled',res);
	            if (inDelayIndex < 0) canceled.splice(canceledIndex, 1);
	            return false;
	        } else {
	            if (timeouts[s]) {
	                if (inDelayIndex >= 0) inDelay.splice(inDelayIndex, 1);else {
	                    JFrogEventBus.dispatch(EVENTS.HIDE_SPINNER);
	                }
	                $timeout.cancel(timeouts[s]);
	                delete timeouts[s];
	            }
	
	            return true;
	        }
	    }
	
	    return {
	        response: response,
	        request: request,
	        responseError: responseError
	    };
	}

/***/ }),

/***/ 161:
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
	 * Created by gidis on 7/26/15.
	 */
	
	"use strict";
	
	exports.artifactoryMessageInterceptor = artifactoryMessageInterceptor;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function artifactoryMessageInterceptor(ArtifactoryState, $q) {
	
	    function request(req) {
	        return req;
	    }
	
	    function response(res) {
	        handleResponse(res);
	        return res;
	    }
	
	    function responseError(res) {
	        handleResponse(res);
	        return $q.reject(res);
	    }
	
	    function handleResponse(res) {
	        var messages = res.headers()["artifactory-ui-messages"];
	        if (messages) ArtifactoryState.setState("constantMessages", JSON.parse(messages));
	    }
	
	    return {
	        response: response,
	        request: request,
	        responseError: responseError
	    };
	}

/***/ }),

/***/ 162:
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
	
	exports.artifactoryServerErrorInterceptor = artifactoryServerErrorInterceptor;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function artifactoryServerErrorInterceptor($injector) {
	    var $state;
	    var $q;
	
	    function initInjectables() {
	        $q = $q || $injector.get("$q");
	        $state = $state || $injector.get("$state");
	    }
	
	    function responseError(res) {
	        initInjectables();
	        if (res.status <= 0 && res.xhrStatus !== "abort") {
	            $state.go("server_down");
	        }
	        if (res.status > 500) {
	            $state.go("server_error_5XX");
	        }
	        return $q.reject(res);
	    }
	
	    return {
	        responseError: responseError
	    };
	}

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.ArtifactoryModelSaverFactory = ArtifactoryModelSaverFactory;
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
	
	var ArtifactoryModelSaver = (function () {
	    function ArtifactoryModelSaver(controller, modelObjects, excludePaths, $timeout, JFrogModal, $q, ArtifactoryState) {
	        var _this = this;
	
	        _classCallCheck(this, ArtifactoryModelSaver);
	
	        this.JFrogModal = JFrogModal;
	        this.$q = $q;
	
	        this.controller = controller;
	        this.controller._$modelSaver$_ = this;
	        this.confirmOnLeave = true;
	        this.modelObjects = modelObjects;
	        this.excludePaths = excludePaths;
	        this.savedModels = {};
	        this.saved = false;
	        this.artifactoryState = ArtifactoryState;
	
	        $timeout(function () {
	            if (!_this.saved) _this.save();
	        });
	    }
	
	    _createClass(ArtifactoryModelSaver, {
	        save: {
	            value: function save() {
	                var _this = this;
	
	                this.modelObjects.forEach(function (objName) {
	                    _this.savedModels[objName] = _.cloneDeep(_this.controller[objName]);
	                });
	                this.saved = true;
	            }
	        },
	        isModelSaved: {
	            value: function isModelSaved() {
	                var isSaved = true;
	                for (var objectNameI in this.modelObjects) {
	                    var objectName = this.modelObjects[objectNameI];
	                    if (!angular.equals(this.savedModels[objectName], this.controller[objectName])) {
	                        var deefObj = DeepDiff(this.savedModels[objectName], this.controller[objectName]);
	                        //                console.log(deefObj);
	                        if (this._isDiffReal(deefObj, this.excludePaths[objectNameI])) {
	                            isSaved = false;
	                            break;
	                        }
	                    }
	                }
	                return isSaved;
	            }
	        },
	        _isDiffReal: {
	            value: function _isDiffReal(deefObj, excludePaths) {
	
	                var excludes = excludePaths ? excludePaths.split(";") : [];
	
	                var isReal = false;
	
	                for (var key in deefObj) {
	                    var deef = deefObj[key];
	
	                    if (deef.path && deef.path.length && (!_.isString(deef.path[deef.path.length - 1]) || deef.path[deef.path.length - 1].startsWith("$$") || this._isExcluded(deef.path, excludes))) continue;
	
	                    if (deef.lhs === undefined && deef.rhs === "" || deef.lhs === "" && deef.rhs === undefined || deef.lhs === undefined && _.isArray(deef.rhs) && deef.rhs.length === 0 || deef.lhs === undefined && _.isObject(deef.rhs) && Object.keys(deef.rhs).length === 0) {} else {
	                        //real
	                        isReal = true;
	                        break;
	                    }
	                }
	
	                return isReal;
	            }
	        },
	        _isExcluded: {
	            value: function _isExcluded(path, excludes) {
	                if (!excludes.length) {
	                    return false;
	                }var excluded = false;
	                for (var i in excludes) {
	                    var exclude = excludes[i];
	                    var exPath = exclude.split(".");
	                    var match = true;
	                    for (var pI in exPath) {
	                        if (exPath[pI] !== "*" && exPath[pI] !== path[pI] || (exPath[pI] === "*" && path[pI]) === undefined) {
	                            match = false;
	                            break;
	                        }
	                    }
	                    if (match) excluded = true;
	                    break;
	                }
	
	                return excluded;
	            }
	        },
	        ask: {
	            value: function ask() {
	                var _this = this;
	
	                var reset = arguments[0] === undefined ? false : arguments[0];
	
	                var message = reset ? "You have unsaved changes. Reset action will discard changes." : "You have unsaved changes. Leaving this page will discard changes.";
	                var defer = this.$q.defer();
	
	                if (!this.isModelSaved()) {
	                    this.JFrogModal.confirm(message, "Discard Changes", { confirm: "Discard" }).then(function () {
	                        defer.resolve();
	                        _this.artifactoryState.setState("confirmDiscardModalOpen", false);
	                    })["catch"](function () {
	                        return _this.artifactoryState.setState("confirmDiscardModalOpen", false);
	                    });
	
	                    this.artifactoryState.setState("confirmDiscardModalOpen", true);
	                } else {
	                    defer.resolve();
	                }
	                return defer.promise;
	            }
	        }
	    });
	
	    return ArtifactoryModelSaver;
	})();
	
	function ArtifactoryModelSaverFactory($timeout, JFrogModal, $q, ArtifactoryState) {
	    return {
	        createInstance: function (controller, modelObjects, excludePaths) {
	            excludePaths = excludePaths || [];
	            return new ArtifactoryModelSaver(controller, modelObjects, excludePaths, $timeout, JFrogModal, $q, ArtifactoryState);
	        }
	    };
	}
	
	// not real

/***/ }),

/***/ 164:
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
	// For debugging only:
	window._aolSimulate = function (value) {
	    localStorage._aol = value ? "true" : "false";
	};
	window._aolOff = function () {
	    delete localStorage._aol;
	};
	window._licenseSimulate = function (value) {
	    localStorage._license = value;
	};
	window._licenseOff = function () {
	    delete localStorage._license;
	};
	
	// Order of license levels
	var LICENSES_LEVELS = {
	    OSS: 1,
	    ConanCE: 1,
	    JCR: 1,
	    PRO: 2,
	    ENT: 2,
	    EDGE: 3,
	    ENTPLUS: 5
	};
	
	// Minimum license needed per feature
	var FEATURES = {
	    // This is the default for all other features:
	    "default": {
	        license: "OSS"
	    },
	    // features:
	    gradle: {
	        license: "OSS",
	        label: "Gradle",
	        path: "gradle" // TODO: Add valid path
	    },
	    maven: {
	        license: "OSS",
	        label: "Maven",
	        path: "maven" // TODO: Add valid path
	    },
	    sbt: {
	        license: "OSS",
	        label: "SBT",
	        path: "sbt" // TODO: Add valid path
	    },
	    ivy: {
	        license: "OSS",
	        label: "Ivy",
	        path: "ivy" // TODO: Add valid path
	    },
	    stash: {
	        license: "PRO",
	        label: "Smart search",
	        path: "search"
	    },
	
	    properties: {
	        license: "JCR",
	        label: "Properties",
	        path: "properties"
	    },
	    builds: {
	        license: "PRO",
	        label: "Builds",
	        path: "build"
	    },
	
	    watches: {
	        license: "PRO",
	        label: "Watches",
	        path: "watches"
	    },
	    diff: {
	        license: "PRO",
	        label: "Build Diff",
	        path: "build"
	    },
	
	    licenses: {
	        license: "PRO",
	        label: "Licenses",
	        path: "license"
	    },
	    publishedmodule: {
	        license: "PRO",
	        label: "Published Module",
	        path: "build"
	    },
	
	    highavailability: {
	        license: "ENT",
	        label: "High Availability",
	        path: "ha"
	    },
	    crowd: {
	        license: "PRO",
	        label: "Crowd",
	        path: "sso"
	    },
	    samlsso: {
	        license: "PRO",
	        label: "Saml & SSO",
	        path: "sso"
	    },
	    oauthsso: {
	        license: "PRO",
	        label: "OAuth SSO",
	        path: "sso" // ???
	    },
	    httpsso: {
	        license: "PRO",
	        label: "Http SSO",
	        path: "sso"
	    },
	    signingkeys: {
	        license: "PRO",
	        label: "Signing Keys & WebStart",
	        path: "webstart"
	    },
	    trustedkeys: {
	        license: "EDGE",
	        label: "Trusted Keys",
	        path: "trustedkeys"
	    },
	    replications: {
	        license: "PRO",
	        label: "Replications",
	        path: "replication"
	    },
	    distribution: {
	        license: "OSS",
	        label: "Distribution Repository",
	        path: "distribution"
	    },
	    "distribution-map-properties": {
	        license: "PRO",
	        label: "Map Properties to Bintray Version Attributes"
	    },
	    ldap: {
	        license: "PRO",
	        label: "LDAP Groups",
	        path: "ldap"
	    },
	    register_pro: {
	        license: "PRO",
	        label: "Register Pro",
	        path: "register pro"
	    },
	    sha256: {
	        license: "PRO",
	        label: "Sha256 Calculation",
	        path: "sha256"
	    },
	    supportpage: {
	        license: "PRO",
	        label: "Support Page"
	    },
	    reverse_proxies: {
	        license: "JCR",
	        label: "Reverse Proxies"
	    },
	    xray: {
	        license: "PRO",
	        label: "Xray Integration"
	    },
	    accesstokens: {
	        license: "OSS",
	        label: "Access Tokens",
	        path: "accesstokens"
	    },
	
	    // repo types:
	    bower: {
	        license: "PRO",
	        label: "Bower",
	        path: "bower"
	    },
	    chef: {
	        license: "PRO",
	        label: "Chef",
	        path: "chef"
	    },
	    cocoapods: {
	        license: "PRO",
	        label: "CocoaPods",
	        path: "cocoapods"
	    },
	    composer: {
	        license: "PRO",
	        label: "Composer",
	        path: "composer"
	    },
	    conan: {
	        license: "ConanCE",
	        label: "Conan",
	        path: "conan"
	    },
	    conda: {
	        license: "PRO",
	        label: "Conda",
	        path: "conda"
	    },
	    cran: {
	        license: "PRO",
	        label: "CRAN",
	        path: "cran"
	    },
	    debian: {
	        license: "PRO",
	        label: "Debian",
	        path: "debian"
	    },
	    docker: {
	        license: "JCR",
	        label: "Docker",
	        path: "docker"
	    },
	    gems: {
	        license: "PRO",
	        label: "Gems",
	        path: "gems"
	    },
	    gitlfs: {
	        license: "PRO",
	        label: "GitLfs",
	        path: "gitlfs"
	    },
	    npm: {
	        license: "PRO",
	        label: "Npm",
	        path: "npm"
	    },
	    nuget: {
	        license: "PRO",
	        label: "NuGet",
	        path: "nuget"
	    },
	    opkg: {
	        license: "PRO",
	        label: "Opkg",
	        path: "opkg"
	    },
	    p2: {
	        license: "PRO",
	        label: "P2",
	        path: "p2"
	    },
	    puppet: {
	        license: "PRO",
	        label: "Puppet",
	        path: "puppet"
	    },
	    helm: {
	        license: "JCR",
	        label: "Helm",
	        path: "helm"
	    },
	    go: {
	        license: "PRO",
	        label: "Go",
	        path: "go"
	    },
	    pypi: {
	        license: "PRO",
	        label: "pypi",
	        path: "pypi"
	    },
	    vagrant: {
	        license: "PRO",
	        label: "Vagrant",
	        path: "vagrant"
	    },
	    vcs: {
	        license: "PRO",
	        label: "VCS",
	        path: "vcs"
	    },
	    yum: {
	        license: "PRO",
	        label: "RPM",
	        path: "yum"
	    },
	    sshserver: {
	        license: "OSS",
	        label: "SSH Authentication"
	    },
	    sslcertificates: {
	        license: "PRO",
	        label: "SSL Certificates"
	    },
	    "native-ui": {
	        license: "JCR",
	        label: "Package Viewer"
	    },
	    bundles: {
	        license: "ENTPLUS",
	        label: "Release Bundles"
	    }
	};
	
	exports.FEATURES = FEATURES;
	// Features that are hidden for AOL
	var HIDDEN_AOL_FEATURES = ["backups", "highavailability", "httpsso", "proxies", "register_pro", "indexer", "services", "systeminfo", "maintenance", "configdescriptor", "securitydescriptor", "system", "mail", "supportpage", "reverse_proxies", "sshserver"];
	
	exports.HIDDEN_AOL_FEATURES = HIDDEN_AOL_FEATURES;
	var HIDDEN_EDGE_FEATURES = ["replications", "distribution", "builds", "xray", "licenses", "sslcertificates"];
	
	exports.HIDDEN_EDGE_FEATURES = HIDDEN_EDGE_FEATURES;
	// Features that are not hidden for dedicated AOL
	var SHOW_ON_DEDICATED_AOL = ["indexer", "xray"];
	
	exports.SHOW_ON_DEDICATED_AOL = SHOW_ON_DEDICATED_AOL;
	// Features that are hidden for OSS
	var HIDDEN_OSS_FEATURES = ["register_pro"];
	
	exports.HIDDEN_OSS_FEATURES = HIDDEN_OSS_FEATURES;
	// Service for accessing allowed features and licenses
	
	var ArtifactoryFeatures = exports.ArtifactoryFeatures = (function () {
	    function ArtifactoryFeatures(FooterDao, ArtifactoryState, $location, $q, GoogleAnalytics) {
	        var _this = this;
	
	        _classCallCheck(this, ArtifactoryFeatures);
	
	        this.footerDao = FooterDao;
	        this.ArtifactoryState = ArtifactoryState;
	        this.$location = $location;
	        this.GoogleAnalytics = GoogleAnalytics;
	        var defer = $q.defer();
	        this.whenReady = defer.promise;
	        this.footerDao.get().then(function () {
	            _this.GoogleAnalytics._setUpGA();
	            defer.resolve();
	        });
	    }
	
	    _createClass(ArtifactoryFeatures, {
	        getAllowedLicense: {
	            value: function getAllowedLicense(featureName) {
	                featureName = featureName && featureName.toLowerCase();
	                var feature = FEATURES[featureName] || FEATURES["default"];
	                return feature.license;
	            }
	        },
	        isEnabled: {
	            value: function isEnabled(feature) {
	                if (!feature) {
	                    return true;
	                }
	                var allowedLicense = this.getAllowedLicense(feature);
	                var currentLicense = this.getCurrentLicense();
	                if (feature === "trustedkeys" && !this.isEdgeNode() && !this.isEnterprisePlus()) {
	                    return false;
	                }
	                if (LICENSES_LEVELS[currentLicense] === 1 && LICENSES_LEVELS[allowedLicense] === 1) {
	                    if ((currentLicense === "ConanCE" || currentLicense === "JCR") && _.includes(["ivy", "sbt", "gradle", "maven"], feature)) {
	                        return false;
	                    }
	                    if ((currentLicense === "OSS" || currentLicense === "JCR") && feature === "conan") {
	                        return false;
	                    }
	                    if (currentLicense === "JCR" && feature === "reverse_proxies") {
	                        return true;
	                    }
	                }
	
	                return LICENSES_LEVELS[currentLicense] >= LICENSES_LEVELS[allowedLicense];
	            }
	        },
	        isDisabled: {
	            value: function isDisabled(feature) {
	                return !this.isEnabled(feature);
	            }
	        },
	        isHidden: {
	            value: function isHidden(feature) {
	                if (!feature) {
	                    return false;
	                }
	                feature = feature.toLowerCase();
	                if (feature === "httpsso" && this.isAol() && this.footerDao.getInfo().httpSsoEnabledAOL) {
	                    return;
	                }return this.isAol() && _.contains(HIDDEN_AOL_FEATURES, feature) && !(this.isDedicatedAol() && _.contains(SHOW_ON_DEDICATED_AOL, feature)) || this.isOss() && _.contains(HIDDEN_OSS_FEATURES, feature) || this.isEdgeNode() && _.contains(HIDDEN_EDGE_FEATURES, feature) || this.isNonCommercial() && _.contains(HIDDEN_OSS_FEATURES, feature);
	            }
	        },
	        isVisible: {
	            value: function isVisible(feature) {
	                return !this.isHidden(feature);
	            }
	        },
	        isAol: {
	            value: function isAol() {
	                if (localStorage._aol != undefined) {
	                    return localStorage._aol === "true";
	                } // For debugging only
	                return this.footerDao.getInfo() && this.footerDao.getInfo().isAol;
	            }
	        },
	        isDedicatedAol: {
	            value: function isDedicatedAol() {
	                return this.footerDao.getInfo() && this.footerDao.getInfo().isDedicatedAol;
	            }
	        },
	        isCloudProviderConfigured: {
	            value: function isCloudProviderConfigured() {
	                return this.footerDao.getInfo() && this.footerDao.getInfo().isCloudProviderConfigured;
	            }
	        },
	        getCurrentLicense: {
	            value: function getCurrentLicense() {
	                return this.footerDao.getInfo() && this.footerDao.getInfo().versionID;
	            }
	        },
	        isOss: {
	            value: function isOss() {
	                return this.getCurrentLicense() === "OSS";
	            }
	        },
	        isEnterprisePlus: {
	            value: function isEnterprisePlus() {
	                return this.getCurrentLicense() === "ENTPLUS";
	            }
	        },
	        isEdgeNode: {
	            value: function isEdgeNode() {
	                return this.getCurrentLicense() === "EDGE";
	            }
	        },
	        isConanCE: {
	            value: function isConanCE() {
	                return this.getCurrentLicense() == "ConanCE";
	            }
	        },
	        isJCR: {
	            value: function isJCR() {
	                return this.getCurrentLicense() == "JCR";
	            }
	        },
	        isJCRDemo: {
	            value: function isJCRDemo() {
	
	                return this.isJCR() && localStorage.JCRDemo;
	            }
	        },
	        isNonCommercial: {
	            value: function isNonCommercial() {
	                return this.isOss() || this.isConanCE() || this.isJCR();
	            }
	        },
	        getFeatureName: {
	            value: function getFeatureName(feature) {
	                feature = feature && feature.toLowerCase();
	                return FEATURES[feature].label;
	            }
	        },
	        getFeatureLink: {
	            value: function getFeatureLink(feature) {
	                feature = feature && feature.toLowerCase();
	                if (FEATURES[feature] && FEATURES[feature].path) {
	                    return "http://service.jfrog.org/artifactory/addons/info/" + FEATURES[feature].path;
	                }
	            }
	        },
	        getGlobalName: {
	            value: function getGlobalName() {
	                return this.isJCR() ? "JFrog Container Registry" : "Artifactory";
	            }
	        }
	    });
	
	    return ArtifactoryFeatures;
	})();

/***/ }),

/***/ 165:
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
	
	var GoogleAnalytics = exports.GoogleAnalytics = (function () {
	    function GoogleAnalytics($timeout, $interval, $location, ArtifactoryState, FooterDao) {
	        var _this = this;
	
	        _classCallCheck(this, GoogleAnalytics);
	
	        this.$location = $location;
	        this.$interval = $interval;
	        this.$timeout = $timeout;
	        this.ArtifactoryState = ArtifactoryState;
	        this.footerDao = FooterDao;
	
	        this.footerDao.get().then(function () {
	            _this.allowGA = _this.footerDao.getInfo().isAol && !_this.footerDao.getInfo().isDedicatedAol || _.includes(_this.footerDao.getInfo().buildNumber, "SNAPSHOT");
	        });
	
	        this.artifactsPageCounter = "";
	    }
	
	    _createClass(GoogleAnalytics, {
	        _setUpGA: {
	            value: function _setUpGA() {
	                var _this = this;
	
	                if (this.allowGA) {
	
	                    // setup timeout settings
	                    this.GA = {
	                        active: true
	                    };
	
	                    var uaCode = this.footerDao.getInfo().gaAccount ? "UA-87840116-2" : "UA-87840116-1";
	
	                    (function (i, s, o, g, r, a, m) {
	                        i.GoogleAnalyticsObject = r;i[r] = i[r] || function () {
	                            (i[r].q = i[r].q || []).push(arguments);
	                        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;if (m) m.parentNode.insertBefore(a, m);
	                    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
	
	                    window.ga("create", uaCode, "auto");
	                    window.ga("set", "dataSource", "Artifactory UI");
	
	                    this.ArtifactoryState.setState("gaTrackPage", function () {
	                        var url = _this.$location.$$absUrl;
	                        if (url.slice(-2) == "//") return;
	
	                        // ignore entry to tree without path (user will redirect to first result in tree)
	                        if (url.match(/(#.+)/) && url.match(/(#.+)/)[1] == "#/artifacts/browse/tree/General/") return;
	
	                        // * * * * * * Calculating time inside artifacts page * * * * * * //
	
	                        if (url.match(/#\/artifacts/)) {
	                            // if in artifacts page
	                            var currentTime = Date.now();
	
	                            if (_this.artifactsPageCounter != "") {
	                                _this.timeOnArtifactsPage = currentTime - _this.artifactsPageCounter;
	                            }
	                            _this.artifactsPageCounter = currentTime;
	                        } else {
	                            // if not artifacts page
	                            if (_this.artifactsPageCounter) {
	                                _this.timeOnArtifactsPage = Date.now() - _this.artifactsPageCounter; // calculate time in case of leaving artifacts page
	                                delete _this.artifactsPageCounter;
	                            }
	                        }
	
	                        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
	
	                        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	                        //
	                        // Send pageview without the full path for artifacts browser page (tree and simple)
	                        //
	                        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	
	                        if (url.match(/\/browse\/tree\/|browse\/simple/)) {
	                            // If url location is in tree browse or simple browse ignore the path
	                            // from the url set to GA. leave only the relevant part of the URL.
	                            var match = url.match(/#.*(tree|simple)\/.*?\//);
	                            if (match) _this._sendPageView(match[0]);
	                        } else if (url.match(/(#.+)/)) {
	                            _this._sendPageView(url.match(/(#.+)/)[1]);
	                        }
	                    });
	
	                    this.ArtifactoryState.getState("gaTrackPage")();
	                }
	            }
	        },
	        _createRandomId: {
	            value: function _createRandomId() {
	
	                var text = "";
	                var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	
	                for (var i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	                return text;
	            }
	        },
	        _generateDimensions: {
	            value: function _generateDimensions() {
	
	                var randomId = this._createRandomId();
	                var date = new Date();
	
	                var timestamp = Math.floor(date.getTime() / 1000);
	
	                var sessionId = "S" + randomId + "-" + timestamp;
	                var interactionId = "I" + randomId + "-" + timestamp;
	
	                var dimensions = {
	                    timestamp: timestamp,
	                    sessionId: sessionId,
	                    interactionId: interactionId
	                };
	
	                return dimensions;
	            }
	        },
	        _sendPageView: {
	            value: function _sendPageView(pageUrl) {
	                var hitType = arguments[1] === undefined ? "pageview" : arguments[1];
	
	                var dimensions = this._generateDimensions();
	
	                window.ga("set", {
	                    page: pageUrl
	                });
	
	                if (this.timeOnArtifactsPage) {
	                    window.ga("send", {
	                        hitType: hitType,
	                        metric1: this.timeOnArtifactsPage,
	                        dimension4: dimensions.timestamp,
	                        dimension5: dimensions.interactionId,
	                        dimension6: dimensions.sessionId
	                    });
	                    delete this.timeOnArtifactsPage;
	                    return;
	                }
	
	                window.ga("send", {
	                    hitType: hitType,
	                    dimension4: dimensions.timestamp,
	                    dimension5: dimensions.interactionId,
	                    dimension6: dimensions.sessionId
	                });
	            }
	        },
	        trackEvent: {
	            value: function trackEvent(eventCategory, eventAction) {
	                var eventLabel = arguments[2] === undefined ? "undefined" : arguments[2];
	                var eventValue = arguments[3] === undefined ? null : arguments[3];
	                var dimension1 = arguments[4] === undefined ? "undefined" : arguments[4];
	                var dimension2 = arguments[5] === undefined ? "undefined" : arguments[5];
	                var dimension3 = arguments[6] === undefined ? "undefined" : arguments[6];
	
	                //this._generateDimensions();
	
	                if (this.allowGA && window.ga) {
	                    // Track google analytics event
	                    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
	                    // More on this here: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	
	                    var dimensions = this._generateDimensions();
	
	                    window.ga("send", {
	                        hitType: "event",
	                        eventCategory: eventCategory,
	                        eventAction: eventAction,
	                        eventLabel: eventLabel,
	                        eventValue: eventValue,
	                        dimension1: dimension1,
	                        dimension2: dimension2,
	                        dimension3: dimension3,
	                        dimension4: dimensions.timestamp,
	                        dimension5: dimensions.interactionId,
	                        dimension6: dimensions.sessionId
	                    });
	                }
	            }
	        }
	    });
	
	    return GoogleAnalytics;
	})();

/***/ }),

/***/ 166:
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
	
	var NativeBrowser = exports.NativeBrowser = (function () {
	    function NativeBrowser() {
	        _classCallCheck(this, NativeBrowser);
	    }
	
	    _createClass(NativeBrowser, {
	        isAllowed: {
	            value: function isAllowed(node) {
	                if (node.isInsideArchive()) {
	                    return false;
	                }return (node.isFolder() || node.isRepo()) && !node.isTrashcan() && !node.isInTrashcan();
	            }
	        },
	        pathFor: {
	            value: function pathFor(node) {
	                var path = "../list/" + node.fullpath;
	                if (!_.endsWith(path, "/")) path = path + "/"; // add '/' in the end
	                return path;
	            }
	        }
	    });
	
	    return NativeBrowser;
	})();

/***/ }),

/***/ 167:
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
	
	var API = _interopRequire(__webpack_require__(97));
	
	var EVENTS = _interopRequire(__webpack_require__(49));
	
	var ACTIONS = _interopRequire(__webpack_require__(168));
	
	var MESSAGES = _interopRequire(__webpack_require__(169));
	
	var ArtifactActions = exports.ArtifactActions = (function () {
	    function ArtifactActions(JFrogEventBus, ArtifactActionsDao, StashResultsDao, $state, $window, $rootScope, $timeout, JFrogNotifications, FooterDao, $sce, JFrogModal, selectTargetPath, selectDeleteVersions, PushToBintrayModal, DistributionDao, $q, JFrogIFrameDownload, NativeBrowser, User, GoogleAnalytics, ArtifactXrayDao) {
	        _classCallCheck(this, ArtifactActions);
	
	        this.$q = $q;
	        this.$state = $state;
	        this.$timeout = $timeout;
	        this.JFrogEventBus = JFrogEventBus;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.footerDao = FooterDao;
	        this.artifactActionsDao = ArtifactActionsDao;
	        this.stashResultsDao = StashResultsDao;
	        this.pushToBintrayModal = PushToBintrayModal;
	        this.distributionDao = DistributionDao;
	        this.modal = JFrogModal;
	        this.selectTargetPath = selectTargetPath;
	        this.selectDeleteVersions = selectDeleteVersions;
	        this.$window = $window;
	        this.$rootScope = $rootScope;
	        this.iframeDownload = JFrogIFrameDownload;
	        this.nativeBrowser = NativeBrowser;
	        this.$sce = $sce;
	        this.userService = User;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.ArtifactXrayDao = ArtifactXrayDao;
	    }
	
	    _createClass(ArtifactActions, {
	        perform: {
	            value: function perform(actionObj, node, context) {
	                var actionData = {
	                    actionTitle: ACTIONS[actionObj.name] ? ACTIONS[actionObj.name].title : actionObj.name,
	                    repoType: node.data.repoType,
	                    packageType: node.data.repoPkgType,
	                    triggeredFrom: context ? "context menu" : "drop down"
	                };
	
	                this.GoogleAnalytics.trackEvent("Artifacts", actionData.triggeredFrom, actionData.actionTitle, null, actionData.packageType, actionData.repoType);
	
	                return this["_do" + actionObj.name](node);
	            }
	        },
	        _doDownload: {
	            value: function _doDownload(actionObj) {
	                var _this = this;
	
	                if (actionObj.data.xrayShouldValidate) {
	                    this.ArtifactXrayDao.isBlocked({ repoKey: actionObj.data.repoKey, path: actionObj.data.path }).$promise.then(function (response) {
	                        if (response.status === 200) {
	                            _this.iframeDownload(actionObj.data.actualDownloadPath);
	                        }
	                    });
	                }
	            }
	        },
	        _doRefresh: {
	            value: function _doRefresh(node) {
	                this.JFrogEventBus.dispatch(EVENTS.ACTION_REFRESH, node);
	            }
	        },
	        _doCopy: {
	            value: function _doCopy(node, useNodePath) {
	                var _this = this;
	
	                var target = undefined;
	                var onActionDone = undefined;
	                onActionDone = function (retData) {
	                    target = retData.target;
	                    _this._performActionInServer("copy", node, target).then(function () {
	                        retData.onSuccess().then(function (response) {
	                            _this.JFrogEventBus.dispatch(EVENTS.ACTION_COPY, { node: node, target: target });
	                        });
	                    })["catch"](function (err) {
	                        retData.onFail(err.data.errors).then(onActionDone);
	                    });
	                };
	                this.selectTargetPath("copy", node, useNodePath).then(onActionDone);
	            }
	        },
	        _doMove: {
	            value: function _doMove(node, useNodePath) {
	                var _this = this;
	
	                var target = undefined;
	                var onActionDone = undefined;
	                onActionDone = function (retData) {
	                    target = retData.target;
	                    _this._performActionInServer("move", node, target).then(function (data) {
	                        retData.onSuccess().then(function (response) {
	                            _this.JFrogEventBus.dispatch(EVENTS.ACTION_MOVE, { node: node, target: target });
	                        });
	                    })["catch"](function (err) {
	                        retData.onFail(err.data.errors).then(onActionDone);
	                    });
	                };
	                this.selectTargetPath("move", node, useNodePath).then(onActionDone);
	            }
	        },
	        _doStashAction: {
	            value: function _doStashAction(node, action) {
	                var _this = this;
	
	                var target = undefined;
	                var onActionDone = undefined;
	                var dryRun = undefined;
	                onActionDone = function (retData) {
	                    target = retData.target;
	                    _this.stashResultsDao[action]({ name: "stash", repoKey: target.targetRepoKey }, {}).$promise.then(function () {
	                        retData.onSuccess().then(function (response) {
	                            _this.JFrogEventBus.dispatch(EVENTS.ACTION_MOVE_STASH, { node: node, target: { targetPath: "/", targetRepoKey: target.targetRepoKey } });
	                        });
	                    })["catch"](function (err) {
	                        _this.JFrogEventBus.dispatch(EVENTS.ACTION_REFRESH_STASH);
	                        retData.onFail(err.data.errors).then(onActionDone);
	                    });
	                };
	
	                dryRun = function () {
	                    var modalScope = dryRun.scope;
	                    _this.stashResultsDao["silent" + action.charAt(0).toUpperCase() + action.substring(1)]({ name: "stash", repoKey: modalScope.target.repoKey, dryRun: true }, {}).$promise.then(function (response) {
	                        modalScope.resultError = false;
	                        modalScope.dryRunResults = [response.info];
	                    })["catch"](function (response) {
	                        modalScope.resultError = true;
	                        modalScope.dryRunResults = response.data.errors;
	                    });
	                };
	
	                this.selectTargetPath(action + "Stash", node, false, dryRun).then(onActionDone);
	            }
	        },
	        _doCopyStash: {
	            value: function _doCopyStash(node) {
	                this._doStashAction(node, "copy");
	            }
	        },
	        _doMoveStash: {
	            value: function _doMoveStash(node) {
	                this._doStashAction(node, "move");
	            }
	        },
	        _doDiscardFromStash: {
	            value: function _doDiscardFromStash(node) {
	                var _this = this;
	
	                var doAction = function () {
	                    _this.stashResultsDao.discard({
	                        name: "stash",
	                        repoKey: node.data.repoKey,
	                        path: node.data.path
	                    }, {}).$promise.then(function (res) {
	                        if (res.status === 200) {
	                            _this.JFrogEventBus.dispatch(EVENTS.ACTION_DISCARD_FROM_STASH, node);
	                        }
	                    });
	                };
	
	                if (!node.alreadyDeleted) {
	                    this.modal.confirm("Are you sure you wish to discard '" + node.text + "' from stashed search results?", "Discard from stash", { confirm: "Discard" }).then(doAction);
	                } else doAction();
	            }
	        },
	        _doDiscardStash: {
	            value: function _doDiscardStash() {
	                var _this = this;
	
	                this.modal.confirm("Are you sure you wish to discard stashed search results?", "Discard search results", { confirm: "Discard" }).then(function () {
	                    _this.stashResultsDao["delete"]({ name: "stash" }).$promise.then(function () {
	                        _this.JFrogEventBus.dispatch(EVENTS.ACTION_DISCARD_STASH);
	                    });
	                });
	            }
	        },
	        _doShowInTree: {
	            value: function _doShowInTree(node) {
	                //stash
	                this.JFrogEventBus.dispatch(EVENTS.ACTION_EXIT_STASH, node);
	            }
	        },
	        _doUploadToBintray: {
	            value: function _doUploadToBintray(node) {
	                this.pushToBintrayModal.launchModal(node.type === "docker" ? "docker" : "artifact", {
	                    repoPath: node.data.repoKey + ":" + node.data.path
	                });
	            }
	        },
	        _doRedistribute: {
	            value: function _doRedistribute(node) {
	                this._doDistribute(node, true);
	            }
	        },
	        stripHtml: {
	            value: function stripHtml(htmlStrig) {
	                var tmp = document.createElement("DIV");
	                tmp.innerHTML = htmlStrig;
	                return tmp.textContent || tmp.innerText || htmlStrig;
	            }
	        },
	        hasHtmlElements: {
	            value: function hasHtmlElements(someString) {
	                return /<[a-z][\s\S]*>/i.test(someString);
	            }
	        },
	        _doDistribute: {
	            value: function _doDistribute(node) {
	                var _this = this;
	
	                var redistribute = arguments[1] === undefined ? false : arguments[1];
	
	                this.distributionDao.getAvailableDistributionRepos({}).$promise.then(function (data) {
	
	                    var modalInstance = undefined;
	                    _this.distributeModalScope = _this.$rootScope.$new();
	
	                    var nodeText = node.text ? node.text : node.data.text;
	                    if (nodeText.indexOf("<span") !== -1 || _this.hasHtmlElements(nodeText)) {
	                        nodeText = _this.stripHtml(nodeText);
	                    }
	
	                    var position = nodeText.split("/").length - 1;
	                    _this.nodeText = nodeText.split("/")[position];
	
	                    _this.distributeModalScope.title = "Distribute " + _this.nodeText;
	
	                    _this.distributeModalScope.data = {};
	
	                    var response = data.data;
	                    if (response.offlineMode) {
	                        _this.distributeModalScope.errorMessage = MESSAGES.actions.distribute.inOfflineMode.message;
	                        _this.distributeModalScope.messageType = MESSAGES.actions.distribute.inOfflineMode.messageType;
	                    } else if (!response.distributionRepoConfigured) {
	                        if (_this.userService.getCurrent().isAdmin()) {
	                            _this.distributeModalScope.errorMessage = MESSAGES.actions.distribute.noRepos.admin.message;
	                            _this.distributeModalScope.messageType = MESSAGES.actions.distribute.noRepos.admin.messageType;
	                        } else {
	                            _this.distributeModalScope.errorMessage = MESSAGES.actions.distribute.noRepos.nonAdmin.message;
	                            _this.distributeModalScope.messageType = MESSAGES.actions.distribute.noRepos.nonAdmin.messageType;
	                        }
	                    } else if (response.availableDistributionRepos.length === 0) {
	                        _this.distributeModalScope.errorMessage = MESSAGES.actions.distribute.noPermissions.message;
	                        _this.distributeModalScope.messageType = MESSAGES.actions.distribute.noPermissions.messageType;
	                    }
	
	                    if (redistribute) {
	                        _this.distributeModalScope.distributionRepositoriesOptions = [node.data.repoKey];
	                        _this.distributeModalScope.data.selectedRepo = node.data.repoKey;
	                        _this.distributeModalScope.redistribute = true;
	                    } else {
	                        _this.distributeModalScope.distributionRepositoriesOptions = _.map(data.data.availableDistributionRepos, "repoKey");
	                        _this.distributeModalScope.data.selectedRepo = null;
	                    }
	
	                    _this.distributeModalScope.data.async = true;
	                    _this.distributeModalScope.data.publish = true;
	                    _this.distributeModalScope.data.overrideExistingFiles = false;
	
	                    _this.distributeModalScope.distribute = function () {
	                        _this._resetChanges();
	                        _this.distributionDao.distributeArtifact({
	                            targetRepo: _this.distributeModalScope.data.selectedRepo,
	                            async: _this.distributeModalScope.data.async,
	                            publish: _this.distributeModalScope.data.publish,
	                            overrideExistingFiles: _this.distributeModalScope.data.overrideExistingFiles
	                        }, { repoKey: node.data.repoKey, path: node.data.path }).$promise.then(function (res) {
	                            // Success
	                            if (_this.distributeModalScope.data.async) {
	                                modalInstance.close();
	                            } else {
	                                _this._runRulesTest(res);
	                            }
	                        });
	                    };
	
	                    // DRY RUN
	                    _this.distributeModalScope.dryRun = function () {
	                        _this._resetChanges();
	                        _this.distributionDao.distributeArtifact({
	                            targetRepo: _this.distributeModalScope.data.selectedRepo,
	                            async: _this.distributeModalScope.data.async,
	                            publish: _this.distributeModalScope.data.publish,
	                            overrideExistingFiles: _this.distributeModalScope.data.overrideExistingFiles,
	                            dryRun: true
	                        }, { repoKey: node.data.repoKey, path: node.data.path }).$promise.then(function (res) {
	                            _this._runRulesTest(res);
	                        });
	                    };
	
	                    modalInstance = _this.modal.launchModal("distribute_modal", _this.distributeModalScope, 650);
	                });
	            }
	        },
	        _runRulesTest: {
	            value: function _runRulesTest(res) {
	                var _this = this;
	
	                var ind = 0;
	                var result = res.data;
	                _.forEach(result, function (value, key) {
	                    if (key == "distributed") {
	                        (function () {
	                            var distributed = result[key];
	
	                            _.forEach(distributed, function (value, key) {
	                                distributed[key].customId = "dis" + ind;
	                                ind++;
	
	                                var packages = distributed[key].packages;
	
	                                _.forEach(packages, function (value, key) {
	                                    packages[key].customId = "pac" + ind;
	                                    ind++;
	
	                                    var versions = packages[key].versions;
	                                    _.forEach(versions, function (value, key) {
	                                        versions[key].customId = "ver" + ind;
	                                        ind++;
	                                    });
	                                });
	                            });
	                        })();
	                    }
	                });
	                this.distributeModalScope.data.dryRunResults = result;
	
	                _.forEach(result.messagesByPath, function (value) {
	                    if (value.warnings) {
	                        _this.distributeModalScope.data.warningExist = value.warnings.length ? true : false;
	                    }
	                    if (value.errors) {
	                        _this.distributeModalScope.data.errorsExist = value.errors.length ? true : false;
	                    }
	                });
	
	                this._expandModal();
	            }
	        },
	        _expandModal: {
	            value: function _expandModal() {
	                $("form[name=\"distributeRepo\"]").closest(".modal-dialog").animate({
	                    maxWidth: "850px"
	                }, 500);
	            }
	        },
	        _resetChanges: {
	            value: function _resetChanges() {
	                // RESET
	                this.distributeModalScope.data.dryRunResults = null;
	                this.distributeModalScope.data.toggleSuccessTitle = null;
	                this.distributeModalScope.data.toggleWarnTitle = null;
	                this.distributeModalScope.data.toggleErrorTitle = null;
	                this.distributeModalScope.data.warningExist = null;
	                this.distributeModalScope.data.errorsExist = null;
	            }
	        },
	        _doCopyContent: {
	            value: function _doCopyContent(node) {
	                this._doCopy(node, false);
	            }
	        },
	        _doMoveContent: {
	            value: function _doMoveContent(node) {
	                this._doMove(node, false);
	            }
	        },
	        _doWatch: {
	            value: function _doWatch(node) {
	                var _this = this;
	
	                this._performActionInServer("watch", node, {}, { param: "watch" }).then(function (response) {
	                    node.data.refreshWatchActions().then(function () {
	                        _this.JFrogEventBus.dispatch(EVENTS.ACTION_WATCH, node);
	                    });
	                });
	            }
	        },
	        _doUnwatch: {
	            value: function _doUnwatch(node) {
	                var _this = this;
	
	                this._performActionInServer("watch", node, {}, { param: "unwatch" }).then(function (response) {
	                    node.data.refreshWatchActions().then(function () {
	                        _this.JFrogEventBus.dispatch(EVENTS.ACTION_UNWATCH, node);
	                    });
	                });
	            }
	        },
	        _doView: {
	            value: function _doView(node) {
	                var _this = this;
	
	                this._performActionInServer("view", node).then(function (response) {
	                    _this.modal.launchCodeModal(node.data.text, response.data.fileContent, { name: node.data.mimeType });
	                });
	            }
	        },
	        _doDeletePermanently: {
	            value: function _doDeletePermanently(node) {
	                this._doDelete(node);
	            }
	        },
	        _doDelete: {
	            value: function _doDelete(node) {
	                var _this = this;
	
	                var permanent = this.footerDao.getInfo().trashDisabled || node.data.isInTrashcan();
	
	                //allowPermDeletes is disabled for now (30.12.15)
	                var allowPerm = false; //this.footerDao.getInfo().allowPermDeletes;
	
	                var onPermChange = function (perm, scope) {
	                    scope.content = _this.$sce.trustAsHtml("Are you sure you wish to" + (perm ? " <span class=\"highlight-alert\">permanently</span> " : " ") + "delete this file?");
	                };
	
	                this.modal.confirm("Are you sure you wish to" + (permanent ? " <span class=\"highlight-alert\">permanently</span> " : " ") + "delete this file?", "Delete " + node.data.text, { confirm: "Delete" }, allowPerm ? "Delete permanently" : undefined, onPermChange).then(function (permDelete) {
	                    _this._performActionInServer("delete", node, permDelete ? { permDelete: permDelete } : undefined).then(function () {
	                        _this.JFrogEventBus.dispatch(EVENTS.ACTION_DELETE, node);
	                    });
	                });
	            }
	        },
	        _doDeleteContent: {
	            value: function _doDeleteContent(node) {
	                var _this = this;
	
	                var permanent = this.footerDao.getInfo().trashDisabled;
	
	                this.modal.confirm("Are you sure you want to delete the content of this repository? All artifacts will be" + (permanent ? " <span class=\"highlight-alert\">permanently</span> " : " ") + "deleted.", "Delete Content Of '" + node.data.text + "'", { confirm: "Delete Content" }).then(function () {
	                    return _this._performActionInServer("delete", node);
	                }).then(function (response) {
	                    return _this.JFrogEventBus.dispatch(EVENTS.ACTION_DELETE_CONTENT, node);
	                });
	            }
	        },
	        _doDeleteVersions: {
	            value: function _doDeleteVersions(node) {
	                var _this = this;
	
	                var versions;
	                this.selectDeleteVersions(node).then(function (_versions) {
	                    versions = _versions;
	                    return _this.modal.confirm("Are you sure you wish to delete " + _versions.length + " selected versions?\n\nThis folder may contain artifacts that are part of the result of or used as dependencies in published build(s).", "Delete " + _versions.length + " Versions");
	                }).then(function () {
	                    var promise = _this._performActionInServer("deleteversions", null, versions);
	                    promise.then(function () {
	                        _this._doRefresh(node);
	                    });
	                    return promise;
	                });
	            }
	        },
	        _doZap: {
	            value: function _doZap(node) {
	                this._performActionInServer("zap", node).then(function (data) {});
	            }
	        },
	        _doZapCaches: {
	            value: function _doZapCaches(node) {
	                this._performActionInServer("zapVirtual", node).then(function (data) {});
	            }
	        },
	        _doRecalculateIndex: {
	            value: function _doRecalculateIndex(node) {
	                //        console.log('recalculate index', node);
	                this._performActionInServer("calculateIndex", node, { type: node.data.repoPkgType, repoKey: node.data.repoKey }).then(function (data) {});
	            }
	        },
	        _doCalculateDebianCoordinates: {
	            value: function _doCalculateDebianCoordinates(node) {
	                this._performActionInServer("calculateDebianCoordinates", node, { type: "Debian-Cache", repoKey: node.data.repoKey }).then(function (data) {});
	            }
	        },
	        _doRestoreToOriginalPath: {
	            value: function _doRestoreToOriginalPath(node) {
	                return this._doRestore(node, false);
	            }
	        },
	        _doRestore: {
	            value: function _doRestore(node) {
	                var _this = this;
	
	                var chooseTarget = arguments[1] === undefined ? true : arguments[1];
	
	                var defer = this.$q.defer();
	
	                var restoreTarget = {
	                    targetPath: node.data.path.indexOf("/") !== -1 ? node.data.path.substr(node.data.path.indexOf("/")) : "/",
	                    targetRepoKey: node.data.path.indexOf("/") !== -1 ? node.data.path.substr(0, node.data.path.indexOf("/")) : node.data.path
	                };
	
	                var onActionDone = function (retData) {
	                    var target = retData.target;
	                    _this._performActionInServer("restore", node, target).then(function (data) {
	                        if (retData.onSuccess) retData.onSuccess().then(function (response) {
	                            _this.JFrogEventBus.dispatch(EVENTS.ACTION_MOVE, { node: node, target: target });
	                            defer.resolve();
	                        });else {
	                            defer.resolve();
	                        }
	                    })["catch"](function (err) {
	                        if (retData.onFail) retData.onFail(err.data.errors).then(onActionDone);
	                        defer.reject();
	                    });
	                };
	                if (chooseTarget) {
	                    this.selectTargetPath("restore", node, false, false, restoreTarget).then(onActionDone);
	                } else {
	                    onActionDone({ target: restoreTarget });
	                }
	
	                return defer.promise;
	                /*
	                        this.modal.confirm('Are you sure you wish to restore this file?', 'Restore ' + node.data.text,
	                            {confirm: 'Restore'})
	                            .then(() => this._performActionInServer('restore', node,restoreTarget))
	                            .then((response) => this.JFrogEventBus.dispatch(EVENTS.ACTION_MOVE,{node: node, target: restoreTarget}));
	                */
	            }
	        },
	        _doEmptyTrash: {
	            value: function _doEmptyTrash(node) {
	                var _this = this;
	
	                this.modal.confirm("Are you sure you want to empty the trash can?", "Empty Trash", { confirm: "Empty Trash" }).then(function () {
	                    return _this._performActionInServer("emptytrash", node);
	                }).then(function (response) {
	                    return _this.JFrogEventBus.dispatch(EVENTS.TREE_REFRESH, node);
	                });
	            }
	        },
	        _doSearchTrash: {
	            value: function _doSearchTrash(node) {
	                this.$state.go("search", { searchType: "trash" });
	            }
	        },
	        _doDownloadFolder: {
	            value: function _doDownloadFolder(node) {
	                var _this = this;
	
	                this.artifactActionsDao.performGet({
	                    action: "downloadfolderinfo",
	                    path: node.data.path,
	                    repoKey: node.data.repoKey
	                }).$promise.then(function (data) {
	                    var modalInstance = undefined;
	                    var modalScope = _this.$rootScope.$new();
	                    modalScope.totalSize = data.data.sizeMB;
	                    modalScope.filesCount = data.data.totalFiles;
	                    modalScope.folderName = node.data.text;
	                    modalScope.archiveTypes = ["zip", "tar", "tar.gz", "tgz"];
	                    modalScope.selection = { archiveType: "zip" };
	                    modalScope.options = { includeChecksumFiles: false };
	                    modalScope.download = function () {
	                        _this.iframeDownload("" + API.API_URL + "/artifactactions/downloadfolder?repoKey=" + node.data.repoKey + "&path=" + encodeURIComponent(node.data.path) + "&archiveType=" + modalScope.selection.archiveType + "&includeChecksumFiles=" + modalScope.options.includeChecksumFiles, "There are too many folder download requests currently running, try again later.");
	                        modalInstance.close();
	                    };
	
	                    modalScope.isHighlighted = function (ind) {
	                        var search = $(".blocked-items-dnd-list").find("li").eq(ind).find(".ui-select-highlight").length;
	                        return search ? true : false;
	                    };
	
	                    modalScope.cancel = function () {
	                        return modalInstance.close();
	                    };
	                    modalInstance = _this.modal.launchModal("download_folder_modal", modalScope, "sm");
	                });
	            }
	        },
	        _doNativeBrowser: {
	            value: function _doNativeBrowser(node) {
	                this.$window.open(this.nativeBrowser.pathFor(node.data), "_blank");
	            }
	        },
	        _doFavorites: {
	            value: function _doFavorites(node) {
	                var repoKey = node.data.repoKey;
	
	                if (!localStorage.favoritesRepos) {
	                    localStorage.setItem("favoritesRepos", JSON.stringify({ favoritesRepos: [repoKey] }));
	                } else {
	                    var favoritesRepos = JSON.parse(localStorage.favoritesRepos);
	
	                    var isRepoInFavorites = _.contains(favoritesRepos.favoritesRepos, repoKey);
	
	                    if (isRepoInFavorites) {
	                        favoritesRepos.favoritesRepos = _.remove(favoritesRepos.favoritesRepos, function (i) {
	                            return i !== repoKey;
	                        }); // Remove from favorites
	                    } else {
	                        favoritesRepos.favoritesRepos.push(repoKey); // Add to favorites
	                    }
	                    localStorage.setItem("favoritesRepos", JSON.stringify({ favoritesRepos: favoritesRepos.favoritesRepos }));
	                    this.JFrogEventBus.dispatch(EVENTS.ACTION_FAVORITES);
	                    if (localStorage.filterFavorites) this.JFrogEventBus.dispatch(EVENTS.TREE_REFRESH_FILTER);
	                }
	                delete node.$cachedCMItems;
	            }
	        },
	        _performActionInServer: {
	
	            // Do the actual action on the server via the DAO:
	            value: function _performActionInServer(actionName, node) {
	                var extraData = arguments[2] === undefined ? {} : arguments[2];
	                var extraParams = arguments[3] === undefined ? {} : arguments[3];
	
	                var data = undefined;
	                if (node) {
	                    data = angular.extend({
	                        repoKey: node.data.repoKey,
	                        path: node.data.path,
	                        param: extraParams.param
	                    }, extraData);
	                } else {
	                    data = extraData;
	                }
	                var params = angular.extend({ action: actionName }, extraParams);
	                return this.artifactActionsDao.perform(params, data).$promise;
	            }
	        }
	    });
	
	    return ArtifactActions;
	})();

	//            console.log(data);

	// console.log(data);

	//            console.log(data);

/***/ }),

/***/ 168:
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
	    Watch: { title: "Watch", icon: "icon-watch" },
	    Unwatch: { title: "Unwatch", icon: "icon-unwatch" },
	    Download: { title: "Download", icon: "icon-download" },
	    DownloadFolder: { title: "Download", icon: "icon-download" },
	    View: { title: "View", icon: "icon-view" },
	    Delete: { title: "Delete", icon: "icon-clear" },
	    DeletePermanently: { title: "Delete Permanently", icon: "icon-clear" },
	    Copy: { title: "Copy", icon: "icon-copy" },
	    Move: { title: "Move", icon: "icon-move" },
	    CopyStash: { title: "Copy Stash to Repository", icon: "icon-copy" },
	    MoveStash: { title: "Move Stash to Repository", icon: "icon-move" },
	    ShowInTree: { title: "Show In Tree", icon: "icon-show-in-tree" },
	    DiscardFromStash: { title: "Discard from Stash", icon: "icon-delete-content" },
	    DiscardStash: { title: "Discard Search Results", icon: "icon-delete-content" },
	    DeleteContent: { title: "Delete Content", icon: "icon-clear" },
	    CopyContent: { title: "Copy Content", icon: "icon-copy" },
	    MoveContent: { title: "Move Content", icon: "icon-move" },
	    DeleteVersions: { title: "Delete Versions", icon: "icon-delete-versions" },
	    Refresh: { title: "Refresh", icon: "icon-refresh" },
	    UploadToBintray: { title: "Push to Bintray", icon: "icon-bintray" },
	    Distribute: { title: "Distribute to Bintray", icon: "icon-distribution-repo" },
	    Redistribute: { title: "Redistribute", icon: "icon-distribution-repo" },
	    Zap: { title: "Zap Cache", icon: "icon-zap" },
	    ZapCaches: { title: "Zap Caches", icon: "icon-zap" },
	    RecalculateIndex: { title: "Recalculate Index", icon: "icon-re-index" },
	    CalculateDebianCoordinates: { title: "Calculate Coordinates", icon: "icon-re-index" },
	    NativeBrowser: { title: "Native Browser", icon: "icon-simple-browser" },
	    EmptyTrash: { title: "Empty Trash Can", icon: "icon-trash" },
	    SearchTrash: { title: "Search Trash Can", icon: "icon-search" },
	    Restore: { title: "Restore", icon: "icon-trashcan-restore" },
	    IgnoreAlert: { title: "Ignore Alert", icon: "icon-xray-ignore-alert" },
	    UnignoreAlert: { title: "Un-Ignore Alert", icon: "icon-xray-alert" },
	    Favorites: { title: "Add to Favorites", icon: "icon-star" }
	};

/***/ }),

/***/ 169:
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
	 * Created by tomere on 2/22/2017.
	 */
	"use strict";
	
	module.exports = {
	    actions: {
	        distribute: {
	            noRepos: {
	                admin: {
	                    message: "No distribution repositories are configured. To distribute artifacts and builds, <a class=\"jf-link\" href=\"#/admin/repositories/distribution\">create a Distribution repository</a>.\n                              To learn about distribution repositories, refer to the Artifactory <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Distribution+Repository\">User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                    messageType: "alert-info"
	                },
	                nonAdmin: {
	                    message: "No distribution repositories are configured.\n                              To learn about distribution repositories, refer to the Artifactory <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Distribution+Repository\">User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                    messageType: "alert-info"
	                }
	            },
	            inOfflineMode: {
	                message: "Global offline mode is enabled. To allow distribution, disable the global offline mode through the General Configuration page.",
	                messageType: "alert-danger"
	            },
	            noPermissions: {
	                message: "You do not have distribute and deploy permissions.",
	                messageType: "alert-danger"
	            }
	        },
	        deploy: {
	            deployToDistRepoErrorMessage: {
	                message: "File(s) cannot be directly deployed to a distribution repository. Instead, use the \"Distribute\" action on the relevant repository or select an alternative target repository.",
	                messageType: "alert-danger"
	            },
	            deployPermissionsErrorMessage: {
	                message: "You do not have deploy permission",
	                messageType: "alert-danger"
	            },
	            hasNoDefaultDeployRepo: {
	                message: "This virtual repository is not configured with a default deployment repository. To learn about configuring virtual repositories, refer to the <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Deploying+Artifacts#DeployingArtifacts-DeployingtoaVirtualRepository\" target=\"_blank\">Artifactory User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                messageType: "alert-warning"
	            },
	            cannotDeployToRemote: {
	                message: "Cannot deploy to a remote repository. To learn about remote repositories, refer to the <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Remote+Repositories\" target=\"_blank\">Artifactory User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                messageJCR: "Cannot deploy to a remote repository. To learn about remote repositories, refer to the <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/JCR/Remote+Repositories\" target=\"_blank\">JFrog Container Registry User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                messageType: "alert-danger"
	            },
	            cannotDeployToTrashCan: {
	                message: "Cannot deploy to Trash Can. To learn about the Trash Can, refer to the <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Browsing+Artifactory#BrowsingArtifactory-TrashCan\" target=\"_blank\">Artifactory User Guide <i class=\"icon icon-external-link\"></i></a>.",
	                messageType: "alert-danger"
	            } }
	    },
	    set_me_up: {
	        puppet: {
	            puppetClientVersion: "If you are using Puppet version 4.9.1 and below, you need to modify your reverse proxy configuration. For details, refer to <a class=\"jf-link\" href=\"https://www.jfrog.com/confluence/display/RTF/Puppet+Repositories#PuppetRepositories-UsingPuppet4.9.1andBelow\" target=\"_blank\">JFrog Artifactory User Guide <i class=\"icon icon-external-link\"></i></a>."
	        },
	        hasNoDeployPermissions: {
	            message: "You do not have deploy permissions to this repository"
	        },
	        hasNoRepositoriesOfType: {
	            message: "No repositories match the selected tool"
	        }
	    },
	    xray_tab: {
	        blocked_artifact: "Xray has a policy blocking this artifact for download.",
	        blocked_artifact_ignored: "Artifactory’s Xray configuration has overridden Xray’s policy blocking the download of this artifact."
	    }
	};

/***/ }),

/***/ 170:
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
	
	var SNIPPETS = _interopRequire(__webpack_require__(171));
	
	var SNIPPETS_JCR = _interopRequire(__webpack_require__(172));
	
	var FIELD_OPTIONS = _interopRequire(__webpack_require__(134));
	
	var MESSAGES = _interopRequire(__webpack_require__(169));
	
	var SetMeUpModal = exports.SetMeUpModal = (function () {
	    function SetMeUpModal(JFrogModal, ArtifactoryState, SetMeUpDao, ArtifactDeployDao, RepoDataDao, JFrogEventBus, JFrogNotifications, FilteredResourceDao, GoogleAnalytics, RepositoriesDao, ReverseProxiesDao, GeneralConfigDao, ArtifactoryFeatures, ArtifactViewsDao, User, UserProfileDao, parseUrl, $sce, $rootScope, $timeout, $compile, DockerStatusDao) {
	        _classCallCheck(this, SetMeUpModal);
	
	        this.modal = JFrogModal;
	        this.setMeUpDao = SetMeUpDao;
	        this.artifactDeployDao = ArtifactDeployDao;
	        this.userProfileDao = UserProfileDao;
	        this.repoDataDao = RepoDataDao;
	        this.JFrogEventBus = JFrogEventBus;
	        this.artifactoryNotifications = JFrogNotifications;
	        this.filteredResourceDao = FilteredResourceDao;
	        this.repositoriesDao = RepositoriesDao;
	        this.dockerStatusDao = DockerStatusDao.getInstance();
	        this.reverseProxiesDao = ReverseProxiesDao;
	        this.artifactoryFeatures = ArtifactoryFeatures;
	        this.artifactViewsDao = ArtifactViewsDao;
	        this.generalConfigDao = GeneralConfigDao;
	        this.artifactoryState = ArtifactoryState;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.user = User.getCurrent();
	        this.parseUrl = parseUrl;
	        this.$sce = $sce;
	        this.$rootScope = $rootScope;
	        this.$timeout = $timeout;
	        this.$compile = $compile;
	        this.MESSAGES = MESSAGES.set_me_up;
	
	        this.repoPackageTypes = FIELD_OPTIONS.repoPackageTypes.slice(0); //make a copy
	
	        this.resolveOnlyWithVirtualRepo = ["helm"];
	
	        this._removeDisabledFeatures();
	    }
	
	    _createClass(SetMeUpModal, {
	        _removeDisabledFeatures: {
	            value: function _removeDisabledFeatures() {
	                var _this = this;
	
	                this.repoPackageTypes = _.filter(this.repoPackageTypes, function (item) {
	                    return !(item.value === "supportbundle" && _this.artifactoryFeatures.isJCR()) && !_this.artifactoryFeatures.isDisabled(item.value);
	                });
	            }
	        },
	        launch: {
	            value: function launch(node) {
	                var disableToolAndRepoChange = arguments[1] === undefined ? false : arguments[1];
	
	                this.node = node;
	                this.disableToolAndRepoChange = disableToolAndRepoChange;
	                this._initSetMeUpScope();
	                this.modalInstance = this.modal.launchModal("set_me_up_modal", this.setMeUpScope);
	                this.setMeUpScope.gotoInjectionMode();
	            }
	        },
	        _getSetMeUpData: {
	            value: function _getSetMeUpData() {
	                var _this = this;
	
	                this.setMeUpDao.get().$promise.then(function (data) {
	                    //            let url = new URL(data.baseUrl) //CAUSES PROBLEM ON IE, NOT REALY NEEDED...
	
	                    var parser = _this.parseUrl(data.baseUrl);
	                    _this.setMeUpScope.baseUrl = parser.href;
	                    _this.setMeUpScope.baseUrlNoHttp = _this.setMeUpScope.baseUrl.split("://")[1];
	                    _this.setMeUpScope.host = _this.artifactoryFeatures.isAol() ? parser.host.split(":")[0] : parser.host; //split by ':' in aol to remove the port number that IE returns in .host
	                    _this.setMeUpScope.cleanHost = parser.host.split(":")[0];
	                    _this.setMeUpScope.serverId = data.serverId;
	                    _this.setMeUpScope.protocol = parser.protocol + "//";
	                    _this.setMeUpScope.path = parser.pathname;
	                    _this.setMeUpScope.aolHostName = data.hostname;
	
	                    if (!_this.setMeUpScope.path.startsWith("/")) {
	                        _this.setMeUpScope.path = "/" + _this.setMeUpScope.path;
	                    }
	
	                    data.repoKeyTypes.sort(function (a, b) {
	                        return a.repoKey > b.repoKey ? 1 : -1;
	                    });
	                    _this.setMeUpScope.reposAndTypes = data.repoKeyTypes.map(function (item) {
	                        return {
	                            text: item.repoKey,
	                            value: item.repoType.toLowerCase(),
	                            read: item.canRead,
	                            deploy: item.canDeploy,
	                            local: item.isLocal,
	                            remote: item.isRemote,
	                            virtual: item.isVirtual,
	                            defaultDeploymentConfigured: item.isDefaultDeploymentConfigured
	                        };
	                    });
	
	                    // Select the repo according to current node
	                    for (var i = 0; i < _this.setMeUpScope.reposAndTypes.length; i++) {
	
	                        // console.log(this.setMeUpScope.reposAndTypes[i]);
	                        if (_this.setMeUpScope.reposAndTypes[i].text.toLowerCase() == _this.setMeUpScope.node.text.toLowerCase() || _this.setMeUpScope.reposAndTypes[i].text.concat("-cache").toLowerCase() == _this.setMeUpScope.node.text.toLowerCase()) {
	                            _this.setMeUpScope.selection.repo = _this.setMeUpScope.reposAndTypes[i];
	                            _this.setMeUpScope.resolveSnippet();
	                            break;
	                        }
	                    }
	
	                    var repoData = _this._getRepoData(_this.setMeUpScope);
	
	                    //Populate general snippets
	                    _this._setGeneralSnippets(repoData);
	
	                    _this._setRepositories(_this.setMeUpScope);
	
	                    _this._setShowSettings(_this.setMeUpScope);
	                });
	            }
	        },
	        _getBaseUrl: {
	            value: function _getBaseUrl() {
	                var _this = this;
	
	                this.generalConfigDao.get().$promise.then(function (data) {
	                    _this.setMeUpScope.noBaseUrl = !data.customUrlBase;
	                });
	            }
	        },
	        _initSetMeUpScope: {
	            value: function _initSetMeUpScope() {
	                var _this = this;
	
	                var setMeUpDao = this.setMeUpDao;
	                this.setMeUpScope = this.$rootScope.$new();
	
	                this.setMeUpScope.MESSAGES = this.MESSAGES;
	                this.setMeUpScope.settingPage = false;
	                this.setMeUpScope.id = this.setMeUpScope.$id;
	                this.setMeUpScope.$sce = this.$sce;
	                this.setMeUpScope.settings = {};
	                this.setMeUpScope.status = {};
	                this.setMeUpScope.selection = {};
	                this.setMeUpScope.disableToolAndRepoChange = this.disableToolAndRepoChange;
	                this.setMeUpScope.close = function () {
	                    return _this.modalInstance.close();
	                };
	                this.setMeUpScope.title = "Set Me Up";
	                this.setMeUpScope.shownRepos = [];
	                this.setMeUpScope.deploySnippets = [];
	                this.setMeUpScope.readSnippets = [];
	                this.setMeUpScope.generalSnippets = [];
	                this.setMeUpScope.adminUser = this.user.isAdmin();
	                this.setMeUpScope.passwordInputPlaceholder = "Type Password";
	                this.setMeUpScope.insertCredentialsText = "Type password to insert your credentials to the code snippets";
	                this.setMeUpScope.removeCredentialsText = "Remove your credentials from code snippet";
	                this.setMeUpScope.node = this.node.data ? this.node.data.getRoot() : this.node;
	                this._prepareSnippets();
	                if (this.user.isAdmin()) {
	                    this._getBaseUrl();
	                }
	                //      this.$state.go('admin.configuration.general',{focusOnBaseUrl: true});
	
	                var previousInjectionData = this.artifactoryState.getState("setMeUpUserData");
	                if (previousInjectionData) {
	                    this.injectionData = previousInjectionData;
	                    this.useApiKey = !!previousInjectionData.apiKey;
	                    this.setMeUpScope.userDataInjected = true;
	                    this._getUserData(null, true);
	                } else {
	                    this.injectionData = {};
	                    this._getUserData();
	                }
	
	                this.setMeUpScope.repoTypes = this.repoPackageTypes;
	
	                // Select the repo type according to current node
	                for (var i = 0; i < this.setMeUpScope.repoTypes.length; i++) {
	                    if (this.setMeUpScope.node.repoPkgType && this.setMeUpScope.node.repoPkgType.toLowerCase() == this.setMeUpScope.repoTypes[i].value.toLowerCase()) {
	                        this.setMeUpScope.selection.repoType = this.setMeUpScope.repoTypes[i];
	                        break;
	                    }
	                }
	
	                this._getSetMeUpData();
	
	                var sc = this.setMeUpScope;
	
	                this.setMeUpScope.$watch("selection", function () {
	                    if (sc.generateSettings && sc.snippet) {
	                        sc.generateBuildSettings();
	                    }
	                }, true);
	
	                this.setMeUpScope.me = function () {
	                    var scope = _this.setMeUpScope;
	                    while (scope.$id != _this.setMeUpScope.id && scope.$parent) {
	                        scope = scope.$parent;
	                    }
	                    return scope;
	                };
	
	                this.setMeUpScope.canInjectUserData = this.user.existsInDB && this.user.name !== "anonymous" && this.user.requireProfileUnlock && this.user.requireProfilePassword;
	
	                this.setMeUpScope.injection = {};
	
	                /**
	                 * User Data Injection
	                 * */
	                this.setMeUpScope.gotoInjectionMode = function () {
	                    if (_this.user.requireProfileUnlock === false) {
	                        _this.setMeUpScope.injection.password = "";
	                        _this.setMeUpScope.injectUserData();
	                    } else {
	                        _this.setMeUpScope.injectionMode = true;
	                        _this.setMeUpScope.toggleInjectUserData(true);
	                    }
	                };
	
	                this.setMeUpScope.cancelInjection = function () {
	                    _this.setMeUpScope.injectionMode = false;
	                    _this.setMeUpScope.toggleInjectUserData(false);
	                };
	
	                this.setMeUpScope.injectUserData = function () {
	
	                    _this.setMeUpScope.status.snippetResolved = false;
	
	                    _this._getUserData(_this.setMeUpScope.injection.password, true);
	
	                    // this.setMeUpScope.injectionMode = false;
	                    // this.setMeUpScope.toggleInjectUserData(false);
	
	                    _this.setMeUpScope.injection.password = "";
	                };
	
	                this.setMeUpScope.removeUserData = function () {
	                    _this.setMeUpScope.status.snippetResolved = false;
	                    _this._prepareSnippets();
	                    _this.artifactoryState.removeState("setMeUpUserData");
	                };
	
	                this.setMeUpScope.toggleInjectUserData = function (bShow) {
	                    var insertCredentialsBox = $("#insert-credentials-box");
	                    if (bShow) {
	                        insertCredentialsBox.show().find(".input-text").focus();
	                    } else {
	                        insertCredentialsBox.hide().find(".icon-clear").hide();
	                    }
	                };
	
	                /**
	                 * Filter by 'Tool' type and 'Repository' name
	                 * */
	                this.setMeUpScope.filterByType = function () {
	                    var selectRepo = arguments[0] === undefined ? false : arguments[0];
	
	                    if (!_this.setMeUpScope.reposAndTypes) {
	                        return false;
	                    }
	
	                    var scope = _this.setMeUpScope.me();
	                    scope.settingPage = false;
	
	                    _this.GoogleAnalytics.trackEvent("Artifacts", "Set me up - Change", _this.setMeUpScope.node.repoPkgType, "", "from: " + _this.setMeUpScope.node.repoPkgType, "to: " + scope.selection.repoType.text, _this.setMeUpScope.node.repoPkgType + ">" + scope.selection.repoType.text);
	
	                    if (scope.selection && scope.selection.repo && scope.selection.repo.value !== scope.selection.repoType.value) {
	                        scope.selection.repo = null;
	                    }
	                    scope.snippet = scope.readSnippet = scope.deploySnippet = null;
	                    scope.generateSettings = false;
	                    scope.generate = {};
	
	                    scope.deploySettingsMode = false;
	
	                    scope.generalSnippets = [];
	                    scope.readSnippets = [];
	                    scope.deploySnippets = [];
	
	                    _this._setShowSettings(scope);
	                    _this._setRepositories(scope);
	                    if (selectRepo) {
	                        _this._selectRepoByType(scope);
	                        _this.setMeUpScope.status.snippetResolved = false;
	                    }
	                    _this.setMeUpScope.resolveSnippet();
	                    var repoData = _this._getRepoData(scope);
	                    //Populate general snippets
	                    _this._setGeneralSnippets(repoData);
	                };
	
	                /**
	                 * 'Generate Settings' settings
	                 * */
	                this.setMeUpScope.checkLayoutSettings = function (settings, repoType) {
	                    if (_this.setMeUpScope.select && _this.setMeUpScope.select.selected) {
	                        if (repoType == "ivy") {
	                            _this.setMeUpScope.selection.gradle[settings + "UseIvy"] = true;
	                            _this.setMeUpScope.selection.gradle[settings + "UseMaven"] = false;
	                        } else if (repoType == "maven") {
	                            _this.setMeUpScope.selection.gradle[settings + "UseMaven"] = true;
	                            _this.setMeUpScope.selection.gradle[settings + "UseIvy"] = false;
	                        }
	                    } else {
	                        if (repoType == "ivy") {
	                            if (!_this.setMeUpScope.selection.gradle[settings + "UseMaven"]) {
	                                _this.setMeUpScope.selection.gradle[settings + "UseMaven"] = true;
	                            }
	                        } else if (repoType == "maven") {
	                            if (!_this.setMeUpScope.selection.gradle[settings + "UseIvy"]) {
	                                _this.setMeUpScope.selection.gradle[settings + "UseIvy"] = true;
	                            }
	                        }
	                    }
	                };
	
	                this.setMeUpScope.getMavenProps = function () {
	                    var scope = _this.setMeUpScope.me();
	                    return JSON.stringify({
	                        release: scope.selection.maven.releases,
	                        snapshot: scope.selection.maven.snapshots,
	                        pluginRelease: scope.selection.maven.pluginReleases,
	                        pluginSnapshot: scope.selection.maven.pluginSnapshots,
	                        mirror: scope.selection.maven.mirror ? scope.selection.maven.mirrorAny : "",
	                        password: scope.userDataInjected ? _this.injectionData.password : ""
	                    });
	                };
	
	                this.setMeUpScope.getGradleProps = function () {
	                    var scope = _this.setMeUpScope.me();
	                    return JSON.stringify({
	                        pluginRepoKey: scope.selection.gradle.pluginResolver,
	                        libsResolverRepoKey: scope.selection.gradle.libsResolver,
	                        libsPublisherRepoKey: scope.selection.gradle.libsPublisher,
	                        pluginUseMaven: scope.selection.gradle.pluginUseMaven,
	                        resolverUseMaven: scope.selection.gradle.libsUseMaven,
	                        publisherUseMaven: scope.selection.gradle.publishUseMaven,
	                        pluginUseIvy: scope.selection.gradle.pluginUseIvy,
	                        resolverUseIvy: scope.selection.gradle.libsUseIvy,
	                        publisherUseIvy: scope.selection.gradle.publishUseIvy,
	                        pluginResolverLayout: scope.selection.gradle.pluginLayout,
	                        libsResolverLayout: scope.selection.gradle.libsLayout,
	                        libsPublisherLayouts: scope.selection.gradle.publishLayout,
	                        password: scope.userDataInjected ? _this.injectionData.password : ""
	                    });
	                };
	
	                this.setMeUpScope.getIvyProps = function () {
	                    var scope = _this.setMeUpScope.me();
	                    return JSON.stringify({
	                        libsRepo: scope.selection.ivy.libsRepository,
	                        libsRepoLayout: scope.selection.ivy.libsRepositoryLayout,
	                        libsResolverName: scope.selection.ivy.libsResolverName,
	                        useIbiblioResolver: !!scope.selection.ivy.ibiblio,
	                        m2Compatible: !!scope.selection.ivy.maven2,
	                        password: scope.userDataInjected ? _this.injectionData.password : ""
	                    });
	                };
	
	                this.setMeUpScope.generateBuildSettings = function () {
	                    var scope = _this.setMeUpScope.me();
	                    if (!scope.generate) {
	                        return false;
	                    }
	
	                    if (scope.generate.maven) {
	                        setMeUpDao.maven_snippet({
	                            release: scope.selection.maven.releases,
	                            snapshot: scope.selection.maven.snapshots,
	                            pluginRelease: scope.selection.maven.pluginReleases,
	                            pluginSnapshot: scope.selection.maven.pluginSnapshots,
	                            mirror: scope.selection.maven.mirror ? scope.selection.maven.mirrorAny : ""
	                        }).$promise.then(function (result) {
	                            scope.snippet = result.mavenSnippet;
	                        });
	                    } else if (scope.generate.gradle) {
	                        setMeUpDao.gradle_snippet({
	                            pluginRepoKey: scope.selection.gradle.pluginResolver,
	                            libsResolverRepoKey: scope.selection.gradle.libsResolver,
	                            libsPublisherRepoKey: scope.selection.gradle.libsPublisher,
	                            pluginUseMaven: scope.selection.gradle.pluginUseMaven,
	                            resolverUseMaven: scope.selection.gradle.libsUseMaven,
	                            publisherUseMaven: scope.selection.gradle.publishUseMaven,
	                            pluginUseIvy: scope.selection.gradle.pluginUseIvy,
	                            resolverUseIvy: scope.selection.gradle.libsUseIvy,
	                            publisherUseIvy: scope.selection.gradle.publishUseIvy,
	                            pluginResolverLayout: scope.selection.gradle.pluginLayout,
	                            libsResolverLayout: scope.selection.gradle.libsLayout,
	                            libsPublisherLayouts: scope.selection.gradle.publishLayout
	                        }).$promise.then(function (result) {
	                            scope.snippet = result.gradleSnippet;
	                        });
	                    } else if (scope.generate.ivy) {
	                        setMeUpDao.ivy_snippet({
	                            libsRepo: scope.selection.ivy.libsRepository,
	                            libsRepoLayout: scope.selection.ivy.libsRepositoryLayout,
	                            libsResolverName: scope.selection.ivy.libsResolverName,
	                            useIbiblioResolver: !!scope.selection.ivy.ibiblio,
	                            m2Compatible: !!scope.selection.ivy.maven2
	                        }).$promise.then(function (result) {
	                            scope.snippet = result.ivySnippet;
	                        });
	                    }
	                };
	
	                this.setMeUpScope.getGeneratorRepos = function (type) {
	                    var scope = _this.setMeUpScope.me();
	                    scope.settingPage = true;
	                    if (!scope.generate) {
	                        scope.generate = {};
	                    }
	
	                    scope.readSnippet = scope.deploySnippet = null;
	
	                    switch (type) {
	                        case "Maven":
	                            setMeUpDao.maven().$promise.then(function (result) {
	                                scope.generateSettings = true;
	                                scope.generate = { maven: true };
	                                scope.settings.maven = result;
	                                // Get a repo that is maven, virtual and maybe has 'release' in it's name
	                                var releases = _this.getDefaultRepoKeyByParams("maven", "virtual", "release", true);
	                                var snapshots = _this.getDefaultRepoKeyByParams("maven", "virtual", "snapshot", true);
	                                var pluginSnapshots = _this.getDefaultRepoKeyByParams("maven", "virtual", "plugin", false) || snapshots;
	                                var pluginReleases = _this.getDefaultRepoKeyByParams("maven", "virtual", "plugin", false) || releases;
	                                _this.setMeUpScope.selection.maven = {
	                                    releases: releases, //scope.settings.maven.releases[0],
	                                    snapshots: snapshots, //scope.settings.maven.snapshots[0],
	                                    pluginReleases: pluginReleases, //scope.settings.maven.pluginReleases[0],
	                                    pluginSnapshots: pluginSnapshots, //scope.settings.maven.pluginSnapshots[0],
	                                    mirrorAny: scope.settings.maven.anyMirror[0],
	                                    mirror: false
	                                };
	                            });
	                            break;
	                        case "Gradle":
	                            setMeUpDao.gradle().$promise.then(function (result) {
	                                // Get all repos (for default type selection
	                                scope.generateSettings = true;
	                                scope.generate = { gradle: true };
	                                scope.settings.gradle = result;
	                                var defaultLibsPublisher = _this.getDefaultRepoKey(_this.setMeUpScope.node, "gradle", "local");
	                                var defaultLibsResolver = _this.getDefaultRepoKey(_this.setMeUpScope.node, "gradle", "virtual");
	                                var defaultLibsLayout = scope.settings.gradle.layouts[0];
	                                _this.setMeUpScope.selection.gradle = {
	                                    pluginResolver: scope.settings.gradle.pluginResolver[0],
	                                    pluginUseMaven: true,
	                                    pluginUseIvy: false,
	                                    pluginLayout: defaultLibsLayout,
	                                    libsResolver: defaultLibsResolver,
	                                    libsUseMaven: true,
	                                    libsUseIvy: false,
	                                    libsLayout: defaultLibsLayout,
	                                    libsPublisher: defaultLibsPublisher,
	                                    publishUseMaven: true,
	                                    publishUseIvy: false,
	                                    publishLayout: defaultLibsLayout
	                                };
	                            });
	                            break;
	                        case "Ivy":
	                            setMeUpDao.ivy().$promise.then(function (result) {
	                                // Get all repos (for default type selection
	                                scope.generateSettings = true;
	                                scope.generate = { ivy: true };
	                                scope.settings.ivy = result;
	                                var defaultLibsRepository = _this.getDefaultRepoKey(_this.setMeUpScope.node, "ivy", "virtual");
	                                var defaultLibsRepositoryLayout = _this.getDefaultLayout("ivy", scope.settings.ivy.libsRepositoryLayout);
	                                _this.setMeUpScope.selection.ivy = {
	                                    libsRepository: defaultLibsRepository,
	                                    libsRepositoryLayout: defaultLibsRepositoryLayout,
	                                    ibiblio: true,
	                                    maven2: true
	                                };
	                            });
	                            break;
	                        default:
	                            scope.generateSettings = false;
	                            break;
	                    }
	                };
	
	                /**
	                 * 'Generate Settings' validations
	                 * */
	                this.setMeUpScope.validateToolSettings = function () {
	                    var scope = _this.setMeUpScope.me();
	                    if (scope.generate.maven) {
	                        var mavenSettings = scope.selection.maven;
	                        return _this.validateMavenSettings(mavenSettings);
	                    }
	
	                    if (scope.generate.gradle) {
	                        var gradleSettings = scope.selection.gradle;
	                        return _this.validateGradleSettings(gradleSettings);
	                    }
	
	                    if (scope.generate.ivy) {
	                        var ivySettings = scope.selection.ivy;
	                        return _this.validateIvySettings(ivySettings);
	                    }
	                };
	
	                /**
	                 * 'Resolve' snippet settings
	                 * */
	                this.setMeUpScope.resolveSnippet = function () {
	                    var resolveDockerReverseProxy = arguments[0] === undefined ? true : arguments[0];
	
	                    if (_this.setMeUpScope.status.snippetResolved) {
	                        _this.$timeout(function () {
	                            if (!_this.setMeUpScope.deploySnippets.length && !_this.setMeUpScope.generalSnippets.length && !_this.setMeUpScope.readSnippets.length) {
	                                _this.setMeUpScope.status.snippetResolved = false;
	                                _this.setMeUpScope.resolveSnippet();
	                            }
	                        });
	                        return;
	                    } else {}
	                    _this.setMeUpScope.status.snippetResolved = true;
	
	                    if (!_this.setMeUpScope.selection.repoType) {
	                        return;
	                    }
	                    var scope = _this.setMeUpScope.me();
	                    var repoData = _this._getRepoData(scope);
	                    var repoType = _this.setMeUpScope.selection.repoType.value;
	
	                    if (!repoData) {
	                        return;
	                    }
	
	                    scope.deploySnippets = [];
	                    scope.readSnippets = [];
	                    scope.generalSnippets = [];
	
	                    _this.setMeUpScope.hideRemoveAndGeneral = false;
	                    if (repoData.local && _.includes(_this.resolveOnlyWithVirtualRepo, _this.setMeUpScope.selection.repoType.value)) {
	                        _this.setMeUpScope.hideRemoveAndGeneral = true;
	                    }
	
	                    if (_this.setMeUpScope.snippets[repoType]) {
	                        _this._setDeploySnippets(repoData);
	                        _this._setReadSnippets(repoData);
	                        _this._setGeneralSnippets(repoData);
	                    }
	
	                    //Warn the user if he doesn't have deploy permissions
	                    scope.hasNoDeployPermissions = !repoData.deploy && (repoData.local || repoData.defaultDeploymentConfigured);
	
	                    if (_this.setMeUpScope.selection.repoType.value === "docker" && resolveDockerReverseProxy && !_this.artifactoryFeatures.isAol() && !_this.artifactoryFeatures.isNonCommercial() && _this.user.name !== "anonymous") {
	                        _this.artifactViewsDao.getDockerProxySnippet({}, { repoKey: "dummy" /*this.selection.repo.text*/ }).$promise.then(function (data) {
	                            _this.setMeUpDao.reverse_proxy_data({ repoKey: _this.setMeUpScope.selection.repo.text }).$promise.then(function (reverseProxiesData) {
	
	                                if (reverseProxiesData.methodSelected) {
	                                    _this.setMeUpScope.reverseProxySnippet = data.template;
	                                }
	
	                                var snip = undefined;
	                                if (reverseProxiesData.usingPorts) {
	                                    snip = "" + reverseProxiesData.serverName + ":" + (reverseProxiesData.repoPort || "<port>");
	                                } else {
	                                    snip = "" + _this.setMeUpScope.selection.repo.text + "." + reverseProxiesData.serverName;
	                                }
	
	                                if (reverseProxiesData.methodSelected && !reverseProxiesData.usingHttps) {
	                                    _this.setMeUpScope.snippets.docker.general[0].title = _this.setMeUpScope.snippets.docker.general[0].title_reverse_proxy + _this.setMeUpScope.snippets.docker.general[0].title_insecure;
	                                    _this.setMeUpScope.snippets.docker.general[0].snippet = _this.setMeUpScope.snippets.docker.general[0].snippet_insecure.split("<INSECURE_SNIP>").join(snip);
	                                } else {
	                                    _this.setMeUpScope.snippets.docker.general[0].title = _this.setMeUpScope.snippets.docker.general[0].title_reverse_proxy;
	                                    delete _this.setMeUpScope.snippets.docker.general[0].snippet;
	                                }
	                                _this.setMeUpScope.status.snippetResolved = false;
	                                _this.setMeUpScope.resolveSnippet(false);
	                            });
	                        })["catch"](function () {
	                            if (!_this.artifactoryFeatures.isAol()) {
	                                _this.setMeUpScope.snippets.docker.general[0].title = _this.setMeUpScope.snippets.docker.general[0].title_reverse_proxy;
	                            }
	                            _this.setMeUpScope.status.snippetResolved = false;
	                            _this.setMeUpScope.resolveSnippet(false);
	                        });
	                    } else if (resolveDockerReverseProxy) {
	                        if (_this.setMeUpScope.selection.repoType.value === "docker" && _this.artifactoryFeatures.isAol()) {
	                            _this.setMeUpScope.status.snippetResolved = false;
	                        }
	                        delete _this.setMeUpScope.reverseProxySnippet;
	                        delete _this.setMeUpScope.snippets.docker.general[0].snippet;
	                    }
	
	                    if (_this.setMeUpScope.selection.repoType.value === "docker" && _this.artifactoryFeatures.isAol()) {
	                        _this._resolveDockerAolSnippets(_this.setMeUpScope.selection.repo.text);
	                    } else if (_this.setMeUpScope.selection.repoType.value === "docker") {
	                        _this._resolveDockerAolSnippets(null);
	                    }
	                };
	
	                /**
	                 * 'Deploy' snippet settings
	                 * */
	                this.setMeUpScope.setDeploySettingsMode = function () {
	
	                    var defaultTargetPath = undefined;
	
	                    switch (_this.setMeUpScope.selection.repoType.value) {
	                        case "maven":
	                            defaultTargetPath = "settings.xml";
	                            break;
	                        case "gradle":
	                            defaultTargetPath = "build.gradle";
	                            break;
	                        case "ivy":
	                            defaultTargetPath = "ivysettings.xml";
	                            break;
	                    }
	
	                    _this.setMeUpScope.deploySettingsMode = true;
	                    _this.setMeUpScope.snippetDeploy = {
	                        targetPath: defaultTargetPath,
	                        targetRepo: ""
	                    };
	
	                    _this.repoDataDao.get({ user: "true" }).$promise.then(function (result) {
	                        _this.setMeUpScope.snippetDeploy.reposList = result.repoTypesList;
	                    });
	                };
	
	                this.setMeUpScope.deploySettingsSnippet = function () {
	                    var doActualDeployment = undefined;
	                    var scope = _this.setMeUpScope.me();
	                    if (scope.generate.maven) {
	                        setMeUpDao.maven_snippet({ deploy: true }, {
	                            release: scope.selection.maven.releases,
	                            snapshot: scope.selection.maven.snapshots,
	                            pluginRelease: scope.selection.maven.pluginReleases,
	                            pluginSnapshot: scope.selection.maven.pluginSnapshots,
	                            mirror: scope.selection.maven.mirror ? scope.selection.maven.mirrorAny : ""
	                        }).$promise.then(function (result) {
	                            doActualDeployment(result);
	                        });
	                    } else if (scope.generate.gradle) {
	                        setMeUpDao.gradle_snippet({ deploy: true }, {
	                            pluginRepoKey: scope.selection.gradle.pluginResolver,
	                            libsResolverRepoKey: scope.selection.gradle.libsResolver,
	                            libsPublisherRepoKey: scope.selection.gradle.libsPublisher,
	                            pluginUseMaven: scope.selection.gradle.pluginUseMaven,
	                            resolverUseMaven: scope.selection.gradle.libsUseMaven,
	                            publisherUseMaven: scope.selection.gradle.publishUseMaven,
	                            pluginUseIvy: scope.selection.gradle.pluginUseIvy,
	                            resolverUseIvy: scope.selection.gradle.libsUseIvy,
	                            publisherUseIvy: scope.selection.gradle.publishUseIvy,
	                            pluginResolverLayout: scope.selection.gradle.pluginLayout,
	                            libsResolverLayout: scope.selection.gradle.libsLayout,
	                            libsPublisherLayouts: scope.selection.gradle.publishLayout
	                        }).$promise.then(function (result) {
	                            doActualDeployment(result);
	                        });
	                    } else if (scope.generate.ivy) {
	                        setMeUpDao.ivy_snippet({ deploy: true }, {
	                            libsRepo: scope.selection.ivy.libsRepository,
	                            libsRepoLayout: scope.selection.ivy.libsRepositoryLayout,
	                            libsResolverName: scope.selection.ivy.libsResolverName,
	                            useIbiblioResolver: !!scope.selection.ivy.ibiblio,
	                            m2Compatible: !!scope.selection.ivy.maven2
	                        }).$promise.then(function (result) {
	                            doActualDeployment(result);
	                        });
	                    }
	
	                    doActualDeployment = function (config) {
	                        var singleDeploy = {};
	
	                        singleDeploy.action = "deploy";
	                        singleDeploy.unitInfo = {
	                            artifactType: "base",
	                            path: _this.setMeUpScope.snippetDeploy.targetPath
	                        };
	                        singleDeploy.fileName = config.savedSnippetName;
	                        singleDeploy.repoKey = _this.setMeUpScope.snippetDeploy.targetRepo.repoKey;
	
	                        _this.artifactDeployDao.post(singleDeploy).$promise.then(function (result) {
	                            if (result.data) {
	                                _this.JFrogEventBus.dispatch(EVENTS.TREE_REFRESH);
	                                _this.artifactoryNotifications.createMessageWithHtml({
	                                    type: "success",
	                                    body: "<div id=\"toaster-with-link\">Successfully deployed <a ui-sref=\"artifacts.browsers.path({tab: 'General', browser: 'tree', artifact: '" + result.data.repoKey + "/" + result.data.artifactPath + "'})\">" + result.data.artifactPath + " into " + result.data.repoKey + "</a></div>",
	                                    timeout: 10000
	                                });
	                                _this.$timeout(function () {
	                                    //compile the element, so the ui-sref will work
	                                    var e = angular.element($("#toaster-with-link"));
	                                    _this.$compile(e)(_this.$rootScope);
	                                });
	
	                                _this.filteredResourceDao.setFiltered({ setFiltered: true }, {
	                                    repoKey: result.data.repoKey,
	                                    path: result.data.artifactPath
	                                });
	                            }
	                        });
	                    };
	                };
	            }
	        },
	        getDefaultLayout: {
	            value: function getDefaultLayout(pkgType, layouts) {
	                for (var i in layouts) {
	                    var layout = layouts[i];
	                    if (layout.indexOf(pkgType.toLowerCase()) !== -1) {
	                        return layout;
	                    }
	                }
	                return layouts[0];
	            }
	        },
	        getDefaultRepoKey: {
	
	            // Get the default repository key for a setting select box
	
	            value: function getDefaultRepoKey(node, repoPkgType, repoType) {
	                // If the selected node in tree has the same type as the requested repo
	                // then return the node key
	                if (repoType === node.repoType && repoPkgType === node.repoPkgType.toLowerCase()) {
	                    return this.setMeUpScope.node.repoKey;
	                }
	
	                // Search and return the first match of a repo with the same node type and repo type
	                var allRepos = this.setMeUpScope.reposAndTypes;
	                for (var i in allRepos) {
	                    var repo = allRepos[i];
	                    var currPkgType = repo.value;
	                    if (currPkgType === repoPkgType && (repo.virtual && repoType === "virtual" || repo.local && repoType === "local")) {
	                        return repo.text;
	                    }
	                }
	            }
	        },
	        getDefaultRepoKeyByParams: {
	
	            // Search and return the first match of a repo with the same node type and maybe name
	
	            value: function getDefaultRepoKeyByParams(repoPkgType, repoType, nameFragment, secondBestAllowed) {
	                var allRepos = this.setMeUpScope.reposAndTypes;
	                var secondBestResult = undefined;
	                for (var i in allRepos) {
	                    var repo = allRepos[i];
	                    var currPkgType = repo.value;
	                    if (currPkgType === repoPkgType && (repo.virtual && repoType === "virtual" || repo.local && repoType === "local")) {
	                        // If exact match was found return it
	                        if (nameFragment && repo.text.indexOf(nameFragment) !== -1) {
	                            return repo.text;
	                        }
	                        // While exact match was not found and second best is allowed
	                        else if (secondBestAllowed) {
	                            secondBestResult = repo.text;
	                        }
	                    }
	                }
	                return secondBestResult;
	            }
	        },
	        validateIvySettings: {
	            value: function validateIvySettings(ivySettings) {
	                return typeof ivySettings.libsRepository === "undefined" || typeof ivySettings.libsRepositoryLayout === "undefined";
	            }
	        },
	        validateGradleSettings: {
	            value: function validateGradleSettings(gradleSettings) {
	                var fieldValues = {
	                    pluginRepoKey: gradleSettings.pluginResolver,
	                    libsResolverRepoKey: gradleSettings.libsResolver,
	                    libsPublisherRepoKey: gradleSettings.libsPublisher,
	
	                    pluginUseIvy: gradleSettings.pluginUseIvy,
	                    resolverUseIvy: gradleSettings.libsUseIvy,
	                    publisherUseIvy: gradleSettings.publishUseIvy,
	
	                    pluginResolverLayout: gradleSettings.pluginLayout,
	                    libsResolverLayout: gradleSettings.libsLayout,
	                    libsPublisherLayouts: gradleSettings.publishLayout
	                };
	
	                return typeof fieldValues.pluginRepoKey === "undefined" || typeof fieldValues.libsResolverRepoKey === "undefined" || typeof fieldValues.libsPublisherRepoKey === "undefined" || fieldValues.pluginUseIvy && typeof fieldValues.pluginResolverLayout === "undefined" || fieldValues.resolverUseIvy && typeof fieldValues.libsResolverLayout === "undefined" || fieldValues.publisherUseIvy && typeof fieldValues.libsPublisherLayouts === "undefined";
	            }
	        },
	        validateMavenSettings: {
	            value: function validateMavenSettings(mavenSettings) {
	                var mirrorHasValidValue = mavenSettings.mirror ? typeof mavenSettings.mirrorAny !== "undefined" && mavenSettings.mirrorAny !== "" : true;
	                return !mirrorHasValidValue || typeof mavenSettings.releases === "undefined" || typeof mavenSettings.snapshots === "undefined" || typeof mavenSettings.pluginReleases === "undefined" || typeof mavenSettings.pluginSnapshots === "undefined";
	            }
	        },
	        _fixTPL: {
	            value: function _fixTPL(tpl) {
	                var temp = tpl;
	                var protocol = undefined;
	                if (_.contains(tpl, "http://")) {
	                    protocol = "http://";
	                } else if (_.contains(tpl, "https://")) {
	                    protocol = "https://";
	                }
	                temp = temp.split("!" + protocol).join("@@keep_protocol@@");
	                temp = temp.split(protocol).join("@@protocol@@");
	                temp = temp.split("//").join("/");
	                temp = temp.split("@@protocol@@").join(this.setMeUpScope.protocol);
	                temp = temp.split("@@keep_protocol@@").join(protocol);
	
	                if (_.contains(temp, this.setMeUpScope.host + "/artifactory") && this.setMeUpScope.path !== "/artifactory") {
	                    var newAbsoulutHost = this.setMeUpScope.host + (this.setMeUpScope.path === "/" ? "" : this.setMeUpScope.path);
	                    temp = temp.replace(new RegExp(this.setMeUpScope.host + "/artifactory", "g"), newAbsoulutHost);
	                }
	
	                return temp;
	            }
	        },
	        _setShowSettings: {
	            value: function _setShowSettings(scope) {
	                var selection = this.setMeUpScope.selection;
	                if (scope.selection && selection.repoType && scope.selection.repoType.value.match("(ivy|maven|gradle)")) {
	                    scope.showSettings = selection.repoType.text;
	                } else {
	                    scope.showSettings = false;
	                }
	            }
	        },
	        _setRepositories: {
	            value: function _setRepositories(scope) {
	                var _this = this;
	
	                scope.shownRepos = this.setMeUpScope.reposAndTypes.filter(function (d) {
	                    if (!_this.setMeUpScope.selection || !_this.setMeUpScope.selection.repoType || _this.setMeUpScope.selection.repoType.value == "generic") {
	                        return d;
	                    }
	                    if (_this.setMeUpScope.selection.repoType.value == "maven" && !d.local && !d.defaultDeploymentConfigured) {
	                        return false;
	                    }
	                    var isRepoMavenish = _this.setMeUpScope.selection.repoType.value.match(/(maven|ivy|gradle|sbt)/gi) ? true : false;
	                    var isSelectionMavenish = d.value.match(/(maven|ivy|gradle|sbt)/gi) ? true : false;
	                    if (d.value == _this.setMeUpScope.selection.repoType.value || d.value == _this.setMeUpScope.selection.repoType.value || isRepoMavenish && isSelectionMavenish) {
	                        return d;
	                    }
	                });
	            }
	        },
	        _selectRepoByType: {
	            value: function _selectRepoByType(scope) {
	                // Select the repo according to current node
	                for (var i = 0; i < scope.reposAndTypes.length; i++) {
	                    if (scope.reposAndTypes[i].value.toLowerCase() == scope.selection.repoType.value) {
	                        scope.selection.repo = scope.reposAndTypes[i];
	                        scope.resolveSnippet();
	                        break;
	                    }
	                }
	            }
	        },
	        _getRepoData: {
	            value: function _getRepoData(scope) {
	                var repoData = this.setMeUpScope.reposAndTypes.filter(function (item) {
	                    if (scope.selection.repo && item.text == scope.selection.repo.text) {
	                        return item;
	                    }
	                });
	                repoData = repoData.length > 0 ? repoData[0] : null;
	
	                return repoData;
	            }
	        },
	        _setDeploySnippets: {
	            value: function _setDeploySnippets(repoData) {
	                var _this = this;
	
	                if (!repoData) {
	                    return;
	                }
	
	                var scope = this.setMeUpScope.me();
	                var repoType = this.setMeUpScope.selection.repoType.value;
	
	                // Maven from server
	                if (repoType == "maven") {
	                    this.setMeUpDao.maven_distribution({ repoKey: repoData.text }).$promise.then(function (result) {
	                        scope.deploySnippets = [];
	                        if (repoData.local || repoData.defaultDeploymentConfigured) {
	                            scope.deploySnippets.push({
	                                before: _this.setMeUpScope.snippets[repoType].deploy ? _this.setMeUpScope.snippets[repoType].deploy.before : "",
	                                snippet: result.distributedManagement,
	                                after: _this.setMeUpScope.snippets[repoType].deploy ? _this.setMeUpScope.snippets[repoType].deploy.after : ""
	                            });
	                        }
	                    });
	                }
	
	                if (repoType != "maven" && (repoData.local || repoData.defaultDeploymentConfigured) && this.setMeUpScope.snippets[repoType].deploy) {
	                    scope.deploySnippets = [];
	                    if (this.setMeUpScope.snippets[repoType].deploy instanceof Array) {
	                        for (var i = 0; i < this.setMeUpScope.snippets[repoType].deploy.length; i++) {
	                            var tpl = this.setMeUpScope.snippets[repoType].deploy ? this.setMeUpScope.snippets[repoType].deploy[i].snippet : null;
	                            if (tpl) {
	                                tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                                tpl = this._fixTPL(tpl);
	                                scope.deploySnippets.push({
	                                    before: this.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].deploy[i].before),
	                                    snippet: tpl,
	                                    after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].deploy[i].after)
	                                });
	                            }
	                        }
	                    } else {
	                        var tpl = this.setMeUpScope.snippets[repoType].deploy ? this.setMeUpScope.snippets[repoType].deploy.snippet : null;
	                        if (tpl) {
	                            tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                            tpl = this._fixTPL(tpl);
	                            scope.deploySnippets.push({
	                                before: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].deploy.before),
	                                snippet: tpl,
	                                after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].deploy.after)
	                            });
	                        }
	                    }
	                }
	            }
	        },
	        _setReadSnippets: {
	            value: function _setReadSnippets(repoData) {
	                if (!repoData) {
	                    return;
	                }
	
	                if (this.setMeUpScope.hideRemoveAndGeneral) {
	                    return;
	                }var scope = this.setMeUpScope.me();
	                scope.readSnippets = [];
	                var repoType = this.setMeUpScope.selection.repoType.value;
	
	                if (repoData.read && this.setMeUpScope.snippets[repoType].read) {
	                    if (this.setMeUpScope.snippets[repoType].read instanceof Array) {
	                        for (var i = 0; i < this.setMeUpScope.snippets[repoType].read.length; i++) {
	                            var tpl = this.setMeUpScope.snippets[repoType].read ? this.setMeUpScope.snippets[repoType].read[i].snippet : null;
	                            if (tpl) {
	                                tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                                tpl = this._fixTPL(tpl);
	                                scope.readSnippets.push({
	                                    before: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].read[i].before),
	                                    snippet: tpl,
	                                    after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].read[i].after)
	                                });
	                            }
	                        }
	                    } else {
	                        var tpl = this.setMeUpScope.snippets[repoType].read ? this.setMeUpScope.snippets[repoType].read.snippet : null;
	                        if (tpl) {
	                            tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                            tpl = this._fixTPL(tpl);
	                            scope.readSnippets.push({
	                                before: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].read.before),
	                                snippet: tpl,
	                                after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].read.after)
	                            });
	                        }
	                    }
	                }
	            }
	        },
	        _setGeneralSnippets: {
	            value: function _setGeneralSnippets(repoData) {
	                if (!repoData) {
	                    return;
	                }
	
	                if (!this.setMeUpScope.selection.repoType) {
	                    return;
	                }
	
	                var scope = this.setMeUpScope.me();
	                var repoType = this.setMeUpScope.selection.repoType.value;
	
	                if (this.setMeUpScope.hideRemoveAndGeneral) {
	                    this.setMeUpScope.generalSnippets = [{
	                        before: this.setMeUpScope.snippets[repoType].info_msg
	                    }];
	                    return;
	                }
	
	                scope.generalSnippets = [];
	                if (this.setMeUpScope.snippets[repoType].general) {
	                    if (this.setMeUpScope.snippets[repoType].general instanceof Array) {
	                        for (var i = 0; i < this.setMeUpScope.snippets[repoType].general.length; i++) {
	                            var tpl = this.setMeUpScope.snippets[repoType].general ? this.setMeUpScope.snippets[repoType].general[i].snippet : null;
	                            if (tpl && repoData) {
	                                tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, repoType === "cocoapods" ? this.setMeUpScope.host.split(":")[0] : this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                                tpl = this._fixTPL(tpl);
	                            }
	                            scope.generalSnippets.push({
	                                title: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general[i].title),
	                                before: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general[i].before),
	                                snippet: tpl,
	                                after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general[i].after)
	                            });
	                        }
	                    } else {
	                        var tpl = this.setMeUpScope.snippets[repoType].general ? this.setMeUpScope.snippets[repoType].general.snippet : null;
	                        if (tpl && repoData) {
	                            tpl = tpl.replace(/\$1/g, repoData.text).replace(/\$2/g, this.setMeUpScope.baseUrl).replace(/\$3/g, this.setMeUpScope.serverId).replace(/\$4/g, this.setMeUpScope.host).replace(/\$5/g, this.setMeUpScope.cleanHost).replace(/\$6/g, this.setMeUpScope.baseUrlNoHttp);
	                            tpl = this._fixTPL(tpl);
	                        }
	                        scope.generalSnippets.push({
	                            title: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general.title),
	                            before: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general.before),
	                            snippet: tpl,
	                            after: this.setMeUpScope.$sce.trustAsHtml(this.setMeUpScope.snippets[repoType].general.after)
	                        });
	                    }
	                }
	            }
	        },
	        _prepareSnippets: {
	            value: function _prepareSnippets(injectUserData) {
	
	                var stringified = this.artifactoryFeatures.isJCR() ? JSON.stringify(SNIPPETS_JCR) : JSON.stringify(SNIPPETS);
	
	                var curlAuthString = this.useApiKey ? "-H 'X-JFrog-Art-Api:<API_KEY>'" : "-u<USERNAME>:<PASSWORD>";
	
	                stringified = stringified.split("<CURL_AUTH>").join(curlAuthString);
	
	                if (injectUserData) {
	
	                    if (this.injectionData.userName && (this.injectionData.password || this.injectionData.apiKey)) {
	                        stringified = stringified.split("<USERNAME>:<PASSWORD> (converted to base 64)").join(btoa(this.injectionData.userName.toLowerCase() + ":" + (this.injectionData.password || this.injectionData.apiKey)));
	                    }
	                    if (this.injectionData.userName) {
	                        stringified = stringified.split("<USERNAME>").join(this.injectionData.userName);
	                    }
	                    if (this.injectionData.userName) {
	                        stringified = stringified.split("<URL_ENCODED_USERNAME>").join(this.injectionData.userName.split("@").join("%40"));
	                    }
	                    if (this.injectionData.password && !this.injectionData.apiKey) {
	                        stringified = stringified.split("<PASSWORD>").join(this.injectionData.password);
	                    }
	                    if (this.injectionData.password) {
	                        stringified = stringified.split("<BASE64_PASSWORD>").join(btoa(this.injectionData.password));
	                    }
	                    if (this.injectionData.apiKey) {
	                        stringified = stringified.split("<PASSWORD>").join(this.injectionData.apiKey);
	                        stringified = stringified.split("<API_KEY>").join(this.injectionData.apiKey);
	                    }
	                    if (this.injectionData.email) {
	                        stringified = stringified.split("youremail@email.com").join(this.injectionData.email);
	                    }
	                    this.setMeUpScope.userDataInjected = true;
	                    this.artifactoryState.setState("setMeUpUserData", this.injectionData);
	                } else {
	                    this.setMeUpScope.userDataInjected = false;
	                }
	
	                this.setMeUpScope.snippets = JSON.parse(stringified);
	
	                if (this.setMeUpScope.filterByType) {
	                    this.setMeUpScope.filterByType();
	                }
	            }
	        },
	        _getUserData: {
	            value: function _getUserData(password, inject) {
	                var _this = this;
	
	                var checkApiKeyExistance = function () {
	                    return _this.userProfileDao.hasApiKey().$promise.then(function () {
	                        _this.useApiKey = true;
	                    })["catch"](function () {
	                        _this.useApiKey = false;
	                    })["finally"](function () {
	                        if (_this.user.requireProfileUnlock === false && !_this.useApiKey) {
	                            _this.setMeUpScope.canInjectUserData = false;
	                        }
	                    });
	                };
	
	                var getApiKey = function (password) {
	                    _this.userProfileDao.getApiKey.authenticate({ username: _this.user.name, password: password });
	                    _this.userProfileDao.getApiKey().$promise.then(function (res) {
	                        _this.useApiKey = !!res.apiKey;
	                        _this.injectionData.apiKey = res.apiKey;
	                        _this.injectionData.userName = _this.user.name;
	
	                        if (_this.user.requireProfileUnlock === false && !_this.useApiKey) {
	                            _this.setMeUpScope.canInjectUserData = false;
	                        }
	
	                        _this.setMeUpScope.status.snippetResolved = false;
	                        _this._prepareSnippets(inject);
	                    });
	                };
	
	                if (_.isEmpty(this.injectionData) && password && this.user.requireProfileUnlock !== false) {
	                    this.userProfileDao.fetch({ password: password || "" }).$promise.then(function (res) {
	                        _this.injectionData.password = res.data.user.password;
	                        _this.injectionData.email = res.data.user.email;
	                        getApiKey(password);
	                    })["catch"](function (err) {
	                        if (err.status === 400) {
	                            _this.setMeUpScope.injectionMode = true;
	                        }
	                    });
	                } else if (inject && !_.isEmpty(this.injectionData)) {
	                    this.useApiKey = !!this.injectionData.apiKey;
	                    if (this.user.requireProfileUnlock === false && !this.useApiKey) {
	                        this.setMeUpScope.canInjectUserData = false;
	                    }
	                    this.setMeUpScope.status.snippetResolved = false;
	                    this._prepareSnippets(inject);
	                } else if (!inject && !password) {
	                    checkApiKeyExistance().then(function () {
	                        _this.setMeUpScope.status.snippetResolved = false;
	                        _this._prepareSnippets(false);
	                    });
	                }
	            }
	        },
	        _resolveDockerAolSnippets: {
	            value: function _resolveDockerAolSnippets(repoKey) {
	                var _this = this;
	
	                if (repoKey === null) {
	                    this.setMeUpScope.snippets.docker.general[0].after = this.setMeUpScope.snippets.docker.general[0].after_example_server;
	                }
	
	                var snippets = ["deploySnippets", "readSnippets", "generalSnippets"];
	                var snippetsParts = ["before", "after", "snippet"];
	
	                var loopRun = function (serverName) {
	                    snippets.forEach(function (snippet) {
	                        _this.setMeUpScope[snippet].forEach(function (snip) {
	                            snippetsParts.forEach(function (part) {
	                                if (snip[part]) {
	                                    snip[part] = snip[part].toString();
	                                    if (repoKey === null) {
	                                        //inject the default
	                                        snip[part] = snip[part].split("<DOCKER_SERVER>").join("artprod.mycompany");
	                                    } else {
	                                        if (part === "after" && snip.after_example_server) {
	                                            delete snip[part];
	                                        } else {
	                                            snip[part] = snip[part].split("<DOCKER_SERVER>").join(serverName);
	                                        }
	                                    }
	                                }
	                            });
	                        });
	                    });
	                };
	
	                if (repoKey) {
	                    (function () {
	                        var serverName = _this.setMeUpScope.aolHostName + "-" + repoKey + ".jfrog.io";
	                        _this.$timeout(function () {
	                            loopRun(serverName);
	                        });
	                    })();
	                } else {
	                    loopRun(null);
	                }
	            }
	        }
	    });
	
	    return SetMeUpModal;
	})();

/***/ }),

/***/ 171:
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
	
	var snippets = {
	    debian: {
	        read: [{
	            before: "To use Artifactory repository to install Debian package you need to add it to your <i>sources.list</i> file. You can do that using the following command:",
	            snippet: "sudo sh -c \"echo 'deb $2/$1 <DISTRIBUTION> <COMPONENT>' >> /etc/apt/sources.list\""
	        }, {
	            before: "For accessing Artifactory using credentials you can specify it in the <i>source.list</i> file like so:",
	            snippet: "http://<USERNAME>:<PASSWORD>@$4/artifactory/$1 <DISTRIBUTION> <COMPONENTS>"
	        }, {
	            before: "Your apt-get client will use the specified Artifactory repositories to install the package",
	            snippet: "apt-get install <PACKAGE>"
	        }],
	        deploy: [{
	            before: "To deploy a Debian package into Artifactory you can either use the deploy option in the Artifact’s module or upload with cURL using matrix parameters. The required parameters are package name, distribution, component, and architecture in the following way:",
	            snippet: "curl <CURL_AUTH> -XPUT \"$2/$1/pool/<DEBIAN_PACKAGE_NAME>;deb.distribution=<DISTRIBUTION>;deb.component=<COMPONENT>;deb.architecture=<ARCHITECTURE>\" -T <PATH_TO_FILE>"
	        }, {
	            before: "You can specify multiple layouts by adding semicolon separated multiple parameters, like so:",
	            snippet: "curl <CURL_AUTH> -XPUT \"$2/$1/pool/<DEBIAN_PACKAGE_NAME>;deb.distribution=<DISTRIBUTION>;deb.distribution=<DISTRIBUTION>;deb.component=<COMPONENT>;deb.component=<COMPONENT>;deb.architecture=<ARCHITECTURE>;deb.architecture=<ARCHITECTURE>\" -T <PATH_TO_FILE>",
	            after: "To add an architecture independent layout use deb.architecture=all. This will cause your package to appear in the Packages index of all the architectures under the same Distribution and Component, as well as under a new index branch called binary-all which holds all Debian packages that are marked as \"all\"."
	        }]
	    },
	    opkg: {
	        read: [{
	            before: "To use the Artifactory repository to install Ipk packages you need to add an indexed path (a feed) to your <i>opkg.conf</i> file. You can do that using the following command:",
	            snippet: "echo 'src <FEED_NAME> http://$4/artifactory/$1/<PATH_TO_FEED>' >> /etc/opkg/opkg.conf",
	            after: "If you want your client to download the .gz variant of the Packages index file instead, change the src part to src/gz"
	        }, {
	            before: "For accessing Artifactory using credentials you can specify it in the <i>opkg.conf</i> file like so:",
	            snippet: "echo 'option http_auth <USERNAME>:<PASSWORD>' >> /etc/opkg/opkg.conf"
	        }, {
	            before: "Your Opkg client will use the specified Artifactory repositories to install the package",
	            snippet: "opkg install <PACKAGE>"
	        }],
	        deploy: [{
	            before: "To deploy an ipk package into Artifactory, run the following:",
	            snippet: "curl <CURL_AUTH> -XPUT \"http://$4/artifactory/$1/<PATH_TO_FEED>/<IPK_PACKAGE_NAME>\" -T <PATH_TO_FILE>"
	        }]
	    },
	    pypi: {
	        read: [{
	            before: "To resolve packages using pip, add the following to ~/.pip/pip.conf:",
	            snippet: "[global]\nindex-url = $2/api/pypi/$1/simple"
	        }, {
	            before: "If credentials are required they should be embedded in the URL. To resolve packages using pip, run:",
	            snippet: "pip install <PACKAGE>"
	        }],
	        deploy: [{
	            before: "To deploy packages using setuptools you need to add an Artifactory repository to the <i>.pypirc</i> file (usually located in your home directory):",
	            snippet: "[distutils]\n" + "index-servers = local\n" + "[local]\n" + "repository: $2/api/pypi/$1\n" + "username: <USERNAME>\n" + "password: <PASSWORD>"
	        }, {
	            before: "To deploy a python egg to Artifactory, after changing the <i>.pypirc</i> file, run the following command:",
	            snippet: "python setup.py sdist upload -r local"
	        }, {
	            before: "To deploy a python wheel to Artifactory, after changing the <i>.pypirc</i> file, run the following command:",
	            snippet: "python setup.py bdist_wheel upload -r local",
	            after: "where <i>local</i> is the index server you defined in <i>.pypirc</i>."
	        }]
	    },
	    puppet: {
	        general: [{
	            before: "In order for your Puppet client to work with Artifactory you will need to add  following in your puppet.conf file:",
	            snippet: "[main]\nmodule_repository=http://<USERNAME>:<PASSWORD>@$4/artifactory/api/puppet/$1"
	        }],
	        read: {
	            before: "To install a module by specifying Artifactory repository use the following puppet command:",
	            snippet: "puppet module install  --module_repository=http://<USERNAME>:<PASSWORD>@$4/artifactory/api/puppet/$1 <MODULE_NAME>"
	        },
	        deploy: {
	            before: "To deploy a Puppet module into an Artifactory repository you need to use Artifactory's REST API or the Web UI.<br/>For example, to deploy a Puppet module into this repository using the REST API, use the following command:",
	            snippet: "curl <CURL_AUTH> -XPUT $2/$1/<TARGET_FILE_PATH> -T <PATH_TO_FILE>"
	        }
	    },
	    bower: {
	        general: [{
	            before: "In order to use Bower with Artifactory you will need to add 'bower-art-resolver' as one of the resolvers in your .bowerrc file. To install <a href=\"https://www.npmjs.com/package/bower-art-resolver\" target=\"_blank\">bower-art-resolver</a> (custom Bower resolver dedicated to integrate with Artifactory), run the following command:",
	            snippet: "npm install -g bower-art-resolver"
	        }, {
	            before: "And add the bower-art-resolver as one of the resolvers in your <i>.bowerrc</i> file:",
	            snippet: "{\n\t\"resolvers\" : [\n\t\t\"bower-art-resolver\"\n\t]\n}"
	        }, {
	            before: "Now replace the default Bower registry with the following in your <i>.bowerrc</i> file:",
	            snippet: "{\n\t\"registry\" : \"$2/api/bower/$1\",\n\t\"resolvers\" : [\n\t\t\"bower-art-resolver\"\n\t]\n}"
	        }, {
	            before: "If authentication is required use:",
	            snippet: "{\n\t\"registry\" : \"http://<USERNAME>:<PASSWORD>@$4/artifactory/api/bower/$1\",\n\t\"resolvers\" : [\n\t\t\"bower-art-resolver\"\n\t]\n}"
	        }, {
	            before: "The instructions above apply to <b>Bower version 1.5</b> or higher. For older versions see instructions <a href=\"http://www.jfrog.com/confluence/display/RTF/Bower+Repositories#BowerRepositories-UsingOlderVersionsofBower\" target=\"_blank\">here</a>."
	        }],
	        read: {
	            before: "To install bower packages execute the following command:",
	            snippet: "bower install <PACKAGE>"
	        },
	        deploy: {
	            before: "To deploy a Bower package into an Artifactory repository you need to use Artifactory's REST API or the Web UI.<br/>For example, to deploy a Bower package into this repository using the REST API, use the following command:",
	            snippet: "curl <CURL_AUTH> -XPUT $2/$1/<TARGET_FILE_PATH> -T <PATH_TO_FILE>"
	        }
	    },
	    cocoapods: {
	        general: [{
	            before: "In order to use CocoaPods with Artifactory you will need to install the <a href=\"https://github.com/JFrogDev/cocoapods-art\" target=\"_blank\">'cocoapods-art'</a>. plugin. To install cocoapods-art run the following command:",
	            snippet: "gem install cocoapods-art" }, {
	            before: "repo-art uses authentication as specified in your standard <a href=\"https://www.gnu.org/software/inetutils/manual/html_node/The-_002enetrc-file.html\" target=\"_blank\">netrc file</a>.",
	            snippet: "machine $4\nlogin <USERNAME>\npassword <PASSWORD>"
	        }, {
	            before: "To add an Artifactory Specs repo:",
	            snippet: "pod repo-art add $1 \"$2/api/pods/$1\""
	        }],
	        read: [{
	            before: "To resolve pods from an Artifactory specs repo that you added, you must add the following to your Podfile:",
	            snippet: "plugin 'cocoapods-art', :sources => [\n  '$1'\n]"
	        }, {
	            before: "Then you can use install as usual:",
	            snippet: "pod install"
	        }],
	        deploy: [{
	            before: "To deploy a pod into an Artifactory repository you need to use Artifactory's REST API or the Web UI.<br/>For example, to deploy a pod into this repository using the REST API, use the following command:",
	            snippet: "curl <CURL_AUTH> -XPUT $2/$1/<TARGET_FILE_PATH> -T <PATH_TO_FILE>"
	        } /*,  {
	             before: "Artifactory can also function as a standalone Specs repo, which does not need to be backed by a Git repository.<br/>To push an index entry to the Specs repo on this repository use the following command:",
	             snippet: "pod repo-art push $1 <NAME.podspec>",
	             after: "Running the command without specifying a podspec will push all podspecs in the current working directory."
	          }*/]
	    },
	    conan: {
	        general: [{
	            before: "For your Conan command line client to work with this Conan repository, you first need to add the repository to your client configuration using the following command:",
	            snippet: "conan remote add <REMOTE> $2/api/conan/$1",
	            after: "And replace &lt;REMOTE&gt; with a name that identifies the repository (for example: \"my-conan-repo\")"
	        }, {
	            before: "To login use the <i>conan user</i> command:",
	            snippet: "conan user -p <PASSWORD> -r <REMOTE> <USERNAME>",
	            after: "And provide your Artifactory username and password or API key.<br/>If anonymous access is enabled you do not need to login."
	        }, {
	            before: "For complete Conan cli reference see documentation at <a href=\"http://docs.conan.io\">docs.conan.io</a>."
	        }],
	        read: [{
	            before: "To install the dependencies defined in your project's <i>conanfile.txt</i> from an Artifactory Conan repository, use the following command:",
	            snippet: "conan install . -r <REMOTE>"
	        }],
	        deploy: [{
	            before: "To deploy a Conan recipe with its binary packages to this repository use the following command:",
	            snippet: "conan upload <RECIPE> -r <REMOTE> --all",
	            after: "&lt;RECIPE&gt; is the Conan recipe reference you want to upload in the format: &lt;NAME&gt;/&lt;VERSION&gt;@&lt;USER&gt;/&lt;CHANNEL&gt;<br/>" + "For example: lib/1.0@conan/stable<br/><br/>" + "<b>Note:</b> You need to deploy Conan recipes only through the Conan client. Artifactory will index the recipe only if it was deployed through the Conan client. Deploying through the Artifactory UI or through the Deploy Artifact REST API will not index the recipe."
	        }]
	    },
	    cran: {
	        general: [{
	            before: "<br/>In order to use CRAN with Artifactory, add the repository to your Rprofile.site file by adding the following lines:",
	            snippet: "local({\n\t" + "r <- list(\"$1\" = \"http://<USERNAME>:<PASSWORD>@$4/artifactory/$1/\")\n\t" + "options(repos = r)\n" + "})"
	        }],
	        read: {
	            before: "To install a CRAN package from this repository use the R command line, and run the following command:",
	            snippet: "install.packages(\"<PACKAGE_NAME>\")"
	        },
	        deploy: [{
	            before: "<br/>To deploy a CRAN package to an Artifactory repository use the Artifactory REST API.</br>To deploy a source package, run the following command:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> -XPOST \"$2/api/cran/$1/sources\""
	        }, {
	            before: "To deploy a binary package, run the following command:",
	            snippet: "\"curl <CURL_AUTH> -T <PATH_TO_FILE> -XPOST \"$2/api/cran/$1/binaries?distribution=<DISTRIBUTION>&rVersion=<R_VERSION>\""
	        }]
	    },
	    docker: {
	        general: [{
	            title_reverse_proxy: "Using Docker with Artifactory requires a reverse proxy such as Nginx or Apache. For more details please visit our <a href=\"http://www.jfrog.com/confluence/display/RTF/Docker+Repositories#DockerRepositories-RequirementforaReverseProxy(Nginx/Apache)\" target=\"_blank\">Docker Repositories</a> documentation.",
	            title_insecure: "<br/>Not using an SSL certificate requires Docker clients to add an --insecure-registry flag to the <b>DOCKER_OPTS</b>",
	            snippet_insecure: "export DOCKER_OPTS+=\" --insecure-registry <INSECURE_SNIP>\"",
	            after_example_server: "<br/>In this example we use <b>artprod.mycompany</b> to represent the Docker repository in Artifactory." }, {
	            before: "To login use the <i>docker login</i> command.",
	            snippet: "docker login <DOCKER_SERVER>",
	            after: "And provide your Artifactory username and password or API key.<br/>If anonymous access is enabled you do not need to login."
	        }, {
	            before: "To manually set your credentials, or if you are using Docker v1, copy the following snippet to your ~/.docker/config.json file.",
	            snippet: "{\n\t\"auths\": {\n\t\t\"!https://<DOCKER_SERVER>\" : {\n\t\t\t\"auth\": \"<USERNAME>:<PASSWORD> (converted to base 64)\",\n\t\t\t\"email\": \"youremail@email.com\"\n\t\t}\n\t}\n}",
	            after: "To enter multiple registries see the <a href=\"https://www.jfrog.com/confluence/display/RTF/Using+Docker+V1#UsingDockerV1-3.SettingUpAuthentication\" target=\"_blank\">following example</a>."
	        }],
	        read: [{
	            before: "To pull an image use the <i>docker pull</i> command specifying the docker image and tag.",
	            snippet: "docker pull <DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }],
	        deploy: [{
	            before: "To push an image tag an image using the <i>docker tag</i> and then <i>docker push</i> command.",
	            snippet: "docker tag <IMAGE_ID>" + " " + "<DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }, {
	            before: "",
	            snippet: "docker push <DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }]
	    },
	    gitlfs: {
	        read: [{
	            before: "In order for your client to upload and download LFS blobs from artifactory, the [lfs] clause should be added to the <i>.lfsconfig</i> file of your Git repository in the following format:",
	            snippet: "[lfs]\n" + "url = \"http://<USERNAME>:<PASSWORD>@$4/artifactory/api/lfs/$1\""
	        }, {
	            before: "You can also set LFS endpoints for different remotes on your repo (as supported by the Git LFS client). For example:",
	            snippet: "[remote \"origin\"]\n" + "url = <URL>\n" + "fetch = +refs/heads/*:refs/remotes/origin/*\n" + "lfsurl = \"http://<USERNAME>:<PASSWORD>@$4/artifactory/api/lfs/$1\""
	        }]
	    },
	    helm: {
	        info_msg: "<div class=\"alert alert-info\">Artifactory only supports resolving Helm Charts from a virtual repository.<br/>To resolve Helm Charts from this repository, it must be included in the virtual repository your Helm client points to.</div>",
	        general: [{
	            before: "To work with Helm repositories, first install and configure your Helm client. <br/>You need to use Helm version 2.9.0 or above that supports authentication against Artifactory.<br/>Set your default Artifactory Helm repository/registry with the following command:",
	            snippet: "helm repo add $1 $2/$1 --username <USERNAME> --password <PASSWORD>"
	        }],
	        read: {
	            before: "To install a Helm Chart from this repository using your Helm command line client, use the following command:",
	            snippet: "helm repo update\n" + "helm install $1/[chartName]"
	        },
	        deploy: {
	            before: "To deploy a Helm Chart into an Artifactory repository you need to use Artifactory's REST API.<br/>For example, to deploy a Chart into this repository, use the following command:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/<TARGET_FILE_PATH>\""
	        }
	    },
	    go: {
	        general: [{
	            before: "To work with Go repositories, first install and configure your Go client. \n                    To deploy Go packages into an Artifactory repository, you first need to install and configure \n                     <a href='https://jfrog.com/getcli' target='_blank'>JFrog CLI</a>." }],
	        deploy: [{
	            before: "To deploy a Go package into an Artifactory repository, you need to run the following <a href='https://jfrog.com/getcli' target='_blank'>JFrog CLI</a>\n                        command from your project’s root directory:",
	            snippet: "jfrog rt go-publish $1 <VERSION> --url=$2 --user=<USERNAME> --password=<PASSWORD>"
	        }],
	        read: [{
	            before: "There are two ways to resolve a Go package from Artifactory: using JFrog CLI or using the Go client. <br>\n                        <h2>Using JFrog CLI</h2>To resolve a Go package using JFrog CLI, run the following command under your project’s root directory:",
	            snippet: "jfrog rt go build $1 --url=$2 --user=<USERNAME> --password=<PASSWORD>"
	        }, {
	            before: "<h2>Using Go</h2>To resolve a Go package from this repository using Go, first set your default Artifactory Go repository/registry by running the following command:",
	            snippet: "export GOPROXY=\"http://<USERNAME>:<PASSWORD>@$4/artifactory/api/go/$1\""
	        }, {
	            before: "Then, from your project’s root directory, run:",
	            snippet: "go build"
	        }]
	    },
	    nuget: {
	        general: [{
	            before: "When using Artifactory as a NuGet repository you can either work with the NuGet CLI directly or with Visual Studio."
	        }, {
	            before: "<b>NuGet CLI Configuration</b><br/>" + "Note: If this repository is configured as a NuGet API v3 repository (you may need to contact your Artifactory administrator)," + "you should skip to the NuGet CLI Configuration (API v3) section.<br/><br/>" + "To configure the NuGet CLI to work with Artifactory, you need to add this repository to the list of sources.<br/>" + "To add this repository, use the following command:",
	            snippet: "nuget sources Add -Name Artifactory -Source $2/api/nuget/$1 -username <USERNAME> -password <PASSWORD>"
	        }, {
	            before: "Then, to authenticate against Artifactory with the NuGet API key, run the following command:",
	            snippet: "nuget setapikey <USERNAME>:<PASSWORD> -Source Artifactory"
	        }, {
	            before: "<b>NuGet CLI Configuration (API v3)</b><br/>" + "If this repository is configured as a NuGet API v3 repository (you may need to contact your Artifactory administrator), " + "manually add the following line to the <b>NuGet.config</b> file:<br/>" + "The <b>NuGet.config</b> file can be found at <b>%appdata%\\NuGet\\NuGet.Config</b> (Windows) or <b>~/.config/NuGet/NuGet.Config</b> (Mac/Linux)",
	            snippet: "<add key=\"ArtifactoryNuGetV3\" value=\"$2/api/nuget/v3/$1\" protocolVersion=\"3\" />"
	        }, {
	            before: "Then, to authenticate against Artifactory with the NuGet API key, run the following command:",
	            snippet: "nuget setapikey <USERNAME>:<PASSWORD> -Source ArtifactoryNuGetV3"
	        }, {
	            before: "<b>Visual Studio Configuration</b><br/>" + "To configure the NuGet Visual Studio Extension to use Artifactory, you need to add this repository as another Package Source under NuGet Package Manager." + "<ol>" + "<li>Go to the \"Package Manager Settings\" in your Visual Studio (Tools > NuGet Package Manager > Package Manager Settings > Package Sources) and add another Package Source.</li>" + "<li>Name: Add a name for the package source (e.g. Artifactory NuGet repository)</li>" + "<li>Paste the snippet below in the URL field</li>" + "</ol>",
	            snippet: "$2/api/nuget/$1"
	        }, {
	            before: "<ol start=\"4\"><li>(Optional) If this repository is configured as a NuGet API v3 repository (you may need to contact your Artifactory administrator), manually add the following line to the <b>NuGet.config</b> file:<br/>" + "The <b>NuGet.config</b> file can be found at <b>%appdata%\\NuGet\\NuGet.Config</b> (Windows) or <b>~/.config/NuGet/NuGet.Config</b> (Mac/Linux)</li></ol>",
	            snippet: "<add key=\"ArtifactoryNuGetV3\" value=\"$2/api/nuget/v3/$1\" protocolVersion=\"3\" />"
	        }],
	        deploy: [{
	            before: "Deploying to this repository can be done by running the following command:",
	            snippet: "nuget push <PACKAGE_NAME> -Source Artifactory"
	        }, {
	            before: "To support more manageable layouts and additional features such as cleanup, NuGet repositories support custom layouts. When pushing a package, you need to ensure that its layout matches the target repository's layout:",
	            snippet: "nuget push <PACKAGE> -Source $2/api/nuget/$1/<PATH_TO_FOLDER>"
	        }],
	        read: [{
	            before: "<b>NuGet CLI Resolve</b><br/> To resolve a package using the NuGet CLI, run the following command:",
	            snippet: "nuget install <PACKAGE_NAME>"
	        }, {
	            before: "To make sure your client resolves from this repository, verify it is the first in the list of sources in your <i>NuGet.Config</i> file, or run the following command:",
	            snippet: "nuget install <PACKAGE_NAME> -Source Artifactory"
	        }]
	    },
	    ivy: {
	        general: {
	            title: "Click on \"Generate Ivy Settings\" in order to use Virtual or Remote repositories for resolution."
	        }
	    },
	    maven: {
	        general: {
	            title: "Click on \"Generate Maven Settings\" in order to resolve artifacts through Virtual or Remote repositories."
	        },
	        deploy: {
	            before: "To deploy build artifacts through Artifactory you need to add a deployment element with the URL of a target local repository to which you want to deploy your artifacts. For example:"
	        }
	    },
	    npm: {
	        general: [{
	            before: "For your npm command line client to work with Artifactory, you first need to set the default npm registry with an Artifactory npm repository using the following command:",
	            snippet: "npm config set registry $2/api/npm/$1/"
	        }, {
	            before: "If you are working with scoped packages, run the following command:",
	            snippet: "npm config set @<SCOPE>:registry $2/api/npm/$1/"
	        }, {
	            before: "There are two ways to authenticate your npm client against Artifactory: using the npm login command or using basic authentication.<br>\n                    <br><b>Using npm login</b><br>\n                    Run the following command in your npm client. When prompted, provide your Artifactory login credentials:",
	            snippet: "npm login"
	        }, {
	            before: "<b>Using basic authentication</b><br>\n                    Alternatively, you can paste the following into the <i>~/.npmrc</i> file (in Windows %USERPROFILE%/<i>.npmrc</i>):",
	            snippet: "_auth = <USERNAME>:<PASSWORD> (converted to base 64)\n" + "email = youremail@email.com\n" + "always-auth = true"
	        }, {
	            before: "If you are working with scoped packages, while using basic authentication, you also need to paste the following into the <i>~/.npmrc</i> file (in Windows %USERPROFILE%/<i>.npmrc</i>):",
	            snippet: "@<SCOPE>:registry=$2/api/npm/$1/\n" + "////$6/api/npm/$1/:_password=<BASE64_PASSWORD>\n" + "////$6/api/npm/$1/:username=<USERNAME>\n" + "////$6/api/npm/$1/:email=youremail@email.com\n" + "////$6/api/npm/$1/:always-auth=true"
	        }],
	        read: [{
	            before: "After adding Artifactory as the default repository you can install a package using the npm install command:",
	            snippet: "npm install <PACKAGE_NAME>"
	        }, {
	            before: "To install a package by specifying Artifactory repository use the following npm command:",
	            snippet: "npm install <PACKAGE_NAME> --registry $2/api/npm/$1/"
	        }],
	        deploy: [{
	            before: "To deploy your package to an Artifactory repository you can either add the following to the <i>package.json</i> file:",
	            snippet: "\"publishConfig\":{\"registry\":\"$2/api/npm/$1/\"}"
	        }, {
	            before: "And then you can simply run the default npm publish command:",
	            snippet: "npm publish"
	        }, {
	            before: "Or provide the local repository to the npm publish command:",
	            snippet: "npm publish --registry $2/api/npm/$1/"
	        }]
	    },
	    conda: {
	        general: [{
	            before: "For your Conda command line client to work with Artifactory, you first need to set Artifactory as a Conda repository in your .condarc file. The following is an example of a full .condarc file that uses Artifactory:",
	            snippet: "channel_alias: http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1\n" + "channels:\n" + "  - http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1\n" + "default_channels:\n" + "  - http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1"
	        }, {
	            before: "This line makes the Conda client use the specified URL when specifying the \"-c\" flag during package installation:",
	            snippet: "channel_alias: http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1"
	        }, {
	            before: "This line adds Artifactory to the existing list of Conda channels to be used by the client:",
	            snippet: "channels:\n" + "  - http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1"
	        }, {
	            before: "This line re-defines the list of default channels to be used by the client, restricting it to just Artifactory:",
	            snippet: "default_channels:\n" + "  - http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/api/conda/$1"
	        }, {
	            before: "If you want to disable the client SSL validations, you may add the following .condarc directive:",
	            snippet: "ssl_verify: false"
	        }, {
	            before: "<b>Using basic authentication</b><br>\n                    To use Basic Authentication, you may embed your credentials as part of the channel URL, as shown in the above snippets." }],
	        read: [{
	            before: "After setting up your .condarc, you may use the following command to resolve packages from Artifactory:",
	            snippet: "conda install <PACKAGE_NAME>"
	        }, {
	            before: "To install a package from a specific conda sub-channel, use the \"-c\" flag with the install command:",
	            snippet: "conda install -c <CHANNEL_NAME> <PACKAGE_NAME>"
	        }],
	        deploy: [{
	            before: "To deploy your package to an Artifactory repository you can either use the Artifactory web UI, or upload the package using an HTTP client like cURL:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/<TARGET_FILE_PATH>\""
	        }]
	    },
	    gems: {
	        general: [{
	            title: "For your gem client to upload and download Gems from this repository you need to add it to your <i>~/.gemrc</i> file using the following command:",
	            snippet: "gem source -a http://<USERNAME>:<PASSWORD>@$4/artifactory/api/gems/$1/"
	        }, {
	            before: "If anonymous access is enabled you can also use the following:",
	            snippet: "gem source -a $2/api/gems/$1/"
	        }, {
	            before: "To view a list of your effective sources and their order of resolution, run the following command:",
	            snippet: "gem source --list",
	            after: "Make sure that this repository is at the top of the list."
	        }, {
	            before: "If you want to setup the credentials for your gem tool either include your API_KEY in the <i>~/.gem/credentials</i> file, or run the following command:",
	            snippet: "curl -u<USERNAME>:<PASSWORD> $2/api/gems/$1/api/v1/api_key.yaml > ~/.gem/credentials"
	        }, {
	            before: "<b>Running on Linux</b><br/>On Linux you may need to change the permissions of the credentials file to 600 by navigating to <i>~/.gem</i> directory and running:",
	            snippet: "chmod 600 credentials"
	        }, {
	            before: "<b>Running on Windows</b><br/>On Windows, the credentials file is located at <i>%USERPROFILE%/.gem/credentials</i>. Note that you also need to set the API key encoding to be \"ASCII\".<br/> To generate the creadentials file run the following command from PowerShell:",
	            snippet: "curl.exe -u<USERNAME>:<PASSWORD> $2/api/gems/$1/api/v1/api_key.yaml | Out-File ~/.gem/credentials -Encoding \"ASCII\""
	        }, {
	            before: "<b>API keys</b><br/>You can modify the credentials file manually and add different API keys. You can then use the following command to choose the relevant API key:",
	            snippet: "gem push -k <KEY>"
	        }],
	        deploy: [{
	            before: "In order to push gems to this repository, you can set the global variable $RUBYGEMS_HOST to point to it as follows:",
	            snippet: "export RUBYGEMS_HOST=$2/api/gems/$1"
	        }, {
	            before: "You can also specify the target repository when pushing the gem by using the --host option:",
	            snippet: "gem push <PACKAGE> --host $2/api/gems/$1"
	        }],
	        read: [{
	            before: "After completing the configuration under General section above, simply execute the following command:",
	            snippet: "gem install <PACKAGE>"
	        }, {
	            before: "The package will be resolved from the repository configured in your <i>~/.gemrc</i> file. You can also specify a source with the following command:",
	            snippet: "gem install <PACKAGE> --source $2/api/gems/$1"
	        }]
	    },
	    generic: {
	        read: {
	            before: "You can download a file directly using the following command:",
	            snippet: "curl <CURL_AUTH> -O \"$2/$1/<TARGET_FILE_PATH>\""
	        },
	        deploy: {
	            before: "You can upload any file using the following command:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/<TARGET_FILE_PATH>\""
	        }
	    },
	    vagrant: {
	        read: {
	            before: "To provision a Vagrant box, all you need is to construct it's name in the following manner.",
	            snippet: "vagrant box add \"$2/api/vagrant/$1/{boxName}\""
	        },
	        deploy: {
	            before: "To deploy Vagrant boxes to this Artifactory repository using an explicit URL with Matrix Parameters use:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/{vagrantBoxName.box};box_name={name};box_provider={provider};box_version={version}\""
	        }
	    },
	    vcs: {
	        general: {
	            title: "Artifactory supports downloading tags or branches using a simple GET request. You can also specify to download a specific tag or branch as a tar.gz or zip, and a specific file within a tag or branch as a zip file."
	        },
	        read: [{
	            before: "Use the following command to list all tags:",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/tags/$1/<USER_ORG>/<REPO>"
	        }, {
	            before: "Use the following command to list all branches:",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/branches/$1/<USER_ORG>/<REPO>"
	        }, {
	            before: "Use the command below to download a tag. You can specify if the package will be downloaded as a tar.gz or a zip; default is tar.gz.",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/downloadTag/$1/<USER_ORG>/<REPO>/<TAG_NAME>?ext=<tar.gz/zip>"
	        }, {
	            before: "Use the following command to download a file within a tag as a zip:",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/downloadTagFile/$1/<USER_ORG>/<REPO>/<TAG_NAME>!<PATH_TO_FILE>?ext=zip"
	        }, {
	            before: "Use the command below to download a branch. You can specify a tar.gz or a zip by adding a parameter in the URL; default is tar.gz. (Downloading can be executed conditionally according to properties by specifying the properties query param. In this case only cached artifacts are searched.)",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/downloadBranch/$1/<USER_ORG>/<REPO>/<BRANCH_NAME>?ext=<tar.gz/zip>[&properties=key=value]"
	        }, {
	            before: "Use the following command to download a file within a branch as a zip:",
	            snippet: "curl <CURL_AUTH> -XGET $2/api/vcs/downloadBranchFile/$1/<USER_ORG>/<REPO>/<BRANCH_NAME>!<PATH_TO_FILE>?ext=zip"
	        }]
	    },
	    yum: {
	        general: [{
	            before: "To resolve <i>.rpm</i> files using the YUM client, edit or create the <i>artifactory.repo</i> file with root privileges:",
	            snippet: "sudo vi /etc/yum.repos.d/artifactory.repo"
	        }, {
	            before: "Then edit the baseurl to point to the path of the <a href=\"https://www.jfrog.com/confluence/display/RTF/YUM+Repositories#YUMRepositories-YUMrepodataFolderDepth\" target=\"_blank\">repodata folder</a> according to configured repository depth.<br />If the configured depth is 0 the baseurl should point to the root of the repository.",
	            snippet: "[Artifactory]\n" + "name=Artifactory\n" + "baseurl=http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/$1/<PATH_TO_REPODATA_FOLDER>\n" + "enabled=1\n" + "gpgcheck=0\n#Optional - if you have GPG signing keys installed, use the below flags to verify the repository metadata signature:\n#gpgkey=http://<URL_ENCODED_USERNAME>:<PASSWORD>@$4/artifactory/$1/<PATH_TO_REPODATA_FOLDER>/repomd.xml.key\n#repo_gpgcheck=1"
	        }],
	        read: [{}, {
	            before: "After adding the RPM repository you can install a package using the following yum install command:",
	            snippet: "yum install <PACKAGE>"
	        }],
	        deploy: {
	            before: "To deploy an RPM package into an Artifactory repository you need to use Artifactory's REST API or Web UI.<br/>For example, to deploy an RPM package into this repository using the REST API, use the following command:",
	            snippet: "curl <CURL_AUTH> -XPUT $2/$1/<PATH_TO_METADATA_ROOT> -T <TARGET_FILE_PATH>",
	            after: "The PATH_TO_METADATA_ROOT is according to the repository configured metadata folder depth."
	        }
	    },
	    sbt: {
	        general: [{
	            before: "You can define proxy repositories in the <i>~/.sbt/repositories</i> file in the following way:",
	            snippet: "[repositories]\n" + "local\n" + "my-ivy-proxy-releases: $2/$1/, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]\n" + "my-maven-proxy-releases: $2/$1/"
	        }, {
	            before: "In order to specify that all resolvers added in the sbt project should be ignored in favor of those configured in the repositories configuration, add the following configuration option to the sbt launcher script:",
	            snippet: "-Dsbt.override.build.repos=true",
	            after: "You can add this setting to the <i>/usr/local/etc/sbtopts</i> file"
	        }],
	        read: {
	            before: "Add the following to your <i>build.sbt</i> file:",
	            snippet: "resolvers += \n" + "\"Artifactory\" at \"$2/$1/\""
	        },
	        deploy: [{
	            before: "To publish <b>releases</b> add the following to your build.sbt:",
	            snippet: "publishTo := Some(\"Artifactory Realm\" at \"$2/$1\")\n" + "credentials += Credentials(\"Artifactory Realm\", \"$5\", \"<USERNAME>\", \"<PASSWORD>\")"
	        }, {
	            before: "To publish <b>snapshots</b> add the following to your build.sbt:",
	            snippet: "publishTo := Some(\"Artifactory Realm\" at \"$2/$1;build.timestamp=\" + new java.util.Date().getTime)\n" + "credentials += Credentials(\"Artifactory Realm\", \"$5\", \"<USERNAME>\", \"<PASSWORD>\")"
	        }]
	    },
	    gradle: {
	        general: {
	            title: "Click on \"Generate Gradle Settings\" in order to use Virtual or Remote repositories for resolution."
	        }
	    },
	    composer: {
	        general: [{
	            before: "In order to configure your Composer client to work with Aritfactory, you need to edit its <i>config.json</i> file (which can usually be found under <i>&lt;user-home-dir&gt;/.composer/config.json</i>) and add a repository reference to your Artifactory Composer repository. For example:",
	            snippet: "{\n" + "    \"repositories\": [\n" + "        {\"type\": \"composer\", \"url\": \"$2/api/composer/$1\"},\n" + "        {\"packagist\": false}\n" + "    ]\n" + "}"
	        }, {
	            before: "When working with a non-secure URL (i.e. HTTP instead of HTTPS), you need to add the below configuration to the <i>config.json</i> file as well:",
	            snippet: "\"config\": {\n" + "   \"secure-http\" : false\n" + "}"
	        }, {
	            before: "To access Artifactory using credentials, you can specify them in the <i>auth.json</i> file as follows:",
	            snippet: "{\n" + "    \"http-basic\": {\n" + "        \"$4\": {\n" + "            \"username\": \"<USERNAME>\",\n" + "            \"password\": \"<PASSWORD>\"\n" + "        }\n" + "    }\n" + "}"
	        }],
	        read: [{
	            before: "To install your composer.json dependencies, use the below command:",
	            snippet: "composer install --prefer-dist"
	        }],
	        deploy: [{
	            before: "To deploy a Composer package into an Artifactory repository you need to use Artifactory's REST API or the Web UI.<br/>For example, to deploy a Composer package into this repository using the REST API, use the following command:",
	            snippet: "curl <CURL_AUTH> $2/$1/<TARGET_FILE_PATH> -T <PATH_TO_FILE>" }, {
	            before: "If the package composer.json file does not include a version attribute, you should specify the version as a <i>composer.version</i> property (matrix parameter):",
	            snippet: "curl <CURL_AUTH> \"$2/$1/<TARGET_FILE_PATH>;composer.version=1.0.0\" -T <PATH_TO_FILE>" }]
	    },
	    chef: {
	        general: [{
	            before: "In order to configure your Knife client to work with Artifactory, you need to edit its <i>knife.rb</i> file (which can usually be found under <i>&lt;user-home-dir&gt;/.chef/</i>) and add a reference to your Artifactory Chef repository as a \"supermarket_site\". For example:",
	            snippet: "knife[:supermarket_site] = '$2/api/chef/$1'" }, {
	            before: "To support authentication which may be required by Artifactory, you need to install the <i>knife-art</i> plugin. " + "For installation instructions, please refer to the <a href=\"https://www.jfrog.com/confluence/display/RTF/Chef+Supermarket\" target=\"_blank\">Artifactory User Guide</a>). " + "Once the plugin is installed, you can specify your credentials at the beginning of the url as shown below:",
	            snippet: "http://<USERNAME>:<PASSWORD>@$4/artifactory/api/chef/$1"
	        }],
	        read: [{
	            before: "To install cookbook using Knife, use the below command:",
	            snippet: "knife artifactory install <cookbook-name> [VERSION]"
	        }],
	        deploy: [{
	            before: "To deploy a cookbook using Knife, run:",
	            snippet: "knife artifactory share <cookbook-name> [CATEGORY]" }]
	    },
	    p2: {
	        general: [{
	            before: "To configure Eclipse to get available packages through Artifactory, take the following steps:<br/>" + "<ol>" + "<li>In the Eclipse menu, select Help | Install new Software and then click Add.</li>" + "<li>In the Add Repository popup, enter a name for your repository (we recommend using the same name used in Artifactory) and its URL: &lt;repository URL&gt;</li>" + "<li>Eclipse will then query Artifactory and display the packages available in the repository.</li>" + "</ol>" + "<br><b>Integration with Tycho Plugins</b><br>" + "To resolve all dependencies through Artifactory, simply change the repository URL tag of your build pom.xml file as displayed in the snippet below:",
	            snippet: "<repository>\n" + "\t<id>eclipse-indigo</id>\n" + "\t<layout>p2</layout>\n" + "\t<url>$2/$1/</url>\n" + "</repository>"
	        }]
	    },
	    buildinfo: {
	        general: [{
	            before: "The <i>artifactory-build-info</i> repository contains all builds deployed to Artifactory, either directly through the UI or via REST API, CLI or the different CI server plugins.<br><br>" + "When deploying a build info JSON file, Artifactory will automatically place it in the repository using the following structure:<br>" + "<i>artifactory-build-info > [build-name] > [build-number]-[upload timestamp].json</i>"
	        }, {
	            title: "<label class=\"snippet\">Deploy</label>",
	            before: "There are different ways to upload a build:" + "<ol>" + "<li>Through the different <a href=\"https://www.jfrog.com/confluence/display/RTF/Build+Integration\" target=\"_blank\">CI server integrations</a></li>" + "<li>Through JFrog CLI <a href=\"https://www.jfrog.com/confluence/display/CLI/CLI+for+JFrog+Artifactory#CLIforJFrogArtifactory-BuildIntegration\" target=\"_blank\">Build Integration</a></li>" + "<li>Using the <a href=\"https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API#ArtifactoryRESTAPI-BuildUpload\" target=\"_blank\">Upload Build</a> REST API endpoint</li>" + "<li>Using the Upload button in the UI</li>" + "</ol>" }]
	    }
	
	};
	
	module.exports = snippets;
	/* {
	  before: "Artifactory also support scoped packages. For getting authentication details run the following command:",
	  snippet: "curl -u<USERNAME>:<PASSWORD> \"$2/api/npm/$1/auth/<SCOPE>\""
	}*/

/***/ }),

/***/ 172:
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
	
	var snippets = {
	    docker: {
	        general: [{
	            title_reverse_proxy: "Using Docker with JFrog Container Registry requires a reverse proxy such as Nginx or Apache. For more details please visit our <a href=\"https://www.jfrog.com/confluence/display/JCR/Docker+Registry\" target=\"_blank\">Docker Repositories</a> documentation.",
	            title_insecure: "<br/>Not using an SSL certificate requires Docker clients to add an --insecure-registry flag to the <b>DOCKER_OPTS</b>",
	            snippet_insecure: "export DOCKER_OPTS+=\" --insecure-registry <INSECURE_SNIP>\"",
	            after_example_server: "<br/>In this example we use <b>artprod.mycompany</b> to represent the Docker repository in JFrog Container Registry." }, {
	            before: "To login use the <i>docker login</i> command.",
	            snippet: "docker login <DOCKER_SERVER>",
	            after: "And provide your JFrog Container Registry username and password or API key.<br/>If anonymous access is enabled you do not need to login."
	        }, {
	            before: "To manually set your credentials, or if you are using Docker v1, copy the following snippet to your ~/.docker/config.json file.",
	            snippet: "{\n\t\"auths\": {\n\t\t\"!https://<DOCKER_SERVER>\" : {\n\t\t\t\"auth\": \"<USERNAME>:<PASSWORD> (converted to base 64)\",\n\t\t\t\"email\": \"youremail@email.com\"\n\t\t}\n\t}\n}",
	            after: "To enter multiple registries see the <a href=\"https://www.jfrog.com/confluence/display/JCR/Using+Docker+V1#UsingDockerV1-3.SettingUpAuthentication\" target=\"_blank\">following example</a>."
	        }],
	        read: [{
	            before: "To pull an image use the <i>docker pull</i> command specifying the docker image and tag.",
	            snippet: "docker pull <DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }],
	        deploy: [{
	            before: "To push an image tag an image using the <i>docker tag</i> and then <i>docker push</i> command.",
	            snippet: "docker tag <IMAGE_ID>" + " " + "<DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }, {
	            before: "",
	            snippet: "docker push <DOCKER_SERVER>/<DOCKER_REPOSITORY>:<DOCKER_TAG>"
	        }]
	    },
	    generic: {
	        read: {
	            before: "You can download a file directly using the following command:",
	            snippet: "curl <CURL_AUTH> -O \"$2/$1/<TARGET_FILE_PATH>\""
	        },
	        deploy: {
	            before: "You can upload any file using the following command:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/<TARGET_FILE_PATH>\""
	        }
	    },
	    helm: {
	        info_msg: "<div class=\"alert alert-info\">JFrog Container Registry only supports resolving Helm Charts from a virtual repository.<br/>To resolve Helm Charts from this repository, it must be included in the virtual repository your Helm client points to.</div>",
	        general: [{
	            before: "To work with Helm repositories, first install and configure your Helm client. <br/>You need to use Helm version 2.9.0 or above that supports authentication against JFrog Container Registry.<br/>Set your default JFrog Container Registry Helm repository/registry with the following command:",
	            snippet: "helm repo add $1 $2/$1 --username <USERNAME> --password <PASSWORD>"
	        }],
	        read: {
	            before: "To install a Helm Chart from this repository using your Helm command line client, use the following command:",
	            snippet: "helm repo update\n" + "helm install $1/[chartName]"
	        },
	        deploy: {
	            before: "To deploy a Helm Chart into an JFrog Container Registry repository you need to use JFrog Container Registry's REST API.<br/>For example, to deploy a Chart into this repository, use the following command:",
	            snippet: "curl <CURL_AUTH> -T <PATH_TO_FILE> \"$2/$1/<TARGET_FILE_PATH>\""
	        }
	    },
	    buildinfo: {
	        general: [{
	            before: "The <i>artifactory-build-info</i> repository contains all builds deployed to JFrog Container Registry, either directly through the UI or via REST API, CLI or the different CI server plugins.<br><br>" + "When deploying a build info JSON file, JFrog Container for the Registry will automatically place it in the repository using the following structure:<br>" + "<i>artifactory-build-info > [build-name] > [build-number]-[upload timestamp].json</i>"
	        }, {
	            title: "<label class=\"snippet\">Deploy</label>",
	            before: "There are different ways to upload a build:" + "<ol>" + "<li>Through the different <a href=\"https://www.jfrog.com/confluence/display/JCR/Build+Integration\" target=\"_blank\">CI server integrations</a></li>" + "<li>Through JFrog CLI <a href=\"https://www.jfrog.com/confluence/display/CLI/CLI+for+JFrog+Artifactory#CLIforJFrogArtifactory-BuildIntegration\" target=\"_blank\">Build Integration</a></li>" + "<li>Using the <a href=\"https://www.jfrog.com/confluence/display/JCR/JFrog+Container+Registry+REST+API#JFrogContainerRegistryRESTAPI-BuildUpload\" target=\"_blank\">Upload Build</a> REST API endpoint</li>" + "<li>Using the Upload button in the UI</li>" + "</ol>" }]
	    }
	
	};
	
	module.exports = snippets;

/***/ }),

/***/ 173:
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
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var FIELD_OPTIONS = _interopRequire(__webpack_require__(134));
	
	var MESSAGES = _interopRequire(__webpack_require__(169));
	
	var ArtifactoryDeployModal = exports.ArtifactoryDeployModal = (function () {
	    function ArtifactoryDeployModal($rootScope, RepoDataDao, JFrogEventBus, JFrogModal, $timeout, JFrogUIUtils, ArtifactoryFeatures) {
	        _classCallCheck(this, ArtifactoryDeployModal);
	
	        this.$rootScope = $rootScope;
	        this.$timeout = $timeout;
	        this.repoDataDao = RepoDataDao;
	        this.JFrogEventBus = JFrogEventBus;
	        this.artifactoryModal = JFrogModal;
	        this.jfrogUtils = JFrogUIUtils;
	        this.features = ArtifactoryFeatures;
	        this.TOOLTIP = TOOLTIP.artifacts.deploy;
	        this.MESSAGES = MESSAGES.actions.deploy;
	    }
	
	    _createClass(ArtifactoryDeployModal, {
	        launch: {
	
	            /**
	             * Init the modal scope and launch the modal
	             * @param node
	             * @returns {modalInstance.result|*}
	             */
	
	            value: function launch(node) {
	                this.$scope = this.$rootScope.$new();
	                this.$scope.Deploy = this;
	                this.node = node;
	                this.$scope.Deploy.fileSizeLimit = 0;
	                this._initDeploy();
	                this.modalInstance = this.artifactoryModal.launchModal("deploy_modal", this.$scope, 600);
	                return this.modalInstance.result;
	            }
	        },
	        _initDeploy: {
	
	            /**
	             * get repo list.
	             * set controller (single or multi)
	             * check if local repo
	             * (set  local repo on comm obj)
	             * @private
	             */
	
	            value: function _initDeploy() {
	                var _this = this;
	
	                this.currentDeploy = "Single";
	                this.deployFile = {};
	                this.comm = {};
	                this.repo = {};
	                this.repoDataDao.get({ deploy: "true" }).$promise.then(function (result) {
	                    _this.fileSizeLimit = result.fileUploadMaxSizeMb;
	                    _this.comm.reposList = result.repoTypesList;
	                    _this.comm.reposList = _.map(_this.comm.reposList, function (repo) {
	                        if (repo.layoutPattern) {
	                            repo.layoutPatternDisplay = repo.layoutPattern;
	
	                            var pattern = repo.layoutPattern;
	                            var nextToken = pattern.match(/\[(.*?)\]/);
	                            while (nextToken) {
	                                var safeHTML = nextToken[1].replace("<", "&lt").replace(">", "&gt");
	                                repo.layoutPatternDisplay = repo.layoutPatternDisplay.split(nextToken[0]).join("[" + safeHTML + "]");
	                                pattern = pattern.replace(nextToken[0], "");
	                                nextToken = pattern.match(/\[(.*?)\]/);
	                            }
	                        }
	                        var rowPackageType = _.find(FIELD_OPTIONS.repoPackageTypes, function (type) {
	                            return type.serverEnumName == repo.repoType;
	                        });
	                        if (rowPackageType) repo.repoTypeIcon = rowPackageType.icon;
	                        return repo;
	                    });
	
	                    if (_this.node) {
	                        _this.comm.localRepo = _.findWhere(_this.comm.reposList, { repoKey: _this.node.data.repoKey });
	                        _this.repo.repoInList = _this.comm.localRepo;
	                        _this.repo.rootRepo = _this.node.data.getRoot();
	                    } else {
	                        if (_this.deployController) _this.deployController.deployFile.repoDeploy = _this.comm.reposList[0];
	                    }
	                });
	                this.comm.createNotification = this.createNotification.bind(this);
	                this.comm.setController = function (controller) {
	                    _this.deployController = controller;
	                };
	            }
	        },
	        deploy: {
	
	            /**
	             * deploy on selected controller (single or multi)
	             */
	
	            value: function deploy() {
	                this.deployController.deployArtifacts();
	            }
	        },
	        onDeploySuccess: {
	
	            /**
	             * when deploy success refresh node and close modal
	             */
	
	            value: function onDeploySuccess() {
	                this.dispatchSuccessEvent();
	                this.modalInstance.close();
	            }
	        },
	        isSelectedDeploy: {
	
	            /**
	             * check if current deploy selected
	             * @param deploy
	             * @returns {boolean}
	             */
	
	            value: function isSelectedDeploy(deploy) {
	                return this.currentDeploy === deploy;
	            }
	        },
	        createNotification: {
	
	            /**
	             * This builds an appropriate notification for the Deploy action in the UI (with or w/o the Artifact URL)
	             *
	             * @param response from the server
	             * @returns {{type: string, body: string}}
	             */
	
	            value: function createNotification(response) {
	                var repoKey = response.repoKey;
	                var artifactPath = response.artifactPath;
	
	                artifactPath = _.trim(artifactPath || "", "/");
	                var encodedPath = encodeURIComponent(artifactPath).replace(/%2F/g, "/");
	                var messageWithUrl = "Successfully deployed <a href=\"#/artifacts/browse/tree/General/" + repoKey + "/" + encodedPath + "\">" + this.jfrogUtils.getSafeHtml(artifactPath) + "</a> to " + repoKey;
	                var messageWithoutUrl = "Successfully deployed " + this.jfrogUtils.getSafeHtml(artifactPath);
	                return {
	                    type: "success",
	                    body: response.showUrl ? messageWithUrl : messageWithoutUrl
	                };
	            }
	        },
	        dispatchSuccessEvent: {
	
	            /**
	             * after deploy _dispatchSuccessEvent refresh node in tree
	             * @private
	             */
	
	            value: function dispatchSuccessEvent() {
	                this.JFrogEventBus.dispatch(EVENTS.ACTION_DEPLOY, [this.deployFile.repoDeploy.repoKey, this.deployFile]);
	            }
	        },
	        onRepoChange: {
	            value: function onRepoChange() {
	                var _this = this;
	
	                this.$timeout(function () {
	                    if (_this.deployController.layoutTokens) {
	                        delete _this.deployController.layoutTokens;
	                        _this.deployController.extractTokensFromLayout();
	                        _this.deployController.updatePathFromLayoutTokens();
	                    }
	
	                    var repo = _this.deployController.deployFile.repoDeploy;
	                    if (repo.repoType !== "Maven" && _this.deployController.deployFile.unitInfo) {
	                        delete _this.deployController.deployFile.unitInfo.maven;
	                        _this.deployController.deployFile.unitInfo.mavenArtifact = false;
	                        if (_this.deployController.originalDeployPath) {
	                            _this.deployController.deployFile.targetPath = angular.copy(_this.deployController.originalDeployPath);
	                        }
	                    }
	
	                    // Save the new selected localRepo
	                    _this.repo.repoInList = repo;
	
	                    if (_this.deployController.deploySingleUploader) {
	                        _this.deployController.deploySingleUploader.getUploader().headers["X-ARTIFACTORY-REPOTYPE"] = _this.deployController.deployFile.repoDeploy.repoType;
	                    }
	                });
	            }
	        },
	        isTargetRepoSelectOpen: {
	            value: function isTargetRepoSelectOpen() {
	                return $(".target-path .ui-select-container").is(".open");
	            }
	        },
	        showDeployWarningMessage: {
	            value: function showDeployWarningMessage() {
	                // This check is necessary since ng-show calls this function asynchronously , before _initDeploy()
	                // so rootRepo is not loaded yet
	                if (this.repo && this.node && !this.repo.rootRepo) {
	                    this.repo.rootRepo = this.node.data.getRoot();
	                }
	                // Determine if a message should be displayed and determine its type
	                if (!this.repo.repoInList) {
	                    if (this.repo.rootRepo && this.repo.rootRepo.distribution) {
	                        this.warningMessage = this.MESSAGES.deployToDistRepoErrorMessage.message;
	                        this.messageType = this.MESSAGES.deployToDistRepoErrorMessage.messageType;
	                    } else if (this.repo.rootRepo.repoType === "virtual" && !this.node.data.hasDefaultDeployRepo) {
	                        this.warningMessage = this.MESSAGES.hasNoDefaultDeployRepo.message;
	                        this.messageType = this.MESSAGES.hasNoDefaultDeployRepo.messageType;
	                    } else if (this.repo.rootRepo.repoType === "remote" || this.repo.rootRepo.repoType === "cached") {
	                        this.warningMessage = this.MESSAGES.cannotDeployToRemote.message;
	                        if (this.features.isJCR()) this.warningMessage = this.MESSAGES.cannotDeployToRemote.messageJCR;
	                        this.messageType = this.MESSAGES.cannotDeployToRemote.messageType;
	                    } else if (this.repo.rootRepo.isTrashcan()) {
	                        this.warningMessage = this.MESSAGES.cannotDeployToTrashCan.message;
	                        this.messageType = this.MESSAGES.cannotDeployToTrashCan.messageType;
	                    } else {
	                        this.warningMessage = this.MESSAGES.deployPermissionsErrorMessage.message;
	                        this.messageType = this.MESSAGES.deployPermissionsErrorMessage.messageType;
	                    }
	                    return true;
	                }
	                return false;
	            }
	        }
	    });
	
	    return ArtifactoryDeployModal;
	})();

/***/ }),

/***/ 174:
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
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var PushToBintrayModal = exports.PushToBintrayModal = (function () {
	    function PushToBintrayModal($stateParams, $rootScope, $q, JFrogModal, PushToBintrayDao, JFrogNotifications) {
	        _classCallCheck(this, PushToBintrayModal);
	
	        this.JFrogNotifications = JFrogNotifications;
	        this.$rootScope = $rootScope;
	        this.$stateParams = $stateParams;
	        this.$q = $q;
	        this.modal = JFrogModal;
	        this.ptbDao = PushToBintrayDao;
	    }
	
	    _createClass(PushToBintrayModal, {
	        _getBuildBintrayRepositories: {
	            value: function _getBuildBintrayRepositories() {
	                var _this = this;
	
	                this.ptbDao.getBuildRepos().$promise.then(function (data) {
	                    _this.modalScope.data.bintrayRepos = _.map(data.binTrayRepositories, function (repo) {
	                        return { text: repo, value: repo };
	                    });
	                })["catch"](function (err) {
	                    if (err.data && err.data.feedbackMsg && err.data.feedbackMsg.error) {
	                        var msg = err.data.feedbackMsg.error;
	                        _this.JFrogNotifications.create({ error: msg });
	                    }
	                });
	            }
	        },
	        _getBuildBintrayPackages: {
	            value: function _getBuildBintrayPackages() {
	                var _this = this;
	
	                this.ptbDao.getBuildPacks({ key: this.modalScope.selection.bintrayRepo }).$promise.then(function (data) {
	                    data.binTrayPackages = _.filter(data.binTrayPackages, function (pack) {
	                        return pack !== "_";
	                    });
	                    _this.modalScope.data.bintrayPackages = _.map(data.binTrayPackages, function (pack) {
	                        return { text: pack, value: pack };
	                    });
	                    if (data.binTrayPackages && data.binTrayPackages.length) {
	                        if (!_this.modalScope.selection.bintrayPackageName) _this.modalScope.selection.bintrayPackageName = data.binTrayPackages[0];
	                    }
	                    if (_this.modalScope.selection.bintrayPackageName) {
	                        _this._getBuildBintrayVersions();
	                    } else {
	                        _this.modalScope.data.bintrayPackageVersions = [{ text: "1.0", value: "1.0" }];
	                        _this.modalScope.selection.bintrayPackageVersion = "1.0";
	                    }
	                });
	            }
	        },
	        _getBuildBintrayVersions: {
	            value: function _getBuildBintrayVersions() {
	                var _this = this;
	
	                this.ptbDao.getBuildVersions({
	                    key: this.modalScope.selection.bintrayRepo,
	                    id: this.modalScope.selection.bintrayPackageName
	                }).$promise.then(function (data) {
	                    _this.modalScope.data.bintrayPackageVersions = _.map(data.binTrayVersions, function (ver) {
	                        return { text: ver, value: ver };
	                    });
	                    if (data.binTrayVersions && data.binTrayVersions.length && !_this.modalScope.selection.bintrayPackageVersion) {
	                        _this.modalScope.selection.bintrayPackageVersion = data.binTrayVersions[0];
	                    }
	                })["catch"](function () {
	                    _this.modalScope.data.bintrayPackageVersions = [{ text: "1.0", value: "1.0" }];
	                    _this.modalScope.selection.bintrayPackageVersion = "1.0";
	                });
	            }
	        },
	        _pushBuildToBintray: {
	            value: function _pushBuildToBintray(backgroundPush) {
	                var _this = this;
	
	                var payload = {
	
	                    buildName: this.$stateParams.buildName,
	                    buildNumber: this.$stateParams.buildNumber,
	                    buildTime: this.$stateParams.startTime,
	                    bintrayParams: {
	                        useExistingProps: this.modalScope.selection.useSpecificProperties,
	                        notify: this.modalScope.selection.sendEmail,
	                        repo: this.modalScope.selection.bintrayRepo,
	                        packageId: this.modalScope.selection.bintrayPackageName,
	                        version: this.modalScope.selection.bintrayPackageVersion
	                    }
	                };
	
	                this.ptbDao.pushBuildToBintray({ background: backgroundPush }, payload).$promise.then(function (response) {
	                    _this.createPushToBintrayResponse(response);
	                })["finally"](function () {
	                    return _this.modalInstance.close();
	                });
	            }
	        },
	        _pushArtifactToBintray: {
	            value: function _pushArtifactToBintray() {
	                var _this = this;
	
	                var payload = {
	                    bintrayParams: this.bintrayParams
	                };
	
	                payload.bintrayParams.repo = this.modalScope.selection.bintrayRepo;
	                payload.bintrayParams.packageId = this.modalScope.selection.bintrayPackageName;
	                payload.bintrayParams.version = this.modalScope.selection.bintrayPackageVersion;
	                payload.bintrayParams.path = this.modalScope.selection.filePath;
	
	                this.ptbDao.pushArtifactToBintray({
	                    repoKey: this.params.repoKey,
	                    path: this.params.path
	                }, payload).$promise.then(function (response) {
	                    _this.createPushToBintrayResponse(response);
	                })["finally"](function () {
	                    return _this.modalInstance.close();
	                });
	            }
	        },
	        _getArtifactBintrayData: {
	            value: function _getArtifactBintrayData() {
	                var _this = this;
	
	                this.ptbDao.getArtifactData({ repoKey: this.params.repoKey, path: this.params.path }).$promise.then(function (data) {
	                    _this.bintrayParams = data.bintrayParams;
	                    _this.modalScope.selection.bintrayRepo = data.bintrayParams.repo;
	                    _this.modalScope.selection.bintrayPackageName = data.bintrayParams.packageId;
	                    _this.modalScope.selection.filePath = data.bintrayParams.path;
	                    _this.modalScope.selection.bintrayPackageVersion = data.bintrayParams.version;
	
	                    _this.modalScope.data.bintrayRepos = _.map(data.binTrayRepositories, function (repo) {
	                        return { text: repo, value: repo };
	                    }); //data.binTrayRepositories;
	                    if (data.bintrayParams.packageId) _this.modalScope.data.bintrayPackages = [data.bintrayParams.packageId];
	                    if (data.bintrayParams.version) _this.modalScope.data.bintrayPackageVersions = [{
	                        text: data.bintrayParams.version,
	                        value: data.bintrayParams.version
	                    }];
	
	                    if (_this.modalScope.selection.bintrayRepo) _this._getBuildBintrayPackages();
	                })["catch"](function (err) {
	                    if (err.data && err.data.feedbackMsg && err.data.feedbackMsg.error) {
	                        var msg = err.data.feedbackMsg.error;
	                        _this.JFrogNotifications.create({ error: msg });
	                    }
	                });
	            }
	        },
	        _pushDockerTagToBintray: {
	            value: function _pushDockerTagToBintray() {
	                var _this = this;
	
	                var payload = {
	                    bintrayParams: this.bintrayParams
	                };
	
	                payload.bintrayParams.repo = this.modalScope.selection.bintrayRepo;
	                payload.bintrayParams.path = this.modalScope.selection.filePath;
	
	                this.ptbDao.pushDockerTagToBintray({
	                    repoKey: this.params.repoKey,
	                    path: this.params.path
	                }, payload).$promise.then(function (response) {
	                    _this.createPushToBintrayResponse(response);
	                })["finally"](function () {
	                    return _this.modalInstance.close();
	                });
	            }
	        },
	        launchModal: {
	            value: function launchModal(type, params) {
	                var _this = this;
	
	                var deferred = this.$q.defer();
	                this.modalScope = this.$rootScope.$new();
	                this.modalScope.selection = {};
	                this.modalScope.data = {};
	                this.modalScope.tooltip = TOOLTIP.artifacts.pushToBintray;
	
	                this.modalScope.cancel = function () {
	                    _this.modalInstance.close();
	                    deferred.reject();
	                };
	
	                this.modalScope.onRepoSelect = function () {
	                    if (type !== "docker") _this._getBuildBintrayPackages();
	                };
	                this.modalScope.onPackageSelect = function () {
	                    _this._getBuildBintrayVersions();
	                };
	
	                this.modalScope.selectizeConfigAdd = {
	                    sortField: "number",
	                    create: true,
	                    maxItems: 1
	                };
	                this.modalScope.selectizeConfigNoAdd = {
	                    sortField: "number",
	                    create: false,
	                    maxItems: 1
	                };
	
	                this.modalScope.pushType = type;
	
	                switch (type) {
	                    case "build":
	                        {
	                            this.modalScope.push = function () {
	                                _this._pushBuildToBintray(false);
	                            };
	
	                            this.modalScope.backgroundPush = function () {
	
	                                _this._pushBuildToBintray(true);
	                            };
	
	                            this._getBuildBintrayRepositories();
	
	                            break;
	                        }
	                    case "artifact":
	                        {
	                            this.modalScope.push = function () {
	                                _this._pushArtifactToBintray();
	                            };
	
	                            var repoPath = params.repoPath;
	                            var arr = repoPath.split(":");
	                            var repoKey = arr[0];
	                            var path = arr[1];
	
	                            this.params = { repoKey: repoKey, path: path };
	
	                            this._getArtifactBintrayData();
	
	                            break;
	                        }
	                    case "docker":
	                        {
	                            this.modalScope.push = function () {
	                                _this._pushDockerTagToBintray();
	                            };
	
	                            var repoPath = params.repoPath;
	                            var arr = repoPath.split(":");
	                            var repoKey = arr[0];
	                            var path = arr[1];
	
	                            var pathArr = path.split("/");
	                            this.modalScope.docker = {
	                                tagName: pathArr.splice(pathArr.length - 1, 1),
	                                packageName: pathArr.join(":")
	                            };
	
	                            this.params = { repoKey: repoKey, path: path };
	
	                            this._getArtifactBintrayData();
	
	                            break;
	                        }
	                }
	                this.modalInstance = this.modal.launchModal("push_to_bintray", this.modalScope);
	
	                return deferred.promise;
	            }
	        },
	        createPushToBintrayResponse: {
	            value: function createPushToBintrayResponse(response) {
	                if (response.data.error) {
	                    this.createPushToBintrayErrorResponse(response.data);
	                    return;
	                }
	                var artifactBintrayUrl = response.data.url;
	                if (artifactBintrayUrl) {
	                    this.JFrogNotifications.createMessageWithHtml({
	                        type: "success",
	                        body: "" + response.data.info + " <a href=\"" + artifactBintrayUrl + "\" target=\"_blank\">" + artifactBintrayUrl + "</a>"
	                    });
	                }
	            }
	        },
	        createPushToBintrayErrorResponse: {
	            value: function createPushToBintrayErrorResponse(response) {
	                if (response.error) {
	                    this.JFrogNotifications.create(response);
	                }
	            }
	        }
	    });
	
	    return PushToBintrayModal;
	})();

/***/ }),

/***/ 175:
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
	
	exports.parseUrl = parseUrl;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function parseUrl() {
	  return function (url) {
	    var parser = document.createElement("a");
	    parser.href = url;
	    return parser;
	  };
	}

/***/ }),

/***/ 176:
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
	
	exports.recursiveDirective = recursiveDirective;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function recursiveDirective($compile) {
	  var _arguments = arguments;
	
	  return {
	    compile: function (elem, link) {
	      link = _.isFunction(link) ? { post: link } : link;
	      var origContents = elem.contents().remove();
	      var compileFunction;
	      return {
	        pre: link && link.pre ? link.pre : null,
	        post: function (scope, elem) {
	          compileFunction = !compileFunction ? $compile(origContents) : compileFunction;
	          compileFunction(scope, function (clone) {
	            return elem.append(clone);
	          });
	          if (link && link.post) link.post.apply(null, _arguments);
	        }
	      };
	    }
	  };
	}

/***/ }),

/***/ 177:
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
	
	var ArtifactorySidebarDriver = exports.ArtifactorySidebarDriver = (function () {
	    function ArtifactorySidebarDriver($timeout, $rootScope, $state, User, FooterDao, ArtifactoryFeatures, JFrogEventBus, ArtifactoryStorage, ArtifactoryState, KeyboardShortcutsModalService) {
	        _classCallCheck(this, ArtifactorySidebarDriver);
	
	        this.$timeout = $timeout;
	        this.User = User;
	        this.user = User.getCurrent();
	        this.storage = ArtifactoryStorage;
	        this.features = ArtifactoryFeatures;
	        this.footerDao = FooterDao;
	        this.ArtifactoryState = ArtifactoryState;
	        this.JFrogEventBus = JFrogEventBus;
	        this.EVENTS = JFrogEventBus.getEventsDefinition();
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	
	        this.licenseType = this.features.getCurrentLicense();
	        this.isAol = this.features.isAol();
	        this.isDedicatedAol = this.features.isDedicatedAol();
	        this.keyboardShortcutsModalService = KeyboardShortcutsModalService;
	    }
	
	    _createClass(ArtifactorySidebarDriver, {
	        setMenu: {
	            value: function setMenu(_menu) {
	                this.theMenu = _menu;
	            }
	        },
	        registerEvents: {
	            value: function registerEvents() {
	                var _this = this;
	
	                this.User.whenLoadedFromServer.then(function () {
	                    return _this.theMenu.refreshMenu();
	                });
	                if (!this.ArtifactoryState.getState("sidebarEventsRegistered")) {
	                    this.JFrogEventBus.register(this.EVENTS.USER_CHANGED, function () {
	                        return _this.theMenu.refreshMenu();
	                    });
	                    this.JFrogEventBus.register(this.EVENTS.FOOTER_REFRESH, function () {
	                        _this.getFooterData(true).then(function (footerData) {
	                            _this.theMenu.refreshMenu();
	                            _this.theMenu.footerData = footerData;
	                        });
	                    });
	                    this.ArtifactoryState.setState("sidebarEventsRegistered", true);
	                }
	            }
	        },
	        getMenuItems: {
	            value: function getMenuItems() {
	                return [{
	                    label: "Home",
	                    stateParent: "home",
	                    state: "home",
	                    icon: "icon icon-home-new",
	                    selected: true
	                }, {
	                    label: "Artifacts",
	                    state: "artifacts.browsers.path",
	                    stateParent: "artifacts",
	                    stateParams: { tab: "General", artifact: "", browser: "tree" },
	                    icon: "icon icon-artifacts-new",
	                    isDisabled: !this.user.canView("artifacts"),
	                    selected: false
	                }, {
	                    label: "Packages",
	                    stateParent: "packages",
	                    state: "packagesNative",
	                    icon: "icon icon-navigation-products",
	                    feature: "native-ui",
	                    isDisabled: !this.user.canView("packages") || this.features.isOss() || this.features.isConanCE(),
	                    selected: false
	                }, {
	                    label: "Search",
	                    state: "search",
	                    id: "search",
	                    icon: "icon icon-menu-search",
	                    isDisabled: !this.user.canView("search"),
	                    selected: false
	                }, {
	                    label: "Release Bundles",
	                    state: "bundles.list",
	                    stateParent: "bundles",
	                    stateParams: { tab: "target" },
	                    icon: "icon icon-navigation-bundle",
	                    isDisabled: !this.user.isAdmin(),
	                    isHidden: this.features.isNonCommercial() || this.features.isAol(),
	                    selected: false
	                }, {
	                    label: "Builds",
	                    stateParent: "builds",
	                    state: "builds.all",
	                    icon: "icon icon-builds-new",
	                    selected: false,
	                    isDisabled: !this.user.buildBasicView,
	                    isHidden: this.features.isHidden("builds")
	                }, {
	                    label: "Admin",
	                    icon: "icon icon-admin-new",
	                    id: "admin",
	                    stateParent: "admin",
	                    state: "admin",
	                    selected: false,
	                    children: this._getAdminMenuItems(),
	                    isDisabled: !this.user.getCanManage()
	                }];
	            }
	        },
	        _getAdminMenuItems: {
	            value: function _getAdminMenuItems() {
	                var adminItems = [{
	                    label: "Repositories",
	                    state: "admin.repositories",
	                    subItems: [{ label: "Local", state: "admin.repositories.list", stateParams: { repoType: "local" } }, { label: "Remote", state: "admin.repositories.list", stateParams: { repoType: "remote" } }, { label: "Virtual", state: "admin.repositories.list", stateParams: { repoType: "virtual" } }, { label: "Distribution", state: "admin.repositories.list", stateParams: { repoType: "distribution" }, feature: "distribution" }, { label: "Layouts", state: "admin.repositories.repo_layouts" }]
	                }, {
	                    label: "Configuration",
	                    state: "admin.configuration",
	                    subItems: [{ label: "General Configuration", state: "admin.configuration.general" }, { label: "JFrog Xray", state: "admin.configuration.xray", feature: "xray" }, { label: "Licenses", state: "admin.configuration.licenses", feature: "licenses" }, { label: "Property Sets", state: "admin.configuration.property_sets", feature: "properties" }, { label: "Proxies", state: "admin.configuration.proxies", feature: "proxies" }, {
	                        label: "HTTP Settings",
	                        state: "admin.configuration.reverse_proxy",
	                        feature: "reverse_proxies"
	                    }, { label: "Mail", state: "admin.configuration.mail", feature: "mail" }, { label: "High Availability", state: "admin.configuration.ha", feature: "highavailability" },
	                    //{"label": "Bintray", "state": "admin.configuration.bintray"},
	                    {
	                        label: "Artifactory Licenses",
	                        state: "admin.configuration.register_pro",
	                        feature: "register_pro"
	                    }]
	                }, {
	                    label: "Security",
	                    state: "admin.security",
	                    subItems: [{ label: "Security Configuration", state: "admin.security.general" }, { label: "Users", state: "admin.security.users" }, { label: "Groups", state: "admin.security.groups" }, { label: "Permissions", state: "admin.security.permissions" }, { label: "Access Tokens", state: "admin.security.access_tokens", feature: "access_tokens" }, { label: "LDAP", state: "admin.security.ldap_settings" }, { label: "Crowd / JIRA", state: "admin.security.crowd_integration", feature: "crowd" }, { label: "SAML SSO", state: "admin.security.saml_integration", feature: "samlsso" }, { label: "OAuth SSO", state: "admin.security.oauth", feature: "oauthsso" }, { label: "HTTP SSO", state: "admin.security.http_sso", feature: "httpsso" }, { label: "SSH Server", state: "admin.security.ssh_server", feature: "sshserver" }, { label: "Signing Keys", state: "admin.security.signing_keys", feature: "signingkeys" }, { label: "Trusted Keys", state: "admin.security.trusted_keys", feature: "trustedkeys" }, { label: "Certificates", state: "admin.security.ssl_certificates", feature: "sslcertificates" }]
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
	                    subItems: [{ label: "Support Zone", state: "admin.advanced.support_page", feature: "supportpage" }, { label: "Log Analytics", state: "admin.advanced.log_analytics" }, { label: "System Logs", state: "admin.advanced.system_logs" }, { label: "System Info", state: "admin.advanced.system_info", feature: "systeminfo" }, { label: "Maintenance", state: "admin.advanced.maintenance", feature: "maintenance" }, { label: "Storage", state: "admin.advanced.storage_summary" }, {
	                        label: "Config Descriptor",
	                        state: "admin.advanced.config_descriptor",
	                        feature: "configdescriptor"
	                    }, {
	                        label: "Security Descriptor",
	                        state: "admin.advanced.security_descriptor",
	                        feature: "securitydescriptor"
	                    }]
	                }];
	                this._fixAdminMenuItems(adminItems);
	                return adminItems;
	            }
	        },
	        onBeforeStateSwitch: {
	            value: function onBeforeStateSwitch(item) {
	                // Fix browser param according to user preference
	                if (item.state === "artifacts.browsers.path") {
	                    var storedBrowser = this.storage.getItem("BROWSER");
	                    item.stateParams.browser = storedBrowser || "tree";
	                    item.stateParams.tab = storedBrowser === "stash" ? "StashInfo" : "General";
	                }
	
	                this.ArtifactoryState.setState("clearErrorsOnStateChange", true);
	            }
	        },
	        getFooterData: {
	            value: function getFooterData(force) {
	                var prom = this.footerDao.get(force);
	                return prom;
	            }
	        },
	        onKeyDown: {
	            value: function onKeyDown(e) {
	                if (e.keyCode === 82 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+R
	                    e.preventDefault();
	                    this.theMenu.goToState(_.find(this.theMenu.menuItems, { state: "artifacts.browsers.path" }));
	                    this.theMenu.closeSubMenu(0, true);
	                }
	                if (e.keyCode === 83 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+S
	                    e.preventDefault();
	                    this.theMenu.goToState(_.find(this.theMenu.menuItems, { state: "search" }));
	                    this.theMenu.closeSubMenu(0, true);
	                }
	                if (e.keyCode === 66 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+B
	                    if (this.features.isEdgeNode()) {
	                        return;
	                    }e.preventDefault();
	                    this.theMenu.goToState(_.find(this.theMenu.menuItems, { state: "builds.all" }));
	                    this.theMenu.closeSubMenu(0, true);
	                }
	                if (e.keyCode === 76 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+L
	                    e.preventDefault();
	                    this._logout();
	                    this.theMenu.closeSubMenu(0, true);
	                }
	                if (e.keyCode === 78 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+N
	                    e.preventDefault();
	                    if ($(".admin-grid-buttons").find("a#new-button, a#repositories-new, a#new-rule").length) {
	                        this.$timeout(function () {
	                            angular.element(document.querySelector("a#new-button, a#repositories-new, a#new-rule")).triggerHandler("click");
	                        }, 0);
	                    }
	                }
	                if (e.keyCode === 191 && (e.ctrlKey || e.metaKey) && e.altKey) {
	                    // Ctrl+Alt+/ - open shortcuts pop up
	                    e.preventDefault();
	                    this.keyboardShortcutsModalService.showhSortcutsModal();
	                    this.theMenu.closeSubMenu(0, true);
	                }
	            }
	        },
	        _logout: {
	            value: function _logout() {
	                var _this = this;
	
	                this.User.logout().then(function () {
	                    _this.$state.go("login");
	                });
	            }
	        },
	        _fixAdminMenuItems: {
	            value: function _fixAdminMenuItems(adminItems) {
	                var _this = this;
	
	                var ind = 0;
	
	                this.footerDao.get(false).then(function (footerData) {
	                    var xrayDetails = {
	                        licenseType: _this.licenseType,
	                        xrayConfigured: footerData.xrayConfigured,
	                        isXrayEnabled: footerData.xrayEnabled,
	                        isXrayLicensed: footerData.xrayLicense,
	                        supportedLicenses: ["OSS", "PRO", "ENT"]
	                    };
	
	                    adminItems.forEach(function (item) {
	                        item.isDisabled = true;
	                        // if all subitems are hidden then hide item
	                        item.isHidden = _.every(item.subItems, function (subitem) {
	                            return _this.features.isHidden(subitem.feature);
	                        });
	                        item.subItems.forEach(function (subitem) {
	                            subitem.id = ind++;
	
	                            if ((_this.features.isConanCE() || _this.features.isJCR()) && subitem.label === "Maven Indexer") {
	                                subitem.isHidden = true;
	                                return;
	                            }
	                            if (subitem.label != "JFrog Xray") {
	                                subitem.isHidden = _this.features.isHidden(subitem.feature);
	                            }
	                            if ((!_this.user.canView(subitem.state) || _this.features.isDisabled(subitem.feature)) && subitem.label != "JFrog Xray") {
	                                subitem.isDisabled = true;
	                            } else {
	                                // if one subitem is enabled then item is enabled
	                                item.isDisabled = false;
	                            }
	
	                            if (subitem.label === "JFrog Xray") {
	
	                                if (!xrayDetails.isXrayLicensed) {
	                                    if (xrayDetails.xrayConfigured) {
	                                        subitem.isDisabled = false;
	                                        return;
	                                    }
	                                    if (xrayDetails.licenseType != "ENT") {
	                                        subitem.isDisabled = true;
	                                    }
	                                } else {
	                                    subitem.isDisabled = false;
	                                }
	
	                                //In any case, if we don't have admin perms, Xray item should not be enabled
	                                if (!_this.user.canView(subitem.state)) {
	                                    subitem.isDisabled = true;
	                                }
	                            }
	                        });
	                    });
	                });
	            }
	        }
	    });
	
	    return ArtifactorySidebarDriver;
	})();

/***/ }),

/***/ 178:
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
	
	var fieldOptions = _interopRequire(__webpack_require__(134));
	
	var TOOLTIP = _interopRequire(__webpack_require__(106));
	
	var OnBoardingWizard = exports.OnBoardingWizard = (function () {
	    function OnBoardingWizard($timeout, $q, JFrogModal, FooterDao, JcrEulaDao, JcrNewsletterDao, ArtifactoryState, GoogleAnalytics, ArtifactoryFeatures, OnboardingDao, User, $state) {
	        _classCallCheck(this, OnBoardingWizard);
	
	        this.ArtifactoryState = ArtifactoryState;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.FooterDao = FooterDao;
	        this.$timeout = $timeout;
	        this.features = ArtifactoryFeatures;
	        this.$q = $q;
	        this.modal = JFrogModal;
	        this.User = User;
	        this.OnboardingDao = OnboardingDao;
	        this.JcrEulaDao = JcrEulaDao;
	        this.JcrNewsletterDao = JcrNewsletterDao;
	        this.$state = $state;
	    }
	
	    _createClass(OnBoardingWizard, {
	        show: {
	            value: function show() {
	                var _this = this;
	
	                var quickSetup = arguments[0] === undefined ? false : arguments[0];
	
	                // TODO: Investifate this cause
	                if (!this.User.getCurrent().isAdmin()) {
	                    return;
	                }
	                //Pass thw quickSetup flag to the wizard controller
	                WizardController.prototype.quickSetup = quickSetup;
	                WizardController.prototype.mainCtrl = this;
	
	                //We create a promise to be fulfilled when we've got both user data and footer (license/features) data
	                var defer = this.$q.defer();
	
	                this.User.loadUser(true).then(function () {
	                    // If session is expiered anc user is trying to open the 'Quick Setup' modal => go to login state
	                    if (quickSetup && !_this.User.getCurrent().isAdmin()) {
	                        defer.reject();
	                        _this.ArtifactoryState.removeState("onboardingWizardOpen");
	                        _this.$state.go("login");
	                        return;
	                    }
	                    _this.FooterDao.get(true).then(function (footerData) {
	                        if (footerData.haConfigured) {
	                            _this.haConfigured = true;
	                        }
	                        defer.resolve();
	                    });
	                });
	                var whenReady = defer.promise;
	
	                this.ArtifactoryState.setState("onboardingWizardOpen", true);
	
	                whenReady.then(function () {
	                    _this.user = _this.User.getCurrent();
	                    var steps = [];
	                    var icons = [];
	                    var iconsPreloadObj = [];
	                    var wizardDefinitionObject = {
	                        title: "Quick Setup Wizard",
	                        controller: WizardController,
	                        controllerAs: "WizCtrl",
	                        // todo:JCR ...
	                        cancelable: quickSetup || _this.initStatus.eulaConfirmed || !_this.features.isJCR(),
	                        backdropCancelable: quickSetup ? true : false,
	                        steps: steps,
	                        icons: icons,
	                        iconsPreload: iconsPreloadObj,
	                        modalOptions: { keyboard: true },
	                        size: "onboarding-wizard"
	                    };
	
	                    var setMeUpUrl = _this.features.isJCR() ? "https://www.jfrog.com/confluence/display/JCR/General+Information#GeneralInformation-SetMeUp" : "https://www.jfrog.com/confluence/display/RTF/Using+Artifactory#UsingArtifactory-SetMeUp";
	
	                    var globalName = _this.features.isJCR() ? _this.features.getGlobalName() : "JFrog " + _this.features.getGlobalName();
	
	                    if (!quickSetup) {
	
	                        steps.push({
	                            name: "Welcome to " + globalName + "!",
	                            id: "welcome",
	                            templateUrl: "modal_templates/onboarding_wizard/welcome.html",
	                            skippable: false,
	                            supportReturnTo: true,
	                            "class": "welcome"
	                        });
	
	                        // wizardDefinitionObject.doNotShowWizardAgain = {
	                        //     label: 'Do not show again',
	                        //     globalFlagName: 'skipOnboarding'
	                        // };
	                    }
	
	                    // todo:JCR: more eula backend integration
	                    if (!quickSetup && !_this.initStatus.eulaConfirmed && _this.features.isJCR()) {
	                        steps.push({
	                            name: "EULA Confirmation",
	                            id: "eula",
	                            icon: "images/wizard-icons/icon_eula_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_eula_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_eula_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_eula_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_eula_build_gif@2.3184.gif 2x, images/wizard-icons/icon_eula_build_gif@3.3184.gif 3x",
	                            templateUrl: "modal_templates/onboarding_wizard/eula.html",
	                            description: "Accept the EULA to activate JFrog Container Registry",
	                            skippable: false,
	                            supportReturnTo: false
	                        });
	                    }
	
	                    if (!quickSetup && _this.features.isJCR() && !_this.initStatus.newsletterFilled) {
	                        steps.push({
	                            name: "Sign for Updates",
	                            id: "newsletter",
	                            icon: "images/wizard-icons/icon_subscribe_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_subscribe_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_subscribe_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_subscribe_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_subscribe_build_gif@2.3184.gif 2x, images/wizard-icons/icon_subscribe_build_gif@3.3184.gif 3x",
	                            templateUrl: "modal_templates/onboarding_wizard/newsletter.html",
	                            description: "Subscribe to get notified about new versions and features by JFrog. You can unsubscribe at anytime",
	                            skippable: true,
	                            supportReturnTo: true
	                        });
	                    }
	
	                    if (!quickSetup && !_this.initStatus.hasLicenseAlready && !_this.features.isAol() && !_this.features.isNonCommercial()) {
	                        steps.push({
	                            name: "Activate Your Artifactory Instance",
	                            id: "license",
	                            icon: "images/wizard-icons/icon_1_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_1_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_1_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_1_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_1_build_gif@2.3184.gif 2x, images/wizard-icons/icon_1_build_gif@3.3184.gif 3x",
	                            templateUrl: "modal_templates/onboarding_wizard/license_registration.html",
	                            description: "Don't have a license? Start a " + "<a href=\"https://www.jfrog.com/artifactory/free-trial/\" target=\"_blank\" class=\"jf-link nowrap\">" + "free trial <i class=\"icon icon-external-link\"></i>" + "</a>",
	                            skippable: false,
	                            supportReturnTo: false
	                        });
	                    }
	
	                    if (!quickSetup && !_this.user.isAdmin() && _this.initStatus.hasPriorLogins) {
	                        steps.push({
	                            name: "Admin Login",
	                            id: "login",
	                            icon: "images/wizard-icons/icon_2_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_2_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_2_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_2_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_2_build_gif@2.3184.gif 2x, images/wizard-icons/icon_2_build_gif@3.3184.gif 3x",
	                            description: !_this.features.isAol() ? "Use your admin credentials to login.<br>Didn’t change your default password yet? Do it once you complete this wizard! (you won’t regret it)" : "Log in using the admin credentials you received in the activation email.",
	                            templateUrl: "modal_templates/onboarding_wizard/login.html",
	                            skippable: false,
	                            supportReturnTo: false
	                        });
	                    }
	
	                    if (!quickSetup && !_this.user.isAdmin() && !_this.initStatus.hasPriorLogins) {
	
	                        var DefaultAdminUserUrl = _this.features.isJCR() ? "https://www.jfrog.com/confluence/display/JCR/Installing+JFrog+Container+Registry#InstallingJFrogContainerRegistry-DefaultAdminUser" : "https://www.jfrog.com/confluence/display/RTF/Installing+Artifactory#InstallingArtifactory-DefaultAdminUser";
	
	                        steps.push({
	                            name: "Set Admin Password",
	                            id: "setNewPassword",
	                            icon: "images/wizard-icons/icon_2_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_2_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_2_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_2_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_2_build_gif@2.3184.gif 2x, images/wizard-icons/icon_2_build_gif@3.3184.gif 3x",
	                            description: "This new password is for the default admin user.<br>" + "Want to skip? Find the default admin credentials in the " + ("<a href=\"" + DefaultAdminUserUrl + "\" target=\"_blank\" class=\"jf-link nowrap\">") + ("" + globalName + " User Guide <i class=\"icon icon-external-link\"></i>") + "</a>.",
	                            templateUrl: "modal_templates/onboarding_wizard/set_password.html",
	                            skippable: true,
	                            supportReturnTo: true
	                        });
	                    }
	
	                    if (!quickSetup && !_this.features.isAol() && !_this.initStatus.hasProxies) {
	                        steps.push({
	                            name: "Configure a Proxy Server",
	                            id: "proxy",
	                            icon: "images/wizard-icons/icon_3_idle_gif.3184.gif",
	                            iconSrcset: "images/wizard-icons/icon_3_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_3_idle_gif@3.3184.gif 3x",
	                            buildIcon: "images/wizard-icons/icon_3_build_gif.3184.gif",
	                            buildIconSrcset: "images/wizard-icons/icon_3_build_gif@2.3184.gif 2x, images/wizard-icons/icon_3_build_gif@3.3184.gif 3x",
	                            description: "This lets you access resources remotely.",
	                            templateUrl: "modal_templates/onboarding_wizard/proxy.html",
	                            skippable: true,
	                            supportReturnTo: true
	                        });
	                    }
	
	                    var btns = [{ label: "Back", action: "back" }, { label: "Skip", action: "skip" }, { label: "Create", action: "next" }];
	                    if (quickSetup) {
	                        btns.splice(0, 2);
	                    }
	
	                    steps.push({
	                        name: "Create Repositories",
	                        id: "packageTypes",
	                        icon: "images/wizard-icons/icon_4_idle_gif.3184.gif",
	                        iconSrcset: "images/wizard-icons/icon_4_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_4_idle_gif@3.3184.gif 3x",
	                        buildIcon: "images/wizard-icons/icon_4_build_gif.3184.gif",
	                        buildIconSrcset: "images/wizard-icons/icon_4_build_gif@2.3184.gif 2x, images/wizard-icons/icon_4_build_gif@3.3184.gif 3x",
	                        description: "Select the package type(s) you want - we’ll create the default repositories for you!<br>" + "Need to skip? No worries, create and manage repositories anytime.",
	                        templateUrl: "modal_templates/onboarding_wizard/package_types.html",
	                        skippable: true,
	                        supportReturnTo: false,
	                        customButtons: btns
	                    });
	
	                    var wikiUrl = _this.features.isJCR() ? "https://www.jfrog.com/confluence/display/JCR" : "https://www.jfrog.com/confluence/display/RTF";
	
	                    steps.push({
	                        name: "" + _this.features.getGlobalName() + " on-boarding complete!",
	                        id: "summary",
	                        icon: "images/wizard-icons/icon_5_idle_gif.3184.gif",
	                        iconSrcset: "images/wizard-icons/icon_5_idle_gif@2.3184.gif 2x, images/wizard-icons/icon_5_idle_gif@3.3184.gif 3x",
	                        buildIcon: "images/wizard-icons/icon_5_build_gif.3184.gif",
	                        buildIconSrcset: "images/wizard-icons/icon_5_build_gif@2.3184.gif 2x, images/wizard-icons/icon_5_build_gif@3.3184.gif 3x",
	                        description: "Congrats! These are the default repositories we created for you.<br>" + "You’re now ready to speed up your software releases!<br>" + "Want to configure your client(s) and get started? Click the " + ("<a href=\"" + setMeUpUrl + "\" class=\"jf-link\" target=\"_blank\">") + "Set Me Up <i class=\"icon icon-external-link\"></i>" + "</a> button for each repository.<br>" + "Want to learn more about different repository types? Consult the " + ("<a href=\"" + wikiUrl + "\" target=\"_blank\" class=\"jf-link nowrap\">") + ("" + globalName + " User Guide <i class=\"icon icon-external-link\"></i>") + "</a>.",
	                        templateUrl: "modal_templates/onboarding_wizard/summary.html",
	                        skippable: false,
	                        supportReturnTo: false,
	                        hideTitleBorder: true
	                    });
	
	                    if (quickSetup) {
	                        var step = _.find(steps, { id: "summary" });
	                        step.name = "All Done!";
	                        step.description = "These are the default repositories we created for you.<br>" + ("Want to configure your client(s) and get started? Click the <a href=\"" + setMeUpUrl + "\" target=\"_blank\" class=\"jf-link\">Set Me Up <i class=\"icon icon-external-link\"></i></a> button for each repository.");
	                    }
	
	                    _.forEach(steps, function (step) {
	                        // setup the icons object
	                        var iconData = {};
	                        if (step.icon) {
	                            iconData.icon = step.icon;
	                        }
	                        if (step.iconSrcset) {
	                            iconData.iconSrcset = step.iconSrcset;
	                        }
	                        if (step.buildIcon) {
	                            iconData.buildIcon = step.buildIcon;
	                        }
	                        if (step.buildIconSrcset) {
	                            iconData.buildIconSrcset = step.buildIconSrcset;
	                        }
	
	                        if (!_.isEmpty(iconData)) {
	                            icons.push(iconData);
	                        }
	
	                        // setup flat object of all icons for preloading in the onboarding welcome screen
	                        if (step.icon && !step.iconSrcset) {
	                            iconsPreloadObj.push({ icon: step.icon });
	                        }
	                        if (step.icon && step.iconSrcset) {
	                            iconsPreloadObj.push({ icon: step.icon, iconSrcset: step.iconSrcset });
	                        }
	                        if (step.buildIcon && step.buildIconSrcset) {
	                            iconsPreloadObj.push({ icon: step.buildIcon, iconSrcset: step.buildIconSrcset });
	                        }
	                    });
	
	                    _this.modal.launchWizard(wizardDefinitionObject);
	                });
	            }
	        },
	        setInitStatus: {
	            value: function setInitStatus() {
	                var _this = this;
	
	                this.OnboardingDao.initStatus({ $no_spinner: true }).$promise.then(function (status) {
	                    _this.ArtifactoryState.setState("initStatus", status);
	                });
	            }
	        },
	        isSystemOnboarding: {
	            value: function isSystemOnboarding() {
	                var _this = this;
	
	                var defer = this.$q.defer();
	
	                if (this.initPending) {
	                    defer.reject();
	                    return defer.promise;
	                }
	
	                var prevOnboarding = this.ArtifactoryState.getState("onboarding");
	
	                if (prevOnboarding === undefined) {
	                    this.initPending = true;
	                    this.OnboardingDao.initStatus({ $no_spinner: true }).$promise.then(function (status) {
	                        _this.initPending = false;
	                        _this.initStatus = status;
	                        if (!_this.initStatus.hasPriorLogins || !_this.features.isNonCommercial() && !_this.initStatus.hasLicenseAlready) {
	                            //This is the first time the wizard appear, so we clean the skipOnboarding flag from localStorage (if it's present)
	                            if (localStorage.skipOnboarding) {
	                                delete localStorage.skipOnboarding;
	                            }
	                        }
	                        _this.ArtifactoryState.setState("initStatus", status);
	                        var onboarding = _this.initStatus.hasOnlyDefaultRepos && !_this.initStatus.skipWizard && !localStorage.skipOnboarding;
	                        _this.ArtifactoryState.setState("onboarding", onboarding);
	                        _this.FooterDao.get().then(function () {
	                            if (_this.features.isJCR()) {
	                                _this.JcrEulaDao.required().$promise.then(function (response) {
	                                    _this.initStatus.eulaConfirmed = !response.required;
	                                    defer.resolve(onboarding || response.required);
	                                })["catch"](function (e) {
	                                    defer.resolve(onboarding || false);
	                                });
	                                _this.JcrNewsletterDao.getSubscription().$promise.then(function (response) {
	                                    _this.initStatus.newsletterFilled = response.emails.length;
	                                    defer.resolve(onboarding);
	                                })["catch"](function () {
	                                    return defer.resolve(onboarding);
	                                });
	                            } else {
	                                defer.resolve(onboarding);
	                            }
	                        });
	                    })["catch"](function () {
	                        _this.initPending = false;
	                        _this.FooterDao.get().then(function () {
	                            if (_this.features.isAol()) {
	                                _this.ArtifactoryState.setState("aolOnboarding", true);
	                            }
	                            _this.ArtifactoryState.setState("onboarding", false);
	                            defer.resolve(undefined);
	                        });
	                    });
	                } else {
	                    defer.resolve(prevOnboarding);
	                }
	
	                return defer.promise;
	            }
	        }
	    });
	
	    return OnBoardingWizard;
	})();
	
	var WizardController = (function () {
	    function WizardController(JcrEulaDao, JcrNewsletterDao, $timeout, $q, ArtifactoryState, ArtifactoryStorage, User, RegisterProDao, JFrogEventBus, ProxiesDao, ArtifactoryFeatures, OnboardingDao, UserDao, FooterDao, SaveArtifactoryHaLicenses, GoogleAnalytics) {
	        _classCallCheck(this, WizardController);
	
	        this.ArtifactoryState = ArtifactoryState;
	        this.ArtifactoryStorage = ArtifactoryStorage;
	        this.ProxiesDao = ProxiesDao;
	        this.UserService = User;
	        this.UserDao = UserDao.getInstance();
	        this.registerProDao = RegisterProDao;
	        this.JFrogEventBus = JFrogEventBus;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this.OnboardingDao = OnboardingDao;
	        this.footerDao = FooterDao;
	        this.saveArtifactoryHaLicenses = SaveArtifactoryHaLicenses;
	        this.GoogleAnalytics = GoogleAnalytics;
	        this.JcrEulaDao = JcrEulaDao;
	        this.JcrNewsletterDao = JcrNewsletterDao;
	        this.features = ArtifactoryFeatures;
	
	        this.eula = {};
	        this.newsletter = {};
	        this.login = {};
	        this.setPassword = { passwordRank: 0 };
	        this.license = {};
	        this.proxy = {
	            defaultProxy: true,
	            systemDefault: TOOLTIP.admin.configuration.proxyForm.systemDefault,
	            redirectingProxyTargetHosts: TOOLTIP.admin.configuration.proxyForm.redirectingProxyTargetHosts
	        };
	        this.packageTypes = {};
	
	        if (this.UserService.getCurrent().isAdmin()) {
	            this.initPackageTypesStep();
	        }
	    }
	
	    _createClass(WizardController, {
	        initPackageTypesStep: {
	            value: function initPackageTypesStep() {
	                var _this = this;
	
	                this.hasAlreadySetPackages = false;
	                if (!this.gotPackageTypes) {
	                    this.OnboardingDao.reposStates().$promise.then(function (response) {
	                        _this.packageTypes.packages = _.cloneDeep(fieldOptions.repoPackageTypes);
	                        _this.packageTypes.packages = _.map(_this.packageTypes.packages, function (type) {
	                            var id = type.serverEnumName;
	                            var state = response.repoStates[id];
	                            if (state === "ALREADY_SET") {
	                                type.disabled = true;
	                                _this.hasAlreadySetPackages = true;
	                                type.tooltip = "Default repositories already configured";
	                            }
	                            if (state === "UNAVAILABLE") {
	                                type.unavailable = true;
	                            }
	
	                            // Technology name below icons
	                            // Technology name below icons
	                            var addTextBelowIcon = ["Bower", "Chef", "CocoaPods", "Conan", "Pypi", "Puppet", "Opkg", "Composer", "SBT", "Gradle", "Gems", "NuGet", "GitLfs", "Generic", "CRAN"];
	                            if (_.includes(addTextBelowIcon, type.serverEnumName)) {
	                                type.helpText = true;
	                            }
	                            if (!_.includes(["UNSET", "ALREADY_SET", "UNAVAILABLE"], state)) {
	                                type.ignore = true;
	                            }
	
	                            return type;
	                        });
	                        if (_this.hasAlreadySetPackages) {
	                            var step = _.find(_this.$wizardCtrl.wizardDefinitionObject.steps, { id: "packageTypes" });
	                            step.description = "Select the package type(s) you want - we’ll create the default repositories for you!<br>Disabled package types already have default repositories configured.";
	                        }
	
	                        var available = [];
	                        var unavailable = [];
	
	                        _.forEach(_this.packageTypes.packages, function (pack) {
	                            if (pack.unavailable || pack.disabled) {
	                                unavailable.push(pack);
	                            } else {
	                                available.push(pack);
	                            }
	                        });
	
	                        _.sortBy(available, function (item) {
	                            return item.text.toLowerCase();
	                        });
	                        _.sortBy(unavailable, function (item) {
	                            return item.text.toLowerCase();
	                        });
	
	                        _this.packageTypes.packages = available.concat(unavailable);
	
	                        // Change PHP Composer -> Composer
	                        _.find(_this.packageTypes.packages, function (type) {
	                            if (type.serverEnumName === "Composer") {
	                                type.text = "Composer";
	                            }
	                        });
	
	                        _this.gotPackageTypes = true;
	                    });
	                }
	                this.packageTypes.highlightCheck = function (typeFilter, type) {
	                    if (type.selected) {
	                        return true;
	                    }
	
	                    if (typeFilter) {
	                        var string = type.text.toLowerCase(),
	                            searchstring = typeFilter.toLowerCase().replace(/ /g, "");
	
	                        if (string.substr(0, searchstring.length) == searchstring) {
	                            type.highlighted = true;
	                            return true;
	                        } else {
	                            type.highlighted = false;
	                            return false;
	                        }
	                    }
	                };
	                this.packageTypes.checkNoResults = function (typeFilter) {
	                    if (typeFilter && typeFilter.length > 0 && _.filter(_this.packageTypes.packages, function (type) {
	                        return type.highlighted;
	                    }).length == 0) {
	                        return true;
	                    }
	                };
	                this.packageTypes.selectRepoType = function (type) {
	                    type.selected = !type.selected;
	                    _this.packageTypes.selectedTypes = _.filter(_this.packageTypes.packages, function (type) {
	                        return type.selected;
	                    });
	                };
	            }
	        },
	        isStepCompleted: {
	            value: function isStepCompleted(step) {
	                switch (step.id) {
	                    case "login":
	                        {
	                            return this.loginForm && this.loginForm.$valid;
	                        }
	                    case "setNewPassword":
	                        {
	                            return this.setPasswordForm && this.setPasswordForm.$valid && this.setPassword.newPassword === this.setPassword.retypeNewPassword;
	                        }
	                    case "license":
	                        {
	                            return this.licenseForm && this.licenseForm.$valid && this.licensesTextBoxHasText();
	                        }
	                    case "eula":
	                        {
	                            return this.eula.eulaConfirmation;
	                        }
	                    case "newsletter":
	                        {
	                            return this.newsletter.emails;
	                        }
	                    case "proxy":
	                        {
	                            return this.proxyForm && this.proxyForm.$valid;
	                        }
	                    case "packageTypes":
	                        {
	                            return this.packageTypes.selectedTypes && this.packageTypes.selectedTypes.length;
	                        }
	                    case "summary":
	                        {
	                            return true;
	                        }
	                }
	                return true;
	            }
	        },
	        licensesTextBoxHasText: {
	            value: function licensesTextBoxHasText() {
	                return this.license.key != "" && this.license.key != "undefined" && this.license.key != null;
	            }
	        },
	        onComplete: {
	            value: function onComplete() {
	                this.ArtifactoryState.setState("onboarding", false);
	                delete localStorage.fakeOnboarding;
	
	                this.ArtifactoryState.setState("onboardingWizardOpen", false);
	
	                if (this.skippedTechs && !this.quickSetup) {
	                    this.packageTypes.selectedTypes = [];
	                    this.sendPackageTypes();
	                    this.ArtifactoryStorage.setItem("skipOnboarding", true);
	                }
	
	                this.JFrogEventBus.dispatch(EVENTS.REFRESH_PAGE_CONTENT);
	            }
	        },
	        onCancel: {
	            value: function onCancel() {
	                //let isOnboarding = this.ArtifactoryState.getState('onboarding');
	
	                // stop animation ticker, if still running
	                createjs.Ticker.removeAllEventListeners();
	
	                var isSummary = this.$wizardCtrl.wizardDefinitionObject.steps[this.$wizardCtrl.currentStep - 1].id === "summary";
	
	                // track close or esc wizard with the step the user closed the modal
	                if (!this.quickSetup && !isSummary) {
	                    this.GoogleAnalytics.trackEvent("Onboarding Wizard", "close/esc wizard", this.$wizardCtrl.wizardDefinitionObject.steps[this.$wizardCtrl.currentStep - 1].id);
	                } else if (!isSummary) {
	                    this.GoogleAnalytics.trackEvent("Homepage", "close/esc quick setup", this.$wizardCtrl.wizardDefinitionObject.steps[this.$wizardCtrl.currentStep - 1].id);
	                }
	
	                this.ArtifactoryState.setState("onboardingWizardOpen", "canceled");
	
	                // Fire refresh event in onCancel() call only of this is not the quick setup
	                if (!this.quickSetup) {
	                    this.JFrogEventBus.dispatch(EVENTS.REFRESH_PAGE_CONTENT);
	                }
	            }
	        },
	        onWizardShow: {
	            value: function onWizardShow(newStep) {
	                var _this = this;
	
	                $(".title-wrapper").addClass("icon-hidden");
	                if (newStep.buildIcon) {
	                    this.$timeout(function () {
	                        $(".title-wrapper .build").show();
	                        _this.$timeout(function () {
	                            $(".title-wrapper .build").attr({
	                                src: newStep.buildIcon,
	                                srcset: newStep.buildIconSrcset
	                            });
	                            $(".title-wrapper").removeClass("icon-hidden");
	                        }, 100);
	                        _this.$timeout(function () {
	                            return $(".title-wrapper .build").hide();
	                        }, 1400);
	                    });
	                } else {
	                    this.$timeout(function () {
	                        if (".icon-hidden") {
	                            $(".title-wrapper").removeClass("icon-hidden");
	                        }
	                    });
	                }
	            }
	        },
	        afterStepChange: {
	            value: function afterStepChange(newStep, oldStep, reason) {
	                var _this = this;
	
	                $(".title-wrapper").addClass("icon-hidden");
	                if (newStep.buildIcon) {
	                    this.$timeout(function () {
	                        $(".title-wrapper .build").show();
	                        _this.$timeout(function () {
	                            $(".title-wrapper .build").attr({
	                                src: newStep.buildIcon,
	                                srcset: newStep.buildIconSrcset
	                            });
	                            $(".title-wrapper").removeClass("icon-hidden");
	                        }, 50);
	                        _this.$timeout(function () {
	                            return $(".title-wrapper .build").hide();
	                        }, 1400);
	                    });
	                } else {
	                    this.$timeout(function () {
	                        if (".icon-hidden") {
	                            $(".title-wrapper").removeClass("icon-hidden");
	                        }
	                    });
	                }
	
	                this.GoogleAnalytics.trackEvent("Onboarding Wizard", "Completed Step - " + oldStep.id, reason);
	            }
	        },
	        onStepChange: {
	            value: function onStepChange(newStep, oldStep, reason) {
	                var _this = this;
	
	                if (newStep.id === "eula") {
	                    var _ret = (function () {
	                        var defer = _this.$q.defer();
	                        _this.JcrEulaDao.get().$promise.then(function (response) {
	                            _this.eula.content = response.content;
	                            defer.resolve();
	
	                            var modal = $(".wizard-modal");
	                            var modalHeader = $(".wizard-modal .modal-header");
	                            var modalBody = $(".wizard-modal .modal-body");
	                            var modalFooter = $(".wizard-modal .modal-footer");
	
	                            modalBody.css({ opacity: 0 });
	                            _this.$timeout(function () {
	                                var modalBodyMaxHeigt = modal.outerHeight() - modalHeader.outerHeight() - modalFooter.outerHeight();
	                                modalBody.css("max-height", modalBodyMaxHeigt);
	
	                                var scroller = $(".eula-content");
	                                var contentHeight = $(".eula-inner-content").height();
	
	                                if (contentHeight <= scroller.outerHeight()) {
	                                    _this.eula.bottomReached = true;
	                                }
	
	                                scroller.scroll(function () {
	                                    _this.$timeout(function () {
	                                        if (scroller.scrollTop() + scroller.height() + 30 >= contentHeight) {
	                                            _this.eula.bottomReached = true;
	                                        }
	                                    });
	                                });
	                                modalBody.css({ opacity: 1 });
	                            }, 150);
	                        });
	                        return {
	                            v: defer.promise
	                        };
	                    })();
	
	                    if (typeof _ret === "object") {
	                        return _ret.v;
	                    }
	                }
	
	                if (oldStep.id === "eula" && reason === "next") {
	                    var _ret2 = (function () {
	                        var defer = _this.$q.defer();
	                        _this.JcrEulaDao.accept().$promise.then(function () {
	                            return defer.resolve();
	                        });
	                        return {
	                            v: defer.promise
	                        };
	                    })();
	
	                    if (typeof _ret2 === "object") {
	                        return _ret2.v;
	                    }
	                }
	
	                if (oldStep.id === "newsletter" && reason === "next") {
	                    var emails = _.map(this.newsletter.emails.split(","), function (email) {
	                        return email.trim();
	                    });
	                    this.JcrNewsletterDao.setSubscription({ emails: emails }).$promise;
	                }
	
	                if (oldStep.id === "welcome") {
	                    // stop animation ticker
	                    this.$timeout(function () {
	                        return createjs.Ticker.removeAllEventListeners();
	                    }, 500);
	                } else if (oldStep.id === "login" && reason === "next") {
	                    var defer = this.$q.defer();
	                    this.doLogin(defer);
	                    return defer.promise;
	                } else if (oldStep.id === "setNewPassword" && reason === "next") {
	                    var defer = this.$q.defer();
	                    this.setNewPassword(defer);
	                    return defer.promise;
	                } else if (oldStep.id === "setNewPassword" && reason === "skip") {
	                    var defer = this.$q.defer();
	                    this.login.user = "admin";
	                    this.login.password = "password";
	                    this.doLogin(defer);
	                    return defer.promise;
	                } else if (oldStep.id === "license" && reason === "next") {
	                    var defer = this.$q.defer();
	                    this.registerLicense(defer);
	                    return defer.promise;
	                } else if (oldStep.id === "proxy" && reason === "next") {
	                    var defer = this.$q.defer();
	                    this.createProxy(defer);
	                    return defer.promise;
	                } else if (oldStep.id === "packageTypes" && reason === "next") {
	                    var step = _.find(this.$wizardCtrl.wizardDefinitionObject.steps, { id: "summary" });
	                    if (step["class"]) {
	                        delete step["class"];
	                    }
	
	                    var defer = this.$q.defer();
	                    this.sendPackageTypes(defer);
	                    this.skippedTechs = false;
	                    return defer.promise;
	                } else if (oldStep.id === "packageTypes" && reason === "skip") {
	                    var step = _.find(this.$wizardCtrl.wizardDefinitionObject.steps, { id: "summary" });
	                    step.name = "All done!";
	                    var prev = _.find(this.$wizardCtrl.wizardDefinitionObject.steps, { id: "packageTypes" });
	                    prev.supportReturnTo = true;
	                    this.skippedTechs = true;
	                    step["class"] = "no-repositories-modal";
	                } else if (reason === "prev") {
	                    this.errorMessage = "";
	                }
	            }
	        },
	        doLogin: {
	            value: function doLogin(defer) {
	
	                this.UserService.login(this.login, false).then(success.bind(this), error.bind(this));
	
	                function success(result) {
	                    if (result.data.admin) {
	                        this.errorMessage = "";
	                        defer.resolve();
	                        this.initPackageTypesStep(); //Needs to be logged in
	                    } else {
	                        this.errorMessage = "You must be logged in with an admin user in order to use this wizard";
	                        this.UserService.logout();
	                        defer.reject();
	                    }
	                }
	
	                function error(response) {
	                    if (response.data) {
	                        this.errorMessage = response.data.error;
	                    }
	                    defer.reject();
	                }
	            }
	        },
	        setNewPassword: {
	            value: function setNewPassword(defer) {
	                var _this = this;
	
	                this.UserDao.changePassword({ $suppress_toaster: true }, {
	                    userName: "admin",
	                    oldPassword: "password",
	                    newPassword1: this.setPassword.newPassword,
	                    newPassword2: this.setPassword.retypeNewPassword
	                }).$promise.then(function (res) {
	                    if (res.status === 200) {
	                        var step = _.find(_this.$wizardCtrl.wizardDefinitionObject.steps, { id: "setNewPassword" });
	                        step.supportReturnTo = false;
	                        _this.login.user = "admin";
	                        _this.login.password = _this.setPassword.newPassword;
	                        _this.doLogin(defer);
	                    }
	                })["catch"](function (response) {
	                    defer.reject();
	                    if (response.data && _this.setPassword.newPassword === "password") {
	                        _this.errorMessage = response.data.error;
	                    } else {
	                        _this.errorMessage = "";
	                    }
	                });
	            }
	        },
	        onRegisterLicenses: {
	            value: function onRegisterLicenses(defer, data) {
	                this.JFrogEventBus.dispatch(EVENTS.FOOTER_REFRESH);
	                this.UserService.loadUser(true);
	                this.errorMessage = "";
	
	                if (data.status === 200) {
	                    var initStatus = this.ArtifactoryState.getState("initStatus");
	                    if (initStatus) {
	                        initStatus.hasLicenseAlready = true;
	                    }
	                    defer.resolve();
	                } else {
	                    defer.reject();
	                }
	            }
	        },
	        removeComments: {
	            value: function removeComments(text) {
	                return text.replace(/#+((?:.)+?)*/g, "");
	            }
	        },
	        registerLicense: {
	            value: function registerLicense(defer) {
	                var _this = this;
	
	                var promise = undefined;
	                this.license.key = this.removeComments(this.license.key);
	
	                if (this.mainCtrl.haConfigured) {
	                    promise = this.saveArtifactoryHaLicenses.saveLicenses({ $suppress_toaster: true }, this.license.key);
	                } else {
	                    promise = this.registerProDao.update({ $suppress_toaster: true }, this.license).$promise;
	                }
	
	                promise.then(function (data) {
	                    _this.onRegisterLicenses(defer, data);
	                })["catch"](function (res) {
	                    _this.errorMessage = res.data.error;
	
	                    defer.reject();
	                });
	            }
	        },
	        onError: {
	            value: function onError(errorMessage) {
	                this.clearErrorMessage();
	                this.errorMessage = errorMessage;
	                this.$timeout(function () {
	                    $(".wizard-modal").focus();
	                });
	            }
	        },
	        createProxy: {
	            value: function createProxy(defer) {
	                var _this = this;
	
	                this.ProxiesDao[this.proxySaved ? "update" : "save"]({ $suppress_toaster: true }, this.proxy).$promise.then(function () {
	                    defer.resolve();
	                    _this.proxySaved = true;
	                })["catch"](function () {
	                    return defer.reject();
	                });
	            }
	        },
	        sendPackageTypes: {
	            value: function sendPackageTypes(defer) {
	                var _this = this;
	
	                var payload = {
	                    repoTypeList: _.pluck(this.packageTypes.selectedTypes, "serverEnumName"),
	                    fromOnboarding: !this.quickSetup
	                };
	
	                this.OnboardingDao.createDefaultRepos(payload).$promise.then(function (response) {
	                    if (!_this.quickSetup) {
	                        _this.GoogleAnalytics.trackEvent("Onboarding Wizard", !_this.packageTypes.selectedTypes.length ? "Wizard completed - no repos" : "Wizard completed + repos", _.pluck(_this.packageTypes.selectedTypes, "text").toString(), _this.packageTypes.selectedTypes.length);
	                    } else {
	                        _this.GoogleAnalytics.trackEvent("Homepage", "Quick repository setup completed + repos", _.pluck(_this.packageTypes.selectedTypes, "text").toString(), _this.packageTypes.selectedTypes.length);
	                    }
	
	                    _this.summary = { data: response.createdReposByTypes };
	                    var step = _.find(_this.$wizardCtrl.wizardDefinitionObject.steps, { id: "packageTypes" });
	                    step.supportReturnTo = false;
	                    _this.JFrogEventBus.dispatch(EVENTS.REFRESH_SETMEUP_WIZARD);
	                    if (defer) {
	                        defer.resolve();
	                    }
	                })["catch"](function () {
	                    if (defer) {
	                        defer.reject();
	                    }
	                });
	            }
	        },
	        getIconForPackageType: {
	            value: function getIconForPackageType(type) {
	                var packageData = _.find(this.packageTypes.packages, { value: type });
	                return packageData ? packageData.icon : "";
	            }
	        },
	        initMachine: {
	            value: function initMachine() {
	                var canvas, stage, exportRoot;
	
	                canvas = document.getElementById("canvas");
	                exportRoot = new lib.jfrog_v45_Html_5();
	
	                stage = new createjs.Stage(canvas);
	                stage.addChild(exportRoot);
	                stage.update();
	
	                createjs.Ticker.setFPS(lib.properties.fps);
	                createjs.Ticker.addEventListener("tick", stage);
	            }
	        },
	        clearErrorMessage: {
	            value: function clearErrorMessage() {
	                this.errorMessage = "";
	            }
	        }
	    });
	
	    return WizardController;
	})();

/***/ }),

/***/ 179:
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
	/**
	 * Created by tomere on 12/23/2016.
	 */
	
	var SaveArtifactoryHaLicenses = exports.SaveArtifactoryHaLicenses = (function () {
	    function SaveArtifactoryHaLicenses(HaLicensesDao) {
	        _classCallCheck(this, SaveArtifactoryHaLicenses);
	
	        this.haLicensesDao = HaLicensesDao;
	    }
	
	    _createClass(SaveArtifactoryHaLicenses, {
	        splitText: {
	            value: function splitText(text) {
	                // let splitted = this.splitLicensesTextByWrappingStrings(text);
	                // return splitted.length !== 0 ? splitted : this.splitLicensesTextByDelimiters(text);
	                var cleanText = this.removeComments(text);
	                return this.splitLicensesTextByDelimiters(cleanText);
	            }
	        },
	        removeComments: {
	            value: function removeComments(text) {
	                return text.replace(/#+((?:.)+?)*/g, "");
	            }
	        },
	        splitLicensesTextByDelimiters: {
	            value: function splitLicensesTextByDelimiters(text) {
	                var splittedText = text.split(/[,;]+|\n{2,}|(?:\r\n){2,}/g);
	                if (splittedText[splittedText.length - 1] == "") {
	                    splittedText.pop();
	                }
	                return splittedText;
	            }
	        },
	        toLicensesObjArray: {
	            value: function toLicensesObjArray(splittedText, key) {
	                var res = [];
	                for (var i in splittedText) {
	                    var textBlock = {};
	                    textBlock[key] = splittedText[i];
	                    res.push(textBlock);
	                }
	                return res;
	            }
	        },
	        toLicensesJson: {
	            value: function toLicensesJson(rawText) {
	                var splittedText = this.splitText(rawText),
	                    licensesObjArray = this.toLicensesObjArray(splittedText, "licenseKey"),
	                    licensesJson = {
	                    licenses: licensesObjArray
	                };
	
	                return licensesJson;
	            }
	        },
	        saveLicenses: {
	            value: function saveLicenses(options, rawText) {
	                var licensesJson = this.toLicensesJson(rawText);
	                return this.haLicensesDao.add(options, licensesJson).$promise;
	            }
	
	            /*
	                splitLicensesTextByWrappingStrings(text) {
	                    let splittedText = [];
	            
	                    if (text.indexOf('#Start License Key #') === 0) {
	                        return splittedText;
	                    }
	            
	                    let pattern = /#Start License Key #\d+((?:.|\n|\r\n)+?)#End License Key #\d+/g;
	                    let match;
	                    while ((match = pattern.exec(text)) !== null) {
	                        splittedText.push(match[1]);
	                    }
	            
	                    return splittedText;
	                }*/
	
	        }
	    });
	
	    return SaveArtifactoryHaLicenses;
	})();

/***/ })

});
//# sourceMappingURL=artifactory_services.js.3184.map