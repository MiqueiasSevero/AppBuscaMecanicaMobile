import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescricaoServicoPage } from './descricao-servico.page';

const routes: Routes = [
  {
    path: '',
    component: DescricaoServicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescricaoServicoPage]
})
export class DescricaoServicoPageModule {}
