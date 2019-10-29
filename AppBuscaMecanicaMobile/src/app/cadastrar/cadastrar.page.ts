import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(public navCrtl:NavController) { }

  ngOnInit() {
  }
  ChamaCadastro() {
    this.navCrtl.navigateForward("/cadastrar");
  }
}
