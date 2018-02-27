import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    
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
