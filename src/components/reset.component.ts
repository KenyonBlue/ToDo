import { Component, EventEmitter, Output } from '@angular/core';   

@Component({
          selector: 'app-reset',
     template:`
     <ion-row>
          <ion-col>
               <button ion-button color="danger" small block (click)="onReset('all')"> Reset All</button>
               <button ion-button color="danger" small block (tap)="onReset('taps')"> Reset Taps</button>
               <button ion-button color="danger" small block (press)="onReset('press')"> Reset Press</button>
          </ion-col>
     </ion-row>
     `
          })
export class ResetComponent {
     @Output() didReset = new EventEmitter<string>();
onReset(type: string){
     this.didReset.emit(type);
     
}
          
}