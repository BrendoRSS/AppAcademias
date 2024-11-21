import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnapshotAction } from '@angular/fire/compat/database';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitPageRoutingModule } from './submit-routing.module';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SubmitPage } from './submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [SubmitPage]
})

export class SubmitPageModule {}
