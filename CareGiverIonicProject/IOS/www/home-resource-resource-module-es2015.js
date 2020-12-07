(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-resource-resource-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/resource/resource.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/tabs/home']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Resource page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item><b class=\"zip\">Enter Zip Code:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-input [(ngModel)]= 'zip_code' placeholder=\"zip_code\"></ion-input>\n  </ion-item>\n\n  <ion-item><b class=\"zip\">Select Place:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-select interface=\"popover\" placeholder=\"Select Place\" [(ngModel)]=\"placeToSearch\">\n      <ion-select-option value=\"pharmacy,drugstore\">Pharmacy</ion-select-option>\n      <ion-select-option value=\"hospital\">Hospital</ion-select-option>\n      <ion-select-option value=\"social security office\">Social security office</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <section>\n    <ion-button (click)=\"zipToLocation()\" color=\"rgb(7, 156, 161)\"\n                style=\"background-color: rgb(7, 156, 161); margin-left: 25px;\">Search\n    </ion-button>\n  </section>\n  <ion-list class=\"zip\">\n    <ion-list-header>\n      <h1>Places Nearby</h1>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let place of placesResult\">\n      <ion-label>\n        <h2>Name:     {{place.name}}</h2>\n        <h3>Status:   {{place.business_status}}</h3>\n        <h3>Rating:   {{place.rating}}</h3>\n        <h3>Vicinity: {{place.vicinity}}</h3>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resource_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.page */ "./src/app/home/resource/resource.page.ts");




const routes = [
    {
        path: '',
        component: _resource_page__WEBPACK_IMPORTED_MODULE_3__["ResourcePage"]
    }
];
let ResourcePageRoutingModule = class ResourcePageRoutingModule {
};
ResourcePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResourcePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resource_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-routing.module */ "./src/app/home/resource/resource-routing.module.ts");
/* harmony import */ var _resource_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource.page */ "./src/app/home/resource/resource.page.ts");







let ResourcePageModule = class ResourcePageModule {
};
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



/***/ }),

/***/ "./src/app/home/resource/resource.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/resource/resource.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n  color: black;\n}\n\nion-list {\n  background: rgba(255, 255, 255, 0);\n}\n\n.zip {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvcmVzb3VyY2UvcmVzb3VyY2UucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3Jlc291cmNlL3Jlc291cmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jlc291cmNlL3Jlc291cmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZXMuanBnKSAwIDAvMTAwJSAxMDAlIHJlcGVhdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi56aXB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLnppcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ResourcePage = class ResourcePage {
    constructor(http) {
        this.placesResult = [{ name: 'Empty List.' }];
        this.httpClient = http;
    }
    ngOnInit() {
    }
    getPlacesNearby(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            const result = yield fetch(proxyurl + url); // https://cors-anywhere.herokuapp.com/https://example.com
            return yield result.json();
        });
    }
    searchByZipcode(location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (location && this.placeToSearch) {
                const zipcode = location;
                console.log('zip', zipcode);
                const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + zipcode + '&rankby=distance&type=' + this.placeToSearch + '&keyword=' + this.placeToSearch + '&key=AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk';
                const placesFromSearch = yield this.getPlacesNearby(url);
                if (String(placesFromSearch.status) === 'OK') {
                    this.placesResult = placesFromSearch.results.length > 0 ? placesFromSearch.results : [{ name: 'Got zero result.' }];
                    console.log(this.placesResult);
                }
                else {
                    this.placesResult = [{ name: 'Got No result.' }];
                }
            }
        });
    }
    zipToLocation() {
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.zip_code + '&key=AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk';
        fetch(url).then(res => res.json())
            .then(res => {
            const objectData = [];
            objectData.push(res);
            const geo = objectData[0].results[0].geometry.location;
            const location = geo.lat + ',' + geo.lng;
            console.log('location', location);
            this.searchByZipcode(location);
        });
    }
};
ResourcePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource',
        template: __webpack_require__(/*! raw-loader!./resource.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/resource/resource.page.html"),
        styles: [__webpack_require__(/*! ./resource.page.scss */ "./src/app/home/resource/resource.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ResourcePage);



/***/ })

}]);
//# sourceMappingURL=home-resource-resource-module-es2015.js.map