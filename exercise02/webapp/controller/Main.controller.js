sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (Controller, Fragment) {
    "use strict";

    return Controller.extend("sync.d04.exercise02.controller.Main", {
        onInit() {
            
        },

        // onSelectOps(oEvent) {
        //     var sOperator = oEvent.getSource().getText();
        //     this.byId("selectOp").setText("선택한 연산자: " + sOperator);
        //     this.selectedOperator = sOperator; // 연산자 저장
        // },

        onCal() {
            var input1 = parseFloat(this.byId("num1").getValue());
            var input2 = parseFloat(this.byId("num2").getValue());
            var op = this.getView().byId("idSelect").getSelectedKey();
            var result;

            switch (op) {
                case "+":
                    result = input1 + input2;
                    break;
                case "-":
                    result = input1 - input2;
                    break;
                case "/":
                    if (input2 === 0) {
                        result = "오류: 나눌 수 없습니다.";
                    } else {
                        result = input1 / input2;
                    }
                    break;
                case "*":
                    result = input1 * input2;
                    break;
                default:
                    result = "연산자를 선택하세요.";
                    break;
            }

            // 프래그먼트 뷰에서 결과를 표시
            this.onOpenDialog(result);
        },

        async onOpenDialog(result) {
            if (!this.oDialog) {
                this.oDialog = await Fragment.load({
                    id: this.getView().getId(),
                    name: "sync.d04.exercise02.view.Result",
                    controller: this
                });
                this.getView().addDependent(this.oDialog);
            }

            this.byId("resultText").setText("결과: " + result);
            this.oDialog.open();
        },

        onCloseDialog() {
            this.byId("resultDialog").close();
        }
    });
});
