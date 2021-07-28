(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-nearby-nearby-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/nearby/nearby.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/nearby/nearby.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/resource']\" style=\"color: white;\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Find Your Nearby</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item><b class=\"zip\">Enter Zip Code:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-input [(ngModel)]= 'zip_code' placeholder=\"zip_code\"></ion-input>\n  </ion-item>\n\n  <ion-item><b class=\"zip\">Select Place:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-select interface=\"popover\" placeholder=\"Select Place\" [(ngModel)]=\"placeToSearch\">\n      <ion-select-option value=\"pharmacy,drugstore\">Pharmacy</ion-select-option>\n      <ion-select-option value=\"hospital\">Hospital</ion-select-option>\n      <ion-select-option value=\"social security office\">Social security office</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <section>\n    <ion-button (click)=\"zipToLocation()\" color=\"rgb(7, 156, 161)\"\n                style=\"background-color: rgb(7, 156, 161); margin-left: 25px;\">Search\n    </ion-button>\n  </section>\n  <ion-list class=\"zip\">\n    <ion-list-header>\n      <h1>Places Nearby</h1>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let place of placesResult\">\n      <ion-label>\n        <h2>Name:     {{place.name}}</h2>\n        <h3>Status:   {{place.business_status}}</h3>\n        <h3>Rating:   {{place.rating}}</h3>\n        <h3>Vicinity: {{place.vicinity}}</h3>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/nearby/nearby-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/nearby/nearby-routing.module.ts ***!
  \******************************************************/
/*! exports provided: NearbyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageRoutingModule", function() { return NearbyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nearby_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nearby.page */ "./src/app/home/nearby/nearby.page.ts");




const routes = [
    {
        path: '',
        component: _nearby_page__WEBPACK_IMPORTED_MODULE_3__["NearbyPage"]
    }
];
let NearbyPageRoutingModule = class NearbyPageRoutingModule {
};
NearbyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NearbyPageRoutingModule);



/***/ }),

/***/ "./src/app/home/nearby/nearby.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/nearby/nearby.module.ts ***!
  \**********************************************/
/*! exports provided: NearbyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageModule", function() { return NearbyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nearby_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nearby-routing.module */ "./src/app/home/nearby/nearby-routing.module.ts");
/* harmony import */ var _nearby_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nearby.page */ "./src/app/home/nearby/nearby.page.ts");







let NearbyPageModule = class NearbyPageModule {
};
NearbyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nearby_routing_module__WEBPACK_IMPORTED_MODULE_5__["NearbyPageRoutingModule"]
        ],
        declarations: [_nearby_page__WEBPACK_IMPORTED_MODULE_6__["NearbyPage"]]
    })
], NearbyPageModule);



/***/ }),

/***/ "./src/app/home/nearby/nearby.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/nearby/nearby.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0);\n  color: black;\n}\n\nion-list {\n  background: rgba(255, 255, 255, 0);\n}\n\n.zip {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L0NhcmVHaXZlci9DYXJlR2l2ZXJJb25pY1Byb2plY3QvSU9TL3NyYy9hcHAvaG9tZS9uZWFyYnkvbmVhcmJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9uZWFyYnkvbmVhcmJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0NBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL25lYXJieS9uZWFyYnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvcmVzb3VyY2VzLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICB9XG4gIFxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuICBcbiAgLnppcHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNywgMTU2LCAxNjEpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLnppcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/nearby/nearby.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/nearby/nearby.page.ts ***!
  \********************************************/
/*! exports provided: NearbyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPage", function() { return NearbyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NearbyPage = class NearbyPage {
    constructor(http) {
        this.placesResult = [{ name: 'Empty List.' }];
        this.httpClient = http;
    }
    ngOnInit() {
    }
    getPlacesNearby(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const proxyurl = 'https://thingproxy.freeboard.io/fetch/';
            const result = yield fetch(proxyurl + url); // https://thingproxy.freeboard.io/fetch/https://example.com
            return yield result.json();
        });
    }
    searchByZipcode(location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (location && this.placeToSearch) {
                const zipcode = location;
                console.log('zip', zipcode);
                const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + zipcode + '&rankby=distance&type=' + this.placeToSearch + '&keyword=' + this.placeToSearch + '&key=AIzaSyASG6Rf4ZdWJI7Vcc2xLNcaZGCRa7BQaE0';
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
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.zip_code + '&key=AIzaSyASG6Rf4ZdWJI7Vcc2xLNcaZGCRa7BQaE0';
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
NearbyPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NearbyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nearby',
        template: __webpack_require__(/*! raw-loader!./nearby.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/nearby/nearby.page.html"),
        styles: [__webpack_require__(/*! ./nearby.page.scss */ "./src/app/home/nearby/nearby.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NearbyPage);



/***/ })

}]);
//# sourceMappingURL=home-nearby-nearby-module-es2015.js.map