import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitPageRoutingModule } from './submit-routing.module';
import { SubmitPage } from './submit.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SubmitPage }])
  ],
  declarations: [SubmitPage]
})

export class SubmitPageModule {}
