import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as skrollr from 'skrollr/src/skrollr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    
      var skr = skrollr.init();
  }

}
