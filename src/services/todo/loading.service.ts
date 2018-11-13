import {Injectable} from "@angular/core";
import {LoadingController} from "ionic-angular";

@Injectable()
export class Loading {

  private isActive = false;
  private loading;

  constructor(private loadingCtrl: LoadingController) {
  }

  show(){
    if(!this.isActive){
      this.isActive = true;
      this.loading = this.loadingCtrl.create({});
      this.loading.present();
    }
  }

  hide(){
    this.isActive = false;
    if(this.loading){
      this.loading.dismiss()
        .catch(() =>{
          console.warn('Loading: tried calling loading.hide, but loading is undefined.');
        });
    }
  }

}
