/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync_04d/exercise03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
