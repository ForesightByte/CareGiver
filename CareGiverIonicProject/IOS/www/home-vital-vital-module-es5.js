(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-vital-vital-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/vital.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n        </ion-buttons>\n        <ion-title style=\"text-align: center;\">Vital</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"steps\" color=\"transparent\" routerLink=\"/steps\" routerDirection=\"root\">\n                    <div><img [src]=\"steps\"/><br><br>Steps</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"calories\" color=\"transparent\" routerLink=\"/calories\" routerDirection=\"root\">\n                    <div><img [src]=\"calories\"/><br><br>Calories</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"heartRate\" color=\"transparent\" routerLink=\"/heart-rate\" routerDirection=\"root\">\n                    <div><img [src]=\"heartRate\"/><br><br>Heart Rate</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"stress\" color=\"transparent\" routerLink=\"/stress\" routerDirection=\"root\">\n                    <div><img [src]=\"stress\"/><br><br>Stress</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"sleep\" color=\"transparent\" routerLink=\"/sleep\" routerDirection=\"root\">\n                    <div><img [src]=\"sleep\"/><br><br>Sleep</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"pulse\" color=\"transparent\" routerLink=\"/pulse-ox\" routerDirection=\"root\">\n                    <div><img [src]=\"pulseOx\"/><br><br>PulseOx</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/vital/vital-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/vital/vital-routing.module.ts ***!
  \****************************************************/
/*! exports provided: VitalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitalPageRoutingModule", function() { return VitalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vital.page */ "./src/app/home/vital/vital.page.ts");




var routes = [
    {
        path: '',
        component: _vital_page__WEBPACK_IMPORTED_MODULE_3__["VitalPage"]
    },
    {
        path: 'sleep',
        loadChildren: function () { return Promise.all(/*! import() | sleep-sleep-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("sleep-sleep-module")]).then(__webpack_require__.bind(null, /*! ./sleep/sleep.module */ "./src/app/home/vital/sleep/sleep.module.ts")).then(function (m) { return m.SleepPageModule; }); }
    },
    {
        path: 'pulse-ox',
        loadChildren: function () { return Promise.all(/*! import() | pulse-ox-pulse-ox-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("pulse-ox-pulse-ox-module")]).then(__webpack_require__.bind(null, /*! ./pulse-ox/pulse-ox.module */ "./src/app/home/vital/pulse-ox/pulse-ox.module.ts")).then(function (m) { return m.PulseOxPageModule; }); }
    },
    {
        path: 'stress',
        loadChildren: function () { return Promise.all(/*! import() | stress-stress-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("stress-stress-module")]).then(__webpack_require__.bind(null, /*! ./stress/stress.module */ "./src/app/home/vital/stress/stress.module.ts")).then(function (m) { return m.StressPageModule; }); }
    },
    {
        path: 'heart-rate',
        loadChildren: function () { return Promise.all(/*! import() | heart-rate-heart-rate-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("heart-rate-heart-rate-module")]).then(__webpack_require__.bind(null, /*! ./heart-rate/heart-rate.module */ "./src/app/home/vital/heart-rate/heart-rate.module.ts")).then(function (m) { return m.HeartRatePageModule; }); }
    },
    {
        path: 'steps',
        loadChildren: function () { return Promise.all(/*! import() | steps-steps-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("steps-steps-module")]).then(__webpack_require__.bind(null, /*! ./steps/steps.module */ "./src/app/home/vital/steps/steps.module.ts")).then(function (m) { return m.StepsPageModule; }); }
    },
    {
        path: 'calories',
        loadChildren: function () { return Promise.all(/*! import() | calories-calories-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("calories-calories-module")]).then(__webpack_require__.bind(null, /*! ./calories/calories.module */ "./src/app/home/vital/calories/calories.module.ts")).then(function (m) { return m.CaloriesPageModule; }); }
    }
];
var VitalPageRoutingModule = /** @class */ (function () {
    function VitalPageRoutingModule() {
    }
    VitalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VitalPageRoutingModule);
    return VitalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/vital/vital.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/vital/vital.module.ts ***!
  \********************************************/
/*! exports provided: VitalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitalPageModule", function() { return VitalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vital_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vital-routing.module */ "./src/app/home/vital/vital-routing.module.ts");
/* harmony import */ var _vital_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vital.page */ "./src/app/home/vital/vital.page.ts");









var VitalPageModule = /** @class */ (function () {
    function VitalPageModule() {
    }
    VitalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _vital_routing_module__WEBPACK_IMPORTED_MODULE_7__["VitalPageRoutingModule"]
            ],
            declarations: [_vital_page__WEBPACK_IMPORTED_MODULE_8__["VitalPage"]],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
            ]
        })
    ], VitalPageModule);
    return VitalPageModule;
}());



/***/ }),

/***/ "./src/app/home/vital/vital.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/vital/vital.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-grid {\n  display: grid;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\n.vitals {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.steps {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.calories {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.heartRate {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.stress {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.sleep {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.pulse {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\nimg {\n  height: 50px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS92aXRhbC92aXRhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvdml0YWwvdml0YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDT0o7O0FESkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92aXRhbC92aXRhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuICAudml0YWxzIHtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCAxNjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuc3RlcHMge1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxNTYsIDE2MSk7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2Fsb3JpZXMge1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxNTYsIDE2MSk7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaGVhcnRSYXRlIHtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCAxNjEpOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnN0cmVzcyB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDE1NiwgMTYxKTsgXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5zbGVlcCB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDE1NiwgMTYxKTsgXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5wdWxzZSB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNywgMTU2LCAxNjEpOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZpdGFscyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OWNhMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlcHMge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzljYTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbG9yaWVzIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5Y2ExO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFydFJhdGUge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzljYTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0cmVzcyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OWNhMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2xlZXAge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzljYTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnB1bHNlIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5Y2ExO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/vital/vital.page.ts":
/*!******************************************!*\
  !*** ./src/app/home/vital/vital.page.ts ***!
  \******************************************/
/*! exports provided: VitalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitalPage", function() { return VitalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VitalPage = /** @class */ (function () {
    function VitalPage() {
        this.steps = '../../../assets/vitals/steps.png';
        this.heartRate = '../../../assets/vitals/heartRate.png';
        this.sleep = '../../../assets/vitals/sleep.png';
        this.calories = '../../../assets/vitals/calories.png';
        this.stress = '../../../assets/vitals/stress.png';
        this.pulseOx = '../../../assets/vitals/pulseOx.png';
    }
    VitalPage.prototype.ngOnInit = function () {
    };
    VitalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vital',
            template: __webpack_require__(/*! raw-loader!./vital.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html"),
            styles: [__webpack_require__(/*! ./vital.page.scss */ "./src/app/home/vital/vital.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VitalPage);
    return VitalPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-vital-vital-module-es5.js.map