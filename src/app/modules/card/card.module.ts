import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardFaceComponent } from './components/card-face/card-face.component';
import { CardLogoComponent } from './components/card-logo/card-logo.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';

@NgModule({
  declarations: [
    CardComponent,
    CardContainerComponent,
    CardFaceComponent,
    CardLogoComponent,
    CardSimpleComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  exports: [
    CardContainerComponent
  ]
})
export class CardModule { }
