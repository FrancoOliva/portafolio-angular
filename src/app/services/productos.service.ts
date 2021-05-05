import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/equipo/productos_idx.json').subscribe( (resp: any) => {
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;
        
      }, 1000);
      console.log(this.productos);
    })
  }

  getProducto(id: string){
    return this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/equipo/productos/'+id+'.json');
  }
}
