import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';

import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'builder', component: FormComponent },
  { path: 'answers/:id', component: AnswersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
