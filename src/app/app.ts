
import { Component } from '@angular/core';
import { BilleteraComponent } from './billetera-component/billetera-component';

@Component({
  selector: 'app-root',
  imports: [BilleteraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'BilleteraDigital';
}
