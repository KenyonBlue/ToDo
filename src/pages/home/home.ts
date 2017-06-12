import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     tapped =0;
     pressed = 0;


onDidReset(resetType: string){
     switch (resetType) {
               case 'tap':
                    this.tapped = 0;
                    break;
               case 'press':
                    this.pressed = 0;
                    break;
               default:
                    
                    this.tapped = 0;
                    this.pressed = 0;
     }
}
     
onTap(){
     console.log('tapped');
     this.tapped++;
}
     
onPress(){
     console.log('pressed');
     this.pressed++;
}
didWin(){
     return this.tapped == 2 && this.pressed == 4;
}

//     -----------------------------------------------------------

//     UDEMY NOTES ON THE "REORDER LIST"
//     You need to set reorder  to true  (on <ion-list> ) and add a listener to the ionItemReorder  event. In the method executed on this event, you should simply use the reorderArray  method (which is provided by ionic-angular ) to reorder your array.
//     -----------------------------------------------------------
     items = ['LINEBACKERS', 'DEFENSIVE BACKS', 'D-LINE'];
     
     reorderItems(indexes){
        this.items = reorderArray(this.items, indexes);
    }
     
  constructor(public navCtrl: NavController) {}
      onClick() {
     this.navCtrl.push(AboutPage)
     }

}
