import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as skrollr from 'skrollr/src/skrollr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title='SALIN ROSNA';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  
  constructor() {

   }

  ngOnInit() {
    if (window.innerWidth >= 567){
      var skr = skrollr.init();
     }
    //  var skr = skrollr.init();
    // if(window.innerWidth>768){
    //   debugger;
    //   var skr = skrollr.init();
    // }
    // else{
    // var skr = skrollr.init();
    // skr.destroy();
    // }
  }
  socialurl  = (url) =>{
    debugger;
    switch (url){
      case "in":
        window.open("https://www.linkedin.com/in/salinrosna/", "_blank");
        break;
        case "gmail":
        window.open("mailto:salinrosnatv@gmail.com", "_blank");
        break;
      case "fb":
        window.open("https://www.facebook.com/salin.rosna", "_blank");
        break;
      case "gh":
        window.open("https://github.com/salinrosna", "_blank");
        break;
    }    
  }
  
 
}
