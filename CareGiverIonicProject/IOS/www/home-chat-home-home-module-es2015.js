(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-chat-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chat/home/home.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chat/home/home.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"exitChat()\" style=\"color: white;\">\n        <ion-icon name=\"exit\"></ion-icon> Exit\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Caregiver Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding #content>\n  <ion-list>\n    <ion-grid *ngFor=\"let chat of chats\" no-lines>\n      <div class=\"chat-status\" text-center *ngIf=\"chat.type==='join'||chat.type==='exit';else message\">\n        <span class=\"chat-date\">{{chat.sendDate | date:'short'}}</span>\n        <span class=\"chat-content-center\">{{chat.message}}</span>\n      </div>\n      <ng-template #message>\n        <div class=\"chat-message\" text-right *ngIf=\"chat.user === displayName\">\n          <div class=\"right-bubble\">\n            <span class=\"msg-name\">Me</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p text-wrap>{{chat.message}}</p>\n          </div>\n        </div>\n        <div class=\"chat-message\" text-left *ngIf=\"chat.user !== displayName\">\n          <div class=\"left-bubble\">\n            <span class=\"msg-name\">{{(chat.user)}}</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p text-wrap>{{chat.message}}</p>\n          </div>\n        </div>\n      </ng-template>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer\">\n    <ion-row align-items-center no-padding>\n      <ion-col col-10>\n          <textarea autosize maxRows=\"5\" type=\"text\" placeholder=\"Type a message\"\n                    [(ngModel)]=\"data.message\" name=\"message\" class=\"msg-input\"></textarea>\n      </ion-col> &nbsp;&nbsp;\n      <ion-fab-button fill=\"clear\" color=\"rgba(255, 0, 0, 0)\"\n                      style=\"color: rgba(255, 0, 0, 0); margin-right: 30px;\"\n                      [disabled]=\"data.message === ''\" (click)=\"sendMessage()\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-fab-button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n  \n"

/***/ }),

/***/ "./src/app/home/chat/home/home-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/chat/home/home-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/chat/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/chat/home/home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home/chat/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/chat/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/chat/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/chat/home/home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/home/chat/home/home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(186, 186, 248, 0);\n}\n\nion-footer ion-toolbar.footer {\n  height: 80px;\n  --background: rgb(214, 228, 189);\n}\n\nion-footer ion-icon {\n  color: green;\n}\n\n.msg-input {\n  height: 60px;\n  width: 90%;\n  border: 1px solid vat(--ion-color-medium);\n  border-radius: 10px;\n  background: white;\n  color: black;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chat-status {\n  min-height: 49px;\n}\n\n.chat-status .chat-date {\n  display: block;\n  font-size: 10px;\n  font-style: italic;\n  color: black;\n  height: 15px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-status .chat-content-center {\n  padding: 5px 10px;\n  background-color: #e5d4ec;\n  border-radius: 6px;\n  font-size: 12px;\n  color: black;\n  height: 34px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-message {\n  width: 50%;\n  min-height: 50px;\n}\n\n.chat-message .right-bubble {\n  position: relative;\n  background: #0000004b;\n  color: white;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  padding: 5px 10px 10px;\n  left: 90%;\n}\n\n.chat-message .right-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .right-bubble span.msg-date {\n  font-size: 10px;\n  color: black;\n}\n\n.chat-message .right-bubble:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-left-color: #0000004b;\n  border-right: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-right: -27px;\n}\n\n.chat-message .left-bubble {\n  position: relative;\n  background: #3cb7ff70;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  left: 10%;\n}\n\n.chat-message .left-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .left-bubble span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .left-bubble:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-right-color: #3cb7ff70;\n  border-left: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-left: -27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9jaGF0L2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvY2hhdC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURHRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBREtBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNKSjs7QURRQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNMSjs7QURPSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNMTjs7QURRSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDTk47O0FEVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDVEo7O0FEV0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDVE47O0FEWUk7RUFDRSxlQUFBO0FDVk47O0FEY0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoYXQvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy93aGl0ZV9mbG93ZXIuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVfZmxvd2VyLmpwZyk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4NiwgMTg2LCAyNDgsIDApO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgaW9uLXRvb2xiYXIuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE0LCAyMjgsIDE4OSk7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG59XG5cbi5tc2ctaW5wdXQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhdCgtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiBibGFjaztcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGF0LXN0YXR1cyB7XG4gIG1pbi1oZWlnaHQ6IDQ5cHg7XG5cbiAgLmNoYXQtZGF0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIC8vIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggIzIyMiwgMHB4IDFweCAwcHggI2FhYTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gIH1cblxuICAuY2hhdC1jb250ZW50LWNlbnRlciB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDRlYztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDogMTAlO1xuICB9XG59XG5cbi5jaGF0LW1lc3NhZ2Uge1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuXG4gIC5yaWdodC1idWJibGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNGI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC40ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICAgIGxlZnQ6IDkwJTtcblxuICAgIHNwYW4ubXNnLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgc3Bhbi5tc2ctZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0LWJ1YmJsZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwNGI7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogLTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yN3B4O1xuICB9XG5cbiAgLmxlZnQtYnViYmxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogIzNjYjdmZjcwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNGVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC40ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC40ZW07XG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcbiAgICBsZWZ0OiAxMCU7XG5cbiAgICBzcGFuLm1zZy1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIHNwYW4ubXNnLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sZWZ0LWJ1YmJsZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDI3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjM2NiN2ZmNzA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjdweDtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTg2LCAxODYsIDI0OCwgMCk7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMTQsIDIyOCwgMTg5KTtcbn1cbmlvbi1mb290ZXIgaW9uLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5tc2ctaW5wdXQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhdCgtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNoYXQtc3RhdHVzIHtcbiAgbWluLWhlaWdodDogNDlweDtcbn1cbi5jaGF0LXN0YXR1cyAuY2hhdC1kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTVweDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuLmNoYXQtc3RhdHVzIC5jaGF0LWNvbnRlbnQtY2VudGVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQ0ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzRweDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuXG4uY2hhdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDRiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICBsZWZ0OiA5MCU7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA0YjtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogLTI3cHg7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzNjYjdmZjcwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC40ZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40ZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XG4gIGxlZnQ6IDEwJTtcbn1cbi5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlIHNwYW4ubXNnLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMzY2I3ZmY3MDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/chat/home/home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/home/chat/home/home.page.ts ***!
  \*********************************************/
/*! exports provided: snapshotToArray, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");







const snapshotToArray = snapshot => {
    const returnArr = [];
    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
let HomePage = class HomePage {
    constructor(Aroute, router, user, auth) {
        this.Aroute = Aroute;
        this.router = router;
        this.user = user;
        this.auth = auth;
        this.data = { type: '', displayName: '', message: '' };
        this.chats = [];
        this.roomkey = null;
        this.displayName = null;
        const uid = this.auth.cUid;
        this.displayName = this.user.displayName;
        console.log('dispname', this.displayName);
        this.roomkey = 'chatroom';
        this.offStatus = false;
        this.data.type = 'message';
        this.data.displayName = this.displayName;
        /*const joinData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
        joinData.set({
          type: 'join',
          user: this.displayName,
          message: this.displayName + ' has joined this room.',
          sendDate: Date()
        });
        this.data.message = '';*/
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', resp => {
            this.chats = [];
            this.chats = snapshotToArray(resp);
            console.log(this.chats);
            setTimeout(() => {
                if (this.offStatus === false) {
                    this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    ngOnInit() {
    }
    sendMessage() {
        const newData = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        newData.set({
            type: this.data.type,
            user: this.data.displayName,
            message: this.data.message,
            sendDate: Date()
        });
        this.data.message = '';
    }
    exitChat() {
        /*const exitData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
          type: 'exit',
          user: this.displayName,
          message: this.displayName + ' has exited this room.',
          sendDate: Date()
        });
        this.offStatus = true;
    
        const navExtras: NavigationExtras = {
          queryParams: {
            displayName: this.displayName
          }
        };*/
        this.router.navigate(['/']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], HomePage.prototype, "content", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/chat/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/chat/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-chat-home-home-module-es2015.js.map