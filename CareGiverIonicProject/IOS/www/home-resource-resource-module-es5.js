(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-resource-resource-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/resource/resource.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Resource page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item><b class=\"zip\">Enter Zip Code:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <ion-input [(ngModel)]= 'zip_code' placeholder=\"zip_code\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item><b class=\"zip\">Select Place:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <ion-select interface=\"popover\" placeholder=\"Select Place\" [(ngModel)]=\"placeToSearch\">\r\n      <ion-select-option value=\"pharmacy,drugstore\">Pharmacy</ion-select-option>\r\n      <ion-select-option value=\"hospital\">Hospital</ion-select-option>\r\n      <ion-select-option value=\"social security office\">Social security office</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <section>\r\n    <ion-button (click)=\"zipToLocation()\" color=\"rgb(7, 156, 161)\"\r\n                style=\"background-color: rgb(7, 156, 161); margin-left: 25px;\">Search\r\n    </ion-button>\r\n  </section>\r\n  <ion-list class=\"zip\">\r\n    <ion-list-header>\r\n      <h1>Places Nearby</h1>\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let place of placesResult\">\r\n      <ion-label>\r\n        <h2>Name:     {{place.name}}</h2>\r\n        <h3>Status:   {{place.business_status}}</h3>\r\n        <h3>Rating:   {{place.rating}}</h3>\r\n        <h3>Vicinity: {{place.vicinity}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n"

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

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n  color: black;\n}\n\nion-list {\n  background: rgba(255, 255, 255, 0);\n}\n\n.zip {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNvdXJjZS9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFxyZXNvdXJjZVxccmVzb3VyY2UucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3Jlc291cmNlL3Jlc291cmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jlc291cmNlL3Jlc291cmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Jlc291cmNlcy5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3Rvb2xiYXIuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi56aXB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi56aXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ResourcePage = /** @class */ (function () {
    function ResourcePage(http) {
        this.placesResult = [{ name: 'Empty List.' }];
        this.httpClient = http;
    }
    ResourcePage.prototype.ngOnInit = function () {
    };
    ResourcePage.prototype.getPlacesNearby = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proxyurl, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        proxyurl = 'https://cors-anywhere.herokuapp.com/';
                        return [4 /*yield*/, fetch(proxyurl + url)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2: // https://cors-anywhere.herokuapp.com/https://example.com
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResourcePage.prototype.searchByZipcode = function (location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var zipcode, url, placesFromSearch;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(location && this.placeToSearch)) return [3 /*break*/, 2];
                        zipcode = location;
                        console.log('zip', zipcode);
                        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + zipcode + '&rankby=distance&type=' + this.placeToSearch + '&keyword=' + this.placeToSearch + '&key=AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk';
                        return [4 /*yield*/, this.getPlacesNearby(url)];
                    case 1:
                        placesFromSearch = _a.sent();
                        if (String(placesFromSearch.status) === 'OK') {
                            this.placesResult = placesFromSearch.results.length > 0 ? placesFromSearch.results : [{ name: 'Got zero result.' }];
                            console.log(this.placesResult);
                        }
                        else {
                            this.placesResult = [{ name: 'Got No result.' }];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ResourcePage.prototype.zipToLocation = function () {
        var _this = this;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.zip_code + '&key=AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk';
        fetch(url).then(function (res) { return res.json(); })
            .then(function (res) {
            var objectData = [];
            objectData.push(res);
            var geo = objectData[0].results[0].geometry.location;
            var location = geo.lat + ',' + geo.lng;
            console.log('location', location);
            _this.searchByZipcode(location);
        });
    };
    ResourcePage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ResourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! raw-loader!./resource.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html"),
            styles: [__webpack_require__(/*! ./resource.page.scss */ "./src/app/home/resource/resource.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResourcePage);
    return ResourcePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-resource-resource-module-es5.js.map