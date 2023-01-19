import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant9',
  templateUrl: './composant9.component.html',
  styleUrls: ['./composant9.component.css']
})
export class Composant9Component implements OnInit{
  myVariableDisplay = 'Une variable à afficher';
  digit = 10000000;
  anObject = {nom : 'Wayne', prenom : 'Bruce', ville: 'Gotham City'};
  constructor() {  }

  ngOnInit() {
  }

  unClic(){
    console.log("Cliqué");
  }
  
}
