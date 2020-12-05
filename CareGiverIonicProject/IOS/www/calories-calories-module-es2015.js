(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calories-calories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vital/calories/calories.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vital/calories/calories.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/vital\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Calories</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding><br>\r\n  <ion-row row-1>\r\n    <!--<ion-title (click)=\"getData(yesterday)\">Yesterday</ion-title>\r\n    <ion-title (click)=\"getData(today)\" style=\"text-align: right;\">Today</ion-title>-->\r\n  </ion-row>\r\n  <ion-grid class=\"alignAll\">\r\n  <ion-card class=\"welcome-card\">\r\n      <ion-title style=\"color: black;\">Calories Burn:</ion-title>\r\n      <ion-list>\r\n        <!--<p>Date: {{calendarDate}}</p>-->\r\n        <p>Active Calories: {{activeKilocalories}} calories</p>\r\n        <p>Rest Calories: {{bmrKilocalories}} calories</p>\r\n        <p>Total Calories: {{totalKilocalories}} calories</p>\r\n      </ion-list>\r\n  </ion-card>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n          <ion-card-title>Calories Rate Change</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #barChart></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/vital/calories/calories-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/vital/calories/calories-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CaloriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPageRoutingModule", function() { return CaloriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calories.page */ "./src/app/home/vital/calories/calories.page.ts");




const routes = [
    {
        path: '',
        component: _calories_page__WEBPACK_IMPORTED_MODULE_3__["CaloriesPage"]
    }
];
let CaloriesPageRoutingModule = class CaloriesPageRoutingModule {
};
CaloriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CaloriesPageRoutingModule);



/***/ }),

/***/ "./src/app/home/vital/calories/calories.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/vital/calories/calories.module.ts ***!
  \********************************************************/
/*! exports provided: CaloriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPageModule", function() { return CaloriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calories-routing.module */ "./src/app/home/vital/calories/calories-routing.module.ts");
/* harmony import */ var _calories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calories.page */ "./src/app/home/vital/calories/calories.page.ts");







let CaloriesPageModule = class CaloriesPageModule {
};
CaloriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaloriesPageRoutingModule"]
        ],
        declarations: [_calories_page__WEBPACK_IMPORTED_MODULE_6__["CaloriesPage"]]
    })
], CaloriesPageModule);



/***/ }),

/***/ "./src/app/home/vital/calories/calories.page.scss":
/*!********************************************************!*\
  !*** ./src/app/home/vital/calories/calories.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n  color: white;\n}\n\nion-list {\n  background: rgba(0, 0, 255, 0);\n  color: black;\n}\n\np {\n  font-size: larger;\n  margin-left: 20px;\n}\n\n.welcome-card {\n  max-width: 40em;\n  margin: 0 auto;\n}\n\nion-grid.alignAll {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92aXRhbC9jYWxvcmllcy9GOlxcSW9uaWNQcm9qZWN0XFxHaXRcXENhcmVHaXZlclxcQ2FyZUdpdmVySW9uaWNQcm9qZWN0L3NyY1xcYXBwXFxob21lXFx2aXRhbFxcY2Fsb3JpZXNcXGNhbG9yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS92aXRhbC9jYWxvcmllcy9jYWxvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ZpdGFsL2NhbG9yaWVzL2NhbG9yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JvdGFuaWNhLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7IC8vIHVybCguLi8uLi8uLi8uLi9hc3NldHMvdG9vbGJhci5qcGcpIDAgMC8xMDAlIDEwMCUgcmVwZWF0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJke1xyXG4gIG1heC13aWR0aDogNDBlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5pb24tZ3JpZC5hbGlnbkFsbHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndlbGNvbWUtY2FyZCB7XG4gIG1heC13aWR0aDogNDBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1ncmlkLmFsaWduQWxsIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/vital/calories/calories.page.ts":
/*!******************************************************!*\
  !*** ./src/app/home/vital/calories/calories.page.ts ***!
  \******************************************************/
/*! exports provided: CaloriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriesPage", function() { return CaloriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _garmin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../garmin.service */ "./src/app/garmin.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");







let CaloriesPage = class CaloriesPage {
    constructor(user, garmin, afAuth, auth) {
        this.user = user;
        this.garmin = garmin;
        this.afAuth = afAuth;
        this.auth = auth;
        this.activeKilocalories = 0;
        this.bmrKilocalories = 0;
        this.totalKilocalories = 0;
        this.firebaseAuth = afAuth;
        let gId;
        gId = this.user.garminId;
        this.showData(gId);
        console.log('garminId', gId);
    }
    ngOnInit() {
    }
    showData(garminId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let garminData;
            if (garminId) {
                this.garmin.getGarminDataset(garminId).subscribe(data => {
                    garminData = data;
                    const dailiesDataset = [];
                    if (garminData) {
                        const caloriesData = [];
                        const dateData = [];
                        for (const item of garminData) {
                            if (item) {
                                const caloriesItem = item.dailies;
                                if (caloriesItem) {
                                    dailiesDataset.push(item.dailies);
                                    caloriesData.push(item.dailies.activeKilocalories + item.dailies.bmrKilocalories);
                                    dateData.push(item.dailies.calendarDate);
                                }
                            }
                        }
                        this.createLineChart(caloriesData, dateData);
                    }
                    if (dailiesDataset.length > 0) {
                        const sortedDataSet = dailiesDataset.sort((a, b) => {
                            if (a.calendarDate < b.calendarDate) {
                                return 1;
                            }
                            else if (a.calendarDate > b.calendarDate) {
                                return -1;
                            }
                            else {
                                return 0;
                            }
                        });
                        this.calendarDate = sortedDataSet[0].calendarDate;
                        this.activeKilocalories = sortedDataSet[0].activeKilocalories;
                        this.bmrKilocalories = sortedDataSet[0].bmrKilocalories;
                        this.totalKilocalories = Number(this.activeKilocalories) + Number(this.bmrKilocalories);
                    }
                });
                // tslint:disable-next-line: only-arrow-functions
                setTimeout(function () {
                }, 1000, []);
            }
        });
    }
    createLineChart(dataset, date) {
        const labelData = [];
        // tslint:disable-next-line: forin
        for (const item in dataset) {
            labelData.push('');
        }
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                        label: 'Total Calories per Day',
                        data: dataset,
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'royalblue',
                        borderWidth: 1,
                    }]
            },
            options: {
                plugins: {
                    filler: {
                        propagate: true
                    }
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
};
CaloriesPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CaloriesPage.prototype, "barChart", void 0);
CaloriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calories',
        template: __webpack_require__(/*! raw-loader!./calories.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/vital/calories/calories.page.html"),
        styles: [__webpack_require__(/*! ./calories.page.scss */ "./src/app/home/vital/calories/calories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _garmin_service__WEBPACK_IMPORTED_MODULE_3__["GarminService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        src_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], CaloriesPage);



/***/ })

}]);
//# sourceMappingURL=calories-calories-module-es2015.js.map