import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { DetalleAutoGuard } from './shared/detalle-auto.guard';

@NgModule({
  declarations: [
    AppComponent, 
    ListaAutosComponent, 
    EstrellasComponent, 
    AEspacioPipe, 
    DetalleAutosComponent, 
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "autos/:id", component: DetalleAutosComponent, canActivate: [DetalleAutoGuard] },
      { path: "inicio", component: InicioComponent },
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
