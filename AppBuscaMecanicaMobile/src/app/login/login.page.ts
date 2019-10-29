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

 /* PegaUsuario(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

          alert(text);
         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
      
     } else {
       
     }
  })
  .catch((e: any) => console.log('Error is', e));

  }*/
  
  
  
  ngOnInit() {
  }
  
  ChamaCadastro() {
    this.navCtrl.navigateForward("/cadastrar");
  }
}
