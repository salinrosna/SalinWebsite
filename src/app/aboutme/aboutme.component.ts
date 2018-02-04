import { Component, OnInit } from '@angular/core';
import * as skrollr from 'skrollr/src/skrollr';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var s = skrollr.init();
  }

}
