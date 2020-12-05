(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-kp-kp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/kp/kp.page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/kp/kp.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Knowledge Portal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <ion-title>\r\n    <b>Caregiver Resource Guide:</b>\r\n  </ion-title>\r\n  <ion-label>\r\n    <p class=\"tab\"><a\r\n        href=\"https://www.cancer.org/content/dam/cancer-org/cancer-control/en/booklets-flyers/american-cancer-society-caregiver-resource-guide.pdf\"\r\n        style=\"color: rgb(0, 2, 150);\">\r\n      •\r\n      https://www.cancer.org/content/dam/cancer-org/cancer-control/en/booklets-flyers/american-cancer-society-caregiver-resource-guide.pdf</a>\r\n    </p>\r\n\r\n    <p class=\"tab\">• Contains a good amount of helpful information from the American Cancer Society (e.g., caregiver\r\n      self-care, tips for cancer caregivers, talking about death and dying etc.) </p>\r\n  </ion-label>\r\n  <br>\r\n  <br>\r\n  <ion-title>\r\n    <b>Telephone numbers </b>\r\n  </ion-title>\r\n  <ion-label>\r\n    <p class=\"tab\">• AARP: Caregiving Resource Center (1-877-333-5885)</p>\r\n    <p class=\"tab2\"> “Tools, worksheets, and tips on how to plan, prepare, and succeed as a caregiver. Includes\r\n      information on caregiving options, housing, legal issues, financial matters, care for the caregiver, and\r\n      more.”</p>\r\n    <p class=\"tab\">• CancerCare (1-800-813-4673)</p>\r\n    <p class=\"tab2\"> “Provides free, professional support services (online, telephone, and in-person) for\r\n      caregivers and loved ones, as well as caregiving information and additional resources.”</p>\r\n    <p class=\"tab\">• Cancer Hope Network (1-877-467-3638)</p>\r\n    <p class=\"tab2\"> “Volunteers provide free and confidential one-on-one telephone support for people with cancer\r\n      and family members.” </p>\r\n    <p class=\"tab\">• Cancer Support Community (The Wellness Community and Gilda’s Club) (1-888-793-9355)</p>\r\n    <p class=\"tab2\"> “Provides social work services, education, and support programs free of charge for all people\r\n      affected by cancer. The website provides a range of information, tools, and support to help you cope with\r\n      the impact of cancer.”</p>\r\n    <p class=\"tab\">• Caregiver Action Network (CAN) (1-202-454-3970)</p>\r\n    <p class=\"tab2\"> “Supports and educates family caregivers, helps them connect with other caregivers, and helps\r\n      them become their own advocates. Membership is free to caregivers.”</p>\r\n  </ion-label>\r\n  <br>\r\n  <ion-title>\r\n    <b>National Cancer Institute Resources:</b>\r\n  </ion-title>\r\n  <ion-label>\r\n    <p class=\"tab\">• cancer.gov/about-cancer/coping/caregiver-support</p>\r\n    <p class=\"tab2\"> Information re: how to take care of yourself as a caregiver, changing roles, etc.)</p>\r\n    <p class=\"tab\"><a\r\n        href=\"https://www.cancer.gov/publications/patient-education/when-someone-you-love-is-treated.pdf\"\r\n        style=\"color: rgb(0, 2, 150);\">\r\n      • https://www.cancer.gov/publications/patient-education/when-someone-you-love-is-treated.pdf</a></p>\r\n    <p class=\"tab2\"> Another pamphlet by the NCI with information for caregivers (e.g., adjusting to being a\r\n      caregiver, coping with your feelings, etc.)</p>\r\n    <p class=\"tab\"><a href=\"https://www.cancer.gov/about-cancer/coping/adjusting-to-cancer/support-groups\"\r\n                      style=\"color: rgb(0, 2, 150);\">\r\n      • https://www.cancer.gov/about-cancer/coping/adjusting-to-cancer/support-groups</a></p>\r\n    <p class=\"tab2\"> Information on cancer caregiver support groups</p>\r\n  </ion-label>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/kp/kp-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/kp/kp-routing.module.ts ***!
  \**********************************************/
/*! exports provided: KpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpPageRoutingModule", function() { return KpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kp.page */ "./src/app/home/kp/kp.page.ts");




var routes = [
    {
        path: '',
        component: _kp_page__WEBPACK_IMPORTED_MODULE_3__["KpPage"]
    }
];
var KpPageRoutingModule = /** @class */ (function () {
    function KpPageRoutingModule() {
    }
    KpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], KpPageRoutingModule);
    return KpPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/kp/kp.module.ts":
/*!**************************************!*\
  !*** ./src/app/home/kp/kp.module.ts ***!
  \**************************************/
/*! exports provided: KpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpPageModule", function() { return KpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kp-routing.module */ "./src/app/home/kp/kp-routing.module.ts");
/* harmony import */ var _kp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kp.page */ "./src/app/home/kp/kp.page.ts");







var KpPageModule = /** @class */ (function () {
    function KpPageModule() {
    }
    KpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _kp_routing_module__WEBPACK_IMPORTED_MODULE_5__["KpPageRoutingModule"]
            ],
            declarations: [_kp_page__WEBPACK_IMPORTED_MODULE_6__["KpPage"]]
        })
    ], KpPageModule);
    return KpPageModule;
}());



/***/ }),

/***/ "./src/app/home/kp/kp.page.scss":
/*!**************************************!*\
  !*** ./src/app/home/kp/kp.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.tab {\n  margin-left: 20px;\n  color: black;\n}\n\n.tab2 {\n  margin-left: 50px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9rcC9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFxrcFxca3AucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2twL2twLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2twL2twLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Jlc291cmNlcy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGFiMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50YWIyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/kp/kp.page.ts":
/*!************************************!*\
  !*** ./src/app/home/kp/kp.page.ts ***!
  \************************************/
/*! exports provided: KpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpPage", function() { return KpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KpPage = /** @class */ (function () {
    function KpPage() {
    }
    KpPage.prototype.ngOnInit = function () {
    };
    KpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kp',
            template: __webpack_require__(/*! raw-loader!./kp.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/kp/kp.page.html"),
            styles: [__webpack_require__(/*! ./kp.page.scss */ "./src/app/home/kp/kp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KpPage);
    return KpPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-kp-kp-module-es5.js.map