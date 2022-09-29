import { Component, Input, OnInit } from '@angular/core';
import data from '../../../assets/info.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  constructor() { }
  infoData: any;
  ngOnInit(): void {
    this.infoData = data[0];
  }

}
