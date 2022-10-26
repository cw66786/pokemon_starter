import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OneSelectedComponent } from './one-selected/one-selected.component';

const routes: Routes = [
  {path: 'one',component: OneSelectedComponent},
  {path: 'home', component: HomepageComponent},
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
