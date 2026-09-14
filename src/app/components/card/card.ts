import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
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
  imgSrc:string='assets/images/image-product-desktop.jpg';
}
