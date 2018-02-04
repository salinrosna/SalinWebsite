import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

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
        window.open("https://mail.google.com/mail/u/1/#inbox", "_blank");
        break;
      case "fb":
        window.open("https://www.facebook.com/salin.rosna", "_blank");
        break;
    }    
  }
}
