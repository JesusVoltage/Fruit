import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableContentComponent } from './expandable-content/expandable-content.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ExpandableContentComponent, RatingComponent],
  declarations: [ExpandableContentComponent, RatingComponent],
})
export class ComponentsModule { }
