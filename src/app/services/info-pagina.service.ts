import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any []= [];

  constructor( private http: HttpClient ) {     
    this.cargarInfo();
    this.cargarEquipo();
  }

  
  private cargarInfo(){ // colocamos la petición Http que ya tenemos

    // leer archivo JSON -> necesitamos un modulo que nos permita hacer peticiones http
    // GET
    this.http.get('assets/data/data-pagina.json').subscribe( (resp:InfoPagina) => {
      this.cargada = true;
      this.info = resp;     
    })    
  }

  private cargarEquipo(){
    this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/equipo.json').subscribe( (respuesta:any) =>{
    
      this.equipo = respuesta;
    
    
    })
  }
}
