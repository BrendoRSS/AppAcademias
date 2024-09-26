import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
 email:String = "";
 senha:String = "";
  constructor() { }

  ngOnInit() {
  }

}
