import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app', component: WelcomeComponent },
  {
    path: 'ships',
    loadChildren: './starships/starships.module#StarshipsModule'
  },
  { path: '', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
