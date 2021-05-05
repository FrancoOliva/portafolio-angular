import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: any) => {
      
    this.productos = resp;
      
      setTimeout(() => {
        this.cargando = false;
        
      }, 1000);
      // console.log(this.productos);
    })
  }

  getProducto(id: string){
    
    return this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/productos/'+id+'.json');
  }

  buscarProducto(termino: string){

    // filter nos permite barrer a el arreglo y nos trae un nuevo arreglo
    this.productosFiltrados = this.productos.filter( producto => {
      return true;

    })

    console.log(this.productosFiltrados);
  }
}
