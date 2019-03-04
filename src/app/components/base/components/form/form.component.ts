import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fullName: string = '';
  company: string = '';
  email: string = '';

  fullNames: Observable<any[]>;
  companies: Observable<any[]>;
  emails: Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.emails = db.list('emails').valueChanges();
  }

  ngOnInit() {
  }

  submitForm() {
    //const info = `Nombre completo ${this.fullName} Empresa ${this.work} Correo electrónico: ${this.email}`;
    //alert(info);
    this.db.list('/leads').push({ name: this.fullName, company: this.company, email: this.email });
    this.fullName = '';
    this.company = '';
    this.email = '';
  }

}
