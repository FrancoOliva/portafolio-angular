import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component' // nos permite realizar peticiones HTTP : GET PUT DELETE etc
// import { InfoPaginaService } from './services/info-pagina.service'; ---> comentamos el servicio porque lo vamos a utilizar de una forma diferente



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    
  ],

  /** acá se importan los modulos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  /** acá se importan los servicios */
  providers: [
    // InfoPaginaService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
