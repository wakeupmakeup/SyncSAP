/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "project1/model/models",
	"sap/ui/vbm/Resource"
    ],
    function (UIComponent,
	Device,
	models,
	Resource) {
        "use strict";

        return UIComponent.extend("project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var i18nModel = new sap.ui.model.resource.ResourceModel({
                    bundleName: "project1.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
            }
        });
    }
);