import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-cadastro-geral',
  templateUrl: './cadastro-geral.page.html',
  styleUrls: ['./cadastro-geral.page.scss'],
})
export class CadastroGeralPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  cadastro_mecanico(){
    this.navCtrl.navigateForward("/cadastro-mecanico");
  }
  cadastro_usuario(){
    this.navCtrl.navigateForward("/cadastro-usuario");
  }
}
