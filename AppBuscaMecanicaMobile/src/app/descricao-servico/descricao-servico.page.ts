import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-descricao-servico',
  templateUrl: './descricao-servico.page.html',
  styleUrls: ['./descricao-servico.page.scss'],
})
export class DescricaoServicoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

   agendar(){
    this.navCtrl.navigateForward("/confirmar-agendamento");
  }


}
