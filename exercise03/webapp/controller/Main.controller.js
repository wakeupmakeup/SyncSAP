sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("sync04d.exercise03.controller.Main", {
        onInit: function () {
            // JSON 데이터를 정의
            var oInitialData = {
                items: [
                    { key: "plus", text: "+" },
                    { key: "min", text: "-" },
                    { key: "div", text: "/" },
                    { key: "mul", text: "*" }
                ],
                results: [] // 결과를 저장할 배열 초기화
            };

            // JSON 모델을 생성
            var oInitialModel = new JSONModel(oInitialData);

            // 모델을 뷰에 설정
            this.getView().setModel(oInitialModel);
        },

        // 계산 버튼 클릭 시 호출되는 함수
        onCal: function () {
            // 입력 필드의 값 가져오기
            var sValue1 = this.byId("input1").getValue();
            var sValue2 = this.byId("input2").getValue();

            // 셀렉트 필드에서 선택된 연산자 가져오기
            var oSelect = this.byId("mySelect");
            var sOperator = oSelect.getSelectedItem().getKey();

            // 문자열을 숫자로 변환
            var fValue1 = parseFloat(sValue1);
            var fValue2 = parseFloat(sValue2);
            var fResult = 0;
            var sStatus = false; // 먼저 false로 지정해서 아이콘을 기본적으로 뜨지 않게 함.

            // 연산자에 따라 계산
            switch (sOperator) {
                case "plus":
                    fResult = fValue1 + fValue2;
                    break;
                case "min":
                    fResult = fValue1 - fValue2;
                    break;
                case "div":
                    if (fValue2 === 0) {
                        fResult = "두 번째 숫자는 0이 될 수 없습니다.";
                        sStatus = false; 
                    } else {
                        fResult = fValue1 / fValue2;
                        
                    }
                    break;
                case "mul":
                    fResult = fValue1 * fValue2;
                    break;
                default:
                    console.error("Unknown operator: " + sOperator);
                    return;
            }

            // 결과가 100을 넘으면 아이콘 표시하기
            if (typeof fResult === 'number' && fResult > 100) {
                sStatus = true;
            }

            // 결과를 이제 테이블에 각각 넣기
            var oModel = this.getView().getModel();
            var aResults = oModel.getProperty("/results");
            aResults.push({
                number1: sValue1,
                operator: oSelect.getSelectedItem().getText(),
                number2: sValue2,
                result: fResult,
                status: sStatus
            });

            oModel.setProperty("/results", aResults);

            // 결과를 메시지 토스트로 표시
            MessageToast.show("계산 결과: " + fResult);
        }
    });
});
