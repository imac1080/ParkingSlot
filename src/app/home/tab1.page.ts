import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {
  m_input_login: string = "";
  m_input_password: string = "";
  constructor(private formBuilder: FormBuilder, 
    private alertCtrl: AlertController) {}
  showAlert() {
    const alert = this.alertCtrl.create({
    message: 'Usuario: '+this.m_input_login+ ' \n Contraseña: '+this.m_input_password,
    subHeader: 'Datos Login:',
    buttons: ['OK']}).then(alert=> alert.present());
  }
}

