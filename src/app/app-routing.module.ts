import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitComponent } from './pages/split/split.component';
import { ConvertToBaseComponent } from './pages/convert-to-base/convert-to-base.component';

const routes: Routes = [
  { path: 'Division', component:  SplitComponent},
  { path: 'ConvertirBase', component: ConvertToBaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
