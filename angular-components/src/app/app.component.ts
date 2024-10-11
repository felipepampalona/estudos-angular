import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './components/menu.component';
import {Button} from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    Button,
    MenuComponent,
    RouterOutlet,
    EntryDataComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-components';
  buttonLabel: string = "Carrinho";
  buttonSecond: string = 'ADICIONAR A FAVORITOS';
}
