(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-resource-resource-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/resource/resource.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" class=\"back\">\n      <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Resources page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"outside\">\n    <ion-card>\n      <ion-grid class=\"inside\">\n      <ion-buttons>\n      <ion-button [routerLink]=\"['/nearby']\" class=\"middle\">Find your nearby</ion-button>\n      </ion-buttons><br>\n      <ion-buttons>\n      <ion-button [routerLink]=\"['/kp']\" class=\"middle\">Knowledge Portal</ion-button>\n      </ion-buttons>\n    </ion-grid>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/resource/resource-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/resource/resource-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ResourcePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcePageRoutingModule", function() { return ResourcePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.page */ "./src/app/home/resource/resource.page.ts");




var routes = [
    {
        path: '',
        component: _resource_page__WEBPACK_IMPORTED_MODULE_3__["ResourcePage"]
    }
];
var ResourcePageRoutingModule = /** @class */ (function () {
    function ResourcePageRoutingModule() {
    }
    ResourcePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ResourcePageRoutingModule);
    return ResourcePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/resource/resource.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/resource/resource.module.ts ***!
  \**************************************************/
/*! exports provided: ResourcePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcePageModule", function() { return ResourcePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resource_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-routing.module */ "./src/app/home/resource/resource-routing.module.ts");
/* harmony import */ var _resource_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource.page */ "./src/app/home/resource/resource.page.ts");







var ResourcePageModule = /** @class */ (function () {
    function ResourcePageModule() {
    }
    ResourcePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _resource_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcePageRoutingModule"]
            ],
            declarations: [_resource_page__WEBPACK_IMPORTED_MODULE_6__["ResourcePage"]]
        })
    ], ResourcePageModule);
    return ResourcePageModule;
}());



/***/ }),

/***/ "./src/app/home/resource/resource.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/resource/resource.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-card {\n  background-color: #eff0aa;\n  height: 300px;\n  width: 300px;\n}\n\n.outside {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  color: black;\n  font-size: large;\n  padding-top: 30%;\n}\n\n.inside {\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: black;\n  font-size: large;\n  padding-top: 25%;\n}\n\n.middle {\n  background-color: #079ca1;\n  color: white;\n  width: 220px;\n  height: 60px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9yZXNvdXJjZS9yZXNvdXJjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcmVzb3VyY2UvcmVzb3VyY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXNvdXJjZS9yZXNvdXJjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvcmVzb3VyY2VzLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDAsIDE3MCk7XG4gaGVpZ2h0OiAzMDBweDtcbiB3aWR0aDogMzAwcHg7XG59XG5cbi5vdXRzaWRle1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG4uaW5zaWRle1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nLXRvcDogMjUlO1xufVxuXG4ubWlkZGxle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCAxNjEpOyBcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGFhO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5vdXRzaWRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uaW5zaWRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZy10b3A6IDI1JTtcbn1cblxuLm1pZGRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzljYTE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/resource/resource.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/resource/resource.page.ts ***!
  \************************************************/
/*! exports provided: ResourcePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcePage", function() { return ResourcePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcePage = /** @class */ (function () {
    function ResourcePage() {
    }
    ResourcePage.prototype.ngOnInit = function () {
    };
    ResourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! raw-loader!./resource.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html"),
            styles: [__webpack_require__(/*! ./resource.page.scss */ "./src/app/home/resource/resource.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResourcePage);
    return ResourcePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-resource-resource-module-es5.js.map