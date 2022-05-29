(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~home-profile-profile-module"],{

/***/ "./node_modules/@angular/fire/database/es2015/database.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/database.js ***!
  \****************************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL, DATABASE_URL, URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return AngularFireDatabase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/es2015/utils.js");
/* harmony import */ var _list_create_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/create-reference */ "./node_modules/@angular/fire/database/es2015/list/create-reference.js");
/* harmony import */ var _object_create_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object/create-reference */ "./node_modules/@angular/fire/database/es2015/object/create-reference.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _angular_fire__WEBPACK_IMPORTED_MODULE_4__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return _angular_fire__WEBPACK_IMPORTED_MODULE_4__["DATABASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _angular_fire__WEBPACK_IMPORTED_MODULE_4__["DATABASE_URL"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let AngularFireDatabase = class AngularFireDatabase {
    constructor(options, nameOrConfig, databaseURL, platformId, zone) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers, platformId);
        this.database = zone.runOutsideAngular(() => {
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["_firebaseAppFactory"])(options, zone, nameOrConfig);
            return app.database(databaseURL || undefined);
        });
    }
    list(pathOrRef, queryFn) {
        const ref = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRef"])(this.database, pathOrRef);
        let query = ref;
        if (queryFn) {
            query = queryFn(ref);
        }
        return Object(_list_create_reference__WEBPACK_IMPORTED_MODULE_2__["createListReference"])(query, this);
    }
    object(pathOrRef) {
        const ref = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRef"])(this.database, pathOrRef);
        return Object(_object_create_reference__WEBPACK_IMPORTED_MODULE_3__["createObjectReference"])(ref, this);
    }
    createPushId() {
        return this.database.ref().push().key;
    }
};
AngularFireDatabase = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"])),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"])),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["DATABASE_URL"])),
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object, Object, Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
], AngularFireDatabase);


//# sourceMappingURL=database.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/database.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/database.module.js ***!
  \***********************************************************************/
/*! exports provided: AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return AngularFireDatabaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./node_modules/@angular/fire/database/es2015/database.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AngularFireDatabaseModule = class AngularFireDatabaseModule {
};
AngularFireDatabaseModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        providers: [_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]]
    })
], AngularFireDatabaseModule);

//# sourceMappingURL=database.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/index.js ***!
  \*************************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL, DATABASE_URL, URL, listChanges, createListReference, snapshotChanges, stateChanges, auditTrail, fromRef, AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/database/es2015/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DATABASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["createListReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["stateChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["auditTrail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabaseModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/audit-trail.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/audit-trail.js ***!
  \************************************************************************/
/*! exports provided: auditTrail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return auditTrail; });
/* harmony import */ var _state_changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-changes */ "./node_modules/@angular/fire/database/es2015/list/state-changes.js");
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



function auditTrail(query, events, scheduler) {
    const auditTrail$ = Object(_state_changes__WEBPACK_IMPORTED_MODULE_0__["stateChanges"])(query, events)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((current, action) => [...current, action], []));
    return waitForLoaded(query, auditTrail$, scheduler);
}
function loadedData(query, scheduler) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_1__["fromRef"])(query, 'value', 'on', scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
        let lastKeyToLoad;
        data.payload.forEach(child => {
            lastKeyToLoad = child.key;
            return false;
        });
        return { data, lastKeyToLoad };
    }));
}
function waitForLoaded(query, action$, scheduler) {
    const loaded$ = loadedData(query, scheduler);
    return loaded$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(action$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([loaded, actions]) => {
        let lastKeyToLoad = loaded.lastKeyToLoad;
        const loadedKeys = actions.map(snap => snap.key);
        return { actions, lastKeyToLoad, loadedKeys };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(meta => meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(meta => meta.actions));
}
//# sourceMappingURL=audit-trail.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/changes.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/changes.js ***!
  \********************************************************************/
/*! exports provided: listChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return listChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/es2015/utils.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




function listChanges(ref, events, scheduler) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(ref, 'value', 'once', scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(snapshotAction => {
        const childEvent$ = [Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(snapshotAction)];
        events.forEach(event => childEvent$.push(Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(ref, event, 'on', scheduler)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...childEvent$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(buildView, []));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
}
function positionFor(changes, key) {
    const len = changes.length;
    for (let i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
function positionAfter(changes, prevKey) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isNil"])(prevKey)) {
        return 0;
    }
    else {
        const i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
function buildView(current, action) {
    const { payload, type, prevKey, key } = action;
    const currentKeyPosition = positionFor(current, key);
    const afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                let prevKey = null;
                action.payload.forEach(payload => {
                    const action = { payload, type: 'value', prevKey, key: payload.key };
                    prevKey = payload.key;
                    current = [...current, action];
                    return false;
                });
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                const previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) != prevKey) {
                    current = current.filter(x => x.payload.key !== payload.key);
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action, ...current];
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter(x => x.payload.key !== payload.key);
        case 'child_changed':
            return current.map(x => x.payload.key === key ? action : x);
        case 'child_moved':
            if (currentKeyPosition > -1) {
                const data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        default:
            return current;
    }
}
//# sourceMappingURL=changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/create-reference.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/create-reference.js ***!
  \*****************************************************************************/
/*! exports provided: createListReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return createListReference; });
/* harmony import */ var _snapshot_changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snapshot-changes */ "./node_modules/@angular/fire/database/es2015/list/snapshot-changes.js");
/* harmony import */ var _state_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-changes */ "./node_modules/@angular/fire/database/es2015/list/state-changes.js");
/* harmony import */ var _audit_trail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-trail */ "./node_modules/@angular/fire/database/es2015/list/audit-trail.js");
/* harmony import */ var _data_operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-operation */ "./node_modules/@angular/fire/database/es2015/list/data-operation.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove */ "./node_modules/@angular/fire/database/es2015/list/remove.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






function createListReference(query, afDatabase) {
    const outsideAngularScheduler = afDatabase.schedulers.outsideAngular;
    return {
        query,
        update: Object(_data_operation__WEBPACK_IMPORTED_MODULE_3__["createDataOperationMethod"])(query.ref, 'update'),
        set: Object(_data_operation__WEBPACK_IMPORTED_MODULE_3__["createDataOperationMethod"])(query.ref, 'set'),
        push: (data) => query.ref.push(data),
        remove: Object(_remove__WEBPACK_IMPORTED_MODULE_4__["createRemoveMethod"])(query.ref),
        snapshotChanges(events) {
            return Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"])(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        stateChanges(events) {
            return Object(_state_changes__WEBPACK_IMPORTED_MODULE_1__["stateChanges"])(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        auditTrail(events) {
            return Object(_audit_trail__WEBPACK_IMPORTED_MODULE_2__["auditTrail"])(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        valueChanges(events) {
            const snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"])(query, events, outsideAngularScheduler);
            return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => actions.map(a => a.payload.val())));
        }
    };
}
//# sourceMappingURL=create-reference.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/data-operation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/data-operation.js ***!
  \***************************************************************************/
/*! exports provided: createDataOperationMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataOperationMethod", function() { return createDataOperationMethod; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/es2015/utils.js");

function createDataOperationMethod(ref, operation) {
    return function dataOperation(item, value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkOperationCases"])(item, {
            stringCase: () => ref.child(item)[operation](value),
            firebaseCase: () => item[operation](value),
            snapshotCase: () => item.ref[operation](value)
        });
    };
}
//# sourceMappingURL=data-operation.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/remove.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/remove.js ***!
  \*******************************************************************/
/*! exports provided: createRemoveMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRemoveMethod", function() { return createRemoveMethod; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/es2015/utils.js");

function createRemoveMethod(ref) {
    return function remove(item) {
        if (!item) {
            return ref.remove();
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkOperationCases"])(item, {
            stringCase: () => ref.child(item).remove(),
            firebaseCase: () => item.remove(),
            snapshotCase: () => item.ref.remove()
        });
    };
}
//# sourceMappingURL=remove.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/snapshot-changes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/snapshot-changes.js ***!
  \*****************************************************************************/
/*! exports provided: snapshotChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return snapshotChanges; });
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changes */ "./node_modules/@angular/fire/database/es2015/list/changes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/es2015/list/utils.js");


function snapshotChanges(query, events, scheduler) {
    events = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["validateEventsArray"])(events);
    return Object(_changes__WEBPACK_IMPORTED_MODULE_0__["listChanges"])(query, events, scheduler);
}
//# sourceMappingURL=snapshot-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/state-changes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/state-changes.js ***!
  \**************************************************************************/
/*! exports provided: stateChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return stateChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/es2015/list/utils.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



function stateChanges(query, events, scheduler) {
    events = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["validateEventsArray"])(events);
    const childEvent$ = events.map(event => Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(query, event, 'on', scheduler));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...childEvent$);
}
//# sourceMappingURL=state-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/list/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/list/utils.js ***!
  \******************************************************************/
/*! exports provided: validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/es2015/utils.js");

function validateEventsArray(events) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNil"])(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/object/create-reference.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/object/create-reference.js ***!
  \*******************************************************************************/
/*! exports provided: createObjectReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectReference", function() { return createObjectReference; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _snapshot_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snapshot-changes */ "./node_modules/@angular/fire/database/es2015/object/snapshot-changes.js");


function createObjectReference(query, afDatabase) {
    return {
        query,
        snapshotChanges() {
            return Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_1__["createObjectSnapshotChanges"])(query, afDatabase.schedulers.outsideAngular)().pipe(afDatabase.keepUnstableUntilFirst);
        },
        update(data) { return query.ref.update(data); },
        set(data) { return query.ref.set(data); },
        remove() { return query.ref.remove(); },
        valueChanges() {
            const snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_1__["createObjectSnapshotChanges"])(query, afDatabase.schedulers.outsideAngular)();
            return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(action => action.payload.exists() ? action.payload.val() : null));
        },
    };
}
//# sourceMappingURL=create-reference.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/object/snapshot-changes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/object/snapshot-changes.js ***!
  \*******************************************************************************/
/*! exports provided: createObjectSnapshotChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectSnapshotChanges", function() { return createObjectSnapshotChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js");

function createObjectSnapshotChanges(query, scheduler) {
    return function snapshotChanges() {
        return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(query, 'value', 'on', scheduler);
    };
}
//# sourceMappingURL=snapshot-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/observable/fromRef.js ***!
  \**************************************************************************/
/*! exports provided: fromRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


function fromRef(ref, event, listenType = 'on', scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let fn = null;
        fn = ref[listenType](event, (snapshot, prevKey) => {
            scheduler.schedule(() => {
                subscriber.next({ snapshot, prevKey });
            });
            if (listenType == 'once') {
                scheduler.schedule(() => subscriber.complete());
            }
        }, err => {
            scheduler.schedule(() => subscriber.error(err));
        });
        if (listenType == 'on') {
            return {
                unsubscribe() {
                    if (fn != null) {
                        ref.off(event, fn);
                    }
                }
            };
        }
        else {
            return { unsubscribe() { } };
        }
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(payload => {
        const { snapshot, prevKey } = payload;
        let key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey, key };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
}
//# sourceMappingURL=fromRef.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/public_api.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/public_api.js ***!
  \******************************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL, DATABASE_URL, URL, listChanges, createListReference, snapshotChanges, stateChanges, auditTrail, fromRef, AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./node_modules/@angular/fire/database/es2015/database.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["DATABASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["URL"]; });

/* harmony import */ var _list_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/changes */ "./node_modules/@angular/fire/database/es2015/list/changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return _list_changes__WEBPACK_IMPORTED_MODULE_1__["listChanges"]; });

/* harmony import */ var _list_create_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/create-reference */ "./node_modules/@angular/fire/database/es2015/list/create-reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return _list_create_reference__WEBPACK_IMPORTED_MODULE_2__["createListReference"]; });

/* harmony import */ var _list_snapshot_changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/snapshot-changes */ "./node_modules/@angular/fire/database/es2015/list/snapshot-changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return _list_snapshot_changes__WEBPACK_IMPORTED_MODULE_3__["snapshotChanges"]; });

/* harmony import */ var _list_state_changes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/state-changes */ "./node_modules/@angular/fire/database/es2015/list/state-changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return _list_state_changes__WEBPACK_IMPORTED_MODULE_4__["stateChanges"]; });

/* harmony import */ var _list_audit_trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/audit-trail */ "./node_modules/@angular/fire/database/es2015/list/audit-trail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return _list_audit_trail__WEBPACK_IMPORTED_MODULE_5__["auditTrail"]; });

/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observable/fromRef */ "./node_modules/@angular/fire/database/es2015/observable/fromRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__["fromRef"]; });

/* harmony import */ var _database_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database.module */ "./node_modules/@angular/fire/database/es2015/database.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return _database_module__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"]; });









//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/es2015/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/fire/database/es2015/utils.js ***!
  \*************************************************************/
/*! exports provided: isString, isFirebaseDataSnapshot, isNil, isFirebaseRef, getRef, checkOperationCases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirebaseDataSnapshot", function() { return isFirebaseDataSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirebaseRef", function() { return isFirebaseRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOperationCases", function() { return checkOperationCases; });
function isString(value) {
    return typeof value === 'string';
}
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
function isNil(obj) {
    return obj === undefined || obj === null;
}
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
function getRef(database, pathRef) {
    return isFirebaseRef(pathRef) ? pathRef
        : database.ref(pathRef);
}
function checkOperationCases(item, cases) {
    if (isString(item)) {
        return cases.stringCase();
    }
    else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
    }
    else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
    }
    throw new Error(`Expects a string, snapshot, or reference. Got: ${typeof item}`);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/firebase/database/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/firebase/database/dist/index.esm.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/database */ "./node_modules/firebase/node_modules/@firebase/database/dist/index.cjs.js");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=default~home-home-module~home-profile-profile-module-es2015.js.map