import { Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { PotsService } from '../../services/pots.service';
import { Pot } from '../../models/Pot';

@Component({
  selector: 'page-single-pot',
  templateUrl: 'single-pot.html',
})
export class SinglePotPage {

index: number;
pot: Pot;
  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private potsService: PotsService) {
  }

  ngOnInit() {
  this.index = this.navParams.get('index');
    this.pot = this.potsService.potsList[this.index];
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onTooglePot() {

  }

}
