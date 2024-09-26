import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
 email:String = "";
 senha:String = "";
 nome:String = "";
 Cel:String = "";
 constructor(private router: Router, private dataService: DataService) {
     
 }
 enviarcadastro(){
  this.router.navigate(['login'])
 }
 

  ngOnInit() {
  }

}
