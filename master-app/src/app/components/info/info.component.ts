import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../assets/info.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoData: any;

  id!: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    console.log(this.id);
    console.log(data)

    this.infoData = data[this.id];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
