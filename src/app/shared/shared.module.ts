import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';

import { SharedPage } from './shared.page';
import { LoandingComponent } from './loanding/loanding.component';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule
  ],
  exports: [LoandingComponent, CardComponent, CardContentComponent],
  declarations: [SharedPage, LoandingComponent, CardComponent, CardContentComponent]
})
export class SharedPageModule {}
