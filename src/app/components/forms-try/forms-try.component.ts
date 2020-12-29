import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-try',
  templateUrl: './forms-try.component.html',
  styleUrls: ['./forms-try.component.css']
})
export class FormsTryComponent implements OnInit {

  reactiveForm: FormGroup;
  formSubmitted = false;
  formDone = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      id: ['', Validators.required],
      username: ['', [Validators.required, this.nameValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  get reactiveFormControls() { return this.reactiveForm.controls; }

  onSubmit() {
    this.formSubmitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    this.formDone = true;
    console.log(this.reactiveForm.value);
  }

  hasUnsavedData(): boolean {
    return !this.formSubmitted && this.reactiveForm.dirty
  }

  nameValidator(control: FormControl) {    
    return control.value === "arun" ? { nameReserved: true } : null;
  }

}
