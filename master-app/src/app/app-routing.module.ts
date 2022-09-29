import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexogonalComponent } from './components/hexogonal/hexogonal.component';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'grid', component: HexogonalComponent },
  { path: 'info', component: InfoComponent },
  { path: '', component: MainComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
