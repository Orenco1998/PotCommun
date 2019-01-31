import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { SinglePotPage } from './single-pot/single-pot';
import { Pot } from '../../models/Pot';
import { PotsService } from '../../services/pots.service';
import { PotFormPage } from '../pot-form/pot-form';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-pots',
  templateUrl: 'pots.html'
})
export class PotsPage implements OnInit, OnDestroy{

  potsList: Pot[];
  potSubscription: Subscription;


  constructor(private modalCtrl: ModalController,
              private potsService: PotsService,
              private menuCtrl: MenuController,
              private navCtrl: NavController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController){

  }

  ngOnInit(){
    this.potSubscription = this.potsService.pots$.subscribe(
      (pots: Pot[]) => {
        this.potsList = pots;
        for(let i = 0; i<this.potsList.length; i++) {
          this.potsList[i].value = 0;
          for(let activity of this.potsList[i].activites){
            this.potsList[i].value += activity.value;
          }
        }
      }
    );
    this.potsService.emitPots();
  }

  onLoadPot(index: number){
    let modal = this.modalCtrl.create(SinglePotPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

  onNewPot() {
    this.navCtrl.push(PotFormPage);

}
onSaveList() {
  let loader = this.loadingCtrl.create({
    content: 'Sauvegarde en cours..'
  });
  loader.present();
  this.potsService.saveData().then(
    () => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Données sauvegardées',
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

onFetchList() {
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

  ngOnDestroy() {
    this.potSubscription.unsubscribe();
  }
}
