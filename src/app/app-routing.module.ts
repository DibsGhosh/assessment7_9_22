import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCanDeactivateGuard } from './guards/personCanDeactivateGuard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'person', component:PersonComponent, canDeactivate:[PersonCanDeactivateGuard]},
  {path: '', redirectTo:'person', pathMatch:'full'},
  {path:"#", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
