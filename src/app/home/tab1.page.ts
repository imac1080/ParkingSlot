import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {
  m_input_login: string = "";
  m_input_password: string = "";
  postData = {
    test: 'my content',
  };
  url = 'http://localhost:3000/user/allUsers';
  json;

  constructor(private formBuilder: FormBuilder, 
    private alertCtrl: AlertController,
    private http: HttpClient) {
      this.http.get(this.url).toPromise().then((data:any) => {
        console.log(data);
        //console.log(data.json.test);
        this.json = JSON.stringify(data.json);
      });
    }
  showAlert() {
    this.http.get(this.url).toPromise().then((data:any) => {
      console.log(data);
      //console.log(data.json.test);
      this.json = JSON.stringify(data.json);
    });
    const alert = this.alertCtrl.create({
    message: 'Usuario: '+this.m_input_login+ ' \n Contraseña: '+this.m_input_password,
    subHeader: 'Datos Login:',
    buttons: ['OK']}).then(alert=> alert.present());

   
  }
  
}

