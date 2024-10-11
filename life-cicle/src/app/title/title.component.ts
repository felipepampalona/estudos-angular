import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  constructor() {}

  @Input() nome: string = '';
  ngOnInit() {
    return this.nome = `Olá ${this.nome}`;
  }

  ngOnChanges(): void {
      console.log("OnChanges");
  }
}
