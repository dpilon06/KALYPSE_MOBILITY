import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Loading } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the TransfertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transfert',
  templateUrl: 'transfert.html',
})
export class TransfertPage {

  loading : Loading;

  masNumber:any;
  amountEuros:any;
  amountCredits:any;
  amountDefault:any;
  amountMax:any;

  constructor(public nav: NavController, private auth: AuthenticationProvider, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.masNumber = "123";
    this.amountEuros = "500.00";
    this.amountCredits = "500.00";
    this.amountDefault = "50.00";
    this.amountMax = "1 500";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfertPage');
  }

  private startTransfer(){
    this.showLoading();

    let toast = this.toastCtrl.create({
      message: 'Success transfer',
      duration: 3000
    });
    toast.present();

    toast.onDidDismiss(() => {
      this.loading.dismiss();
    });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
