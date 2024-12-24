import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { AjouterlivreComponent } from './ajouterlivre/ajouterlivre.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { PageintrouvableComponent } from './pageintrouvable/pageintrouvable.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    AjouterlivreComponent,
    DetaillivreComponent,
    PageintrouvableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
