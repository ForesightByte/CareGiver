(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\r\n  <div class=\"content\">\r\n    <div style=\"display: flex; justify-content: center;\">\r\n      <img src=\"../../assets/logo.png\" style=\"height: 150px; width: 200px;\">\r\n    </div><br>\r\n    <ion-grid style=\"max-width: 465px;\">\r\n      <ion-buttons class=\"button-action\">\r\n        <ion-button fill=\"clear\" color=\"dark\" size=\"small\" routerLink=\"/tabs\" routerDirection=\"root\">\r\n          <b><p class=\"login-text\">Log In</p></b>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\r\n          <b><p class=\"Registration-text\">Registration</p></b>\r\n        </ion-button>\r\n      </ion-buttons><br>\r\n      <div class=\"ion-padding\">\r\n        <ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n        <br><br>\r\n        <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n        <br><br>\r\n        <ion-input placeholder=\"Re-Password\" type=\"password\" [(ngModel)]=\"repassword\"></ion-input>\r\n        <br><br>\r\n        <ion-input placeholder=\"Garmin UserId\" type=\"text\" [(ngModel)]=\"userId\"></ion-input>\r\n      </div>\r\n      <ion-button class=\"actionbutton\" expand=\"full\" color=\"#20438d\" (click)=\"register()\" routerLink=\"/tabs\">\r\n        Registration\r\n      </ion-button>\r\n      <ion-button fill=\"clear\" style=\"font-size:10px; padding-bottom:20px;\r\n                color:lavender;margin-left:10px; text-transform:none; color:#ffbf6c;\" routerLink=\"/tabs\"\r\n                  routerDirection=\"root\">\r\n        Already have an account?\r\n      </ion-button>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('log.jpg') 0 0/100% 100% no-repeat;\n}\n\n.content {\n  position: auto;\n  max-width: 1000px;\n  margin-top: 100px;\n  margin-left: 60px;\n  margin: 100px;\n}\n\n.buttons-action {\n  margin-left: 5px;\n}\n\n.login-text {\n  font-size: x-small;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\n.Registration-text {\n  margin-left: 10px;\n  font-size: large;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\nion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: small;\n}\n\n.actionbutton {\n  background-color: #24a7a7;\n  color: white;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: small;\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvbG9nLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBtYXJnaW46IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1hY3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi10ZXh0IHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLlJlZ2lzdHJhdGlvbi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmFjdGlvbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YTdhNztcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2xvZy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW46IDEwMHB4O1xufVxuXG4uYnV0dG9ucy1hY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubG9naW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uUmVnaXN0cmF0aW9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5hY3Rpb25idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhN2E3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");







let RegisterPage = class RegisterPage {
    constructor(afAuth, afStore, alert, user, router) {
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
        this.user = user;
        this.router = router;
    }
    ngOnInit() {
    }
    // register a new account for user
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password, repassword, userId } = this;
            if (password !== repassword) {
                this.router.navigate(['/register']);
                this.showAlert('Error', 'Password do not match');
                return console.error('Password do not match');
            }
            try {
                const credential = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                if (credential.user) {
                    // store user information in firebase
                    this.afStore.doc(`users/${credential.user.uid}`).set({
                        uid: credential.user.uid,
                        email,
                        displayName: email.split('@')[0],
                        garminUserId: this.userId,
                        photoURL: null,
                        firstName: null,
                        lastName: null,
                        age: null,
                        skills: null,
                        wellbeingScore: 0
                    }, { merge: true });
                    this.router.navigate(['/tabs']);
                    this.afAuth.auth.currentUser.sendEmailVerification(); // send varification email to user
                    console.log('We have sent you an email verification'); // user must varified his/her email
                    this.showAlert('Verification', 'We have sent you an email verification');
                }
            }
            catch (error) {
                console.dir(error);
                this.showAlert('Error', error.message);
                this.router.navigate(['/register']);
            }
        });
    }
    // pop up alert message
    showAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = this.alert.create({
                header,
                message,
                buttons: ['OK']
            });
            yield (yield alert).present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map