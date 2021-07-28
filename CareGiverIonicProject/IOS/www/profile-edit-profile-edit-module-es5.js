(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-edit-profile-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-edit/profile-edit.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-edit/profile-edit.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/profile']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n    <ion-button slot=\"end\" fill=\"solid\" color=\"#ffffff\" (click)=\"createProfile()\">\n      Done\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class=\"grid\">\n    <div>\n      <!--<div class=\"avatar\" style=\"width: 25rem;\">\n        <ion-row size=\"1\">\n          <img [src]=\"imgSrc\" width=\"200px\" height=\"200px\">\n        </ion-row>\n        <br>\n        <ion-row>\n          <input type=\"file\" (change)=\"fileChange($event)\" accept=\"image/*\" required=\"false\"/>\n        </ion-row>\n      </div>-->\n\n      <ion-card-content class=\"input\">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>First Name:</ion-label>\n            <ion-input type=\"text\" autocapitalize=\"sentences\" required=\"true\"\n                       [(ngModel)]=\"firstName\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Last Name:</ion-label>\n            <ion-input type=\"text\" autocapitalize=\"sentences\" required=\"true\"\n                       [(ngModel)]=\"lastName\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Gender:</ion-label>\n            <ion-select required=\"true\" [(ngModel)]=\"gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Age:</ion-label>\n            <ion-input type=\"number\" autocapitalize=\"on\" required=\"true\" [(ngModel)]=\"age\"></ion-input>\n          </ion-item>\n\n          <!--ion-item>\n            <ion-label floating>Skills:</ion-label>\n            <ion-textarea type=\"text\" autocapitalize=\"word\"\n                          [(ngModel)]=\"skills\" required=\"true\">\n            </ion-textarea>\n          </ion-item-->\n        </ion-list>\n      </ion-card-content>\n\n    </div>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile-edit/profile-edit-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageRoutingModule", function() { return ProfileEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/profile-edit/profile-edit.page.ts");




var routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEditPage"]
    }
];
var ProfileEditPageRoutingModule = /** @class */ (function () {
    function ProfileEditPageRoutingModule() {
    }
    ProfileEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileEditPageRoutingModule);
    return ProfileEditPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile-edit/profile-edit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-edit-routing.module */ "./src/app/profile-edit/profile-edit-routing.module.ts");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/profile-edit/profile-edit.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var ProfileEditPageModule = /** @class */ (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEditPageRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());



/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\n.grid {\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.avatar {\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.input {\n  position: auto;\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvd2hpdGVsZWFmLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5hdmF0YXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hdmF0YXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.ts ***!
  \***************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ProfileEditPage = /** @class */ (function () {
    function ProfileEditPage(afStore, afstg, router, Uauth, navCtrl, userS) {
        this.afStore = afStore;
        this.afstg = afstg;
        this.router = router;
        this.Uauth = Uauth;
        this.navCtrl = navCtrl;
        this.userS = userS;
        this.firstName = null;
        this.lastName = null;
        this.gender = null;
        this.age = null;
        this.skills = null;
        this.imgSrc = '../../assets/lastDINO.png';
        this.srcUrl = null;
        this.photoURL = null;
        this.completedTags = [
            'Cooking',
            'Cleaning',
            'Communication',
            'Critical Thinking',
            'Kindness',
            'Physical Endurance',
            'Patient Care',
            'Patient Assessment',
            'Infection Control',
            'Catheterization',
            'Telemetry',
            'Empathy',
            'Cultural Awareness',
            'Professionalism',
            'Attention to Detail'
        ];
    }
    ProfileEditPage.prototype.ngOnInit = function () {
    };
    // This function upload photo on firebase storage and convert it into url
    ProfileEditPage.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.srcUrl = event.target.files[0];
            var filepath = "proPic/" + this.srcUrl.name + "_" + new Date().getTime();
            var fileref_1 = this.afstg.ref(filepath);
            this.afstg.upload(filepath, this.srcUrl).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                fileref_1.getDownloadURL().subscribe(function (url) {
                    _this.photoURL = url;
                });
            })).subscribe();
        }
    };
    // store user's information in firebase
    ProfileEditPage.prototype.createProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var firstName, lastName, age, gender, skills, uProfile, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                firstName = this.firstName;
                lastName = this.lastName;
                age = this.age;
                gender = this.gender;
                skills = this.skills;
                uProfile = this.afStore.doc("users/" + this.Uauth.cUid);
                data = {
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    age: age,
                    skills: skills
                    // photoURL
                };
                uProfile.update(data);
                this.router.navigate(['/profile']);
                return [2 /*return*/];
            });
        });
    };
    ProfileEditPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! raw-loader!./profile-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile-edit/profile-edit.page.html"),
            styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/profile-edit/profile-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-edit-profile-edit-module-es5.js.map