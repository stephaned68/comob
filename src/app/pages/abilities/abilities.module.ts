import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AbilitiesPage } from './abilities.page';
import { FormatNotes } from '../../pipes/format-notes.pipe';

const routes: Routes = [
  {
    path: '',
    component: AbilitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FormatNotes
  ],
  declarations: [
    AbilitiesPage,
    FormatNotes
  ]
})
export class AbilitiesPageModule {}
