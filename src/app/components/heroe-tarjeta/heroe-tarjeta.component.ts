import { Component, OnInit, Input, 
  Output, // Para enviar datos al padre
  EventEmitter // Es necesario para usar el Output
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Cuando se desea obtener datos de un componente "padre" se usa el decorador  @Input
  // lo que significa que ese dato puede venir desde otro componente
  @Input() heroe:any={};
  @Input() index:number;

  /*Se usa el decorador Output para enviar datos al padre
  la variable debe ser de tipo EventEmitter al cual se le debe definir el tipo de dato que recibira */
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // inicializar el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
