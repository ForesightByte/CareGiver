(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tabs/tabs.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tabs/tabs.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Uauth.authenticated; else login\">\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button routerLink=\"/vital\" routerDirection=\"root\">\n        <ion-icon md=\"md-analytics\"></ion-icon>\n        <ion-label class=\"tabBar\">Vital</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/resource\" routerDirection=\"root\">\n        <ion-icon md=\"md-information-circle\"></ion-icon>\n        <ion-label class=\"tabBar\">Resource</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/kp\" routerDirection=\"root\">\n        <ion-icon md=\"md-medkit\"></ion-icon>\n        <ion-label class=\"tabBar\">KP</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/home\" routerDirection=\"root\" (click)=\"popAlert()\">\n        <ion-icon md=\"md-chatboxes\"></ion-icon>\n        <ion-label class=\"tabBar\">Chat</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button routerLink=\"/ema\" routerDirection=\"root\">\n        <ion-icon md=\"md-document\"></ion-icon>\n        <ion-label class=\"tabBar\">W.CheckIn</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</div>\n\n<ng-template #login>\n  <ion-content class=\"background\">\n    <div class=\"content\">\n      <div style=\"display: flex; justify-content: center;\">\n        <img src=\"../../assets/logo.png\" style=\"height: 150px; width: 200px;\">\n      </div><br>\n      <ion-grid style=\"max-width: 465px;\">\n        <ion-buttons class=\"button-action\">\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\n            <b><p class=\"login-text\">Log In</p></b>\n          </ion-button>\n          <ion-button fill=\"clear\" color=\"dark\" size=\"small\" routerLink=\"/register\" routerDirection=\"root\">\n            <b><p class=\"Registration-text\">Registration</p></b>\n          </ion-button>\n        </ion-buttons><br>\n        <div class=\"ion-padding\">\n          <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"log.email\"></ion-input>\n          <br><br>\n          <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"log.password\"></ion-input>\n        </div>\n        <ion-button class=\"actionbutton\" expand=\"block\" color=\"#20438d\" style=\"max-width: 465px;\"\n                    (click)=\"log.login()\">Log In\n        </ion-button>\n        <!--<ion-button class=\"forgotbutton\" fill=\"clear\" style=\"font-size:10px; padding-bottom:20px;\n                            color:lavender;margin-left:10px; text-transform:none; color:#ffbf6c;\"\n                    routerLink=\"/reset-password\" routerDirection=\"root\">\n          Forgot password ?\n        </ion-button>-->\n      </ion-grid>\n      <!--<ion-grid style=\"max-width: 465px;\">\n          <ion-row>\n              <ion-col class=\"line\" size=\"5\"></ion-col>\n              <ion-col class=\"or\" size=\"2\">\n                  OR\n              </ion-col>\n              <ion-col class=\"line\" size=\"5\"></ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-grid style=\"max-width: 465px;\">\n          <ion-row>\n              <ion-col>\n                    <ion-button class=\"fbbutton\" expand=\"block\" color=\"#20438d\">Facebook\n                        <ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>\n                      </ion-button><br>\n\n                  <ion-button fill=\"solid\" expand=\"block\" color=\"#ff3300\" class=\"gbutton\" (click)=\"log.google()\">\n                      Google\n                      <ion-icon slot=\"end\" name=\"logo-googleplus\"></ion-icon>\n                  </ion-button>\n              </ion-col>\n          </ion-row>\n      </ion-grid>-->\n    </div>\n  </ion-content>\n</ng-template>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/home/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~home-profile-profile-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home/home.module.ts")).then(m => m.HomePageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/home/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/home/tabs/tabs.page.ts");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");








let TabsPageModule = class TabsPageModule {
};
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



/***/ }),

/***/ "./src/app/home/tabs/tabs.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/tabs/tabs.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('log.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-tab-bar {\n  --background: rgb(255, 255, 255);\n}\n\nion-tab-button {\n  color: #02595c;\n}\n\n.content {\n  position: auto;\n  max-width: 1000px;\n  margin-top: 100px;\n  margin-left: 60px;\n  margin: 100px;\n}\n\n.buttons-action {\n  margin-left: 5px;\n}\n\n.Registration-text {\n  font-size: x-small;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\n.login-text {\n  margin-left: 10px;\n  font-size: large;\n  color: #ffffff;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\nion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: small;\n}\n\n.actionbutton {\n  background-color: #24a7a7;\n  color: white;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: small;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.forgotbutton {\n  background-color: #ffffff00;\n  color: #ffffff;\n  font-size: x-small;\n  margin-right: 50px;\n  font-style: italic;\n  text-transform: none;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.line {\n  border-bottom: 2px solid white;\n  margin-bottom: 22px;\n}\n\n.or {\n  color: #ffffff;\n  text-align: center;\n}\n\n.fbbutton {\n  background-color: #3b5998;\n  border-radius: 5px;\n  color: #ffffff;\n  margin-bottom: 12px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  text-transform: none;\n  text-align: right;\n}\n\n.gbutton {\n  background-color: #ee5e5e;\n  border-radius: 5px;\n  color: #fdfdfd;\n  margin-bottom: 12px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  text-transform: none;\n}\n\nion-label.tabBar {\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzRUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2cuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTsgLy8gIHVybCguLi8uLi8uLi9hc3NldHMvdGFiX2Jhci5qcGcpIDAgMC8xMDAlIDEwMCU7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgY29sb3I6IHJnYigyLCA4OSwgOTIpO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW46IDEwMHB4O1xufVxuXG4uYnV0dG9ucy1hY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uUmVnaXN0cmF0aW9uLXRleHQge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5sb2dpbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmFjdGlvbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGE3YTc7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3Jnb3RidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cblxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4ub3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTVlNWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZGZkZmQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmlvbi1sYWJlbC50YWJCYXJ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDI1OTVjO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW46IDEwMHB4O1xufVxuXG4uYnV0dG9ucy1hY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uUmVnaXN0cmF0aW9uLXRleHQge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmxvZ2luLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5hY3Rpb25idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhN2E3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3Jnb3RidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLm9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZiYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTVlNWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZGZkZmQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tbGFiZWwudGFiQmFyIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");







let TabsPage = class TabsPage {
    constructor(router, afAuth, Uauth, log, alert, actionSheetController) {
        this.router = router;
        this.afAuth = afAuth;
        this.Uauth = Uauth;
        this.log = log;
        this.alert = alert;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
    }
    overlap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Tools',
                cssClass: 'EditIcon',
                buttons: [
                    {
                        text: 'Sign Out',
                        icon: 'power',
                        handler: () => {
                            this.afAuth.auth.signOut();
                            this.router.navigate(['/tabs']);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    popAlert() {
        // tslint:disable-next-line: max-line-length
        this.showAlert('Hello! This chat room is a place where you can connect with other cancer caregivers and provide support to one another');
    }
    // pop up alert message
    showAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = this.alert.create({
                message,
                buttons: ['OK']
            });
            yield (yield alert).present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=home-tabs-tabs-module-es2015.js.map