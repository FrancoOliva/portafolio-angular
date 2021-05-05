import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion | undefined;
  id: string = '';

  constructor( private route: ActivatedRoute, public productoService: ProductosService ) { }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => { // el subscribe va a estar pendiente de todos los cambios que sucedan con los parametros del url
      // console.log(parametros['id']);

      this.productoService.getProducto(parametros['id']).subscribe( (producto:any)  => {
        
        this.id = parametros['id'];
        this.producto = producto;
        
      })
    })
  }

}
