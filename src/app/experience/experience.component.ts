import { Component, OnInit, Inject } from '@angular/core';
declare var $: any;
import * as skrollr from 'skrollr/src/skrollr';
import { HostListener} from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser"
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document) { }

  ngOnInit() {
    var sk = skrollr.init();

  }
  seturl  = (url1) =>{
    debugger;
    switch (url1){
      case "mvp":
        window.open("http://www.mvpstudio.co.nz/", "_blank");
        break;
      case "ic":
        window.open("http://www.industryconnect.org/", "_blank");
        break;
      case "mmk":
        window.open("https://www.morganmckinley.com/", "_blank");
        break;
      case "mes":
        window.open("http://www.mesce.ac.in/", "_blank");
        break;
      case "shghs":
        window.open("http://sacredheartghs.com", "_blank");
        break;
    }    
  }
  // @HostListener('scroll',[])
  // @HostListener('window:scroll',[])
  // onWindowScroll(){
    
  //   var header = document.getElementById('heading');
  //   var sticky = (header.offsetTop)+500;
  //   if(window.pageYOffset>=sticky){
  //     debugger;
  //     header.classList.add("sticky");
  //   }
  //   else{
  //     header.classList.remove("sticky");
  //     }
    
  //   debugger;
  // }
}
