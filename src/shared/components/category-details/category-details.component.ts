import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe } from '@angular/common';
import { restrictedWords } from '../../validators/restricted-words.validator';


@Component({
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSliderModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatIconModule, MatRadioModule, ReactiveFormsModule, DatePipe],
    templateUrl: './category-details.component.html',
    styleUrl: './category-details.component.scss',
    providers: [provideNativeDateAdapter()]
})
export class CategoryDetailsComponent implements OnInit {
  contactForm = this.formBuilder.nonNullable.group({
    id: '',
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: '',
    dateOfBirth: <Date | null>null,
    ranking: '',
    typeOfData: <boolean | null>null,
    phone: this.formBuilder.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
    }),
    address: this.formBuilder.nonNullable.group({
      addr: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    }),
    email: this.formBuilder.nonNullable.group({
      emailAddr: '',
      emailType: ''
    }),
    notes: ['', restrictedWords(['One', 'Two'])]
  })

  phones = [
    { name: 'Home', value: 'home' },
    { name: 'Work', value: 'work' },
    { name: 'Mobile', value: 'mobile' }
  ];
  email = [
    { name: '1', value: 'Personal' },
    { name: '2', value: 'Work' },
  ];

  countries = [
    { name: 'US', value: 'United States' },
    { name: 'IN', value: 'India' }
  ];

  states = [
    { name: 'NC', value: 'North Carolina' },
    { name: 'GA', value: 'Gergia' }
  ];

  get firstName() {
    return this.contactForm.controls.firstName;
  }

  IdParam?: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.IdParam = this.route.snapshot.paramMap.get('id');
    this.patchValues();
  }

  patchValues(): void {
    this.contactForm.controls.firstName.setValue("Santosh"),
      this.contactForm.controls.lastName.setValue('Bujala'),

      this.contactForm.controls.dateOfBirth.setValue(new Date(1985, 6, 8)),
      this.contactForm.controls.ranking.setValue('40'),
      this.contactForm.controls.typeOfData.setValue(true),
      this.contactForm.controls.phone.controls.phoneNumber.setValue('386-373-3745'),
      this.contactForm.controls.phone.controls.phoneType.setValue('mobile'),
      this.contactForm.controls.email.controls.emailAddr.setValue('test@test.co'),
      this.contactForm.controls.email.controls.emailType.setValue('1'),
      this.contactForm.controls.address.controls.addr.setValue('123 Test Ave'),
      this.contactForm.controls.address.controls.city.setValue('Charlotte'),
      this.contactForm.controls.address.controls.state.setValue('NC'),
      this.contactForm.controls.address.controls.zipcode.setValue('28262'),
      this.contactForm.controls.address.controls.country.setValue('US')
  }
  backButton(): void {
    this.router.navigate(['/welcome'])
  }
  saveDetails(): void {
    console.log(this.contactForm.controls.dateOfBirth.value)
  }
}
