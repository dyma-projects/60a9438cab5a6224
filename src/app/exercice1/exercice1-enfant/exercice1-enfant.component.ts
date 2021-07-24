import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() compteurEmitter: EventEmitter<number> = new EventEmitter();


  changeCompteur(change: 'increment' | 'decrement'){
    let countCrement = 0;
    if(change === 'increment'){
      countCrement = 1;
    }else{
      countCrement = -1;
    }
    this.compteurEmitter.emit(countCrement);
  }

  constructor() { }

  ngOnInit() {
  }

}
