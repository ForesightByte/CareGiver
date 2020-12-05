(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-ema-ema-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/ema/ema.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/ema/ema.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/home/ema/ema-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/ema/ema-routing.module.ts ***!
  \************************************************/
/*! exports provided: EmaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmaPageRoutingModule", function() { return EmaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ema.page */ "./src/app/home/ema/ema.page.ts");




const routes = [
    {
        path: '',
        component: _ema_page__WEBPACK_IMPORTED_MODULE_3__["EmaPage"],
        children: [
            {
                path: 'extra',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | extra-extra-module */ "extra-extra-module").then(__webpack_require__.bind(null, /*! ./extra/extra.module */ "./src/app/home/ema/extra/extra.module.ts")).then(m => m.ExtraPageModule)
                    }
                ]
            },
            {
                path: 'relax',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | relax-relax-module */ "relax-relax-module").then(__webpack_require__.bind(null, /*! ./relax/relax.module */ "./src/app/home/ema/relax/relax.module.ts")).then(m => m.RelaxPageModule)
                    }
                ]
            },
            {
                path: 'perma',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | perma-perma-module */ "perma-perma-module").then(__webpack_require__.bind(null, /*! ./perma/perma.module */ "./src/app/home/ema/perma/perma.module.ts")).then(m => m.PermaPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/ema/extra',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: '/ema/extra',
                pathMatch: 'full'
            }
        ]
    }
];
let EmaPageRoutingModule = class EmaPageRoutingModule {
};
EmaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmaPageRoutingModule);



/***/ }),

/***/ "./src/app/home/ema/ema.module.ts":
/*!****************************************!*\
  !*** ./src/app/home/ema/ema.module.ts ***!
  \****************************************/
/*! exports provided: EmaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmaPageModule", function() { return EmaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ema_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ema-routing.module */ "./src/app/home/ema/ema-routing.module.ts");
/* harmony import */ var _ema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ema.page */ "./src/app/home/ema/ema.page.ts");







let EmaPageModule = class EmaPageModule {
};
EmaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ema_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmaPageRoutingModule"]
        ],
        declarations: [_ema_page__WEBPACK_IMPORTED_MODULE_6__["EmaPage"]],
    })
], EmaPageModule);



/***/ }),

/***/ "./src/app/home/ema/ema.page.scss":
/*!****************************************!*\
  !*** ./src/app/home/ema/ema.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZW1hL2VtYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/ema/ema.page.ts":
/*!**************************************!*\
  !*** ./src/app/home/ema/ema.page.ts ***!
  \**************************************/
/*! exports provided: EmaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmaPage", function() { return EmaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmaPage = class EmaPage {
    constructor() {
        this.one = '../../../assets/score/1.png';
        this.two = '../../../assets/score/2.png';
        this.three = '../../../assets/score/3.png';
        this.four = '../../../assets/score/4.png';
        this.five = '../../../assets/score/5.png';
    }
    ngOnInit() {
    }
};
EmaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ema',
        template: __webpack_require__(/*! raw-loader!./ema.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/ema/ema.page.html"),
        styles: [__webpack_require__(/*! ./ema.page.scss */ "./src/app/home/ema/ema.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmaPage);



/***/ })

}]);
//# sourceMappingURL=home-ema-ema-module-es2015.js.map