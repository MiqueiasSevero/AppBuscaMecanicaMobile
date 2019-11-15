import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

    etapaCadastro: number = 1;

  constructor(public navCrtl:NavController) { }

  ngOnInit() {
  }

  recebeDados(etapaCadastro: number) {    
    if (etapaCadastro === 3) {
        
    }

    this.etapaCadastro++;
  }
  
  voltaDadosAnterior(etapaCadastro: number) {    
    

    this.etapaCadastro--;
  }

  ChamaCadastro() {
    this.navCrtl.navigateForward("/cadastrar");
  }
}
