/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "exercise04/model/models",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/Device"
    ],
    function (UIComponent, models, JSONModel, ResourceModel) {
        "use strict";

        return UIComponent.extend("exercise04.Component", {
            metadata: {
                interfaces:["sap.ui.core.IAsyncContentCreation"],
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

                const oData = {
                    recipient : { 
                        name : "입력하세요",
                    }
                };
                
                const oModel = new JSONModel(oData);
                this.setModel(oModel);

                const i18nModel = new ResourceModel({
                    bundleName : "exercise04.i18n.i18n"
                })

                this.setModel(i18nModel, "i18n");

                

                this.getRouter().initialize();

                this.setModel(models.createDeviceModel(), "device");

                
            }
        });
    }
);