import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo2';

  //propedades

  resultado:string = '';

  valor1:number = this.generarAleatorio();
  valor2:number = this.generarAleatorio();
  valor3:number = this.generarAleatorio();


  //metodo que genera un numero aleatorio entre uno y seis

  generarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
  }

  //funcion que hace la tirada y erifica el resultado

  tirarDados(){

    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    // comparamoos si los 3 son iguales

    if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado = ' FELICIDADES, GANASTE !!!';
    } else{
      this.resultado = ' Nimodo, para la otra';
    }
    
  }
}
