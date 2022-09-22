import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hexogonal',
  templateUrl: './hexogonal.component.html',
  styleUrls: ['./hexogonal.component.scss']
})
export class HexogonalComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false })
  myCanvas!: ElementRef;

  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
  }
}
