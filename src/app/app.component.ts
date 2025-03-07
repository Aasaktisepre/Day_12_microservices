import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { MoneconversionPipe } from './moneconversion.pipe';
import { RupeetodollarPipe } from './rupeetodollar.pipe';
import { CharAtIndexPipe } from './char-at-index.pipe';
import { HighlighttextDirective } from './highlighttext.directive';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-root',
  imports: [CommonModule,ReversePipe,MoneconversionPipe,RupeetodollarPipe,CharAtIndexPipe,HighlighttextDirective,FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  a = {
    name: "agagaadg",
    number: 534643634
  };
  selectedDay: string = '';

  selectDay(day: string): void {
    this.selectedDay = day;
  }


  title :string ="angular"
  date = new Date();
  money = 2000;
  decimals = 12.567987;
  jsonData = {
    name9: 'Mamba',
    age:35,
    city:"Philadelphia"
  }
  arrs = [1,2,3,4,5]
}
