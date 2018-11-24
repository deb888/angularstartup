import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent],
  exports:[FooterComponent]
})
export class FooterModule { }
