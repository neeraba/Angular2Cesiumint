"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('../node_modules/cesium/Source/cesium.js');
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var CesiumComponent = (function () {
    // TypeScript public modifiers
    function CesiumComponent(heroService) {
        this.heroService = heroService;
        this._x = -75.1641667;
        this._y = 39.9522222;
        this._z = 300000.0;
    }
    Object.defineProperty(CesiumComponent.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            this.refreshPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CesiumComponent.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            this.refreshPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CesiumComponent.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
            this.refreshPosition();
        },
        enumerable: true,
        configurable: true
    });
    CesiumComponent.prototype.ngOnInit = function () {
        console.log('hello `Viewer` component');
        // this.title.getData().subscribe(data => this.data = data);
        this.viewer = new Cesium.Viewer('cesiumContainer');
        var a = {
            position: Cesium.Cartesian3.fromDegrees(this.x, this.y, this.z),
            label: {
                text: 'test',
                scale: 1
            }
        };
        this.entity = this.viewer.entities.add(a);
        //this.entity.label.scale = <any>(1);
        console.log(this.entity);
        //this.entity.label.scale = this.scale;
    };
    CesiumComponent.prototype.scale = function (value) {
        if (value.trim() === "") {
            return;
        }
        this.entity.label.scale = parseFloat(value);
    };
    CesiumComponent.prototype.refreshPosition = function () {
        this.entity.position = Cesium.Cartesian3.fromDegrees(this._x, this._y, this._z);
    };
    __decorate([
        core_1.ViewChild('cesiumViewer'), 
        __metadata('design:type', Object)
    ], CesiumComponent.prototype, "container", void 0);
    CesiumComponent = __decorate([
        core_1.Component({
            selector: 'cesium',
            templateUrl: './cesium.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], CesiumComponent);
    return CesiumComponent;
}());
exports.CesiumComponent = CesiumComponent;
//# sourceMappingURL=cesium.component.js.map