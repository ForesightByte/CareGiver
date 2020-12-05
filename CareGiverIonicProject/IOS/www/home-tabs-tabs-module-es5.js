(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tabs/tabs.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tabs/tabs.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Uauth.authenticated; else login\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button routerLink=\"/vital\" routerDirection=\"root\">\r\n        <ion-icon md=\"md-analytics\"></ion-icon>\r\n        <ion-label>Vital</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/resource\" routerDirection=\"root\">\r\n        <ion-icon md=\"md-information-circle\"></ion-icon>\r\n        <ion-label>Resource</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/kp\" routerDirection=\"root\">\r\n        <ion-icon md=\"md-medkit\"></ion-icon>\r\n        <ion-label>KP</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/home\" routerDirection=\"root\" (click)=\"popAlert()\">\r\n        <ion-icon md=\"md-chatboxes\"></ion-icon>\r\n        <ion-label>Chat</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button routerLink=\"/ema\" routerDirection=\"root\">\r\n        <ion-icon md=\"md-document\"></ion-icon>\r\n        <ion-label>W.CheckIn</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</div>\r\n\r\n<ng-template #login>\r\n  <ion-content class=\"background\">\r\n    <div class=\"content\">\r\n      <div style=\"display: flex; justify-content: center;\">\r\n        <img src=\"../../assets/logo.png\" style=\"height: 150px; width: 200px;\">\r\n      </div><br>\r\n      <ion-grid style=\"max-width: 465px;\">\r\n        <ion-buttons class=\"button-action\">\r\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\r\n            <b><p class=\"login-text\">Log In</p></b>\r\n          </ion-button>\r\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\" routerLink=\"/register\" routerDirection=\"root\">\r\n            <b><p class=\"Registration-text\">Registration</p></b>\r\n          </ion-button>\r\n        </ion-buttons><br>\r\n        <div class=\"ion-padding\">\r\n          <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"log.email\"></ion-input>\r\n          <br><br>\r\n          <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"log.password\"></ion-input>\r\n        </div>\r\n        <ion-button class=\"actionbutton\" expand=\"block\" color=\"#20438d\" style=\"max-width: 465px;\"\r\n                    (click)=\"log.login()\">Log In\r\n        </ion-button>\r\n        <!--<ion-button class=\"forgotbutton\" fill=\"clear\" style=\"font-size:10px; padding-bottom:20px;\r\n                            color:lavender;margin-left:10px; text-transform:none; color:#ffbf6c;\"\r\n                    routerLink=\"/reset-password\" routerDirection=\"root\">\r\n          Forgot password ?\r\n        </ion-button>-->\r\n      </ion-grid>\r\n      <!--<ion-grid style=\"max-width: 465px;\">\r\n          <ion-row>\r\n              <ion-col class=\"line\" size=\"5\"></ion-col>\r\n              <ion-col class=\"or\" size=\"2\">\r\n                  OR\r\n              </ion-col>\r\n              <ion-col class=\"line\" size=\"5\"></ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n      <ion-grid style=\"max-width: 465px;\">\r\n          <ion-row>\r\n              <ion-col>\r\n                    <ion-button class=\"fbbutton\" expand=\"block\" color=\"#20438d\">Facebook\r\n                        <ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>\r\n                      </ion-button><br>\r\n\r\n                  <ion-button fill=\"solid\" expand=\"block\" color=\"#ff3300\" class=\"gbutton\" (click)=\"log.google()\">\r\n                      Google\r\n                      <ion-icon slot=\"end\" name=\"logo-googleplus\"></ion-icon>\r\n                  </ion-button>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>-->\r\n    </div>\r\n  </ion-content>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tabs-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/tabs/tabs-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/home/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~home-profile-profile-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home/home.module.ts")).then(function (m) { return m.HomePageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/tabs/tabs.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/tabs/tabs.module.ts ***!
  \******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/home/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/home/tabs/tabs.page.ts");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
            providers: [src_app_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/home/tabs/tabs.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/tabs/tabs.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('log.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-tab-bar {\n  --background: rgb(255, 255, 255);\n}\n\nion-tab-button {\n  color: #02595c;\n}\n\n.content {\n  position: auto;\n  max-width: 1000px;\n  margin-top: 100px;\n  margin-left: 60px;\n  margin: 100px;\n}\n\n.buttons-action {\n  margin-left: 5px;\n}\n\n.Registration-text {\n  font-size: x-small;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\n.login-text {\n  margin-left: 10px;\n  font-size: large;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\nion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: small;\n}\n\n.actionbutton {\n  background-color: #24a7a7;\n  color: white;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: small;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.forgotbutton {\n  background-color: #ffffff00;\n  color: #ffffff;\n  font-size: x-small;\n  margin-right: 50px;\n  font-style: italic;\n  text-transform: none;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.line {\n  border-bottom: 2px solid white;\n  margin-bottom: 22px;\n}\n\n.or {\n  color: #ffffff;\n  text-align: center;\n}\n\n.fbbutton {\n  background-color: #3b5998;\n  border-radius: 5px;\n  color: #ffffff;\n  margin-bottom: 12px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  text-transform: none;\n  text-align: right;\n}\n\n.gbutton {\n  background-color: #ee5e5e;\n  border-radius: 5px;\n  color: #fdfdfd;\n  margin-bottom: 12px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90YWJzL0Y6XFxJb25pY1Byb2plY3RcXEdpdFxcQ2FyZUdpdmVyXFxDYXJlR2l2ZXJJb25pY1Byb2plY3Qvc3JjXFxhcHBcXGhvbWVcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNFQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvbG9nLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTsgLy8gIHVybCguLi8uLi8uLi9hc3NldHMvdGFiX2Jhci5qcGcpIDAgMC8xMDAlIDEwMCU7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIHtcclxuICBjb2xvcjogcmdiKDIsIDg5LCA5Mik7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBtYXJnaW46IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1hY3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5SZWdpc3RyYXRpb24tdGV4dCB7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmFjdGlvbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YTdhNztcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcmdvdGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmJidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5nYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1ZTVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZkZmRmZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTNweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbiIsImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvbG9nLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6ICMwMjU5NWM7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IGF1dG87XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cbi5idXR0b25zLWFjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5SZWdpc3RyYXRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubG9naW4tdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmFjdGlvbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGE3YTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcmdvdGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbi5saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4ub3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5nYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNWU1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZkZmRmZDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/tabs/tabs.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/tabs/tabs.page.ts ***!
  \****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");







var TabsPage = /** @class */ (function () {
    function TabsPage(router, afAuth, Uauth, log, alert, actionSheetController) {
        this.router = router;
        this.afAuth = afAuth;
        this.Uauth = Uauth;
        this.log = log;
        this.alert = alert;
        this.actionSheetController = actionSheetController;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.overlap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Tools',
                            cssClass: 'EditIcon',
                            buttons: [{
                                    text: 'Profile',
                                    role: 'information',
                                    icon: 'contact',
                                    handler: function () {
                                        //  return this.router.navigate(['./profile']);
                                    }
                                }, {
                                    text: 'Settings',
                                    role: 'settings',
                                    icon: 'settings',
                                    handler: function () {
                                        //  return this.router.navigate(['./settings']);
                                    }
                                }, {
                                    text: 'Sign Out',
                                    icon: 'power',
                                    handler: function () {
                                        _this.afAuth.auth.signOut();
                                        _this.router.navigate(['/tabs']);
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.popAlert = function () {
        // tslint:disable-next-line: max-line-length
        this.showAlert('Hello! This chat room is a place where you can connect with other cancer caregivers and provide support to one another');
    };
    // pop up alert message
    TabsPage.prototype.showAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alert.create({
                            message: message,
                            buttons: ['OK']
                        });
                        return [4 /*yield*/, alert];
                    case 1: return [4 /*yield*/, (_a.sent()).present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/home/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-tabs-tabs-module-es5.js.map