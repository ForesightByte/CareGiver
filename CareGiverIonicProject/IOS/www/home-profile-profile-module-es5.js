(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/profile/profile.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/profile/profile.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile</ion-title>\r\n    <!--<ion-button (click)=\"editProfile()\">Edit</ion-button>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card *ngIf=\"Info\">\r\n    <ion-grid class=\"profile\">\r\n      <ion-list>\r\n       <!--<img style=\"width: 115px; height: 115px;\" src=\"{{(Info |async)?.photoURL}}\" class=\"photo\">-->\r\n        <p>First Name: {{(Info |async)?.firstName}}</p>\r\n        <p>Last Name: {{(Info |async)?.lastName}}</p>\r\n        <p>Gender: {{(Info |async)?.gender}}</p>\r\n        <p>Age: {{(Info |async)?.age}}</p>\r\n        <p>Skills: {{(Info |async)?.skills}}</p>\r\n      </ion-list>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/home/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/home/profile/profile-routing.module.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/home/profile/profile.page.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/home/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-card {\n  background: #b9d7e0;\n}\n\nion-list {\n  background: rgba(255, 248, 220, 0);\n}\n\n.profile {\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: black;\n  font-size: large;\n}\n\n.photo {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9maWxlL0Y6XFxJb25pY1Byb2plY3RcXEdpdFxcQ2FyZUdpdmVyXFxDYXJlR2l2ZXJJb25pY1Byb2plY3Qvc3JjXFxhcHBcXGhvbWVcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3doaXRlbGVhZi5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTg1LCAyMTUsIDIyNCk7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ4LCAyMjAsIDApO1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4ucGhvdG8ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNiOWQ3ZTA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OCwgMjIwLCAwKTtcbn1cblxuLnByb2ZpbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGhvdG8ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(afAuth, afStore, auth, userS, router) {
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.auth = auth;
        this.userS = userS;
        this.router = router;
        var uid = this.auth.cUid;
        this.Info = this.userS.getUser(uid);
        console.log(uid);
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/home/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-profile-profile-module-es5.js.map