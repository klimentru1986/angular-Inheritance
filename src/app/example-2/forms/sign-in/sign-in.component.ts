import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBase } from '../../base/form/form.base';
import { FormHelperService } from '../../services/form-helper.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../base/form/form.base.css', './sign-in.component.css']
})
export class SignInComponent extends FormBase {
  constructor(private fb: FormBuilder, formHelper: FormHelperService) {
    super(formHelper);
  }

  /** Submit формы */
  public onSubmit() {
    if (this.form.invalid) {
      this.markAllControlsAsTouched();
      return;
    }

    console.log('form is valid');
  }

  protected initForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
