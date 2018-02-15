import { Component } from '@angular/core';
import { FormBase } from '../../base/form/form.base';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormHelperService } from '../../services/form-helper.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../base/form/form.base.css', './sign-up.component.css']
})
export class SignUpComponent extends FormBase {
  /** Список регионов для селекта */
  public regionsList: string[];

  constructor(private fb: FormBuilder, formHelper: FormHelperService) {
    super(formHelper);
  }

  protected initDefaultValues(): void {
    this.regionsList = ['Белоруссия', 'Казахстан', 'Россия', 'Украина'];
  }

  /** Submit формы */
  public onSubmit() {
    if (this.form.invalid) {
      this.markAllControlsAsTouched();
      return;
    }

    console.log('form is valid');
  }

  /** Инициализация формы */
  protected initForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      region: [null, [Validators.required]],
      acceptLicense: [false, [Validators.requiredTrue]]
    });
  }
}
