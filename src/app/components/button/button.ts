import { Component } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  src :string = 'assets/images/icon-cart.svg'
  btnText:string = 'Add to Cart';
}
