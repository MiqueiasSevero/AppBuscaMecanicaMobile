import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastro-mecanico.page.html',
  styleUrls: ['./cadastro-mecanico.page.scss'],
})
export class CadastrarPage implements OnInit {
      statusTrFs:boolean = true;
      etapaCadastro: number = 1;
      formCadastroCliente = new FormGroup({
      placaCadastro: new FormControl('', Validators.required),
      nomeCadastro: new FormControl('', Validators.required),
      sNomeCadastro: new FormControl('', Validators.required),
      senhaCadastro: new FormControl('', Validators.required),
      confirmaSenhaCadastro: new FormControl('', Validators.required),
      cnpjOficina: new FormControl('', Validators.required),
      cepOficina: new FormControl('', Validators.required),
      nomeOficina: new FormControl('', Validators.required),
      telefoneCadastro : new FormControl('', Validators.required),
      celularCadastro : new FormControl('', Validators.required),
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

  constructor(public navCrtl:NavController, public sanitizer:DomSanitizer ) { }

  ngOnInit() {
  }
  
  mostarDadosCad(){
    
  }
   


  recebeDados() {    
    this.etapaCadastro++;
  }
  
  voltaDadosAnterior() {    
    this.etapaCadastro--;
  }

  vaiParaEtapa(etapa: number) {
    this.etapaCadastro = etapa;
    this.statusTrFs = false;
  }

  ChamaCadastro() {
    this.navCrtl.navigateForward("/cadastrar");
  }
}
