import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { PageintrouvableComponent } from './pageintrouvable/pageintrouvable.component';
const ROUTES = [
  {path:'accueil',component:LivreComponent},
  {path:'ajouter',component:AjouterlivreComponent},
  {path:'accueil/:id',component:DetaillivreComponent},
  {path:'**',component:PageintrouvableComponent}
];

@NgModule({
  declarations :[],
  imports: [CommonModule,
  RouterModule.forRoot(ROUTES),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
