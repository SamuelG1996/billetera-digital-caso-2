
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-nuevo-movimiento-component',
  imports: [],
  templateUrl: './nuevo-movimiento-component.html',
  styleUrl: './nuevo-movimiento-component.css'
})
export class NuevoMovimientoComponent {

  saldo = input<number>(0);

  movimientoValido = output<{ tipo: string, monto: number }>();

  tipo: string = 'Gasto';
  monto: number = 0;
  error: string = '';

  cambiarTipo(evento: Event) {
    this.tipo = (evento.target as HTMLSelectElement).value;
    this.error = '';
  }
  
  cambiarMonto(evento: Event) {
    this.monto = Number((evento.target as HTMLInputElement).value);

    this.error = this.monto <= 0
      ? 'Ingrese un monto válido.'
      : '';
  }

  registrar() {
    if (this.monto <= 0) {
      this.error = 'Ingrese un monto válido';
    } else if (this.tipo === 'Gasto' && this.monto > this.saldo()) {
      this.error = 'Saldo insuficiente para realizar el gasto';
    } else {
      this.error = '';

      this.movimientoValido.emit({
        tipo: this.tipo,
        monto: this.monto
      });

      this.monto = 0;
    }
  }
}
