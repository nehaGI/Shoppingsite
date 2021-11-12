import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  er='';
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
  updateIndex: number;
  contactForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      company: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      _date: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.contactForm.get('firstname').statusChanges.subscribe((x) => {
      console.log('firstname status changes');
    });

    this.contactForm.get('firstname').valueChanges.subscribe((x) => {
      console.log('firstname value changed');
    });

    this.contactForm.statusChanges.subscribe((x) => {
      console.log('form status changes');
    });

    this.contactForm.valueChanges.subscribe((x) => {
      console.log('form value changed');
    });
    this.withEmitEvent();
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
  withEmitEvent() {
    this.contactForm.get('firstname').setValue('a', { onlySelf: true ,emitEvent: false });
  }

  getRegistered() {
    this.er=this.contactForm.getError('contactForm');
    if (this.contactForm.valid) {
      //this.val = true;
      this.listValues.push(this.contactForm.value);
    }
    // this.val = false;
    //this.contactForm.reset();
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
//https://stackblitz.com/edit/angular-ivy-jruk6d?file=src%2Fapp%2Fform%2Fform.component.ts