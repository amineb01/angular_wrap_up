import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MustMatch } from './mustmatch';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmation: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required, Validators.minLength(6)]],
      zip: ['', [Validators.required, Validators.minLength(3)]],
      acceptTerms: [false, Validators.requiredTrue]
  },
  {
      validator: MustMatch('password', 'confirmation')
  }
  );
  }


    // convenience getter for easy access to form fields
    get f(): any  { return this.registerForm.controls; }
    onSubmit(): void  {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset(e): void  {
        this.submitted = false;
        this.registerForm.reset();
    }
}
