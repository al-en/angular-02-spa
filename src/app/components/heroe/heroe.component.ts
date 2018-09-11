import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any;
  //imgCasa:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['id']); 
      this.heroe = this._heroesService.getHeroe(params['id']);
      //if(this.heroe.casa=='marvel') this.imgCasa = '../assets';
    })
   }

  ngOnInit() {
  }

}
