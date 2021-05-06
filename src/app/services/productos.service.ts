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

    // una promesa es algo asincrono nuevo del ecmascript6
    // "yo necesito ejecutar cierto código hasta que esto se resuelva"
    // las promesas adentro tienen un call back que reciben 2 argumentos
    return new Promise<void> ( ( resolve, reject ) => { 

      this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: any) => {
      
      this.productos = resp;
      this.cargando = false;

      resolve();
        
        
      })

      } )

    
  }

  getProducto(id: string){
    
    return this.http.get('https://portafolio-angular-e320d-default-rtdb.firebaseio.com/productos/'+id+'.json');
  }

  buscarProducto(termino: string){

    if ( this.productos.length === 0){
      // cargar productos
      this.cargarProductos().then(()=>{
        // este código se ejecuta después de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );
      })
    } else {
      //aplicar filtro
      this.filtrarProductos( termino );
    }

    
  }

  private filtrarProductos( termino:string){
    // console.log(this.productos);
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase(); // lo pasamos a minúsculas
    

    this.productos.forEach( (producto) => {
      const tituloLower = producto.titulo.toLocaleLowerCase();

      if(producto.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        // si la categoría coincide agregamos el producto a productosFiltrados
        this.productosFiltrados.push( producto );
      }
    });
  }
}
