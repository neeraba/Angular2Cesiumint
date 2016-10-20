import  '../node_modules/cesium/Source/cesium.js';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';




@Component({
  selector: 'cesium',
  templateUrl:  './cesium.component.html',
  moduleId: module.id
})

export class CesiumComponent {
    @ViewChild('cesiumViewer') container;
    public viewer: Cesium.Viewer;
    get x() {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
        this.refreshPosition();
    }
    get y() {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
        this.refreshPosition();
    }
    get z() {
        return this._z;
    }
    set z(value: number) {
        this._z = value;
        this.refreshPosition();
    }
    // Set our default values
    entity: Cesium.Entity;
    private _x: number = -75.1641667;
    private _y: number = 39.9522222;
    private _z: number = 300000.0;
    // TypeScript public modifiers
    
    constructor(
          public heroService: HeroService
      ) { }
    ngOnInit() {
        console.log('hello `Viewer` component');
    
        // this.title.getData().subscribe(data => this.data = data);
        this.viewer = new Cesium.Viewer('cesiumContainer');
        let a: any = {
            position: Cesium.Cartesian3.fromDegrees(this.x, this.y, this.z),
            label: {
                text: 'test',
                scale: 1
            }
        }
        this.entity = <Cesium.Entity>this.viewer.entities.add(a);
        //this.entity.label.scale = <any>(1);
        console.log(this.entity);
        //this.entity.label.scale = this.scale;
    }

    scale(value: string) {
        if (value.trim() === "") { return; }
        this.entity.label.scale = <any>parseFloat(value);
    }

   

    private refreshPosition() {
        this.entity.position = <any>Cesium.Cartesian3.fromDegrees(this._x, this._y, this._z);
    }

}
  


