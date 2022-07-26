import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AEspacioPipe } from 
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListaAutosComponent, EstrellasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
