(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-chat-home-home-module"],{

/***/ "./node_modules/Firebase/dist/index.cjs.js":
/*!*************************************************!*\
  !*** ./node_modules/Firebase/dist/index.cjs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
__webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.js");
__webpack_require__(/*! @firebase/database */ "./node_modules/@firebase/database/dist/index.cjs.js");
__webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
__webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
__webpack_require__(/*! @firebase/messaging */ "./node_modules/@firebase/messaging/dist/index.esm.js");
__webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");
__webpack_require__(/*! @firebase/performance */ "./node_modules/@firebase/performance/dist/index.cjs.js");
__webpack_require__(/*! @firebase/analytics */ "./node_modules/@firebase/analytics/dist/index.esm.js");
__webpack_require__(/*! @firebase/remote-config */ "./node_modules/@firebase/remote-config/dist/index.cjs.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

var name = "firebase";
var version = "7.21.0";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase__default['default'].registerVersion(name, version, 'app');

var name$1 = "firebase";
var version$1 = "7.21.0";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");
firebase__default['default'].registerVersion(name$1, version$1);

module.exports = firebase__default['default'];
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chat/home/home.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chat/home/home.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"exitChat()\">\r\n        <ion-icon name=\"exit\"></ion-icon> Exit\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Care Giver Chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding #content>\r\n  <ion-list>\r\n    <ion-grid *ngFor=\"let chat of chats\" no-lines>\r\n      <div class=\"chat-status\" text-center *ngIf=\"chat.type==='join'||chat.type==='exit';else message\">\r\n        <span class=\"chat-date\">{{chat.sendDate | date:'short'}}</span>\r\n        <span class=\"chat-content-center\">{{chat.message}}</span>\r\n      </div>\r\n      <ng-template #message>\r\n        <div class=\"chat-message\" text-right *ngIf=\"chat.user === displayName\">\r\n          <div class=\"right-bubble\">\r\n            <span class=\"msg-name\">Me</span>\r\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\r\n            <p text-wrap>{{chat.message}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"chat-message\" text-left *ngIf=\"chat.user !== displayName\">\r\n          <div class=\"left-bubble\">\r\n            <span class=\"msg-name\">{{(chat.user)}}</span>\r\n            <span class=\"msg-date\">{{chat.sendDate | date:'short'}}</span>\r\n            <p text-wrap>{{chat.message}}</p>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"footer\">\r\n    <ion-row align-items-center no-padding>\r\n      <ion-col col-10>\r\n          <textarea autosize maxRows=\"5\" type=\"text\" placeholder=\"Type a message\"\r\n                    [(ngModel)]=\"data.message\" name=\"message\" class=\"msg-input\"></textarea>\r\n      </ion-col> &nbsp;&nbsp;\r\n      <ion-fab-button fill=\"clear\" color=\"rgba(255, 0, 0, 0)\"\r\n                      style=\"color: rgba(255, 0, 0, 0); margin-right: 30px;\"\r\n                      [disabled]=\"data.message === ''\" (click)=\"sendMessage()\">\r\n        <ion-icon name=\"paper-plane\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n  \r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/chat/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/chat/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/chat/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/chat/home/home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/home/chat/home/home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(186, 186, 248, 0);\n}\n\nion-footer ion-toolbar.footer {\n  height: 80px;\n  --background: rgb(214, 228, 189);\n}\n\nion-footer ion-icon {\n  color: green;\n}\n\n.msg-input {\n  height: 60px;\n  width: 90%;\n  border: 1px solid vat(--ion-color-medium);\n  border-radius: 10px;\n  background: white;\n  color: black;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chat-status {\n  min-height: 49px;\n}\n\n.chat-status .chat-date {\n  display: block;\n  font-size: 10px;\n  font-style: italic;\n  color: black;\n  height: 15px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-status .chat-content-center {\n  padding: 5px 10px;\n  background-color: #e5d4ec;\n  border-radius: 6px;\n  font-size: 12px;\n  color: black;\n  height: 34px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-message {\n  width: 50%;\n  min-height: 50px;\n}\n\n.chat-message .right-bubble {\n  position: relative;\n  background: #0000004b;\n  color: white;\n  border-top-left-radius: 0.4em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n  padding: 5px 10px 10px;\n  left: 90%;\n}\n\n.chat-message .right-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .right-bubble span.msg-date {\n  font-size: 10px;\n  color: black;\n}\n\n.chat-message .right-bubble:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-left-color: #0000004b;\n  border-right: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-right: -27px;\n}\n\n.chat-message .left-bubble {\n  position: relative;\n  background: #3cb7ff70;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  left: 10%;\n}\n\n.chat-message .left-bubble span.msg-name {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.chat-message .left-bubble span.msg-date {\n  font-size: 10px;\n}\n\n.chat-message .left-bubble:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-right-color: #3cb7ff70;\n  border-left: 0;\n  border-top: 0;\n  margin-top: 0px;\n  margin-left: -27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jaGF0L2hvbWUvRjpcXElvbmljUHJvamVjdFxcR2l0XFxDYXJlR2l2ZXJcXENhcmVHaXZlcklvbmljUHJvamVjdC9zcmNcXGFwcFxcaG9tZVxcY2hhdFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvY2hhdC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURHRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBREtBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNKSjs7QURRQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNMSjs7QURPSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNMTjs7QURRSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDTk47O0FEVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDVEo7O0FEV0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDVE47O0FEWUk7RUFDRSxlQUFBO0FDVk47O0FEY0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoYXQvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3doaXRlX2Zsb3dlci5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3doaXRlX2Zsb3dlci5qcGcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg2LCAxODYsIDI0OCwgMCk7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi10b29sYmFyLmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMTQsIDIyOCwgMTg5KTtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbn1cclxuXHJcbi5tc2ctaW5wdXQge1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhdCgtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0LXN0YXR1cyB7XHJcbiAgbWluLWhlaWdodDogNDlweDtcclxuXHJcbiAgLmNoYXQtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAvLyB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMHB4ICMyMjIsIDBweCAxcHggMHB4ICNhYWE7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtY29udGVudC1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkNGVjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gIC5yaWdodC1idWJibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjRlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41ZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XHJcbiAgICBsZWZ0OiA5MCU7XHJcblxyXG4gICAgc3Bhbi5tc2ctbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLm1zZy1kYXRlIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmlnaHQtYnViYmxlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwNGI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTI3cHg7XHJcbiAgfVxyXG5cclxuICAubGVmdC1idWJibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzNjYjdmZjcwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC40ZW07XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNGVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC40ZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG5cclxuICAgIHNwYW4ubXNnLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5tc2ctZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sZWZ0LWJ1YmJsZTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzNjYjdmZjcwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjdweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTg2LCAxODYsIDI0OCwgMCk7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMTQsIDIyOCwgMTg5KTtcbn1cbmlvbi1mb290ZXIgaW9uLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5tc2ctaW5wdXQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhdCgtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNoYXQtc3RhdHVzIHtcbiAgbWluLWhlaWdodDogNDlweDtcbn1cbi5jaGF0LXN0YXR1cyAuY2hhdC1kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTVweDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuLmNoYXQtc3RhdHVzIC5jaGF0LWNvbnRlbnQtY2VudGVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQ0ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzRweDtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuXG4uY2hhdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDRiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xuICBsZWZ0OiA5MCU7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jaGF0LW1lc3NhZ2UgLnJpZ2h0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA0YjtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogLTI3cHg7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzNjYjdmZjcwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC40ZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNGVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40ZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XG4gIGxlZnQ6IDEwJTtcbn1cbi5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlIHNwYW4ubXNnLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMzY2I3ZmY3MDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/dist/index.cjs.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");







var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
var HomePage = /** @class */ (function () {
    function HomePage(Aroute, router, user, auth) {
        var _this = this;
        this.Aroute = Aroute;
        this.router = router;
        this.user = user;
        this.auth = auth;
        this.data = { type: '', displayName: '', message: '' };
        this.chats = [];
        this.roomkey = null;
        this.displayName = null;
        var uid = this.auth.cUid;
        this.displayName = this.user.displayName;
        console.log('dispname', this.displayName);
        this.roomkey = 'chatroom';
        this.offStatus = false;
        this.data.type = 'message';
        this.data.displayName = this.displayName;
        var joinData = Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        joinData.set({
            type: 'join',
            user: this.displayName,
            message: this.displayName + ' has joined this room.',
            sendDate: Date()
        });
        this.data.message = '';
        Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', function (resp) {
            _this.chats = [];
            _this.chats = snapshotToArray(resp);
            console.log(_this.chats);
            setTimeout(function () {
                if (_this.offStatus === false) {
                    _this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.sendMessage = function () {
        var newData = Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        newData.set({
            type: this.data.type,
            user: this.data.displayName,
            message: this.data.message,
            sendDate: Date()
        });
        this.data.message = '';
    };
    HomePage.prototype.exitChat = function () {
        var exitData = Firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
            type: 'exit',
            user: this.displayName,
            message: this.displayName + ' has exited this room.',
            sendDate: Date()
        });
        this.offStatus = true;
        var navExtras = {
            queryParams: {
                displayName: this.displayName
            }
        };
        this.router.navigate(['/'], navExtras);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
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
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-chat-home-home-module-es5.js.map