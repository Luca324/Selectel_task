import { Component, Input  } from '@angular/core';
import { Data } from '../interfaces/Data';

@Component({
  selector: 'app-checkbox-item',
  imports: [],
  templateUrl: './checkbox-item.component.html',
  styleUrl: './checkbox-item.component.css'
})
export class CheckboxItemComponent {
  @Input() onSelect!: (a: number) => void
  data: Data[] = []
  onCheck(event: Event): void {
    const value = +(event.target as HTMLInputElement).value
    console.log(value)
    this.onSelect(value)
  }
  
}
