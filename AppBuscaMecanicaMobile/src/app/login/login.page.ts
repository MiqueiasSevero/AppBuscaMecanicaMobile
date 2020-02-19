import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = new FormGroup({
    email : new FormControl('', Validators.required),
    senha : new FormControl('', Validators.required)
  });

  constructor(private qrScanner: QRScanner,private navCtrl: NavController, private usuariosService:UsuariosService, private storage:Storage ) { }

 
  
  
  
  ngOnInit() {
  }
  async login(){
    //this.navCtrl.navigateForward("/tabs");
    let dados = this.formLogin.value;
    const formData = new FormData();
    formData.append("email", dados.email);
    formData.append("senha", dados.senha);
    this.usuariosService.login(formData).subscribe((data: any) => {
      console.log(data);

      if (data.sucesso) {
        this.storage.set("usuario", data.usuario).then(() => {
          this.navCtrl.navigateRoot("/tabs");
        });
      } else {
        //alert("Usuário não encontrado!");
       // this.presentToast();
      }
            
    });

  }
  ChamaCadastro() {
    this.navCtrl.navigateForward("/cadastro-geral");
  }
}
