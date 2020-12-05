(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-card class=\"position\">\r\n    <ion-title class=\"headtext\">Reset your password</ion-title>\r\n    <br>\r\n    <ion-label><p class=\"headtext\">Enter the email linked to your account</p>\r\n    </ion-label>\r\n\r\n    <ion-grid class=\"eposition\">\r\n      <ion-row>\r\n        <ion-input placeholder=\"email id\" [(ngModel)]=\"email\"></ion-input>\r\n        <ion-button (click)=\"resetPassword()\">Reset</ion-button>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function() { return ResetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");




var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    }
];
var ResetPasswordPageRoutingModule = /** @class */ (function () {
    function ResetPasswordPageRoutingModule() {
    }
    ResetPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ResetPasswordPageRoutingModule);
    return ResetPasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");







var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position {\n  position: auto;\n  margin-top: 200px;\n}\n\n.eposition {\n  position: auto;\n  margin-top: 50px;\n  max-width: 400px;\n}\n\n.headtext {\n  text-align: center;\n  color: #ffffff;\n  text-transform: none;\n}\n\nion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: medium;\n  align-content: center;\n}\n\n.backbutton {\n  position: fixed;\n  color: #d3f3a0;\n  font-family: \"Times New Roman\", Times, serif;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbi5lcG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmhlYWR0ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiAjZDNmM2EwO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG59XHJcbiIsIi5wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLmVwb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uaGVhZHRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICNkM2YzYTA7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");





var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(log, Auth, router) {
        this.log = log;
        this.Auth = Auth;
        this.router = router;
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
    };
    ResetPasswordPage.prototype.resetPassword = function (email) {
        if (this.Auth.authenticated) {
            return this.log.resetPassword(this.email);
        }
        else {
            return console.log('Error! The email id is not recorded');
        }
    };
    ResetPasswordPage.ctorParameters = function () { return [
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es5.js.map