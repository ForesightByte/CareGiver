(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js ***!
  \*********************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
    return CircleProgressOptions;
}());
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = function () {
            _this.applyOptions();
            if (_this.options.lazy) {
                // Draw svg if it doesn't exist
                _this.svgElement === null && _this.draw(_this._lastPercent);
                // Draw it only when it's in the viewport
                if (_this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (_this.options.animation && _this.options.animationDuration > 0) {
                        _this.animate(_this._lastPercent, _this.options.percent);
                    }
                    else {
                        _this.draw(_this.options.percent);
                    }
                    _this._lastPercent = _this.options.percent;
                }
            }
            else {
                if (_this.options.animation && _this.options.animationDuration > 0) {
                    _this.animate(_this._lastPercent, _this.options.percent);
                }
                else {
                    _this.draw(_this.options.percent);
                }
                _this._lastPercent = _this.options.percent;
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            var _a, _b, e_1, _c, e_2, _d;
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.options.clockwise ? [1, 1] : [1, 0], 2), largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.options.clockwise ? [0, 1] : [0, 0], 2), largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                fontWeight: _this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(formatted);
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.options.title);
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                fontWeight: _this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(formatted);
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.options.subtitle);
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                fontWeight: _this.options.unitsFontWeight,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var rowCount = 0, rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                try {
                    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(title.texts), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var span = _f.value;
                        title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                try {
                    for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(subtitle.texts), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var span = _h.value;
                        subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            // create ID for gradient element
            if (null === _this._gradientUUID) {
                _this._gradientUUID = _this.uuid();
            }
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + "\n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - _this.options.imageWidth / 2,
                    y: centre.y - _this.options.imageHeight / 2,
                    src: _this.options.imageSrc,
                    width: _this.options.imageWidth,
                    height: _this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + _this._gradientUUID,
                    colorStop1: _this.options.outerStrokeColor,
                    colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + _this._gradientUUID,
                    colorStop1: _this.options.backgroundColor,
                    colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = function (previousPercent, currentPercent) {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            var fromPercent = _this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var toPercent = currentPercent;
            var _a = _this.getAnimationParameters(fromPercent, toPercent), step = _a.step, interval = _a.interval;
            var count = fromPercent;
            if (fromPercent < toPercent) {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
                    count += step;
                    if (count <= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
                    count -= step;
                    if (count >= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate(0, _this.options.percent);
            }
            _this.onClick.emit(event);
        };
        this.applyOptions = function () {
            var e_3, _a;
            try {
                // the options of <circle-progress> may change already
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(_this.options)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                        _this.options[name_1] = _this[name_1];
                    }
                    else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                        _this.options[name_1] = _this.templateOptions[name_1];
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                var tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = function () {
            _this.findSvgElement();
            var previousValue = _this.isInViewport;
            _this.isInViewport = _this.isElementInViewport(_this.svgElement);
            if (previousValue !== _this.isInViewport) {
                _this.onViewportChanged.emit({ oldValue: previousValue, newValue: _this.isInViewport });
            }
        };
        this.onScroll = function (event) {
            _this.checkViewport();
        };
        this.loadEventsForLazyMode = function () {
            if (_this.options.lazy) {
                _this.document.addEventListener('scroll', _this.onScroll, true);
                _this.window.addEventListener('resize', _this.onScroll, true);
                if (_this._viewportChangedSubscriber === null) {
                    _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_a) {
                        var oldValue = _a.oldValue, newValue = _a.newValue;
                        newValue ? _this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                var _timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).subscribe(function () {
                    _this.svgElement === null ? _this.checkViewport() : _timer_1.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            _this.document.removeEventListener('scroll', _this.onScroll, true);
            _this.window.removeEventListener('resize', _this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (_this._viewportChangedSubscriber !== null) {
                _this._viewportChangedSubscriber.unsubscribe();
                _this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    CircleProgressComponent.prototype.isDrawing = function () {
        return (this._timerSubscription && !this._timerSubscription.closed);
    };
    CircleProgressComponent.prototype.isElementInViewport = function (el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        var rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    };
    CircleProgressComponent.prototype.ngOnInit = function () {
        this.loadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnDestroy = function () {
        this.unloadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CircleProgressComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "class", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "backgroundGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "space", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "percent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "toFixed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "maxPercent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "renderOnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "units", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "unitsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], CircleProgressComponent.prototype, "titleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CircleProgressComponent.prototype, "subtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CircleProgressComponent.prototype, "imageSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "imageHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "imageWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CircleProgressComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showBackground", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "clockwise", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "startFromZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CircleProgressComponent.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", CircleProgressOptions)
    ], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'circle-progress',
            template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleProgressOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

var NgCircleProgressModule = /** @class */ (function () {
    function NgCircleProgressModule() {
    }
    NgCircleProgressModule_1 = NgCircleProgressModule;
    NgCircleProgressModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule_1,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    var NgCircleProgressModule_1;
    NgCircleProgressModule = NgCircleProgressModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                CircleProgressComponent,
            ],
            exports: [
                CircleProgressComponent,
            ]
        })
    ], NgCircleProgressModule);
    return NgCircleProgressModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-circle-progress.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home/home.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home/home.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center; color: white;\">Home</ion-title>\r\n    <ion-buttons slot=\"end\" fill=\"clear\" class=\"menu\">\r\n      <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"overlap()\">\r\n        <img src='../../../assets/menu.png'\r\n             style=\"height: 18px; width: 18px;\"/>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\"><br><br>\r\n  <ion-grid>\r\n    <ion-card-title *ngIf=\"displayName\">\r\n      <p class=\"hello\"><b>\r\n        Hello {{(displayName |async)}}<br>\r\n        We are together on this with you </b></p>\r\n    </ion-card-title>\r\n  </ion-grid>\r\n  <br><br>\r\n  <ion-grid class=\"score\">\r\n    <ion-title size=\"large\" style=\"text-align: center; font:bold\">Your Well-being score</ion-title>\r\n    <ion-card-content>\r\n  <br> \r\n\r\n  <div class=\"overlap\" button [routerLink]=\"['/wellbeing-score']\">\r\n    <ion-img\r\n        class=\"dial\"\r\n        [src]=\"coloredDial\"\r\n        [ngStyle]=\"dialRotation\"\r\n    >\r\n    </ion-img>\r\n    <ion-img class=\"wheel\" [src]=\"wheel\"></ion-img>\r\n    <div [ngClass]=\"wellbeingTextColor\">{{todayScore}}</div>\r\n  </div>\r\n  <div style=\"text-align: center;\">\r\n    <ion-title style=\"size: 20px;\">{{this.wellbeingQual}}</ion-title>\r\n  </div>\r\n  </ion-card-content>\r\n</ion-grid>\r\n</ion-content>\t\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/home/home.module.ts ***!
  \******************************************/
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home/home.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: '#78C000',
                    innerStrokeColor: '#C7E596',
                    animationDuration: 300
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home/home.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/home/home.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n}\n\n.score {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  border-radius: 100%;\n  height: 15em;\n  width: 15em;\n  background-color: rgba(255, 255, 255, 0);\n}\n\nion-card ion-card-header {\n  color: #2f332a;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 25px;\n}\n\nion-card ion-card-content {\n  color: rgba(47, 51, 42, 0);\n  text-align: center;\n  justify-items: center;\n  margin-top: 20px;\n  font-size: 150px;\n  font-style: italic;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.hello {\n  position: auto;\n  text-align: center;\n  text-transform: none;\n  color: #2f332a;\n}\n\nh4 {\n  color: #170957;\n  margin: 0px;\n  margin-left: 6px;\n}\n\nh5 {\n  letter-spacing: 2px;\n}\n\ndiv.page-padding {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  max-width: 400px;\n}\n\ndiv.overlapEnvironment {\n  display: grid;\n  width: 240px;\n  max-height: 0px;\n  margin: 40px;\n  margin-left: calc(50% - 120px);\n}\n\ndiv.overlapEnvironment > div {\n  grid-column: 1;\n  grid-row: 1;\n  width: 40px !important;\n  text-align: center;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  position: relative;\n  top: -28px;\n  left: -140px;\n  font-size: 14px;\n}\n\nion-img.bar {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n}\n\nion-img.temperature {\n  width: 90px;\n  position: relative;\n  top: -32px;\n  left: -166px;\n  height: 32px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\ndiv.overlap {\n  display: grid;\n  width: 240px;\n  max-height: 170px;\n  margin: 0px;\n  padding-top: 10px;\n  margin-left: calc(50% - 120px);\n  position: relative;\n  top: -15px;\n}\n\ndiv.overlap > div {\n  width: 60px;\n  position: relative;\n  margin-left: calc(50% - 30px);\n  top: 68px;\n  text-align: center;\n  height: 50px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  color: #170957;\n  font-size: 20px;\n  font-weight: 500;\n}\n\nion-img.wheel {\n  width: 170px;\n  position: relative;\n  margin-left: calc(50% - 85px);\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\nion-img.dial {\n  width: 84px;\n  position: relative;\n  left: calc(50% - 42px);\n  top: 2px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\n.space-10 {\n  height: 0px;\n}\n\n.space-20 {\n  height: 20px;\n}\n\ndiv.ion-padding {\n  background-color: #f9f9f9;\n  height: 100vh;\n}\n\ncanvas.chart {\n  width: 80%;\n  padding: 0px 10px 0px 10px;\n  border: 1px solid grey;\n}\n\ndiv.accordion {\n  width: \"100%\";\n  background-color: #D0D6D0;\n  height: 1.5em;\n  padding-left: 6px;\n  cursor: pointer;\n  color: #3d5013;\n}\n\ndiv.accordion h5 {\n  display: \"inline-block\";\n  background-color: transparent;\n  float: left;\n  width: calc(100% - 25px);\n  margin: 0px;\n}\n\ndiv.accordion div {\n  display: \"inline-block\";\n  background-color: transparent;\n  text-align: right;\n  float: right;\n}\n\ndiv.accordion span {\n  position: relative;\n  top: 3px;\n}\n\ndiv.wellbeingFooter {\n  display: grid;\n  max-height: 45px;\n  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;\n  position: relative;\n  top: -45px;\n  color: #170957;\n}\n\ndiv.wellbeingFooter div {\n  display: inline-block;\n  min-width: 50px;\n  grid-row: 1;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: show;\n}\n\ndiv.wellbeingFooter div:nth-of-type(1) {\n  grid-column: 2;\n}\n\ndiv.wellbeingFooter div:nth-of-type(2) {\n  padding: auto;\n  padding-top: 20px;\n  font-size: 18px;\n  grid-column: 3;\n  position: relative;\n  top: 5px;\n  font-size: 16px;\n}\n\ndiv.wellbeingFooter div:nth-of-type(3) {\n  grid-column: 4;\n}\n\ndiv.wellbeingFooter svg {\n  display: block;\n  margin: auto;\n  height: 50px;\n  width: 50px;\n}\n\ndiv.wellbeingFooter div.overlapMiniBubble div {\n  position: absolute;\n}\n\ndiv.wellbeingFooter div.overlapMiniBubble div span {\n  position: relative;\n  top: -53px;\n  left: -25px;\n  display: inline-block;\n  width: 40px;\n  text-align: center;\n}\n\n.black {\n  color: black !important;\n}\n\n.white {\n  color: white !important;\n}\n\n.environmentalQual {\n  color: #170957;\n  font-size: 16px;\n  text-align: center;\n  position: relative;\n  top: -5px;\n}\n\nspan.smallerText {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0Y6XFxJb25pY1Byb2plY3RcXEdpdFxcQ2FyZUdpdmVyXFxDYXJlR2l2ZXJJb25pY1Byb2plY3Qvc3JjXFxhcHBcXGhvbWVcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0hBQUE7QUNBSjs7QURJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUdBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy93aGl0ZWxlYWYuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBjb2xvcjogcmdiKDQ3LCA1MSwgNDIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IHJnYmEoNDcsIDUxLCA0MiwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVsbG8ge1xyXG4gIHBvc2l0aW9uOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogcmdiKDQ3LCA1MSwgNDIpO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6ICMxNzA5NTc7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuaDUge1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbmRpdi5wYWdlLXBhZGRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbmRpdi5vdmVybGFwRW52aXJvbm1lbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDBweDtcclxuICBtYXJnaW46IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTIwcHgpO1xyXG59XHJcblxyXG5kaXYub3ZlcmxhcEVudmlyb25tZW50ID4gZGl2IHtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBncmlkLXJvdzogMTtcclxuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcblxyXG4gIC8vIFJFVklFVzogaGFja3MhXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTI4cHg7XHJcbiAgbGVmdDogLTE0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWltZy5iYXIge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24taW1nLnRlbXBlcmF0dXJlIHtcclxuICB3aWR0aDogOTBweDtcclxuICAvLyBSRVZJRVc6IGhhY2tzIVxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zMnB4O1xyXG4gIGxlZnQ6IC0xNjZweDtcclxuXHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG5cclxuZGl2Lm92ZXJsYXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTVweDtcclxufVxyXG5cclxuZGl2Lm92ZXJsYXAgPiBkaXYge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAzMHB4KTtcclxuICB0b3A6IDY4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBncmlkLXJvdzogMTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMxNzA5NTc7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pbWcud2hlZWwge1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gODVweCk7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taW1nLmRpYWwge1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQycHgpO1xyXG4gIHRvcDogMnB4OyAvLyBtaW5vciBhbGlnbm1lbnQgYWRqdXN0bWVudCwgcmVsYXRlZCB0byBzdmcgZ3JhcGhpYyBjdXRzXHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3BhY2UtMTAge1xyXG4gIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG4uc3BhY2UtMjAge1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuZGl2Lmlvbi1wYWRkaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmNhbnZhcy5jaGFydCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG5kaXYuYWNjb3JkaW9uIHtcclxuICB3aWR0aDogJzEwMCUnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMEQ2RDA7XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYig2MSwgODAsIDE5KVxyXG59XHJcblxyXG5kaXYuYWNjb3JkaW9uIGg1IHtcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmRpdi5hY2NvcmRpb24gZGl2IHtcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmRpdi5hY2NvcmRpb24gc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcblxyXG5kaXYud2VsbGJlaW5nRm9vdGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmciAyZnIgMWZyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC00NXB4O1xyXG4gIGNvbG9yOiAjMTcwOTU3O1xyXG59XHJcblxyXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBncmlkLXJvdzogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBzaG93O1xyXG59XHJcblxyXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbmRpdi53ZWxsYmVpbmdGb290ZXIgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICBwYWRkaW5nOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBncmlkLWNvbHVtbjogMztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgZ3JpZC1jb2x1bW46IDQ7XHJcbn1cclxuXHJcbmRpdi53ZWxsYmVpbmdGb290ZXIgc3ZnIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdi5vdmVybGFwTWluaUJ1YmJsZSBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXYub3ZlcmxhcE1pbmlCdWJibGUgZGl2IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC01M3B4O1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbnZpcm9ubWVudGFsUXVhbCB7XHJcbiAgY29sb3I6ICMxNzA5NTc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG5zcGFuLnNtYWxsZXJUZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG59XG5cbi5zY29yZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDE1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzJmMzMyYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IHJnYmEoNDcsIDUxLCA0MiwgMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE1MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmhlbGxvIHtcbiAgcG9zaXRpb246IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjMmYzMzJhO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMTcwOTU3O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuaDUge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5kaXYucGFnZS1wYWRkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBtYXJnaW46IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCA+IGRpdiB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgbGVmdDogLTE0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pbWcuYmFyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWltZy50ZW1wZXJhdHVyZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG4gIGxlZnQ6IC0xNjZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuZGl2Lm92ZXJsYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMjQwcHg7XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4O1xufVxuXG5kaXYub3ZlcmxhcCA+IGRpdiB7XG4gIHdpZHRoOiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xuICB0b3A6IDY4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgY29sb3I6ICMxNzA5NTc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWltZy53aGVlbCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbmlvbi1pbWcuZGlhbCB7XG4gIHdpZHRoOiA4NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDJweCk7XG4gIHRvcDogMnB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnNwYWNlLTEwIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5zcGFjZS0yMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuZGl2Lmlvbi1wYWRkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuY2FudmFzLmNoYXJ0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbmRpdi5hY2NvcmRpb24ge1xuICB3aWR0aDogXCIxMDAlXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMEQ2RDA7XG4gIGhlaWdodDogMS41ZW07XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjM2Q1MDEzO1xufVxuXG5kaXYuYWNjb3JkaW9uIGg1IHtcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5kaXYuYWNjb3JkaW9uIGRpdiB7XG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5kaXYuYWNjb3JkaW9uIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmciAyZnIgMWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQ1cHg7XG4gIGNvbG9yOiAjMTcwOTU3O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBncmlkLXJvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBzaG93O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gIHBhZGRpbmc6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGdyaWQtY29sdW1uOiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi53ZWxsYmVpbmdGb290ZXIgZGl2Om50aC1vZi10eXBlKDMpIHtcbiAgZ3JpZC1jb2x1bW46IDQ7XG59XG5cbmRpdi53ZWxsYmVpbmdGb290ZXIgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXYub3ZlcmxhcE1pbmlCdWJibGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdi5vdmVybGFwTWluaUJ1YmJsZSBkaXYgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgbGVmdDogLTI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZW52aXJvbm1lbnRhbFF1YWwge1xuICBjb2xvcjogIzE3MDk1NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuXG5zcGFuLnNtYWxsZXJUZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home/home.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/home/home.page.ts ***!
  \****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");








var qualitativeScale = ['Distressing', 'Substandard', 'Ordinary', 'Adequate', 'Impressive'];
var HomePage = /** @class */ (function () {
    function HomePage(router, afStore, afAuth, auth, user, actionSheetController) {
        var _this = this;
        this.router = router;
        this.afStore = afStore;
        this.afAuth = afAuth;
        this.auth = auth;
        this.user = user;
        this.actionSheetController = actionSheetController;
        this.scoreColor = 'red';
        this.defaultColor = 'rgba(0, 0, 0, 0.200)';
        this.assetPath = '../../../assets/chart/';
        this.wheel = '../../../assets/chart/numberedwheel.svg';
        this.formatSubtitle = function (score) {
            if (score < 20) {
                _this.scoreColor = 'red';
                return 'Distressing';
            }
            else if (score < 40) {
                _this.scoreColor = 'orange';
                return 'Substandard';
            }
            else if (score < 60) {
                _this.scoreColor = 'gold';
                return 'Ordinary';
            }
            else if (score < 80) {
                _this.scoreColor = 'lightgreen';
                return 'Adequate';
            }
            else {
                _this.scoreColor = 'green';
                return 'Impressive';
            }
        };
        var uid = this.auth.cUid;
        console.log(uid);
        var date = new Date();
        var td = String(date.getDate()).padStart(2, '0');
        var yd = String(date.getDate() - 1).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
        var yyyy = date.getFullYear();
        var today = yyyy + '-' + mm + '-' + td;
        var yesterday = yyyy + '-' + mm + '-' + yd;
        this.displayName = this.user.getDisplayname(uid);
        this.getTodayScore(uid, today);
        this.getYstScore(uid, yesterday);
        this.getAvgScore(uid);
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.getTodayScore = function (uid, date) {
        var _this = this;
        this.user.getWellScore(uid, date).subscribe(function (user) {
            var tempScore;
            if (user) {
                if (user.wellbeingScore) {
                    tempScore = user.wellbeingScore;
                }
                else {
                    tempScore = 0;
                }
            }
            else {
                tempScore = 0;
            }
            _this.todayScore = tempScore;
            _this.colorZone = _this.todayScore >= 100 ? 4 :
                Math.floor(_this.todayScore / 20);
            _this.coloredDial = _this.assetPath + 'dial' + _this.colorZone + '.svg';
            _this.wellbeingQual = qualitativeScale[_this.colorZone];
            _this.wellbeingTextColor = _this.colorZone === 4 ? 'white' : 'black';
            _this.dialRotation = {
                transform: "\n            rotate(" + ((_this.todayScore / 100.00) * 300 - 150) + "deg)\n          "
            };
            _this.formatSubtitle(_this.todayScore);
        });
    };
    HomePage.prototype.getYstScore = function (uid, date) {
        var _this = this;
        this.user.getWellScore(uid, date).subscribe(function (user) {
            var tempScore;
            if (user.wellbeingScore) {
                tempScore = user.wellbeingScore;
            }
            else {
                tempScore = 0;
            }
            _this.ystScore = tempScore;
            _this.yesterdayZone = _this.ystScore >= 100 ? 4 :
                Math.floor((_this.ystScore) / 20);
            _this.yesterdayClass = 'GuageColor' + _this.yesterdayZone;
            _this.yesterdayTextColor = _this.yesterdayZone === 4 ? 'white' : 'white';
        });
    };
    HomePage.prototype.getAvgScore = function (uid) {
        var _this = this;
        var avgSc = this.user.getEma(uid);
        var score = [];
        var avg = [];
        var sc;
        avgSc.subscribe(function (user) {
            if (user) {
                for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
                    var item = user_1[_i];
                    avg.push(item);
                    if (item.wellbeingScore) {
                        sc = item.wellbeingScore;
                    }
                    else {
                        sc = 0;
                    }
                    score.push(sc);
                    _this.avgScore = Number(_this.getAverage(score).toFixed(0));
                    _this.averageZone = _this.avgScore >= 100 ? 4 :
                        Math.floor((_this.avgScore) / 20);
                    _this.averageClass = 'GuageColor' + _this.averageZone;
                    _this.averageTextColor = _this.averageZone === 4 ? 'white' : 'white';
                }
            }
            else {
                console.log('data not found');
            }
        });
    };
    HomePage.prototype.getAverage = function (score) {
        var sum = 0, counter = 0;
        // tslint:disable-next-line: forin
        for (var key in score) {
            sum += Number(score[key]);
            counter++;
        }
        return sum / counter;
    };
    HomePage.prototype.overlap = function () {
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
                                        return _this.router.navigate(['./profile']);
                                    }
                                }, {
                                    text: 'Settings',
                                    role: 'settings',
                                    icon: 'settings',
                                    handler: function () {
                                        return _this.router.navigate(['./settings']);
                                    }
                                }, {
                                    text: 'Sign Out',
                                    icon: 'power',
                                    handler: function () {
                                        _this.afAuth.auth.signOut();
                                        return _this.router.navigate(['/tabs']);
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
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map