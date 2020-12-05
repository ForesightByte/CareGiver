(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-vital-vital-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/vital.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"text-align: center;\">Vital</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"steps\" color=\"transparent\" routerLink=\"/steps\" routerDirection=\"root\">\r\n                    <div><img [src]=\"steps\"/><br><br>Steps</div>\r\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <ion-button class=\"calories\" color=\"transparent\" routerLink=\"/calories\" routerDirection=\"root\">\r\n                    <div><img [src]=\"calories\"/><br><br>Calories</div>\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"heartRate\" color=\"transparent\" routerLink=\"/heart-rate\" routerDirection=\"root\">\r\n                    <div><img [src]=\"heartRate\"/><br><br>Heart Rate</div>\r\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <ion-button class=\"stress\" color=\"transparent\" routerLink=\"/stress\" routerDirection=\"root\">\r\n                    <div><img [src]=\"stress\"/><br><br>Stress</div>\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button class=\"sleep\" color=\"transparent\" routerLink=\"/sleep\" routerDirection=\"root\">\r\n                    <div><img [src]=\"sleep\"/><br><br>sleep</div>\r\n                </ion-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <ion-button class=\"pulse\" color=\"transparent\" routerLink=\"/pulse-ox\" routerDirection=\"root\">\r\n                    <div><img [src]=\"pulseOx\"/><br><br>pulseOx</div>\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vital.page */ "./src/app/home/vital/vital.page.ts");




const routes = [
    {
        path: '',
        component: _vital_page__WEBPACK_IMPORTED_MODULE_3__["VitalPage"]
    },
    {
        path: 'sleep',
        loadChildren: () => Promise.all(/*! import() | sleep-sleep-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("sleep-sleep-module")]).then(__webpack_require__.bind(null, /*! ./sleep/sleep.module */ "./src/app/home/vital/sleep/sleep.module.ts")).then(m => m.SleepPageModule)
    },
    {
        path: 'pulse-ox',
        loadChildren: () => Promise.all(/*! import() | pulse-ox-pulse-ox-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("pulse-ox-pulse-ox-module")]).then(__webpack_require__.bind(null, /*! ./pulse-ox/pulse-ox.module */ "./src/app/home/vital/pulse-ox/pulse-ox.module.ts")).then(m => m.PulseOxPageModule)
    },
    {
        path: 'stress',
        loadChildren: () => Promise.all(/*! import() | stress-stress-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("stress-stress-module")]).then(__webpack_require__.bind(null, /*! ./stress/stress.module */ "./src/app/home/vital/stress/stress.module.ts")).then(m => m.StressPageModule)
    },
    {
        path: 'heart-rate',
        loadChildren: () => Promise.all(/*! import() | heart-rate-heart-rate-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("heart-rate-heart-rate-module")]).then(__webpack_require__.bind(null, /*! ./heart-rate/heart-rate.module */ "./src/app/home/vital/heart-rate/heart-rate.module.ts")).then(m => m.HeartRatePageModule)
    },
    {
        path: 'steps',
        loadChildren: () => Promise.all(/*! import() | steps-steps-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("steps-steps-module")]).then(__webpack_require__.bind(null, /*! ./steps/steps.module */ "./src/app/home/vital/steps/steps.module.ts")).then(m => m.StepsPageModule)
    },
    {
        path: 'calories',
        loadChildren: () => Promise.all(/*! import() | calories-calories-module */[__webpack_require__.e("default~calories-calories-module~heart-rate-heart-rate-module~pulse-ox-pulse-ox-module~sleep-sleep-m~4bb81c00"), __webpack_require__.e("common"), __webpack_require__.e("calories-calories-module")]).then(__webpack_require__.bind(null, /*! ./calories/calories.module */ "./src/app/home/vital/calories/calories.module.ts")).then(m => m.CaloriesPageModule)
    }
];
let VitalPageRoutingModule = class VitalPageRoutingModule {
};
VitalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VitalPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vital_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vital-routing.module */ "./src/app/home/vital/vital-routing.module.ts");
/* harmony import */ var _vital_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vital.page */ "./src/app/home/vital/vital.page.ts");









let VitalPageModule = class VitalPageModule {
};
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



/***/ }),

/***/ "./src/app/home/vital/vital.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/vital/vital.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-grid {\n  display: grid;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\n.vitals {\n  height: 115px;\n  width: 115px;\n  background-color: #079ca1;\n  color: white;\n}\n\n.steps {\n  height: 115px;\n  width: 115px;\n  background-color: #39c239;\n  color: white;\n}\n\n.calories {\n  height: 115px;\n  width: 115px;\n  background-color: #a74ea7;\n  color: white;\n}\n\n.heartRate {\n  height: 115px;\n  width: 115px;\n  background-color: #4f91ce;\n  color: white;\n}\n\n.stress {\n  height: 115px;\n  width: 115px;\n  background-color: #db7070;\n  color: white;\n}\n\n.sleep {\n  height: 115px;\n  width: 115px;\n  background-color: #cf814d;\n  color: white;\n}\n\n.pulse {\n  height: 115px;\n  width: 115px;\n  background-color: #aab3b8;\n  color: white;\n}\n\nimg {\n  height: 50px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFx2aXRhbFxcdml0YWwucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3ZpdGFsL3ZpdGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdml0YWwvdml0YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuICAudml0YWxzIHtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCAxNjEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuc3RlcHMge1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgMTk0LCA1Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jYWxvcmllcyB7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgNzgsIDE2Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5oZWFydFJhdGUge1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTQ1LCAyMDYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuc3RyZXNzIHtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMTIsIDExMik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zbGVlcCB7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTI5LCA3Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5wdWxzZSB7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAxNzksIDE4NCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52aXRhbHMge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzljYTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0ZXBzIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzljMjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYWxvcmllcyB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3NGVhNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhcnRSYXRlIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY5MWNlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdHJlc3Mge1xuICBoZWlnaHQ6IDExNXB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjcwNzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNsZWVwIHtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgd2lkdGg6IDExNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y4MTRkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wdWxzZSB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjNiODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");



let VitalPage = class VitalPage {
    constructor(user) {
        this.user = user;
        this.steps = '../../../assets/vitals/steps.png';
        this.heartRate = '../../../assets/vitals/heartRate.png';
        this.sleep = '../../../assets/vitals/sleep.svg';
        this.calories = '../../../assets/vitals/calories.png';
        this.stress = '../../../assets/vitals/stress.png';
        this.pulseOx = '../../../assets/vitals/pulseOx.png';
    }
    ngOnInit() {
    }
};
VitalPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
VitalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vital',
        template: __webpack_require__(/*! raw-loader!./vital.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/vital.page.html"),
        styles: [__webpack_require__(/*! ./vital.page.scss */ "./src/app/home/vital/vital.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], VitalPage);



/***/ })

}]);
//# sourceMappingURL=home-vital-vital-module-es2015.js.map