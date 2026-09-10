import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';
import { RouterOutlet } from '@angular/router';
// import { NotFound } from './components/not-found/not-found';

@Component({
  imports: [Card, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('product-preview-card-component-Angular');
}
