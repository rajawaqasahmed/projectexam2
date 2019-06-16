import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneValidator } from './validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', phoneValidator),
    comment: new FormControl('', Validators.required)
  })

  constructor(protected router: Router) {}
  
  onSubmit() {
    alert("Thanks for filling up the form. " + JSON.stringify(this.contactForm.value));
    this.router.navigate(['/']);
  }


}
