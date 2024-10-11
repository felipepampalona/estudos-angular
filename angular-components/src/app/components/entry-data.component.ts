import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  standalone: true,
  templateUrl: './entry-data.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './entry-data.component.css'
})

export class EntryDataComponent {
  placeholder:string = "email"
  placepass:string = "senha"
  color:string= "blue"
}
