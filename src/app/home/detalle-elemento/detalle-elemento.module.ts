import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleElementoPageRoutingModule } from './detalle-elemento-routing.module';

import { DetalleElementoPage } from './detalle-elemento.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleElementoPageRoutingModule,
    SharedPageModule
  ],
  declarations: [DetalleElementoPage]
})
export class DetalleElementoPageModule {}
