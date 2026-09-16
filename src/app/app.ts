import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Card,],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('product-preview-card-component-Angular');
}
