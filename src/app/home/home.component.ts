import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as skrollr from 'skrollr/src/skrollr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

      var skr = skrollr.init();
  }
  
}
