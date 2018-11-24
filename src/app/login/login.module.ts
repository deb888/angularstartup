import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { ShareModule } from '../shared/share/share.module';
import { FieldErrorDisplayModule } from '../shared/field-error-display/field-error-display.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FieldErrorDisplayModule
  ],
  declarations: [LoginComponent],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
