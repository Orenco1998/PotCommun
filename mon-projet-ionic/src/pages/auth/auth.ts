import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { NavParams, MenuController, NavController, ToastController, LoadingController } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';
import { PotsService } from "../../services/pots.service";

@Component({
  selector : 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {
  mode: string
  authForm: FormGroup
  errorMessage: string;

  constructor(private authService: AuthService,
              private navParams: NavParams,
              private menuCtrl: MenuController,
              private formBuilder: FormBuilder,
              private navCtrl: NavController,
              private toastCtrl: ToastController,
              private potsService: PotsService,
              private loadingCtrl: LoadingController) {

              }
    ngOnInit() {
this.mode = this.navParams.get('mode');
this.initForm();

    }
    onToggleMenu(){
      this.menuCtrl.open();
    }
    initForm() {
      this.authForm = this.formBuilder.group( {
        email: ['', [Validators.required, Validators.email]],
        password: ['',Validators.required]
      });
    }
    newUser(){

      if(this.mode === 'new')
      {
        this.navCtrl.push(AuthPage, {mode: 'connect'});
      }
    }
    onSubmitForm() {
      const email= this.authForm.get('email').value;
      const password= this.authForm.get('password').value;
      if (this.mode === 'new') {
        this.authService.signUpUser(email,password).then(
          () => {
            this.navCtrl.setRoot(TabsPage)
          }
        ).catch(
          (error) => {
            this.errorMessage = error;
          }
        );
      }else if(this.mode === 'connect') {
        this.authService.signInUser(email, password).then(
          () => {
            this.navCtrl.setRoot(TabsPage);
          }
        ).catch(
          (error) => {
            this.errorMessage = error;
          }
        );
      }

      // Recuperation des données en base de données

      let loader = this.loadingCtrl.create({
        content: 'Récuperation en cours..'
      });
      loader.present();
      this.potsService.retrieveData().then(
        () => {
          loader.dismiss();
          this.toastCtrl.create({
            message: 'Données récupérées !',
            duration:3000,
            position: 'botttom'
          }).present();
        }
      ).catch(
        (error) => {
          loader.dismiss();
          this.toastCtrl.create({
            message: error,
            duration:3000,
            position : 'bottom'
          }).present();
        }
      );
    }
}
