import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-buscar',
  templateUrl: './heroe-buscar.component.html',
  styles: []
})
export class HeroeBuscarComponent implements OnInit {

  heroes:Heroe[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private router:Router) {
    this.activatedRoute.params.subscribe(args => {
      this.termino = args['termino'];
      this.heroes = _heroeService.buscarHeroes(args['termino']);
    });
  }

  ngOnInit() {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
