(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-chat-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chat/home/home.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chat/home/home.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"exitChat()\" style=\"color: white;\">\n        <ion-icon name=\"exit\"></ion-icon> Exit\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Care Giver Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding #content>\n  <ion-list>\n    <ion-grid *ngFor=\"let chat of chats\" no-lines>\n      <div class=\"chat-status\" text-center *ngIf=\"chat.type==='join'||chat.type==='exit';else message\">\n        <span class=\"chat-date\">{{chat.sendDate | date:'short'}}</span>\n        <span class=\"chat-content-center\">{{chat.message}}</span>\n      </div>\n      <ng-template #message>\n        <div class=\"chat-message\" text-right *ngIf=\"chat.user === displayName\">\n          <div class=\"right-bubble\">\n            <span class=\"msg-name\">Me</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p text-wrap>{{chat.message}}</p>\n          </div>\n        </div>\n        <div class=\"chat-message\" text-left *ngIf=\"chat.user !== displayName\">\n          <div class=\"left-bubble\">\n            <span class=\"msg-name\">{{(chat.user)}}</span>\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\n            <p text-wrap>{{chat.message}}</p>\n          </div>\n        </div>\n      </ng-template>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer\">\n    <ion-row align-items-center no-padding>\n      <ion-col col-10>\n          <textarea autosize maxRows=\"5\" type=\"text\" placeholder=\"Type a message\"\n                    [(ngModel)]=\"data.message\" name=\"message\" class=\"msg-input\"></textarea>\n      </ion-col> &nbsp;&nbsp;\n      <ion-fab-button fill=\"clear\" color=\"rgba(255, 0, 0, 0)\"\n                      style=\"color: rgba(255, 0, 0, 0); margin-right: 30px;\"\n                      [disabled]=\"data.message === ''\" (click)=\"sendMessage()\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-fab-button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n  \n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(186, 186, 248, 0);\n}\n\nion-footer ion-toolbar.footer {\n  height: 80px;\n  --background: rgb(214, 228, 189);\n}\n\nion-footer ion-icon {\n  color: green;\n}\n\n.msg-input {\n  height: 60px;\n  width: 90%;\n  border: 1px solid vat(--ion-color-medium);\n  border-radius: 10px;\n  background: white;\n  color: black;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chat-status {\n  min-height: 49px;\n}\n\n.chat-status .chat-date {\n  display: block;\n  font-size: 10px;\n  font-style: italic;\n  color: black;\n  height: 15px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-status .chat-content-center {\n  padding: 5px 10px;\n  background-color: #e5d4ec;\n  border-radius: 6px;\n  font-size: 12px;\n  color: black;\n  height: 34px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-message {\n  width: 50%;\n  min-height: 50px;\n}\n\n.chat-message .right-bubble {\n  position: relative;\n  background: #0000004b;\n  color: white;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  padding: 5px 10px 10px;\n  left: 90%;\n}\n\n.chat-message .right-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .right-bubble span.msg-date {\n  font-size: 10px;\n  color: black;\n}\n\n.chat-message .right-bubble:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-left-color: #0000004b;\n  border-right: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-right: -27px;\n}\n\n.chat-message .left-bubble {\n  position: relative;\n  background: #3cb7ff70;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  left: 10%;\n}\n\n.chat-message .left-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .left-bubble span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .left-bubble:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-right-color: #3cb7ff70;\n  border-left: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-left: -27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvY2hhdC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2NoYXQvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FER0U7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNESjs7QURLQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSko7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDTEo7O0FET0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTE47O0FEUUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ05OOztBRFVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ1RKOztBRFdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1ROOztBRFlJO0VBQ0UsZUFBQTtBQ1ZOOztBRGNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jaGF0L2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvd2hpdGVfZmxvd2VyLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3doaXRlX2Zsb3dlci5qcGcpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxODYsIDE4NiwgMjQ4LCAwKTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi10b29sYmFyLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDIxNCwgMjI4LCAxODkpO1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxufVxuXG4ubXNnLWlucHV0IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXQoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjogYmxhY2s7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hhdC1zdGF0dXMge1xuICBtaW4taGVpZ2h0OiA0OXB4O1xuXG4gIC5jaGF0LWRhdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMHB4ICMyMjIsIDBweCAxcHggMHB4ICNhYWE7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDogMTAlO1xuICB9XG5cbiAgLmNoYXQtY29udGVudC1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWQ0ZWM7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGhlaWdodDogMzRweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgfVxufVxuXG4uY2hhdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNTBweDtcblxuICAucmlnaHQtYnViYmxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDRiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNGVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41ZW07XG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcbiAgICBsZWZ0OiA5MCU7XG5cbiAgICBzcGFuLm1zZy1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIHNwYW4ubXNnLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuXG4gIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDAwMDRiO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IC0wcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjdweDtcbiAgfVxuXG4gIC5sZWZ0LWJ1YmJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICMzY2I3ZmY3MDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjRlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNGVtO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XG4gICAgbGVmdDogMTAlO1xuXG4gICAgc3Bhbi5tc2ctbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICBzcGFuLm1zZy1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cblxuICAubGVmdC1idWJibGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzNjYjdmZjcwO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogLTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTI3cHg7XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4NiwgMTg2LCAyNDgsIDApO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyLmZvb3RlciB7XG4gIGhlaWdodDogODBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE0LCAyMjgsIDE4OSk7XG59XG5pb24tZm9vdGVyIGlvbi1pY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubXNnLWlucHV0IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXQoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGF0LXN0YXR1cyB7XG4gIG1pbi1oZWlnaHQ6IDQ5cHg7XG59XG4uY2hhdC1zdGF0dXMgLmNoYXQtZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbn1cbi5jaGF0LXN0YXR1cyAuY2hhdC1jb250ZW50LWNlbnRlciB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkNGVjO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuLmNoYXQtbWVzc2FnZSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA0YjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTtcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcbiAgbGVmdDogOTAlO1xufVxuLmNoYXQtbWVzc2FnZSAucmlnaHQtYnViYmxlIHNwYW4ubXNnLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNoYXQtbWVzc2FnZSAucmlnaHQtYnViYmxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDI3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwNGI7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yN3B4O1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzY2I3ZmY3MDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNGVtO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICBsZWZ0OiAxMCU7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGUgc3Bhbi5tc2ctZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjM2NiN2ZmNzA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjdweDtcbn0iXX0= */"

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
        const joinData = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        joinData.set({
            type: 'join',
            user: this.displayName,
            message: this.displayName + ' has joined this room.',
            sendDate: Date()
        });
        this.data.message = '';
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
        const exitData = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
            type: 'exit',
            user: this.displayName,
            message: this.displayName + ' has exited this room.',
            sendDate: Date()
        });
        this.offStatus = true;
        const navExtras = {
            queryParams: {
                displayName: this.displayName
            }
        };
        this.router.navigate(['/'], navExtras);
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