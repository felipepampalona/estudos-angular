import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent  implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked{
  constructor() {
    console.log(`Constructor`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit`);
  }

}
