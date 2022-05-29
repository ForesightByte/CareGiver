(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-kp-kp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/kp/kp.page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/kp/kp.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/resource']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Knowledge Portal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h2>\n    <b>Caregiver Resource Guide:</b>\n  </h2>\n  <div>\n    <h5 class=\"tab\"><a\n        href=\"https://www.cancer.org/content/dam/cancer-org/cancer-control/en/booklets-flyers/american-cancer-society-caregiver-resource-guide.pdf\"\n        style=\"color: rgb(0, 2, 150);\">\n      • https://www.cancer.org/content/dam/cancer-org/cancer-control/en/booklets-flyers/american-cancer-society-caregiver-resource-guide.pdf</a>\n    </h5>\n\n    <h5 class=\"tab\">• Contains a good amount of helpful information from the American Cancer Society (e.g., caregiver\n      self-care, tips for cancer caregivers, talking about death and dying etc.) </h5>\n  </div>\n  <br>\n  <br>\n  <h2>\n    <b>Telephone numbers </b>\n  </h2>\n  <div>\n    <h5 class=\"tab\">• AARP: Caregiving Resource Center (1-877-333-5885)</h5>\n    <h5 class=\"tab2\"> Tools, worksheets, and tips on how to plan, prepare, and succeed as a caregiver. Includes\n      information on caregiving options, housing, legal issues, financial matters, care for the caregiver, and\n      more.</h5>\n    <h5 class=\"tab\">• CancerCare (1-800-813-4673)</h5>\n    <h5 class=\"tab2\"> Provides free, professional support services (online, telephone, and in-person) for\n      caregivers and loved ones, as well as caregiving information and additional resources.</h5>\n    <h5 class=\"tab\">• Cancer Hope Network (1-877-467-3638)</h5>\n    <h5 class=\"tab2\"> Volunteers provide free and confidential one-on-one telephone support for people with cancer\n      and family members.</h5>\n    <h5 class=\"tab\">• Cancer Support Community (The Wellness Community and Gilda’s Club) (1-888-793-9355)</h5>\n    <h5 class=\"tab2\"> Provides social work services, education, and support programs free of charge for all people\n      affected by cancer. The website provides a range of information, tools, and support to help you cope with\n      the impact of cancer.</h5>\n    <h5 class=\"tab\">• Caregiver Action Network (CAN) (1-202-454-3970)</h5>\n    <h5 class=\"tab2\"> Supports and educates family caregivers, helps them connect with other caregivers, and helps\n      them become their own advocates. Membership is free to caregivers.</h5>\n  </div>\n  <br>\n  <h2>\n    <b>National Cancer Institute Resources:</b>\n  </h2>\n  <div>\n    <h5 class=\"tab\">• cancer.gov/about-cancer/coping/caregiver-support</h5>\n    <h5 class=\"tab2\"> Information re: how to take care of yourself as a caregiver, changing roles, etc.)</h5>\n    <h5 class=\"tab\"><a\n        href=\"https://www.cancer.gov/publications/patient-education/when-someone-you-love-is-treated.pdf\"\n        style=\"color: rgb(0, 2, 150);\">\n      • https://www.cancer.gov/publications/patient-education/when-someone-you-love-is-treated.pdf</a></h5>\n    <h5 class=\"tab2\"> Another pamphlet by the NCI with information for caregivers (e.g., adjusting to being a\n      caregiver, coping with your feelings, etc.)</h5>\n    <h5 class=\"tab\"><a href=\"https://www.cancer.gov/about-cancer/coping/adjusting-to-cancer/support-groups\"\n                      style=\"color: rgb(0, 2, 150);\">\n      • https://www.cancer.gov/about-cancer/coping/adjusting-to-cancer/support-groups</a></h5>\n    <h5 class=\"tab2\"> Information on cancer caregiver support groups</h5>\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kp.page */ "./src/app/home/kp/kp.page.ts");




const routes = [
    {
        path: '',
        component: _kp_page__WEBPACK_IMPORTED_MODULE_3__["KpPage"]
    }
];
let KpPageRoutingModule = class KpPageRoutingModule {
};
KpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KpPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kp-routing.module */ "./src/app/home/kp/kp-routing.module.ts");
/* harmony import */ var _kp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kp.page */ "./src/app/home/kp/kp.page.ts");







let KpPageModule = class KpPageModule {
};
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



/***/ }),

/***/ "./src/app/home/kp/kp.page.scss":
/*!**************************************!*\
  !*** ./src/app/home/kp/kp.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.tab {\n  margin-left: 20px;\n  color: black;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.tab2 {\n  margin-left: 50px;\n  color: black;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9rcC9rcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUva3Ava3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2twL2twLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZXMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbi50YWIyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4udGFiMiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KpPage = class KpPage {
    constructor() {
    }
    ngOnInit() {
    }
};
KpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kp',
        template: __webpack_require__(/*! raw-loader!./kp.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/kp/kp.page.html"),
        styles: [__webpack_require__(/*! ./kp.page.scss */ "./src/app/home/kp/kp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], KpPage);



/***/ })

}]);
//# sourceMappingURL=home-kp-kp-module-es2015.js.map