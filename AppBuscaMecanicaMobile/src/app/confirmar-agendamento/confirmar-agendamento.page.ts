import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-agendamento',
  templateUrl: './confirmar-agendamento.page.html',
  styleUrls: ['./confirmar-agendamento.page.scss'],
})
export class ConfirmarAgendamentoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  confirmar(){
    this.navCtrl.navigateForward("/tabs");
  }
  cancelar(){
    this.navCtrl.navigateForward("/tabs");
  }
  
}
