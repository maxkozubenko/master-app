import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GridClass } from 'src/assets/hexs/grid';
import * as createjs from 'createjs-module';
import StageTransformer from 'src/assets/hexs/stage';

@Component({
  selector: 'app-hexogonal',
  templateUrl: './hexogonal.component.html',
  styleUrls: ['./hexogonal.component.scss']
})
export class HexogonalComponent implements AfterViewInit {
  // @ViewChild('canvas', { static: false })
  // myCanvas!: ElementRef;

  // public context!: CanvasRenderingContext2D;

  // a = 2 * Math.PI / 6;
  // r = 80;

  // hexogons: Array<object> = [{}];

  // ngAfterViewInit(): void {
  //   this.context = this.myCanvas.nativeElement.getContext('2d');
  //   this.init();
  // }

  // init() {
  //   this.drawGrid(this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
  // }

  
  // drawGrid(width: number, height: number) {
  //   for (let y = this.r; y + this.r * Math.sin(this.a) < height; y += this.r * Math.sin(this.a)) {
  //     for (let x = this.r, j = 0; x + this.r * (1 + Math.cos(this.a)) < width; x += this.r * (1 + Math.cos(this.a)), y += (-1) ** j++ * this.r * Math.sin(this.a)) {
  //       this.drawHexagon(x, y);
  //     }
  //   }
  // }
  
  // drawHexagon(x: number, y: number, isColor: boolean = false) {
  //   this.context.beginPath();
  //   for (let i = 0; i < 6; i++) {
  //     this.context.lineTo(x + this.r * Math.cos(this.a * i), y + this.r * Math.sin(this.a * i));
  //   }

  //   if (isColor) {
  //     this.context.fillStyle = 'blue';
  //     this.context.fill();
  //   } else {
  //     this.hexogons.push({x: x, y: y});
  //   }

  //   this.context.closePath();
  //   this.context.stroke();
  // }

  // paintHexWithColor(event: MouseEvent): void {
  //   console.log("click x -", event.clientX);
  //   console.log("click y -", event.clientY);

  //   let xPoint = Math.round(event.clientX / 120);
  //   xPoint = xPoint === 1 ? xPoint * 80 : (xPoint * 120) - 40;
  //   console.log('xPoint', xPoint); 
    
  //   let yPoint = Math.round(event.clientY / 120);
  //   yPoint = yPoint === 1 ? yPoint * 80 : (yPoint * 120);
  //   console.log('yPoint', yPoint); 

  //   console.log(this.hexogons);

  //   this.drawHexagon(xPoint, yPoint, true);
  // }

  @ViewChild('canvas', { static: false })
  myCanvas!: ElementRef;

  public context!: CanvasRenderingContext2D;
  element!: HTMLElement;
  ngAfterViewInit(): void { 
    this.init();
  }
  
  init(): void{
    const windowWidth = window.window.innerWidth;
    const windowHeight = window.window.innerHeight - 100;

    this.myCanvas.nativeElement.width = windowWidth;
    this.myCanvas.nativeElement.height = windowHeight;

    this.context = this.myCanvas.nativeElement.getContext('2d');

    var stage = new createjs.Stage("demoCanvas");
    stage.x = 1000;
    stage.y = 1000;

    var grid = new GridClass();
    grid.tileSize    = 50;
    grid.tileSpacing = 0;
    grid.pointyTiles = false;

    let stageTransformer = new (StageTransformer as any)().initialize({
      element: this.myCanvas.nativeElement,
      stage: stage
    });

    stageTransformer.addEventListeners();

    var coordinates = grid.hexagon(0, 0, 10, true)
    for (var i = 0; i < coordinates.length; i++) {
      var q = coordinates[i].q,
          r = coordinates[i].r,
          center = grid.getCenterXY(q, r),
          hexagon = new createjs.Shape();

          hexagon.graphics
            .beginFill("rgba(150,150,150,1)")
            .beginStroke("rgba(50,50,50,1)")
            .drawPolyStar(0, 0, grid.tileSize, 6, 0, 0);

          // hexagon.q = q;
          // hexagon.r = r;
          hexagon.x = center.x;
          hexagon.y = center.y;

          // hexagon.addEventListener("mouseover", handlePress);
          // function handlePress(event: any) {
          //     // A mouse press happened.
          //     // Listen for mouse move while the mouse is down:
          //     console.log('handlePress');
          //     if (!stageTransformer.mouse.moved) {
          //       event.target.graphics
          //         .clear()
          //         .beginFill("rgba(150,160,0,1)")
          //         .beginStroke("rgba(50,0,0,1)")
          //         .drawPolyStar(0, 0, grid.tileSize, 6, 0, 0);
          //     }
          //     // event.addEventListener("mousemove", handleMove);
          // }

          // function handleMove(event: any) {
          //   // Check out the DragAndDrop example in GitHub for more
          //   console.log('handleMove');
          //   if (!stageTransformer.mouse.moved) {
          //     event.target.graphics
          //       .clear()
          //       .beginFill("rgba(150,160,0,1)")
          //       .beginStroke("rgba(50,0,0,1)")
          //       .drawPolyStar(0, 0, grid.tileSize, 6, 0, 0);
          //   }
          // }

          hexagon.addEventListener("mouseenter", function (event: any) {
            console.log(event);
            if (!stageTransformer.mouse.moved) {
              event.target.graphics
                .clear()
                .beginFill("rgba(150,160,0,1)")
                .beginStroke("rgba(50,0,0,1)")
                .drawPolyStar(0, 0, grid.tileSize, 6, 0, 0);
            }
          });

          stage.addChild(hexagon);
    }

    let tick = function () {
      stage.update();
    };

    tick();

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
  }
}
