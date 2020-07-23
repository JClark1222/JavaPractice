import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@NgModule({
  imports: [],
  exports: [ContactFormComponent],
  declarations: [],
  providers: []
})
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent {
  text = 'Contact Page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
submitted = false;

  constructor() {
    this.createForm();
   }

   createForm(): void {
     this.contactForm = new FormGroup({
       name: new FormControl(this.contact.name, [
         Validators.required,
         Validators.minLength(4)
       ]),
       email: new FormControl(this.contact.email, [
         Validators.required,
         Validators.email
       ]),
       text: new FormControl(this.contact.text, Validators.required)
     });
   }

   onSubmit(): void {
     this.submitted = true;
   }
}
