/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sync/d04/exercise02/model/models",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, ResourceModel, JSONModel) {
        "use strict";

        return UIComponent.extend("sync.d04.exercise02.Component", {
            metadata: {
                manifest: "json"
            },

            
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // 연산자 버튼 텍스트 가져와서 여기에 모델로 만들기
                var oData = {
                    operator: ""
                };

                // // 리스트 셀렉트 데이터 만들기
                // var sOps = { ops: [
                //     {op : "plus", text : "+"},
                //     {op : "min",  text: "-"},
                //     {op : "div",  text: "/"},
                //     {op : "dou",  text: "*"} 
                // ]};
                
                // // 리스트 데이터 모델로 만들기
                // var opModel = new JSONModel(sOps);
                
                // // 리스트 데이터 View를 가져와서 
                // this.getView().setModel(opModel);
                // this.byId("idSelect").bindElement("/");
                
                var oModel = new JSONModel(oData);
                this.setModel(oModel, "operator");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                const i18nModel = new ResourceModel ({
                    bundleName : "sync.d04.exercise02.i18n.i18n"
                })

                this.setModel(i18nModel, "i18n");
            },

            setOperator: function (sOperator) { 
                this.getModel("operator").setProperty("/operator", sOperator);
            },

            getOperator: function() {
                return this.getModel("operator").getProperty("/operator");
            }
        });
    }
);