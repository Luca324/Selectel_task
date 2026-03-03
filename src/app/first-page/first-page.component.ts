import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-first-page',
  imports: [RouterLink, MenuItemComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

}
