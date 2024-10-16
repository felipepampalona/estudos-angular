import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private service:PokemonService){}
  nome: string = "Charizard"
  attibutesTypes:string[] = ['FIRE', 'ROCK']
  imgLink:string = ""

}
