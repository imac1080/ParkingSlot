import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
  
})
export class LoginPage {
  m_input_login: string = "";
  m_input_password: string = "";
  postData = {
    test: 'my content',
  };
  url = `https://parkingslots.herokuapp.com/user/allUsers`;
  json;

  constructor(private formBuilder: FormBuilder, 
    private alertCtrl: AlertController,
    private http: HttpClient) {
      this.http.post(this.url, this.postData).toPromise().then((data:any) => {
        console.log(data);
        console.log(data.json.test);
        this.json = JSON.stringify(data.json);
      });
    }
  showAlert() {
    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json.test);
      this.json = JSON.stringify(data.json);
    });
    const alert = this.alertCtrl.create({
    message: 'Usuario: '+this.m_input_login+ ' \n Contraseña: '+this.m_input_password,
    subHeader: 'Datos Login:',
    buttons: ['OK']}).then(alert=> alert.present());

   
  }
  
}

