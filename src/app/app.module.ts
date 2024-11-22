import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGoBackService } from './services/page-go-back.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione este esquema
  providers: [{ provide: 
    RouteReuseStrategy, 
    useClass: 
    IonicRouteStrategy }, 
    PageGoBackService],
  bootstrap: [AppComponent],
})
export class AppModule { }
