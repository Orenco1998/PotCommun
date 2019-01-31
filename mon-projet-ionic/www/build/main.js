webpackJsonp([0],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pots_pots__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.potsPage = __WEBPACK_IMPORTED_MODULE_1__pots_pots__["a" /* PotsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/tabs/tabs.html"*/'<ion-tabs class="tabs-icon-top tabs-color-active-energized tabs-striped tabs-background-positive">\n\n    <ion-tab [root]="potsPage" tabTitle="Pots" tabIcon="bulb"></ion-tab>\n\n  <ion-tab [root]="settingsPage" tabTitle="Réglages" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_pot_single_pot__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pots_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pot_form_pot_form__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PotsPage = /** @class */ (function () {
    function PotsPage(modalCtrl, potsService, menuCtrl, navCtrl, toastCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.potsService = potsService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    PotsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.potSubscription = this.potsService.pots$.subscribe(function (pots) {
            _this.potsList = pots;
        });
        this.potsService.emitPots();
    };
    PotsPage.prototype.onLoadPot = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__single_pot_single_pot__["a" /* SinglePotPage */], { index: index });
        modal.present();
    };
    PotsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    PotsPage.prototype.onNewPot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pot_form_pot_form__["a" /* PotFormPage */]);
    };
    PotsPage.prototype.onSaveList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours..'
        });
        loader.present();
        this.potsService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données sauvegardées',
                duration: 3000,
                position: 'botttom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    PotsPage.prototype.onFetchList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Récuperation en cours..'
        });
        loader.present();
        this.potsService.retrieveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données récupérées !',
                duration: 3000,
                position: 'botttom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    PotsPage.prototype.ngOnDestroy = function () {
        this.potSubscription.unsubscribe();
    };
    PotsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pots',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/pots/pots.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Pots</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <button ion-item *ngFor="let pot of potsList; let i = index" (click)="onLoadPot(i)">\n\n  <ion-icon name="cart" [color]="pot.isOpen ? \'secondary\': \'danger\'"></ion-icon>\n\n    {{pot.name}}\n\n    <p>Montant: {{pot.value}}€</p>\n\n  </button>\n\n</ion-list>\n\n<button ion-button full (click)="onNewPot()">Nouveau pot</button>\n\n<ion-card>\n\n  <ion-card-header>Données</ion-card-header>\n\n  <ion-card-content>\n\n    <button ion-button block outline (click)="onSaveList()">Enregistrer</button>\n\n    <button ion-button block outline (click)="onFetchList()">Récupérer</button>\n\n\n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n  <p>Bas de page</p>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/pots/pots.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_pots_service__["a" /* PotsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PotsPage);
    return PotsPage;
}());

//# sourceMappingURL=pots.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pots_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SinglePotPage = /** @class */ (function () {
    function SinglePotPage(navParams, viewCtrl, potsService, alertCtrl, navCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.potsService = potsService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    SinglePotPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.pot = this.potsService.potsList[this.index];
    };
    SinglePotPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SinglePotPage.prototype.onTogglePot = function () {
        var _this = this;
        var textError;
        if (this.pot.isOpen) {
            textError = "Cette action va fermer votre pot";
        }
        else {
            textError = "Cette action va (ré)ouvrir votre pot";
        }
        var alert = this.alertCtrl.create({
            title: 'Êtes-vous certain de vouloir continuer?',
            subTitle: textError,
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confimer',
                    handler: function () { _this.pot.isOpen = !_this.pot.isOpen; }
                }
            ]
        });
        alert.present();
    };
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
    SinglePotPage.prototype.onSubmitForm = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    SinglePotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-pot',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/pots/single-pot/single-pot.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>{{pot.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card [ngClass]="{\'is-on\': pot.isOpen, \'is-off\': !pot.isOpen}">\n    <ion-card-header>Montant total du pot</ion-card-header>\n    <ion-card-content>\n      <p>{{pot.value}}€</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card [ngClass]="{\'is-on\': pot.isOpen, \'is-off\': !pot.isOpen}">\n    <ion-card-header>Description</ion-card-header>\n    <ion-card-content>\n      <p *ngFor="let line of pot.description">{{line}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card [ngClass]="{\'is-on\': pot.isOpen, \'is-off\': !pot.isOpen}">\n    <ion-card-header>Membres</ion-card-header>\n    <ion-card-content>\n      <p *ngFor="let line of pot.membres">{{line}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card [ngClass]="{\'is-on\': pot.isOpen, \'is-off\': !pot.isOpen}">\n    <ion-card-header>Activité</ion-card-header>\n    <ion-card-content>\n      <p *ngFor="let line of pot.activites; let i = index"> -{{i+1}}: {{ line.name }}:\n                                            {{line.value }}€ <br>\n                                            Membre:  {{ line.membre }}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button\n                  full\n                  color="danger"\n                  [disabled]="!pot.isOpen"\n                  (click)="onTogglePot()">Fermer\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button\n                  full\n                  color="secondary"\n                  [disabled]="pot.isOpen"\n                  (click)="onTogglePot()">Ouvrir\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!--<form [formGroup]="potForm">\n    <ion-list>\n    <ion-item-divider>Activité</ion-item-divider>\n      <div formArrayName="activite">\n        <ion-item *ngFor="let control of getActiviteArray().controls; let i = index">\n          <ion-icon item-start\n            name="remove-circle"\n            color="danger"\n            (click)="onRemoveActivite(i)">\n          </ion-icon>\n          <ion-input [formControlName]="i" placeholder="{{i+1}}."></ion-input>\n      </ion-item>\n    </div>\n  </ion-list>\n  <button ion-button full (click)="onAddActivite()">Ajouter une Activite</button>\n\n  <button ion-button full color="secondary" (click)="onSubmitFormm()">Enregistrer</button>\n\n</form>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/pots/single-pot/single-pot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_pots_service__["a" /* PotsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SinglePotPage);
    return SinglePotPage;
}());

//# sourceMappingURL=single-pot.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pots_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Pot__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PotFormPage = /** @class */ (function () {
    function PotFormPage(formBuilder, potService, potsService, navCtrl, toastCtrl, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.potService = potService;
        this.potsService = potsService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    PotFormPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    PotFormPage.prototype.initForm = function () {
        this.potForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            description: this.formBuilder.array([]),
            activite: this.formBuilder.array([]),
            membres: this.formBuilder.array([])
        });
    };
    PotFormPage.prototype.getDescriptionArray = function () {
        return this.potForm.get('description');
    };
    PotFormPage.prototype.onAddDescription = function () {
        var newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
    };
    PotFormPage.prototype.onRemoveDesciption = function (index) {
        this.getDescriptionArray().removeAt(index);
    };
    PotFormPage.prototype.getMembreArray = function () {
        return this.potForm.get('membres');
    };
    PotFormPage.prototype.onAddMembre = function () {
        var newControl = this.formBuilder.control('');
        this.getMembreArray().controls.push(newControl);
    };
    PotFormPage.prototype.onRemoveMembre = function (index) {
        this.getMembreArray().removeAt(index);
    };
    PotFormPage.prototype.onSubmitForm = function () {
        var _this = this;
        var newPot = new __WEBPACK_IMPORTED_MODULE_3__models_Pot__["a" /* Pot */](this.potForm.get('name').value);
        for (var _i = 0, _a = this.getDescriptionArray().controls; _i < _a.length; _i++) {
            var control = _a[_i];
            newPot.description.push(control.value);
        }
        ;
        for (var _b = 0, _c = this.getMembreArray().controls; _b < _c.length; _b++) {
            var control = _c[_b];
            newPot.membres.push(control.value);
        }
        ;
        /*newPot.activité.nom.get('nom').value;
        newPot.activité.montant.get('montant').value;
        newPot.activité.personne.get('personne').value;*/
        this.potService.addPot(newPot);
        this.navCtrl.pop();
        //insertion en bdd
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours..'
        });
        loader.present();
        this.potsService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données sauvegardées',
                duration: 3000,
                position: 'botttom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    PotFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pot-form',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/pot-form/pot-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nouveau Pot</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="potForm">\n    <ion-list>\n      <ion-item-divider>Informations</ion-item-divider>\n        <ion-item>\n          <ion-label>Nom</ion-label>\n            <ion-input placeholder="Pot" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item-divider>Description</ion-item-divider>\n        <div formArrayName="description">\n          <ion-item *ngFor="let control of getDescriptionArray().controls; let i = index">\n            <ion-icon item-start\n              name="remove-circle"\n              color="danger"\n              (click)="onRemoveDesciption(i)">\n            </ion-icon>\n            <ion-input [formControlName]="i" placeholder="{{i+1}}."></ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n    <button ion-button full (click)="onAddDescription()">Ajouter une description</button>\n\n    <ion-list>\n\n      <ion-item-divider>Membres</ion-item-divider>\n        <div formArrayName="membres">\n          <ion-item *ngFor="let control of getMembreArray().controls; let i = index">\n            <ion-icon item-start\n              name="remove-circle"\n              color="danger"\n              (click)="onRemoveMembre(i)">\n            </ion-icon>\n            <ion-input [formControlName]="i" placeholder="{{i+1}}."></ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n    <button ion-button full (click)="onAddMembre()">Ajouter un membre</button>\n\n    <button ion-button full color="secondary" (click)="onSubmitForm()">Enregistrer</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/pot-form/pot-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_pots_service__["a" /* PotsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pots_service__["a" /* PotsService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */]])
    ], PotFormPage);
    return PotFormPage;
}());

//# sourceMappingURL=pot-form.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(alertCtrl, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
    }
    SettingsPage.prototype.onToggleLights = function () {
        var alert = this.alertCtrl.create({
            title: 'Etes-vous certain(e) de vouloir continuer?',
            subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison',
            buttons: [
                {
                    text: 'annuler',
                    role: 'cancel'
                },
                {
                    text: 'confirmer',
                    handler: function () { return console.log('Confirmé !'); }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Réglages</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button icon-start (click)="onToggleLights()">\n\n    <ion-icon name="power"></ion-icon>\n\n    Lumières\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = /** @class */ (function () {
    function OptionsPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    OptionsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/options/options.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="onToggleMenu()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Options</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>Modifiez les options de l\'application ici !</p>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/options/options.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pots_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthPage = /** @class */ (function () {
    function AuthPage(authService, navParams, menuCtrl, formBuilder, navCtrl, toastCtrl, potsService, loadingCtrl) {
        this.authService = authService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.potsService = potsService;
        this.loadingCtrl = loadingCtrl;
    }
    AuthPage_1 = AuthPage;
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.newUser = function () {
        if (this.mode === 'new') {
            this.navCtrl.push(AuthPage_1, { mode: 'connect' });
        }
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
        // Recuperation des données en base de données
        var loader = this.loadingCtrl.create({
            content: 'Récuperation en cours..'
        });
        loader.present();
        this.potsService.retrieveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données récupérées !',
                duration: 3000,
                position: 'botttom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    AuthPage = AuthPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/auth/auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Adresse mail</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Mot de passe</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n  <span ion-text color="danger">{{errorMessage}}</span>\n  <button ion-button full (click)="newUser()"*ngIf="mode === \'new\'">Se connecter</button>\n\n\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__services_pots_service__["a" /* PotsService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], AuthPage);
    return AuthPage;
    var AuthPage_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pots_pots__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pots_single_pot_single_pot__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pots_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_options_options__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pot_form_pot_form__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pots_pots__["a" /* PotsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pots_single_pot_single_pot__["a" /* SinglePotPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pot_form_pot_form__["a" /* PotFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pots_pots__["a" /* PotsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pots_single_pot_single_pot__["a" /* SinglePotPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pot_form_pot_form__["a" /* PotFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_pots_service__["a" /* PotsService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_options_options__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.optionsPage = __WEBPACK_IMPORTED_MODULE_6__pages_options_options__["a" /* OptionsPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            var config = {
                apiKey: "AIzaSyAwFKSAbkpjOsY5IKnl8HOp53llKU0QZqM",
                authDomain: "openclassrooms-ionic-90688.firebaseapp.com",
                databaseURL: "https://openclassrooms-ionic-90688.firebaseio.com",
                projectId: "openclassrooms-ionic-90688",
                storageBucket: "openclassrooms-ionic-90688.appspot.com",
                messagingSenderId: "283256887970"
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */], { mode: 'new' });
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut();
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n  <button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n    <ion-icon name="power"></ion-icon>\n    Pots\n  </button>\n  <button ion-item icon-start (click)="onNavigate(optionsPage)" *ngIf="isAuth">\n    <ion-icon name="options"></ion-icon>\n    Options\n  </button>\n  <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n    <ion-icon name="person-add"></ion-icon>\n    Nouvel utilisateur\n  </button>\n  <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n  <ion-icon name="person"></ion-icon>\n  Connexion\n</button>\n<button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n  <ion-icon name="exit"></ion-icon>\n  Déconnexion\n</button>\n</ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activite; });
var Activite = /** @class */ (function () {
    function Activite(name, value) {
        this.name = name;
        this.value = value;
        this.membre = '';
    }
    return Activite;
}());

//# sourceMappingURL=Activite.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pot; });
var Pot = /** @class */ (function () {
    function Pot(name) {
        this.name = name;
        this.membres = [];
        this.description = [];
        this.activites = [];
        this.value = 0;
        this.isOpen = true;
    }
    return Pot;
}());

//# sourceMappingURL=Pot.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pots_pots__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.potsPage = __WEBPACK_IMPORTED_MODULE_1__pots_pots__["a" /* PotsPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/orencohen/mon-projet-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page d\'accueil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button [navPush]="potsPage">Pots</button>\n</ion-content>\n'/*ion-inline-end:"/Users/orencohen/mon-projet-ionic/src/pages/home/home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Activite__ = __webpack_require__(376);



var PotsService = /** @class */ (function () {
    function PotsService() {
        this.pots$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.potsList = [
            {
                membres: [
                    'orencohen2652@gmail.com',
                    'danco2652@gmail.com',
                    'antoineyvan@gmail.com'
                ],
                name: 'Barcelone',
                description: [
                    'pot commun pour vacances a Barcelone'
                ],
                activites: [
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Hotel', 20),
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Avion', 50),
                ],
                value: 0,
                isOpen: true
            },
            {
                membres: [
                    'orencohen2652@gmail.com',
                    'danco2652@gmail.com',
                    'antoineyvan@gmail.com'
                ],
                name: 'New York',
                description: [
                    'pot commun pour vacances a New York'
                ],
                activites: [
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Hotel', 20),
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Avion', 50),
                ],
                value: 0,
                isOpen: true
            },
            {
                membres: [
                    'orencohen2652@gmail.com',
                    'danco2652@gmail.com',
                    'antoineyvan@gmail.com'
                ],
                name: 'Los Angeles',
                description: [
                    'pot commun pour vacances a Los Angeles'
                ],
                activites: [
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Hotel', 20),
                    new __WEBPACK_IMPORTED_MODULE_2__models_Activite__["a" /* Activite */]('Avion', 50),
                ],
                value: 0,
                isOpen: true
            }
        ];
    }
    PotsService.prototype.addPot = function (pot) {
        this.potsList.push(pot);
        this.emitPots();
    };
    PotsService.prototype.emitPots = function () {
        this.pots$.next(this.potsList.slice());
    };
    PotsService.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('pots').set(_this.potsList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    PotsService.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('pots').once('value').then(function (data) {
                _this.potsList = data.val();
                _this.emitPots();
                resolve('Données récupérées avec succès !');
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return PotsService;
}());

//# sourceMappingURL=pots.service.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map