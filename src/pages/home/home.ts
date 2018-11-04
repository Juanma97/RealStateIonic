import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireObject, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viviendas: Observable<any[]>;
  

  constructor(db2: AngularFireDatabase) {
    const listRef = db2.list('viviendas');
    this.viviendas = db2.list('viviendas').valueChanges();
    console.log(this.viviendas);
  }

}
