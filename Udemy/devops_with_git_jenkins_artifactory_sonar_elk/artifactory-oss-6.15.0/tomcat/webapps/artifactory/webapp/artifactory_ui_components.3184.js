webpackJsonp([6,8,9],{

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
	
	var Uploader = _interopRequire(__webpack_require__(389));
	
	angular.module("artifactory.ui_components", [Uploader.name]);

/***/ }),

/***/ 389:
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
	/**
	 * Created by idannaim on 8/4/15.
	 */
	"use strict";
	
	var ArtifactoryUploaderFactory = __webpack_require__(390).ArtifactoryUploaderFactory;
	
	module.exports = angular.module("artifactory_uploader", ["angularFileUpload"]).service("ArtifactoryUploaderFactory", ArtifactoryUploaderFactory);

/***/ }),

/***/ 390:
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
	 * Created by idannaim on 8/4/15.
	 */
	var controller = undefined;
	
	var ArtifactoryUploader = (function () {
	    function ArtifactoryUploader(FileUploader, _controller_) {
	        _classCallCheck(this, ArtifactoryUploader);
	
	        controller = _controller_;
	        this.fileUploader = new FileUploader();
	    }
	
	    _createClass(ArtifactoryUploader, {
	        setUrl: {
	
	            /**
	             * Path on the server to upload files
	             * @param path
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setUrl(path) {
	                this.fileUploader.url = path;
	                return this;
	            }
	        },
	        getUploader: {
	
	            /**
	             *
	             * @returns {the uploader instance}
	             */
	
	            value: function getUploader() {
	                return this.fileUploader;
	            }
	        },
	        setOnAfterAddingFile: {
	
	            /**
	             *  Fires after adding a single file to the queue.
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnAfterAddingFile(func) {
	                this.fileUploader.onAfterAddingFile = func.bind(controller);
	                return this;
	            }
	        },
	        setOnWhenAddingFileFailed: {
	
	            /**
	             * When adding a file failed.
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnWhenAddingFileFailed(func) {
	                this.fileUploader.onWhenAddingFileFailed = func.bind(this);
	                return this;
	            }
	        },
	        setOnAfterAddingAll: {
	
	            /**
	             * Fires after adding all the dragged or selected files to the queue.
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnAfterAddingAll(func) {
	                this.fileUploader.onAfterAddingAll = func.bind(controller);
	                return this;
	            }
	        },
	        setOnBeforeUploadItem: {
	
	            /**
	             * Fires before uploading an item.
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnBeforeUploadItem(func) {
	                this.fileUploader.onBeforeUploadItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnProgressItem: {
	
	            /**
	             *  On file upload progress
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnProgressItem(func) {
	                this.fileUploader.onProgressItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnSuccessItem: {
	
	            /**
	             * On file successfully uploaded
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnSuccessItem(func) {
	                this.fileUploader.onSuccessItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnErrorItem: {
	
	            /**
	             *  On upload error
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnErrorItem(func) {
	                this.fileUploader.onErrorItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnCancelItem: {
	
	            /**
	             * On cancel uploading
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnCancelItem(func) {
	                this.fileUploader.onCancelItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnCompleteItem: {
	
	            /**
	             * On file upload complete (independently of the success of the operation)
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnCompleteItem(func) {
	                this.fileUploader.onCompleteItem = func.bind(controller);
	                return this;
	            }
	        },
	        setOnProgressAll: {
	
	            /**
	             * On upload queue progress
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnProgressAll(func) {
	                this.fileUploader.onProgressAll = func.bind(controller);
	                return this;
	            }
	        },
	        setOnCompleteAll: {
	
	            /**
	             *  On all loaded when uploading an entire queue, or on file loaded when uploading a single independent file
	             * @param func
	             * @returns {ArtifactoryUploader}
	             */
	
	            value: function setOnCompleteAll(func) {
	                this.fileUploader.onCompleteAll = func.bind(controller);
	                return this;
	            }
	        },
	        getQueue: {
	
	            /**
	             *
	             * @returns { files queue}
	             */
	
	            value: function getQueue() {
	                return this.fileUploader.queue || [];
	            }
	        },
	        clearQueue: {
	
	            /**
	             * clear all files from queue
	             */
	
	            value: function clearQueue() {
	                this.fileUploader.queue = [];
	            }
	        },
	        uploadAll: {
	
	            /**
	             * upload all files in queue
	             */
	
	            value: function uploadAll() {
	                this.fileUploader.uploadAll();
	            }
	        },
	        removeFileFromQueue: {
	
	            /**
	             * remove file from queue
	             * @param fileItem
	             * @returns {queue}
	             */
	
	            value: function removeFileFromQueue(fileItem) {
	                this.fileUploader.removeFromQueue(fileItem);
	                return this.fileUploader.queue;
	            }
	        }
	    });
	
	    return ArtifactoryUploader;
	})();
	
	var ArtifactoryUploaderFactory = exports.ArtifactoryUploaderFactory = (function () {
	    function ArtifactoryUploaderFactory(FileUploader) {
	        _classCallCheck(this, ArtifactoryUploaderFactory);
	
	        this.fileUploader = FileUploader;
	    }
	
	    _createClass(ArtifactoryUploaderFactory, {
	        getUploaderInstance: {
	            value: function getUploaderInstance(controller) {
	                return new ArtifactoryUploader(this.fileUploader, controller);
	            }
	        }
	    });
	
	    return ArtifactoryUploaderFactory;
	})();

/***/ })

});
//# sourceMappingURL=artifactory_ui_components.js.3184.map