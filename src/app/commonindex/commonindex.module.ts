import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonindexComponent } from './component/commonindex.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AppRouting } from '../../app.router';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    AppRouting
  ],
  declarations: [CommonindexComponent],
 exports:[CommonindexComponent]
})
export class CommonindexModule { }
