import { Component,  } from '@angular/core';
import { NavParams, ViewController, AlertController, NavController } from 'ionic-angular';
import { Pot } from '../../../models/Pot';
import { PotsService } from '../../../services/pots.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-single-pot',
  templateUrl: 'single-pot.html',
})
export class SinglePotPage {

  index: number;
  pot: Pot;



  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private potsService: PotsService,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
            ) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.pot = this.potsService.potsList[this.index];
  }


  dismissModal(){
    this.viewCtrl.dismiss();
  }

    onTogglePot(){
    var textError;
    if (this.pot.isOpen){
      textError = "Cette action va fermer votre pot";
    }
    else{
      textError = "Cette action va (ré)ouvrir votre pot";
    }
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain de vouloir continuer?',
      subTitle: textError,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confimer',
          handler: () => {this.pot.isOpen = !this.pot.isOpen;}
        }
      ]
    });
    alert.present();

  }

/*  getActiviteArray() {
    return this.potForm.get('activite') as FormArray;
  }
  onAddActivite() {
    let newControl = this.formBuilder.control('');
    this.getActiviteArray().controls.push(newControl);
  }
  onRemoveActivite(index: number){
    this.getActiviteArray().removeAt(index);
  }*/


  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();

  }
/*  onSubmitFormm() {
    let newPot = new Pot(this.potForm.get('name').value);

    for(let control of this.getActiviteArray().controls)
    {
        newPot.activite.push(control.value);
    };
  }*/
}
