import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[];

  constructor(private _heroesService:HeroesService,
              private router:Router
    ) {
    // console.log("constructor Heroes");
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  // Para redireccionar a la pantalla de Heroe (./components/heroe/heroe.component -> HeroeComponent)
  // el primer elemento del arreglo es la ruta a donde se va a direccionar: '/heroe' (segun el archivo de rutas)
  // el segundo elemento es el parametro que se envia a la ruta: idx
  verHeroe(idx:number){
    //this.router.navigate(['/heroe',idx]);
  }

}


