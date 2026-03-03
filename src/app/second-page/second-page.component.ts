import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';
import { CheckboxItemComponent } from '../checkbox-item/checkbox-item.component';
import { Data } from '../interfaces/Data';

@Component({
  selector: 'app-second-page',
  imports: [NgFor, CheckboxItemComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  data: Data[] = []
  sum : number = 0
  
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData().reduce((acc: Data[], item: Data) => {
      item.selected = false
      acc.push(item)
      return acc
    }, [])
  }
increaseValue(val: number) {
  this.sum += val
}
  decreaseValue(val: number) {
  this.sum -= val
    
  }
}
