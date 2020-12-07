(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js ***!
  \************************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




class CircleProgressOptions {
    constructor() {
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
}
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
class CircleProgressComponent {
    constructor(defaultOptions, elRef, document) {
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
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
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
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
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = (event) => {
            if (this.options.renderOnClick) {
                this.animate(0, this.options.percent);
            }
            this.onClick.emit(event);
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
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
                let tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport) {
                this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.document.addEventListener('scroll', this.onScroll, true);
                this.window.addEventListener('resize', this.onScroll, true);
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
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
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
}
CircleProgressComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'circle-progress',
                template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url(#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url(#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
            },] }
];
CircleProgressComponent.ctorParameters = () => [
    { type: CircleProgressOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
CircleProgressComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    space: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    renderOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showInnerStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clockwise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromZero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showZeroOuterStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templateOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }]
};

class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
}
NgCircleProgressModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CircleProgressComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [CircleProgressComponent]
            },] }
];

/*
 * Public API Surface of ng-circle-progress
 */

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center; color: white;\">Home</ion-title>\n    <ion-buttons slot=\"end\" fill=\"clear\" class=\"menu\">\n      <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"overlap()\">\n        <img src='../../../assets/menu.png'\n             style=\"height: 18px; width: 18px;\"/>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\"><br><br>\n  <ion-grid>\n    <ion-card-title *ngIf=\"displayName\">\n      <p class=\"hello\"><b>\n        Hello {{(displayName |async)}}</b><br>\n        We are together on this with you </p>\n    </ion-card-title>\n  </ion-grid>\n  <br><br>\n  <ion-grid class=\"score\">  \n    <h3 style=\"text-align: center; font: bold\">Your wellbeing-score</h3>  \n    <ion-card-content>\n  <div class=\"overlap\" button [routerLink]=\"['/wellbeing-score']\">\n    <ion-img\n        class=\"dial\"\n        [src]=\"coloredDial\"\n        [ngStyle]=\"dialRotation\"\n    >\n    </ion-img>\n    <ion-img class=\"wheel\" [src]=\"wheel\"></ion-img>\n    <div [ngClass]=\"wellbeingTextColor\">{{todayScore}}</div>\n  </div>\n  </ion-card-content>\n</ion-grid>\n<ion-grid>\n  \n  <div style=\"text-align: center;\">\n    <h3 style=\"size: 20px;\">{{this.wellbeingQual}}</h3>\n  </div>\n</ion-grid>\n</ion-content>\t\n\n"

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
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");









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

module.exports = "ion-content.background {\n  --background: white;\n}\n\nion-toolbar {\n  --background: rgb(7, 156, 161);\n}\n\n.score {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  border-radius: 100%;\n  height: 15em;\n  width: 15em;\n  background-color: rgba(255, 255, 255, 0);\n}\n\nion-card ion-card-header {\n  color: #2f332a;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 25px;\n}\n\nion-card ion-card-content {\n  color: rgba(47, 51, 42, 0);\n  text-align: center;\n  justify-items: center;\n  margin-top: 20px;\n  font-size: 150px;\n  font-style: italic;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.hello {\n  position: auto;\n  text-align: center;\n  text-transform: none;\n  color: #2f332a;\n}\n\nh4 {\n  color: #170957;\n  margin: 0px;\n  margin-left: 6px;\n}\n\nh5 {\n  letter-spacing: 2px;\n}\n\ndiv.page-padding {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  max-width: 400px;\n}\n\ndiv.overlapEnvironment {\n  display: grid;\n  width: 240px;\n  max-height: 0px;\n  margin: 40px;\n  margin-left: calc(50% - 120px);\n}\n\ndiv.overlapEnvironment > div {\n  grid-column: 1;\n  grid-row: 1;\n  width: 40px !important;\n  text-align: center;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  position: relative;\n  top: -28px;\n  left: -140px;\n  font-size: 14px;\n}\n\nion-img.bar {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n}\n\nion-img.temperature {\n  width: 90px;\n  position: relative;\n  top: -32px;\n  left: -166px;\n  height: 32px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\ndiv.overlap {\n  display: grid;\n  width: 240px;\n  max-height: 170px;\n  margin: 0px;\n  padding-top: 10px;\n  margin-left: calc(50% - 120px);\n  position: relative;\n  top: -15px;\n}\n\ndiv.overlap > div {\n  width: 60px;\n  position: relative;\n  margin-left: calc(50% - 30px);\n  top: 68px;\n  text-align: center;\n  height: 50px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  color: #170957;\n  font-size: 20px;\n  font-weight: 500;\n}\n\nion-img.wheel {\n  width: 170px;\n  position: relative;\n  margin-left: calc(50% - 85px);\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\nion-img.dial {\n  width: 84px;\n  position: relative;\n  left: calc(50% - 42px);\n  top: 2px;\n  grid-column: 1;\n  grid-row: 1;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\n.space-10 {\n  height: 0px;\n}\n\n.space-20 {\n  height: 20px;\n}\n\ndiv.ion-padding {\n  background-color: #f9f9f9;\n  height: 100vh;\n}\n\ncanvas.chart {\n  width: 80%;\n  padding: 0px 10px 0px 10px;\n  border: 1px solid grey;\n}\n\ndiv.accordion {\n  width: \"100%\";\n  background-color: #D0D6D0;\n  height: 1.5em;\n  padding-left: 6px;\n  cursor: pointer;\n  color: #3d5013;\n}\n\ndiv.accordion h5 {\n  display: \"inline-block\";\n  background-color: transparent;\n  float: left;\n  width: calc(100% - 25px);\n  margin: 0px;\n}\n\ndiv.accordion div {\n  display: \"inline-block\";\n  background-color: transparent;\n  text-align: right;\n  float: right;\n}\n\ndiv.accordion span {\n  position: relative;\n  top: 3px;\n}\n\ndiv.wellbeingFooter {\n  display: grid;\n  max-height: 45px;\n  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;\n  position: relative;\n  top: -45px;\n  color: #170957;\n}\n\ndiv.wellbeingFooter div {\n  display: inline-block;\n  min-width: 50px;\n  grid-row: 1;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: show;\n}\n\ndiv.wellbeingFooter div:nth-of-type(1) {\n  grid-column: 2;\n}\n\ndiv.wellbeingFooter div:nth-of-type(2) {\n  padding: auto;\n  padding-top: 20px;\n  font-size: 18px;\n  grid-column: 3;\n  position: relative;\n  top: 5px;\n  font-size: 16px;\n}\n\ndiv.wellbeingFooter div:nth-of-type(3) {\n  grid-column: 4;\n}\n\ndiv.wellbeingFooter svg {\n  display: block;\n  margin: auto;\n  height: 50px;\n  width: 50px;\n}\n\ndiv.wellbeingFooter div.overlapMiniBubble div {\n  position: absolute;\n}\n\ndiv.wellbeingFooter div.overlapMiniBubble div span {\n  position: relative;\n  top: -53px;\n  left: -25px;\n  display: inline-block;\n  width: 40px;\n  text-align: center;\n}\n\n.black {\n  color: black !important;\n}\n\n.white {\n  color: white !important;\n}\n\n.environmentalQual {\n  color: #170957;\n  font-size: 16px;\n  text-align: center;\n  position: relative;\n  top: -5px;\n}\n\nspan.smallerText {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0lvbmljUHJvamVjdC9DYXJlR2l2ZXIvQ2FyZUdpdmVySW9uaWNQcm9qZWN0L2lvcy9zcmMvYXBwL2hvbWUvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FDQUo7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFHQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRFFBO0VBQ0UsdUJBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlOyAvLyB1cmwoLi4vLi4vLi4vYXNzZXRzL3doaXRlbGVhZi5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDcsIDE1NiwgMTYxKTsgLy8gdXJsKC4uLy4uLy4uL2Fzc2V0cy90b29sYmFyLmpwZykgMCAwLzEwMCUgMTAwJSByZXBlYXQ7XG59XG5cbi5zY29yZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDE1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBjb2xvcjogcmdiKDQ3LCA1MSwgNDIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGNvbG9yOiByZ2JhKDQ3LCA1MSwgNDIsIDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi5oZWxsbyB7XG4gIHBvc2l0aW9uOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogcmdiKDQ3LCA1MSwgNDIpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMTcwOTU3O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuaDUge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5kaXYucGFnZS1wYWRkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBtYXJnaW46IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCA+IGRpdiB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG5cbiAgLy8gUkVWSUVXOiBoYWNrcyFcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOHB4O1xuICBsZWZ0OiAtMTQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWltZy5iYXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taW1nLnRlbXBlcmF0dXJlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIC8vIFJFVklFVzogaGFja3MhXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbiAgbGVmdDogLTE2NnB4O1xuXG4gIGhlaWdodDogMzJweDtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbmRpdi5vdmVybGFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDI0MHB4O1xuICBtYXgtaGVpZ2h0OiAxNzBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxMjBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbn1cblxuZGl2Lm92ZXJsYXAgPiBkaXYge1xuICB3aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgdG9wOiA2OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTcwOTU3O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1pbWcud2hlZWwge1xuICB3aWR0aDogMTcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gODVweCk7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG5pb24taW1nLmRpYWwge1xuICB3aWR0aDogODRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQycHgpO1xuICB0b3A6IDJweDsgLy8gbWlub3IgYWxpZ25tZW50IGFkanVzdG1lbnQsIHJlbGF0ZWQgdG8gc3ZnIGdyYXBoaWMgY3V0c1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnNwYWNlLTEwIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5zcGFjZS0yMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuZGl2Lmlvbi1wYWRkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuY2FudmFzLmNoYXJ0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbmRpdi5hY2NvcmRpb24ge1xuICB3aWR0aDogJzEwMCUnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDBENkQwO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmdiKDYxLCA4MCwgMTkpXG59XG5cbmRpdi5hY2NvcmRpb24gaDUge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5kaXYuYWNjb3JkaW9uIGRpdiB7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZGl2LmFjY29yZGlvbiBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnIgMmZyIDFmcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00NXB4O1xuICBjb2xvcjogIzE3MDk1Nztcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogc2hvdztcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXY6bnRoLW9mLXR5cGUoMikge1xuICBwYWRkaW5nOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBncmlkLWNvbHVtbjogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgzKSB7XG4gIGdyaWQtY29sdW1uOiA0O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmRpdi53ZWxsYmVpbmdGb290ZXIgZGl2Lm92ZXJsYXBNaW5pQnViYmxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXYub3ZlcmxhcE1pbmlCdWJibGUgZGl2IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUzcHg7XG4gIGxlZnQ6IC0yNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmVudmlyb25tZW50YWxRdWFsIHtcbiAgY29sb3I6ICMxNzA5NTc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuc3Bhbi5zbWFsbGVyVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig3LCAxNTYsIDE2MSk7XG59XG5cbi5zY29yZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDE1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzJmMzMyYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IHJnYmEoNDcsIDUxLCA0MiwgMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE1MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmhlbGxvIHtcbiAgcG9zaXRpb246IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjMmYzMzJhO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMTcwOTU3O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuaDUge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5kaXYucGFnZS1wYWRkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBtYXJnaW46IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcbn1cblxuZGl2Lm92ZXJsYXBFbnZpcm9ubWVudCA+IGRpdiB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgbGVmdDogLTE0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pbWcuYmFyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWltZy50ZW1wZXJhdHVyZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG4gIGxlZnQ6IC0xNjZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuZGl2Lm92ZXJsYXAge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMjQwcHg7XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEyMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4O1xufVxuXG5kaXYub3ZlcmxhcCA+IGRpdiB7XG4gIHdpZHRoOiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xuICB0b3A6IDY4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgY29sb3I6ICMxNzA5NTc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWltZy53aGVlbCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA4NXB4KTtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbmlvbi1pbWcuZGlhbCB7XG4gIHdpZHRoOiA4NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDJweCk7XG4gIHRvcDogMnB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnNwYWNlLTEwIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5zcGFjZS0yMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuZGl2Lmlvbi1wYWRkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuY2FudmFzLmNoYXJ0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbmRpdi5hY2NvcmRpb24ge1xuICB3aWR0aDogXCIxMDAlXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMEQ2RDA7XG4gIGhlaWdodDogMS41ZW07XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjM2Q1MDEzO1xufVxuXG5kaXYuYWNjb3JkaW9uIGg1IHtcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5kaXYuYWNjb3JkaW9uIGRpdiB7XG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5kaXYuYWNjb3JkaW9uIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmciAyZnIgMWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQ1cHg7XG4gIGNvbG9yOiAjMTcwOTU3O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBncmlkLXJvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBzaG93O1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gIHBhZGRpbmc6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGdyaWQtY29sdW1uOiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi53ZWxsYmVpbmdGb290ZXIgZGl2Om50aC1vZi10eXBlKDMpIHtcbiAgZ3JpZC1jb2x1bW46IDQ7XG59XG5cbmRpdi53ZWxsYmVpbmdGb290ZXIgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuZGl2LndlbGxiZWluZ0Zvb3RlciBkaXYub3ZlcmxhcE1pbmlCdWJibGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYud2VsbGJlaW5nRm9vdGVyIGRpdi5vdmVybGFwTWluaUJ1YmJsZSBkaXYgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgbGVmdDogLTI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZW52aXJvbm1lbnRhbFF1YWwge1xuICBjb2xvcjogIzE3MDk1NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuXG5zcGFuLnNtYWxsZXJUZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

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
        this.getTodayScore(uid);
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.getTodayScore = function (uid) {
        var _this = this;
        this.user.getUser(uid).subscribe(function (user) {
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