import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGoBackService } from './services/page-go-back.service';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule],
  providers: [{ provide: 
    RouteReuseStrategy, 
    useClass: 
    IonicRouteStrategy }, 
    PageGoBackService],
  bootstrap: [AppComponent],
})
export class AppModule { }
