import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private qrScanner: QRScanner,private navCtrl: NavController) { }

 
  
  
  
  ngOnInit() {
  }
  login(){
    this.navCtrl.navigateForward("/tabs");
  }
  ChamaCadastro() {
    this.navCtrl.navigateForward("/cadastrar");
  }
}
