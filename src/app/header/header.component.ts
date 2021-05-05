import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
                                                    // navegación interna entre componentes
  constructor( public _servicio: InfoPaginaService, private router:Router ) { }

  ngOnInit(): void {
  }

  buscarProducto(evento: any){

    let termino = evento.target.value;
    

    if( termino.lenght < 1){
      return;
    }

    this.router.navigate(['/search', termino]);

    // console.log(evento.target.value);
  }

}
