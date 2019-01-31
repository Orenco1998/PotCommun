import { Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { OnInit, Component } from "@angular/core";
import { PotsService } from "../../services/pots.service";
import { Pot } from "../../models/Pot";
import { NavController, LoadingController, ToastController } from "ionic-angular";

@Component({
  selector: 'page-pot-form',
  templateUrl: './pot-form.html'
})
export class PotFormPage implements OnInit {
  potForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private potService: PotsService,
              private potsService: PotsService,
              private navCtrl: NavController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.potForm = this.formBuilder.group( {
      name: ['', Validators.required],
      description: this.formBuilder.array([]),
      activite: this.formBuilder.array([]),
      membres: this.formBuilder.array([])

    });
  }
  getDescriptionArray() {
    return this.potForm.get('description') as FormArray;
  }
  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }
  onRemoveDesciption(index: number){
    this.getDescriptionArray().removeAt(index);
  }

  getMembreArray() {
    return this.potForm.get('membres') as FormArray;
  }
  onAddMembre() {
    let newControl = this.formBuilder.control('');
    this.getMembreArray().controls.push(newControl);
  }
  onRemoveMembre(index: number){
    this.getMembreArray().removeAt(index);
  }




  onSubmitForm() {
    let newPot = new Pot(this.potForm.get('name').value);
    for(let control of this.getDescriptionArray().controls)
     {
      newPot.description.push(control.value);
    };
    for(let control of this.getMembreArray().controls)
    {
        newPot.membres.push(control.value);
    };

    /*newPot.activité.nom.get('nom').value;
    newPot.activité.montant.get('montant').value;
    newPot.activité.personne.get('personne').value;*/



    this.potService.addPot(newPot);
    this.navCtrl.pop();


//insertion en bdd

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
}
