import {Component, OnInit, Input} from '@angular/core';
import {NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgSwitch, NgFor, NgSwitchCase, NgSwitchDefault],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = "diretor"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.pop()
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }

}
