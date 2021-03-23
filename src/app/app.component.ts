import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonajes: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(
    private personajesService: PersonajesService
  ) {
    // if (localStorage.getItem('pagina_actual')) {
    //   this.paginaActual = JSON.parse(localStorage.getItem('pagina_actual'));
    // } else {
    //   this.paginaActual = 1;
    // }
  }

  ngOnInit() {
    this.personajesService.getAll(this.paginaActual)
      .then(response => {
        this.arrPersonajes = response['results'];
        // this.paginaActual = response.result; // lo mismo de arriba
        // this.numPaginas = response['info']['pages'];
        this.numPaginas = response.info.pages;
        console.log(this.paginaActual, this.arrPersonajes, this.numPaginas);
        
      })
      .catch(error => console.log(error));
  }

  // async onClick(siguiente) {
  //   if (siguiente) {
  //     this.paginaActual++;
  //   } else {
  //     this.paginaActual--;
  //   }
  
  //   const { results } = await this.personajesService.getAll(this.paginaActual);
  //   this.arrPersonajes = results;

  //   localStorage.setItem('pagina_actual', JSON.stringify(this.paginaActual));
  // }

}
