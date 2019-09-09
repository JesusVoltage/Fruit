import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FruitsPage } from './fruits.page';
import { ExpandableContentComponent } from 'src/app/components/expandable-content/expandable-content.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FruitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [FruitsPage]
})
export class FruitsPageModule {}
