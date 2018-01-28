import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBase } from '../../base/form/form-base.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../base/form/form-base.component.css', './sign-in.component.css']
})
export class SignInComponent extends FormBase {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  /** Submit формы */
  public onSubmit() {
    if (this.form.invalid) {
      this.markAllControlsAsTouched();
      return;
    }

    console.log('form is valid');
  }

  protected initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
