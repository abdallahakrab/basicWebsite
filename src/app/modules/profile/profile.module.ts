import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
// import { ProfileComponent } from '../components/profile/profile.component';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';



@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  
  ]
})
export class ProfileModule { }
