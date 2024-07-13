/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncd04/exercise02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
