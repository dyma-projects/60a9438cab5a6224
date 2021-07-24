import { AfterViewChecked, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component{

  @ViewChild('valueInput') valeurRef : ElementRef<HTMLInputElement>;
  public valeur: string;


  changeInput(){
    this.valeur = this.valeurRef.nativeElement.value;
  }

  

  


}
