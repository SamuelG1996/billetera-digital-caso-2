
import { Component } from '@angular/core';
import { NuevoMovimientoComponent } from '../nuevo-movimiento-component/nuevo-movimiento-component';

@Component({
  selector: 'app-billetera-component',
  imports: [NuevoMovimientoComponent],
  templateUrl: './billetera-component.html',
  styleUrl: './billetera-component.css'
})
export class BilleteraComponent {

  saldo: number = 250;

  movimientos: { tipo: string, monto: number }[] = [];

  registrarMovimiento(movimiento: { tipo: string, monto: number }) {

    if (movimiento.tipo === 'Gasto') {
      this.saldo = this.saldo - movimiento.monto;
    } else {
      this.saldo = this.saldo + movimiento.monto;
    }

    this.movimientos.push(movimiento);
  }
}
