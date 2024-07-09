sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("exercise04.controller.Main", {
        onPress() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            if(sRecipient == "") {
                MessageToast.show("메시지를 입력은 필수 입니다.");
            } else {
                MessageToast.show(sMsg);
            }

        }
    });
});
