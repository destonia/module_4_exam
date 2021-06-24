import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './awesome/edit/edit.component';
import { HomeComponent } from './awesome/home/home.component';

const routes: Routes = [
    {
      path: 'awesomes',
      component: HomeComponent
    },
    {
      path: 'awesomes/:id/edit',
      component: EditComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  }
