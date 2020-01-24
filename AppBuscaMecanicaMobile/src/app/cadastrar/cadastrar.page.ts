import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

    etapaCadastro: number = 1;
    formCadastroCliente = new FormGroup({
      placaCadastro: new FormControl('', Validators.required),
      nomeCadastro: new FormControl('', Validators.required),
      sNomeCadastro: new FormControl('', Validators.required),
      senhaCadastro: new FormControl('', Validators.required),
      confirmaSenhaCadastro: new FormControl('', Validators.required),
      cepCadastro: new FormControl('', Validators.required),
      ruaCadastro: new FormControl('', Validators.required),
      bairroCadastro: new FormControl('', Validators.required),
      cidadeCadastro: new FormControl('', Validators.required),
      estadoCadastro: new FormControl('', Validators.required),
      numeroCadastro: new FormControl('', Validators.required),              
      marcaCadastro: new FormControl('', Validators.required),
      modeloCadastro: new FormControl('', Validators.required),
      anoFabCadastro: new FormControl('', Validators.required),
      anoModCadastro: new FormControl('', Validators.required)
     
    });

  constructor(public navCrtl:NavController) { }

  ngOnInit() {
  }
  
  mostarDadosCad(){
    let form = this.formCadastroCliente.value;
    console.log(form);
  }
   


  recebeDados() {    
    this.etapaCadastro++;
  }
  
  voltaDadosAnterior() {    
    this.etapaCadastro--;
  }

  vaiParaEtapa(etapa: number) {
    this.etapaCadastro = etapa;
  }

  ChamaCadastro() {
    this.navCrtl.navigateForward("/cadastrar");
  }
}
