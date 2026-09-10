import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {
  category: string = 'Parfume'
  title:string = 'Gabrielle Essence Eu De Parfume';
  description:string ='A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.';
  oldPrice:number = 169.99;
  newPrice:number = 149.99;
}
