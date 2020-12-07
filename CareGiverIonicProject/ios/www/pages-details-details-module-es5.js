(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/details/details.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  My Id from push: {{ id }}\n \n  <ion-button (click)=\"resetBadgeCount()\" expand=\"block\">\n    Reset Badge Count\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/details/details-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");




var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
var DetailsPageRoutingModule = /** @class */ (function () {
    function DetailsPageRoutingModule() {
    }
    DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetailsPageRoutingModule);
    return DetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/pages/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");







var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].PushNotifications;
var DetailsPage = /** @class */ (function () {
    function DetailsPage(route) {
        this.route = route;
        this.id = null;
    }
    DetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    };
    DetailsPage.prototype.resetBadgeCount = function () {
        PushNotifications.removeAllDeliveredNotifications();
    };
    DetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-details-details-module-es5.js.map