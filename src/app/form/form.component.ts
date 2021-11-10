import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  val!: boolean;
  listValues: any = [
    {
      firstname: 'NEHA2',
      lastname: 'LODHI',
      email: 'rajpoot.neha225@gmail.com',
      phone: 8109897888,
      company: 'sddf',
      gender: 'female',
      _date: '2021-11-11',
      password: '123',
      confirmPassword: '123',
    },
    {
      firstname: 'neha2',
      lastname: 'raj',
      email: 'rajpootneha07@gmail.com',
      phone: 7772836629,
      company: 'GO',
      gender: 'female',
      _date: null,
      password: '1214585',
      confirmPassword: '123',
    },
  ];
  isAdd = true;
  updateIndex: number =-1;
  contactForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [
        '',
        Validators.required,
        Validators.email,
        Validators.pattern(
          "/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;"
        ),
      ],
      phone: ['', Validators.required, Validators.minLength(10)],
      company: ['', Validators.required],
      gender: ['', Validators.required],
      _date: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)],
    });
  }

  getRegistered() {
    if (this.contactForm.valid) {
      this.val = true;
      this.listValues.push(this.contactForm.value);
    }
    this.val = false;
    this.contactForm.reset();
  }
  
  clearForm() {
    this.contactForm.reset();
    this.isAdd = true;
  }
  deleteElement(elementIndex: number) {
    this.listValues.splice(elementIndex, 1);
  }
  edit(elementIndex: number) {
    this.isAdd = false;
    this.updateIndex = elementIndex;
    this.contactForm.patchValue(this.listValues[elementIndex]);
  }

  update() {
    const value = this.contactForm.value;
    this.listValues[this.updateIndex] = value;
    this.clearForm();
  }
}
