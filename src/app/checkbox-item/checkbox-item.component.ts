import { Component, Input  } from '@angular/core';
import { Data } from '../interfaces/Data';

@Component({
  selector: 'app-checkbox-item',
  imports: [],
  templateUrl: './checkbox-item.component.html',
  styleUrl: './checkbox-item.component.css'
})
export class CheckboxItemComponent {
  @Input() item!: Data
  @Input() increaseValue!: (a: number) => void
  @Input() decreaseValue!: (a: number) => void

  data: Data[] = []
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = +checkbox.value

    if (checkbox.checked) {
      this.increaseValue(value)
    } else {
      this.decreaseValue(value)
    }
  }
}
