(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-vital-vital-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/vital.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n        </ion-buttons>\n        <ion-title style=\"text-align: center;\">Vital</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"steps\" color=\"transparent\" routerLink=\"/steps\" routerDirection=\"root\">\n                    <div><img [src]=\"steps\"/><br><br>Steps</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"calories\" color=\"transparent\" routerLink=\"/calories\" routerDirection=\"root\">\n                    <div><img [src]=\"calories\"/><br><br>Calories</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"heartRate\" color=\"transparent\" routerLink=\"/heart-rate\" routerDirection=\"root\">\n                    <div><img [src]=\"heartRate\"/><br><br>Heart Rate</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"stress\" color=\"transparent\" routerLink=\"/stress\" routerDirection=\"root\">\n                    <div><img [src]=\"stress\"/><br><br>Stress</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n            <ion-col>\n                <ion-button class=\"sleep\" color=\"transparent\" routerLink=\"/sleep\" routerDirection=\"root\">\n                    <div><img [src]=\"sleep\"/><br><br>sleep</div>\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <ion-button class=\"pulse\" color=\"transparent\" routerLink=\"/pulse-ox\" routerDirection=\"root\">\n                    <div><img [src]=\"pulseOx\"/><br><br>pulseOx</div>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-grid {\n  display: grid;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\n.vitals {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.steps {\n  height: 115px;\n  width: 115px;\n  background-color: #39c239;\n  color: white;\n}\n\n.calories {\n  height: 115px;\n  width: 115px;\n  background-color: #a74ea7;\n  color: white;\n}\n\n.heartRate {\n  height: 115px;\n  width: 115px;\n  background-color: #4f91ce;\n  color: white;\n}\n\n.stress {\n  height: 115px;\n  width: 115px;\n  background-color: #db7070;\n  color: white;\n}\n\n.sleep {\n  height: 115px;\n  width: 115px;\n  background-color: #cf814d;\n  color: white;\n}\n\n.pulse {\n  height: 115px;\n  width: 115px;\n  background-color: #aab3b8;\n  color: white;\n}\n\nimg {\n  height: 50px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvdml0YWwvdml0YWwucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3ZpdGFsL3ZpdGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdml0YWwvdml0YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3doaXRlbGVhZi5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiAgLnZpdGFscyB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDE1NiwgMTYxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnN0ZXBzIHtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE5NCwgNTcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2Fsb3JpZXMge1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDc4LCAxNjcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaGVhcnRSYXRlIHtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDE0NSwgMjA2KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnN0cmVzcyB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTEyLCAxMTIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuc2xlZXAge1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDEyOSwgNzcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucHVsc2Uge1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMTc5LCAxODQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udml0YWxzIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5Y2ExO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVwcyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YzIzOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2Fsb3JpZXMge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzRlYTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYXJ0UmF0ZSB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmOTFjZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RyZXNzIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI3MDcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbGVlcCB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmODE0ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHVsc2Uge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWIzYjg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjBweDtcbn0iXX0= */"

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
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");



var VitalPage = /** @class */ (function () {
    function VitalPage(user) {
        this.user = user;
        this.steps = '../../../assets/vitals/steps.png';
        this.heartRate = '../../../assets/vitals/heartRate.png';
        this.sleep = '../../../assets/vitals/sleep.svg';
        this.calories = '../../../assets/vitals/calories.png';
        this.stress = '../../../assets/vitals/stress.png';
        this.pulseOx = '../../../assets/vitals/pulseOx.png';
    }
    VitalPage.prototype.ngOnInit = function () {
    };
    VitalPage.ctorParameters = function () { return [
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    VitalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vital',
            template: __webpack_require__(/*! raw-loader!./vital.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html"),
            styles: [__webpack_require__(/*! ./vital.page.scss */ "./src/app/home/vital/vital.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], VitalPage);
    return VitalPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-vital-vital-module-es5.js.map